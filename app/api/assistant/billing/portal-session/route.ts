import { apiError, rateLimit } from "@/lib/assistant/http";
import { OUTCOME_COPY } from "../../access/_policy/policy";

export const dynamic = "force-dynamic";

/**
 * SYNTHETIC · POST /api/assistant/billing/portal-session (WF-11 §10, E06).
 * A hosted billing portal needs step-up and an approved provider; neither
 * exists, so this always requires step-up and never creates a session.
 */
export async function POST(request: Request) {
  const limited = rateLimit(request, "billing", 10);
  if (limited) return limited;
  return apiError("MFA_STEP_UP_REQUIRED", OUTCOME_COPY.MFA_STEP_UP_REQUIRED, 403, {
    retryable: false,
  });
}
