import {
  ResearchValidationError,
  ScopeUnavailableError,
  createFollowUp,
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
  isOwner,
  json,
  notAvailable,
  rateLimit,
  readJsonBody,
} from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

// Same session + parent + Idempotency-Key returns the original follow-up
// (WF-02 C12 §8.1: one active submit, no duplicate turns).
const idempotent = new Map<string, string>();

export async function POST(
  request: Request,
  { params }: { params: Promise<{ ref: string }> }
) {
  const { ref } = await params;
  const limited = rateLimit(request, "research", 12);
  if (limited) return limited;
  if (!isOwner("research", ref, request)) {
    return notAvailable("PARENT_NOT_FOUND");
  }
  const body = await readJsonBody(request);
  const fixture = isScenarioKey(body.fixture) ? body.fixture : undefined;
  const key = idempotencyKeyFrom(request, body);
  const replayKey = key ? `${guestSessionFrom(request) ?? "anon"}:${ref}:${key}` : "";
  if (replayKey) {
    const existing = idempotent.get(replayKey);
    const record = existing ? getResearchJob(existing) : undefined;
    if (record) return json({ job: researchJobView(record), replayed: true }, 202);
  }
  try {
    const record = createFollowUp(
      ref,
      asString(body.question),
      asStringArray(body.scopeIds),
      fixture
    );
    if (!record) {
      return notAvailable("PARENT_NOT_FOUND");
    }
    bindOwner("research", record.ref, request);
    if (replayKey) idempotent.set(replayKey, record.ref);
    if (idempotent.size > 500) idempotent.clear();
    return json({ job: researchJobView(record) }, 202);
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
        "Check the follow-up question before submitting.",
        422,
        { fields: error.fields, retryable: false }
      );
    }
    return apiError(
      "SERVICE_UNAVAILABLE",
      "Research is temporarily unavailable; no answer has been published.",
      503,
      { retryAfterSeconds: 5 }
    );
  }
}
