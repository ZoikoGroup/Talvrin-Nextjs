import {
  ResearchValidationError,
  ScopeUnavailableError,
  createResearchJob,
  getResearchJob,
  researchJobView,
} from "@/lib/assistant/research-store";
import { isScenarioKey } from "@/lib/assistant/scenario";
import {
  apiError,
  asString,
  asStringArray,
  bindOwner,
  guestSessionFrom,
  idempotencyKeyFrom,
  json,
  newRequestId,
  rateLimit,
  readJsonBody,
} from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

// Same guest session + same Idempotency-Key returns the original job
// instead of creating a duplicate (WF-01 A11, WF-12 §8.1).
const idempotent = new Map<string, string>();

/** WF-01 §7.2 accepted envelope: opaque job reference and next route only. */
function accepted(ref: string) {
  return {
    jobId: ref,
    status: "accepted" as const,
    next: `/assistant/session/${ref}`,
    correlationId: newRequestId(),
  };
}

export async function POST(request: Request) {
  const limited = rateLimit(request, "research", 12);
  if (limited) return limited;
  const body = await readJsonBody(request);
  const fixture = isScenarioKey(body.fixture) ? body.fixture : undefined;
  const key = idempotencyKeyFrom(request, body);
  const replayKey = key ? `${guestSessionFrom(request) ?? "anon"}:${key}` : "";
  if (replayKey) {
    const existing = idempotent.get(replayKey);
    const record = existing ? getResearchJob(existing) : undefined;
    if (record) {
      return json({ ...accepted(record.ref), job: researchJobView(record), replayed: true }, 202);
    }
  }
  try {
    const record = createResearchJob({
      question: asString(body.question),
      scopeIds: asStringArray(body.scopeIds),
      scenario: fixture,
    });
    bindOwner("research", record.ref, request);
    if (replayKey) idempotent.set(replayKey, record.ref);
    if (idempotent.size > 500) idempotent.clear();
    return json({ ...accepted(record.ref), job: researchJobView(record) }, 202);
  } catch (error) {
    if (error instanceof ScopeUnavailableError) {
      return apiError(
        "SCOPE_UNAVAILABLE",
        "This request is outside currently verified coverage.",
        422,
        { retryable: false }
      );
    }
    if (error instanceof ResearchValidationError) {
      return apiError(
        "INVALID_INPUT",
        "Check the question and scope before submitting.",
        422,
        { fields: error.fields, retryable: false }
      );
    }
    return apiError(
      "SERVICE_UNAVAILABLE",
      "The research job could not be created. Your question is kept; try again.",
      503,
      { retryAfterSeconds: 5 }
    );
  }
}
