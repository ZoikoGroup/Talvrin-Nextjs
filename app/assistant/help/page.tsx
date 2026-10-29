import HelpExperience from "@/components/assistant/help/HelpExperience";
import {
  HELP_ANCHORS,
  HELP_ARTICLES,
  HELP_CORPUS_VERSION,
  getHelpArticle,
  helpCapabilities,
  searchHelp,
} from "@/lib/assistant/help-data";

export const metadata = {
  title: "Help and support",
};

export default async function HelpPage({
  searchParams,
}: {
  searchParams: Promise<{ article?: string; q?: string }>;
}) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q.slice(0, 200) : "";
  const article =
    typeof params.article === "string" ? getHelpArticle(params.article) : undefined;
  return (
    <HelpExperience
      initialArticle={article ?? null}
      initialQuery={query}
      initialResults={query ? searchHelp(query) : HELP_ARTICLES}
      corpusVersion={HELP_CORPUS_VERSION}
      initialCapabilities={helpCapabilities()}
      anchors={HELP_ANCHORS}
    />
  );
}
