import type { AuthActionId, AuthIntentResponse } from "@/lib/assistant/types";
import { opaqueId } from "@/lib/assistant/format";
import {
  apiError,
  asString,
  json,
  rateLimit,
  readJsonBody,
} from "@/lib/assistant/http";
import {
  AUTH_ACTIONS,
  INTENT_TTL_MS,
  safeReturnPath,
  sessionKey,
  stores,
} from "../../access/_policy/policy";

export const dynamic = "force-dynamic";

/**
 * SYNTHETIC · POST /api/assistant/auth/intents (WF-11 §5.1 step 1, A14).
 * Issues an opaque, one-time, short-lived nonce. The return path stays on
 * the server, bound to the guest session; only the nonce travels.
 */
export async function POST(request: Request) {
  const limited = rateLimit(request, "auth-intents", 20);
  if (limited) return limited;
  const body = await readJsonBody(request);
  const actionId = asString(body.actionId) as AuthActionId;
  if (!AUTH_ACTIONS.includes(actionId)) {
    return apiError("INVALID_INPUT", "That action cannot start sign-in.", 422, {
      fields: { actionId: "Unknown action." },
      retryable: false,
    });
  }
  const intentId = opaqueId("ain");
  const expiresAt = Date.now() + INTENT_TTL_MS;
  stores().intents.set(intentId, {
    actionId,
    // External or non-allowlisted paths collapse to the safe default (P0 03).
    returnPath: safeReturnPath(body.returnPath),
    guestSession: sessionKey(request),
    expiresAt,
    consumedAt: null,
  });
  const payload: AuthIntentResponse = {
    synthetic: true,
    intentId,
    actionId,
    expiresAt: new Date(expiresAt).toISOString(),
  };
  return json(payload, 201);
}
