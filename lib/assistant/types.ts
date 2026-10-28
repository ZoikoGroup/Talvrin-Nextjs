/**
 * Domain contracts for the Talvrin public research assistant.
 *
 * These types deliberately mirror the objects described in the WF-01 to
 * WF-12 engineering handoffs: answers are published objects made of typed
 * blocks and claim-level evidence, never raw model prose. The demo API layer
 * returns synthetic fixtures shaped like these contracts so a real
 * retrieval/verification service can replace it without touching the UI.
 */

export type ScopeId =
  | "equities"
  | "fixed-income"
  | "funds"
  | "macro"
  | "central-banks";

export type AnswerStatus =
  | "READY"
  | "PARTIAL"
  | "CONFLICT"
  | "STALE"
  | "RESTRICTED"
  | "UNSUPPORTED";

export type ScenarioKey =
  | "CORPORATE_READY"
  | "BOND_EDUCATION"
  | "CONFLICT"
  | "RESTRICTED"
  | "STALE"
  | "PARTIAL"
  | "UNSUPPORTED"
  | "ADVICE"
  /** No fixture in the demonstration evidence set answers the question. */
  | "NO_MATCH";

export type StageKey =
  | "ACCEPTED"
  | "POLICY"
  | "RETRIEVE"
  | "VERIFY"
  | "CALCULATE"
  | "VALIDATE"
  | "PUBLISH";

export interface StageDefinition {
  key: StageKey;
  label: string;
  detail: string;
  durationMs: number;
}

export type SourceClass =
  | "PRIMARY_NUMERIC"
  | "PRIMARY_TEXT"
  | "OFFICIAL_MACRO"
  | "LICENSED_MARKET"
  | "ISSUER_DISCLOSURE"
  | "METHOD_STANDARD"
  | "SECONDARY_COMMENTARY";

/**
 * WF-03 §6.2 authority tier: H0 original issuer/regulator/exchange; H1
 * institutional custodian; H2 permitted licensed-derived; H3 attributed
 * reproduction; H4 discovery only (never supports a material claim).
 */
export type SourceTier = "H0" | "H1" | "H2" | "H3" | "H4";

/** WF-03 §6.2 content class, independent of tier and attribution. */
export type ContentClass =
  | "PRIMARY_NUMERIC"
  | "PRIMARY_NARRATIVE"
  | "REGULATORY_EVENT"
  | "LICENSED_DERIVED"
  | "SECONDARY_ATTRIBUTION"
  | "COMMENTARY_OPINION"
  | "SYSTEM_DERIVED";

/**
 * WF-03 §6.2 fact-attribution state. "Verified" wording is reserved for
 * PRIMARY_VERIFIED; a retrieved or licensed record is never "verified".
 */
export type AttributionState =
  | "PRIMARY_VERIFIED"
  | "PRIMARY_REVIEWED"
  | "LICENSED_DERIVED"
  | "UNVERIFIED"
  | "DISPUTED"
  | "WITHHELD";

/** WF-03 §10.1 claim-to-source visibility modes. */
export type ClaimMapping =
  | "SUPPORTED"
  | "QUALIFIED"
  | "CONFLICTING"
  | "WITHHELD"
  | "UNRESOLVED"
  | "NOT_FOUND"
  | "CALCULATED"
  | "SUPERSEDED";

export type RightsState =
  | "FULL"
  | "METADATA_ONLY"
  | "EXCERPT_ONLY"
  | "LINK_ONLY"
  | "DENIED";

export interface SourceRights {
  fetch: boolean;
  store: boolean;
  derive: boolean;
  display: boolean;
  quote: boolean;
  export: boolean;
  redistribute: boolean;
  excerptLimit: number;
  state: RightsState;
  rationale: string;
}

export type Freshness = "CURRENT" | "AGING" | "STALE";
export type Verification = "VERIFIED" | "UNVERIFIED" | "CONTESTED";

export interface SourceRecord {
  id: string;
  title: string;
  shortTitle: string;
  publisher: string;
  publisherType: string;
  sourceClass: SourceClass;
  tier: SourceTier;
  documentDate: string;
  observedAt: string | null;
  retrievedAt: string;
  ingestedAt: string;
  locator: string;
  version: string;
  jurisdiction: string;
  licenceId: string;
  rights: SourceRights;
  excerpt: string | null;
  summary: string;
  freshness: Freshness;
  verification: Verification;
  tags: string[];
  /** WF-03 §6.2 content class (optional for older fixtures). */
  contentClass?: ContentClass;
  /** WF-03 §6.2 attribution state (optional for older fixtures). */
  attributionState?: AttributionState;
  /** WF-03 §8.1 source_revision_at; null when the record was never revised. */
  revisedAt?: string | null;
  /** WF-03 P-03 record revision / snapshot identity. */
  recordRevision?: string;
  /** WF-03 EI-04 canonical document id. */
  canonicalDocId?: string;
  /** WF-03 EI-07: false when the anchor cannot be resolved. */
  locatorResolved?: boolean;
  /** WF-03 §8.2 "revised by" lineage: the record this one amends. */
  revisionOf?: string;
}

export type ClaimVerification =
  | "SUPPORTED"
  | "CONTESTED"
  | "UNSUPPORTED"
  | "PARTIAL";

export interface Claim {
  id: string;
  text: string;
  materiality: "MATERIAL" | "SUPPORTING";
  verification: ClaimVerification;
  sourceIds: string[];
  note?: string;
  /** WF-02 §9.1: block that carries the claim's first citation. */
  blockId?: string;
  /** WF-02 §9.1 / WF-03 EI-02: exact published text of the claim. */
  span?: string;
  /** WF-03 §10.1 overall mapping for the claim. */
  mapping?: ClaimMapping;
  /** WF-03 P-02 evidence edges with their individual relationship. */
  evidence?: ClaimEvidenceEdge[];
  /** WF-03 P-08: deterministic method that produced a derived figure. */
  methodId?: string;
}

export interface ClaimEvidenceEdge {
  sourceId: string;
  relationship: ClaimMapping;
  /** Explicit qualifying text required for QUALIFIED edges. */
  qualification?: string;
}

export type Segment =
  | { kind: "text"; text: string }
  | { kind: "strong"; text: string }
  | { kind: "citation"; claimId: string };

export interface MetricValue {
  id: string;
  label: string;
  value: string | null;
  unit?: string;
  asOf?: string;
  status: "SHOWN" | "WITHHELD" | "CONTESTED" | "STALE" | "NOT_APPLICABLE";
  reasonCode?: string;
  claimId?: string;
}

export interface TableCell {
  text: string | null;
  status: "SHOWN" | "WITHHELD" | "NOT_APPLICABLE" | "CONTESTED";
  claimId?: string;
  note?: string;
}

export interface TableRow {
  id: string;
  header: string;
  cells: TableCell[];
}

/** WF-02 §9.1: every published block carries a stable blockId. */
export type AnswerBlock = AnswerBlockBody & { blockId?: string };

export type AnswerBlockBody =
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; segments: Segment[] }
  | { kind: "metric-grid"; title: string; metrics: MetricValue[] }
  | {
      kind: "table";
      caption: string;
      columns: string[];
      rows: TableRow[];
      note?: string;
    }
  | {
      kind: "callout";
      tone: "info" | "warn" | "danger" | "success";
      title: string;
      body: string;
      action?: { label: string; href: string };
    }
  | { kind: "evidence-list"; title: string; claimIds: string[] }
  | { kind: "method"; title: string; methodIds: string[] }
  | { kind: "limitations"; title: string; items: string[] };

export interface MethodRecord {
  id: string;
  name: string;
  version: string;
  summary: string;
  inputs: string[];
  limitations: string[];
  /** WF-02 §9.1 methods[].inputFactRefs (claim or source refs). */
  inputFactRefs?: string[];
  /** WF-02 §9.1 methods[].rightsPolicyRef. */
  rightsPolicyRef?: string;
  /** WF-03 EI-10 units, rounding and assumptions. */
  units?: string;
  rounding?: string;
  assumptions?: string[];
  /** WF-03 P-08 evaluation status. */
  evaluationStatus?: "EVALUATED" | "BLOCKED" | "NOT_INSTALLED";
}

export interface TimeContext {
  asOf: string;
  observedAt: string | null;
  publishedAt: string | null;
  ingestedAt: string;
  retrievedAt: string;
  generatedAt: string;
  timezone: string;
}

export interface CoverageScope {
  id: ScopeId;
  label: string;
  supported: boolean;
  note: string;
}

export interface CoverageInfo {
  scopes: CoverageScope[];
  gaps: string[];
  revisionNote: string;
}

export interface PolicyInfo {
  retrievalPolicy: string;
  answerPolicy: string;
  rightsPolicy: string;
  adviceBoundary: string;
  assistantLabel: string;
  modelDisclosure: string;
}

export interface PublishedAnswer {
  fixtureLabel: string;
  answerVersion: string;
  status: AnswerStatus;
  statusCode: string;
  headline: string;
  summary: string;
  blocks: AnswerBlock[];
  claims: Claim[];
  sources: string[];
  methods: MethodRecord[];
  timeContext: TimeContext;
  coverage: CoverageInfo;
  policy: PolicyInfo;
  limitations: string[];
  followUps: string[];
  /** WF-02 §5 / A03: claim-bound headline; every material figure cited. */
  headlineSegments?: Segment[];
  /** WF-02 §5 / A03: claim-bound summary; every material figure cited. */
  summarySegments?: Segment[];
  /** WF-02 §9.1 opaque message refs (no embedded user data). */
  messageRef?: string;
  parentRef?: string;
  /** WF-02 §9.1 publication policy flags. */
  policyFlags?: AnswerPolicyFlags;
  /** WF-03 EI-11: record-level disagreements, never averaged. */
  conflicts?: ConflictRecord[];
}

export interface AnswerPolicyFlags {
  publicDisplayAllowed: boolean;
  excerptAllowed: boolean;
  externalLinkAllowed: boolean;
  retentionClass: string;
}

export interface ConflictRecord {
  id: string;
  topic: string;
  claimIds: string[];
  entries: {
    sourceId: string;
    value: string;
    unit: string;
    period: string;
    status: string;
    reason: string;
  }[];
  nextAction: string;
}

/**
 * WF-02 §9 GET /research/{jobRef}/sources: rights-filtered source summary.
 * Contains metadata only; excerpts never travel in this shape.
 */
export interface PublicSourceSummary {
  sourceRefId: string;
  ordinal: number;
  label: string;
  title: string;
  publisher: string;
  publisherType: string;
  tier: SourceTier;
  sourceClass: SourceClass;
  contentClass: ContentClass | null;
  attributionState: AttributionState | null;
  rightsState: RightsState;
  restricted: boolean;
  publishedAt: string | null;
  observedAt: string | null;
  revisedAt: string | null;
  ingestedAt: string | null;
  retrievedAt: string | null;
  freshness: Freshness;
  claimIds: string[];
  allowedActions: EvidenceCapabilities;
}

/** WF-03 §7.1 effective access capabilities, computed server-side. */
export interface EvidenceCapabilities {
  metadata: boolean;
  excerpt: boolean;
  embed: boolean;
  linkOut: boolean;
  download: boolean;
  copyCitation: boolean;
}

export type EvidenceResolution =
  | "READY_METADATA"
  | "READY_EXCERPT"
  | "RIGHTS_DENIED"
  | "RIGHTS_REVOKED"
  | "ANCHOR_UNRESOLVED";

/** WF-03 §9.1 source-detail response (rights-filtered). */
export interface EvidenceSourceDetail {
  answerVersion: string;
  citationRef: string;
  sourceRef: string;
  ordinal: number;
  claimIds: string[];
  recordRevision: string | null;
  canonicalDocId: string | null;
  identity: {
    title: string;
    shortTitle: string;
    publisher: string | null;
    publisherType: string | null;
    version: string | null;
    jurisdiction: string | null;
    licenceId: string | null;
  };
  taxonomy: {
    sourceTier: SourceTier;
    contentClass: ContentClass | null;
    attributionState: AttributionState | null;
  };
  timestamps: {
    publishedAt: string | null;
    observedAt: string | null;
    revisedAt: string | null;
    retrievedAt: string | null;
    ingestedAt: string | null;
    rightsCheckedAt: string;
  };
  locator: { value: string | null; resolved: boolean };
  revisionOf: { sourceRef: string; title: string } | null;
  freshness: Freshness;
  summary: string | null;
  displayPolicy: EvidenceCapabilities;
  rightsState: RightsState;
  rightsReason: {
    code:
      | "PERMITTED"
      | "LICENCE_DENIED"
      | "OUTSIDE_ENTITLEMENT"
      | "SOURCE_UNAVAILABLE"
      | "ACCESS_REVOKED"
      | "LINK_NOT_PERMITTED";
    message: string;
  };
  /** Present only when the current rights decision permits an excerpt. */
  excerpt: string | null;
  excerptLimit: number;
  resolution: EvidenceResolution;
  rightsDecisionId: string;
}

export interface EvidenceClaimView {
  claimId: string;
  blockId: string | null;
  span: string;
  materiality: "MATERIAL" | "SUPPORTING";
  mapping: ClaimMapping;
  ordinals: number[];
  edges: {
    sourceRef: string;
    ordinal: number;
    relationship: ClaimMapping;
    qualification: string | null;
  }[];
  methodId: string | null;
  note: string | null;
}

/** WF-03 §9 GET /research/{jobId}/evidence. */
export interface EvidencePackage {
  jobRef: string;
  answerVersion: string;
  status: AnswerStatus;
  selectedCitation: string | null;
  claims: EvidenceClaimView[];
  sources: PublicSourceSummary[];
  methods: MethodRecord[];
  conflicts: ConflictRecord[];
  coverage: CoverageInfo;
  timeContext: TimeContext;
  limitations: string[];
  rightsCheckedAt: string;
}

export interface ResearchJobView {
  ref: string;
  question: string;
  scopeIds: ScopeId[];
  status: "RUNNING" | "READY" | "FAILED" | "CANCELLED" | "EXPIRED";
  stage: StageDefinition;
  stageIndex: number;
  stageCount: number;
  progress: number;
  createdAt: string;
  expiresAt: string;
  answerState: AnswerStatus;
  scenario: ScenarioKey;
  parentRef?: string;
  error?: string;
  /** WF-02 §9: last server event sequence; the client ignores lower values. */
  eventSeq?: number;
  /** WF-02 §9: published answer version, present once READY. */
  answerVersionRef?: string;
  /** WF-02 §9: guest-only session scope. */
  sessionScope?: "PUBLIC_GUEST";
  /** WF-02 R15: the published answer was revoked after publication. */
  revoked?: boolean;
}

export interface ResearchJobRecord {
  ref: string;
  question: string;
  scopeIds: ScopeId[];
  scenario: ScenarioKey;
  createdAt: number;
  expiresAt: number;
  cancelledAt?: number;
  parentRef?: string;
  answer: PublishedAnswer;
  /**
   * Demo-only rights revocation schedule (WF-02 F11, WF-03 F03): source
   * grants are withdrawn at `sourcesAt`; the answer is revoked at `answerAt`.
   */
  revocation?: { sourceIds: string[]; sourcesAt: number; answerAt: number };
}

/* ------------------------------------------------------------------ */
/* Comparison builder (WF-04 / WF-05)                                  */
/* ------------------------------------------------------------------ */

export type InstrumentKind = "EQUITY" | "FUND" | "GOVERNMENT_BOND";

export interface Instrument {
  id: string;
  name: string;
  ticker: string;
  exchange: string;
  kind: InstrumentKind;
  currency: "GBP" | "USD" | "EUR" | "JPY";
  fiscalYearEnd: string;
  sector: string;
  jurisdiction: string;
  coverageStart: string;
  dataRights: "FULL" | "METADATA_ONLY";
  note?: string;
  /** Canonical, immutable public identifier shown on tokens (WF-04 CMP-04). */
  canonicalId?: string;
  /** Venue display name, e.g. "London Stock Exchange". */
  venueName?: string;
  /** Launch scope of this record (WF-04 P-02). */
  launchStatus?: "LAUNCHED" | "UNLAUNCHED";
}

/** Raw fiscal/observation window for one instrument (WF-04 CMP-07). */
export interface ComparisonPeriodBounds {
  /** ISO date; null for point-in-time observations. */
  start: string | null;
  end: string;
  /** e.g. "Fiscal year ended 31 Mar 2026" or "Observation date". */
  label: string;
  basis: "FISCAL_ANNUAL" | "POINT_IN_TIME" | "FUND_DOCUMENT";
}

/**
 * Safe instrument fields returned by the authorised resolver
 * (GET /api/assistant/instruments/search). No internal index data.
 */
export interface InstrumentSearchResult {
  id: string;
  canonicalId: string;
  name: string;
  ticker: string;
  exchange: string;
  venueName: string;
  kind: InstrumentKind;
  currency: Instrument["currency"];
  fiscalYearEnd: string;
  jurisdiction: string;
  dataRights: Instrument["dataRights"];
  launchStatus: "LAUNCHED" | "UNLAUNCHED";
  note?: string;
  /** Raw period windows for each selectable period id. */
  periods: Record<string, ComparisonPeriodBounds | null>;
}

export interface InstrumentSearchResponse {
  query: string;
  results: InstrumentSearchResult[];
  /** Tickers that matched more than one canonical record (WF-04 S04, A06). */
  ambiguousTickers: string[];
  resolverVersion: string;
}

export interface MetricDefinition {
  id: string;
  label: string;
  description: string;
  kinds: InstrumentKind[];
  unit: string;
  basis: string;
  /** Catalogue version that registers this metric (WF-04 A09). */
  version?: string;
  /** Presentation precision (decimal places) after server arithmetic. */
  precision?: number;
  /** Release flag that must be ON for public values (e.g. bond yields). */
  gatedBy?: FeatureFlag;
  /** Why the metric is gated, in plain language. */
  gateReason?: string;
}

export type ComparisonCurrencyMode = "REPORTED" | "COMMON";

export interface ComparisonRequest {
  instrumentIds: string[];
  metricIds: string[];
  period: string;
  currencyMode: ComparisonCurrencyMode;
  /** Target currency; only meaningful (and only sent) when COMMON. */
  commonCurrency: "GBP" | "USD" | "EUR" | null;
  /** WF-04 §8.1 metric_catalog_version. */
  metricCatalogVersion: string;
  /** Named methodology (WF-04 CMP-09). */
  methodId: string;
  /** WF-04 §8.1 method_version. */
  methodVersion: string;
  /** WF-04 §8.1 publication_cutoff (ISO date) or null for latest vintage. */
  publicationCutoff: string | null;
}

/** Comparison catalogue served by GET /api/assistant/comparisons/catalog. */
export interface ComparisonCatalog {
  metricCatalogVersion: string;
  methodRegistryVersion: string;
  policyVersion: string;
  metrics: MetricDefinition[];
  periods: {
    id: string;
    label: string;
    description: string;
    gatedBy?: FeatureFlag;
    gateReason?: string;
  }[];
  currencyModes: { id: ComparisonCurrencyMode; label: string; description: string }[];
  methods: {
    id: string;
    version: string;
    name: string;
    status: "APPROVED" | "RETIRED";
    summary: string;
    transformations: string[];
    omissions: string[];
    derivesDifferences: boolean;
    rounding: string;
  }[];
  featureFlags: Pick<
    Record<FeatureFlag, FeatureFlagState>,
    "comparison" | "bondYieldAnalytics" | "historicalTrends" | "sharing"
  >;
  maxInstruments: number;
  maxMetrics: number;
}

export interface PreflightCheck {
  id: string;
  status: "PASS" | "WARN" | "BLOCK";
  title: string;
  detail: string;
  code?: string;
}

/** WF-04 §7.1 preflight gates. */
export type ComparisonGate =
  | "P-01"
  | "P-02"
  | "P-03"
  | "P-04"
  | "P-05"
  | "P-06"
  | "P-07"
  | "P-08";

/** Draft field a check applies to (WF-04 §8.1 `target`). */
export type ComparisonCheckTarget =
  | "entity_ids"
  | "metric_ids"
  | "time_basis"
  | "display"
  | "method_version"
  | "publication_cutoff"
  | "rights"
  | "coverage";

/**
 * Approved, non-destructive repairs the builder may apply with user
 * visibility (WF-04 APPLY_REPAIR, §8.1 `repair_code`). Route-only repairs
 * move focus to the target stage without changing the draft.
 */
export type ComparisonRepairCode =
  | "ADD_INSTRUMENT"
  | "REVIEW_INSTRUMENTS"
  | "REMOVE_INELIGIBLE_METRICS"
  | "CHOOSE_METRIC"
  | "USE_REPORTED_CURRENCY"
  | "CHOOSE_SUPPORTED_PERIOD"
  | "CHOOSE_SHARED_WINDOW"
  | "REMOVE_AFFECTED_METRICS"
  | "CLEAR_PUBLICATION_CUTOFF"
  | "CHOOSE_APPROVED_METHOD";

export interface ComparisonCheck extends PreflightCheck {
  gate: ComparisonGate;
  /** Gate outcome, e.g. PASS, AMBIGUOUS, INAPPLICABLE, GAPS, CONFLICT, STALE, DENY. */
  outcome: string;
  target: ComparisonCheckTarget;
  repairCode?: ComparisonRepairCode;
  repairLabel?: string;
  /** WF-04 §9 microcopy state id, when one applies. */
  stateId?: string;
  /** Plain-language reason shown under "Why". */
  why?: string;
}

/**
 * WF-04 §8.1 preflight response. Field names are camelCase versions of the
 * spec's snake_case contract (eligible_to_run → eligibleToRun, etc.).
 */
export interface PreflightResult {
  /** Legacy alias of `status`. */
  decision: "READY" | "REVISE" | "BLOCKED";
  status: "READY" | "REVISE" | "BLOCKED";
  eligibleToRun: boolean;
  /** Legacy alias of `decisionToken`. */
  token: string | null;
  decisionToken: string | null;
  checks: ComparisonCheck[];
  blockingCount: number;
  warningCount: number;
  /** Immutable draft hash (sha256), including catalogue and policy versions. */
  fingerprint: string;
  rightsDecisionRef: string;
  evidenceManifestRef: string;
  expiresAt: string | null;
  metricCatalogVersion: string;
  methodVersion: string;
  policyVersion: string;
}

/** WF-05 §5.1 canonical view-level states. */
export type ComparisonResultState =
  | "PENDING"
  | "READY"
  | "PARTIAL"
  | "CONFLICT"
  | "RIGHTS_DENIED"
  | "METHOD_INVALID"
  | "STALE_OR_REVISED"
  | "EXPIRED_OR_REVOKED"
  | "FAILED"
  | "NOT_LAUNCHED";

/** Public-safe reason codes for withheld cells and deltas. Unknown codes fail closed. */
export type ComparisonReasonCode =
  | "SOURCE_GAP"
  | "RIGHTS_METADATA_ONLY"
  | "RESTATEMENT_PENDING"
  | "SOURCE_CONFLICT"
  | "STALE_SOURCE"
  | "NOT_PUBLISHED_BY_CUTOFF"
  | "METRIC_NOT_APPLICABLE"
  | "METHOD_GATED"
  | "METHOD_INVALID"
  | "METHOD_NO_DERIVED_OUTPUT"
  | "CURRENCY_MISMATCH"
  | "UNIT_MISMATCH"
  | "PERIOD_NOT_COMPARABLE"
  | "INPUT_NOT_ELIGIBLE"
  | "DENOMINATOR_ZERO"
  | "DENOMINATOR_NEGATIVE"
  | "NOT_APPROVED_FOR_METRIC";

interface ComparisonCellBase {
  /** WF-05 §8.1 cell_id. */
  cellId: string;
  metricId: string;
  instrumentId: string;
  /** WF-05 §8.1 observation_refs. */
  observationRefs: string[];
  claimRefs: string[];
  period: ComparisonPeriodBounds | null;
}

/**
 * Explicit discriminated union (WF-05 §6.2, §8.1, gate 07). A displayed zero
 * is DISPLAY_ALLOWED with displayValue "0"; withheld, contested and
 * not-applicable cells never carry a value.
 */
export type ComparisonCell =
  | (ComparisonCellBase & {
      state: "DISPLAY_ALLOWED";
      /** Exact decimal string at presentation precision; never a float. */
      displayValue: string;
      precision: number;
      unit: string;
      currency: string | null;
      scale: string | null;
      asOf: string;
      publishedAt: string;
      sourceId: string;
      claimId: string;
      /** Set when a later record supersedes this vintage (RES-13). */
      revisedBy?: { sourceId: string; publishedAt: string; note: string };
    })
  | (ComparisonCellBase & {
      state: "WITHHELD";
      displayValue: null;
      reasonCode: ComparisonReasonCode;
      reason: string;
    })
  | (ComparisonCellBase & {
      state: "CONTESTED";
      displayValue: null;
      reasonCode: "SOURCE_CONFLICT";
      reason: string;
      sourceIds: string[];
      claimId: string;
    })
  | (ComparisonCellBase & {
      state: "NOT_APPLICABLE";
      displayValue: null;
      reasonCode: "METRIC_NOT_APPLICABLE";
      reason: string;
    });

interface ComparisonDeltaBase {
  id: string;
  metricId: string;
  kind: "ABSOLUTE_DIFFERENCE" | "PERCENT_DIFFERENCE";
  /** Instrument A (minuend) and B (subtrahend / denominator). */
  aInstrumentId: string;
  bInstrumentId: string;
  inputCellIds: [string, string];
  formula: string;
  /** Denominator disclosure; null for absolute differences. */
  denominator: string | null;
  methodId: string;
  methodVersion: string;
}

/** WF-05 RES-07 derived delta cell. */
export type ComparisonDelta =
  | (ComparisonDeltaBase & {
      state: "DISPLAY_ALLOWED";
      displayValue: string;
      precision: number;
      unit: string;
    })
  | (ComparisonDeltaBase & {
      state: "WITHHELD";
      displayValue: null;
      reasonCode: ComparisonReasonCode;
      reason: string;
    });

export interface ComparisonRow {
  metricId: string;
  label: string;
  basis: string;
  unitLabel: string;
  cells: ComparisonCell[];
  deltas: ComparisonDelta[];
}

/** WF-05 RES-13 conflict and revision notice. */
export interface ComparisonNotice {
  id: string;
  kind: "CONFLICT" | "REVISION" | "GAP" | "STALE" | "RIGHTS" | "PERIOD" | "CURRENCY";
  title: string;
  detail: string;
  impact: string;
  affectedCellIds: string[];
  sourceIds: string[];
}

/** WF-05 RES-09 method trace. */
export interface ComparisonMethodTrace extends MethodRecord {
  formula: string;
  registryVersion: string;
  rounding: string;
  adjustments: string;
  windows: string[];
  coverage: string;
}

export type ComparisonEvidenceCode = "PASS" | "PARTIAL" | "CONFLICT" | "DENIED";

/** WF-05 RES-10 evidence and rights summary. */
export interface ComparisonEvidenceSummary {
  counts: Record<ComparisonEvidenceCode, number>;
  instruments: {
    instrumentId: string;
    code: ComparisonEvidenceCode;
    licenceDecision: string;
    detail: string;
  }[];
  sources: {
    sourceId: string;
    code: ComparisonEvidenceCode;
    factStatus: string;
    licenceDecision: string;
    cellIds: string[];
  }[];
  gaps: string[];
}

export type ComparisonNextAction =
  | "INSPECT_ELIGIBLE_CLAIM"
  | "ADJUST_COMPARISON"
  | "ASK_FOLLOW_UP"
  | "REVIEW_CONFLICT"
  | "REFRESH_EXECUTION"
  | "REPORT_CLAIM";

export interface ComparisonInstrumentContext {
  instrumentId: string;
  canonicalId: string;
  name: string;
  kind: InstrumentKind;
  venue: string;
  currency: string;
  period: ComparisonPeriodBounds | null;
}

/** WF-05 §8.1 result envelope (camelCase). */
export interface ComparisonResult {
  fixtureLabel: string;
  /** WF-05 comparison_id. */
  ref: string;
  resultVersion: number;
  state: ComparisonResultState;
  displayPolicyVersion: string;
  requestFingerprint: string;
  methodRegistry: string;
  metricCatalogVersion: string;
  methodId: string;
  methodVersion: string;
  generatedAt: string;
  observationAsOf: { earliest: string | null; latest: string | null };
  title: string;
  decisionNote: string;
  context: {
    instruments: ComparisonInstrumentContext[];
    metricIds: string[];
    period: { id: string; label: string };
    currencyMode: ComparisonCurrencyMode;
    currencyLabel: string;
    commonCurrency: string | null;
    unitNote: string;
    publicationCutoff: string | null;
  };
  instruments: Instrument[];
  rows: ComparisonRow[];
  methods: ComparisonMethodTrace[];
  claims: Claim[];
  sources: string[];
  notices: ComparisonNotice[];
  evidence: ComparisonEvidenceSummary;
  /** Evidence-bounded interpretation; each citation maps to a claim. */
  interpretation: Segment[][];
  coverage: { scope: string; gaps: string[] };
  limitations: string[];
  nextActions: ComparisonNextAction[];
  followUps: string[];
  timeContext: TimeContext;
}

export interface ComparisonJobView {
  ref: string;
  /** PENDING while running, then the result state. No progress percent (WF-04 S17). */
  state: ComparisonResultState;
  stage: StageDefinition;
  stageIndex: number;
  stageCount: number;
  createdAt: string;
  expiresAt: string;
  idempotencyKey: string | null;
  request: ComparisonRequest;
  result?: ComparisonResult;
  failure?: { code: string; message: string };
}

export interface ComparisonJobRecord {
  ref: string;
  createdAt: number;
  expiresAt: number;
  idempotencyKey: string | null;
  request: ComparisonRequest;
  result: ComparisonResult;
}

/* ------------------------------------------------------------------ */
/* Exports (WF-10)                                                     */
/* ------------------------------------------------------------------ */

export type ExportFormat = "PDF" | "DOCX" | "CSV";

/** Declared use of the package (WF-10 AC-03 "use"). */
export type ExportPurpose =
  | "PERSONAL_RESEARCH"
  | "INTERNAL_REVIEW"
  | "EXTERNAL_DISTRIBUTION";

/** Delivery destination (WF-10 AC-03 "destination"). */
export type ExportDestination = "DOWNLOAD" | "SHARE";

/** Preflight outcome (WF-10 §9 IDLE → PREFLIGHTING → …). */
export type ExportDecision =
  | "ELIGIBLE"
  | "PARTIAL"
  | "DENIED"
  | "SOURCE_GAP"
  | "STALE_REVISION"
  | "AUTHORIZATION_REQUIRED";

/** Per-item outcome (WF-10 §2 annotation 05, EXP-09). */
export type ExportPermitState =
  | "ALLOWED"
  | "PARTIAL"
  | "UNRESOLVED"
  | "UNAVAILABLE"
  | "REVOKED";

export interface ExportEligibilityItem {
  itemId: string;
  kind: "CLAIM" | "SOURCE" | "METRIC" | "TABLE" | "METHOD";
  label: string;
  permitState: ExportPermitState;
  reasonCode?: string;
  /** User-safe reason; never raw licence terms. */
  reason: string;
  /** What happens to this item in the package (EXP-10 "affected output"). */
  affectedOutput: string;
  recovery?: string;
  claimId?: string;
  sourceId?: string;
}

/** Server-held export entitlement for the caller's session. */
export interface ExportEntitlementView {
  active: boolean;
  plan: "NONE" | "DEMO_SYNTHETIC";
  territory: string | null;
  formats: ExportFormat[];
  grantRef: string | null;
  expiresAt: string | null;
  note: string;
}

export interface ExportCsvColumn {
  column: string;
  type: "string" | "decimal" | "date";
  description: string;
}

export interface ExportPreflight {
  allowed: boolean;
  format: ExportFormat;
  purpose: ExportPurpose;
  destination: ExportDestination;
  answerRef: string;
  answerVersion: string;
  decision: ExportDecision;
  /** EligibilityDecision fields (WF-10 §10.1). */
  decisionId: string;
  decisionVersion: number;
  decisionExpiresAt: string;
  policyVersion: string;
  checks: PreflightCheck[];
  items: ExportEligibilityItem[];
  /** Every item that is not ALLOWED; listed with reasons, never silent. */
  omissions: ExportEligibilityItem[];
  counts: Record<ExportPermitState, number>;
  includedClaimIds: string[];
  omittedSourceIds: string[];
  requiresPartialAcknowledgement: boolean;
  manifestHash: string;
  /** Spec microcopy for the decision (WF-10 §13.1). */
  userMessage: string;
  note: string;
  entitlement: ExportEntitlementView;
  csvSchema: ExportCsvColumn[] | null;
  limits: {
    maxActiveJobs: number;
    maxArtifactBytes: number;
    maxCsvRows: number;
    jobTtlMinutes: number;
    downloadTokenTtlSeconds: number;
  };
}

/** Job states (WF-10 EXP-13 and §9). */
export type ExportJobStatus =
  | "QUEUED"
  | "PREPARING"
  | "RENDERING"
  | "READY"
  | "BLOCKED"
  | "FAILED"
  | "EXPIRED"
  | "REVOKED"
  | "CANCELLED"
  | "DOWNLOAD_BLOCKED";

export interface ExportAuditEvent {
  at: string;
  action: string;
  outcome: string;
  correlationId: string;
}

export interface ExportJobView {
  id: string;
  format: ExportFormat;
  purpose: ExportPurpose;
  status: ExportJobStatus;
  /** True when the server will not change the state again. */
  terminal: boolean;
  stageLabel: string;
  progress: number;
  createdAt: string;
  readyAt: string | null;
  /** Server-defined expiry (UTC ISO 8601). */
  expiresAt: string;
  fileName: string | null;
  contentType: string;
  sizeBytes: number | null;
  outputChecksum: string | null;
  answerRef: string;
  answerVersion: string;
  manifestHash: string;
  decisionId: string;
  policyVersion: string;
  omittedSourceCount: number;
  omissionCount: number;
  partial: boolean;
  /** Spec microcopy for the state (WF-10 §13.1). */
  message: string;
  reasonCode?: string;
  audit: ExportAuditEvent[];
  error?: string;
}

/** Server-only job record. Never serialised to the client. */
export interface ExportJobRecord {
  id: string;
  principal: string;
  answerRef: string;
  answerVersion: string;
  /** Immutable copy of the published answer pinned at creation. */
  answerSnapshot: PublishedAnswer;
  format: ExportFormat;
  purpose: ExportPurpose;
  createdAt: number;
  expiresAt: number;
  partial: boolean;
  omittedSourceIds: string[];
  includedClaimIds: string[];
  omissions: ExportEligibilityItem[];
  items: ExportEligibilityItem[];
  manifestHash: string;
  rightsFingerprint: string;
  decisionId: string;
  policyVersion: string;
  territory: string;
  audit: ExportAuditEvent[];
  rightsRecheckedAt?: number;
  cancelledAt?: number;
  revokedAt?: number;
  blocked?: { code: string; message: string };
  downloadBlocked?: { code: string; message: string };
  failed?: { code: string; message: string };
  artifact?: {
    bytes: Uint8Array;
    sha256: string;
    size: number;
    contentType: string;
    fileName: string;
    renderedAt: number;
  };
}

/** One-use, short-TTL download authorisation (WF-10 §5.1 DOWNLOAD). */
export interface ExportDownloadGrant {
  downloadUrl: string;
  expiresAt: string;
  oneUse: true;
}

/* ------------------------------------------------------------------ */
/* Help, disputes, notifications (WF-08 / WF-09)                       */
/* ------------------------------------------------------------------ */

export interface HelpArticle {
  id: string;
  title: string;
  category: string;
  summary: string;
  body: string[];
  keywords: string[];
  /** "Last updated" from help-CMS metadata only (WF-08 §2.1). */
  updatedAt: string;
  /** BCP 47 language of the published article (WF-08 §2.1). */
  language: string;
  /** Published content revision label (HLP-05). */
  revision: string;
}

/** WF-08 §09 case classification enum. Unmapped values are rejected. */
export type CaseTopic =
  | "SOURCE_FACT"
  | "METHODOLOGY"
  | "TIMESTAMP"
  | "COVERAGE_GAP"
  | "DATA_RIGHTS"
  | "SECURITY_PRIVACY"
  | "ACCESSIBILITY"
  | "GENERAL_HELP"
  | "FIN_PROMO";

export interface CaseTypeOption {
  id: CaseTopic;
  label: string;
  guidance: string;
  /** Illustrative queue owner (WF-08 §5.1); pending operational sign-off. */
  queue: string;
  /** PROTECTED types never use public intake (J-06, AC-20). */
  intake: "PUBLIC" | "PROTECTED";
}

export type SourceViewPolicy = "AVAILABLE" | "REDACTED" | "WITHHELD" | "STALE";

/** Rights-safe claim context (WF-08 §10 report-context, HLP-10/11/21). */
export interface ClaimReportContext {
  answer_ref: string | null;
  comparison_ref: string | null;
  claim_ref: string;
  origin: "ANSWER" | "COMPARISON";
  headline: string;
  claim_text: string;
  verification: ClaimVerification;
  materiality: Claim["materiality"];
  sources: {
    source_ref: string;
    title: string;
    publisher: string;
    tier: SourceTier;
    document_date: string;
    version: string;
    as_of: string | null;
    source_view_policy: SourceViewPolicy;
    /** Present only when display and quote rights allow it. */
    excerpt: string | null;
    restriction_note: string | null;
  }[];
  selected_source_ref: string | null;
  /** True when a requested sourceId was not linked to the claim. */
  source_rejected: boolean;
  policy_version: string;
}

export interface HelpCapabilities {
  copy_revision: string;
  corpus_version: string;
  notice_version: string;
  notice_purpose: string;
  /** Server-derived; the demo never infers an account from browser cache. */
  principal: "GUEST";
  topics: string[];
  intake: {
    research_cases: "AVAILABLE" | "UNAVAILABLE";
    general_cases: "AVAILABLE" | "UNAVAILABLE";
    attachments: "UNAVAILABLE";
    case_tracking: "UNAVAILABLE";
  };
  request_types: CaseTypeOption[];
  contact_routes: {
    id: "GENERAL_SUPPORT" | "ACCESSIBILITY" | "SECURITY_PRIVACY" | "PRIVACY_REQUEST";
    label: string;
    href: string;
    detail: string;
  }[];
  limits: { description_min: number; description_max: number };
}

/** WF-08 §10.1 case receipt; issued only on durable intake commit. */
export interface CaseReceipt {
  case_ref: string;
  status: "RECEIVED";
  receipt_time_utc: string;
  case_version: number;
  request_type: CaseTopic;
  request_type_label: string;
  channel: "research-cases" | "general-cases";
  queue: string;
  notice_version: string;
  claim_linked: boolean;
  response_boundary: string;
}

/* WF-09 notifications ------------------------------------------------ */

export type NotificationEventKind =
  | "RESEARCH_JOB_READY"
  | "RESEARCH_JOB_STATUS"
  | "SOURCE_REVISION"
  | "ALERT_MATCH"
  | "RIGHTS_REVOKED"
  | "SUPPORT_CASE_UPDATE";

export type NotificationCategory = "RESEARCH" | "EVIDENCE" | "SERVICE";

export type ResearchJobState =
  | "QUEUED"
  | "RUNNING"
  | "AWAITING_SOURCE"
  | "COMPLETE"
  | "FAILED"
  | "EXPIRED";

export type DeliveryStatus = "PENDING" | "DELIVERED" | "SUPPRESSED" | "BOUNCED";

/** WF-09 §10.1 typed, display-safe notification payload. */
export interface NotificationItem {
  notification_id: string;
  event_kind: NotificationEventKind;
  category: NotificationCategory;
  subject_ref: string;
  tenant_scope: "principal";
  /** Server event time (not market-data freshness). */
  created_at_utc: string;
  /** Source clock; null when the event has no source observation. */
  source_as_of_utc: string | null;
  status: "UNREAD" | "READ";
  hidden: boolean;
  version: number;
  access_state: "ELIGIBLE_RECHECK_ON_OPEN" | "RESTRICTED";
  display: { title_key: string; body_key: string; title: string; body: string };
  deeplink_ref: string;
  policy_version: string;
  correlation_ref: string;
  /** Delivery clock and outcome per channel (NTF-22, AC-22, AC-24). */
  delivery: {
    channel: AlertChannel;
    status: DeliveryStatus;
    at_utc: string | null;
    reason: string | null;
  }[];
  job?: {
    job_ref: string;
    state: ResearchJobState;
    timeline: { state: ResearchJobState; at_utc: string | null }[];
    status_text: string;
  };
}

export interface UpdatesResponse {
  items: NotificationItem[];
  unread_count: number;
  unread_by_category: Record<NotificationCategory, number>;
  hidden_count: number;
  next_cursor: string | null;
  policy_version: string;
}

/* WF-09 alert rules -------------------------------------------------- */

/** WF-09 §3.1 rule grammar. */
export type AlertTrigger =
  | "OFFICIAL_FILING"
  | "OFFICIAL_MACRO_RELEASE"
  | "CITED_SOURCE_REVISION"
  | "RESEARCH_JOB_STATUS"
  | "MARKET_THRESHOLD";

/** NTF-14: supported digest cadences only; no "live" or "immediate". */
export type AlertCadence = "HOURLY_DIGEST" | "DAILY_DIGEST";

export type AlertChannel = "IN_APP" | "EMAIL" | "PUSH";

export interface QuietHours {
  enabled: boolean;
  start: string;
  end: string;
  /** IANA zone; DST handled by zone rules (NTF-15). */
  time_zone: string;
}

export interface AlertRuleInput {
  subject_ref: string;
  trigger: AlertTrigger | "";
  cadence: AlertCadence | "";
  channels: AlertChannel[];
  quiet_hours: QuietHours;
}

/** Local draft. Never Active; never sent anywhere until committed. */
export interface AlertDraft extends AlertRuleInput {
  draft_id: string;
  status: "DRAFT";
  saved_at: string;
}

/** Server-committed rule (NTF-18). */
export interface AlertRule {
  rule_id: string;
  version: number;
  status: "ACTIVE" | "PAUSED" | "DISABLED" | "EXPIRED";
  status_reason: string | null;
  subject_ref: string;
  subject_label: string;
  trigger: AlertTrigger;
  cadence: AlertCadence;
  channels: AlertChannel[];
  quiet_hours: QuietHours;
  consent_version: string;
  unsubscribed: boolean;
  created_at_utc: string;
  updated_at_utc: string;
  expires_at_utc: string;
  note: string;
}

export interface AlertPreflight {
  decision: "READY" | "REVISE" | "BLOCKED";
  checks: PreflightCheck[];
  preflight_token: string | null;
  fingerprint: string;
}

/* ------------------------------------------------------------------ */
/* Settings (WF-07)                                                    */
/* ------------------------------------------------------------------ */

export interface AssistantPreferences {
  answerDensity: "concise" | "standard" | "detailed";
  citationStyle: "inline" | "endnote";
  timeZone: string;
  numberLocale: "en-GB" | "en-US";
  /**
   * Resolved reduce-motion state that the shell applies. Derived from
   * `motion` and the OS setting by AssistantPrefsProvider (WF-07 SET-15).
   */
  reduceMotion: boolean;
  showTimestamps: boolean;
  /** WF-07 SET-04: interface language. Only supported locales are offered. */
  uiLocale: "en-US";
  /** WF-07 SET-15: "system" follows prefers-reduced-motion; "reduce" forces it. */
  motion: "system" | "reduce";
  /** WF-07 SET-13: evidence opens as a summary or expanded by default. */
  evidenceDepth: "summary" | "expanded";
  /** WF-07 SET-16: table-first data with chart text alternatives. */
  readableData: boolean;
  /** WF-07 SET-17: optional follow-up suggestions. Never hides caveats. */
  followUpHints: boolean;
  /** WF-07 SET-09: discovery-only asset focus. Never unlocks data. */
  researchFocus: string[];
  /** WF-07 SET-10: discovery-only market focus. Never unlocks data. */
  marketFocus: string[];
}

export interface ConfigResponse {
  demo: boolean;
  fixtureLabel: string;
  scopes: { id: ScopeId; label: string; supported: boolean; note: string }[];
  starterPrompts: {
    id: string;
    title: string;
    question: string;
    scopeId: ScopeId;
    tag: string;
    /** Short card description (WF-01 C09). */
    description?: string;
    /** Template intent ID checked against `allowedIntents` (WF-01 A07). */
    intentId?: string;
  }[];
  limits: { questionMin: number; questionMax: number; comparisonMax: number };
  /** Controlled compliance notice for the public disclosure (WF-01 C12). */
  legalNoticeHref?: string;
  /** WF-01 §7.1 public config contract. */
  publicResearchEnabled: boolean;
  allowedIntents: string[];
  coverageMessage: string;
  legalCopyVersion: string;
  /** WF-01 §7.1 versioned strings; server policy is authoritative. */
  uiVersion: string;
  policyVersion: string;
  /** WF-01 §7.1 allowed_scopes: launched, rights-filtered scope ids. */
  allowedScopes: ScopeId[];
  /**
   * Release flags (WF-01 A07, WF-04 A03, WF-05 gate 02, WF-06 §3).
   * "ON" = released, "PREVIEW" = usable and labelled as an unapproved
   * preview, "OFF" = hidden or shown as unavailable.
   */
  featureFlags: Record<FeatureFlag, FeatureFlagState>;
  search: {
    href: string;
    label: string;
    description: string;
  }[];
}

export type FeatureFlag =
  | "comparison"
  | "savedResearch"
  | "alerts"
  | "exports"
  | "sharing"
  | "bondYieldAnalytics"
  | "historicalTrends";

export type FeatureFlagState = "ON" | "PREVIEW" | "OFF";

/* ------------------------------------------------------------------ */
/* WF-11 access, auth-intent and entitlement contracts (synthetic mock) */
/* ------------------------------------------------------------------ */

/** Typed, non-sensitive outcome codes (WF-11 §10.2). */
export type AccessOutcomeCode =
  | "AUTH_REQUIRED"
  | "MFA_STEP_UP_REQUIRED"
  | "ACCOUNT_SCOPE_DENIED"
  | "FEATURE_NOT_RELEASED"
  | "PLAN_REQUIRED"
  | "QUOTA_EXCEEDED"
  | "SOURCE_RIGHTS_DENIED"
  | "POLICY_UNAVAILABLE"
  | "BILLING_RECONCILIATION_PENDING"
  | "AUTH_INTENT_EXPIRED"
  | "SOURCE_RIGHTS_CHECK_REQUIRED";

/** WF-11 §09 states the mock can be asked to reproduce. */
export type AccessFixture =
  | "NONE"
  | "ENTITLEMENTS_PENDING"
  | "BILLING_PENDING"
  | "SESSION_EXPIRED"
  | "STEP_UP_REQUIRED"
  | "POLICY_UNAVAILABLE"
  | "PLAN_REQUIRED"
  | "QUOTA_BLOCKED"
  | "IDENTITY_DISABLED";

/** Return-intent action allowlist (WF-11 §5.1 step 1, A14). */
export type AuthActionId =
  | "sign_in"
  | "save"
  | "open_saved"
  | "export"
  | "alert"
  | "history"
  | "share"
  | "source";

export interface AccessContextResponse {
  synthetic: true;
  state: "GUEST" | "AUTHENTICATED" | "SESSION_EXPIRED" | "IDENTITY_DISABLED";
  /** Opaque subject scope; never an email or account number. */
  subjectScope: string | null;
  tenantScope: string | null;
  assurance: "NONE" | "DEMO";
  authTime: string | null;
  sessionVersion: number;
  evaluatedAt: string;
  policyVersion: string;
  requestId?: string;
}

export type EntitlementDecision =
  | "allow"
  | "review_required"
  | "disabled"
  | "denied";

export interface EffectiveEntitlement {
  feature: string;
  label: string;
  decision: EntitlementDecision;
  reasons: AccessOutcomeCode[];
  reasonText: string;
  quota: { remaining: number | null; windowEnd: string | null };
  effectiveAt: string;
  evaluatedAt: string;
  href?: string;
  action?: string;
}

export interface EntitlementsResponse {
  synthetic: true;
  decisionId: string;
  subjectScope: string;
  /** Only ever set from approved commercial configuration (none here). */
  planDisplayName: string | null;
  planState: "unknown" | "pending";
  state: "ACCESS_EVALUATED" | "BILLING_PENDING";
  entitlements: EffectiveEntitlement[];
  evaluatedAt: string;
  policyVersion: string;
  requestId?: string;
}

export interface AccessEvaluation {
  synthetic: true;
  decisionId: string;
  feature: string;
  decision: "allow" | "deny";
  code: AccessOutcomeCode | null;
  userSafeMessage: string;
  policyVersion: string;
  evaluatedAt: string;
  requestId?: string;
}

export interface AuthIntentResponse {
  synthetic: true;
  /** Opaque, one-time nonce. The return path stays on the server. */
  intentId: string;
  actionId: AuthActionId;
  expiresAt: string;
  requestId?: string;
}

export interface AuthIntentResolution {
  synthetic: true;
  actionId: AuthActionId;
  returnPath: string;
  requestId?: string;
}

export interface GuestImportReceipt {
  ref: string;
  outcome: "SAVED" | "NOT_SAVED";
  code: AccessOutcomeCode | "NOT_AVAILABLE" | null;
  message: string;
}

export interface GuestImportResponse {
  synthetic: true;
  importIntentId: string;
  consentVersion: string;
  receipts: GuestImportReceipt[];
  requestId?: string;
}
