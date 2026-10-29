import {
  ComparisonError,
  comparisonJobView,
  createComparisonJob,
} from "@/lib/assistant/comparison-store";
import {
  apiError,
  asBoolean,
  bindOwner,
  guestSessionFrom,
  idempotencyKeyFrom,
  json,
  rateLimit,
  readJsonBody,
} from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const limited = rateLimit(request, "comparison", 10);
  if (limited) return limited;
  const body = await readJsonBody(request);
  const token = typeof body.token === "string" ? body.token : null;
  try {
    const { record, replayed } = createComparisonJob(
      body.request ?? body,
      token,
      asBoolean(body.acknowledged),
      idempotencyKeyFrom(request, body),
      guestSessionFrom(request)
    );
    bindOwner("comparison", record.ref, request);
    return json({ job: comparisonJobView(record), replayed }, 202);
  } catch (error) {
    if (error instanceof ComparisonError) {
      return apiError(error.code, error.message, error.status, {
        checks: error.checks,
      });
    }
    return apiError(
      "COMPARISON_FAILED",
      "The comparison could not be executed.",
      500
    );
  }
}
