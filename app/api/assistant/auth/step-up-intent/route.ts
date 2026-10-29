import { apiError, rateLimit } from "@/lib/assistant/http";
import { OUTCOME_COPY } from "../../access/_policy/policy";

export const dynamic = "force-dynamic";

/**
 * SYNTHETIC · POST /api/assistant/auth/step-up-intent (WF-11 §10, A10).
 * No identity provider can perform a stronger check, so the sensitive
 * action stays blocked instead of being waved through.
 */
export async function POST(request: Request) {
  const limited = rateLimit(request, "auth-step-up", 10);
  if (limited) return limited;
  return apiError("POLICY_UNAVAILABLE", OUTCOME_COPY.POLICY_UNAVAILABLE, 503, {
    retryable: false,
  });
}
