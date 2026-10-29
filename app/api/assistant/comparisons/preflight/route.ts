import {
  ComparisonError,
  createPreflight,
} from "@/lib/assistant/comparison-store";
import { apiError, guestSessionFrom, json, rateLimit, readJsonBody } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const limited = rateLimit(request, "comparison-preflight", 30);
  if (limited) return limited;
  const body = await readJsonBody(request);
  try {
    const result = createPreflight(body.request ?? body, guestSessionFrom(request));
    return json(result);
  } catch (error) {
    if (error instanceof ComparisonError) {
      return apiError(error.code, error.message, error.status);
    }
    return apiError(
      "PREFLIGHT_FAILED",
      "The comparison preflight could not be completed.",
      500
    );
  }
}
