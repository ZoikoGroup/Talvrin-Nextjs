import type { EntitlementsResponse } from "@/lib/assistant/types";
import { opaqueId } from "@/lib/assistant/format";
import { apiError, json, rateLimit } from "@/lib/assistant/http";
import {
  DEMO_SUBJECT,
  IDENTITY_DISABLED_COPY,
  OUTCOME_COPY,
  POLICY_VERSION,
  SESSION_EXPIRED_COPY,
  effectiveEntitlements,
  fixtureFrom,
  isDemoAccount,
} from "../_policy/policy";

export const dynamic = "force-dynamic";

/**
 * SYNTHETIC · GET /api/assistant/access/entitlements (WF-11 §10.1).
 * Effective feature states with reasons and as-of times. `?fixture=` lets
 * the demo reproduce WF-11 §09 states; a real service would never accept it.
 */
export async function GET(request: Request) {
  const limited = rateLimit(request, "access-entitlements", 30);
  if (limited) return limited;
  const fixture = fixtureFrom(new URL(request.url).searchParams.get("fixture"));

  if (!isDemoAccount(request)) {
    return apiError("AUTH_REQUIRED", OUTCOME_COPY.AUTH_REQUIRED, 401, {
      retryable: false,
    });
  }
  if (fixture === "SESSION_EXPIRED") {
    return apiError("AUTH_REQUIRED", SESSION_EXPIRED_COPY, 401, {
      retryable: false,
      reason: "SESSION_EXPIRED",
    });
  }
  if (fixture === "IDENTITY_DISABLED") {
    // Account hold: no access, no object data, safe support route only.
    return apiError("ACCOUNT_SCOPE_DENIED", IDENTITY_DISABLED_COPY, 403, {
      retryable: false,
      reason: "IDENTITY_DISABLED",
    });
  }
  if (fixture === "POLICY_UNAVAILABLE") {
    // Fail closed (§5.2): unknown policy state is deny.
    return apiError(
      "POLICY_UNAVAILABLE",
      OUTCOME_COPY.POLICY_UNAVAILABLE,
      503,
      { retryable: true, retryAfterSeconds: 10 }
    );
  }
  if (fixture === "ENTITLEMENTS_PENDING") {
    // Simulates a slow entitlement service so the skeleton state shows.
    await new Promise((resolve) => setTimeout(resolve, 2500));
  }

  const evaluatedAt = new Date().toISOString();
  const body: EntitlementsResponse = {
    synthetic: true,
    decisionId: opaqueId("dec"),
    subjectScope: DEMO_SUBJECT,
    planDisplayName: null,
    planState: fixture === "BILLING_PENDING" ? "pending" : "unknown",
    state:
      fixture === "BILLING_PENDING" ? "BILLING_PENDING" : "ACCESS_EVALUATED",
    entitlements: effectiveEntitlements(fixture, evaluatedAt),
    evaluatedAt,
    policyVersion: POLICY_VERSION,
  };
  return json(body);
}
