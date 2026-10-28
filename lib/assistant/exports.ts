import type {
  ExportAuditEvent,
  ExportCsvColumn,
  ExportDecision,
  ExportDestination,
  ExportEligibilityItem,
  ExportEntitlementView,
  ExportFormat,
  ExportJobRecord,
  ExportJobStatus,
  ExportJobView,
  ExportPermitState,
  ExportPreflight,
  ExportPurpose,
  FeatureFlag,
  PreflightCheck,
  PublishedAnswer,
  SourceRecord,
  SourceRights,
} from "./types";
import { getResearchJob, publishedAnswer } from "./research-store";
import { SOURCES } from "./sources";
import { FEATURE_FLAGS } from "./taxonomy";
import { opaqueId } from "./format";
import { canonicalDecimal } from "./csv";
import { createHash, randomBytes } from "node:crypto";

/* ------------------------------------------------------------------ */
/* Policy constants (WF-10 §12 rate/size limits, AC-37)                 */
/* ------------------------------------------------------------------ */

export const EXPORT_POLICY_VERSION = "export-policy-demo-2026-10.2";
export const EXPORT_BUILD_REF =
  process.env.TALVRIN_BUILD_REF ?? "talvrin-assistant-demo-local";
export const EXPORT_TTL_MS = 60 * 60 * 1000;
export const DECISION_TTL_MS = 10 * 60 * 1000;
export const DOWNLOAD_TOKEN_TTL_MS = 60 * 1000;
export const GRANT_TTL_MS = 30 * 60 * 1000;
export const MAX_ACTIVE_JOBS = 2;
export const MAX_ARTIFACT_BYTES = 5 * 1024 * 1024;
export const MAX_CSV_ROWS = 5000;

/** Server-defined territory for the synthetic demo grant (AC-03 geography). */
const DEMO_TERRITORY = "GB";
/** Territories the demo export policy covers. Anything else is denied. */
const POLICY_TERRITORIES = new Set(["GB"]);

const STAGE_QUEUED_MS = 600;
const STAGE_PREPARING_MS = 1200;
const STAGE_RENDERED_MS = 2000;

const FORMATS: ExportFormat[] = ["PDF", "DOCX", "CSV"];
const PURPOSES: ExportPurpose[] = [
  "PERSONAL_RESEARCH",
  "INTERNAL_REVIEW",
  "EXTERNAL_DISTRIBUTION",
];
const DESTINATIONS: ExportDestination[] = ["DOWNLOAD", "SHARE"];

/**
 * Method release registry (WF-10 §11.1, AC-14/AC-15; WF-12 EV-09). Gilt
 * yield and duration methods are controlled-release until named approvals,
 * so their outputs cannot be exported while the flag is not ON.
 */
const METHOD_RELEASE: Record<
  string,
  { state: "APPROVED_FOR_EXPORT" | "CONTROLLED_RELEASE"; flag?: FeatureFlag }
> = {
  "m-yield": { state: "CONTROLLED_RELEASE", flag: "bondYieldAnalytics" },
  "m-duration": { state: "CONTROLLED_RELEASE", flag: "bondYieldAnalytics" },
};

/** Source tags that mark Target-only historical evidence (AC-14). */
const TARGET_ONLY_TAGS = ["historical-archive", "target-only"];

/* ------------------------------------------------------------------ */
/* Errors                                                               */
/* ------------------------------------------------------------------ */

export class ExportError extends Error {
  readonly code: string;
  readonly status: number;
  readonly retryAfterSeconds?: number;

  constructor(
    code: string,
    message: string,
    status = 422,
    retryAfterSeconds?: number
  ) {
    super(message);
    this.name = "ExportError";
    this.code = code;
    this.status = status;
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

/* ------------------------------------------------------------------ */
/* In-memory stores (demo only; production uses durable stores)         */
/* ------------------------------------------------------------------ */

const jobs = new Map<string, ExportJobRecord>();
const idempotency = new Map<string, { bodyHash: string; jobId: string }>();
const decisions = new Map<
  string,
  {
    principal: string;
    manifestHash: string;
    expiresAt: number;
  }
>();
const downloadTokens = new Map<
  string,
  { exportId: string; principal: string; expiresAt: number; used: boolean }
>();
const grants = new Map<
  string,
  { grantRef: string; issuedAt: number; expiresAt: number }
>();
/** Mock rights-PDP overrides, used by tests to simulate licence changes. */
const rightsOverrides = new Map<string, Partial<SourceRights>>();
const methodOverrides = new Map<string, "APPROVED_FOR_EXPORT" | "CONTROLLED_RELEASE">();

function sha256(value: string | Uint8Array): string {
  return createHash("sha256").update(value).digest("hex");
}

function bound<K, V>(map: Map<K, V>, max: number) {
  while (map.size > max) {
    const first = map.keys().next().value;
    if (first === undefined) break;
    map.delete(first);
  }
}

/* ------------------------------------------------------------------ */
/* Rights PDP (mock)                                                    */
/* ------------------------------------------------------------------ */

function currentSource(id: string): SourceRecord | undefined {
  const source = SOURCES[id];
  if (!source) return undefined;
  const override = rightsOverrides.get(id);
  return override
    ? { ...source, rights: { ...source.rights, ...override } }
    : source;
}

function methodReleased(methodId: string): boolean {
  const entry = METHOD_RELEASE[methodId];
  const state = methodOverrides.get(methodId) ?? entry?.state ?? "APPROVED_FOR_EXPORT";
  if (state === "APPROVED_FOR_EXPORT") return true;
  return entry?.flag ? FEATURE_FLAGS[entry.flag] === "ON" : false;
}

/**
 * Test hook: simulates a licence change in the rights registry (AC-20,
 * §15.1 "Source licence revoked mid-render"). Not reachable over HTTP.
 */
export function __setRightsOverrideForTests(
  sourceId: string,
  rights: Partial<SourceRights> | null
) {
  if (rights) rightsOverrides.set(sourceId, rights);
  else rightsOverrides.delete(sourceId);
}

/** Test hook: simulates a method release decision. Not reachable over HTTP. */
export function __setMethodReleaseForTests(
  methodId: string,
  state: "APPROVED_FOR_EXPORT" | "CONTROLLED_RELEASE" | null
) {
  if (state) methodOverrides.set(methodId, state);
  else methodOverrides.delete(methodId);
}

/** Fingerprint of every rights input that the package depends on. */
function rightsFingerprint(answer: PublishedAnswer): string {
  return sha256(
    JSON.stringify({
      policy: EXPORT_POLICY_VERSION,
      sources: answer.sources.map((id) => {
        const source = currentSource(id);
        return source ? [id, source.version, source.rights] : [id, null];
      }),
      methods: answer.methods.map((method) => [
        method.id,
        method.version,
        methodReleased(method.id),
      ]),
    })
  );
}

/* ------------------------------------------------------------------ */
/* Entitlement (server-side demo grant; replaces ?demoAccount=1)        */
/* ------------------------------------------------------------------ */

function activeGrant(principal: string | null) {
  if (!principal) return undefined;
  const grant = grants.get(principal);
  if (!grant) return undefined;
  if (Date.now() > grant.expiresAt) {
    grants.delete(principal);
    return undefined;
  }
  return grant;
}

export function entitlementView(principal: string | null): ExportEntitlementView {
  const grant = activeGrant(principal);
  if (!grant) {
    return {
      active: false,
      plan: "NONE",
      territory: null,
      formats: [],
      grantRef: null,
      expiresAt: null,
      note: "No export entitlement for this session. Guests cannot create export jobs.",
    };
  }
  return {
    active: true,
    plan: "DEMO_SYNTHETIC",
    territory: DEMO_TERRITORY,
    formats: [...FORMATS],
    grantRef: grant.grantRef,
    expiresAt: new Date(grant.expiresAt).toISOString(),
    note: "Synthetic demo grant held by the server for this browser session only. It is not a customer plan, licence or approval.",
  };
}

/**
 * Issues the server-held demo grant. In production this is replaced by the
 * IAM + commercial entitlement service (WF-11); the client can never assert
 * its own entitlement.
 */
export function issueDemoGrant(principal: string | null): ExportEntitlementView {
  if (!principal) {
    throw new ExportError(
      "SESSION_REQUIRED",
      "A browser session is required before demo access can be checked.",
      401
    );
  }
  const now = Date.now();
  grants.set(principal, {
    grantRef: opaqueId("grant"),
    issuedAt: now,
    expiresAt: now + GRANT_TTL_MS,
  });
  bound(grants, 2000);
  return entitlementView(principal);
}

export function revokeDemoGrant(principal: string | null) {
  if (principal) grants.delete(principal);
  return entitlementView(principal);
}

/* ------------------------------------------------------------------ */
/* Eligibility                                                          */
/* ------------------------------------------------------------------ */

function validFormat(value: unknown): value is ExportFormat {
  return typeof value === "string" && FORMATS.includes(value as ExportFormat);
}

function validPurpose(value: unknown): value is ExportPurpose {
  return typeof value === "string" && PURPOSES.includes(value as ExportPurpose);
}

function validDestination(value: unknown): value is ExportDestination {
  return (
    typeof value === "string" &&
    DESTINATIONS.includes(value as ExportDestination)
  );
}

export function extension(format: ExportFormat): string {
  return format === "PDF" ? "pdf" : format === "DOCX" ? "docx" : "csv";
}

export function contentTypeFor(format: ExportFormat): string {
  switch (format) {
    case "PDF":
      return "application/pdf";
    case "DOCX":
      return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    default:
      return "text/csv; charset=utf-8; header=present";
  }
}

export const CSV_SCHEMA: ExportCsvColumn[] = [
  { column: "observation_id", type: "string", description: "Stable metric identifier inside the pinned answer revision." },
  { column: "entity_id", type: "string", description: "Issuer or publisher reference of the primary source." },
  { column: "metric", type: "string", description: "Metric label as published in the answer." },
  { column: "period", type: "date", description: "Observation period end or as-of date (ISO 8601)." },
  { column: "value", type: "decimal", description: "Plain decimal literal; thousands separators removed. Never a formula." },
  { column: "unit", type: "string", description: "Unit or currency scale, e.g. £m or %." },
  { column: "source_ref", type: "string", description: "Source record id(s) and version from the source register." },
  { column: "attribution", type: "string", description: "Publisher and claim verification state." },
  { column: "claim_id", type: "string", description: "Claim the observation is cited under." },
];

interface Evaluation {
  items: ExportEligibilityItem[];
  includedClaimIds: string[];
  omittedSourceIds: string[];
  deniedReasons: { code: string; message: string }[];
  sourceGap: boolean;
  checks: PreflightCheck[];
}

function claimItems(answer: PublishedAnswer): ExportEligibilityItem[] {
  return answer.claims.map((claim) => {
    const base = {
      itemId: claim.id,
      kind: "CLAIM" as const,
      label: claim.text,
      claimId: claim.id,
    };
    const missing = claim.sourceIds.filter((id) => !currentSource(id));
    if (!claim.sourceIds.length || missing.length) {
      return {
        ...base,
        permitState: "UNRESOLVED" as const,
        reasonCode: "SOURCE_MISSING",
        reason:
          "A supporting source is unavailable. The affected statement will not be presented as verified.",
        affectedOutput: "Claim removed from the package and listed in the disclosure appendix.",
        recovery: "Report the citation or rerun the research once the source is available.",
      };
    }
    if (claim.verification === "UNSUPPORTED") {
      return {
        ...base,
        permitState: "UNRESOLVED" as const,
        reasonCode: "CLAIM_UNSUPPORTED",
        reason: "No admissible evidence supports this statement.",
        affectedOutput: "Claim removed; not presented as a verified finding.",
      };
    }
    const revoked = claim.sourceIds.some(
      (id) => currentSource(id)?.rights.state === "DENIED"
    );
    if (revoked) {
      return {
        ...base,
        permitState: "REVOKED" as const,
        reasonCode: "SOURCE_RIGHTS_REVOKED",
        reason: "Rights for a supporting source were withdrawn.",
        affectedOutput: "Claim removed from the package.",
      };
    }
    if (claim.verification === "CONTESTED" || claim.verification === "PARTIAL") {
      return {
        ...base,
        permitState: "PARTIAL" as const,
        reasonCode:
          claim.verification === "CONTESTED" ? "CLAIM_CONTESTED" : "CLAIM_PARTIAL",
        reason:
          claim.verification === "CONTESTED"
            ? "Sources conflict. The claim is included with its conflict status, not as a verified value."
            : "Evidence covers only part of the statement.",
        affectedOutput: "Included with its verification label; excluded from CSV.",
      };
    }
    return {
      ...base,
      permitState: "ALLOWED" as const,
      reason: "Supported by permitted evidence.",
      affectedOutput: "Included with claim ID and citations.",
    };
  });
}

function sourceItems(
  answer: PublishedAnswer,
  format: ExportFormat,
  purpose: ExportPurpose
): ExportEligibilityItem[] {
  return answer.sources.map((id) => {
    const source = currentSource(id);
    const label = source?.title ?? id;
    const base = { itemId: id, kind: "SOURCE" as const, label, sourceId: id };
    if (!source) {
      return {
        ...base,
        permitState: "UNRESOLVED" as const,
        reasonCode: "SOURCE_UNAVAILABLE",
        reason:
          "A supporting source is unavailable. The affected statement will not be presented as verified.",
        affectedOutput: "No citation entry; dependent claims removed.",
      };
    }
    if (source.rights.state === "DENIED") {
      return {
        ...base,
        permitState: "REVOKED" as const,
        reasonCode: "SOURCE_RIGHTS_REVOKED",
        reason: "Rights for this source were withdrawn.",
        affectedOutput: "Source and dependent claims removed.",
      };
    }
    if (format === "CSV") {
      return {
        ...base,
        permitState: "ALLOWED" as const,
        reason: "Referenced by id and version only. CSV never carries excerpts.",
        affectedOutput: "source_ref column only.",
      };
    }
    if (purpose === "EXTERNAL_DISTRIBUTION" && !source.rights.redistribute) {
      return {
        ...base,
        permitState: "UNAVAILABLE" as const,
        reasonCode: "REDISTRIBUTION_NOT_PERMITTED",
        reason:
          "This source may be viewed here but cannot be included in a downloadable report.",
        affectedOutput: "Package cannot be produced for external distribution.",
      };
    }
    if (!source.rights.export || !source.rights.quote || source.rights.excerptLimit <= 0) {
      return {
        ...base,
        permitState: "PARTIAL" as const,
        reasonCode: "EXCERPT_NOT_EXPORTABLE",
        reason:
          "This source may be viewed here but cannot be included in a downloadable report.",
        affectedOutput: "Citation metadata kept; excerpt omitted.",
      };
    }
    if ((source.excerpt ?? "").length > source.rights.excerptLimit) {
      return {
        ...base,
        permitState: "PARTIAL" as const,
        reasonCode: "EXCERPT_TRUNCATED",
        reason: `The permitted excerpt is limited to ${source.rights.excerptLimit} characters.`,
        affectedOutput: "Excerpt shortened to the permitted length and marked as truncated.",
      };
    }
    return {
      ...base,
      permitState: "ALLOWED" as const,
      reason: "Export and quotation permitted within the excerpt limit.",
      affectedOutput: "Citation and permitted excerpt included.",
    };
  });
}

function metricItems(
  answer: PublishedAnswer,
  format: ExportFormat,
  claimStates: Map<string, ExportPermitState>
): ExportEligibilityItem[] {
  const items: ExportEligibilityItem[] = [];
  for (const block of answer.blocks) {
    if (block.kind !== "metric-grid") continue;
    for (const metric of block.metrics) {
      if (metric.status === "NOT_APPLICABLE") continue;
      const base = {
        itemId: metric.id,
        kind: "METRIC" as const,
        label: `${metric.label}${metric.unit ? ` (${metric.unit})` : ""}`,
        claimId: metric.claimId,
      };
      const claimState = metric.claimId ? claimStates.get(metric.claimId) : undefined;
      if (metric.status === "WITHHELD") {
        items.push({
          ...base,
          permitState: "UNAVAILABLE",
          reasonCode: metric.reasonCode ?? "LICENCE_DISPLAY_DENIED",
          reason: "This value may not be displayed or exported under the source licence.",
          affectedOutput: "Shown as a labelled placeholder; never a value.",
        });
        continue;
      }
      if (!claimState || claimState === "UNRESOLVED" || claimState === "REVOKED") {
        items.push({
          ...base,
          permitState: "UNRESOLVED",
          reasonCode: "NO_CLAIM_LINEAGE",
          reason: "The figure has no exportable claim and source lineage.",
          affectedOutput: "Figure removed from the package.",
        });
        continue;
      }
      if (metric.status === "CONTESTED") {
        items.push({
          ...base,
          permitState: format === "CSV" ? "UNRESOLVED" : "PARTIAL",
          reasonCode: "VALUE_CONTESTED",
          reason: "Sources disagree on this value; it is not presented as verified.",
          affectedOutput:
            format === "CSV"
              ? "Excluded from the fact table."
              : "Included with a conflict label.",
        });
        continue;
      }
      if (format === "CSV" && canonicalDecimal(metric.value) === null) {
        items.push({
          ...base,
          permitState: "UNRESOLVED",
          reasonCode: "NOT_A_TYPED_OBSERVATION",
          reason: "The displayed value is not a plain number, so it cannot be a typed CSV value.",
          affectedOutput: "Excluded from the fact table; available in PDF or DOCX.",
        });
        continue;
      }
      if (metric.status === "STALE") {
        items.push({
          ...base,
          permitState: "PARTIAL",
          reasonCode: "VALUE_STALE",
          reason: "The observation is older than the freshness threshold.",
          affectedOutput: "Included with its as-of date and a stale label.",
        });
        continue;
      }
      items.push({
        ...base,
        permitState: "ALLOWED",
        reason: "Published value with claim lineage.",
        affectedOutput:
          format === "CSV" ? "One typed fact row." : "Included in the figures table.",
      });
    }
  }
  return items;
}

function tableItems(
  answer: PublishedAnswer,
  format: ExportFormat
): ExportEligibilityItem[] {
  const items: ExportEligibilityItem[] = [];
  answer.blocks.forEach((block, index) => {
    if (block.kind !== "table") return;
    const base = {
      itemId: `table-${index}`,
      kind: "TABLE" as const,
      label: block.caption,
    };
    const cells = block.rows.flatMap((row) => row.cells);
    const withheld = cells.filter((cell) => cell.status === "WITHHELD").length;
    const linked = cells.some((cell) => cell.claimId);
    if (format === "CSV") {
      items.push({
        ...base,
        permitState: "UNAVAILABLE",
        reasonCode: "TABLE_NOT_TYPED_FACTS",
        reason: "Presentation tables are not typed observations and are not part of the CSV fact table.",
        affectedOutput: "Table dropped from CSV; choose PDF or DOCX to include it.",
        recovery: "Generate a PDF or DOCX package.",
      });
      return;
    }
    if (!linked) {
      items.push({
        ...base,
        permitState: "UNRESOLVED",
        reasonCode: "TABLE_NO_LINEAGE",
        reason: "No cell in this table is linked to a cited claim.",
        affectedOutput: "Table dropped from the package and listed in the disclosure appendix.",
      });
      return;
    }
    if (withheld) {
      items.push({
        ...base,
        permitState: "PARTIAL",
        reasonCode: "TABLE_CELLS_WITHHELD",
        reason: `${withheld} cell${withheld === 1 ? " is" : "s are"} withheld by licence.`,
        affectedOutput: "Table included; withheld cells shown as labelled placeholders.",
      });
      return;
    }
    items.push({
      ...base,
      permitState: "ALLOWED",
      reason: "All cells permitted.",
      affectedOutput: "Table included with header row.",
    });
  });
  return items;
}

function methodItems(answer: PublishedAnswer): ExportEligibilityItem[] {
  return answer.methods.map((method) => {
    const released = methodReleased(method.id);
    return {
      itemId: method.id,
      kind: "METHOD" as const,
      label: `${method.name} (${method.version})`,
      permitState: released ? ("ALLOWED" as const) : ("UNAVAILABLE" as const),
      reasonCode: released ? undefined : "METHOD_NOT_RELEASED",
      reason: released
        ? "Method version approved for export with this demo policy."
        : "This methodology is controlled-release. Its outputs cannot be exported until named approvals are in place.",
      affectedOutput: released
        ? "Methodology section included (always on)."
        : "Package cannot be produced; the method section is mandatory.",
    };
  });
}

function evaluate(
  answer: PublishedAnswer,
  format: ExportFormat,
  purpose: ExportPurpose,
  destination: ExportDestination,
  entitled: boolean
): Evaluation {
  const checks: PreflightCheck[] = [];
  const deniedReasons: { code: string; message: string }[] = [];
  const deny = (code: string, message: string) =>
    deniedReasons.push({ code, message });

  // Principal / entitlement (§5.1 PREFLIGHT; AC-01).
  checks.push({
    id: "authorization",
    status: entitled ? "PASS" : "BLOCK",
    title: "Principal and entitlement",
    detail: entitled
      ? "Server-held demo grant for this browser session. Synthetic entitlement; the package carries a demo watermark."
      : "Sign in to review export options. Guest sessions cannot create export jobs.",
    code: entitled ? undefined : "AUTH_REQUIRED",
  });

  // Plan / format entitlement (AC-03 plan).
  checks.push({
    id: "plan",
    status: entitled ? "PASS" : "BLOCK",
    title: "Plan and format",
    detail: entitled
      ? `${format} is enabled for the synthetic demo plan. Feature flag: exports = ${FEATURE_FLAGS.exports}.`
      : "No plan is attached to a guest session.",
    code: entitled ? undefined : "PLAN_REQUIRED",
  });

  // Use (AC-03 use).
  const redistributable = answer.sources.every(
    (id) => currentSource(id)?.rights.redistribute === true
  );
  if (purpose === "EXTERNAL_DISTRIBUTION" && !redistributable) {
    deny(
      "REDISTRIBUTION_NOT_PERMITTED",
      "External distribution needs redistribution rights for every source. They are not granted."
    );
    checks.push({
      id: "purpose",
      status: "BLOCK",
      title: "Intended use",
      detail:
        "External distribution needs redistribution rights for every cited source. At least one source does not grant them.",
      code: "REDISTRIBUTION_NOT_PERMITTED",
    });
  } else {
    checks.push({
      id: "purpose",
      status: "PASS",
      title: "Intended use",
      detail:
        purpose === "INTERNAL_REVIEW"
          ? "Internal review within your organisation. Redistribution of source records is still not permitted."
          : "Personal research use. Redistribution of source records is not permitted.",
    });
  }

  // Destination (AC-03 destination; sharing is a separate capability).
  if (destination === "SHARE") {
    deny(
      "SHARE_NOT_AVAILABLE",
      "Controlled research sharing is not available for this account or research item."
    );
    checks.push({
      id: "destination",
      status: "BLOCK",
      title: "Destination",
      detail: "Controlled research sharing is not available for this account or research item.",
      code: "SHARE_NOT_AVAILABLE",
    });
  } else {
    checks.push({
      id: "destination",
      status: "PASS",
      title: "Destination",
      detail:
        "Browser download. Downloaded copies live outside Talvrin revocation controls.",
    });
  }

  // Geography (AC-03 geography). Territory comes from the server grant.
  const territory = entitled ? DEMO_TERRITORY : null;
  if (entitled && territory && !POLICY_TERRITORIES.has(territory)) {
    deny("TERRITORY_NOT_COVERED", "Exports are not available in this territory.");
    checks.push({
      id: "geography",
      status: "BLOCK",
      title: "Geography",
      detail: "The export policy does not cover this territory.",
      code: "TERRITORY_NOT_COVERED",
    });
  } else {
    checks.push({
      id: "geography",
      status: entitled ? "PASS" : "WARN",
      title: "Geography",
      detail: entitled
        ? `Territory ${territory}, resolved server-side from the grant (synthetic). Covered by ${EXPORT_POLICY_VERSION}.`
        : "Territory is resolved from an authenticated account; not evaluated for guests.",
    });
  }

  // Items.
  const claims = claimItems(answer);
  const claimStates = new Map(claims.map((item) => [item.itemId, item.permitState]));
  const sources = sourceItems(answer, format, purpose);
  const metrics = metricItems(answer, format, claimStates);
  const tables = tableItems(answer, format);
  const methods = methodItems(answer);

  // Method release (AC-14/AC-15).
  const unreleased = methods.filter((item) => item.permitState !== "ALLOWED");
  if (unreleased.length) {
    deny(
      "METHOD_NOT_RELEASED",
      "This answer depends on a controlled-release methodology, so it cannot be exported."
    );
  }
  checks.push({
    id: "method-release",
    status: unreleased.length ? "BLOCK" : "PASS",
    title: "Methodology release gate",
    detail: unreleased.length
      ? `${unreleased.map((item) => item.label).join(", ")} ${unreleased.length === 1 ? "is" : "are"} controlled-release (gilt and bond analytics flag is ${FEATURE_FLAGS.bondYieldAnalytics}). Formula-controlled outputs are not exported.`
      : "Every calculation method in this revision is approved for export under the demo policy.",
    code: unreleased.length ? "METHOD_NOT_RELEASED" : undefined,
  });

  // Target-only historical evidence (AC-14).
  const targetOnly = answer.sources.filter((id) =>
    (currentSource(id)?.tags ?? []).some((tag) => TARGET_ONLY_TAGS.includes(tag))
  );
  if (targetOnly.length && FEATURE_FLAGS.historicalTrends !== "ON") {
    deny(
      "TARGET_ONLY_EVIDENCE",
      "Target-only historical evidence cannot appear in a Launch export."
    );
  }
  checks.push({
    id: "historical",
    status: targetOnly.length && FEATURE_FLAGS.historicalTrends !== "ON" ? "BLOCK" : "PASS",
    title: "Launch vs Target evidence",
    detail: targetOnly.length
      ? "Target-only historical evidence is present and the historical flag is not ON."
      : "No Target-only historical evidence in this revision. Historical Evidence Engine exports stay behind a flag.",
    code: targetOnly.length ? "TARGET_ONLY_EVIDENCE" : undefined,
  });

  // Claim coverage.
  const includedClaims = claims.filter(
    (item) => item.permitState === "ALLOWED" || item.permitState === "PARTIAL"
  );
  const sourceGap = claims.length > 0 && includedClaims.length === 0 &&
    claims.some((item) => item.reasonCode === "SOURCE_MISSING");
  if (answer.status === "UNSUPPORTED") {
    deny(
      "ANSWER_NOT_EXPORTABLE",
      "A refusal or coverage boundary is not an exportable research record."
    );
  } else if (!includedClaims.length && !sourceGap) {
    deny(
      "NO_EXPORTABLE_CLAIMS",
      "This answer has no evidence-backed claims to package."
    );
  }
  checks.push({
    id: "claims",
    status: includedClaims.length ? (includedClaims.length < claims.length ? "WARN" : "PASS") : "BLOCK",
    title: "Claim coverage",
    detail: includedClaims.length
      ? `${includedClaims.length} of ${claims.length} claims will be included with claim IDs and citations.`
      : "No evidence-backed claim can be packaged. A refusal or coverage boundary is not an exportable research record.",
    code: includedClaims.length ? undefined : "NO_EXPORTABLE_CLAIMS",
  });

  // Source rights.
  const omittedSources = sources.filter((item) => item.permitState !== "ALLOWED");
  checks.push({
    id: "rights",
    status: omittedSources.length ? "WARN" : "PASS",
    title: "Source rights",
    detail: omittedSources.length
      ? `${omittedSources.length} source${omittedSources.length === 1 ? "" : "s"} cannot be fully reproduced. Citations remain; excerpts are omitted or shortened and listed below.`
      : format === "CSV"
        ? "CSV references sources by id and version only; no excerpt is written."
        : "Every cited source permits export and quotation within its excerpt limit.",
    code: omittedSources.length ? "EXPORT_OMISSION" : undefined,
  });

  // CSV typed fact table (AC-10).
  if (format === "CSV") {
    const rows = metrics.filter(
      (item) => item.permitState === "ALLOWED" || item.permitState === "PARTIAL"
    );
    if (!rows.length) {
      deny(
        "NO_FACT_ROWS",
        "This answer has no typed observations for a CSV fact table. Choose PDF or DOCX."
      );
    }
    checks.push({
      id: "csv-schema",
      status: rows.length ? "PASS" : "BLOCK",
      title: "CSV fact table",
      detail: rows.length
        ? `${rows.length} typed observation row${rows.length === 1 ? "" : "s"}. No prose, excerpts or method text. Formula prefixes are neutralised; the spreadsheet open/save/reopen matrix is still release evidence.`
        : "No typed observations are available. CSV never carries prose or excerpts, so it cannot be produced for this answer.",
      code: rows.length ? undefined : "NO_FACT_ROWS",
    });
  }

  const items = [...claims, ...sources, ...metrics, ...tables, ...methods];
  return {
    items,
    includedClaimIds: includedClaims.map((item) => item.itemId),
    omittedSourceIds: omittedSources.map((item) => item.itemId),
    deniedReasons,
    sourceGap,
    checks,
  };
}

function countStates(items: ExportEligibilityItem[]) {
  const counts: Record<ExportPermitState, number> = {
    ALLOWED: 0,
    PARTIAL: 0,
    UNRESOLVED: 0,
    UNAVAILABLE: 0,
    REVOKED: 0,
  };
  items.forEach((item) => {
    counts[item.permitState] += 1;
  });
  return counts;
}

const DECISION_COPY: Record<ExportDecision, string> = {
  ELIGIBLE:
    "Your research package is ready for review. Sources and calculations will be included.",
  PARTIAL:
    "Some content cannot be exported. Review exclusions before generating a partial report.",
  DENIED:
    "This source may be viewed here but cannot be included in a downloadable report.",
  SOURCE_GAP:
    "A supporting source is unavailable. The affected statement will not be presented as verified.",
  STALE_REVISION:
    "This answer changed after you opened it. Refresh to review the current revision; nothing was generated.",
  AUTHORIZATION_REQUIRED: "Sign in to review export options.",
};

export interface PreflightInput {
  principal: string | null;
  answerRef: unknown;
  answerVersion?: unknown;
  format: unknown;
  purpose?: unknown;
  destination?: unknown;
}

function resolveAnswer(answerRef: unknown): PublishedAnswer {
  if (typeof answerRef !== "string" || !answerRef) {
    throw new ExportError("ANSWER_REF_REQUIRED", "Choose a research answer to export.");
  }
  const record = getResearchJob(answerRef);
  if (!record) {
    throw new ExportError(
      "ANSWER_NOT_FOUND",
      "That research answer is no longer available in this session.",
      404
    );
  }
  const answer = publishedAnswer(record);
  if (!answer) {
    throw new ExportError(
      "ANSWER_NOT_PUBLISHED",
      "The answer is not published yet, so it cannot be exported.",
      409
    );
  }
  return answer;
}

export function exportPreflight(input: PreflightInput): ExportPreflight {
  const answer = resolveAnswer(input.answerRef);
  if (!validFormat(input.format)) {
    throw new ExportError("FORMAT_REQUIRED", "Choose PDF, DOCX or CSV.");
  }
  const purpose: ExportPurpose =
    input.purpose === undefined || input.purpose === ""
      ? "PERSONAL_RESEARCH"
      : validPurpose(input.purpose)
        ? input.purpose
        : (() => {
            throw new ExportError("PURPOSE_INVALID", "Choose a supported use for the package.");
          })();
  const destination: ExportDestination =
    input.destination === undefined || input.destination === ""
      ? "DOWNLOAD"
      : validDestination(input.destination)
        ? input.destination
        : (() => {
            throw new ExportError("DESTINATION_INVALID", "Choose a supported destination.");
          })();
  const format = input.format;
  const answerRef = input.answerRef as string;
  const entitlement = entitlementView(input.principal);
  const evaluation = evaluate(answer, format, purpose, destination, entitlement.active);

  const requestedVersion =
    typeof input.answerVersion === "string" && input.answerVersion
      ? input.answerVersion
      : answer.answerVersion;
  const stale = requestedVersion !== answer.answerVersion;
  evaluation.checks.unshift({
    id: "revision",
    status: stale ? "BLOCK" : "PASS",
    title: "Pinned answer revision",
    detail: stale
      ? `You reviewed ${requestedVersion}; the published revision is now ${answer.answerVersion}. Re-pin before exporting.`
      : `Revision ${answer.answerVersion} is pinned. The package is built from this exact version.`,
    code: stale ? "STALE_REVISION" : undefined,
  });

  const omissions = evaluation.items.filter((item) => item.permitState !== "ALLOWED");
  const partial =
    omissions.length > 0 ||
    ["PARTIAL", "CONFLICT", "STALE", "RESTRICTED"].includes(answer.status);

  const decision: ExportDecision = !entitlement.active
    ? "AUTHORIZATION_REQUIRED"
    : stale
      ? "STALE_REVISION"
      : evaluation.deniedReasons.length
        ? "DENIED"
        : evaluation.sourceGap
          ? "SOURCE_GAP"
          : partial
            ? "PARTIAL"
            : "ELIGIBLE";

  const manifestHash = sha256(
    JSON.stringify({
      answerRef,
      answerVersion: answer.answerVersion,
      format,
      purpose,
      destination,
      policy: EXPORT_POLICY_VERSION,
      territory: entitlement.territory,
      items: evaluation.items.map((item) => [item.itemId, item.permitState, item.reasonCode ?? null]),
      rights: rightsFingerprint(answer),
    })
  );

  const decisionId = opaqueId("dec");
  const decisionExpiresAt = Date.now() + DECISION_TTL_MS;
  if (input.principal && decision !== "AUTHORIZATION_REQUIRED") {
    decisions.set(decisionId, {
      principal: input.principal,
      manifestHash,
      expiresAt: decisionExpiresAt,
    });
    bound(decisions, 2000);
  }

  const denied = evaluation.deniedReasons[0];
  return {
    allowed: decision === "ELIGIBLE" || decision === "PARTIAL",
    format,
    purpose,
    destination,
    answerRef,
    answerVersion: answer.answerVersion,
    decision,
    decisionId,
    decisionVersion: 1,
    decisionExpiresAt: new Date(decisionExpiresAt).toISOString(),
    policyVersion: EXPORT_POLICY_VERSION,
    checks: evaluation.checks,
    items: evaluation.items,
    omissions,
    counts: countStates(evaluation.items),
    includedClaimIds: evaluation.includedClaimIds,
    omittedSourceIds: evaluation.omittedSourceIds,
    requiresPartialAcknowledgement: decision === "PARTIAL",
    manifestHash,
    userMessage:
      decision === "DENIED" && denied && denied.code !== "REDISTRIBUTION_NOT_PERMITTED"
        ? denied.message
        : DECISION_COPY[decision],
    note:
      decision === "AUTHORIZATION_REQUIRED"
        ? "Sign in to review export options. Demo mode in the top bar can request a synthetic server-side grant for interface review."
        : decision === "DENIED"
          ? evaluation.deniedReasons.map((item) => item.message).join(" ")
          : decision === "STALE_REVISION"
            ? "Refresh the answer and run the preflight again."
            : `The ${extension(format).toUpperCase()} package will be generated from revision ${answer.answerVersion}.`,
    entitlement,
    csvSchema: format === "CSV" ? CSV_SCHEMA : null,
    limits: {
      maxActiveJobs: MAX_ACTIVE_JOBS,
      maxArtifactBytes: MAX_ARTIFACT_BYTES,
      maxCsvRows: MAX_CSV_ROWS,
      jobTtlMinutes: EXPORT_TTL_MS / 60000,
      downloadTokenTtlSeconds: DOWNLOAD_TOKEN_TTL_MS / 1000,
    },
  };
}

/* ------------------------------------------------------------------ */
/* Job creation (EXP-12, AC-21, AC-39, §10.2)                           */
/* ------------------------------------------------------------------ */

export interface CreateExportInput extends PreflightInput {
  acknowledged: boolean;
  idempotencyKey: string;
  manifestHash: unknown;
  decisionId: unknown;
}

function audit(record: ExportJobRecord, action: string, outcome: string) {
  const event: ExportAuditEvent = {
    at: new Date().toISOString(),
    action,
    outcome,
    correlationId: opaqueId("aud"),
  };
  record.audit.push(event);
  if (record.audit.length > 20) record.audit.shift();
}

function isTerminal(status: ExportJobStatus): boolean {
  return [
    "READY",
    "BLOCKED",
    "FAILED",
    "EXPIRED",
    "REVOKED",
    "CANCELLED",
    "DOWNLOAD_BLOCKED",
  ].includes(status);
}

export function createExport(input: CreateExportInput): {
  record: ExportJobRecord;
  replayed: boolean;
} {
  const principal = input.principal;
  if (!principal) {
    throw new ExportError("SESSION_REQUIRED", "A browser session is required.", 401);
  }
  const key = input.idempotencyKey.trim();
  if (!key) {
    throw new ExportError(
      "IDEMPOTENCY_KEY_REQUIRED",
      "Every export request needs an idempotency key so a retry cannot create a duplicate job.",
      400
    );
  }
  const bodyHash = sha256(
    JSON.stringify({
      answerRef: input.answerRef ?? null,
      answerVersion: input.answerVersion ?? null,
      format: input.format ?? null,
      purpose: input.purpose ?? null,
      destination: input.destination ?? null,
      manifestHash: input.manifestHash ?? null,
      decisionId: input.decisionId ?? null,
      acknowledged: input.acknowledged,
    })
  );
  const scopedKey = `${principal}:${key}`;
  const prior = idempotency.get(scopedKey);
  if (prior) {
    if (prior.bodyHash !== bodyHash) {
      throw new ExportError(
        "IDEMPOTENCY_KEY_REUSED",
        "This request key was already used for a different export. Start a new request.",
        409
      );
    }
    const existing = jobs.get(prior.jobId);
    if (existing) return { record: existing, replayed: true };
    idempotency.delete(scopedKey);
  }

  if (typeof input.manifestHash !== "string" || !input.manifestHash) {
    throw new ExportError(
      "MANIFEST_REQUIRED",
      "Run the preflight and review the manifest before generating a package.",
      400
    );
  }
  const decisionRecord =
    typeof input.decisionId === "string" ? decisions.get(input.decisionId) : undefined;
  if (
    !decisionRecord ||
    decisionRecord.principal !== principal ||
    Date.now() > decisionRecord.expiresAt
  ) {
    throw new ExportError(
      "PREFLIGHT_EXPIRED",
      "The eligibility review has expired. Run the preflight again before generating.",
      409
    );
  }

  // Atomic recheck: re-run the preflight against current rights.
  const preflight = exportPreflight(input);
  if (preflight.decision === "AUTHORIZATION_REQUIRED") {
    throw new ExportError("AUTH_REQUIRED", "Sign in to review export options.", 403);
  }
  if (preflight.decision === "STALE_REVISION") {
    throw new ExportError(
      "ANSWER_VERSION_STALE",
      "The answer changed after preflight. Review the current revision before generating.",
      409
    );
  }
  if (
    input.manifestHash !== preflight.manifestHash ||
    decisionRecord.manifestHash !== preflight.manifestHash
  ) {
    throw new ExportError(
      "MANIFEST_STALE",
      "The answer or source rights changed after preflight. Review the current manifest before generating a package.",
      409
    );
  }
  if (!preflight.allowed) {
    throw new ExportError("EXPORT_DENIED", preflight.userMessage, 403);
  }
  if (preflight.requiresPartialAcknowledgement && !input.acknowledged) {
    throw new ExportError(
      "ACKNOWLEDGEMENT_REQUIRED",
      "Some content cannot be exported. Review exclusions before generating a partial report.",
      409
    );
  }

  const active = [...jobs.values()].filter(
    (job) => job.principal === principal && !isTerminal(statusOf(job))
  );
  if (active.length >= MAX_ACTIVE_JOBS) {
    throw new ExportError(
      "EXPORT_CONCURRENCY_LIMIT",
      `Only ${MAX_ACTIVE_JOBS} exports can be prepared at once. Wait for one to finish, then try again.`,
      429,
      5
    );
  }

  const answer = resolveAnswer(input.answerRef);
  const now = Date.now();
  const record: ExportJobRecord = {
    id: opaqueId("exp"),
    principal,
    answerRef: input.answerRef as string,
    answerVersion: answer.answerVersion,
    answerSnapshot: structuredClone(answer),
    format: preflight.format,
    purpose: preflight.purpose,
    createdAt: now,
    expiresAt: now + EXPORT_TTL_MS,
    partial: preflight.requiresPartialAcknowledgement,
    omittedSourceIds: preflight.omittedSourceIds,
    includedClaimIds: preflight.includedClaimIds,
    omissions: preflight.omissions,
    items: preflight.items,
    manifestHash: preflight.manifestHash,
    rightsFingerprint: rightsFingerprint(answer),
    decisionId: input.decisionId as string,
    policyVersion: EXPORT_POLICY_VERSION,
    territory: preflight.entitlement.territory ?? DEMO_TERRITORY,
    audit: [],
  };
  audit(record, "EXPORT_CREATE", "QUEUED");
  jobs.set(record.id, record);
  idempotency.set(scopedKey, { bodyHash, jobId: record.id });
  decisions.delete(input.decisionId as string);

  if (jobs.size > 100) {
    const oldest = [...jobs.keys()].slice(0, jobs.size - 100);
    oldest.forEach((jobId) => {
      jobs.delete(jobId);
      for (const [idemKey, entry] of idempotency) {
        if (entry.jobId === jobId) idempotency.delete(idemKey);
      }
    });
  }
  return { record, replayed: false };
}

export function getExportJob(id: string): ExportJobRecord | undefined {
  return jobs.get(id);
}

/* ------------------------------------------------------------------ */
/* Lifecycle (EXP-13, §9, AC-20, AC-23)                                 */
/* ------------------------------------------------------------------ */

function statusOf(record: ExportJobRecord, now = Date.now()): ExportJobStatus {
  if (record.revokedAt) return "REVOKED";
  if (record.cancelledAt) return "CANCELLED";
  if (now > record.expiresAt) return "EXPIRED";
  if (record.blocked) return "BLOCKED";
  if (record.failed) return "FAILED";
  if (record.downloadBlocked) return "DOWNLOAD_BLOCKED";
  if (record.artifact) return "READY";
  const elapsed = now - record.createdAt;
  if (elapsed < STAGE_QUEUED_MS) return "QUEUED";
  if (elapsed < STAGE_PREPARING_MS || !record.rightsRecheckedAt) return "PREPARING";
  return "RENDERING";
}

/**
 * Re-evaluates the pinned revision and current rights. Returns a block
 * reason or null. Used before render and again at download time.
 */
function recheck(record: ExportJobRecord): { code: string; message: string } | null {
  const research = getResearchJob(record.answerRef);
  const current = research ? publishedAnswer(research) : undefined;
  if (!current) {
    return {
      code: "ANSWER_WITHDRAWN",
      message:
        "The research answer is no longer available in this session, so the package cannot be delivered.",
    };
  }
  if (current.answerVersion !== record.answerVersion) {
    return {
      code: "ANSWER_SUPERSEDED",
      message:
        "The answer has a newer revision. Run a new preflight; the package is never silently rebuilt with newer numbers.",
    };
  }
  if (rightsFingerprint(record.answerSnapshot) !== record.rightsFingerprint) {
    return {
      code: "RIGHTS_CHANGED",
      message:
        "Source permissions changed after preflight. Create a new package to apply current source permissions.",
    };
  }
  return null;
}

type ArtifactBuilder = (record: ExportJobRecord) => Promise<{
  bytes: Uint8Array;
  contentType: string;
  fileName: string;
}>;

/**
 * Advances a job through its server-side lifecycle. Rights are re-evaluated
 * when preparation ends (§5.1 RENDER) and the artifact is built from the
 * pinned snapshot, checksummed and size-limited before READY is reported.
 */
export async function advanceExportJob(
  record: ExportJobRecord,
  build: ArtifactBuilder,
  now = Date.now()
): Promise<ExportJobRecord> {
  const status = statusOf(record, now);
  if (status === "EXPIRED" && record.artifact) {
    record.artifact = undefined;
    revokeTokensFor(record.id);
    audit(record, "EXPORT_EXPIRE", "EXPIRED");
  }
  if (status !== "PREPARING" && status !== "RENDERING") return record;
  const elapsed = now - record.createdAt;
  if (elapsed >= STAGE_PREPARING_MS && !record.rightsRecheckedAt) {
    const blocked = recheck(record);
    if (blocked) {
      record.blocked = blocked;
      audit(record, "RENDER_RIGHTS_CHECK", `BLOCKED:${blocked.code}`);
      return record;
    }
    record.rightsRecheckedAt = now;
    audit(record, "RENDER_RIGHTS_CHECK", "PASS");
  }
  if (elapsed >= STAGE_RENDERED_MS && record.rightsRecheckedAt && !record.artifact) {
    try {
      const built = await build(record);
      if (built.bytes.byteLength > MAX_ARTIFACT_BYTES) {
        record.failed = {
          code: "ARTIFACT_TOO_LARGE",
          message: "The package exceeded the size limit. No partial file is offered.",
        };
        audit(record, "RENDER", "FAILED:ARTIFACT_TOO_LARGE");
        return record;
      }
      record.artifact = {
        bytes: built.bytes,
        sha256: sha256(built.bytes),
        size: built.bytes.byteLength,
        contentType: built.contentType,
        fileName: built.fileName,
        renderedAt: Date.now(),
      };
      audit(record, "RENDER", "READY");
    } catch {
      record.failed = {
        code: "RENDER_FAILED",
        message: "The package could not be built. No partial or corrupt file is offered.",
      };
      audit(record, "RENDER", "FAILED:RENDER_FAILED");
    }
  }
  return record;
}

const STATUS_COPY: Record<ExportJobStatus, { label: string; progress: number; message: string }> = {
  QUEUED: {
    label: "Queued",
    progress: 8,
    message: "Export requested. We’ll show its status here when processing updates.",
  },
  PREPARING: {
    label: "Preparing · rechecking rights",
    progress: 35,
    message: "Preparing the package. Source rights and the pinned revision are checked again before rendering.",
  },
  RENDERING: {
    label: "Rendering package",
    progress: 70,
    message: "Rendering the package from the pinned revision on the server.",
  },
  READY: {
    label: "Ready",
    progress: 100,
    message: "Your report is ready. Access will be checked again when you download it.",
  },
  BLOCKED: {
    label: "Blocked",
    progress: 100,
    message: "The package was blocked before rendering. Nothing was generated.",
  },
  FAILED: {
    label: "Failed",
    progress: 100,
    message: "The package could not be built. No partial or corrupt file is offered.",
  },
  EXPIRED: {
    label: "Expired",
    progress: 100,
    message: "This export has expired. Create a new package to apply current source permissions.",
  },
  REVOKED: {
    label: "Withdrawn",
    progress: 100,
    message: "This export was withdrawn. Further downloads are refused; copies already downloaded are outside Talvrin controls and are not erased.",
  },
  CANCELLED: {
    label: "Cancelled",
    progress: 100,
    message: "Export cancelled. No file will be produced.",
  },
  DOWNLOAD_BLOCKED: {
    label: "Download blocked",
    progress: 100,
    message: "Access or rights changed since the package was prepared, so it cannot be downloaded.",
  },
};

export function exportFileName(record: ExportJobRecord): string {
  return `talvrin-citation-package-${record.id}.${extension(record.format)}`;
}

export function exportJobView(
  record: ExportJobRecord,
  now = Date.now()
): ExportJobView {
  const status = statusOf(record, now);
  const copy = STATUS_COPY[status];
  const reason = record.blocked ?? record.failed ?? record.downloadBlocked;
  const showReason =
    reason && (status === "BLOCKED" || status === "FAILED" || status === "DOWNLOAD_BLOCKED");
  return {
    id: record.id,
    format: record.format,
    purpose: record.purpose,
    status,
    terminal: isTerminal(status) && status !== "READY",
    stageLabel: copy.label,
    progress: copy.progress,
    createdAt: new Date(record.createdAt).toISOString(),
    readyAt: record.artifact ? new Date(record.artifact.renderedAt).toISOString() : null,
    expiresAt: new Date(record.expiresAt).toISOString(),
    fileName: status === "READY" ? exportFileName(record) : null,
    contentType: contentTypeFor(record.format),
    sizeBytes: status === "READY" && record.artifact ? record.artifact.size : null,
    outputChecksum: record.artifact ? `sha256:${record.artifact.sha256}` : null,
    answerRef: record.answerRef,
    answerVersion: record.answerVersion,
    manifestHash: record.manifestHash,
    decisionId: record.decisionId,
    policyVersion: record.policyVersion,
    omittedSourceCount: record.omittedSourceIds.length,
    omissionCount: record.omissions.length,
    partial: record.partial,
    message: showReason ? reason.message : copy.message,
    reasonCode: showReason ? reason.code : undefined,
    audit: record.audit.map((event) => ({ ...event })),
    error: status === "FAILED" ? record.failed?.message : undefined,
  };
}

/** DELETE /exports/{id}: cancel a pending job or withdraw a ready one. */
export function cancelExport(record: ExportJobRecord): ExportJobRecord {
  const status = statusOf(record);
  if (status === "QUEUED" || status === "PREPARING" || status === "RENDERING") {
    record.cancelledAt = Date.now();
    audit(record, "EXPORT_CANCEL", "CANCELLED");
  } else if (status === "READY" || status === "DOWNLOAD_BLOCKED") {
    record.revokedAt = Date.now();
    audit(record, "EXPORT_REVOKE", "REVOKED");
  } else {
    audit(record, "EXPORT_CANCEL", `NO_CHANGE:${status}`);
  }
  record.artifact = undefined;
  revokeTokensFor(record.id);
  return record;
}

/* ------------------------------------------------------------------ */
/* Download authorisation (§5.1 DOWNLOAD, AC-23, §15.1 token replay)    */
/* ------------------------------------------------------------------ */

function revokeTokensFor(exportId: string) {
  for (const [token, entry] of downloadTokens) {
    if (entry.exportId === exportId) downloadTokens.delete(token);
  }
}

/**
 * Re-authorises identity, entitlement, current rights and object expiry.
 * Throws an ExportError when delivery must be refused.
 */
export function authorizeDelivery(record: ExportJobRecord, principal: string | null) {
  if (!principal || principal !== record.principal) {
    throw new ExportError("EXPORT_NOT_FOUND", "Not available.", 404);
  }
  if (!activeGrant(principal)) {
    audit(record, "DOWNLOAD_AUTHORIZE", "DENIED:AUTH_REQUIRED");
    throw new ExportError(
      "AUTH_REQUIRED",
      "Your export access is no longer active. Sign in to review export options.",
      403
    );
  }
  const status = statusOf(record);
  if (status === "EXPIRED") {
    throw new ExportError(
      "EXPORT_EXPIRED",
      "This export has expired. Create a new package to apply current source permissions.",
      410
    );
  }
  if (status === "REVOKED" || status === "CANCELLED") {
    throw new ExportError(
      "EXPORT_REVOKED",
      "This export is no longer available. Create a new package.",
      410
    );
  }
  if (status === "DOWNLOAD_BLOCKED" && record.downloadBlocked) {
    throw new ExportError(record.downloadBlocked.code, record.downloadBlocked.message, 409);
  }
  if (status !== "READY" || !record.artifact) {
    throw new ExportError("EXPORT_NOT_READY", "The citation package is not ready yet.", 409);
  }
  const blocked = recheck(record);
  if (blocked) {
    record.downloadBlocked = blocked;
    record.artifact = undefined;
    revokeTokensFor(record.id);
    audit(record, "DOWNLOAD_AUTHORIZE", `DOWNLOAD_BLOCKED:${blocked.code}`);
    throw new ExportError(blocked.code, blocked.message, 409);
  }
}

export function issueDownloadToken(record: ExportJobRecord, principal: string | null) {
  authorizeDelivery(record, principal);
  const token = randomBytes(24).toString("base64url");
  const expiresAt = Date.now() + DOWNLOAD_TOKEN_TTL_MS;
  downloadTokens.set(token, {
    exportId: record.id,
    principal: principal as string,
    expiresAt,
    used: false,
  });
  bound(downloadTokens, 2000);
  audit(record, "DOWNLOAD_TOKEN_ISSUE", "ISSUED");
  return {
    downloadUrl: `/api/assistant/exports/${encodeURIComponent(record.id)}/download?token=${encodeURIComponent(token)}`,
    expiresAt: new Date(expiresAt).toISOString(),
    oneUse: true as const,
  };
}

/** Consumes a one-use token and returns the artifact after a full recheck. */
export function redeemDownloadToken(
  record: ExportJobRecord,
  token: string,
  principal: string | null
) {
  const entry = downloadTokens.get(token);
  downloadTokens.delete(token);
  if (
    !entry ||
    entry.used ||
    entry.exportId !== record.id ||
    entry.principal !== principal ||
    Date.now() > entry.expiresAt
  ) {
    audit(record, "DOWNLOAD", "DENIED:TOKEN_INVALID");
    throw new ExportError(
      "DOWNLOAD_TOKEN_INVALID",
      "This download authorisation has been used or has expired. Request the download again.",
      410
    );
  }
  authorizeDelivery(record, principal);
  audit(record, "DOWNLOAD", "DELIVERED");
  return record.artifact!;
}

/* ------------------------------------------------------------------ */
/* Test support                                                         */
/* ------------------------------------------------------------------ */

/** Test hook: moves a job's clock so lifecycle stages can be asserted. */
export function __ageExportForTests(id: string, ms: number) {
  const record = jobs.get(id);
  if (record) {
    record.createdAt -= ms;
    record.expiresAt -= ms;
  }
}
