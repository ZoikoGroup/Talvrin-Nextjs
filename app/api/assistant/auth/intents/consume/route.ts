import type { AuthIntentResolution } from "@/lib/assistant/types";
import {
  apiError,
  asString,
  json,
  rateLimit,
  readJsonBody,
} from "@/lib/assistant/http";
import {
  OUTCOME_COPY,
  sessionKey,
  stores,
} from "../../../access/_policy/policy";

export const dynamic = "force-dynamic";

/**
 * SYNTHETIC · POST /api/assistant/auth/intents/consume.
 * Resolves a return intent exactly once, for the session that created it.
 * Expired, replayed or foreign intents get AUTH_INTENT_EXPIRED.
 */
export async function POST(request: Request) {
  const limited = rateLimit(request, "auth-intents-consume", 20);
  if (limited) return limited;
  const body = await readJsonBody(request);
  const intentId = asString(body.intentId).slice(0, 80);
  const intent = stores().intents.get(intentId);
  const now = Date.now();
  if (
    !intent ||
    intent.consumedAt !== null ||
    intent.expiresAt <= now ||
    intent.guestSession !== sessionKey(request)
  ) {
    return apiError(
      "AUTH_INTENT_EXPIRED",
      OUTCOME_COPY.AUTH_INTENT_EXPIRED,
      410,
      { retryable: false }
    );
  }
  intent.consumedAt = now;
  const payload: AuthIntentResolution = {
    synthetic: true,
    actionId: intent.actionId,
    returnPath: intent.returnPath,
  };
  return json(payload);
}
