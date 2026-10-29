import type {
  PublishedAnswer,
  ResearchJobRecord,
  ResearchJobView,
  ScenarioKey,
  ScopeId,
  StageDefinition,
} from "./types";
import { RESEARCH_STAGES, SCOPES } from "./taxonomy";
import { buildAnswer } from "./answers";
import { detectScenario } from "./scenario";
import { opaqueId } from "./format";

export const JOB_TTL_MS = 2 * 60 * 60 * 1000;

const jobs = new Map<string, ResearchJobRecord>();

/**
 * WF-02 §7: R05 CALCULATING is shown only when the answer contains a
 * claim produced by a deterministic method.
 */
function stagesFor(record: ResearchJobRecord): StageDefinition[] {
  const calculates = record.answer.claims.some((claim) => claim.methodId);
  return RESEARCH_STAGES.filter(
    (stage) => calculates || stage.key !== "CALCULATE"
  );
}

function totalMs(stages: StageDefinition[]): number {
  return stages.reduce((total, stage) => total + stage.durationMs, 0);
}

/** Demo trigger for WF-02 F11 / WF-03 F03 revocation fixtures. */
const REVOCATION_PATTERN = /revocation|revoked?/i;
/** Source grant withdrawn this long after publication (demo only). */
const SOURCE_REVOKE_AFTER_MS = 30_000;
/** Whole answer revoked this long after publication (demo only). */
const ANSWER_REVOKE_AFTER_MS = 90_000;

export interface CreateJobInput {
  question: string;
  scopeIds: string[];
  scenario?: ScenarioKey;
  parentRef?: string;
}

export class ResearchValidationError extends Error {
  readonly fields: Record<string, string>;

  constructor(fields: Record<string, string>) {
    super("The research request is invalid.");
    this.name = "ResearchValidationError";
    this.fields = fields;
  }
}

/** A requested scope that is unknown or not launched (WF-01 A08). */
export class ScopeUnavailableError extends Error {
  readonly scopeIds: string[];
  constructor(scopeIds: string[]) {
    super("One or more requested scopes are not available.");
    this.name = "ScopeUnavailableError";
    this.scopeIds = scopeIds;
  }
}

/**
 * The server re-checks scope; a client-crafted or unlaunched scope is
 * rejected, never silently dropped (WF-01 I04, A08).
 */
function validScopeIds(scopeIds: string[]): ScopeId[] {
  const allowed = new Set<string>(
    SCOPES.filter((scope) => scope.supported).map((scope) => scope.id)
  );
  const rejected = scopeIds.filter((id) => !allowed.has(id));
  if (rejected.length) throw new ScopeUnavailableError(rejected.slice(0, 5));
  return scopeIds as ScopeId[];
}

export function createResearchJob(input: CreateJobInput): ResearchJobRecord {
  const question = input.question.trim();
  const scopeIds = validScopeIds(input.scopeIds);
  const fields: Record<string, string> = {};

  if (question.length < 8) {
    fields.question = "Enter at least 8 characters so the question is specific.";
  } else if (question.length > 2000) {
    fields.question = "Keep the question to 2,000 characters or fewer.";
  }
  if (scopeIds.length === 0) {
    fields.scopeIds = "Select at least one research scope.";
  }
  if (Object.keys(fields).length) {
    throw new ResearchValidationError(fields);
  }

  const createdAt = Date.now();
  const scenario = input.scenario ?? detectScenario(question);
  const ref = opaqueId("rs");
  const answer = buildAnswer(scenario, question, scopeIds);

  const record: ResearchJobRecord = {
    ref,
    question,
    scopeIds,
    scenario,
    createdAt,
    expiresAt: createdAt + JOB_TTL_MS,
    parentRef: input.parentRef,
    answer: { ...answer, messageRef: opaqueId("msg"), parentRef: input.parentRef },
  };
  if (REVOCATION_PATTERN.test(question) && answer.sources.length) {
    // Demo-only: withdraw the excerpt grant of the first excerpt-bearing
    // source, then revoke the whole answer, so R15 and E10 can be reviewed.
    const target =
      answer.sources.find((id) => id === "src-meridian-ir") ?? answer.sources[0];
    const publishAt = createdAt + totalMs(stagesFor(record));
    record.revocation = {
      sourceIds: [target],
      sourcesAt: publishAt + SOURCE_REVOKE_AFTER_MS,
      answerAt: publishAt + ANSWER_REVOKE_AFTER_MS,
    };
  }
  jobs.set(ref, record);

  // Keep the in-memory demo store bounded. Old jobs expire naturally; this
  // sweep prevents unbounded growth during long review sessions.
  if (jobs.size > 80) {
    const oldest = [...jobs.values()]
      .sort((a, b) => a.createdAt - b.createdAt)
      .slice(0, jobs.size - 80);
    oldest.forEach((job) => jobs.delete(job.ref));
  }

  return record;
}

export function getResearchJob(ref: string): ResearchJobRecord | undefined {
  return jobs.get(ref);
}

function stageAt(
  stages: StageDefinition[],
  createdAt: number,
  at: number
): number {
  const elapsed = Math.max(0, at - createdAt);
  let cumulative = 0;
  for (let index = 0; index < stages.length; index += 1) {
    cumulative += stages[index].durationMs;
    if (elapsed < cumulative) return index;
  }
  return stages.length - 1;
}

/** True once the demo revocation schedule has withdrawn the answer. */
export function isAnswerRevoked(
  record: ResearchJobRecord,
  now = Date.now()
): boolean {
  return Boolean(record.revocation && now >= record.revocation.answerAt);
}

/** Source ids whose grants are currently revoked for this job. */
export function revokedSourceIds(
  record: ResearchJobRecord,
  now = Date.now()
): string[] {
  return record.revocation && now >= record.revocation.sourcesAt
    ? record.revocation.sourceIds
    : [];
}

/**
 * Server-authoritative job view (WF-02 §7, §9). The stage comes from the
 * orchestrator simulation on the server; the client never infers it.
 * `progress` is kept for contract compatibility and reports only
 * completed stages, never a time-derived percentage.
 */
export function researchJobView(
  record: ResearchJobRecord,
  now = Date.now()
): ResearchJobView {
  const stages = stagesFor(record);
  const expired = now > record.expiresAt;
  const elapsed = Math.max(0, now - record.createdAt);
  const cancelledAt = record.cancelledAt;
  const index = stageAt(stages, record.createdAt, cancelledAt ?? now);
  const ready = elapsed >= totalMs(stages) && !cancelledAt && !expired;

  const status: ResearchJobView["status"] = cancelledAt
    ? "CANCELLED"
    : expired
      ? "EXPIRED"
      : ready
        ? "READY"
        : "RUNNING";
  const revoked = status === "READY" && isAnswerRevoked(record, now);

  return {
    ref: record.ref,
    question: record.question,
    scopeIds: record.scopeIds,
    status,
    stage: stages[index],
    stageIndex: index,
    stageCount: stages.length,
    progress:
      status === "RUNNING"
        ? Math.round((index / stages.length) * 100)
        : 100,
    createdAt: new Date(record.createdAt).toISOString(),
    expiresAt: new Date(record.expiresAt).toISOString(),
    answerState: record.answer.status,
    scenario: record.scenario,
    parentRef: record.parentRef,
    // One event per stage change, one for the terminal state, one for a
    // later revocation; a stale client event can therefore be ignored.
    eventSeq: index + 1 + (status === "RUNNING" ? 0 : 1) + (revoked ? 1 : 0),
    answerVersionRef: status === "READY" ? record.answer.answerVersion : undefined,
    sessionScope: "PUBLIC_GUEST",
    revoked: revoked || undefined,
  };
}

export function cancelResearchJob(
  ref: string
): ResearchJobRecord | undefined {
  const record = jobs.get(ref);
  if (!record) return undefined;
  if (!record.cancelledAt && researchJobView(record).status === "RUNNING") {
    record.cancelledAt = Date.now();
  }
  return record;
}

/** Removes a job so later reads are refused (WF-06 P0-07 guest clear). */
export function deleteResearchJob(ref: string): boolean {
  return jobs.delete(ref);
}

export function publishedAnswer(
  record: ResearchJobRecord
): PublishedAnswer | undefined {
  if (researchJobView(record).status !== "READY") return undefined;
  // WF-02 R15 / I14: a revoked answer is never served from the store.
  if (isAnswerRevoked(record)) return undefined;
  return record.answer;
}

export function createFollowUp(
  parentRef: string,
  question: string,
  scopeIds: string[],
  scenario?: ScenarioKey
): ResearchJobRecord | undefined {
  const parent = jobs.get(parentRef);
  if (!parent) return undefined;
  return createResearchJob({
    question,
    scopeIds,
    scenario: scenario ?? detectScenario(question),
    parentRef,
  });
}

export function getScenarioForQuestion(question: string): ScenarioKey {
  return detectScenario(question);
}
