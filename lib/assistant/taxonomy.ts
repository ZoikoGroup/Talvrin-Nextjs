import type {
  AnswerStatus,
  FeatureFlag,
  FeatureFlagState,
  ScopeId,
  StageDefinition,
} from "./types";

export const ASSISTANT_BASE = "/assistant";

export const FIXTURE_LABEL =
  "Synthetic demonstration data — not a live research result";

export const ASSISTANT_NAME = "Talvrin Research Assistant";

export const SCOPES: {
  id: ScopeId;
  label: string;
  supported: boolean;
  note: string;
  description: string;
}[] = [
  {
    id: "equities",
    label: "Equities",
    supported: true,
    description: "Listed companies, audited results and filings",
    note: "Launch scope · primary filings and audited results",
  },
  {
    id: "fixed-income",
    label: "Fixed income",
    supported: true,
    description: "Government and corporate bonds, yields and terms",
    note: "Launch scope · terms and methodology; licensed prices withheld",
  },
  {
    id: "funds",
    label: "Funds & other assets",
    supported: true,
    description: "Listed funds, fees and mandate documents",
    note: "Launch scope · prospectus and fee data only",
  },
  {
    id: "macro",
    label: "Economic statistics",
    supported: true,
    description: "Official releases, definitions and revisions",
    note: "Launch scope · official statistical agencies; no consensus forecasts",
  },
  {
    id: "central-banks",
    label: "Central banks",
    supported: true,
    description: "Policy decisions, statements and methodology",
    note: "Launch scope · published statements and notes",
  },
];

export const STARTER_PROMPTS = [
  {
    id: "starter-company",
    title: "Compare companies",
    description: "Official statements and comparable periods",
    question:
      "Compare the latest official revenue figures for Meridian Grid plc.",
    scopeId: "equities" as ScopeId,
    tag: "Official filings",
  },
  {
    id: "starter-bond",
    title: "Understand a bond",
    description: "Sources, yields and methodology",
    question:
      "Explain how a government bond yield is calculated, and what duration measures.",
    scopeId: "fixed-income" as ScopeId,
    tag: "Methodology",
  },
  {
    id: "starter-economy",
    title: "Explore an economy",
    description: "Official statistics and monetary policy",
    question:
      "What does the latest official data show for UK inflation and the Bank of England policy rate?",
    scopeId: "macro" as ScopeId,
    tag: "Official statistics",
  },
  {
    id: "starter-fund",
    title: "Review an ETF",
    description: "Fund facts, holdings and disclosures",
    question:
      "What is the latest market price for the Meridian Global Equity ETF?",
    scopeId: "funds" as ScopeId,
    tag: "Rights gate",
  },
];

export const RESEARCH_STAGES: StageDefinition[] = [
  {
    key: "ACCEPTED",
    // WF-02 §7 R01–R06 literal stage copy.
    label: "Question received",
    detail: "Your question is saved for this session. No answer text is written yet.",
    durationMs: 600,
  },
  {
    key: "POLICY",
    label: "Checking coverage and permitted sources…",
    detail:
      "Coverage and source permissions are checked before any record is read.",
    durationMs: 700,
  },
  {
    key: "RETRIEVE",
    label: "Finding authoritative records…",
    detail: "Only records this public session may use are searched.",
    durationMs: 900,
  },
  {
    key: "VERIFY",
    label: "Checking source dates and numerical consistency…",
    detail: "Each statement is linked to an eligible source record.",
    durationMs: 900,
  },
  {
    key: "CALCULATE",
    label: "Applying published methodology…",
    detail: "Derived figures use a versioned calculation method, not the language model.",
    durationMs: 700,
  },
  {
    key: "VALIDATE",
    label: "Finalising citations and limitations…",
    detail: "Nothing is shown until the material claims pass their checks.",
    durationMs: 600,
  },
  {
    key: "PUBLISH",
    label: "Publishing the checked answer…",
    detail: "The answer version is fixed together with its source map.",
    durationMs: 400,
  },
];

/** WF-02 §4.1 pending copy. */
export const RESEARCH_PENDING_COPY = "Checking eligible sources and evidence…";

export const COMPARISON_STAGES: StageDefinition[] = [
  {
    key: "ACCEPTED",
    label: "Comparison accepted",
    detail: "Instrument identities and metric set received.",
    durationMs: 500,
  },
  {
    key: "POLICY",
    label: "Applicability gate",
    detail: "Checking metric applicability, periods, currencies and data rights.",
    durationMs: 700,
  },
  {
    key: "RETRIEVE",
    label: "Aligned retrieval",
    detail: "Retrieving point-in-time observations for each permitted cell.",
    durationMs: 900,
  },
  {
    key: "CALCULATE",
    label: "Deterministic computation",
    detail: "Calculating deltas and growth with a recorded method version.",
    durationMs: 700,
  },
  {
    key: "VALIDATE",
    label: "Result validation",
    detail: "Withholding any cell whose evidence or rights do not clear.",
    durationMs: 600,
  },
  {
    key: "PUBLISH",
    label: "Results published",
    detail: "The comparison snapshot is sealed with per-cell provenance.",
    durationMs: 400,
  },
];

export const STATUS_META: Record<
  AnswerStatus,
  {
    label: string;
    short: string;
    tone: "ok" | "info" | "warn" | "danger";
    description: string;
  }
> = {
  // WF-02 §6.2 state badges. "Evidence-checked" has a limited meaning and
  // the description says so; it is not a guarantee that a figure is true.
  READY: {
    label: "Evidence-checked",
    short: "Checked",
    tone: "ok",
    description:
      "Each material claim shown is linked to an eligible source and passed this answer's evidence and rights checks. This shows where a figure came from; it is not a guarantee that the figure is correct.",
  },
  PARTIAL: {
    label: "Partial answer",
    short: "Partial",
    tone: "warn",
    description:
      "Some requested periods or instruments could not be checked; the answer is limited to the cited records.",
  },
  CONFLICT: {
    label: "Source conflict",
    short: "Conflict",
    tone: "danger",
    description:
      "Official records disagree on this figure. We cannot present one verified value yet.",
  },
  STALE: {
    label: "Stale data",
    short: "Stale",
    tone: "warn",
    description:
      "The latest eligible source is older than the freshness limit for this question; newer information has not been verified.",
  },
  RESTRICTED: {
    label: "License restricted",
    short: "Restricted",
    tone: "danger",
    description:
      "We cannot display this material under current data-use permissions.",
  },
  UNSUPPORTED: {
    label: "No match",
    short: "No match",
    tone: "info",
    description:
      "We could not verify this answer using eligible sources within your selected coverage.",
  },
};

export const TIER_LABEL: Record<string, string> = {
  H0: "Official primary",
  H1: "Issuer or method",
  H2: "Licensed",
  H3: "Secondary",
  H4: "Discovery only",
};

export const NO_ADVICE_COPY =
  "Talvrin provides evidence-linked research, not personal investment advice. It does not recommend buying, selling or holding any instrument.";

export const GUEST_BOUNDARY_COPY =
  "This is a temporary guest session. It is not saved to an account and cannot be retrieved on another device.";

export const DATA_RIGHTS_COPY =
  "Source licences can permit fetching, storing, deriving, displaying, quoting, exporting and redistributing separately. This build fails closed: if a permission is not explicit, it is denied.";

/**
 * Release flags served by /api/assistant/config. Features not yet approved
 * for public release stay OFF; reviewed-but-unapproved surfaces are PREVIEW
 * and must say so on screen.
 */
export const FEATURE_FLAGS: Record<FeatureFlag, FeatureFlagState> = {
  comparison: "PREVIEW",
  savedResearch: "OFF",
  alerts: "PREVIEW",
  exports: "PREVIEW",
  sharing: "OFF",
  bondYieldAnalytics: "OFF",
  historicalTrends: "OFF",
};
