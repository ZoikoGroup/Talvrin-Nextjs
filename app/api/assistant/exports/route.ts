import { ExportError, createExport, exportJobView } from "@/lib/assistant/exports";
import {
  apiError,
  asBoolean,
  asString,
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

/**
 * POST /api/assistant/exports (WF-10 §10 create; EXP-12, AC-21, AC-39).
 * Requires a fresh preflight decision, the reviewed manifest hash and an
 * idempotency key. Identical retries return the same job; reusing a key with
 * a different body is refused with 409.
 */
export async function POST(request: Request) {
  const limited = rateLimit(request, "export", 6);
  if (limited) return limited;
  const body = await readJsonBody(request);
  // An export may only be built from research this guest session owns.
  if (!isOwner("research", asString(body.answerRef), request)) {
    return notAvailable("ANSWER_NOT_FOUND");
  }
  try {
    const { record, replayed } = createExport({
      principal: guestSessionFrom(request),
      answerRef: asString(body.answerRef),
      answerVersion: asString(body.answerVersion),
      format: asString(body.format),
      purpose: asString(body.purpose),
      destination: asString(body.destination),
      acknowledged: asBoolean(body.acknowledged),
      idempotencyKey: idempotencyKeyFrom(request, body),
      manifestHash: asString(body.manifestHash),
      decisionId: asString(body.decisionId),
    });
    bindOwner("export", record.id, request);
    return json({ job: exportJobView(record), replayed }, 202);
  } catch (error) {
    if (error instanceof ExportError) {
      return apiError(
        error.code,
        error.message,
        error.status,
        error.retryAfterSeconds !== undefined
          ? { retryAfterSeconds: error.retryAfterSeconds, retryable: true }
          : {}
      );
    }
    return apiError(
      "EXPORT_FAILED",
      "The citation package could not be queued.",
      500
    );
  }
}
