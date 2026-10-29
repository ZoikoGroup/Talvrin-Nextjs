/**
 * WF-08 case intake (server only). Client components must not import this
 * module's values: the request-type taxonomy reaches the browser through
 * GET /api/assistant/help/capabilities so the category list is always the
 * server's (WF-08 §3.1 "validate category against server capabilities").
 */
import type {
  CaseReceipt,
  CaseTopic,
  CaseTypeOption,
  ClaimReportContext,
  SourceRecord,
} from "./types";
import { opaqueId } from "./format";
import { getResearchJob, publishedAnswer } from "./research-store";
import { comparisonJobView, getComparisonJob } from "./comparison-store";
import { getSources } from "./sources";

export const CASE_NOTICE_VERSION = "privacy-notice-wf08-demo-2026-10";
export const CASE_NOTICE_PURPOSE =
  "Talvrin processes this report only to route it to a human review queue, investigate the referenced evidence and keep an audit record. It is not used for marketing, is not published, and does not create an account or public case history.";
export const CASE_POLICY_VERSION = "rights-policy-demo-2026-10";
export const DESCRIPTION_MIN = 40;
export const DESCRIPTION_MAX = 2000;
const SOURCE_HINT_MAX = 300;

/** WF-08 §09 taxonomy. Queue owners are illustrative pending sign-off. */
export const CASE_TYPES: CaseTypeOption[] = [
  {
    id: "SOURCE_FACT",
    label: "A claim differs from its linked official source",
    guidance:
      "Name the figure or statement and the record you believe it differs from. A source snapshot and version are needed for review.",
    queue: "Research Operations + source governance",
    intake: "PUBLIC",
  },
  {
    id: "METHODOLOGY",
    label: "A formula, basis or comparison looks wrong",
    guidance:
      "Name the calculation, the basis or comparability problem, and the method version if shown. Reviewers reproduce the calculation.",
    queue: "Quant Engineering + Research QA",
    intake: "PUBLIC",
  },
  {
    id: "TIMESTAMP",
    label: "An “as of” date or market-session context is wrong",
    guidance:
      "Say which date or session looks wrong and what you expected. Publication, observation and retrieval times are kept separate.",
    queue: "Data QA",
    intake: "PUBLIC",
  },
  {
    id: "COVERAGE_GAP",
    label: "An expected source record is missing",
    guidance:
      "Describe the record you expected to see. Talvrin does not promise complete coverage.",
    queue: "Scope and coverage owner",
    intake: "PUBLIC",
  },
  {
    id: "DATA_RIGHTS",
    label: "Evidence may be shown or shared without permission",
    guidance:
      "Describe what was shown and where. Do not paste the restricted content itself.",
    queue: "Data Rights + Legal",
    intake: "PUBLIC",
  },
  {
    id: "SECURITY_PRIVACY",
    label: "Personal, protected or security-sensitive content",
    guidance:
      "Use the protected security and privacy route. Do not describe the details in this public form.",
    queue: "Security/Privacy response owner",
    intake: "PROTECTED",
  },
  {
    id: "ACCESSIBILITY",
    label: "I could not use or access part of the assistant",
    guidance:
      "Describe what you were trying to do and what blocked you. Screenshots are not required.",
    queue: "Product Support + Engineering · accessibility queue",
    intake: "PUBLIC",
  },
  {
    id: "GENERAL_HELP",
    label: "Navigation, product or sign-in help",
    guidance:
      "Describe what you need help with. Never include a password; Talvrin will never ask for one.",
    queue: "Product Support",
    intake: "PUBLIC",
  },
  {
    id: "FIN_PROMO",
    label: "Possible personalized advice or a misleading claim",
    guidance:
      "Quote the wording that concerns you. Reviewers do not give investment advice in reply.",
    queue: "Legal/Compliance",
    intake: "PUBLIC",
  },
];

export function caseType(id: string): CaseTypeOption | undefined {
  return CASE_TYPES.find((item) => item.id === id);
}

/* ------------------------------------------------------------------ */
/* Plain-text policy (HLP-13, AC-09, J-06)                              */
/* ------------------------------------------------------------------ */

const MARKUP = /<\s*\/?\s*[a-z!?][^>]*>|javascript\s*:|data\s*:\s*text\/html|on[a-z]+\s*=\s*["']/i;
// Control characters other than tab/newline, and bidi override controls.
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F‪-‮⁦-⁩]/g;
const SECRET =
  /\b(pass(word|code)?|pwd|api[\s_-]?key|secret[\s_-]?key|access[\s_-]?token)\s*[:=]\s*\S+|\b(?:\d[ -]?){13,19}\b/i;

export function normalizePlainText(value: string): string {
  return value.normalize("NFC").replace(CONTROL, "").replace(/\r\n?/g, "\n").trim();
}

export function plainTextProblem(value: string): string | null {
  if (MARKUP.test(value)) {
    return "Remove HTML, script or link markup. Only plain text is accepted.";
  }
  if (SECRET.test(value)) {
    return "This looks like it may include a password, key or card/account number. Remove it before sending. If credentials were exposed, use the protected security route.";
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Claim reference resolution (HLP-10/11/21, AC-04/05/06)               */
/* ------------------------------------------------------------------ */

export type OwnershipCheck = (
  kind: "research" | "comparison",
  ref: string
) => boolean;

export class ReferenceNotAvailableError extends Error {
  constructor() {
    super("REFERENCE_NOT_AVAILABLE");
    this.name = "ReferenceNotAvailableError";
  }
}

function viewPolicy(source: SourceRecord): ClaimReportContext["sources"][number] {
  // Rights are re-evaluated on every resolution, never cached in the form.
  const canQuote =
    source.rights.display && source.rights.quote && !!source.excerpt;
  const policy: ClaimReportContext["sources"][number]["source_view_policy"] =
    source.rights.state === "DENIED" || !source.rights.display
      ? "WITHHELD"
      : !canQuote
        ? "REDACTED"
        : source.freshness === "STALE"
          ? "STALE"
          : "AVAILABLE";
  const limit = Math.max(0, source.rights.excerptLimit || 0);
  const excerpt =
    canQuote && source.excerpt
      ? limit > 0 && source.excerpt.length > limit
        ? `${source.excerpt.slice(0, limit).trimEnd()}…`
        : source.excerpt
      : null;
  return {
    source_ref: source.id,
    title: source.title,
    publisher: source.publisher,
    tier: source.tier,
    document_date: source.documentDate,
    version: source.version,
    as_of: source.observedAt,
    source_view_policy: policy,
    excerpt,
    restriction_note:
      policy === "WITHHELD" || policy === "REDACTED"
        ? "This source cannot be shown here because of access or licensing restrictions."
        : policy === "STALE"
          ? "This source is older than the freshness threshold."
          : null,
  };
}

/**
 * Resolves an answer or comparison claim for the caller. Unknown refs,
 * refs from another guest session, unready answers and claims not in the
 * answer all raise the same error so existence is never disclosed.
 */
export function resolveClaimContext(
  input: {
    answerRef?: string;
    comparisonRef?: string;
    claimId?: string;
    sourceId?: string;
  },
  owns: OwnershipCheck
): ClaimReportContext {
  const claimId = (input.claimId ?? "").trim();
  if (!claimId || claimId.length > 128) throw new ReferenceNotAvailableError();

  let headline = "";
  let claims: { id: string; text: string; verification: ClaimReportContext["verification"]; materiality: ClaimReportContext["materiality"]; sourceIds: string[] }[] = [];
  let sourceIds: string[] = [];
  let origin: ClaimReportContext["origin"];

  if (input.answerRef) {
    const record = getResearchJob(input.answerRef);
    if (!record || !owns("research", input.answerRef)) {
      throw new ReferenceNotAvailableError();
    }
    const answer = publishedAnswer(record);
    if (!answer) throw new ReferenceNotAvailableError();
    headline = answer.headline;
    claims = answer.claims;
    sourceIds = answer.sources;
    origin = "ANSWER";
  } else if (input.comparisonRef) {
    const record = getComparisonJob(input.comparisonRef);
    if (!record || !owns("comparison", input.comparisonRef)) {
      throw new ReferenceNotAvailableError();
    }
    const view = comparisonJobView(record);
    if (!view.result || (view.state !== "READY" && view.state !== "PARTIAL" && view.state !== "CONFLICT")) {
      throw new ReferenceNotAvailableError();
    }
    headline = view.result.title;
    claims = view.result.claims;
    sourceIds = view.result.sources;
    origin = "COMPARISON";
  } else {
    throw new ReferenceNotAvailableError();
  }

  const claim = claims.find((item) => item.id === claimId);
  if (!claim) throw new ReferenceNotAvailableError();

  const permitted = new Set(sourceIds);
  const linked = getSources(claim.sourceIds.filter((id) => permitted.has(id)));
  const sources = linked.map(viewPolicy);
  const requested = input.sourceId
    ? sources.find((item) => item.source_ref === input.sourceId)
    : undefined;

  return {
    answer_ref: origin === "ANSWER" ? (input.answerRef ?? null) : null,
    comparison_ref:
      origin === "COMPARISON" ? (input.comparisonRef ?? null) : null,
    claim_ref: claim.id,
    origin,
    headline,
    claim_text: claim.text,
    verification: claim.verification,
    materiality: claim.materiality,
    sources,
    selected_source_ref: requested?.source_ref ?? sources[0]?.source_ref ?? null,
    source_rejected: !!input.sourceId && !requested,
    policy_version: CASE_POLICY_VERSION,
  };
}

/* ------------------------------------------------------------------ */
/* Intake                                                               */
/* ------------------------------------------------------------------ */

interface ClaimLink {
  answer_ref: string | null;
  comparison_ref: string | null;
  claim_ref: string;
  source_ref: string | null;
  source_view_policy: string | null;
  policy_version: string;
}

interface SupportCase {
  receipt: CaseReceipt;
  /** Owner binding: the guest session that submitted (no PII). */
  submitter: string;
  fingerprint: string;
  lifecycle_state: "RECEIVED";
  claim_link: ClaimLink | null;
  allegation: {
    plain_text: string;
    category: CaseTopic;
    submitter_mode: "GUEST";
    consent_version: string;
    source_hint: string | null;
  };
  contact_email: string | null;
  created_ms: number;
}

const cases = new Map<string, SupportCase>();
const idempotency = new Map<string, string>();

export class CaseValidationError extends Error {
  readonly fields: Record<string, string>;

  constructor(fields: Record<string, string>) {
    super("INVALID_PAYLOAD");
    this.name = "CaseValidationError";
    this.fields = fields;
  }
}

export class CaseProtectedRouteError extends Error {
  constructor() {
    super("PROTECTED_ROUTE_REQUIRED");
    this.name = "CaseProtectedRouteError";
  }
}

export class CaseDuplicateError extends Error {
  /** Original receipt, only for the same authorized submitter. */
  readonly receipt: CaseReceipt | null;

  constructor(receipt: CaseReceipt | null) {
    super("CASE_DUPLICATE");
    this.name = "CaseDuplicateError";
    this.receipt = receipt;
  }
}

export interface CaseInput {
  idempotency_key: string;
  request_type: string;
  answer_ref?: string;
  comparison_ref?: string;
  claim_ref?: string;
  source_ref?: string;
  source_hint?: string;
  description: string;
  email?: string;
  notice_version: string;
}

function fingerprintOf(parts: (string | null | undefined)[]): string {
  let hash = 2166136261;
  const text = parts.map((part) => part ?? "").join("␟");
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16);
}

/**
 * Validates and durably records a case. Returns `{ receipt, replayed }`;
 * a retry with the same scoped idempotency key and payload returns the
 * original receipt (AC-17, HLP-26).
 */
export function submitCase(
  input: CaseInput,
  submitter: string,
  owns: OwnershipCheck
): { receipt: CaseReceipt; replayed: boolean } {
  const key = input.idempotency_key.trim();
  const fields: Record<string, string> = {};
  if (!key || key.length > 128) {
    fields.idempotency_key = "A submission reference is required.";
  }

  const type = caseType(input.request_type);
  if (!type) {
    fields.request_type = "Choose one of the listed issue types.";
  } else if (type.intake === "PROTECTED") {
    throw new CaseProtectedRouteError();
  }

  const description = normalizePlainText(input.description ?? "");
  if (description.length < DESCRIPTION_MIN) {
    fields.description = `Describe the issue in at least ${DESCRIPTION_MIN} characters.`;
  } else if (description.length > DESCRIPTION_MAX) {
    fields.description = `Keep the description to ${DESCRIPTION_MAX.toLocaleString("en-US")} characters or fewer.`;
  } else {
    const problem = plainTextProblem(description);
    if (problem) fields.description = problem;
  }

  const sourceHint = normalizePlainText(input.source_hint ?? "");
  if (sourceHint) {
    if (sourceHint.length > SOURCE_HINT_MAX) {
      fields.source_hint = `Keep the locator to ${SOURCE_HINT_MAX} characters or fewer.`;
    } else {
      const problem = plainTextProblem(sourceHint);
      if (problem) fields.source_hint = problem;
    }
  }

  const email = (input.email ?? "").trim();
  if (email && (email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email))) {
    fields.email = "Enter a valid email address, or leave it blank.";
  }

  if (input.notice_version !== CASE_NOTICE_VERSION) {
    fields.notice_version =
      "The privacy notice has changed. Review the current notice and confirm again.";
  }

  if (Object.keys(fields).length || !type) {
    throw new CaseValidationError(fields);
  }

  // Claim references are server-verified, never user-authoritative.
  let claimLink: ClaimLink | null = null;
  if (input.claim_ref || input.answer_ref || input.comparison_ref) {
    const context = resolveClaimContext(
      {
        answerRef: input.answer_ref || undefined,
        comparisonRef: input.answer_ref ? undefined : input.comparison_ref || undefined,
        claimId: input.claim_ref,
        sourceId: input.source_ref || undefined,
      },
      owns
    );
    if (input.source_ref && context.source_rejected) {
      throw new ReferenceNotAvailableError();
    }
    const source = input.source_ref
      ? context.sources.find((item) => item.source_ref === input.source_ref)
      : undefined;
    claimLink = {
      answer_ref: context.answer_ref,
      comparison_ref: context.comparison_ref,
      claim_ref: context.claim_ref,
      source_ref: source?.source_ref ?? null,
      source_view_policy: source?.source_view_policy ?? null,
      policy_version: context.policy_version,
    };
  } else if (input.source_ref) {
    // An opaque source ref is only meaningful against a resolved claim.
    throw new ReferenceNotAvailableError();
  }

  const fingerprint = fingerprintOf([
    type.id,
    description,
    claimLink?.answer_ref,
    claimLink?.comparison_ref,
    claimLink?.claim_ref,
    claimLink?.source_ref,
    sourceHint,
    email,
  ]);

  const scopedKey = `${submitter}:${key}`;
  const existingRef = idempotency.get(scopedKey);
  if (existingRef) {
    const existing = cases.get(existingRef);
    if (existing) {
      if (existing.fingerprint === fingerprint) {
        return { receipt: existing.receipt, replayed: true };
      }
      // Same key, different payload: never a second durable case.
      throw new CaseDuplicateError(null);
    }
    idempotency.delete(scopedKey);
  }

  // Same submitter, same content, new key within 10 minutes: duplicate.
  const now = Date.now();
  for (const item of cases.values()) {
    if (
      item.submitter === submitter &&
      item.fingerprint === fingerprint &&
      now - item.created_ms < 10 * 60 * 1000
    ) {
      throw new CaseDuplicateError(item.receipt);
    }
  }

  const channel: CaseReceipt["channel"] =
    claimLink || type.id !== "GENERAL_HELP" ? "research-cases" : "general-cases";

  const receipt: CaseReceipt = {
    case_ref: opaqueId("case"),
    status: "RECEIVED",
    receipt_time_utc: new Date(now).toISOString(),
    case_version: 1,
    request_type: type.id,
    request_type_label: type.label,
    channel,
    queue: type.queue,
    notice_version: CASE_NOTICE_VERSION,
    claim_linked: !!claimLink,
    response_boundary:
      "A human owner will review this report. No response time is promised, and the assistant cannot confirm that the allegation is correct or change a canonical fact directly.",
  };

  cases.set(receipt.case_ref, {
    receipt,
    submitter,
    fingerprint,
    lifecycle_state: "RECEIVED",
    claim_link: claimLink,
    allegation: {
      plain_text: description,
      category: type.id,
      submitter_mode: "GUEST",
      consent_version: CASE_NOTICE_VERSION,
      source_hint: sourceHint || null,
    },
    contact_email: email || null,
    created_ms: now,
  });
  idempotency.set(scopedKey, receipt.case_ref);

  if (cases.size > 200) {
    const oldest = [...cases.keys()].slice(0, cases.size - 200);
    oldest.forEach((ref) => {
      cases.delete(ref);
      for (const [scoped, caseRef] of idempotency) {
        if (caseRef === ref) idempotency.delete(scoped);
      }
    });
  }
  return { receipt, replayed: false };
}
