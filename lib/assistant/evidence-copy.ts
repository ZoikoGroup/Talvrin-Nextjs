import type {
  AttributionState,
  ClaimMapping,
  ContentClass,
  EvidenceSourceDetail,
  SourceTier,
} from "./types";

/**
 * Client-safe copy for the evidence surfaces (WF-02 §5, WF-03 §6.2, §10.1,
 * §11). Contains no source data, so it can be bundled for the browser.
 */

export const TIER_COPY: Record<SourceTier, string> = {
  H0: "H0 · Original issuer, regulator or exchange",
  H1: "H1 · Institutional custodian or official method",
  H2: "H2 · Permitted licensed-derived",
  H3: "H3 · Attributed reproduction",
  H4: "H4 · Discovery only",
};

export const CONTENT_CLASS_COPY: Record<ContentClass, string> = {
  PRIMARY_NUMERIC: "Primary numeric record",
  PRIMARY_NARRATIVE: "Primary narrative",
  REGULATORY_EVENT: "Regulatory or scheduled event",
  LICENSED_DERIVED: "Licensed derived data",
  SECONDARY_ATTRIBUTION: "Secondary attribution",
  COMMENTARY_OPINION: "Commentary or opinion",
  SYSTEM_DERIVED: "Talvrin system-derived",
};

/**
 * WF-03 §6.2: "Verified" appears only for PRIMARY_VERIFIED. A retrieved or
 * licensed record is described as such, never as verified.
 */
export const ATTRIBUTION_COPY: Record<
  AttributionState,
  { label: string; tone: "ok" | "neutral" | "warn" | "danger"; detail: string }
> = {
  PRIMARY_VERIFIED: {
    label: "Primary record · validation gates passed",
    tone: "ok",
    detail:
      "The fact was taken from the original issuer's record and passed this answer's admission checks. In this demonstration the checks are simulated.",
  },
  PRIMARY_REVIEWED: {
    label: "Primary record · reviewed",
    tone: "neutral",
    detail:
      "The record comes from the original publisher and was reviewed for admission. It has not been through numerical validation.",
  },
  LICENSED_DERIVED: {
    label: "Licensed data · not independently checked",
    tone: "warn",
    detail:
      "The record is licensed from a data vendor. Retrieval and licensing are not verification.",
  },
  UNVERIFIED: {
    label: "Unverified",
    tone: "warn",
    detail: "No validation has been recorded for this record.",
  },
  DISPUTED: {
    label: "Disputed by another record",
    tone: "danger",
    detail: "Another admissible record reports a different value for the same item.",
  },
  WITHHELD: {
    label: "Attribution withheld",
    tone: "neutral",
    detail: "The attribution state cannot be shown under current access rights.",
  },
};

/** WF-03 §10.1 claim-to-source modes with literal product copy. */
export const CLAIM_MAPPING_COPY: Record<
  ClaimMapping,
  { label: string; tone: "ok" | "neutral" | "warn" | "danger" | "info"; copy: (n?: number) => string }
> = {
  SUPPORTED: {
    label: "Supported",
    tone: "neutral",
    copy: (n) =>
      n ? `This source supports claim [${n}].` : "This source supports the claim.",
  },
  QUALIFIED: {
    label: "Qualified",
    tone: "warn",
    copy: () => "This record supports part of the claim; see qualification.",
  },
  CONFLICTING: {
    label: "Conflicting",
    tone: "danger",
    copy: () => "Authoritative records differ on this point.",
  },
  WITHHELD: {
    label: "Withheld",
    tone: "danger",
    copy: () => "Document content cannot be shown under current access rights.",
  },
  UNRESOLVED: {
    label: "Location unresolved",
    tone: "warn",
    copy: () => "The exact source location could not be confirmed.",
  },
  NOT_FOUND: {
    label: "No evidence",
    tone: "danger",
    copy: () => "No eligible evidence was located for this claim.",
  },
  CALCULATED: {
    label: "Talvrin calculation",
    tone: "info",
    copy: () => "Talvrin calculation — inspect inputs and method.",
  },
  SUPERSEDED: {
    label: "Superseded",
    tone: "warn",
    copy: () => "This cited answer version has been superseded.",
  },
};

/** WF-03 §11 inspector states with literal recovery copy. */
export const INSPECTOR_STATE_COPY = {
  OPENING: "Loading evidence for this answer version…",
  EMPTY: "No eligible evidence was available for this claim.",
  CONFLICT: "Sources disagree. Review each record and its date.",
  STALE: "This information may be out of date. Check the as-of time.",
  RIGHTS_DENIED: "The source cannot be displayed under current access rights.",
  RIGHTS_REVOKED: "Access to this source is no longer available.",
  ANCHOR_UNRESOLVED: "The record is linked, but the exact location is unavailable.",
  SUPERSEDED: "This answer version is no longer available for inspection.",
  NOT_FOUND: "This evidence record is temporarily unavailable.",
  RATE_LIMITED: "Too many requests. Please try again later.",
  ERROR: "We could not load this source. Retry or return to the answer.",
  EXPIRED: "This viewing session expired. Reopen the citation.",
} as const;

export type InspectorStateKey = keyof typeof INSPECTOR_STATE_COPY;

/** WF-02 §5.1 unavailable-link copy. */
export const SOURCE_ACCESS_RESTRICTED_COPY =
  "Source metadata available; public document access is restricted.";

/** WF-03 §1.3 / EI-06 time labels. */
export const TIME_LABELS = {
  publishedAt: "Published",
  observedAt: "As of",
  revisedAt: "Revised",
  retrievedAt: "Retrieved by Talvrin",
  ingestedAt: "Ingested by Talvrin",
  generatedAt: "Answer prepared",
  rightsCheckedAt: "Display rights checked",
} as const;

export const NOT_AVAILABLE = "Not available";
export const LOCATOR_UNAVAILABLE = "Exact location unavailable";

export function resolutionCopy(
  resolution: EvidenceSourceDetail["resolution"]
): string | null {
  switch (resolution) {
    case "RIGHTS_DENIED":
      return INSPECTOR_STATE_COPY.RIGHTS_DENIED;
    case "RIGHTS_REVOKED":
      return INSPECTOR_STATE_COPY.RIGHTS_REVOKED;
    case "ANCHOR_UNRESOLVED":
      return INSPECTOR_STATE_COPY.ANCHOR_UNRESOLVED;
    default:
      return null;
  }
}

/** Maps an API error code/status to an inspector state (WF-03 §11). */
export function inspectorStateForError(
  status: number,
  code: string | undefined
): InspectorStateKey {
  if (code === "ANSWER_SUPERSEDED" || status === 409) return "SUPERSEDED";
  if (status === 429) return "RATE_LIMITED";
  if (code === "JOB_EXPIRED" || code === "GUEST_EXPIRED") return "EXPIRED";
  if (status === 404) return "NOT_FOUND";
  return "ERROR";
}
