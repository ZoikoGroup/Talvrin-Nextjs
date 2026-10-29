import {
  HELP_CATEGORIES,
  HELP_CORPUS_VERSION,
  getHelpArticle,
  searchHelp,
} from "@/lib/assistant/help-data";
import { apiError, json, rateLimit } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/**
 * GET /public-help/articles?q= equivalent (WF-08 §10, HLP-03, AC-02/03).
 * Searches only the versioned, approved public corpus. `article` returns a
 * single published article; unknown ids get a 404 without suggestions.
 */
export async function GET(request: Request) {
  const limited = rateLimit(request, "help-search", 60);
  if (limited) return limited;

  const params = new URL(request.url).searchParams;
  const query = (params.get("q") ?? "").slice(0, 200);
  const articleId = params.get("article");
  const category = params.get("category");

  if (articleId) {
    const article = getHelpArticle(articleId);
    if (!article) {
      return apiError(
        "REFERENCE_NOT_AVAILABLE",
        "That help article is not available.",
        404,
        { retryable: false }
      );
    }
    return json({
      article: {
        ...article,
        destination: `/assistant/help?article=${article.id}`,
      },
      corpus_version: HELP_CORPUS_VERSION,
    });
  }

  const base = searchHelp(query);
  const articles = (
    category && HELP_CATEGORIES.includes(category)
      ? base.filter((article) => article.category === category)
      : base
  ).map((article) => ({
    ...article,
    destination: `/assistant/help?article=${article.id}`,
  }));

  return json({
    articles,
    categories: HELP_CATEGORIES,
    query,
    corpus_version: HELP_CORPUS_VERSION,
  });
}
