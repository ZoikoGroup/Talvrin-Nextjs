import { createHash } from "node:crypto";
import type {
  ComparisonCheck,
  ComparisonJobRecord,
  ComparisonJobView,
  ComparisonRequest,
  PreflightResult,
} from "./types";
import { COMPARISON_STAGES, FEATURE_FLAGS } from "./taxonomy";
import {
  MAX_INSTRUMENTS,
  MAX_METRICS,
  buildComparisonResult,
  evaluatePreflight,
  getInstrument,
  getMetric,
} from "./comparison-data";
import {
  DEFAULT_COMPARISON_METHOD,
  DISPLAY_POLICY_VERSION,
  METHOD_REGISTRY_VERSION,
  METRIC_CATALOG_VERSION,
} from "./methods";
import { opaqueId } from "./format";

export const COMPARISON_TTL_MS = 2 * 60 * 60 * 1000;
export const PREFLIGHT_TTL_MS = 10 * 60 * 1000;

const jobs = new Map<string, ComparisonJobRecord>();
const preflights = new Map<
  string,
  { fingerprint: string; expiresAt: number; session: string | null; policyVersion: string }
>();
/** session:idempotencyKey → job ref (WF-04 A21, Q10). */
const idempotency = new Map<string, { ref: string; fingerprint: string }>();

const TOTAL_MS = COMPARISON_STAGES.reduce((total, stage) => total + stage.durationMs, 0);

export class ComparisonError extends Error {
  readonly code: string;
  readonly status: number;
  readonly checks?: ComparisonCheck[];

  constructor(code: string, message: string, status = 422, checks?: ComparisonCheck[]) {
    super(message);
    this.name = "ComparisonError";
    this.code = code;
    this.status = status;
    this.checks = checks;
  }
}

export function comparisonLaunched(): boolean {
  return FEATURE_FLAGS.comparison !== "OFF";
}

const CURRENCIES = ["GBP", "USD", "EUR"] as const;

export function normaliseComparisonRequest(input: unknown): ComparisonRequest {
  if (!input || typeof input !== "object") {
    throw new ComparisonError("INVALID_BODY", "A comparison request is required.");
  }
  const body = input as Partial<ComparisonRequest>;
  const rawIds = Array.isArray(body.instrumentIds)
    ? body.instrumentIds.filter((id): id is string => typeof id === "string").slice(0, 10)
    : [];
  if (new Set(rawIds).size !== rawIds.length) {
    throw new ComparisonError("DUPLICATE_INSTRUMENT", "That instrument is already included.");
  }
  const metricIds = Array.isArray(body.metricIds)
    ? [...new Set(body.metricIds.filter((id): id is string => typeof id === "string"))].slice(0, 10)
    : [];
  const period = typeof body.period === "string" && body.period.length ? body.period.slice(0, 32) : "latest";
  const currencyMode = body.currencyMode === "COMMON" ? "COMMON" : "REPORTED";
  const commonCurrency =
    currencyMode === "COMMON"
      ? (CURRENCIES as readonly string[]).includes(String(body.commonCurrency))
        ? (body.commonCurrency as ComparisonRequest["commonCurrency"])
        : "GBP"
      : null;
  const cutoff =
    typeof body.publicationCutoff === "string" && /^\d{4}-\d{2}-\d{2}$/.test(body.publicationCutoff)
      ? body.publicationCutoff
      : null;

  if (rawIds.find((id) => !getInstrument(id))) {
    throw new ComparisonError(
      "UNKNOWN_INSTRUMENT",
      "One or more instrument identifiers could not be resolved."
    );
  }
  if (metricIds.find((id) => !getMetric(id))) {
    throw new ComparisonError(
      "UNKNOWN_METRIC",
      "One or more metric identifiers could not be resolved."
    );
  }
  if (rawIds.length > MAX_INSTRUMENTS + 2 || metricIds.length > MAX_METRICS + 4) {
    throw new ComparisonError("REQUEST_TOO_LARGE", "The comparison request is too large.");
  }

  return {
    instrumentIds: rawIds,
    metricIds,
    period,
    currencyMode,
    commonCurrency,
    metricCatalogVersion:
      typeof body.metricCatalogVersion === "string" ? body.metricCatalogVersion : METRIC_CATALOG_VERSION,
    methodId: typeof body.methodId === "string" ? body.methodId : DEFAULT_COMPARISON_METHOD.id,
    methodVersion:
      typeof body.methodVersion === "string" ? body.methodVersion : DEFAULT_COMPARISON_METHOD.version,
    publicationCutoff: cutoff,
  };
}

/**
 * Immutable draft hash (WF-04 §8.2): entity order, metrics, period, display,
 * cutoff, method, catalogue, registry and rights-policy versions.
 */
export function fingerprintRequest(request: ComparisonRequest): string {
  const canonical = JSON.stringify({
    entities: request.instrumentIds,
    metrics: [...request.metricIds].sort(),
    period: request.period,
    currencyMode: request.currencyMode,
    commonCurrency: request.currencyMode === "COMMON" ? request.commonCurrency : null,
    cutoff: request.publicationCutoff,
    method: `${request.methodId}@${request.methodVersion}`,
    catalog: request.metricCatalogVersion,
    registry: METHOD_REGISTRY_VERSION,
    policy: DISPLAY_POLICY_VERSION,
  });
  return `sha256:${createHash("sha256").update(canonical).digest("hex")}`;
}

export function createPreflight(input: unknown, session: string | null): PreflightResult {
  const request = normaliseComparisonRequest(input);
  const { checks, decision } = evaluatePreflight(request);
  const fingerprint = fingerprintRequest(request);
  let token: string | null = null;
  let expiresAt: string | null = null;
  if (decision !== "BLOCKED") {
    token = opaqueId("pf");
    const expires = Date.now() + PREFLIGHT_TTL_MS;
    expiresAt = new Date(expires).toISOString();
    preflights.set(token, { fingerprint, expiresAt: expires, session, policyVersion: DISPLAY_POLICY_VERSION });
    if (preflights.size > 200) {
      const now = Date.now();
      for (const [key, value] of preflights) if (value.expiresAt < now) preflights.delete(key);
    }
  }
  checks.push({
    id: "integrity-token",
    gate: "P-08",
    status: token ? "PASS" : "BLOCK",
    outcome: token ? "READY" : "INVALIDATED",
    target: "entity_ids",
    title: "Decision token",
    detail: token
      ? "A short-lived decision token is bound to this exact draft and session. Any change to inputs or policy versions invalidates it."
      : "No decision token is issued while a blocking check remains.",
  });
  return {
    decision,
    status: decision,
    eligibleToRun: decision !== "BLOCKED",
    token,
    decisionToken: token,
    checks,
    blockingCount: checks.filter((check) => check.status === "BLOCK").length,
    warningCount: checks.filter((check) => check.status === "WARN" && check.outcome !== "NOT_EVALUATED").length,
    fingerprint,
    rightsDecisionRef: opaqueId("rdr"),
    evidenceManifestRef: opaqueId("evm"),
    expiresAt,
    metricCatalogVersion: request.metricCatalogVersion,
    methodVersion: `${request.methodId}@${request.methodVersion}`,
    policyVersion: DISPLAY_POLICY_VERSION,
  };
}

export function createComparisonJob(
  rawRequest: unknown,
  token: string | null,
  acknowledged: boolean,
  idempotencyKey: string,
  session: string | null
): { record: ComparisonJobRecord; replayed: boolean } {
  const request = normaliseComparisonRequest(rawRequest);
  const fingerprint = fingerprintRequest(request);

  // Idempotent replay: repeat clicks with the same key return one job.
  const idemKey = idempotencyKey ? `${session ?? "anon"}:${idempotencyKey}` : "";
  if (idemKey) {
    const existing = idempotency.get(idemKey);
    if (existing) {
      if (existing.fingerprint !== fingerprint) {
        throw new ComparisonError(
          "IDEMPOTENCY_KEY_REUSED",
          "This request key was already used for a different comparison. Check again to continue.",
          409
        );
      }
      const record = jobs.get(existing.ref);
      if (record) return { record, replayed: true };
    }
  }

  const { checks, decision } = evaluatePreflight(request);
  if (decision === "BLOCKED") {
    throw new ComparisonError(
      "PREFLIGHT_BLOCKED",
      "The comparison cannot run until the blocking checks are resolved.",
      409,
      checks
    );
  }
  if (!token) {
    throw new ComparisonError("PREFLIGHT_REQUIRED", "Run the preflight check before executing the comparison.", 409);
  }
  const cached = preflights.get(token);
  if (
    !cached ||
    cached.expiresAt < Date.now() ||
    cached.policyVersion !== DISPLAY_POLICY_VERSION ||
    cached.session !== session
  ) {
    throw new ComparisonError("PREFLIGHT_EXPIRED", "Conditions changed. Check again to continue.", 409);
  }
  if (cached.fingerprint !== fingerprint) {
    throw new ComparisonError("PREFLIGHT_STALE", "Conditions changed. Check again to continue.", 409);
  }
  if (decision === "REVISE" && !acknowledged) {
    throw new ComparisonError(
      "ACKNOWLEDGEMENT_REQUIRED",
      "Review the warnings before running the comparison.",
      409,
      checks
    );
  }
  preflights.delete(token);

  const ref = opaqueId("cmp");
  const createdAt = Date.now();
  const record: ComparisonJobRecord = {
    ref,
    createdAt,
    expiresAt: createdAt + COMPARISON_TTL_MS,
    idempotencyKey: idempotencyKey || null,
    request,
    result: buildComparisonResult(request, ref, fingerprint),
  };
  jobs.set(ref, record);
  if (idemKey) idempotency.set(idemKey, { ref, fingerprint });
  if (jobs.size > 60) {
    [...jobs.values()]
      .sort((a, b) => a.createdAt - b.createdAt)
      .slice(0, jobs.size - 60)
      .forEach((job) => jobs.delete(job.ref));
  }
  if (idempotency.size > 500) idempotency.clear();
  return { record, replayed: false };
}

export function getComparisonJob(ref: string): ComparisonJobRecord | undefined {
  return jobs.get(ref);
}

/**
 * Bounded status view. Stage only — no fabricated percent (WF-04 S17).
 * Rights and launch state are re-evaluated on every read (WF-05 §9.1): a
 * revoked or expired result returns no payload.
 */
export function comparisonJobView(record: ComparisonJobRecord, now = Date.now()): ComparisonJobView {
  const elapsed = Math.max(0, now - record.createdAt);
  let index = 0;
  let cumulative = 0;
  for (let i = 0; i < COMPARISON_STAGES.length; i += 1) {
    cumulative += COMPARISON_STAGES[i].durationMs;
    index = i;
    if (elapsed < cumulative) break;
  }
  const base = {
    ref: record.ref,
    stage: COMPARISON_STAGES[index],
    stageIndex: index,
    stageCount: COMPARISON_STAGES.length,
    createdAt: new Date(record.createdAt).toISOString(),
    expiresAt: new Date(record.expiresAt).toISOString(),
    idempotencyKey: record.idempotencyKey,
    request: record.request,
  };
  if (!comparisonLaunched()) return { ...base, state: "NOT_LAUNCHED" };
  if (now > record.expiresAt) return { ...base, state: "EXPIRED_OR_REVOKED" };
  const revoked = record.result.instruments.some(
    (instrument) => getInstrument(instrument.id)?.dataRights !== instrument.dataRights
  );
  if (revoked) return { ...base, state: "EXPIRED_OR_REVOKED" };
  if (elapsed < TOTAL_MS) return { ...base, state: "PENDING" };
  return { ...base, state: record.result.state, result: record.result };
}
