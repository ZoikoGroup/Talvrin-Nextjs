"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  FileSearch,
  FileWarning,
  History,
  Lock,
  Loader2,
  Plus,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  TimerOff,
} from "lucide-react";
import type {
  AnswerStatus,
  ComparisonCell,
  ComparisonDelta,
  ComparisonJobView,
  ComparisonResult,
  ComparisonResultState,
  ComparisonRow,
  InstrumentKind,
  PublishedAnswer,
  ScopeId,
  SourceRecord,
} from "@/lib/assistant/types";
import { FIXTURE_LABEL, NO_ADVICE_COPY, SCOPES } from "@/lib/assistant/taxonomy";
import { formatDate, formatDateTime } from "@/lib/assistant/format";
import { ApiError, apiJson, stashDraft } from "@/lib/assistant/client";
import { useDemoMode } from "@/components/assistant/shell/DemoModeProvider";
import { useAssistantPrefs } from "@/components/assistant/shell/AssistantPrefsProvider";
import { Pill, TierBadge } from "@/components/assistant/ui/Badge";
import { Button, ButtonLink } from "@/components/assistant/ui/Button";
import { Callout, Disclosure, EmptyState, Skeleton } from "@/components/assistant/ui/Misc";
import { PageShell, Panel } from "@/components/assistant/ui/Panel";
import { CitationText } from "@/components/assistant/ui/Evidence";
import ComparisonProgress from "./ComparisonProgress";
import EvidenceInspector from "@/components/assistant/session/EvidenceInspector";

/* WF-05 §5.1 display copy per view-level state. */
const STATE_META: Record<
  ComparisonResultState,
  { label: string; tone: "ok" | "warn" | "danger" | "neutral" | "info"; detail: string }
> = {
  PENDING: { label: "Pending", tone: "info", detail: "Evaluating sources and policies." },
  READY: {
    label: "Ready",
    tone: "ok",
    detail: "All requested cells are display-permitted and comparable.",
  },
  PARTIAL: {
    label: "Partial",
    tone: "warn",
    detail: "Some fields cannot be shown; permitted results are labelled. Withheld cells carry a coded reason.",
  },
  CONFLICT: {
    label: "Conflict",
    tone: "warn",
    detail: "Source records disagree. Disputed cells are blocked from default derived values.",
  },
  RIGHTS_DENIED: {
    label: "Rights denied",
    tone: "danger",
    detail: "The selected data cannot be displayed for this comparison.",
  },
  METHOD_INVALID: {
    label: "Method invalid",
    tone: "danger",
    detail: "No derived output is produced for an unsupported or inconsistent formula version.",
  },
  STALE_OR_REVISED: {
    label: "Stale or revised",
    tone: "warn",
    detail: "This result reflects an older vintage. A refresh creates a new result version.",
  },
  EXPIRED_OR_REVOKED: {
    label: "Expired or revoked",
    tone: "danger",
    detail: "This result is no longer available. Previous data is not shown.",
  },
  FAILED: { label: "Failed", tone: "danger", detail: "This comparison could not be completed." },
  NOT_LAUNCHED: {
    label: "Not launched",
    tone: "neutral",
    detail: "Comparison results are not available in this release.",
  },
};

const RESULT_STATES: ComparisonResultState[] = ["READY", "PARTIAL", "CONFLICT", "STALE_OR_REVISED"];

const KIND_SCOPE: Record<InstrumentKind, ScopeId> = {
  EQUITY: "equities",
  FUND: "funds",
  GOVERNMENT_BOND: "fixed-income",
};

function answerStatusFor(state: ComparisonResultState): AnswerStatus {
  if (state === "READY") return "READY";
  if (state === "CONFLICT") return "CONFLICT";
  if (state === "STALE_OR_REVISED") return "STALE";
  if (state === "RIGHTS_DENIED") return "RESTRICTED";
  return "PARTIAL";
}

/** Adapts a comparison into the inspector's answer shape (WF-05 RES-12). */
function comparisonAsAnswer(result: ComparisonResult): PublishedAnswer {
  return {
    fixtureLabel: result.fixtureLabel,
    answerVersion: `${result.ref}@v${result.resultVersion}`,
    status: answerStatusFor(result.state),
    statusCode: `COMPARISON_${result.state}`,
    headline: result.title,
    summary: result.decisionNote,
    blocks: [],
    claims: result.claims,
    sources: result.sources,
    methods: result.methods,
    timeContext: result.timeContext,
    coverage: {
      scopes: SCOPES.map((scope) => ({
        id: scope.id,
        label: scope.label,
        supported: scope.supported,
        note: scope.note,
      })),
      gaps: result.coverage.gaps,
      revisionNote:
        "Point-in-time comparison snapshot. A refresh creates a new result version rather than editing this one.",
    },
    policy: {
      retrievalPolicy:
        "Preflight resolves instrument identity, class, period, currency and source rights before retrieval.",
      answerPolicy:
        "A cell is shown only when its source permits display and its claim has passed validation.",
      rightsPolicy: `Display, derive and export are separate permissions (policy ${result.displayPolicyVersion}). A missing permission is a denial.`,
      adviceBoundary: NO_ADVICE_COPY,
      assistantLabel: "Talvrin Research Assistant",
      modelDisclosure:
        "Values are reported facts and versioned deterministic calculations. The interpretation only restates cited claims.",
    },
    limitations: result.limitations,
    followUps: result.followUps,
  };
}

function cellLabel(cell: ComparisonCell): string {
  if (cell.state === "WITHHELD") return "Withheld";
  if (cell.state === "CONTESTED") return "Contested";
  if (cell.state === "NOT_APPLICABLE") return "Not applicable";
  return cell.displayValue;
}

function CellView({
  cell,
  instrumentName,
  row,
  sourceOrder,
  onInspect,
  timeZone,
  locale,
}: {
  cell: ComparisonCell;
  instrumentName: string;
  row: ComparisonRow;
  sourceOrder: string[];
  onInspect: (claimId?: string, sourceId?: string) => void;
  timeZone: string;
  locale: string;
}) {
  if (cell.state === "DISPLAY_ALLOWED") {
    const ordinal = sourceOrder.indexOf(cell.sourceId) + 1;
    return (
      <button
        type="button"
        onClick={() => onInspect(cell.claimId, cell.sourceId)}
        className="group flex min-h-11 w-full flex-col items-start rounded-lg border border-transparent px-1.5 py-1 text-left transition-colors hover:border-iris/40 hover:bg-iris/[0.05]"
        aria-label={`Inspect evidence for ${instrumentName} ${row.label}: ${cell.displayValue} ${cell.unit}, as of ${formatDate(cell.asOf, timeZone, locale)}, source ${ordinal}`}
      >
        <span className="flex flex-wrap items-baseline gap-1">
          <span className="text-lg font-semibold leading-6 text-platinum">{cell.displayValue}</span>
          <span className="text-[12px] text-haze">{cell.unit}</span>
          {ordinal ? (
            <span className="rounded border border-iris/40 bg-iris/[0.12] px-1 font-mono text-[11px] text-iris-soft">
              {ordinal}
            </span>
          ) : null}
        </span>
        <span className="mt-0.5 text-[12px] text-haze/90">
          As of {formatDate(cell.asOf, timeZone, locale)}
        </span>
        {cell.revisedBy ? (
          <span className="mt-0.5 text-[12px] leading-5 text-warn">
            Revised: {cell.revisedBy.note}
          </span>
        ) : null}
      </button>
    );
  }
  const contested = cell.state === "CONTESTED";
  return (
    <div
      className={clsx(
        "flex min-h-11 flex-col items-start rounded-lg border px-2 py-1.5",
        contested ? "border-warn/30 bg-warn/[0.05]" : "border-as-line/70 bg-midnight-soft/40"
      )}
    >
      <span
        className={clsx(
          "inline-flex items-center gap-1.5 text-[13px] font-semibold",
          contested ? "text-warn" : "text-platinum/85"
        )}
      >
        {contested ? (
          <AlertTriangle aria-hidden="true" className="h-3.5 w-3.5" />
        ) : (
          <Lock aria-hidden="true" className="h-3.5 w-3.5" />
        )}
        <span aria-hidden="true">—</span> {cellLabel(cell)}
      </span>
      <span className="mt-0.5 text-[12px] leading-5 text-haze">{cell.reason}</span>
      <span className="mt-0.5 font-mono text-[11px] text-haze/70">{cell.reasonCode}</span>
      {contested ? (
        <button
          type="button"
          onClick={() => onInspect(cell.claimId, cell.sourceIds[0])}
          className="mt-1 inline-flex min-h-11 items-center text-[12px] font-semibold text-iris-soft hover:text-white"
        >
          Review source conflict
        </button>
      ) : null}
    </div>
  );
}

function DeltaView({
  delta,
  tickers,
}: {
  delta: ComparisonDelta;
  tickers: Record<string, string>;
}) {
  const label = `${tickers[delta.aInstrumentId] ?? "A"} − ${tickers[delta.bInstrumentId] ?? "B"}`;
  const kind = delta.kind === "PERCENT_DIFFERENCE" ? "% difference" : "Difference";
  return (
    <div className="rounded-lg border border-as-line/60 bg-midnight-soft/30 px-2 py-1.5">
      <p className="font-mono text-[11px] uppercase tracking-wider text-haze">
        {kind} · {label}
      </p>
      {delta.state === "DISPLAY_ALLOWED" ? (
        <p className="text-[14px] font-semibold text-platinum">
          {delta.displayValue} <span className="text-[12px] font-normal text-haze">{delta.unit}</span>
        </p>
      ) : (
        <p className="text-[13px] text-platinum/85">
          <span aria-hidden="true">—</span> Withheld
          <span className="block text-[12px] leading-5 text-haze">{delta.reason}</span>
        </p>
      )}
      <p className="text-[11px] leading-5 text-haze/80">
        {delta.formula}
        {delta.denominator ? ` · Denominator: ${delta.denominator}` : ""}
      </p>
    </div>
  );
}

export default function ComparisonExperience({
  comparisonRef,
}: {
  comparisonRef: string;
}) {
  const { mode } = useDemoMode();
  const { prefs } = useAssistantPrefs();
  const [job, setJob] = useState<ComparisonJobView | null>(null);
  const [inspectorSources, setInspectorSources] = useState<SourceRecord[]>([]);
  const [fatal, setFatal] = useState<{ message: string; requestId?: string } | null>(null);
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const [inspectClaim, setInspectClaim] = useState<string | undefined>();
  const [inspectSource, setInspectSource] = useState<string | undefined>();
  const [announcement, setAnnouncement] = useState("");
  const pendingDeepLink = useRef<{ claim?: string; source?: string } | null>(null);
  const lastState = useRef<ComparisonResultState | null>(null);

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
        const response = await apiJson<{ job: ComparisonJobView; sources: SourceRecord[] }>(
          `/api/assistant/comparisons/${encodeURIComponent(comparisonRef)}`
        );
        if (stopped) return;
        setJob(response.job);
        setInspectorSources(response.sources);
        if (lastState.current !== response.job.state) {
          lastState.current = response.job.state;
          if (response.job.state !== "PENDING") {
            setAnnouncement(`Comparison ${STATE_META[response.job.state].label.toLowerCase()}. ${STATE_META[response.job.state].detail}`);
          }
        }
        if (response.job.state === "PENDING") timer = setTimeout(tick, 800);
      } catch (caught) {
        if (stopped) return;
        setFatal({
          message:
            caught instanceof ApiError
              ? caught.message
              : "The comparison could not be loaded.",
          requestId: caught instanceof ApiError ? caught.requestId : undefined,
        });
      }
    }

    void tick();
    return () => {
      stopped = true;
      if (timer) clearTimeout(timer);
    };
  }, [comparisonRef]);

  const result = job?.result && RESULT_STATES.includes(job.state) ? job.result : null;
  const inspectorAnswer = useMemo(() => (result ? comparisonAsAnswer(result) : null), [result]);
  const tickers = useMemo(
    () =>
      Object.fromEntries(
        (result?.instruments ?? []).map((instrument) => [instrument.id, instrument.ticker])
      ) as Record<string, string>,
    [result]
  );

  const openInspector = useCallback((claimId?: string, sourceId?: string) => {
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
  }, []);

  useEffect(() => {
    if (!result || !pendingDeepLink.current) return;
    const { claim, source } = pendingDeepLink.current;
    pendingDeepLink.current = null;
    openInspector(claim, source);
  }, [result, openInspector]);

  const closeInspector = useCallback(() => {
    setInspectorOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.delete("panel");
    url.searchParams.delete("claim");
    url.searchParams.delete("source");
    window.history.replaceState(null, "", url.toString());
  }, []);

  const accessHref = `/assistant/access?intent=save&return=${encodeURIComponent(
    `/assistant/compare/${comparisonRef}`
  )}`;
  const adjustHref = `/assistant/compare?from=${encodeURIComponent(comparisonRef)}`;
  const followUpScope: ScopeId = result?.instruments[0]
    ? KIND_SCOPE[result.instruments[0].kind]
    : "equities";
  const firstClaim = result?.claims[0]?.id;

  function terminalPanel(state: ComparisonResultState, extra?: React.ReactNode) {
    const meta = STATE_META[state];
    return (
      <Panel className="p-5 sm:p-6">
        <div className="flex items-start gap-3">
          {state === "EXPIRED_OR_REVOKED" ? (
            <TimerOff aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-warn" />
          ) : (
            <FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-warn" />
          )}
          <div>
            <h1 className="text-lg font-semibold text-platinum">{meta.detail}</h1>
            {extra}
            <div className="mt-4 flex flex-wrap gap-2">
              {state === "NOT_LAUNCHED" ? (
                <ButtonLink href="/assistant" size="sm">Browse supported public research</ButtonLink>
              ) : (
                <ButtonLink href={adjustHref} size="sm">Adjust and check again</ButtonLink>
              )}
              <ButtonLink href="/assistant/compare" size="sm" variant="secondary">New comparison</ButtonLink>
            </div>
          </div>
        </div>
      </Panel>
    );
  }

  return (
    <PageShell width="wide" className="pt-5 sm:pt-7">
      <p aria-live="polite" className="sr-only">{announcement}</p>

      <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-haze">
          <li><Link href="/assistant" className="hover:text-platinum">Research</Link></li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/assistant/compare" className="inline-flex min-h-11 items-center gap-1 hover:text-platinum">
              <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
              Compare
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-platinum/85">Results</li>
        </ol>
        <ButtonLink
          href="/assistant/compare"
          variant="secondary"
          size="sm"
          icon={<Plus aria-hidden="true" className="h-3.5 w-3.5" />}
        >
          New comparison
        </ButtonLink>
      </nav>

      {fatal ? (
        <EmptyState
          icon={<FileWarning aria-hidden="true" className="h-7 w-7" />}
          title="Comparison unavailable"
          description={
            <>
              {fatal.message}
              {fatal.requestId ? (
                <span className="mt-1 block font-mono text-[12px]">Reference {fatal.requestId}</span>
              ) : null}
            </>
          }
          action={<ButtonLink href="/assistant/compare">Build a new comparison</ButtonLink>}
        />
      ) : !job ? (
        <Panel className="p-5 sm:p-6" busy>
          <div className="flex items-center gap-2.5 text-sm text-haze">
            <Loader2 aria-hidden="true" className="as-motion-safe h-4 w-4 animate-spin text-iris-soft" />
            Loading the comparison…
          </div>
          <div className="mt-4 space-y-2">
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-40 w-full" />
          </div>
        </Panel>
      ) : job.state === "PENDING" ? (
        <ComparisonProgress job={job} />
      ) : job.state === "FAILED" ? (
        terminalPanel(
          "FAILED",
          <p className="mt-1 text-[13px] leading-6 text-haze">
            {job.failure?.message ?? "The service could not finish evaluating this request."}{" "}
            {job.failure?.code ? <span className="font-mono">Reference {job.failure.code}.</span> : null}{" "}
            Your selections are kept if you adjust and check again.
          </p>
        )
      ) : !result ? (
        terminalPanel(
          job.state,
          <p className="mt-1 text-[13px] leading-6 text-haze">
            {job.state === "RIGHTS_DENIED"
              ? "No protected numbers, excerpts or counts are shown. Choose a permitted metric or scope."
              : job.state === "METHOD_INVALID"
                ? "Re-run the checks with an approved, current method version."
                : job.state === "EXPIRED_OR_REVOKED"
                  ? "Comparisons are point-in-time snapshots tied to this browser session. Run a new check to see current evidence."
                  : "Comparison is not offered in this release. No preview data is shown."}
          </p>
        )
      ) : (
        <>
          {/* RES-01 / RES-02 header and receipt */}
          <header className="mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <Pill tone={STATE_META[result.state].tone} dot>
                {STATE_META[result.state].label}
              </Pill>
              <Pill tone="neutral">Result {result.ref} · v{result.resultVersion}</Pill>
              <Pill tone="neutral">
                Generated {formatDateTime(result.generatedAt, prefs.timeZone, prefs.numberLocale)}
              </Pill>
              <Pill tone="neutral">Method {result.methodId} {result.methodVersion}</Pill>
            </div>
            <h1 className="mt-3 text-balance text-2xl font-semibold leading-9 tracking-tight text-platinum sm:text-[30px] sm:leading-10">
              {result.title}
            </h1>
            <p className="mt-2 max-w-3xl text-[14px] leading-7 text-haze">{result.decisionNote}</p>
            <p className="mt-1 text-[13px] text-haze/80">
              A point-in-time snapshot, not real-time data. Observations dated{" "}
              {result.observationAsOf.earliest
                ? formatDate(result.observationAsOf.earliest, prefs.timeZone, prefs.numberLocale)
                : "—"}
              {result.observationAsOf.latest && result.observationAsOf.latest !== result.observationAsOf.earliest
                ? ` to ${formatDate(result.observationAsOf.latest, prefs.timeZone, prefs.numberLocale)}`
                : ""}
              .
            </p>
          </header>

          {mode === "guest" ? (
            <div className="mb-4 flex flex-col gap-2.5 rounded-xl border border-as-line/80 bg-as-panel/50 px-3.5 py-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-start gap-2.5 text-[13px] leading-6 text-haze">
                <Lock aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-warn" />
                <span>
                  <span className="font-semibold text-platinum">Temporary guest comparison.</span>{" "}
                  It is tied to this browser session, is not saved to an account and cannot be shared.
                </span>
              </p>
              <ButtonLink href={accessHref} variant="secondary" size="sm" className="shrink-0">
                Sign in to save
              </ButtonLink>
            </div>
          ) : (
            <p className="mb-4 rounded-xl border border-iris/25 bg-iris/[0.05] px-3.5 py-3 text-[13px] leading-6 text-haze">
              <span className="font-semibold text-platinum">Demo account.</span> Synthetic
              state only; no real identity, entitlement or saved copy is involved.
            </p>
          )}

          {result.state !== "READY" ? (
            <div className="mb-4">
              <Callout tone="warn" title={`${STATE_META[result.state].label} result`}>
                {STATE_META[result.state].detail} A withheld cell is not zero, is not
                estimated, and is not a reason to infer the number from another period.
              </Callout>
            </div>
          ) : null}

          {/* RES-13 conflict and revision notices */}
          {result.notices.length ? (
            <section aria-labelledby="notices-heading" className="mb-4 space-y-2">
              <h2 id="notices-heading" className="sr-only">Conflicts, revisions and gaps</h2>
              {result.notices.map((notice) => (
                <div key={notice.id} className="rounded-xl border border-warn/25 bg-warn/[0.05] px-4 py-3">
                  <p className="text-[13px] font-semibold text-warn">
                    {notice.kind.charAt(0) + notice.kind.slice(1).toLowerCase()}: {notice.title}
                  </p>
                  <p className="mt-0.5 text-[13px] leading-6 text-platinum/85">{notice.detail}</p>
                  <p className="mt-0.5 text-[12px] leading-5 text-haze">Impact: {notice.impact}</p>
                </div>
              ))}
            </section>
          ) : null}

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
            <div className="min-w-0 space-y-4">
              {/* RES-03 context banner */}
              <Panel className="p-4">
                <h2 className="text-[14px] font-semibold text-platinum">Comparison context</h2>
                <dl className="mt-2 grid gap-x-6 gap-y-1.5 text-[13px] sm:grid-cols-2">
                  <div>
                    <dt className="text-haze">Period</dt>
                    <dd className="text-platinum">{result.context.period.label}</dd>
                  </div>
                  <div>
                    <dt className="text-haze">Currency</dt>
                    <dd className="text-platinum">{result.context.currencyLabel}</dd>
                  </div>
                  <div>
                    <dt className="text-haze">Units</dt>
                    <dd className="text-platinum">{result.context.unitNote}</dd>
                  </div>
                  <div>
                    <dt className="text-haze">Publication cutoff</dt>
                    <dd className="text-platinum">
                      {result.context.publicationCutoff
                        ? formatDate(result.context.publicationCutoff, prefs.timeZone, prefs.numberLocale)
                        : "Latest published vintage"}
                    </dd>
                  </div>
                </dl>
                <ul className="mt-3 grid gap-2 border-t border-as-line/60 pt-3 sm:grid-cols-2 lg:grid-cols-3">
                  {result.context.instruments.map((instrument) => (
                    <li key={instrument.instrumentId} className="text-[12px] leading-5">
                      <span className="block text-[13px] font-semibold text-platinum">{instrument.name}</span>
                      <span className="block font-mono text-[11px] uppercase text-haze">
                        {instrument.canonicalId} · {instrument.venue} · {instrument.currency}
                      </span>
                      <span className="block text-haze">
                        {instrument.period
                          ? `${instrument.period.start ? `${formatDate(instrument.period.start, prefs.timeZone, prefs.numberLocale)} – ` : ""}${formatDate(instrument.period.end, prefs.timeZone, prefs.numberLocale)} · ${instrument.period.label}`
                          : "No period record held"}
                      </span>
                    </li>
                  ))}
                </ul>
              </Panel>

              {/* RES-04 table (md and up) */}
              <Panel className="hidden overflow-hidden md:block">
                <div className="flex items-center gap-2 border-b border-as-line/70 px-4 py-3">
                  <Scale aria-hidden="true" className="h-4 w-4 text-iris-soft" />
                  <h2 className="text-[14px] font-semibold text-platinum">Reported comparison</h2>
                </div>
                <div className="as-scroll overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <caption className="sr-only">
                      {result.title}. Each shown cell links to its claim and source. Withheld cells give a reason.
                    </caption>
                    <thead>
                      <tr className="border-b border-as-line bg-midnight-soft/60">
                        <th scope="col" className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-haze">
                          Metric and basis
                        </th>
                        {result.instruments.map((instrument) => (
                          <th key={instrument.id} scope="col" className="px-4 py-3 align-top">
                            <span className="block text-[13px] font-semibold text-platinum">{instrument.name}</span>
                            <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-wider text-haze">
                              {instrument.ticker} · {instrument.currency}
                            </span>
                          </th>
                        ))}
                        <th scope="col" className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-haze">
                          Derived differences
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.rows.map((row) => (
                        <tr key={row.metricId} className="border-b border-as-line/60 last:border-0">
                          <th scope="row" className="px-4 py-3 align-top">
                            <span className="block text-[13px] font-semibold text-platinum">{row.label}</span>
                            <span className="mt-0.5 block text-[12px] leading-5 text-haze">{row.basis}</span>
                            <span className="mt-0.5 block text-[11px] text-haze/80">{row.unitLabel}</span>
                          </th>
                          {result.instruments.map((instrument) => {
                            const cell = row.cells.find((item) => item.instrumentId === instrument.id);
                            return (
                              <td key={`${row.metricId}-${instrument.id}`} className="px-4 py-3 align-top">
                                {cell ? (
                                  <CellView
                                    cell={cell}
                                    instrumentName={instrument.name}
                                    row={row}
                                    sourceOrder={result.sources}
                                    onInspect={openInspector}
                                    timeZone={prefs.timeZone}
                                    locale={prefs.numberLocale}
                                  />
                                ) : (
                                  <span className="text-[12px] text-haze">— Not evaluated</span>
                                )}
                              </td>
                            );
                          })}
                          <td className="space-y-1.5 px-4 py-3 align-top">
                            {row.deltas.length ? (
                              row.deltas.map((delta) => (
                                <DeltaView key={delta.id} delta={delta} tickers={tickers} />
                              ))
                            ) : (
                              <span className="text-[12px] text-haze">None for this method</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="border-t border-as-line/70 px-4 py-2.5 text-[12px] leading-5 text-haze/85">
                  Each shown cell opens its claim, source locator and rights state. A
                  difference is arithmetic on two eligible cells, not a ranking.
                </p>
              </Panel>

              {/* Mobile metric cards (WF-05 §03): no horizontal scroll */}
              <section aria-labelledby="cards-heading" className="space-y-3 md:hidden">
                <h2 id="cards-heading" className="text-[15px] font-semibold text-platinum">
                  Reported comparison
                </h2>
                {result.rows.map((row) => (
                  <article
                    key={row.metricId}
                    aria-labelledby={`card-${row.metricId}`}
                    className="rounded-2xl border border-as-line bg-as-panel/60 p-4"
                  >
                    <h3 id={`card-${row.metricId}`} className="text-[14px] font-semibold text-platinum">
                      {row.label}
                    </h3>
                    <p className="text-[12px] leading-5 text-haze">{row.basis} · {row.unitLabel}</p>
                    <dl className="mt-2 space-y-2">
                      {result.instruments.map((instrument) => {
                        const cell = row.cells.find((item) => item.instrumentId === instrument.id);
                        return (
                          <div key={instrument.id}>
                            <dt className="text-[12px] font-medium text-platinum/85">
                              {instrument.name} <span className="font-mono text-haze">({instrument.ticker})</span>
                            </dt>
                            <dd>
                              {cell ? (
                                <CellView
                                  cell={cell}
                                  instrumentName={instrument.name}
                                  row={row}
                                  sourceOrder={result.sources}
                                  onInspect={openInspector}
                                  timeZone={prefs.timeZone}
                                  locale={prefs.numberLocale}
                                />
                              ) : (
                                <span className="text-[12px] text-haze">— Not evaluated</span>
                              )}
                            </dd>
                          </div>
                        );
                      })}
                    </dl>
                    {row.deltas.length ? (
                      <div className="mt-3 space-y-1.5 border-t border-as-line/60 pt-3">
                        {row.deltas.map((delta) => (
                          <DeltaView key={delta.id} delta={delta} tickers={tickers} />
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </section>

              {/* RES-11 interpretation, claim-bound */}
              {result.interpretation.length ? (
                <Panel className="p-4 sm:p-5">
                  <h2 className="text-[14px] font-semibold text-platinum">What the evidence shows</h2>
                  <div className="mt-2 space-y-2 text-[14px] leading-7 text-platinum/85">
                    {result.interpretation.map((paragraph, index) => (
                      <p key={index}>
                        <CitationText
                          segments={paragraph}
                          claims={result.claims}
                          sourceOrder={result.sources}
                          onInspect={openInspector}
                        />
                      </p>
                    ))}
                  </div>
                </Panel>
              ) : null}

              <div className="flex flex-wrap items-center gap-1.5">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => openInspector()}
                  icon={<FileSearch aria-hidden="true" className="h-3.5 w-3.5" />}
                >
                  Inspect evidence
                </Button>
                <ButtonLink
                  href={adjustHref}
                  variant="ghost"
                  size="sm"
                  icon={<SlidersHorizontal aria-hidden="true" className="h-3.5 w-3.5" />}
                >
                  Adjust comparison
                </ButtonLink>
                <ButtonLink
                  href={`/assistant/report?comparisonRef=${encodeURIComponent(comparisonRef)}${firstClaim ? `&claimId=${encodeURIComponent(firstClaim)}` : ""}`}
                  variant="ghost"
                  size="sm"
                >
                  Report a claim
                </ButtonLink>
              </div>

              {/* RES-09 method accordion */}
              <Disclosure
                title="Method and calculation trace"
                summary={`Registry ${result.methodRegistry} · catalogue ${result.metricCatalogVersion}`}
              >
                <ul className="space-y-3">
                  {result.methods.map((method) => (
                    <li key={`${method.id}-${method.version}`} className="rounded-lg border border-as-line/60 bg-midnight-soft/40 p-3">
                      <p className="flex flex-wrap items-center justify-between gap-2 text-[13px] font-semibold text-platinum">
                        {method.name}
                        <span className="font-mono text-[11px] text-haze">{method.version} · {method.registryVersion}</span>
                      </p>
                      <p className="mt-1 text-[13px] leading-6 text-haze">{method.summary}</p>
                      <dl className="mt-2 grid gap-1.5 text-[12px] leading-5 sm:grid-cols-2">
                        <div><dt className="text-haze/80">Formula</dt><dd className="font-mono text-platinum/85">{method.formula}</dd></div>
                        <div><dt className="text-haze/80">Rounding</dt><dd className="text-platinum/85">{method.rounding}</dd></div>
                        <div><dt className="text-haze/80">Adjustments</dt><dd className="text-platinum/85">{method.adjustments}</dd></div>
                        <div><dt className="text-haze/80">Coverage</dt><dd className="text-platinum/85">{method.coverage}</dd></div>
                        <div className="sm:col-span-2">
                          <dt className="text-haze/80">Source windows</dt>
                          <dd className="text-platinum/85">{method.windows.join(" · ") || "—"}</dd>
                        </div>
                      </dl>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[12px] font-semibold text-platinum">Limits of this comparison</p>
                <ul className="mt-1 space-y-1">
                  {result.limitations.map((limitation) => (
                    <li key={limitation} className="flex items-start gap-1.5 text-[12px] leading-5 text-haze">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-3 w-3 shrink-0 text-haze/50" />
                      {limitation}
                    </li>
                  ))}
                </ul>
              </Disclosure>

              {/* RES-15 follow-ups */}
              {result.followUps.length ? (
                <section aria-labelledby="comparison-followups" className="rounded-2xl border border-as-line bg-as-panel/65 p-4 sm:p-5">
                  <h2 id="comparison-followups" className="text-[14px] font-semibold text-platinum">
                    Continue as a research question
                  </h2>
                  <p className="mt-1 text-[13px] leading-6 text-haze">
                    Opens the composer with a fresh public question. No licensed
                    values from this comparison are carried over.
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {result.followUps.map((followUp) => (
                      <li key={followUp}>
                        <Link
                          href="/assistant#composer"
                          onClick={() => stashDraft({ question: followUp, scopeId: followUpScope })}
                          className="flex min-h-11 items-start gap-2 rounded-lg border border-as-line/70 bg-midnight-soft/40 px-3 py-2 text-[13px] leading-6 text-platinum/85 transition-colors hover:border-iris/50 hover:text-platinum"
                        >
                          <ArrowUpRight aria-hidden="true" className="mt-1 h-3 w-3 shrink-0 text-iris-soft" />
                          {followUp}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>

            {/* RES-10 evidence and rights summary */}
            <aside className="min-w-0">
              <div className="flex flex-col gap-3 xl:sticky xl:top-20">
                <Panel className="p-4">
                  <h2 className="flex items-center gap-2 text-[14px] font-semibold text-platinum">
                    <ShieldCheck aria-hidden="true" className="h-4 w-4 text-iris-soft" />
                    Evidence and rights
                  </h2>
                  <dl className="mt-3 grid grid-cols-4 divide-x divide-as-line/60 border-y border-as-line/60 text-center">
                    {(["PASS", "PARTIAL", "CONFLICT", "DENIED"] as const).map((code) => (
                      <div key={code} className="px-1 py-2.5">
                        <dd className="text-lg font-semibold leading-none text-platinum">{result.evidence.counts[code]}</dd>
                        <dt className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-haze">{code.toLowerCase()}</dt>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-haze/80">Numbered sources</p>
                  <ul className="mt-1.5 space-y-1">
                    {inspectorSources.map((source, index) => {
                      const entry = result.evidence.sources.find((item) => item.sourceId === source.id);
                      return (
                        <li key={source.id}>
                          <button
                            type="button"
                            onClick={() => openInspector(undefined, source.id)}
                            className="flex min-h-11 w-full items-start gap-2 rounded-lg px-1 py-1.5 text-left transition-colors hover:bg-white/[0.04]"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-as-line bg-midnight/60 font-mono text-[11px] text-haze">
                              {index + 1}
                            </span>
                            <span className="min-w-0">
                              <span className="line-clamp-2 block text-[13px] font-medium leading-5 text-platinum/90">
                                {source.shortTitle}
                              </span>
                              <span className="mt-0.5 flex flex-wrap items-center gap-1 text-[11px] text-haze">
                                {source.publisher}
                                <TierBadge tier={source.tier} />
                                {entry ? <span>· {entry.factStatus} · {entry.licenceDecision}</span> : null}
                              </span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  {result.evidence.gaps.length ? (
                    <>
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-haze/80">Coverage gaps</p>
                      <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[12px] leading-5 text-haze">
                        {result.evidence.gaps.map((gap) => <li key={gap}>{gap}</li>)}
                      </ul>
                    </>
                  ) : null}
                  <dl className="mt-3 space-y-1.5 border-t border-as-line/60 pt-2.5 text-[12px]">
                    <div className="flex justify-between gap-2">
                      <dt className="text-haze">Observations as of</dt>
                      <dd className="text-right text-platinum/85">{formatDate(result.timeContext.asOf, prefs.timeZone, prefs.numberLocale)}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-haze">Retrieved by Talvrin</dt>
                      <dd className="text-right text-platinum/85">{formatDate(result.timeContext.retrievedAt, prefs.timeZone, prefs.numberLocale)}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-haze">Generated</dt>
                      <dd className="text-right text-platinum/85">{formatDateTime(result.generatedAt, prefs.timeZone, prefs.numberLocale)}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-haze">Display policy</dt>
                      <dd className="text-right font-mono text-platinum/85">{result.displayPolicyVersion}</dd>
                    </div>
                  </dl>
                </Panel>

                <div className="rounded-xl border border-as-line/60 bg-midnight-soft/40 p-3.5">
                  <p className="flex items-center gap-1.5 text-[13px] font-semibold text-platinum">
                    <AlertTriangle aria-hidden="true" className="h-3.5 w-3.5 text-warn" />
                    No verdict
                  </p>
                  <p className="mt-1 text-[12px] leading-5 text-haze">
                    {NO_ADVICE_COPY} A comparison does not imply that one instrument is
                    better, cheaper or more suitable.
                  </p>
                </div>
                {mode === "account" ? (
                  <Link href="/assistant/history" className="inline-flex min-h-11 items-center gap-1.5 text-[13px] font-semibold text-iris-soft hover:text-white">
                    <History aria-hidden="true" className="h-3.5 w-3.5" />
                    This session
                  </Link>
                ) : null}
                <p className="font-mono text-[11px] uppercase leading-5 tracking-[0.1em] text-haze/70">{FIXTURE_LABEL}</p>
              </div>
            </aside>
          </div>
        </>
      )}

      <EvidenceInspector
        open={inspectorOpen}
        onClose={closeInspector}
        answer={inspectorAnswer}
        sources={inspectorSources}
        answerRef={comparisonRef}
        initialClaimId={inspectClaim}
        initialSourceId={inspectSource}
        timeZone={prefs.timeZone}
        locale={prefs.numberLocale}
        mode="comparison"
      />
    </PageShell>
  );
}
