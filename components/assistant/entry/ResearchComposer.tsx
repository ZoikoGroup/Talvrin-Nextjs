"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUp, ChevronDown, ShieldCheck, X } from "lucide-react";
import type { ResearchJobView, ScopeId } from "@/lib/assistant/types";
import {
  ApiError,
  apiJson,
  newIdempotencyKey,
  recordSessionEntry,
} from "@/lib/assistant/client";
import { Spinner } from "@/components/assistant/ui/Button";

export type CoverageChoice = "all" | ScopeId;

export interface ComposerScope {
  id: ScopeId;
  label: string;
}

const BUSY_TEXT = "Checking available sources…";

/**
 * Inline submission outcomes (WF-01 §06, S06–S11). Copy is the spec's;
 * the detail line is the server's safe message where one is given.
 */
type InlineState =
  | { kind: "UNSUPPORTED"; detail?: string; requestId?: string }
  | { kind: "LICENSE_BLOCK"; detail?: string; requestId?: string }
  | { kind: "RATE_LIMIT"; retryAt: number | null; requestId?: string }
  | { kind: "NETWORK_ERROR"; requestId?: string }
  | { kind: "MAINTENANCE"; retryable: boolean; requestId?: string }
  | { kind: "ABUSE_BLOCK"; requestId?: string }
  | { kind: "CANCELLED" }
  | { kind: "ERROR"; detail: string; retryable: boolean; requestId?: string };

const INLINE_COPY: Record<
  Exclude<InlineState["kind"], "ERROR">,
  { title: string; body: string }
> = {
  UNSUPPORTED: {
    title: "This request is outside currently verified coverage.",
    body: "Edit the question or choose a different coverage area. No sources were searched.",
  },
  LICENSE_BLOCK: {
    title: "This source or dataset is not available for this use.",
    body: "No values or excerpts were retrieved. Edit the question to ask about information that can be shown.",
  },
  RATE_LIMIT: {
    title: "Too many requests. Try again later.",
    body: "Your question is kept. Sending is paused until the wait ends; nothing is retried automatically.",
  },
  NETWORK_ERROR: {
    title: "We couldn’t submit your request.",
    body: "Check your connection. Your question is kept in this tab, and retrying will not create a duplicate request.",
  },
  MAINTENANCE: {
    title: "Research is temporarily unavailable.",
    body: "Your question is kept. The rest of this page still works.",
  },
  ABUSE_BLOCK: {
    title: "This request can’t be processed.",
    body: "Edit the question, or stop here. Help explains what the public assistant can research.",
  },
  CANCELLED: {
    title: "Request cancelled.",
    body: "Your question is kept. If the request already reached the server, sending it again reuses it rather than starting a second one.",
  },
};

function classify(error: unknown): InlineState {
  if (!(error instanceof ApiError)) {
    return {
      kind: "ERROR",
      detail: "The research request could not be started.",
      retryable: true,
    };
  }
  const requestId = error.requestId;
  switch (error.code) {
    case "SCOPE_UNAVAILABLE":
    case "UNSUPPORTED":
      return { kind: "UNSUPPORTED", detail: error.message, requestId };
    case "RIGHTS_DENIED":
    case "LICENSE_RESTRICTED":
    case "SOURCE_RIGHTS_DENIED":
      return { kind: "LICENSE_BLOCK", detail: error.message, requestId };
    case "RATE_LIMITED":
      return {
        kind: "RATE_LIMIT",
        retryAt: error.retryAfterSeconds
          ? Date.now() + error.retryAfterSeconds * 1000
          : null,
        requestId,
      };
    case "NETWORK_ERROR":
      return { kind: "NETWORK_ERROR", requestId };
    case "ABUSE_BLOCKED":
      return { kind: "ABUSE_BLOCK", requestId };
    case "SERVICE_UNAVAILABLE":
    case "MAINTENANCE":
      return { kind: "MAINTENANCE", retryable: error.retryable, requestId };
  }
  if (error.status === 429) {
    return { kind: "RATE_LIMIT", retryAt: null, requestId };
  }
  if (error.status === 0) return { kind: "NETWORK_ERROR", requestId };
  if (error.status === 503) {
    return { kind: "MAINTENANCE", retryable: error.retryable, requestId };
  }
  return {
    kind: "ERROR",
    detail: error.message,
    retryable: error.retryable,
    requestId,
  };
}

export default function ResearchComposer({
  question,
  onQuestionChange,
  coverage,
  onCoverageChange,
  scopes,
  minChars,
  maxChars,
  unavailableReason,
}: {
  question: string;
  onQuestionChange: (value: string) => void;
  coverage: CoverageChoice;
  onCoverageChange: (value: CoverageChoice) => void;
  /** Supported scopes from the public config; empty when config failed. */
  scopes: ComposerScope[];
  minChars: number;
  maxChars: number;
  /** Set when sending must fail closed (config error, research disabled). */
  unavailableReason?: string | null;
}) {
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inFlight = useRef(false);
  const abortRef = useRef<AbortController | null>(null);
  // One idempotency key per question text: a retry of the same text reuses
  // it so the server returns the first accepted job (WF-01 I09, A11).
  const idempotency = useRef<{ text: string; key: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [inline, setInline] = useState<InlineState | null>(null);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [now, setNow] = useState(() => Date.now());

  const trimmed = question.trim();
  const tooShort = trimmed.length < minChars;
  const tooLong = trimmed.length > maxChars;
  const retryAt = inline?.kind === "RATE_LIMIT" ? inline.retryAt : null;
  const waitSeconds =
    retryAt !== null ? Math.max(0, Math.ceil((retryAt - now) / 1000)) : 0;
  const rateLimited = inline?.kind === "RATE_LIMIT" && (retryAt === null ? false : waitSeconds > 0);
  const abuseBlocked = inline?.kind === "ABUSE_BLOCK";
  const sendDisabled =
    loading ||
    tooShort ||
    tooLong ||
    rateLimited ||
    abuseBlocked ||
    Boolean(unavailableReason);
  const nearLimit = question.length >= Math.floor(maxChars * 0.8);

  // Retry-After countdown (S08): local timer only, no polling of the API.
  useEffect(() => {
    if (retryAt === null) return;
    const timer = window.setInterval(() => {
      const current = Date.now();
      setNow(current);
      if (current >= retryAt) {
        window.clearInterval(timer);
        setAnnouncement("You can send your question again.");
      }
    }, 1000);
    return () => window.clearInterval(timer);
  }, [retryAt]);

  useEffect(() => () => abortRef.current?.abort(), []);

  function sendBlockedReason(): string | null {
    if (unavailableReason) return unavailableReason;
    if (loading) return BUSY_TEXT;
    if (abuseBlocked) return "Edit the question before sending again.";
    if (rateLimited) return `Sending is paused for ${waitSeconds} s.`;
    if (!trimmed) return "Type a question to enable sending.";
    if (tooShort)
      return `Enter at least ${minChars} characters so the question is specific.`;
    if (tooLong)
      return `Keep the question to ${maxChars.toLocaleString("en-US")} characters or fewer.`;
    return null;
  }

  function validate(): boolean {
    if (!trimmed) {
      setFieldError("Enter a research question.");
      return false;
    }
    if (tooShort) {
      setFieldError(
        `Enter at least ${minChars} characters so the question is specific.`
      );
      return false;
    }
    if (tooLong) {
      setFieldError(
        `Keep the question to ${maxChars.toLocaleString("en-US")} characters or fewer.`
      );
      return false;
    }
    setFieldError(null);
    return true;
  }

  async function submit() {
    // Double-submit guard (WF-01 §6.1): one request in flight per composer.
    if (inFlight.current) return;
    if (unavailableReason || rateLimited || abuseBlocked) return;
    if (!validate()) {
      setAnnouncement("Check the research question before sending.");
      textareaRef.current?.focus();
      return;
    }
    if (!idempotency.current || idempotency.current.text !== trimmed) {
      idempotency.current = { text: trimmed, key: newIdempotencyKey() };
    }
    const key = idempotency.current.key;
    const controller = new AbortController();
    abortRef.current = controller;
    inFlight.current = true;
    setInline(null);
    setLoading(true);
    setAnnouncement(BUSY_TEXT);
    try {
      const scopeIds =
        coverage === "all" ? scopes.map((scope) => scope.id) : [coverage];
      const result = await apiJson<{ job: ResearchJobView }>(
        "/api/assistant/research",
        {
          method: "POST",
          signal: controller.signal,
          headers: { "idempotency-key": key },
          body: JSON.stringify({
            question: trimmed,
            scopeIds,
            idempotencyKey: key,
          }),
        }
      );
      if (controller.signal.aborted) return;
      recordSessionEntry(result.job);
      setAnnouncement("Request accepted. Opening the research session.");
      // Opaque session reference only; no question text in the URL (I07).
      router.push(`/assistant/session/${result.job.ref}`);
    } catch (error) {
      if (controller.signal.aborted) return;
      if (error instanceof ApiError && error.code === "INVALID_INPUT") {
        const message =
          error.fields?.question ??
          error.fields?.scopeIds ??
          "Check the question and coverage before sending.";
        setFieldError(message);
        setAnnouncement(message);
        textareaRef.current?.focus();
      } else {
        const next = classify(error);
        setNow(Date.now());
        setInline(next);
        setAnnouncement(
          next.kind === "ERROR"
            ? next.detail
            : INLINE_COPY[next.kind].title
        );
      }
      // Rejected keys must not be replayed for a corrected question.
      if (!(error instanceof ApiError) || !error.retryable) {
        idempotency.current = null;
      }
    } finally {
      if (abortRef.current === controller) abortRef.current = null;
      inFlight.current = false;
      setLoading(false);
    }
  }

  function cancel() {
    abortRef.current?.abort();
    abortRef.current = null;
    inFlight.current = false;
    setLoading(false);
    setInline({ kind: "CANCELLED" });
    setAnnouncement("Request cancelled. Your question is kept.");
    textareaRef.current?.focus();
  }

  function clearQuestion() {
    onQuestionChange("");
    setFieldError(null);
    setInline(null);
    idempotency.current = null;
    setAnnouncement("Question cleared.");
    textareaRef.current?.focus();
  }

  const blockedReason = sendBlockedReason();
  const describedBy = [
    "research-question-hint",
    fieldError ? "research-question-error" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div id="composer" className="mt-6 scroll-mt-28">
      <form
        aria-label="Research question"
        onSubmit={(event) => {
          event.preventDefault();
          void submit();
        }}
        noValidate
        className="overflow-hidden rounded-[18px] border border-as-line/90 bg-as-panel/70 shadow-[0_24px_80px_-52px_rgba(0,0,0,0.95)] focus-within:border-iris/60"
      >
        <div className="px-5 pt-4">
          <label
            htmlFor="research-question"
            className="block text-[14px] font-medium text-platinum"
          >
            Your research question
          </label>
        </div>
        <textarea
          ref={textareaRef}
          id="research-question"
          value={question}
          onChange={(event) => {
            onQuestionChange(event.target.value.slice(0, maxChars));
            if (fieldError) setFieldError(null);
            if (
              inline &&
              inline.kind !== "RATE_LIMIT" &&
              inline.kind !== "MAINTENANCE"
            ) {
              setInline(null);
            }
          }}
          onKeyDown={(event) => {
            // Enter submits; Shift+Enter inserts a newline (WF-01 I05, A06).
            if (
              event.key === "Enter" &&
              !event.shiftKey &&
              !event.altKey &&
              !event.nativeEvent.isComposing
            ) {
              event.preventDefault();
              void submit();
            }
          }}
          rows={2}
          maxLength={maxChars}
          readOnly={loading}
          placeholder="Ask about a company, ETF, bond, currency, economy or market…"
          aria-describedby={describedBy}
          aria-invalid={fieldError ? true : undefined}
          className="as-scroll min-h-[76px] w-full resize-none border-0 bg-transparent px-5 pb-4 pt-2 text-[16px] leading-7 text-platinum placeholder:text-haze/70 focus:outline-none"
        />

        <div className="flex flex-wrap items-center gap-2 border-t border-as-line/70 bg-midnight-soft/35 px-3 py-2.5">
          <button
            type="button"
            aria-expanded={policyOpen}
            aria-controls="source-policy"
            onClick={() => setPolicyOpen((open) => !open)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-as-line bg-midnight-soft/60 px-3.5 text-[13px] font-medium text-platinum transition-colors hover:border-iris/50"
          >
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-ok" />
            Authoritative sources
            <ChevronDown
              aria-hidden="true"
              className={`h-3.5 w-3.5 text-haze transition-transform ${
                policyOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {scopes.length ? (
            <label className="inline-flex min-h-11 items-center gap-2 rounded-full border border-as-line bg-midnight-soft/60 px-3.5 text-[13px] text-haze focus-within:border-iris/60">
              <span className="sr-only">Coverage</span>
              <select
                value={coverage}
                disabled={loading}
                onChange={(event) =>
                  onCoverageChange(event.target.value as CoverageChoice)
                }
                className="max-w-[190px] cursor-pointer appearance-none bg-transparent pr-1 text-[13px] font-medium text-platinum focus:outline-none"
              >
                <option value="all">Available coverage</option>
                {scopes.map((scope) => (
                  <option key={scope.id} value={scope.id}>
                    {scope.label}
                  </option>
                ))}
              </select>
              <ChevronDown aria-hidden="true" className="h-3.5 w-3.5 text-haze" />
            </label>
          ) : (
            <span className="inline-flex min-h-11 items-center rounded-full border border-warn/40 px-3.5 text-[13px] text-warn">
              Coverage currently unavailable
            </span>
          )}

          <span className="ml-auto flex items-center gap-2">
            {nearLimit ? (
              <span
                id="research-question-count"
                className="px-1 font-mono text-[12px] tabular-nums text-haze"
              >
                {question.length.toLocaleString("en-US")} /{" "}
                {maxChars.toLocaleString("en-US")}
              </span>
            ) : null}

            {question && !loading ? (
              <button
                type="button"
                onClick={clearQuestion}
                className="inline-flex min-h-11 items-center gap-1 rounded-lg px-2.5 text-[13px] font-medium text-haze hover:text-platinum"
              >
                <X aria-hidden="true" className="h-3.5 w-3.5" />
                New question
              </button>
            ) : null}

            {loading ? (
              <button
                type="button"
                onClick={cancel}
                className="inline-flex min-h-11 items-center rounded-lg border border-as-line px-3 text-[13px] font-semibold text-platinum hover:border-iris/50"
              >
                Cancel
              </button>
            ) : null}

            <button
              type="submit"
              aria-label="Submit research question"
              aria-describedby={blockedReason ? "send-reason" : undefined}
              aria-disabled={sendDisabled || undefined}
              disabled={sendDisabled}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-iris bg-iris text-white transition-colors hover:border-iris-soft hover:bg-iris-soft disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <Spinner label={BUSY_TEXT} />
              ) : (
                <ArrowUp aria-hidden="true" className="h-4.5 w-4.5" />
              )}
            </button>
          </span>
        </div>

        {loading ? (
          <p
            aria-hidden="true"
            className="border-t border-as-line/70 bg-midnight-soft/45 px-5 py-2.5 text-[14px] text-platinum"
          >
            {BUSY_TEXT}
          </p>
        ) : null}

        {policyOpen ? (
          <div
            id="source-policy"
            className="border-t border-as-line/70 bg-midnight-soft/55 px-5 py-4 text-[14px] leading-6 text-haze"
          >
            <p className="font-medium text-platinum">
              This is not open web search.
            </p>
            <p className="mt-1">
              Talvrin retrieves from configured authoritative records. Display,
              quotation and export depend on the rights attached to each record
              and the current edition. Availability is not a credibility score.
            </p>
            <Link
              href="/assistant/help?article=help-citations"
              className="mt-2 inline-flex min-h-11 items-center font-semibold text-iris-soft hover:text-white"
            >
              Read the source policy
            </Link>
          </div>
        ) : null}
      </form>

      <div className="mt-2 flex flex-col gap-1 px-1 sm:flex-row sm:items-start sm:justify-between">
        <p id="research-question-hint" className="text-[13px] leading-6 text-haze">
          Research is not personal investment advice. Source coverage and
          freshness vary. Up to {maxChars.toLocaleString("en-US")} characters;
          Enter sends, Shift+Enter adds a new line.
        </p>
        {/* Associated reason for the disabled send control (C08). */}
        {blockedReason ? (
          <p
            id="send-reason"
            className={
              fieldError || loading
                ? "sr-only"
                : "shrink-0 text-[13px] leading-6 text-haze"
            }
          >
            {blockedReason}
          </p>
        ) : null}
      </div>

      {fieldError ? (
        <p
          id="research-question-error"
          className="mt-1 px-1 text-[14px] text-danger"
        >
          {fieldError}
        </p>
      ) : null}

      {inline ? (
        <InlineStatus
          state={inline}
          waitSeconds={waitSeconds}
          onRetry={() => void submit()}
          onEdit={() => textareaRef.current?.focus()}
          retryDisabled={sendDisabled}
        />
      ) : null}

      {/* Polite live region for validation and status (WF-01 §9.1). */}
      <p role="status" aria-live="polite" className="sr-only">
        {announcement}
      </p>
    </div>
  );
}

function InlineStatus({
  state,
  waitSeconds,
  onRetry,
  onEdit,
  retryDisabled,
}: {
  state: InlineState;
  waitSeconds: number;
  onRetry: () => void;
  onEdit: () => void;
  retryDisabled: boolean;
}) {
  const copy =
    state.kind === "ERROR"
      ? { title: "Research request not started", body: state.detail }
      : INLINE_COPY[state.kind];
  const detail =
    (state.kind === "UNSUPPORTED" || state.kind === "LICENSE_BLOCK") &&
    state.detail &&
    state.detail !== copy.title
      ? state.detail
      : null;
  const canRetry =
    state.kind === "NETWORK_ERROR" ||
    (state.kind === "MAINTENANCE" && state.retryable) ||
    (state.kind === "ERROR" && state.retryable) ||
    state.kind === "RATE_LIMIT";
  const tone =
    state.kind === "CANCELLED"
      ? "border-as-line bg-as-panel/50"
      : state.kind === "ABUSE_BLOCK" || state.kind === "LICENSE_BLOCK"
        ? "border-danger/40 bg-danger/[0.07]"
        : "border-warn/40 bg-warn/[0.07]";
  const requestId = "requestId" in state ? state.requestId : undefined;

  return (
    <div className={`mt-3 rounded-xl border px-4 py-3 ${tone}`}>
      <p className="text-[15px] font-semibold text-platinum">{copy.title}</p>
      <p className="mt-1 text-[14px] leading-6 text-haze">{copy.body}</p>
      {detail ? (
        <p className="mt-1 text-[14px] leading-6 text-haze">{detail}</p>
      ) : null}
      {state.kind === "RATE_LIMIT" ? (
        <p className="mt-1 text-[14px] leading-6 text-platinum">
          {state.retryAt === null
            ? "Wait a moment before sending again."
            : waitSeconds > 0
              ? `You can try again in ${waitSeconds} second${waitSeconds === 1 ? "" : "s"}.`
              : "You can send your question again."}
        </p>
      ) : null}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {canRetry ? (
          <button
            type="button"
            onClick={onRetry}
            disabled={retryDisabled}
            className="inline-flex min-h-11 items-center rounded-lg border border-iris bg-iris px-3.5 text-[13px] font-semibold text-white hover:bg-iris-soft disabled:cursor-not-allowed disabled:opacity-50"
          >
            Try again
          </button>
        ) : null}
        {state.kind !== "RATE_LIMIT" ? (
          <button
            type="button"
            onClick={onEdit}
            className="inline-flex min-h-11 items-center rounded-lg border border-as-line px-3.5 text-[13px] font-semibold text-platinum hover:border-iris/50"
          >
            Edit question
          </button>
        ) : null}
        {state.kind === "UNSUPPORTED" || state.kind === "ABUSE_BLOCK" ? (
          <Link
            href="/assistant/help#coverage"
            className="inline-flex min-h-11 items-center px-1 text-[13px] font-semibold text-iris-soft hover:text-white"
          >
            What the public assistant covers
          </Link>
        ) : null}
        {requestId ? (
          <span className="font-mono text-[12px] text-haze">
            Reference {requestId}
          </span>
        ) : null}
      </div>
    </div>
  );
}
