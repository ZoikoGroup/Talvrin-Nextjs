"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Info, ShieldCheck } from "lucide-react";
import type { ConfigResponse, ScopeId } from "@/lib/assistant/types";
import { loadConfig, takeDraft } from "@/lib/assistant/client";
import { Skeleton } from "@/components/assistant/ui/Misc";
import ResearchComposer, {
  type CoverageChoice,
} from "@/components/assistant/entry/ResearchComposer";

const EVIDENCE_STEPS = [
  {
    label: "Source",
    body: "Find eligible primary and licensed records",
  },
  {
    label: "Verify",
    body: "Check dates, lineage and usage rights",
  },
  {
    label: "Calculate",
    body: "Use deterministic, versioned methods",
  },
  {
    label: "Explain",
    body: "Show only evidenced claims and gaps",
  },
];

const FALLBACK_LIMITS = { questionMin: 8, questionMax: 2000 };

type ConfigState =
  | { status: "loading" }
  | { status: "ready"; config: ConfigResponse }
  | { status: "error" };

type Starter = ConfigResponse["starterPrompts"][number];

export default function EntryExperience() {
  const [question, setQuestion] = useState("");
  const [coverage, setCoverage] = useState<CoverageChoice>("all");
  const [configState, setConfigState] = useState<ConfigState>({
    status: "loading",
  });
  const [pendingScope, setPendingScope] = useState<string | null>(null);

  const fetchConfig = useCallback(() => {
    setConfigState({ status: "loading" });
    loadConfig()
      .then((config) => setConfigState({ status: "ready", config }))
      .catch(() => setConfigState({ status: "error" }));
  }, []);

  // I01: GET public config before enabling anything that depends on it.
  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  useEffect(() => {
    // Drafts arrive through tab-scoped storage, never the URL (WF-01 §6.1).
    const draft = takeDraft();
    const prefill = draft?.question;
    if (prefill) setQuestion(prefill.slice(0, FALLBACK_LIMITS.questionMax));
    if (draft?.scopeId) setPendingScope(draft.scopeId);
    if (prefill) {
      window.setTimeout(() => {
        document.getElementById("research-question")?.focus();
      }, 120);
    }
  }, []);

  const config = configState.status === "ready" ? configState.config : null;
  const supportedScopes = config
    ? config.scopes
        .filter((scope) => scope.supported)
        .map((scope) => ({ id: scope.id, label: scope.label }))
    : [];
  const limits = config?.limits ?? FALLBACK_LIMITS;

  // A draft scope is only applied once the server confirms it is eligible.
  useEffect(() => {
    if (!config || !pendingScope) return;
    if (
      config.scopes.some((scope) => scope.supported && scope.id === pendingScope)
    ) {
      setCoverage(pendingScope as ScopeId);
    }
    setPendingScope(null);
  }, [config, pendingScope]);

  let unavailableReason: string | null = null;
  if (configState.status === "loading") {
    unavailableReason = "Loading available coverage…";
  } else if (configState.status === "error") {
    unavailableReason = "Coverage currently unavailable. Sending is paused.";
  } else if (config && !config.publicResearchEnabled) {
    unavailableReason = "Research is temporarily unavailable.";
  } else if (config && supportedScopes.length === 0) {
    unavailableReason = "Coverage currently unavailable. Sending is paused.";
  }

  function starterDisabledReason(prompt: Starter): string | null {
    if (!config) return "Coverage currently unavailable";
    if (!config.publicResearchEnabled) return "Research is temporarily unavailable";
    if (prompt.intentId && !config.allowedIntents.includes(prompt.intentId)) {
      return "Not available in current coverage";
    }
    if (!supportedScopes.some((scope) => scope.id === prompt.scopeId)) {
      return "Not available in current coverage";
    }
    return null;
  }

  function chooseStarter(prompt: Starter) {
    // I03: populate and focus; never send a request on card click.
    const text = prompt.question.slice(0, limits.questionMax);
    setQuestion(text);
    setCoverage(prompt.scopeId);
    window.requestAnimationFrame(() => {
      const field = document.getElementById(
        "research-question"
      ) as HTMLTextAreaElement | null;
      field?.focus();
      field?.setSelectionRange(text.length, text.length);
    });
  }

  const legalHref = config?.legalNoticeHref ?? "/legal/ai-terms";

  return (
    <div className="mx-auto w-full max-w-[1600px] px-5 pb-16 pt-8 sm:px-8 lg:px-[68px]">
      <div className="grid gap-12 xl:grid-cols-[minmax(0,1038px)_300px] xl:gap-16">
        <div className="min-w-0">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-haze">
            Talvrin / Public research
          </p>

          <h1 className="mt-5 max-w-[760px] text-balance text-[2rem] font-semibold leading-[1.18] tracking-[-0.035em] text-platinum sm:text-[2.75rem] sm:leading-[1.3]">
            Start with a question.
            <span className="block">Follow the evidence.</span>
          </h1>

          <p className="mt-4 max-w-[760px] text-[16px] leading-7 text-haze sm:text-[17px] sm:leading-8">
            Source-linked financial research from authoritative records, with
            transparent gaps and limits.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-as-line bg-as-panel/55 px-3.5 py-2 font-mono text-[12px] uppercase tracking-[0.12em] text-haze">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-ok"
              />
              Public mode · No account access
            </span>
            {config?.demo ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-warn/40 bg-warn/[0.07] px-3.5 py-2 font-mono text-[12px] uppercase tracking-[0.12em] text-warn">
                Demo · synthetic data
              </span>
            ) : null}
          </div>

          {configState.status === "loading" ? (
            <ComposerSkeleton />
          ) : (
            <>
              {configState.status === "error" ? (
                <div className="mt-6 rounded-xl border border-warn/40 bg-warn/[0.07] px-4 py-3">
                  <p className="text-[15px] font-semibold text-platinum">
                    Coverage currently unavailable
                  </p>
                  <p className="mt-1 text-[14px] leading-6 text-haze">
                    We couldn’t load the current research coverage, so no
                    market or instrument options are shown and no result is
                    promised. Your text is kept.
                  </p>
                  <button
                    type="button"
                    onClick={fetchConfig}
                    className="mt-2 inline-flex min-h-11 items-center rounded-lg border border-as-line px-3.5 text-[13px] font-semibold text-platinum hover:border-iris/50"
                  >
                    Try again
                  </button>
                </div>
              ) : null}
              {config && !config.publicResearchEnabled ? (
                <div className="mt-6 rounded-xl border border-warn/40 bg-warn/[0.07] px-4 py-3">
                  <p className="text-[15px] font-semibold text-platinum">
                    Research is temporarily unavailable.
                  </p>
                  <p className="mt-1 text-[14px] leading-6 text-haze">
                    Product and help content remain available.
                  </p>
                </div>
              ) : null}
              <ResearchComposer
                question={question}
                onQuestionChange={setQuestion}
                coverage={coverage}
                onCoverageChange={setCoverage}
                scopes={supportedScopes}
                minChars={limits.questionMin}
                maxChars={limits.questionMax}
                unavailableReason={unavailableReason}
              />
            </>
          )}

          <section className="mt-10" aria-labelledby="starters-heading">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2
                id="starters-heading"
                className="font-mono text-[12px] font-normal uppercase tracking-[0.16em] text-haze"
              >
                Start with a research question
              </h2>
              {config?.demo ? (
                <p className="text-[13px] text-haze">
                  Examples name synthetic demo entities.
                </p>
              ) : null}
            </div>
            {configState.status === "loading" ? (
              <div className="mt-3 grid gap-3 sm:grid-cols-2" aria-hidden="true">
                {[0, 1, 2, 3].map((index) => (
                  <Skeleton key={index} className="h-[100px] rounded-2xl" />
                ))}
              </div>
            ) : configState.status === "error" ? (
              <p className="mt-3 text-[14px] leading-6 text-haze">
                Suggested questions are hidden while coverage is unavailable.
              </p>
            ) : (
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {config?.starterPrompts.map((prompt) => {
                  const reason = starterDisabledReason(prompt);
                  const reasonId = `${prompt.id}-reason`;
                  return (
                    <button
                      key={prompt.id}
                      type="button"
                      onClick={() => chooseStarter(prompt)}
                      aria-disabled={reason ? true : undefined}
                      disabled={Boolean(reason)}
                      aria-describedby={reason ? reasonId : undefined}
                      className="group flex min-h-[100px] flex-col justify-between rounded-2xl border border-as-line bg-as-panel/45 p-5 text-left transition-colors hover:border-iris/55 hover:bg-as-panel-soft/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iris disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-as-line"
                    >
                      <span className="flex w-full items-start justify-between gap-4">
                        <span className="text-[16px] font-semibold text-platinum">
                          {prompt.title}
                        </span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-haze transition-colors group-hover:text-iris-soft"
                        />
                      </span>
                      {prompt.description ? (
                        <span className="mt-4 text-[14px] leading-6 text-haze">
                          {prompt.description}
                        </span>
                      ) : null}
                      <span className="mt-2 flex flex-wrap gap-1.5">
                        {config?.demo ? (
                          <span className="rounded-full border border-warn/40 px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.08em] text-warn">
                            Demo example
                          </span>
                        ) : null}
                        {reason ? (
                          <span
                            id={reasonId}
                            className="text-[13px] font-medium text-haze"
                          >
                            {reason}
                          </span>
                        ) : null}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
            <p className="mt-3 text-[13px] leading-6 text-haze">
              Choosing an example fills the question for you to edit. Nothing is
              sent until you submit.
            </p>
          </section>
        </div>

        <aside
          aria-label="Evidence standard and coverage"
          className="min-w-0 self-start border-t border-as-line/60 pt-8 xl:sticky xl:top-24 xl:border-t-0 xl:pt-8"
        >
          <h2 className="font-mono text-[12px] font-normal uppercase tracking-[0.16em] text-haze">
            The evidence standard
          </h2>
          <ol className="mt-4 space-y-4">
            {EVIDENCE_STEPS.map((step, index) => (
              <li key={step.label} className="flex gap-3.5">
                <span className="pt-0.5 font-mono text-[12px] text-iris-soft">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-[15px] font-semibold leading-5 text-platinum">
                    {step.label}
                  </p>
                  <p className="mt-0.5 text-[14px] leading-6 text-haze">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href="/assistant/help?article=help-citations"
            className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-iris-soft transition-colors hover:text-white"
          >
            How sources work
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>

          <div className="mt-10 border-t border-as-line/60 pt-5 xl:mt-16">
            <h2 className="font-mono text-[12px] font-normal uppercase tracking-[0.16em] text-haze">
              Coverage is not universal
            </h2>
            <div className="mt-3 space-y-2">
              {configState.status === "loading" ? (
                <>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </>
              ) : config ? (
                <p className="text-[14px] leading-6 text-haze">
                  {config.coverageMessage}
                </p>
              ) : (
                <p className="flex items-start gap-2 text-[14px] leading-6 text-haze">
                  <Info aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-warn" />
                  Coverage currently unavailable.
                </p>
              )}
            </div>
          </div>

          <div className="mt-10 border-t border-as-line/60 pt-5 xl:mt-16">
            <p className="flex items-center gap-2 text-[15px] font-medium text-platinum">
              <ShieldCheck aria-hidden="true" className="h-4 w-4 text-iris-soft" />
              Financial research, not personal investment advice.
            </p>
            <Link
              href={legalHref}
              className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-iris-soft transition-colors hover:text-white"
            >
              Read the research notice
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
            {config?.demo ? (
              <p className="mt-3 font-mono text-[11px] uppercase leading-5 tracking-[0.1em] text-haze">
                {config.fixtureLabel}
              </p>
            ) : null}
          </div>
        </aside>
      </div>
    </div>
  );
}

function ComposerSkeleton() {
  return (
    <div className="mt-6" aria-busy="true">
      <p className="sr-only" role="status">
        Loading available coverage…
      </p>
      <div className="rounded-[18px] border border-as-line/70 bg-as-panel/50 p-5">
        <Skeleton className="h-4 w-44" />
        <Skeleton className="mt-4 h-[52px] w-full" />
        <div className="mt-4 flex gap-2">
          <Skeleton className="h-11 w-44 rounded-full" />
          <Skeleton className="h-11 w-40 rounded-full" />
          <Skeleton className="ml-auto h-11 w-11 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
