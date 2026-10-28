"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  Check,
  Clock3,
  Copy,
  FileSearch,
  FileWarning,
  Loader2,
  LockKeyhole,
  Plus,
  RotateCcw,
  ShieldCheck,
  TimerOff,
  XCircle,
} from "lucide-react";
import type {
  ConfigResponse,
  PublishedAnswer,
  ResearchJobView,
  SourceRecord,
} from "@/lib/assistant/types";
import {
  FIXTURE_LABEL,
  NO_ADVICE_COPY,
  STATUS_META,
} from "@/lib/assistant/taxonomy";
import { formatDate, formatDateTime } from "@/lib/assistant/format";
import {
  ApiError,
  apiJson,
  loadConfig,
  stashDraft,
  updateSessionEntry,
} from "@/lib/assistant/client";
import { CitationText } from "@/components/assistant/ui/Evidence";
import { useDemoMode } from "@/components/assistant/shell/DemoModeProvider";
import { useAssistantPrefs } from "@/components/assistant/shell/AssistantPrefsProvider";
import { StatusBadge } from "@/components/assistant/ui/Badge";
import { Button, ButtonLink } from "@/components/assistant/ui/Button";
import { Callout, EmptyState, Skeleton } from "@/components/assistant/ui/Misc";
import { PageShell, Panel } from "@/components/assistant/ui/Panel";
import AnswerRenderer from "./AnswerRenderer";
import CitationRail from "./CitationRail";
import EvidenceInspector from "./EvidenceInspector";
import FollowUpComposer from "./FollowUpComposer";
import ResearchProgress from "./ResearchProgress";


export default function SessionExperience({ jobRef }: { jobRef: string }) {
  const { mode } = useDemoMode();
  const { prefs } = useAssistantPrefs();
  const [job, setJob] = useState<ResearchJobView | null>(null);
  const [answer, setAnswer] = useState<PublishedAnswer | null>(null);
  const [sources, setSources] = useState<SourceRecord[]>([]);
  const [fatal, setFatal] = useState<string | null>(null);
  const [answerError, setAnswerError] = useState<{ message: string; requestId?: string } | null>(null);
  const [expiredOverride, setExpiredOverride] = useState(false);
  const [revoked, setRevoked] = useState(false);
  const [rateLimited, setRateLimited] = useState<number | null>(null);
  const [flags, setFlags] = useState<ConfigResponse["featureFlags"] | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const lastEventSeq = useRef(0);
  const [cancelling, setCancelling] = useState(false);
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const [inspectClaim, setInspectClaim] = useState<string | undefined>();
  const [inspectSource, setInspectSource] = useState<string | undefined>();
  const [copyState, setCopyState] = useState<"idle" | "ok" | "fail">("idle");

  useEffect(() => {
    loadConfig()
      .then((config) => setFlags(config.featureFlags))
      .catch(() => setFlags(null));
  }, []);
  const pendingDeepLink = useRef<{
    claim?: string;
    source?: string;
  } | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("panel") === "evidence") {
      pendingDeepLink.current = {
        claim: params.get("claim") ?? undefined,
        source: params.get("source") ?? undefined,
      };
    }
  }, []);

  useEffect(() => {
    let stopped = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    async function tick() {
      try {
        const result = await apiJson<{ job: ResearchJobView }>(
          `/api/assistant/research/${encodeURIComponent(jobRef)}`
        );
        if (stopped) return;
        // WF-02 I02: the last server event sequence wins; stale events are ignored.
        const seq = result.job.eventSeq ?? 0;
        if (seq && seq < lastEventSeq.current) return;
        lastEventSeq.current = seq;
        setRateLimited(null);
        setJob((previous) => {
          if (previous?.stage.key !== result.job.stage.key && result.job.status === "RUNNING") {
            setAnnouncement(result.job.stage.label);
          }
          return result.job;
        });
        updateSessionEntry(result.job);
        if (result.job.revoked) setRevoked(true);
        if (result.job.status === "RUNNING") {
          timer = setTimeout(tick, 750);
        }
      } catch (caught) {
        if (stopped) return;
        if (caught instanceof ApiError && caught.status === 429) {
          const wait = caught.retryAfterSeconds ?? 5;
          setRateLimited(wait);
          timer = setTimeout(tick, wait * 1000);
          return;
        }
        if (caught instanceof ApiError && caught.status === 404) {
          setFatal("This public research session has expired.");
        } else {
          setFatal(
            caught instanceof ApiError
              ? caught.message
              : "The research session could not be loaded."
          );
        }
      }
    }

    void tick();
    return () => {
      stopped = true;
      if (timer) clearTimeout(timer);
    };
  }, [jobRef]);

  useEffect(() => {
    if (job?.status !== "READY" || answer || revoked) return;
    let stopped = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    async function loadAnswer() {
      try {
        const result = await apiJson<{
          answer: PublishedAnswer;
          sources: SourceRecord[];
        }>(`/api/assistant/research/${encodeURIComponent(jobRef)}/answer`);
        if (stopped) return;
        setAnswer(result.answer);
        setSources(result.sources);
        setAnnouncement(`Answer ready: ${STATUS_META[result.answer.status].label}.`);
      } catch (caught) {
        if (stopped) return;
        if (caught instanceof ApiError && caught.status === 409) {
          timer = setTimeout(loadAnswer, 600);
          return;
        }
        if (caught instanceof ApiError && caught.code === "ANSWER_REVOKED") {
          setRevoked(true);
          return;
        }
        if (caught instanceof ApiError && caught.status === 410) {
          setExpiredOverride(true);
          return;
        }
        if (caught instanceof ApiError && caught.status === 429) {
          setRateLimited(caught.retryAfterSeconds ?? 5);
          timer = setTimeout(loadAnswer, (caught.retryAfterSeconds ?? 5) * 1000);
          return;
        }
        setAnswerError({
          message:
            caught instanceof ApiError && caught.status >= 500
              ? "Research is temporarily unavailable; no answer has been published."
              : caught instanceof ApiError
                ? caught.message
                : "Research is temporarily unavailable; no answer has been published.",
          requestId: caught instanceof ApiError ? caught.requestId : undefined,
        });
      }
    }

    void loadAnswer();
    return () => {
      stopped = true;
      if (timer) clearTimeout(timer);
    };
  }, [job?.status, answer, jobRef, revoked]);

  const openInspector = useCallback(
    (claimId?: string, sourceId?: string) => {
      setInspectClaim(claimId);
      setInspectSource(sourceId);
      setInspectorOpen(true);
      const url = new URL(window.location.href);
      url.searchParams.set("panel", "evidence");
      if (claimId) url.searchParams.set("claim", claimId);
      else url.searchParams.delete("claim");
      if (sourceId) url.searchParams.set("source", sourceId);
      else url.searchParams.delete("source");
      window.history.replaceState(null, "", url.toString());
    },
    []
  );

  useEffect(() => {
    if (!answer || !pendingDeepLink.current) return;
    const { claim, source } = pendingDeepLink.current;
    pendingDeepLink.current = null;
    openInspector(claim, source);
  }, [answer, openInspector]);

  const closeInspector = useCallback(() => {
    setInspectorOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.delete("panel");
    url.searchParams.delete("claim");
    url.searchParams.delete("source");
    window.history.replaceState(null, "", url.toString());
  }, []);

  useEffect(() => {
    if (copyState === "idle") return;
    const timer = window.setTimeout(() => setCopyState("idle"), 1900);
    return () => window.clearTimeout(timer);
  }, [copyState]);

  async function copyAnswer() {
    try {
      const { text } = await apiJson<{ text: string }>(
        `/api/assistant/research/${encodeURIComponent(jobRef)}/copy`
      );
      await navigator.clipboard.writeText(text);
      setCopyState("ok");
      setAnnouncement("Answer copied with numbered citations.");
    } catch {
      setCopyState("fail");
    }
  }

  async function cancelResearch() {
    setCancelling(true);
    setAnnouncement("Stopping research…");
    try {
      const result = await apiJson<{ job: ResearchJobView }>(
        `/api/assistant/research/${jobRef}/cancel`,
        { method: "POST" }
      );
      setJob(result.job);
      updateSessionEntry(result.job);
      if (result.job.status === "CANCELLED") setAnnouncement("Research stopped");
    } catch (caught) {
      setAnnouncement(
        caught instanceof ApiError
          ? `Research could not be stopped. ${caught.message}`
          : "Research could not be stopped."
      );
    } finally {
      setCancelling(false);
    }
  }

  const expired = expiredOverride || job?.status === "EXPIRED";
  const running = job?.status === "RUNNING";
  const stopped = job?.status === "CANCELLED";
  const failed = job?.status === "FAILED";
  const expiryLabel = job
    ? formatDateTime(job.expiresAt, prefs.timeZone, prefs.numberLocale)
    : "Unknown";


  const accessHref = `/assistant/access?intent=save&return=${encodeURIComponent(
    `/assistant/session/${jobRef}`
  )}`;

  return (
    <PageShell width="wide" className="pt-5 sm:pt-7">
      <p aria-live="polite" className="sr-only">{announcement}</p>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <Link
          href="/assistant"
          className="inline-flex min-h-11 items-center gap-1.5 text-[12px] font-medium text-haze transition-colors hover:text-platinum"
        >
          <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
          Research home
        </Link>
        <div className="flex items-center gap-1.5">
          {answer ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => void copyAnswer()}
            icon={
              copyState === "ok" ? (
                <Check aria-hidden="true" className="h-3.5 w-3.5 text-ok" />
              ) : (
                <Copy aria-hidden="true" className="h-3.5 w-3.5" />
              )
            }
          >
            {copyState === "ok"
              ? "Answer copied"
              : copyState === "fail"
                ? "Copy failed"
                : "Copy answer"}
          </Button>
          ) : null}
          <ButtonLink
            href="/assistant"
            variant="secondary"
            size="sm"
            icon={<Plus aria-hidden="true" className="h-3.5 w-3.5" />}
          >
            New question
          </ButtonLink>
        </div>
      </div>

      {job ? (
        <div className="flex flex-col items-end gap-1.5">
          <p className="sr-only">Your question</p>
          <h1 className="max-w-3xl rounded-2xl rounded-br-md border border-iris/30 bg-iris/[0.1] px-4 py-3 text-[16px] font-medium leading-7 text-platinum sm:text-[18px]">
            {job.question}
          </h1>
          <p className="flex flex-wrap items-center justify-end gap-x-2 text-[12px] text-haze">
            <LockKeyhole aria-hidden="true" className="h-3.5 w-3.5" />
            {mode === "guest"
              ? `Temporary guest session · expires ${formatDateTime(job.expiresAt, prefs.timeZone, prefs.numberLocale)}`
              : "Demo account · synthetic, nothing saved to a real account"}
            {mode === "guest" ? (
              <Link href={accessHref} className="inline-flex min-h-11 items-center font-semibold text-iris-soft hover:text-white">
                Sign in to save
              </Link>
            ) : null}
          </p>
        </div>
      ) : null}

      <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1fr)_318px] lg:items-start">
        <div className="min-w-0">
          {fatal ? (
            <EmptyState
              icon={<FileWarning aria-hidden="true" className="h-7 w-7" />}
              title="Session unavailable"
              description={fatal}
              action={
                <ButtonLink href="/assistant">
                  Start a new question
                </ButtonLink>
              }
            />
          ) : !job ? (
            <Panel className="p-5 sm:p-6" busy>
              <div className="flex items-center gap-2.5 text-sm text-haze">
                <Loader2
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin text-iris-soft"
                />
                Connecting to the research session…
              </div>
              <div className="mt-4 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-24 w-full" />
              </div>
            </Panel>
          ) : rateLimited !== null && !answer ? (
            <Callout tone="warn" title="Request limit reached">
              Request limit reached. You can try again after {rateLimited} seconds.
              This page will check again automatically.
            </Callout>
          ) : running ? (
            <ResearchProgress
              job={job}
              cancelling={cancelling}
              onCancel={() => void cancelResearch()}
            />
          ) : stopped ? (
            <Panel className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <XCircle
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-warn"
                />
                <div>
                  <h2 className="text-lg font-semibold text-platinum">
                    Research stopped
                  </h2>
                  <p className="mt-1 text-[13px] leading-6 text-haze">
                    No answer was published. Your question is kept in this
                    browser session so you can ask it again.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <ButtonLink
                      href="/assistant#composer"
                      onClick={() =>
                        stashDraft({
                          question: job.question,
                          scopeId: job.scopeIds[0],
                        })
                      }
                      size="sm"
                      icon={<RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />}
                    >
                      Ask this again
                    </ButtonLink>
                    <ButtonLink href="/assistant" variant="secondary" size="sm">
                      New question
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Panel>
          ) : expired ? (
            <Panel className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <TimerOff
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-warn"
                />
                <div>
                  <h2 className="text-lg font-semibold text-platinum">
                    This public research session has expired.
                  </h2>
                  <p className="mt-1 text-[13px] leading-6 text-haze">
                    Guest research is available only for a limited time in this
                    browser. Start a new question to see current evidence.
                  </p>
                  <div className="mt-4">
                    <ButtonLink
                      href="/assistant#composer"
                      onClick={() =>
                        stashDraft({
                          question: job.question,
                          scopeId: job.scopeIds[0],
                        })
                      }
                      size="sm"
                    >
                      Research this again
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Panel>
          ) : revoked ? (
            <EmptyState
              icon={<AlertTriangle aria-hidden="true" className="h-7 w-7" />}
              title="Answer unavailable"
              description="This answer is no longer available because its source permissions or validity changed."
              action={<ButtonLink href="/assistant">Start fresh research</ButtonLink>}
            />
          ) : failed ? (
            <EmptyState
              icon={<AlertTriangle aria-hidden="true" className="h-7 w-7" />}
              title="Research is temporarily unavailable"
              description={`No answer has been published. A failure is never presented as “no evidence exists”.${job?.error ? ` ${job.error}` : ""}`}
              action={
                <ButtonLink
                  href="/assistant#composer"
                  onClick={() => stashDraft({ question: job.question, scopeId: job.scopeIds[0] })}
                >
                  Retry this question
                </ButtonLink>
              }
            />
          ) : answer ? (
            <article
              aria-labelledby="answer-heading"
              className="rounded-2xl rounded-tl-md border border-as-line bg-as-panel/70 p-4 sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-2 text-[12px] text-haze">
                <span className="font-semibold text-platinum">Talvrin</span>
                <StatusBadge status={answer.status} />
                <span>
                  As of {formatDate(answer.timeContext.asOf, prefs.timeZone, prefs.numberLocale)}
                </span>
              </div>

              {answer.status !== "READY" &&
              !answer.blocks.some(
                (block) => block.kind === "callout" && (block.tone === "warn" || block.tone === "danger")
              ) ? (
                <p className="mt-3 text-[14px] leading-6 text-platinum/85">
                  {STATUS_META[answer.status].description}
                  {answer.status === "RESTRICTED" ? (
                    <>
                      {" "}
                      <button
                        type="button"
                        onClick={() => openInspector()}
                        className="inline-flex min-h-11 items-center font-semibold text-iris-soft underline underline-offset-4 hover:text-white"
                      >
                        See which sources are restricted
                      </button>
                    </>
                  ) : null}
                </p>
              ) : null}

              <h2
                id="answer-heading"
                className="mt-3 text-balance text-[19px] font-semibold leading-8 tracking-tight text-platinum sm:text-[21px]"
              >
                {answer.headlineSegments ? (
                  <CitationText
                    segments={answer.headlineSegments}
                    claims={answer.claims}
                    sourceOrder={answer.sources}
                    onInspect={openInspector}
                  />
                ) : (
                  answer.headline
                )}
              </h2>
              <p className="mt-2 text-[15px] leading-7 text-platinum/80">
                {answer.summarySegments ? (
                  <CitationText
                    segments={answer.summarySegments}
                    claims={answer.claims}
                    sourceOrder={answer.sources}
                    onInspect={openInspector}
                  />
                ) : (
                  answer.summary
                )}
              </p>

              <div className="mt-4">
                <AnswerRenderer
                  answer={answer}
                  onInspect={openInspector}
                  density={prefs.answerDensity}
                />
              </div>

              <footer className="mt-4 flex flex-wrap items-center gap-x-1 gap-y-1 border-t border-as-line/60 pt-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => openInspector()}
                  icon={<FileSearch aria-hidden="true" className="h-3.5 w-3.5" />}
                >
                  View sources ({answer.sources.length})
                </Button>
                <ButtonLink
                  href={`/assistant/report?answerRef=${encodeURIComponent(jobRef)}`}
                  variant="ghost"
                  size="sm"
                >
                  Report a problem
                </ButtonLink>
                <span className="ml-auto text-[11px] text-haze/70">
                  {FIXTURE_LABEL}
                </span>
              </footer>
            </article>
          ) : answerError ? (
            <EmptyState
              icon={<AlertTriangle aria-hidden="true" className="h-7 w-7" />}
              title="The answer could not be loaded"
              description={`${answerError.message}${answerError.requestId ? ` Reference ${answerError.requestId}.` : ""}`}
              action={
                <Button onClick={() => window.location.reload()}>
                  Reload the session
                </Button>
              }
            />
          ) : (
            <Panel className="p-5 sm:p-6" busy>
              <div className="flex items-center gap-2.5">
                <Loader2
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin text-iris-soft"
                />
                <div>
                  <p className="text-[13px] font-semibold text-platinum">
                    Finalising the evidence package
                  </p>
                  <p className="mt-0.5 text-[11px] leading-5 text-haze">
                    The answer has been sealed. Loading its claims, sources and
                    permissions…
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-28 w-full" />
              </div>
            </Panel>
          )}

          {answer && !running ? (
            <div className="mt-4 hidden lg:block">
              <FollowUpComposer
                parentRef={jobRef}
                scopeIds={job?.scopeIds ?? answer.coverage.scopes.filter((scope) => scope.supported).map((scope) => scope.id)}
                suggestions={answer.followUps}
                showSuggestions={prefs.followUpHints !== false}
              />
            </div>
          ) : null}
        </div>

        <aside className="min-w-0">
          {answer ? (
            <CitationRail
              answer={answer}
              sources={sources}
              answerRef={jobRef}
              onInspect={openInspector}
              exportsState={flags?.exports ?? "OFF"}
            />
          ) : (
            <div className="flex flex-col gap-3">
              <Panel className="p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-haze/80">
                  Session boundary
                </p>
                <ul className="mt-2.5 space-y-2.5">
                  {[
                    {
                      icon: Clock3,
                      title: "Expires after two hours",
                      body: job
                        ? `This guest session ends ${expiryLabel}.`
                        : "Guest research is temporary by design.",
                    },
                    {
                      icon: LockKeyhole,
                      title: "Not saved to an account",
                      body: "A guest session is not durable and cannot be resumed on another device.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Evidence before publication",
                      body: "No partial answer is shown while claims are still being validated.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.title} className="flex items-start gap-2.5">
                        <Icon
                          aria-hidden="true"
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-haze"
                        />
                        <div>
                          <p className="text-[11px] font-medium text-platinum/90">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-[12px] leading-5 text-haze">
                            {item.body}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Panel>
              <Callout tone="warn" title="No advice, ever">
                {NO_ADVICE_COPY}
              </Callout>
              <div className="rounded-xl border border-as-line/60 bg-midnight-soft/40 p-3.5">
                <p className="font-mono text-[11px] uppercase leading-4 tracking-[0.1em] text-haze/60">
                  {FIXTURE_LABEL}
                </p>
              </div>
            </div>
          )}
        </aside>

        {answer && !running ? (
          <div className="sticky bottom-0 z-10 -mx-4 border-t border-as-line bg-midnight/95 px-4 pb-3 pt-3 backdrop-blur lg:hidden">
            <FollowUpComposer
              parentRef={jobRef}
              scopeIds={job?.scopeIds ?? answer.coverage.scopes.filter((scope) => scope.supported).map((scope) => scope.id)}
              suggestions={[]}
              showSuggestions={false}
            />
          </div>
        ) : null}
      </div>

      <EvidenceInspector
        open={inspectorOpen}
        onClose={closeInspector}
        answer={answer}
        sources={sources}
        answerRef={jobRef}
        initialClaimId={inspectClaim}
        initialSourceId={inspectSource}
        timeZone={prefs.timeZone}
        locale={prefs.numberLocale}
      />
    </PageShell>
  );
}
