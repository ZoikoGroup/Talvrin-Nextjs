"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  Check,
  CheckCircle2,
  ClipboardCopy,
  FileLock2,
  FileWarning,
  Info,
  Lock,
  Mail,
  ShieldAlert,
  ShieldCheck,
  UserRound,
  WifiOff,
} from "lucide-react";
import type {
  CaseReceipt,
  CaseTopic,
  ClaimReportContext,
  HelpCapabilities,
} from "@/lib/assistant/types";
import {
  apiJson,
  ApiError,
  GUEST_SESSION_HEADER,
  guestSessionId,
} from "@/lib/assistant/client";
import { formatDateTime } from "@/lib/assistant/format";
import { FIXTURE_LABEL } from "@/lib/assistant/taxonomy";
import { useAssistantPrefs } from "@/components/assistant/shell/AssistantPrefsProvider";
import { Pill } from "@/components/assistant/ui/Badge";
import { Button, ButtonLink } from "@/components/assistant/ui/Button";
import { Checkbox, Field, Input, Select, Textarea } from "@/components/assistant/ui/Field";
import { PageIntro, PageShell, Panel } from "@/components/assistant/ui/Panel";

type Step = "draft" | "review" | "submitted";

type ContextState =
  | { state: "none" }
  | { state: "loading" }
  | { state: "ready"; context: ClaimReportContext }
  | { state: "unavailable"; message: string };

type FieldKey = "topic" | "details" | "locator" | "email" | "consent";
type Errors = Partial<Record<FieldKey, string>>;

/** DOM order of fields; focus goes to the first invalid one (HLP-24). */
const FIELD_ORDER: { key: FieldKey; id: string }[] = [
  { key: "topic", id: "case-topic" },
  { key: "details", id: "case-details" },
  { key: "locator", id: "case-locator" },
  { key: "email", id: "case-email" },
  { key: "consent", id: "case-consent" },
];

const SERVER_FIELD: Record<string, FieldKey> = {
  request_type: "topic",
  description: "details",
  source_hint: "locator",
  email: "email",
  notice_version: "consent",
};

type ServiceIssue =
  | { kind: "uncertain"; message: string }
  | { kind: "rate"; message: string; retryAfter?: number }
  | { kind: "unavailable"; message: string }
  | { kind: "error"; message: string };

const SUBMISSION_UNCONFIRMED =
  "We could not confirm submission. Please retry using the same reference or use our contact route.";

const MARKUP = /<\s*\/?\s*[a-z!?][^>]*>|javascript\s*:|data\s*:\s*text\/html|on[a-z]+\s*=\s*["']/i;
const SECRET =
  /\b(pass(word|code)?|pwd|api[\s_-]?key|secret[\s_-]?key|access[\s_-]?token)\s*[:=]\s*\S+|\b(?:\d[ -]?){13,19}\b/i;

function plainTextProblem(value: string): string | null {
  if (MARKUP.test(value)) {
    return "Remove HTML, script or link markup. Only plain text is accepted.";
  }
  if (SECRET.test(value)) {
    return "This looks like it may include a password, key or card/account number. Remove it before sending. If credentials were exposed, use the protected security route.";
  }
  return null;
}

function newIdempotencyKey(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `case-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/** HLP-16: show a redacted reference, never the full opaque ID. */
function redact(value: string | null | undefined): string {
  if (!value) return "None";
  if (value.length <= 8) return `${value.slice(0, 2)}…`;
  return `${value.slice(0, 4)}…${value.slice(-4)}`;
}

function focusField(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.focus();
    element.scrollIntoView({ block: "center" });
  }
}

export default function ReportExperience({
  answerRef,
  comparisonRef,
  claimId,
  sourceId,
  initialTopic,
  initialCapabilities,
}: {
  answerRef?: string;
  comparisonRef?: string;
  claimId?: string;
  sourceId?: string;
  initialTopic?: string;
  initialCapabilities: HelpCapabilities;
}) {
  const { prefs } = useAssistantPrefs();
  const [capabilities, setCapabilities] = useState(initialCapabilities);
  const launchRef = answerRef ?? comparisonRef;
  const [context, setContext] = useState<ContextState>(
    launchRef && claimId ? { state: "loading" } : { state: "none" }
  );
  const types = capabilities.request_types;
  const allowedTopic = useCallback(
    (value: string | undefined): CaseTopic | null =>
      types.some((item) => item.id === value) ? (value as CaseTopic) : null,
    [types]
  );
  const [step, setStep] = useState<Step>("draft");
  const [topic, setTopic] = useState<CaseTopic>(
    allowedTopic(initialTopic) ??
      (comparisonRef ? "METHODOLOGY" : answerRef ? "SOURCE_FACT" : "GENERAL_HELP")
  );
  const [details, setDetails] = useState("");
  const [email, setEmail] = useState("");
  const [locator, setLocator] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [issue, setIssue] = useState<ServiceIssue | null>(null);
  const [receipt, setReceipt] = useState<CaseReceipt | null>(null);
  const [receiptNote, setReceiptNote] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [statusText, setStatusText] = useState("");
  const receiptRef = useRef<HTMLHeadingElement>(null);
  const reviewRef = useRef<HTMLHeadingElement>(null);
  const idempotencyKey = useRef(newIdempotencyKey());

  const limits = capabilities.limits;
  const intakeAvailable = capabilities.intake.research_cases === "AVAILABLE";
  const contactRoute =
    capabilities.contact_routes.find((route) => route.id === "GENERAL_SUPPORT") ??
    capabilities.contact_routes[0];
  const protectedRoute =
    capabilities.contact_routes.find((route) => route.id === "SECURITY_PRIVACY") ??
    null;
  const selectedType = useMemo(
    () => types.find((item) => item.id === topic) ?? null,
    [topic, types]
  );
  const isProtected = selectedType?.intake === "PROTECTED";

  useEffect(() => {
    let cancelled = false;
    apiJson<{ capabilities: HelpCapabilities }>("/api/assistant/help/capabilities")
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

  // Server-resolved, rights-checked claim context (HLP-10/11, AC-04/05/06).
  useEffect(() => {
    if (!launchRef || !claimId) return;
    let cancelled = false;
    const params = new URLSearchParams();
    if (answerRef) params.set("answerRef", answerRef);
    else if (comparisonRef) params.set("comparisonRef", comparisonRef);
    params.set("claimId", claimId);
    if (sourceId) params.set("sourceId", sourceId);
    apiJson<{ context: ClaimReportContext }>(
      `/api/assistant/cases/context?${params.toString()}`
    )
      .then((response) => {
        if (!cancelled) setContext({ state: "ready", context: response.context });
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setContext({
          state: "unavailable",
          message:
            error instanceof ApiError
              ? error.message
              : "The claim reference could not be checked.",
        });
      });
    return () => {
      cancelled = true;
    };
  }, [answerRef, comparisonRef, claimId, launchRef, sourceId]);

  const resolved = context.state === "ready" ? context.context : null;
  const primarySource = resolved
    ? (resolved.sources.find(
        (item) => item.source_ref === resolved.selected_source_ref
      ) ?? null)
    : null;

  const liveWarning = useMemo(() => {
    const value = details.trim();
    return value ? plainTextProblem(value) : null;
  }, [details]);

  /* Dirty-draft protection (WF-08 §3.1). Nothing is written to storage. */
  const dirty =
    step !== "submitted" &&
    (details.trim().length > 0 || email.trim().length > 0 || locator.trim().length > 0);

  useEffect(() => {
    if (!dirty) return;
    const message = "You have an unsent report. Leave this page and discard it?";
    function onBeforeUnload(event: BeforeUnloadEvent) {
      event.preventDefault();
      event.returnValue = message;
      return message;
    }
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest?.("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "_self") return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.hash) return;
      if (!window.confirm(message)) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    window.addEventListener("beforeunload", onBeforeUnload);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
      document.removeEventListener("click", onClick, true);
    };
  }, [dirty]);

  function showErrors(next: Errors) {
    setErrors(next);
    const first = FIELD_ORDER.find((item) => next[item.key]);
    if (first) requestAnimationFrame(() => focusField(first.id));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!allowedTopic(topic)) next.topic = "Choose one of the listed issue types.";
    const trimmed = details.trim();
    if (trimmed.length < limits.description_min) {
      next.details = `Describe the issue in at least ${limits.description_min} characters.`;
    } else if (trimmed.length > limits.description_max) {
      next.details = `Keep the description to ${limits.description_max.toLocaleString("en-US")} characters or fewer.`;
    } else {
      const problem = plainTextProblem(trimmed);
      if (problem) next.details = problem;
    }
    const hint = locator.trim();
    if (hint) {
      if (hint.length > 300) next.locator = "Keep the locator to 300 characters or fewer.";
      else {
        const problem = plainTextProblem(hint);
        if (problem) next.locator = problem;
      }
    }
    if (email.trim() && !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email.trim())) {
      next.email = "Enter a valid email address, or leave it blank.";
    }
    if (!consent) {
      next.consent = "Confirm the review and privacy notice before continuing.";
    }
    return next;
  }

  function review(event: FormEvent) {
    event.preventDefault();
    if (isProtected) return;
    const next = validate();
    if (Object.keys(next).length) {
      showErrors(next);
      return;
    }
    setErrors({});
    setIssue(null);
    setStep("review");
    requestAnimationFrame(() => {
      reviewRef.current?.focus();
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }

  async function submit() {
    if (submitting) return;
    setSubmitting(true);
    setIssue(null);
    setStatusText("Submitting. Waiting for durable intake acknowledgment.");
    const body = {
      idempotency_key: idempotencyKey.current,
      request_type: topic,
      answer_ref: resolved?.answer_ref ?? undefined,
      comparison_ref: resolved?.comparison_ref ?? undefined,
      claim_ref: resolved?.claim_ref ?? undefined,
      source_ref: primarySource?.source_ref ?? undefined,
      source_hint: locator.trim() || undefined,
      description: details.trim(),
      contact: email.trim() ? { email: email.trim() } : undefined,
      notice_version: capabilities.notice_version,
    };

    let response: Response;
    try {
      response = await fetch("/api/assistant/cases", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "idempotency-key": idempotencyKey.current,
          [GUEST_SESSION_HEADER]: guestSessionId(),
        },
        body: JSON.stringify(body),
        cache: "no-store",
      });
    } catch {
      setIssue({ kind: "uncertain", message: SUBMISSION_UNCONFIRMED });
      setStatusText("Submission not confirmed.");
      setSubmitting(false);
      return;
    }

    let data: Record<string, unknown> = {};
    try {
      data = (await response.json()) as Record<string, unknown>;
    } catch {
      data = {};
    }
    setSubmitting(false);

    const safeMessage =
      typeof data.safeMessage === "string" ? data.safeMessage : SUBMISSION_UNCONFIRMED;

    if (response.ok && data.receipt) {
      setReceipt(data.receipt as CaseReceipt);
      setReceiptNote(
        data.replayed
          ? "Your earlier attempt was confirmed by the case service. No duplicate report was created."
          : null
      );
      setStep("submitted");
      setConsent(false);
      setStatusText("Report received.");
      return;
    }

    const code = typeof data.code === "string" ? data.code : "";
    if (response.status === 409 && data.receipt) {
      setReceipt(data.receipt as CaseReceipt);
      setReceiptNote("This report was already received. The original reference is shown; no duplicate was created.");
      setStep("submitted");
      setStatusText("Report already received.");
      return;
    }
    if (response.status === 409) {
      setIssue({ kind: "error", message: safeMessage });
      setStatusText(safeMessage);
      return;
    }
    if (response.status === 422 || response.status === 400) {
      const serverFields = (data.fields ?? {}) as Record<string, string>;
      const next: Errors = {};
      for (const [key, value] of Object.entries(serverFields)) {
        const mapped = SERVER_FIELD[key];
        if (mapped) next[mapped] = value;
      }
      if (serverFields.notice_version) {
        setConsent(false);
        apiJson<{ capabilities: HelpCapabilities }>("/api/assistant/help/capabilities")
          .then((result) => setCapabilities(result.capabilities))
          .catch(() => undefined);
      }
      setStep("draft");
      if (Object.keys(next).length) showErrors(next);
      else setIssue({ kind: "error", message: safeMessage });
      setStatusText(safeMessage);
      return;
    }
    if (response.status === 404 && code === "REFERENCE_NOT_AVAILABLE") {
      setContext({ state: "unavailable", message: safeMessage });
      setStep("draft");
      setIssue({ kind: "error", message: safeMessage });
      setStatusText(safeMessage);
      return;
    }
    if (response.status === 429) {
      const retryAfter =
        typeof data.retryAfterSeconds === "number" ? data.retryAfterSeconds : undefined;
      const message = `Too many reports were sent from this browser in a short time. Nothing new was submitted.${retryAfter ? ` Try again in about ${Math.ceil(retryAfter / 60)} minute${retryAfter > 60 ? "s" : ""},` : " Try again later,"} or use the contact route.`;
      setIssue({ kind: "rate", message, retryAfter });
      setStatusText(message);
      return;
    }
    if (response.status === 503 && code === "INTAKE_UNAVAILABLE") {
      setIssue({ kind: "unavailable", message: safeMessage });
      setStatusText(safeMessage);
      return;
    }
    // Any other server failure: delivery state is unknown (HLP-26, AC-19).
    setIssue({ kind: "uncertain", message: SUBMISSION_UNCONFIRMED });
    setStatusText("Submission not confirmed.");
  }

  useEffect(() => {
    if (step === "submitted") receiptRef.current?.focus();
  }, [step]);

  async function copyReceipt() {
    if (!receipt) return;
    try {
      await navigator.clipboard.writeText(receipt.case_ref);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  function startNew() {
    setStep("draft");
    setReceipt(null);
    setReceiptNote(null);
    setDetails("");
    setEmail("");
    setLocator("");
    setConsent(false);
    setErrors({});
    setIssue(null);
    idempotencyKey.current = newIdempotencyKey();
  }

  const errorEntries = FIELD_ORDER.filter((item) => errors[item.key]);
  const returnHref = answerRef
    ? `/assistant/session/${encodeURIComponent(answerRef)}`
    : comparisonRef
      ? `/assistant/compare/${encodeURIComponent(comparisonRef)}`
      : null;

  const issueBox = issue ? (
    <div
      role="alert"
      className={
        issue.kind === "uncertain" || issue.kind === "unavailable"
          ? "mt-3 rounded-xl border border-warn/30 bg-warn/[0.06] p-3.5"
          : "mt-3 rounded-xl border border-danger/30 bg-danger/[0.06] p-3.5"
      }
    >
      <p className="flex items-start gap-2 text-[11px] leading-5 text-platinum">
        {issue.kind === "uncertain" ? (
          <WifiOff aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warn" />
        ) : (
          <AlertTriangle aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warn" />
        )}
        <span>
          {issue.kind === "uncertain" ? (
            <span className="mb-0.5 block font-semibold">Not confirmed</span>
          ) : null}
          {issue.message}
        </span>
      </p>
      {issue.kind !== "error" && contactRoute ? (
        <p className="mt-2 pl-5.5 text-[12px] leading-5 text-haze">
          Alternative:{" "}
          <Link
            href={contactRoute.href}
            className="inline-flex min-h-11 items-center font-medium text-iris-soft underline-offset-2 hover:underline"
          >
            {contactRoute.label}
          </Link>
          {issue.kind === "uncertain"
            ? " · Retrying uses the same submission reference, so a report can be recorded at most once."
            : null}
        </p>
      ) : null}
    </div>
  ) : null;

  return (
    <PageShell width="default" className="pt-8">
      <PageIntro
        eyebrow="WF-08 · research issue and escalation"
        title="Report a research issue"
        lead="Your report will be reviewed. Submitting it does not update an answer or its sources. The assistant records an allegation and routes it to an illustrative human review queue; it never confirms that you are right or edits a canonical record."
        meta={
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="warn" dot>
              {capabilities.principal === "GUEST"
                ? "Guest submission · no case history"
                : "Signed in"}
            </Pill>
            <Pill>No attachments</Pill>
            <Pill>No promised response time</Pill>
          </div>
        }
        actions={
          <ButtonLink
            href="/assistant/help"
            variant="secondary"
            size="sm"
            icon={<ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />}
          >
            Help
          </ButtonLink>
        }
      />

      <p className="sr-only" role="status" aria-live="polite">
        {statusText}
      </p>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="min-w-0">
          {step === "submitted" && receipt ? (
            <Panel className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ok/30 bg-ok/[0.08]">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-ok" />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ok">
                    Case-service acknowledgment · demo
                  </p>
                  <h2
                    ref={receiptRef}
                    tabIndex={-1}
                    className="mt-1 text-xl font-semibold text-platinum focus:outline-none"
                  >
                    We received your report.
                  </h2>
                  <p className="mt-1 text-[12px] leading-6 text-haze">
                    Reference: <span className="font-mono text-platinum">{receipt.case_ref}</span>.
                    We cannot confirm an outcome yet.
                  </p>
                  {receiptNote ? (
                    <p className="mt-1 text-[11px] leading-5 text-warn">{receiptNote}</p>
                  ) : null}
                </div>
              </div>

              <dl className="mt-4 grid gap-3 rounded-xl border border-as-line/70 bg-midnight-soft/50 p-3.5 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-haze/70">
                    Case reference
                  </dt>
                  <dd className="mt-0.5 flex flex-wrap items-center gap-2">
                    <span className="break-all font-mono text-[13px] text-platinum">
                      {receipt.case_ref}
                    </span>
                    <button
                      type="button"
                      onClick={copyReceipt}
                      className="inline-flex min-h-11 items-center gap-1 rounded-md px-1.5 text-[11px] font-medium text-iris-soft hover:bg-iris/[0.08] hover:text-white"
                    >
                      {copied ? (
                        <Check aria-hidden="true" className="h-3 w-3" />
                      ) : (
                        <ClipboardCopy aria-hidden="true" className="h-3 w-3" />
                      )}
                      {copied ? "Copied" : "Copy reference"}
                    </button>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-haze/70">
                    Received (UTC)
                  </dt>
                  <dd className="mt-0.5 text-[12px] text-platinum">
                    {formatDateTime(receipt.receipt_time_utc, "UTC", "en-US")}
                    {prefs.timeZone !== "UTC" ? (
                      <span className="block text-[12px] text-haze">
                        {formatDateTime(receipt.receipt_time_utc, prefs.timeZone, "en-US")}
                      </span>
                    ) : null}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-haze/70">
                    Issue type
                  </dt>
                  <dd className="mt-0.5 text-[12px] text-platinum">
                    {receipt.request_type_label}
                    <span className="ml-1 font-mono text-[11px] text-haze">
                      {receipt.request_type}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-haze/70">
                    State
                  </dt>
                  <dd className="mt-0.5 flex flex-wrap gap-1">
                    <Pill tone="warn">Received · review pending</Pill>
                    <Pill>Case version {receipt.case_version}</Pill>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-haze/70">
                    Evidence reference
                  </dt>
                  <dd className="mt-0.5 text-[12px] text-platinum">
                    {receipt.claim_linked
                      ? "Server-verified claim reference attached"
                      : "No claim reference (general report)"}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-haze/70">
                    Notice version
                  </dt>
                  <dd className="mt-0.5 break-all font-mono text-[12px] text-platinum">
                    {receipt.notice_version}
                  </dd>
                </div>
              </dl>

              <div className="mt-3 rounded-xl border border-iris/25 bg-iris/[0.05] p-3.5">
                <p className="text-[11px] font-semibold text-platinum">
                  Illustrative review queue
                </p>
                <p className="mt-1 text-[12px] leading-5 text-haze">{receipt.queue}</p>
                <p className="mt-2 text-[12px] leading-5 text-haze">
                  {receipt.response_boundary}
                </p>
              </div>

              <div className="mt-3 rounded-xl border border-warn/25 bg-warn/[0.05] p-3.5">
                <p className="flex items-start gap-2 text-[12px] leading-5 text-haze">
                  <AlertTriangle aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warn" />
                  A receipt is not a finding. A review may conclude that the
                  available evidence does not establish an error. A confirmed
                  issue would need our standard evidence and release checks; it
                  would not be applied silently.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-as-line/60 pt-3">
                <Button variant="secondary" size="sm" onClick={startNew}>
                  Submit another report
                </Button>
                <ButtonLink href="/assistant/help" variant="ghost" size="sm">
                  Return to help
                </ButtonLink>
                {returnHref ? (
                  <ButtonLink href={returnHref} variant="ghost" size="sm">
                    {answerRef ? "Return to the answer" : "Return to the comparison"}
                  </ButtonLink>
                ) : null}
              </div>

              <p className="mt-3 text-[11px] leading-4 text-haze/70">
                Case tracking is not enabled. Case status cannot be retrieved by
                email address or reference alone; updates would require a
                verified contact channel, which this demonstration does not
                provide.
              </p>
            </Panel>
          ) : !intakeAvailable ? (
            <Panel className="p-5" as="div">
              <h2 className="text-lg font-semibold text-platinum">
                Report intake is not available right now
              </h2>
              <p className="mt-1.5 text-[12px] leading-6 text-haze">
                Nothing can be submitted from this page at the moment, and no
                report has been recorded. Use the contact route instead.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {contactRoute ? (
                  <ButtonLink href={contactRoute.href} size="sm">
                    {contactRoute.label}
                  </ButtonLink>
                ) : null}
                <ButtonLink href="/assistant/help" variant="ghost" size="sm">
                  Return to help
                </ButtonLink>
              </div>
            </Panel>
          ) : (
            <>
              {context.state === "loading" ? (
                <Panel className="mb-3 p-4" busy>
                  <p className="flex items-center gap-2 text-[11px] text-haze" role="status">
                    <Info aria-hidden="true" className="h-3.5 w-3.5" />
                    Checking the claim reference and source rights before showing
                    any evidence…
                  </p>
                </Panel>
              ) : null}

              {context.state === "unavailable" || (launchRef && !claimId) ? (
                <div className="mb-3 rounded-xl border border-warn/25 bg-warn/[0.05] p-3.5">
                  <p className="flex items-start gap-2 text-[11px] leading-5 text-haze">
                    <FileWarning aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-warn" />
                    <span>
                      {context.state === "unavailable"
                        ? context.message
                        : "No specific claim was selected, so no evidence reference can be attached."}{" "}
                      You can still send a general report. No answer or claim
                      reference will be attached. To attach one, open the
                      report from a claim citation.
                    </span>
                  </p>
                </div>
              ) : null}

              {step === "review" ? (
                <Panel className="p-4 sm:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-iris-soft">
                        Review before submission
                      </p>
                      <h2
                        ref={reviewRef}
                        tabIndex={-1}
                        className="mt-1 text-lg font-semibold text-platinum focus:outline-none"
                      >
                        Confirm exactly what is sent
                      </h2>
                    </div>
                    <Pill tone="warn">Not yet submitted</Pill>
                  </div>

                  <dl className="mt-4 divide-y divide-as-line/60 border-y border-as-line/60">
                    {[
                      {
                        label: "Issue type",
                        value: (
                          <>
                            {selectedType?.label}
                            <span className="ml-1 font-mono text-[11px] text-haze">{topic}</span>
                          </>
                        ),
                      },
                      {
                        label: "Description",
                        value: (
                          <span className="whitespace-pre-wrap break-words">{details.trim()}</span>
                        ),
                      },
                      {
                        label: "Evidence reference",
                        value: resolved ? (
                          <span className="font-mono text-[12px] leading-5 text-haze">
                            {resolved.origin === "ANSWER" ? "Answer" : "Comparison"}{" "}
                            {redact(resolved.answer_ref ?? resolved.comparison_ref)}
                            <br />
                            Claim {redact(resolved.claim_ref)}
                            <br />
                            Source {redact(primarySource?.source_ref)}
                            {primarySource ? ` · ${primarySource.source_view_policy}` : ""}
                          </span>
                        ) : (
                          <span className="text-haze">None · general report</span>
                        ),
                      },
                      ...(locator.trim()
                        ? [
                            {
                              label: "Locator (your text)",
                              value: <span className="break-words">{locator.trim()}</span>,
                            },
                          ]
                        : []),
                      { label: "Contact", value: email.trim() || "Not provided" },
                      {
                        label: "Attachments",
                        value: <span className="text-haze">None accepted in public intake</span>,
                      },
                      {
                        label: "Purpose and notice",
                        value: (
                          <span className="text-[11px] leading-5 text-haze">
                            {capabilities.notice_purpose}
                            <span className="mt-1 block font-mono text-[11px] text-haze/80">
                              Notice version {capabilities.notice_version}
                            </span>
                          </span>
                        ),
                      },
                      {
                        label: "Submission reference",
                        value: (
                          <span className="font-mono text-[12px] text-haze">
                            {redact(idempotencyKey.current)} · reused on retry
                          </span>
                        ),
                      },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="grid gap-1 py-3 sm:grid-cols-[160px_minmax(0,1fr)]"
                      >
                        <dt className="text-[12px] font-semibold uppercase tracking-wider text-haze">
                          {row.label}
                        </dt>
                        <dd className="min-w-0 text-[12px] leading-6 text-platinum/90">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-3 rounded-xl border border-iris/25 bg-iris/[0.05] p-3.5">
                    <p className="flex items-start gap-2 text-[12px] leading-5 text-haze">
                      <ShieldCheck aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-iris-soft" />
                      The description is an allegation for human review. It is
                      not a verified source fact, training data or an
                      instruction to the assistant. Your contact details do not
                      create a public case history, and no case details are sent
                      to an unverified address.
                    </p>
                  </div>

                  {issueBox}

                  <div className="mt-4 flex flex-wrap justify-end gap-1.5">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setStep("draft")}
                      disabled={submitting}
                    >
                      Edit report
                    </Button>
                    <Button
                      size="sm"
                      onClick={submit}
                      disabled={submitting || issue?.kind === "rate"}
                      aria-busy={submitting || undefined}
                      icon={submitting ? undefined : <Check aria-hidden="true" className="h-3.5 w-3.5" />}
                    >
                      {submitting
                        ? "Submitting…"
                        : issue?.kind === "uncertain" || issue?.kind === "unavailable"
                          ? "Retry same submission"
                          : "Submit report"}
                    </Button>
                  </div>
                  {submitting ? (
                    <p className="mt-2 text-right text-[12px] text-haze">
                      Waiting for durable intake acknowledgment. Do not submit
                      again in another tab.
                    </p>
                  ) : null}
                </Panel>
              ) : (
                <Panel className="p-4 sm:p-5">
                  <form onSubmit={review} noValidate aria-labelledby="case-form-heading">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 id="case-form-heading" className="text-lg font-semibold text-platinum">
                        Research issue report
                      </h2>
                      <Pill tone="warn">Anonymous guest</Pill>
                    </div>

                    {errorEntries.length ? (
                      <div
                        role="alert"
                        className="mt-3 rounded-xl border border-danger/30 bg-danger/[0.06] p-3.5"
                      >
                        <p className="text-[11px] font-semibold text-danger">
                          Check {errorEntries.length === 1 ? "1 field" : `${errorEntries.length} fields`} before continuing. Your draft is kept.
                        </p>
                        <ul className="mt-1 list-inside list-disc space-y-0.5 text-[12px] leading-5 text-danger/90">
                          {errorEntries.map((item) => (
                            <li key={item.key}>
                              <a
                                href={`#${item.id}`}
                                onClick={(event) => {
                                  event.preventDefault();
                                  focusField(item.id);
                                }}
                                className="underline underline-offset-2"
                              >
                                {errors[item.key]}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {issueBox}

                    {resolved ? (
                      <div className="mt-4 rounded-xl border border-as-line/80 bg-midnight-soft/40 p-3.5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-haze/70">
                            Read-only claim context
                          </p>
                          <Pill tone="ok">
                            <Lock aria-hidden="true" className="h-3 w-3" />
                            Server-resolved
                          </Pill>
                        </div>
                        <p className="mt-2 text-[13px] font-semibold text-platinum">
                          {resolved.headline}
                        </p>
                        <div className="mt-2.5 rounded-lg border border-as-line/60 bg-midnight/40 p-3">
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-haze/80">
                            Claim {redact(resolved.claim_ref)}
                          </p>
                          <p className="mt-1 text-[11px] leading-5 text-platinum/85">
                            {resolved.claim_text}
                          </p>
                          <p className="mt-1.5 flex flex-wrap items-center gap-1.5">
                            <Pill
                              tone={
                                resolved.verification === "SUPPORTED"
                                  ? "ok"
                                  : resolved.verification === "UNSUPPORTED"
                                    ? "danger"
                                    : "warn"
                              }
                            >
                              {resolved.verification}
                            </Pill>
                            <span className="font-mono text-[11px] text-haze/70">
                              {resolved.materiality}
                            </span>
                          </p>
                        </div>

                        {primarySource ? (
                          <div className="mt-2.5 rounded-lg border border-as-line/60 p-3">
                            <p className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-haze/80">
                              Source summary
                              <Pill tone="neutral">{primarySource.tier}</Pill>
                              <Pill tone={primarySource.source_view_policy === "AVAILABLE" ? "ok" : "warn"}>
                                {primarySource.source_view_policy}
                              </Pill>
                            </p>
                            <p className="mt-1 text-[11px] font-medium leading-5 text-platinum">
                              {primarySource.title}
                            </p>
                            <p className="mt-0.5 text-[12px] text-haze">
                              {primarySource.publisher} · document {primarySource.document_date} ·
                              version {primarySource.version}
                              {primarySource.as_of ? ` · as of ${primarySource.as_of}` : ""}
                            </p>
                            {primarySource.excerpt ? (
                              <p className="mt-1.5 border-t border-as-line/50 pt-1.5 text-[12px] leading-5 text-platinum/80">
                                “{primarySource.excerpt}”
                              </p>
                            ) : null}
                            {primarySource.restriction_note ? (
                              <p className="mt-1.5 flex items-start gap-1.5 border-t border-as-line/50 pt-1.5 text-[12px] leading-5 text-haze">
                                <FileLock2 aria-hidden="true" className="mt-0.5 h-3 w-3 shrink-0" />
                                {primarySource.restriction_note}
                                {primarySource.source_view_policy !== "STALE"
                                  ? " Only metadata is included in the report."
                                  : ""}
                              </p>
                            ) : null}
                          </div>
                        ) : (
                          <p className="mt-2 text-[12px] leading-5 text-warn">
                            No permitted source record is linked to this claim.
                            The report will route on the answer and claim
                            references alone.
                          </p>
                        )}

                        {resolved.source_rejected ? (
                          <p className="mt-2 text-[11px] leading-4 text-warn">
                            The requested source is not linked to this claim.
                            Only permitted linked sources are shown.
                          </p>
                        ) : null}

                        <p className="mt-2 text-[11px] leading-4 text-haze/70">
                          References are opaque, checked on the server and
                          read-only. They cannot be edited to point at another
                          visitor&apos;s research. Rights are checked again when
                          you submit.
                        </p>
                      </div>
                    ) : null}

                    <div className="mt-4 rounded-xl border border-warn/25 bg-warn/[0.05] p-3.5">
                      <p className="flex items-start gap-2 text-[11px] leading-5 text-platinum">
                        <ShieldAlert aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warn" />
                        Do not include passwords, account credentials, or
                        confidential portfolio details.
                      </p>
                    </div>

                    <div className="mt-4 space-y-4">
                      <Field
                        id="case-topic"
                        label="What kind of issue is it?"
                        required
                        error={errors.topic}
                        hint={selectedType?.guidance}
                      >
                        <Select
                          id="case-topic"
                          value={topic}
                          onChange={(event) => setTopic(event.target.value as CaseTopic)}
                          aria-invalid={!!errors.topic}
                          aria-describedby={
                            [errors.topic ? "case-topic-error" : null, selectedType ? "case-topic-hint" : null]
                              .filter(Boolean)
                              .join(" ") || undefined
                          }
                        >
                          {types.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.label}
                            </option>
                          ))}
                        </Select>
                      </Field>

                      {isProtected ? (
                        <div
                          className="rounded-xl border border-danger/30 bg-danger/[0.05] p-4"
                          role="region"
                          aria-labelledby="protected-route-heading"
                        >
                          <h3
                            id="protected-route-heading"
                            className="flex items-center gap-2 text-[12px] font-semibold text-platinum"
                          >
                            <ShieldAlert aria-hidden="true" className="h-4 w-4 text-danger" />
                            Use the protected security and privacy route
                          </h3>
                          <p className="mt-1 text-[11px] leading-5 text-haze">
                            Security vulnerabilities, exposed personal data and
                            privacy requests are handled outside this public
                            form so details are not spread further. Nothing you
                            type here is sent. Do not paste the sensitive content
                            anywhere public.
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {protectedRoute ? (
                              <ButtonLink href={protectedRoute.href} size="sm">
                                Go to {protectedRoute.label.toLowerCase()}
                              </ButtonLink>
                            ) : null}
                            <ButtonLink href="/legal/privacy-notice" size="sm" variant="ghost">
                              Privacy request
                            </ButtonLink>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Field
                            id="case-details"
                            label="Describe the concern"
                            required
                            error={errors.details}
                            hint="Name the figure, date or citation you are challenging. Plain text only. What you write is treated as an allegation for review, not a verified source fact."
                            counter={
                              <span
                                className={
                                  details.trim().length > limits.description_max
                                    ? "text-danger"
                                    : details.trim().length < limits.description_min
                                      ? "text-haze"
                                      : "text-ok"
                                }
                              >
                                {details.trim().length} / {limits.description_max.toLocaleString("en-US")}
                              </span>
                            }
                          >
                            <Textarea
                              id="case-details"
                              value={details}
                              onChange={(event) => setDetails(event.target.value)}
                              placeholder="What does the answer say, what should it say, and which record supports your view?"
                              maxLength={limits.description_max + 200}
                              aria-invalid={!!errors.details}
                              aria-describedby={
                                [
                                  errors.details ? "case-details-error" : null,
                                  "case-details-hint",
                                  liveWarning && !errors.details ? "case-details-warning" : null,
                                ]
                                  .filter(Boolean)
                                  .join(" ")
                              }
                            />
                            {liveWarning && !errors.details ? (
                              <p
                                id="case-details-warning"
                                className="mt-1.5 flex items-start gap-1.5 text-xs text-warn"
                              >
                                <AlertTriangle aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                                {liveWarning}
                              </p>
                            ) : null}
                          </Field>

                          {!resolved ? (
                            <Field
                              id="case-locator"
                              label="Where did you see it?"
                              optional
                              error={errors.locator}
                              hint="For example a filing name, page or section. Stored as your own text, not as a verified source reference. Do not paste restricted content."
                            >
                              <Input
                                id="case-locator"
                                value={locator}
                                onChange={(event) => setLocator(event.target.value)}
                                placeholder="e.g. annual report, note 4, page 82"
                                maxLength={300}
                                aria-invalid={!!errors.locator}
                                aria-describedby={errors.locator ? "case-locator-error case-locator-hint" : "case-locator-hint"}
                              />
                            </Field>
                          ) : null}

                          <Field
                            id="case-email"
                            label="Contact email"
                            optional
                            error={errors.email}
                            hint="Optional. Used only if a verified reply channel exists for this route; this demonstration has none. It is not used for marketing and does not make your report public or create an account."
                          >
                            <div className="relative">
                              <Mail
                                aria-hidden="true"
                                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-haze/70"
                              />
                              <Input
                                id="case-email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="name@example.com"
                                className="pl-9"
                                autoComplete="email"
                                maxLength={254}
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? "case-email-error case-email-hint" : "case-email-hint"}
                              />
                            </div>
                          </Field>

                          <div className="rounded-xl border border-as-line/70 bg-midnight-soft/30 p-3.5">
                            <p className="flex items-center gap-2 text-[11px] font-semibold text-platinum">
                              <FileWarning aria-hidden="true" className="h-3.5 w-3.5 text-haze" />
                              Attachments are not accepted
                            </p>
                            <p className="mt-1 text-[12px] leading-5 text-haze">
                              Public intake cannot accept files, screenshots or
                              broker statements. Accessibility reports never
                              need a screenshot.
                            </p>
                          </div>

                          <div className="rounded-xl border border-as-line/70 p-3.5">
                            <p className="text-[11px] font-semibold text-platinum">
                              Privacy notice
                              <span className="ml-1.5 font-mono text-[11px] font-normal text-haze">
                                {capabilities.notice_version}
                              </span>
                            </p>
                            <p className="mt-1 text-[12px] leading-5 text-haze">
                              {capabilities.notice_purpose}
                            </p>
                          </div>

                          <Checkbox
                            id="case-consent"
                            checked={consent}
                            onChange={setConsent}
                            label="I understand this is an allegation for review, not a correction."
                            description="I agree to Talvrin processing this report for the purpose above. I have not included passwords, credentials, another person's data or confidential portfolio information."
                            error={errors.consent}
                          />
                        </>
                      )}
                    </div>

                    {!isProtected ? (
                      <div className="mt-4 flex flex-col gap-2 border-t border-as-line/60 pt-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[11px] leading-4 text-haze/70">
                          You will review exactly what is sent before submitting.
                          Your draft is not saved if you leave this page.
                        </p>
                        <Button type="submit" size="sm">
                          Review report
                        </Button>
                      </div>
                    ) : null}
                  </form>
                </Panel>
              )}
            </>
          )}
        </div>

        <aside className="flex min-w-0 flex-col gap-3" aria-label="About this report">
          <Panel className="p-4">
            <div className="flex items-center gap-2">
              <UserRound aria-hidden="true" className="h-4 w-4 text-iris-soft" />
              <h2 className="text-[12px] font-semibold text-platinum">What happens next</h2>
            </div>
            <ol className="mt-2.5 space-y-2">
              {[
                {
                  title: "Receipt",
                  body: "A reference is shown only after the case service confirms durable intake. No success is shown before that.",
                },
                {
                  title: "Human review",
                  body: "The queue owner reviews the allegation against permitted evidence. The answer stays unchanged meanwhile.",
                },
                {
                  title: "Outcome",
                  body: "The review may not establish an error. Any update requires our standard evidence and release checks.",
                },
              ].map((item, index) => (
                <li key={item.title} className="flex gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-as-line font-mono text-[11px] text-haze">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block text-[12px] font-semibold text-platinum/90">{item.title}</span>
                    <span className="mt-0.5 block text-[12px] leading-5 text-haze">{item.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Panel>

          <Panel className="p-4">
            <h2 className="text-[12px] font-semibold text-platinum">Other routes</h2>
            <ul className="mt-2 space-y-1">
              {capabilities.contact_routes.map((route) => (
                <li key={route.id}>
                  <Link
                    href={route.href}
                    className="flex min-h-11 items-center justify-between gap-2 rounded-lg px-1.5 py-1 hover:bg-midnight-soft/60"
                  >
                    <span>
                      <span className="block text-[12px] font-medium text-platinum">{route.label}</span>
                      <span className="block text-[11px] leading-4 text-haze/75">{route.detail}</span>
                    </span>
                    <ArrowLeft aria-hidden="true" className="h-3 w-3 rotate-180 text-haze/60" />
                  </Link>
                </li>
              ))}
            </ul>
          </Panel>

          <div className="flex items-start gap-2 rounded-xl border border-iris/25 bg-iris/[0.05] p-3.5">
            <Info aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-iris-soft" />
            <p className="text-[12px] leading-5 text-haze">
              This is a demonstration intake. The case receipt is synthetic and
              expires with the server process. It does not create a real
              support obligation, and queue names are illustrative pending
              operational sign-off.
            </p>
          </div>

          <p className="font-mono text-[11px] uppercase leading-4 tracking-[0.1em] text-haze/60">
            {FIXTURE_LABEL}
          </p>
        </aside>
      </div>
    </PageShell>
  );
}
