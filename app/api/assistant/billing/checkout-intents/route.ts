import { apiError, rateLimit } from "@/lib/assistant/http";
import { OUTCOME_COPY } from "../../access/_policy/policy";

export const dynamic = "force-dynamic";

/**
 * SYNTHETIC · POST /api/assistant/billing/checkout-intents (WF-11 §10, E05,
 * P0 26/37). No approved SKU or checkout handoff exists, so no checkout can
 * start, from the UI or from chat text.
 */
export async function POST(request: Request) {
  const limited = rateLimit(request, "billing", 10);
  if (limited) return limited;
  return apiError("FEATURE_NOT_RELEASED", OUTCOME_COPY.FEATURE_NOT_RELEASED, 403, {
    retryable: false,
  });
}
