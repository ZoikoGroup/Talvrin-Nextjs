"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  FileSearch,
  LifeBuoy,
  Lock,
  Search,
  ShieldCheck,
  Sparkles,
  WifiOff,
} from "lucide-react";
import type { HelpArticle, HelpCapabilities } from "@/lib/assistant/types";
import { apiJson, ApiError } from "@/lib/assistant/client";
import { Pill } from "@/components/assistant/ui/Badge";
import { Button, ButtonLink } from "@/components/assistant/ui/Button";
import { EmptyState, Skeleton } from "@/components/assistant/ui/Misc";
import { Input } from "@/components/assistant/ui/Field";
import { PageIntro, PageShell, Panel } from "@/components/assistant/ui/Panel";

const CATEGORY_ICONS: Record<string, typeof BookOpen> = {
  "Research basics": BookOpen,
  "Evidence & citations": FileSearch,
  "Data rights": ShieldCheck,
  "Sessions & access": Lock,
  Troubleshooting: LifeBuoy,
  Policies: CheckCircle2,
};

type SearchState = "ready" | "loading" | "error";

const LANGUAGE_LABEL: Record<string, string> = {
  "en-US": "English (US)",
};

function articleHref(id: string) {
  return `/assistant/help?article=${encodeURIComponent(id)}`;
}

export default function HelpExperience({
  initialArticle,
  initialQuery,
  initialResults,
  corpusVersion,
  initialCapabilities,
  anchors = {},
}: {
  initialArticle: HelpArticle | null;
  initialQuery: string;
  initialResults: HelpArticle[];
  corpusVersion: string;
  initialCapabilities: HelpCapabilities;
  anchors?: Record<string, string>;
}) {
  const [capabilities, setCapabilities] = useState(initialCapabilities);
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<string>("All");
  const [results, setResults] = useState<HelpArticle[]>(initialResults);
  const [searchState, setSearchState] = useState<SearchState>("ready");
  const [active, setActive] = useState<HelpArticle | null>(initialArticle);
  const [announcement, setAnnouncement] = useState("");
  const [retryTick, setRetryTick] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const firstSearch = useRef(true);
  const focusArticle = useRef(false);

  const intakeAvailable = capabilities.intake.research_cases === "AVAILABLE";
  const generalSupport =
    capabilities.contact_routes.find((route) => route.id === "GENERAL_SUPPORT") ??
    capabilities.contact_routes[0];

  // Re-check public capabilities so a disabled intake hides the report CTA
  // without a reload (AC-14). The server-rendered value is the fallback.
  useEffect(() => {
    let cancelled = false;
    apiJson<{ capabilities: HelpCapabilities }>(
      "/api/assistant/help/capabilities"
    )
      .then((response) => {
        if (!cancelled) setCapabilities(response.capabilities);
      })
      .catch(() => {
        // Keep the server-rendered capabilities.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Debounced search against the approved public corpus (HLP-03).
  useEffect(() => {
    if (firstSearch.current) {
      firstSearch.current = false;
      return;
    }
    let cancelled = false;
    setSearchState("loading");
    const timer = window.setTimeout(() => {
      const params = new URLSearchParams();
      if (query.trim()) params.set("q", query.trim());
      if (category !== "All") params.set("category", category);
      apiJson<{ articles: HelpArticle[] }>(
        `/api/assistant/help${params.toString() ? `?${params.toString()}` : ""}`
      )
        .then((response) => {
          if (cancelled) return;
          setResults(response.articles);
          setSearchState("ready");
          const count = response.articles.length;
          setAnnouncement(
            query.trim()
              ? `${count} help article${count === 1 ? "" : "s"} match ${query.trim()}.`
              : `${count} help article${count === 1 ? "" : "s"}${category === "All" ? "" : ` in ${category}`}.`
          );
        })
        .catch((error: unknown) => {
          if (cancelled) return;
          setSearchState("error");
          setAnnouncement(
            error instanceof ApiError && error.status === 429
              ? "Help search is busy. Try again in a moment."
              : "Help search is unavailable."
          );
        });
    }, 250);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [query, category, retryTick]);

  const loadArticle = useCallback(async (id: string) => {
    try {
      const response = await apiJson<{ article: HelpArticle }>(
        `/api/assistant/help?article=${encodeURIComponent(id)}`
      );
      focusArticle.current = true;
      setActive(response.article);
    } catch {
      setAnnouncement("That help article is not available.");
    }
  }, []);

  // Legacy in-page anchors used by other screens (#coverage, #methods…).
  useEffect(() => {
    if (initialArticle) return;
    const hash = window.location.hash.replace(/^#/, "");
    const id = hash ? anchors[hash] : undefined;
    if (id) void loadArticle(id);
  }, [anchors, initialArticle, loadArticle]);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (active) {
      url.searchParams.set("article", active.id);
      url.hash = "";
    } else {
      url.searchParams.delete("article");
    }
    window.history.replaceState(null, "", url);
    if (active && focusArticle.current) {
      focusArticle.current = false;
      headingRef.current?.focus();
    }
  }, [active]);

  function openArticle(article: HelpArticle, opener?: HTMLElement | null) {
    openerRef.current = opener ?? null;
    focusArticle.current = true;
    setActive(article);
  }

  function closeArticle() {
    setActive(null);
    const opener = openerRef.current;
    openerRef.current = null;
    requestAnimationFrame(() => {
      if (opener && document.contains(opener)) opener.focus();
      else searchRef.current?.focus();
    });
  }

  function chooseCategory(next: string) {
    setCategory(next);
    setActive(null);
  }

  const related = active
    ? results
        .filter(
          (article) =>
            article.category === active.category && article.id !== active.id
        )
        .slice(0, 3)
    : [];

  const reportRoute = (
    <Panel className="p-4">
      <div className="flex items-center gap-2">
        <Sparkles aria-hidden="true" className="h-4 w-4 text-iris-soft" />
        <h2 className="text-[12px] font-semibold text-platinum">
          Report a research concern
        </h2>
      </div>
      {intakeAvailable ? (
        <>
          <p className="mt-1.5 text-[12px] leading-5 text-haze">
            Your report will be reviewed. Submitting it does not update an
            answer or its sources. Start from a citation to attach the answer
            and claim references read-only.
          </p>
          <ButtonLink href="/assistant/report" size="sm" className="mt-3 w-full">
            Report a research issue
          </ButtonLink>
          <Link
            href="/assistant"
            className="mt-2 inline-flex min-h-11 items-center text-[12px] font-medium text-iris-soft hover:text-white"
          >
            Start a research answer
          </Link>
        </>
      ) : (
        <>
          <p className="mt-1.5 text-[12px] leading-5 text-haze">
            Report intake is not available right now. Use the contact route
            instead; nothing is submitted from this page.
          </p>
          {generalSupport ? (
            <ButtonLink
              href={generalSupport.href}
              size="sm"
              variant="secondary"
              className="mt-3 w-full"
            >
              {generalSupport.label}
            </ButtonLink>
          ) : null}
        </>
      )}
    </Panel>
  );

  return (
    <PageShell width="wide" className="pt-8">
      <PageIntro
        eyebrow="WF-08 · help, support and research escalation"
        title="Help and research support"
        lead="Find answers about Talvrin research, sources, and account access. If a figure or citation looks wrong, route it to a human review queue. The assistant cannot confirm an allegation, correct a record directly or promise a response time."
        meta={
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="ok" dot>
              Public help · no account required
            </Pill>
            <Pill>
              {capabilities.principal === "GUEST"
                ? "Guest · public corpus only"
                : "Signed in"}
            </Pill>
          </div>
        }
      />

      <Panel className="mb-4 p-3 sm:p-4" busy={searchState === "loading"}>
        <form
          role="search"
          onSubmit={(event) => event.preventDefault()}
          aria-label="Public help"
        >
          <label
            htmlFor="help-search"
            className="mb-1 block text-[11px] font-semibold text-platinum"
          >
            Search public help
          </label>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-haze"
            />
            <Input
              ref={searchRef}
              id="help-search"
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActive(null);
              }}
              placeholder="Try “citations”, “withheld”, “sign in” or “export”"
              className="pl-9"
              autoComplete="off"
              maxLength={200}
              aria-describedby="help-search-note"
            />
          </div>
          <p
            id="help-search-note"
            className="mt-1.5 text-[11px] leading-4 text-haze/75"
          >
            Searches only approved, published public help articles (corpus{" "}
            {corpusVersion}). No private research, account record or licensed
            value is in the index.
          </p>
        </form>
        <p className="sr-only" role="status" aria-live="polite">
          {searchState === "loading" ? "Searching help…" : announcement}
        </p>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)_300px] lg:items-start">
        <nav className="min-w-0 lg:sticky lg:top-20" aria-labelledby="help-topics-heading">
          <Panel className="p-3">
            <h2
              id="help-topics-heading"
              className="px-1 font-mono text-[11px] uppercase tracking-[0.14em] text-haze/70"
            >
              Browse by topic
            </h2>
            <ul className="mt-2 space-y-0.5">
              {["All", ...capabilities.topics].map((item) => {
                const Icon = CATEGORY_ICONS[item] ?? BookOpen;
                const selected = category === item;
                return (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => chooseCategory(item)}
                      aria-pressed={selected}
                      className={
                        selected
                          ? "flex min-h-11 w-full items-center gap-2 rounded-lg bg-iris/[0.09] px-2.5 text-left text-[11px] font-semibold text-iris-soft"
                          : "flex min-h-11 w-full items-center gap-2 rounded-lg px-2.5 text-left text-[11px] text-haze hover:bg-midnight-soft/60 hover:text-platinum"
                      }
                    >
                      {item === "All" ? null : (
                        <Icon aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                      )}
                      <span className="min-w-0 flex-1">
                        {item === "All" ? "All topics" : item}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Panel>
        </nav>

        <div id="help-content" className="min-w-0">
          {active ? (
            <Panel as="article" className="p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeArticle}
                  icon={<ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />}
                  className="!min-h-11 !px-2"
                >
                  Back to results
                </Button>
                <Pill tone="iris">{active.category}</Pill>
                <Pill>{active.revision}</Pill>
                <Pill>{LANGUAGE_LABEL[active.language] ?? active.language}</Pill>
                <Pill>Last updated {active.updatedAt}</Pill>
              </div>

              <h2
                ref={headingRef}
                tabIndex={-1}
                className="mt-3 text-xl font-semibold tracking-[-0.01em] text-platinum focus:outline-none focus-visible:ring-2 focus-visible:ring-iris/40"
              >
                {active.title}
              </h2>
              <p className="mt-1.5 text-[13px] leading-6 text-haze">
                {active.summary}
              </p>

              <div className="mt-4 space-y-3 border-t border-as-line/60 pt-4">
                {active.body.map((paragraph, index) => (
                  <p key={index} className="text-[12px] leading-7 text-platinum/85">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-as-line/70 bg-midnight-soft/40 p-3.5">
                <p className="flex items-start gap-2 text-[12px] leading-5 text-haze">
                  <Lock aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-haze/70" />
                  Help articles describe behavior; they are not evidence for a
                  market claim. For the evidence behind an answer, open a
                  citation in the Evidence Inspector.
                </p>
              </div>

              {related.length ? (
                <div className="mt-4 border-t border-as-line/60 pt-3">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-haze/70">
                    Related in {active.category}
                  </h3>
                  <ul className="mt-1.5 divide-y divide-as-line/50">
                    {related.map((article) => (
                      <li key={article.id}>
                        <a
                          href={articleHref(article.id)}
                          onClick={(event) => {
                            event.preventDefault();
                            openArticle(article, event.currentTarget);
                          }}
                          className="flex min-h-11 w-full items-center justify-between gap-2 py-1.5 text-left"
                        >
                          <span className="text-[11px] font-medium text-platinum/90 hover:text-white">
                            {article.title}
                          </span>
                          <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-haze/60" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Panel>
          ) : (
            <>
              <div className="flex items-center justify-between gap-2 px-1">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-haze/70">
                  {query.trim() ? "Search results" : category === "All" ? "All public topics" : category}
                  {searchState === "ready" ? ` · ${results.length}` : ""}
                </h2>
              </div>

              {searchState === "loading" ? (
                <div className="mt-2 space-y-2" aria-hidden="true">
                  <p className="text-[12px] text-haze">Searching approved help…</p>
                  {[0, 1, 2].map((item) => (
                    <Skeleton key={item} className="h-24 rounded-2xl" />
                  ))}
                </div>
              ) : searchState === "error" ? (
                <div className="mt-2">
                  <EmptyState
                    icon={<WifiOff aria-hidden="true" className="h-7 w-7" />}
                    title="Help search is unavailable"
                    description="We could not reach the approved help index, so no results are shown rather than an out-of-date list. Your search terms are kept. Try again, or use the contact route."
                    action={
                      <div className="flex flex-wrap justify-center gap-1.5">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => setRetryTick((tick) => tick + 1)}
                        >
                          Try again
                        </Button>
                        {generalSupport ? (
                          <ButtonLink href={generalSupport.href} variant="ghost" size="sm">
                            {generalSupport.label}
                          </ButtonLink>
                        ) : null}
                      </div>
                    }
                  />
                </div>
              ) : results.length ? (
                <ul className="mt-2 space-y-2">
                  {results.map((article) => {
                    const Icon = CATEGORY_ICONS[article.category] ?? BookOpen;
                    return (
                      <li key={article.id}>
                        <a
                          href={articleHref(article.id)}
                          onClick={(event) => {
                            event.preventDefault();
                            openArticle(article, event.currentTarget);
                          }}
                          className="group block w-full rounded-2xl border border-as-line bg-as-panel/60 p-4 text-left transition-colors hover:border-iris/40 hover:bg-iris/[0.03]"
                        >
                          <span className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-as-line/70 bg-midnight-soft/70 text-iris-soft">
                              <Icon aria-hidden="true" className="h-4 w-4" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="flex flex-wrap items-center gap-1.5">
                                <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-iris-soft/85">
                                  {article.category}
                                </span>
                                <span className="font-mono text-[11px] text-haze/70">
                                  {article.revision} ·{" "}
                                  {LANGUAGE_LABEL[article.language] ?? article.language} ·
                                  updated {article.updatedAt}
                                </span>
                              </span>
                              <span className="mt-1 block text-[13px] font-semibold leading-5 text-platinum group-hover:text-white">
                                {article.title}
                              </span>
                              <span className="mt-1 block text-[11px] leading-5 text-haze">
                                {article.summary}
                              </span>
                              <span className="mt-1 block break-all font-mono text-[11px] text-haze/60">
                                {articleHref(article.id)}
                              </span>
                            </span>
                            <ArrowUpRight
                              aria-hidden="true"
                              className="mt-1 h-4 w-4 shrink-0 text-haze/50 group-hover:text-iris-soft"
                            />
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="mt-2">
                  <EmptyState
                    icon={<CircleHelp aria-hidden="true" className="h-7 w-7" />}
                    title="No approved article matches"
                    description={
                      <>
                        No published help article matches
                        {query.trim() ? <> “{query.trim()}”</> : " this topic"}.
                        Your terms are kept. Try a broader phrase, browse a
                        topic, or use a support route.
                      </>
                    }
                    action={
                      <div className="flex flex-wrap justify-center gap-1.5">
                        {category !== "All" ? (
                          <Button variant="secondary" size="sm" onClick={() => chooseCategory("All")}>
                            Search all topics
                          </Button>
                        ) : null}
                        {generalSupport ? (
                          <ButtonLink href={generalSupport.href} variant="ghost" size="sm">
                            {generalSupport.label}
                          </ButtonLink>
                        ) : null}
                      </div>
                    }
                  />
                </div>
              )}
            </>
          )}
        </div>

        <aside className="flex min-w-0 flex-col gap-3" aria-label="Support routes">
          {reportRoute}

          <Panel className="p-4">
            <h2 className="text-[12px] font-semibold text-platinum">
              Contact and protected routes
            </h2>
            <ul className="mt-2 space-y-0.5">
              {capabilities.contact_routes.map((route) => (
                <li key={route.id}>
                  <Link
                    href={route.href}
                    className="flex min-h-11 items-center gap-2 rounded-lg px-1.5 py-1.5 hover:bg-midnight-soft/60"
                  >
                    <ChevronRight aria-hidden="true" className="h-3 w-3 shrink-0 text-haze/60" />
                    <span className="min-w-0">
                      <span className="block text-[12px] font-medium text-platinum">
                        {route.label}
                      </span>
                      <span className="block text-[11px] leading-4 text-haze/75">
                        {route.detail}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[11px] leading-4 text-haze/70">
              No live chat, phone line, callback or response time is offered.
              Account-specific issues need a verified support channel.
            </p>
          </Panel>

          <Panel className="p-4">
            <h2 className="text-[12px] font-semibold text-platinum">Support lanes</h2>
            <div className="mt-2 space-y-2">
              <div>
                <p className="text-[12px] font-semibold text-platinum/90">Public and guest</p>
                <p className="mt-0.5 text-[12px] leading-5 text-haze">
                  Public help, research report intake
                  {intakeAvailable ? "" : " (currently unavailable)"},
                  accessibility route and protected security/privacy route.
                </p>
              </div>
              <div className="border-t border-as-line/60 pt-2">
                <p className="flex items-center gap-1 text-[12px] font-semibold text-platinum/90">
                  Account features
                  <Lock aria-hidden="true" className="h-3 w-3 text-haze" />
                </p>
                <p className="mt-0.5 text-[12px] leading-5 text-haze">
                  Saved-research links and case tracking require a real,
                  verified support service. Neither is configured in this build.
                </p>
              </div>
            </div>
          </Panel>

          <Panel className="p-4">
            <h2 className="text-[12px] font-semibold text-platinum">What not to send</h2>
            <p className="mt-1.5 text-[12px] leading-5 text-haze">
              Do not include passwords, account credentials, or confidential
              portfolio details. Attachments are not accepted through public
              intake.
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              <Pill tone="warn">No attachments</Pill>
              <Pill tone="warn">No advice</Pill>
              <Pill tone="warn">No response-time promise</Pill>
            </div>
          </Panel>

          <p className="font-mono text-[11px] uppercase leading-4 tracking-[0.1em] text-haze/60">
            WF-08 demo fixtures · copy {capabilities.copy_revision} · proposed
            support routes pending operational sign-off
          </p>
        </aside>
      </div>
    </PageShell>
  );
}
