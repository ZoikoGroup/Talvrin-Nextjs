"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock3,
  Download,
  FileLock2,
  FileText,
  Info,
  Lock,
  Share2,
  ShieldCheck,
} from "lucide-react";
import type {
  ExportDownloadGrant,
  ExportEntitlementView,
  ExportFormat,
  ExportJobView,
  ExportPreflight,
  PublishedAnswer,
  ResearchJobView,
  SourceRecord,
} from "@/lib/assistant/types";
import {
  apiJson,
  ApiError,
  GUEST_SESSION_HEADER,
  guestSessionId,
  newIdempotencyKey,
  clearExportHistory,
  loadExportHistory,
  readSessionEntries,
  recordExportHistory,
  type ExportHistoryEntry,
  type SessionEntry,
} from "@/lib/assistant/client";
import { formatDate, formatDateTime } from "@/lib/assistant/format";
import { FIXTURE_LABEL } from "@/lib/assistant/taxonomy";
import { useDemoMode } from "@/components/assistant/shell/DemoModeProvider";
import { useAssistantPrefs } from "@/components/assistant/shell/AssistantPrefsProvider";
import {
  Pill,
  RightsBadge,
  StatusBadge,
} from "@/components/assistant/ui/Badge";
import { Button, ButtonLink } from "@/components/assistant/ui/Button";
import { Checkbox } from "@/components/assistant/ui/Field";
import { EmptyState } from "@/components/assistant/ui/Misc";
import { PageIntro, PageShell, Panel } from "@/components/assistant/ui/Panel";

type ContextState =
  | { state: "idle" }
  | { state: "loading" }
  | {
      state: "ready";
      job: ResearchJobView;
      answer: PublishedAnswer;
      sources: SourceRecord[];
    }
  | { state: "missing"; message: string };

type PreflightState =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "ready"; result: ExportPreflight }
  | { state: "error"; message: string };

type JobState =
  | { state: "idle" }
  | { state: "creating" }
  | { state: "polling"; job: ExportJobView }
  | { state: "failed"; message: string };

const FORMATS: {
  id: ExportFormat;
  title: string;
  description: string;
  detail: string;
}[] = [
  {
    id: "PDF",
    title: "PDF",
    description: "Read-only evidence snapshot",
    detail:
      "Cover, pinned as-of, narrative, claim citations, methodology, limitations and source appendix.",
  },
  {
    id: "DOCX",
    title: "DOCX",
    description: "Editable research document",
    detail:
      "Native headings and tables with a provenance warning. Edits are not authenticated after export.",
  },
  {
    id: "CSV",
    title: "CSV",
    description: "Claim and source register",
    detail:
      "Typed fact table of permitted figures with units, dates and source IDs. No prose, excerpts or method text.",
  },
];

/** Decision → pill tone (WF-10 §9). */
function decisionTone(decision: ExportPreflight["decision"]) {
  if (decision === "ELIGIBLE") return "ok" as const;
  if (decision === "PARTIAL" || decision === "AUTHORIZATION_REQUIRED") return "warn" as const;
  return "danger" as const;
}

function jobTone(status: ExportJobView["status"]) {
  if (status === "READY") return "ok" as const;
  if (status === "QUEUED" || status === "PREPARING" || status === "RENDERING") return "info" as const;
  if (status === "CANCELLED") return "neutral" as const;
  return "danger" as const;
}

function checkIcon(status: string) {
  if (status === "PASS") {
    return <CheckCircle2 aria-hidden="true" className="h-3.5 w-3.5 text-ok" />;
  }
  if (status === "WARN") {
    return <AlertTriangle aria-hidden="true" className="h-3.5 w-3.5 text-warn" />;
  }
  return <Lock aria-hidden="true" className="h-3.5 w-3.5 text-danger" />;
}

export default function ExportExperience({ initialRef }: { initialRef?: string }) {
  const { mode, ready, setMode } = useDemoMode();
  const { prefs } = useAssistantPrefs();
  const [entries, setEntries] = useState<SessionEntry[]>([]);
  const [selectedRef, setSelectedRef] = useState(initialRef ?? "");
  const [context, setContext] = useState<ContextState>({ state: "idle" });
  const [format, setFormat] = useState<ExportFormat>("PDF");
  const [preflightState, setPreflightState] = useState<PreflightState>({
    state: "idle",
  });
  const [acknowledged, setAcknowledged] = useState(false);
  const [jobState, setJobState] = useState<JobState>({ state: "idle" });
  const [jobError, setJobError] = useState<string | null>(null);
  const [history, setHistory] = useState<ExportHistoryEntry[]>([]);
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const [copied, setCopied] = useState(false);
  const [historyStatus, setHistoryStatus] = useState<string | null>(null);
  const idempotencyKey = useRef(newIdempotencyKey());
  const recordedJob = useRef<string | null>(null);
  const [entitlement, setEntitlement] = useState<ExportEntitlementView | null>(null);
  const [downloading, setDownloading] = useState<string | null>(null);
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState("");

  /*
   * Entitlement is held by the server for this browser session (WF-10
   * AC-01). Switching to the demo account asks the server for a synthetic
   * grant; switching back revokes it. The client never asserts access.
   */
  useEffect(() => {
    if (!ready) return;
    let cancelled = false;
    const method = mode === "account" ? "POST" : "DELETE";
    apiJson<{ entitlement: ExportEntitlementView }>(
      "/api/assistant/exports/entitlement",
      { method }
    )
      .then((response) => {
        if (!cancelled) setEntitlement(response.entitlement);
      })
      .catch(() => {
        if (!cancelled) setEntitlement(null);
      });
    return () => {
      cancelled = true;
    };
  }, [mode, ready]);

  useEffect(() => {
    const sessionEntries = readSessionEntries();
    setEntries(sessionEntries);
    setHistory(loadExportHistory());
    if (!initialRef && sessionEntries.length) {
      setSelectedRef(sessionEntries[0].ref);
    }
  }, [initialRef]);

  useEffect(() => {
    if (!selectedRef) {
      setContext({ state: "idle" });
      return;
    }
    let cancelled = false;
    setContext({ state: "loading" });
    setAcknowledged(false);
    setJobState({ state: "idle" });
    setJobError(null);
    idempotencyKey.current = newIdempotencyKey();
    Promise.all([
      apiJson<{ job: ResearchJobView }>(
        `/api/assistant/research/${encodeURIComponent(selectedRef)}`
      ),
      apiJson<{ answer: PublishedAnswer; sources: SourceRecord[] }>(
        `/api/assistant/research/${encodeURIComponent(selectedRef)}/answer`
      ),
    ])
      .then(([jobResponse, answerResponse]) => {
        if (cancelled) return;
        setContext({
          state: "ready",
          job: jobResponse.job,
          answer: answerResponse.answer,
          sources: answerResponse.sources,
        });
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setContext({
          state: "missing",
          message:
            error instanceof ApiError
              ? error.message
              : "The selected answer could not be loaded.",
        });
      });
    return () => {
      cancelled = true;
    };
  }, [selectedRef]);

  const answerVersion =
    context.state === "ready" ? context.answer.answerVersion : "";

  useEffect(() => {
    if (!ready || !selectedRef || !answerVersion) return;
    let cancelled = false;
    setPreflightState({ state: "loading" });
    apiJson<ExportPreflight>("/api/assistant/exports/preflight", {
      method: "POST",
      body: JSON.stringify({
        answerRef: selectedRef,
        answerVersion,
        format,
        purpose: "PERSONAL_RESEARCH",
        destination: "DOWNLOAD",
      }),
    })
      .then((result) => {
        if (cancelled) return;
        setPreflightState({ state: "ready", result });
        setAnnouncement(`Export check for ${result.format}: ${result.userMessage}`);
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setPreflightState({
            state: "error",
            message:
              error instanceof ApiError
                ? error.message
                : "The export preflight could not be completed.",
          });
        }
      });
    return () => {
      cancelled = true;
    };
  }, [format, ready, selectedRef, answerVersion, entitlement?.active]);

  useEffect(() => {
    idempotencyKey.current = newIdempotencyKey();
    setAcknowledged(false);
    setJobState({ state: "idle" });
    setJobError(null);
    recordedJob.current = null;
  }, [format]);

  const preflight =
    preflightState.state === "ready" ? preflightState.result : null;
  const answer = context.state === "ready" ? context.answer : null;
  const sources = useMemo(
    () => (context.state === "ready" ? context.sources : []),
    [context]
  );
  const job =
    jobState.state === "polling" ? jobState.job : null;

  useEffect(() => {
    if (jobState.state !== "polling") return;
    const current = jobState.job;
    if (current.terminal) {
      if (
        current.status === "READY" &&
        recordedJob.current !== current.id &&
        selectedRef
      ) {
        recordedJob.current = current.id;
        recordExportHistory({
          id: current.id,
          answerRef: selectedRef,
          question: context.state === "ready" ? context.job.question : "",
          format: current.format,
          createdAt: current.createdAt,
          fileName: current.fileName,
          partial: current.partial,
          omittedSourceCount: current.omittedSourceCount,
        });
        setHistory(loadExportHistory());
      }
      return;
    }
    let cancelled = false;
    const timer = window.setTimeout(async () => {
      try {
        const response = await apiJson<{ job: ExportJobView }>(
          `/api/assistant/exports/${encodeURIComponent(current.id)}`
        );
        if (cancelled) return;
        setJobState({ state: "polling", job: response.job });
        if (response.job.status !== current.status) {
          setAnnouncement(`Export ${response.job.status.toLowerCase().replaceAll("_", " ")}. ${response.job.message}`);
        }
      } catch (error) {
        if (cancelled) return;
        setJobError(
          error instanceof ApiError
            ? error.message
            : "The export status could not be refreshed."
        );
      }
    }, 700);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [context, jobState, selectedRef]);

  // Every non-allowed item, as listed by the server (no silent suppression).
  const omitted = useMemo(() => (preflight ? preflight.omissions : []), [preflight]);

  const selectedEntry = entries.find((entry) => entry.ref === selectedRef) ?? null;

  const canGenerate =
    preflight?.format === format &&
    preflight.allowed === true &&
    (!preflight.requiresPartialAcknowledgement || acknowledged) &&
    jobState.state !== "creating" &&
    jobState.state !== "polling";

  async function generate() {
    if (!preflight || preflight.format !== format) return;
    if (!preflight.allowed) return;
    if (preflight.requiresPartialAcknowledgement && !acknowledged) return;
    if (job) idempotencyKey.current = newIdempotencyKey();
    setJobError(null);
    setJobState({ state: "creating" });
    try {
      const response = await apiJson<{ job: ExportJobView }>(
        "/api/assistant/exports",
        {
          method: "POST",
          headers: { "idempotency-key": idempotencyKey.current },
          body: JSON.stringify({
            answerRef: selectedRef,
            answerVersion: preflight.answerVersion,
            format,
            purpose: preflight.purpose,
            destination: preflight.destination,
            acknowledged,
            manifestHash: preflight.manifestHash,
            decisionId: preflight.decisionId,
          }),
        }
      );
      setJobState({ state: "polling", job: response.job });
    } catch (error) {
      setJobState({ state: "failed", message: "" });
      setJobError(
        error instanceof ApiError
          ? error.message
          : "The citation package could not be queued."
      );
    }
  }

  /**
   * WF-10 §5.1 DOWNLOAD gate: ask the server for a one-use, short-TTL token
   * (it re-checks session, entitlement, pinned revision and current rights),
   * then fetch with the session header. A copied URL does not work elsewhere.
   */
  async function download(id: string) {
    setDownloading(id);
    setDownloadError(null);
    try {
      const { download: grant, job: latest } = await apiJson<{
        download: ExportDownloadGrant;
        job: ExportJobView;
      }>(`/api/assistant/exports/${encodeURIComponent(id)}/download`, {
        method: "POST",
      });
      if (jobState.state === "polling" && jobState.job.id === id) {
        setJobState({ state: "polling", job: latest });
      }
      const response = await fetch(grant.downloadUrl, {
        headers: { [GUEST_SESSION_HEADER]: guestSessionId() },
        cache: "no-store",
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new ApiError(
          data?.safeMessage ?? data?.error ?? "The package could not be delivered.",
          response.status,
          data?.code
        );
      }
      const blob = await response.blob();
      const disposition = response.headers.get("content-disposition") ?? "";
      const fileName = /filename="([^"]+)"/.exec(disposition)?.[1] ?? latest.fileName ?? "talvrin-export";
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = fileName;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 2000);
      setAnnouncement(`${fileName} downloaded. This copy is now outside Talvrin controls.`);
    } catch (error) {
      setDownloadError(
        error instanceof ApiError
          ? error.message
          : "The download could not be authorised."
      );
    } finally {
      setDownloading(null);
    }
  }

  async function cancelJob(id: string) {
    try {
      const response = await apiJson<{ job: ExportJobView }>(
        `/api/assistant/exports/${encodeURIComponent(id)}`,
        { method: "DELETE" }
      );
      setJobState({ state: "polling", job: response.job });
      setAnnouncement(response.job.message);
    } catch (error) {
      setJobError(
        error instanceof ApiError ? error.message : "The job could not be cancelled."
      );
    }
  }

  async function copyExportRef(id: string) {
    try {
      await navigator.clipboard.writeText(id);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  if (!entries.length && !selectedRef) {
    return (
      <PageShell width="default" className="pt-8">
        <PageIntro
          eyebrow="Public research · Export"
          title="An export is an evidence snapshot."
          lead="The package pins an answer revision, claim-level citations, methodology and a rights manifest. It is not an unrestricted copy of licensed data."
          meta={
            <div className="flex flex-wrap items-center gap-2">
              <Pill tone="warn" dot>
                {mode === "guest"
                  ? "Guest · export gated"
                  : "Demo account · synthetic package"}
              </Pill>
              <Pill>Download copies leave Talvrin controls</Pill>
            </div>
          }
          actions={
            <ButtonLink href="/assistant" size="sm">
              Start research
            </ButtonLink>
          }
        />
        <EmptyState
          icon={<FileLock2 aria-hidden="true" className="h-7 w-7" />}
          title="No research answer in this browser session"
          description="An export must begin from a published answer. Start a question, then return here. Guest exports remain gated; demo account mode can generate a watermarked synthetic package for interface review."
          action={
            <div className="flex flex-wrap justify-center gap-1.5">
              <ButtonLink href="/assistant" size="sm">
                Ask a research question
              </ButtonLink>
              <ButtonLink href="/assistant/access" variant="secondary" size="sm">
                Review access gates
              </ButtonLink>
            </div>
          }
        />
      </PageShell>
    );
  }

  return (
    <PageShell width="wide" className="pt-8">
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>
      <PageIntro
        eyebrow="Public research · Export"
        title="Pin the evidence. Do not widen the licence."
        lead="This composer starts from an exact answer revision. Claims, citations, methods, as-of dates and a rights manifest travel with the package. Optional charting and section scope are locked until their own rights and calculation contracts are approved."
        meta={
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone={mode === "guest" ? "warn" : "iris"} dot>
              {mode === "guest"
                ? "Guest · authorization required"
                : "Demo account · synthetic export"}
            </Pill>
            <Pill>Rights manifest pinned at generation</Pill>
            <Pill>No public share link</Pill>
          </div>
        }
        actions={
          <ButtonLink
            href="/assistant/history"
            variant="secondary"
            size="sm"
            icon={<ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />}
          >
            Back to research
          </ButtonLink>
        }
      />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_350px] xl:items-start">
        <div className="min-w-0 space-y-4">
          <Panel className="p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-[14px] font-semibold text-platinum">
                  Research revision
                </h2>
                <p className="mt-0.5 text-[12px] leading-5 text-haze">
                  An export cannot start from a question title alone. Select an
                  answer that is still available on this server.
                </p>
              </div>
              <Pill tone="neutral">
                {entries.length} session item{entries.length === 1 ? "" : "s"}
              </Pill>
            </div>

            {entries.length ? (
              <div className="mt-3">
                <label
                  htmlFor="export-ref"
                  className="mb-1 block text-[13px] font-semibold text-platinum"
                >
                  Published answer
                </label>
                <select
                  id="export-ref"
                  value={selectedRef}
                  onChange={(event) => {
                    setSelectedRef(event.target.value);
                    setJobState({ state: "idle" });
                  }}
                  className="h-11 w-full rounded-xl border border-as-line bg-midnight-soft px-3 text-[12px] text-platinum focus:border-iris/70 focus:outline-none focus:ring-2 focus:ring-iris/25"
                >
                  {selectedRef &&
                  !entries.some((entry) => entry.ref === selectedRef) ? (
                    <option value={selectedRef}>
                      Linked answer · {selectedRef}
                    </option>
                  ) : null}
                  {entries.map((entry) => (
                    <option key={entry.ref} value={entry.ref}>
                      {entry.question} · {entry.ref}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="mt-3 rounded-xl border border-warn/25 bg-warn/[0.05] p-3.5">
                <p className="text-[12px] leading-5 text-haze">
                  This reference is not in the current browser history. It may be
                  from another browser or an earlier server process.{" "}
                  <Link
                    href="/assistant/history"
                    className="font-medium text-iris-soft hover:text-white"
                  >
                    Review session research
                  </Link>
                  .
                </p>
              </div>
            )}

            {context.state === "loading" ? (
              <div className="mt-3 h-20 animate-pulse rounded-xl border border-as-line/60 bg-as-panel/40" />
            ) : null}

            {context.state === "missing" ? (
              <div className="mt-3 rounded-xl border border-danger/25 bg-danger/[0.05] p-3.5">
                <p className="flex items-start gap-2 text-[11px] leading-5 text-haze">
                  <AlertTriangle
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-danger"
                  />
                  {context.message} A package cannot be built from a missing
                  revision. Rerun the question and export the new published
                  answer.
                </p>
              </div>
            ) : null}

            {context.state === "ready" ? (
              <div className="mt-3 rounded-xl border border-as-line/70 bg-midnight-soft/40 p-3.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <StatusBadge status={context.answer.status} />
                  <Pill tone="neutral">v{context.answer.answerVersion}</Pill>
                  <Pill tone="neutral">
                    {context.answer.claims.length} claims
                  </Pill>
                  <Pill tone="neutral">
                    {context.answer.sources.length} sources
                  </Pill>
                  <span className="font-mono text-[11px] text-haze/70">
                    {selectedRef}
                  </span>
                </div>
                <p className="mt-2 text-[13px] font-semibold leading-5 text-platinum">
                  {context.answer.headline}
                </p>
                <p className="mt-1 text-[12px] leading-5 text-haze">
                  {context.job.question}
                </p>
                <div className="mt-2 grid gap-2 border-t border-as-line/50 pt-2 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-haze/70">
                      Generated
                    </p>
                    <p className="mt-0.5 text-[12px] text-platinum">
                      {formatDateTime(
                        context.answer.timeContext.generatedAt,
                        prefs.timeZone,
                        prefs.numberLocale
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-haze/70">
                      As of
                    </p>
                    <p className="mt-0.5 text-[12px] text-platinum">
                      {formatDate(
                        context.answer.timeContext.asOf,
                        prefs.numberLocale
                      )}
                    </p>
                  </div>
                </div>
                {selectedEntry ? (
                  <p className="mt-2 text-[12px] text-haze/70">
                    Session entry expires{" "}
                    {formatDateTime(
                      selectedEntry.expiresAt,
                      prefs.timeZone,
                      prefs.numberLocale
                    )}
                    . The package pins this answer version even if a newer answer
                    is later published.
                  </p>
                ) : null}
              </div>
            ) : null}
          </Panel>

          {context.state === "ready" ? (
            <Panel className="p-4 sm:p-5">
              <details>
                <summary className="block cursor-pointer py-3 text-[13px] font-semibold text-platinum marker:text-iris-soft">
                  Preview permitted output ({context.answer.claims.filter((claim) => claim.verification !== "UNSUPPORTED").length} claims)
                </summary>
                <div className="mt-3 rounded-xl border border-as-line/60 bg-midnight-soft/25 p-3">
                  <p className="text-[12px] font-mono uppercase tracking-[0.12em] text-haze/70">
                    Sanitised package preview
                  </p>
                  <p className="mt-1 text-[13px] font-semibold leading-5 text-platinum">
                    {context.answer.headline}
                  </p>
                  <ul className="mt-2 space-y-2">
                    {context.answer.claims
                      .filter((claim) => claim.verification !== "UNSUPPORTED")
                      .slice(0, 5)
                      .map((claim) => (
                        <li
                          key={claim.id}
                          className="rounded-lg border border-as-line/50 p-2"
                        >
                          <div className="flex flex-wrap items-center gap-1">
                            <span className="font-mono text-[11px] text-haze/70">
                              {claim.id}
                            </span>
                            <Pill
                              tone={
                                claim.verification === "SUPPORTED"
                                  ? "ok"
                                  : claim.verification === "CONTESTED"
                                    ? "warn"
                                    : "danger"
                              }
                            >
                              {claim.verification}
                            </Pill>
                            <span className="text-[11px] text-haze/70">
                              {claim.sourceIds.length} source
                              {claim.sourceIds.length === 1 ? "" : "s"}
                            </span>
                          </div>
                          <p className="mt-0.5 text-[12px] leading-4 text-platinum/90">
                            {claim.text}
                          </p>
                        </li>
                      ))}
                  </ul>
                  {context.answer.claims.filter((claim) => claim.verification !== "UNSUPPORTED").length > 5 ? (
                    <p className="mt-1.5 text-[12px] text-haze/70">
                      Showing the first five eligible claims. The package contains
                      the full permitted claim map and source register.
                    </p>
                  ) : null}
                  <p className="mt-2 border-t border-as-line/50 pt-1.5 text-[12px] leading-4 text-haze/70">
                    Withheld excerpts are absent here as well. They are listed in
                    the omissions manifest after preflight; source rights can still
                    block the full package.
                  </p>
                </div>
              </details>
            </Panel>
          ) : null}

          <Panel className="p-4 sm:p-5">
            <h2 className="text-[14px] font-semibold text-platinum">
              Format and scope
            </h2>
            <p className="mt-0.5 text-[12px] leading-5 text-haze">
              Format selection changes the eligible content. Citations and
              methodology cannot be switched off.
            </p>

            <fieldset className="mt-3">
              <legend className="sr-only">Export format</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {FORMATS.map((option) => {
                  const checked = format === option.id;
                  return (
                    <label
                      key={option.id}
                      className={clsx(
                        "flex cursor-pointer gap-2.5 rounded-xl border p-3",
                        checked
                          ? "border-iris/60 bg-iris/[0.06]"
                          : "border-as-line/70 bg-as-panel/40 hover:border-iris/30"
                      )}
                    >
                      <input
                        type="radio"
                        name="export-format"
                        value={option.id}
                        checked={checked}
                        onChange={() => setFormat(option.id)}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-[#6f5bff]"
                      />
                      <span className="min-w-0">
                        <span className="flex items-center gap-1.5">
                          <FileText
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-iris-soft"
                          />
                          <span className="text-[13px] font-semibold text-platinum">
                            {option.title}
                          </span>
                        </span>
                        <span className="mt-0.5 block text-[12px] font-medium text-iris-soft/80">
                          {option.description}
                        </span>
                        <span className="mt-1 block text-[12px] leading-4 text-haze">
                          {option.detail}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <div className="rounded-xl border border-as-line/70 p-3">
                <p className="flex items-center gap-1.5 text-[12px] font-semibold text-platinum">
                  <Lock aria-hidden="true" className="h-3.5 w-3.5 text-haze" />
                  Whole approved answer
                </p>
                <p className="mt-1 text-[12px] leading-4 text-haze">
                  Selected. Section-only export contracts are not configured in
                  this build, so scope cannot narrow silently.
                </p>
              </div>
              <div className="rounded-xl border border-as-line/70 p-3 opacity-75">
                <p className="flex items-center gap-1.5 text-[12px] font-semibold text-platinum">
                  <Lock aria-hidden="true" className="h-3.5 w-3.5 text-haze" />
                  Optional chart and table pack
                </p>
                <p className="mt-1 text-[12px] leading-4 text-haze">
                  Disabled. No permitted derived chart is attached to this
                  answer. CSV still carries the claim and source registers.
                </p>
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-as-line/70 bg-midnight-soft/30 p-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-haze/70">
                Always included
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {[
                  "Claim citations",
                  "Source register",
                  "Methodology",
                  "As-of dates",
                  "Rights manifest",
                  "Limitations",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-as-line/70 px-2 py-0.5 text-[12px] text-platinum/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Panel>

          <Panel className="p-4 sm:p-5" variant="raised">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-[14px] font-semibold text-platinum">
                  Eligibility and omissions
                </h2>
                <p className="mt-0.5 text-[12px] leading-5 text-haze">
                  Server preflight must pass before generation. Exceptions become
                  explicit omissions, never silent suppression.
                </p>
              </div>
              {preflightState.state === "loading" ? (
                <Pill tone="info">Running preflight…</Pill>
              ) : preflight ? (
                <Pill tone={decisionTone(preflight.decision)}>
                  {preflight.decision.replaceAll("_", " ").toLowerCase()}
                </Pill>
              ) : null}
            </div>

            {preflightState.state === "error" ? (
              <div className="mt-3 rounded-xl border border-danger/25 bg-danger/[0.05] p-3.5">
                <p className="text-[12px] leading-5 text-danger">
                  {preflightState.message}
                </p>
              </div>
            ) : null}

            {preflight ? (
              <>
                <p className="mt-3 text-[13px] leading-6 text-platinum/90">
                  {preflight.userMessage}
                </p>
                <dl className="mt-2 grid grid-cols-5 gap-1 text-center">
                  {(["ALLOWED", "PARTIAL", "UNRESOLVED", "UNAVAILABLE", "REVOKED"] as const).map((state) => (
                    <div key={state} className="rounded-lg border border-as-line/60 px-1 py-1.5">
                      <dd className="text-[14px] font-semibold text-platinum">{preflight.counts[state]}</dd>
                      <dt className="text-[11px] lowercase text-haze">{state}</dt>
                    </div>
                  ))}
                </dl>
                <div className="mt-3 space-y-1.5">
                  {preflight.checks.map((check) => (
                    <div
                      key={check.id}
                      className={clsx(
                        "flex items-start gap-2 rounded-lg border p-2.5",
                        check.status === "PASS"
                          ? "border-ok/20 bg-ok/[0.04]"
                          : check.status === "WARN"
                            ? "border-warn/25 bg-warn/[0.05]"
                            : "border-danger/25 bg-danger/[0.05]"
                      )}
                    >
                      <span className="mt-0.5 shrink-0">
                        {checkIcon(check.status)}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[12px] font-semibold text-platinum">
                          {check.title}
                        </span>
                        <span className="mt-0.5 block text-[12px] leading-4 text-haze">
                          {check.detail}
                        </span>
                      </span>
                      <span className="shrink-0 font-mono text-[11px] text-haze/70">
                        {check.status}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-2 break-all font-mono text-[11px] text-haze/60">
                  Manifest {preflight.manifestHash.slice(0, 24)}… · pinned to
                  this answer version and requested format
                </p>

                {omitted.length ? (
                  <div className="mt-3">
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-warn">
                      Omissions manifest
                    </p>
                    <ul className="mt-1.5 divide-y divide-as-line/50 rounded-xl border border-warn/20">
                      {omitted.map((item) => (
                        <li key={item.itemId} className="p-3">
                          <p className="flex flex-wrap items-center gap-1.5 text-[13px] font-semibold text-platinum">
                            {item.label}
                            <Pill tone="warn">{item.permitState.toLowerCase()}</Pill>
                            <span className="font-mono text-[11px] font-normal text-haze/80">{item.kind.toLowerCase()}</span>
                          </p>
                          <p className="mt-0.5 text-[12px] leading-5 text-haze">{item.reason}</p>
                          <p className="mt-0.5 text-[12px] leading-5 text-platinum/80">
                            In the package: {item.affectedOutput}
                          </p>
                          {item.recovery ? (
                            <p className="mt-0.5 text-[12px] leading-5 text-haze">{item.recovery}</p>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="mt-3 flex items-start gap-1.5 text-[12px] leading-5 text-haze">
                    <Info
                      aria-hidden="true"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0"
                    />
                    Nothing is omitted for the selected format. Rights are
                    checked again when the package is generated and downloaded.
                  </p>
                )}

                {preflight.requiresPartialAcknowledgement ? (
                  <div className="mt-3">
                    <Checkbox
                      id="export-partial"
                      checked={acknowledged}
                      onChange={setAcknowledged}
                      label="I reviewed the omissions and understand this is a partial package."
                      description="The package will carry the withheld, stale or conflicting status and a rights manifest. It will not imply that every cited source is reproduced."
                    />
                  </div>
                ) : null}

                {preflight.decision === "AUTHORIZATION_REQUIRED" ? (
                  <div className="mt-3 rounded-xl border border-warn/25 bg-warn/[0.05] p-3.5">
                    <p className="flex items-start gap-2 text-[12px] leading-5 text-haze">
                      <Lock
                        aria-hidden="true"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warn"
                      />
                      Sign in to review export options. A guest can inspect
                      evidence and copy a permitted citation, but cannot create a
                      package or share link.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <Button
                        size="sm"
                        onClick={() => setMode("account")}
                        icon={<ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />}
                      >
                        Review with demo account
                      </Button>
                      <ButtonLink
                        href={`/assistant/access?intent=sign_in&return=${encodeURIComponent(
                          `/assistant/export?ref=${selectedRef}`
                        )}`}
                        variant="secondary"
                        size="sm"
                      >
                        Sign in
                      </ButtonLink>
                    </div>
                  </div>
                ) : null}

                <div className="mt-4 border-t border-as-line/60 pt-3">
                  {jobError && !job ? (
                    <div className="mb-2 rounded-lg border border-danger/25 bg-danger/[0.05] p-2.5">
                      <p className="text-[12px] leading-5 text-danger" role="alert">
                        {jobError}
                      </p>
                    </div>
                  ) : null}
                  {jobState.state === "creating" ? (
                    <p className="text-[12px] text-haze" role="status">
                      Requesting a durable export job…
                    </p>
                  ) : job ? (
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <Pill tone={jobTone(job.status)} dot>
                            {job.status.replaceAll("_", " ").toLowerCase()}
                          </Pill>
                          <Pill tone="neutral">{job.format}</Pill>
                          {job.partial ? <Pill tone="warn">Partial</Pill> : null}
                        </div>
                        <span className="font-mono text-[11px] text-haze/70">
                          {job.id}
                        </span>
                      </div>

                      <p className="mt-2 text-[13px] leading-6 text-platinum/90" role="status">
                        {job.stageLabel}. {job.message}
                        {job.partial
                          ? ` ${job.omissionCount} omission${job.omissionCount === 1 ? "" : "s"} listed in the package.`
                          : ""}
                      </p>
                      {!job.terminal ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-1"
                          onClick={() => void cancelJob(job.id)}
                        >
                          Cancel export
                        </Button>
                      ) : null}

                      {jobError ? (
                        <div className="mt-2 flex flex-wrap items-center gap-1.5">
                          <p className="flex items-start gap-1.5 text-[12px] leading-4 text-danger">
                            <AlertTriangle
                              aria-hidden="true"
                              className="mt-0.5 h-3 w-3 shrink-0"
                            />
                            {jobError}
                          </p>
                          {!job.terminal ? (
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => {
                                setJobError(null);
                                setJobState({ state: "polling", job });
                              }}
                            >
                              Retry status
                            </Button>
                          ) : null}
                        </div>
                      ) : null}

                      {job.status === "READY" ? (
                        <div className="mt-3 rounded-xl border border-ok/25 bg-ok/[0.04] p-3">
                          <p className="flex items-center gap-1.5 text-[13px] font-semibold text-platinum">
                            <Download
                              aria-hidden="true"
                              className="h-4 w-4 text-ok"
                            />
                            Citation package ready
                          </p>
                          <p className="mt-1 break-all font-mono text-[12px] text-haze">
                            {job.fileName}
                          </p>
                          <p className="mt-1 text-[12px] leading-4 text-haze">
                            Expires{" "}
                            {formatDateTime(job.expiresAt, prefs.timeZone, prefs.numberLocale)}
                            {job.sizeBytes ? ` · ${Math.max(1, Math.round(job.sizeBytes / 1024))} KB` : ""}
                            {job.outputChecksum ? ` · SHA-256 ${job.outputChecksum.slice(0, 12)}…` : ""}
                          </p>
                          <p className="mt-1 text-[12px] leading-4 text-haze">
                            Each download is authorised again on the server:
                            session, entitlement, pinned answer revision and current
                            source rights. The link is one-use and short-lived. The
                            file carries the synthetic demo watermark.
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {entitlement?.active ? (
                              <>
                                <Button
                                  size="sm"
                                  loading={downloading === job.id}
                                  onClick={() => void download(job.id)}
                                  icon={<Download aria-hidden="true" className="h-3.5 w-3.5" />}
                                >
                                  Download package
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => void cancelJob(job.id)}
                                >
                                  Withdraw package
                                </Button>
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  onClick={() => copyExportRef(job.id)}
                                  icon={
                                    copied ? (
                                      <Check aria-hidden="true" className="h-3.5 w-3.5" />
                                    ) : (
                                      <FileText aria-hidden="true" className="h-3.5 w-3.5" />
                                    )
                                  }
                                >
                                  {copied ? "Reference copied" : "Copy reference"}
                                </Button>
                              </>
                            ) : (
                              <Button
                                variant="secondary"
                                size="sm"
                                onClick={() => setMode("account")}
                                icon={<Lock aria-hidden="true" className="h-3.5 w-3.5" />}
                              >
                                Switch to demo account to download
                              </Button>
                            )}
                          </div>
                        </div>
                      ) : null}

                      {downloadError ? (
                        <p className="mt-2 text-[12px] leading-5 text-danger" role="alert">
                          {downloadError}
                        </p>
                      ) : null}
                      {job.terminal && job.status !== "READY" ? (
                        <div className="mt-2">
                          <p className="text-[13px] text-danger" role="alert">
                            {job.error ?? job.message}
                            {job.reasonCode ? <span className="ml-1 font-mono text-[11px]">({job.reasonCode})</span> : null}
                          </p>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="mt-1.5"
                            onClick={generate}
                            icon={<Download aria-hidden="true" className="h-3.5 w-3.5" />}
                          >
                            Generate new package
                          </Button>
                        </div>
                      ) : null}
                      <p className="mt-2 text-[12px] leading-4 text-haze/70">
                        Downloaded copies live outside Talvrin revocation controls.
                        Withdrawing a package stops new downloads only.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-[12px] leading-4 text-haze/70">
                        Generation sends the revision, format and omission
                        acknowledgement. It never extracts files in the browser.
                      </p>
                      <Button
                        size="sm"
                        onClick={generate}
                        disabled={!canGenerate}
                        icon={<Download aria-hidden="true" className="h-3.5 w-3.5" />}
                      >
                        Generate package
                      </Button>
                    </div>
                  )}

                  {preflight.requiresPartialAcknowledgement && !acknowledged ? (
                    <p className="mt-2 text-right text-[12px] text-warn" role="status">
                      Review the omissions and acknowledge the partial package.
                    </p>
                  ) : null}
                  {!preflight.allowed &&
                  preflight.decision !== "AUTHORIZATION_REQUIRED" ? (
                    <p className="mt-2 text-right text-[12px] text-danger" role="status">
                      Resolve blocking checks before generation.
                    </p>
                  ) : null}
                </div>
              </>
            ) : null}
          </Panel>

          <Panel className="p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-[14px] font-semibold text-platinum">
                  Controlled sharing
                </h2>
                <p className="mt-0.5 text-[12px] leading-5 text-haze">
                  A share is a separately authorized capability, not a longer
                  download link.
                </p>
              </div>
              <Pill tone="warn">
                <Lock aria-hidden="true" className="h-3 w-3" />
                Not enabled
              </Pill>
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <div className="rounded-xl border border-as-line/70 bg-midnight-soft/30 p-3">
                <p className="flex items-center gap-1.5 text-[12px] font-semibold text-platinum">
                  <Lock aria-hidden="true" className="h-3.5 w-3.5 text-haze" />
                  Private owner
                </p>
                <p className="mt-1 text-[12px] leading-4 text-haze">
                  Selected by default in a real account. No cross-device share is
                  created by this demo.
                </p>
              </div>
              <div className="rounded-xl border border-as-line/70 bg-midnight-soft/30 p-3 opacity-70">
                <p className="flex items-center gap-1.5 text-[12px] font-semibold text-platinum">
                  <Lock aria-hidden="true" className="h-3.5 w-3.5 text-haze" />
                  Verified named recipient
                </p>
                <p className="mt-1 text-[12px] leading-4 text-haze">
                  Requires identity proof, current entitlements and per-open
                  reauthorization. Not configured here.
                </p>
              </div>
            </div>
            <p className="mt-2 flex items-start gap-1.5 text-[12px] leading-4 text-haze">
              <Info aria-hidden="true" className="mt-0.5 h-3 w-3 shrink-0" />
              &quot;Anyone with the link&quot; is disabled by design. Token
              possession alone never grants licensed content access.
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Button variant="secondary" size="sm" disabled>
                Configure sharing
              </Button>
              <ButtonLink href="/assistant/access?intent=share" variant="ghost" size="sm">
                Sharing entitlement
              </ButtonLink>
            </div>
          </Panel>

          <Panel className="p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-[14px] font-semibold text-platinum">
                  Export history
                </h2>
                <p className="mt-0.5 text-[12px] leading-5 text-haze">
                  Local reference list only. Talvrin has no durable export archive
                  in this demonstration.
                </p>
              </div>
              {history.length ? (
                confirmClearHistory ? (
                  <div className="flex gap-1.5">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        clearExportHistory();
                        setHistory([]);
                        setConfirmClearHistory(false);
                        setHistoryStatus("Local export references cleared");
                      }}
                    >
                      Confirm clear
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setConfirmClearHistory(false)}
                    >
                      Keep
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setConfirmClearHistory(true)}
                  >
                    Clear references
                  </Button>
                )
              ) : null}
            </div>

            {historyStatus ? (
              <p className="mt-2 text-[12px] text-ok" role="status">
                {historyStatus}
              </p>
            ) : null}

            {history.length ? (
              <ul className="mt-3 divide-y divide-as-line/60 border-y border-as-line/60">
                {history.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <p className="flex flex-wrap items-center gap-1.5">
                        <Pill tone="neutral">{item.format}</Pill>
                        {item.partial ? <Pill tone="warn">Partial</Pill> : null}
                        <span className="font-mono text-[11px] text-haze/70">
                          {item.id}
                        </span>
                      </p>
                      <p className="mt-1 truncate text-[11px] font-medium text-platinum">
                        {item.question || item.answerRef}
                      </p>
                      <p className="mt-0.5 text-[12px] text-haze">
                        {formatDateTime(
                          item.createdAt,
                          prefs.timeZone,
                          prefs.numberLocale
                        )}
                        {item.omittedSourceCount
                          ? ` · ${item.omittedSourceCount} omitted excerpt${item.omittedSourceCount === 1 ? "" : "s"}`
                          : ""}
                      </p>
                    </div>
                    {entitlement?.active ? (
                      <Button
                        variant="secondary"
                        size="sm"
                        loading={downloading === item.id}
                        onClick={() => void download(item.id)}
                        icon={<Download aria-hidden="true" className="h-3.5 w-3.5" />}
                      >
                        Download
                      </Button>
                    ) : (
                      <ButtonLink
                        href={`/assistant/access?intent=sign_in&return=${encodeURIComponent(
                          `/assistant/export?ref=${item.answerRef}`
                        )}`}
                        variant="ghost"
                        size="sm"
                        icon={<Lock aria-hidden="true" className="h-3.5 w-3.5" />}
                      >
                        Account required
                      </ButtonLink>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-3">
                <EmptyState
                  icon={<FileText aria-hidden="true" className="h-7 w-7" />}
                  title="No packages generated here"
                  description="A generated package appears in this local list. It is a convenience record, not a server archive, and downloaded copies remain outside Talvrin controls."
                />
              </div>
            )}
            <p className="mt-2 text-[12px] leading-4 text-haze/70">
              Clearing this list does not revoke a download or delete a server
              render job. Expired jobs require a new generation.
            </p>
          </Panel>
        </div>

        <aside className="flex min-w-0 flex-col gap-3 xl:sticky xl:top-20">
          <Panel className="p-4">
            <div className="flex items-center gap-2">
              <ShieldCheck aria-hidden="true" className="h-4 w-4 text-iris-soft" />
              <h2 className="text-[12px] font-semibold text-platinum">
                Export entitlement
              </h2>
            </div>
            <dl className="mt-2 space-y-2">
              {[
                ...(["PDF", "DOCX", "CSV"] as const).map((item) => ({
                  label: item,
                  value: entitlement?.formats.includes(item)
                    ? "Eligible · synthetic demo grant"
                    : "Sign-in required",
                })),
                {
                  label: "Copy citation",
                  value: "Allowed from inspector",
                },
                {
                  label: "Controlled share",
                  value: "Locked · E3",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-2 border-b border-as-line/50 pb-1.5 last:border-0 last:pb-0"
                >
                  <dt className="text-[12px] text-haze">{row.label}</dt>
                  <dd
                    className={clsx(
                      "text-[12px] font-medium",
                      row.value.startsWith("Sign-in") || row.value.startsWith("Locked")
                        ? "text-warn"
                        : "text-platinum"
                    )}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            {entitlement ? (
              <p className="mt-2 text-[12px] leading-5 text-haze">
                {entitlement.note}
                {entitlement.expiresAt
                  ? ` Grant expires ${formatDateTime(entitlement.expiresAt, prefs.timeZone, prefs.numberLocale)}.`
                  : ""}
              </p>
            ) : null}
            <p className="mt-2 text-[12px] leading-4 text-haze/70">
              Entitlement is necessary but not sufficient. Each source&apos;s
              export and quotation rights are checked again.
            </p>
          </Panel>

          <Panel className="p-4">
            <h2 className="text-[12px] font-semibold text-platinum">
              Source rights in this answer
            </h2>
            {sources.length ? (
              <ul className="mt-2 space-y-2">
                {sources.map((source) => (
                  <li
                    key={source.id}
                    className="rounded-lg border border-as-line/60 p-2.5"
                  >
                    <p className="text-[12px] font-medium leading-4 text-platinum">
                      {source.shortTitle}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-1">
                      <RightsBadge state={source.rights.state} />
                      {source.rights.export ? (
                        <Pill tone="ok">Export allowed</Pill>
                      ) : (
                        <Pill tone="warn">Excerpt omitted</Pill>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-1.5 text-[12px] leading-5 text-haze">
                Source rights appear after a published answer is selected.
              </p>
            )}
          </Panel>

          <Panel className="p-4">
            <div className="flex items-center gap-2">
              <Clock3 aria-hidden="true" className="h-4 w-4 text-haze" />
              <h2 className="text-[12px] font-semibold text-platinum">
                What the package pins
              </h2>
            </div>
            <ul className="mt-2 space-y-1.5">
              {[
                "Answer version and publication time.",
                "Claim identifiers and verification states.",
                "Source snapshot, rights state and omission manifest.",
                "Method and calculation versions for derived figures.",
                "As-of date and known limitations.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-1.5 text-[12px] leading-5 text-haze"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-2.5 w-2.5 shrink-0 text-ok"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Panel>

          <Panel className="p-4">
            <div className="flex items-center gap-2">
              <Share2 aria-hidden="true" className="h-4 w-4 text-haze" />
              <h2 className="text-[12px] font-semibold text-platinum">
                Sharing is not export
              </h2>
            </div>
            <p className="mt-1.5 text-[12px] leading-5 text-haze">
              Persisted exports and recipient sharing are separate capabilities.
              A download can be forwarded outside the product; Talvrin cannot
              revoke the copy. Sharing inside Talvrin must be named, expiring and
              reauthorized on every open.
            </p>
          </Panel>

          <p className="font-mono text-[11px] uppercase leading-4 tracking-[0.1em] text-haze/60">
            {FIXTURE_LABEL}
          </p>
        </aside>
      </div>
    </PageShell>
  );
}
