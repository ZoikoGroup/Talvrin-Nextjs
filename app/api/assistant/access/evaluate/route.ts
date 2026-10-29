import type {
  AccessEvaluation,
  AccessOutcomeCode,
} from "@/lib/assistant/types";
import { opaqueId } from "@/lib/assistant/format";
import { asString, json, rateLimit, readJsonBody } from "@/lib/assistant/http";
import {
  DEMO_TENANT,
  IDENTITY_DISABLED_COPY,
  OUTCOME_COPY,
  POLICY_VERSION,
  SESSION_EXPIRED_COPY,
  STEP_UP_FEATURES,
  effectiveEntitlements,
  fixtureFrom,
  isDemoAccount,
} from "../_policy/policy";

export const dynamic = "force-dynamic";

const PUBLIC_FEATURES = new Set(["research.public", "research.session"]);

/**
 * SYNTHETIC · POST /api/assistant/access/evaluate (WF-11 §5.2).
 * allow = authenticated_if_required AND tenant_scope_allowed AND
 * feature_enabled AND quota_available AND source_rights_permit AND
 * required_auth_assurance_met. Short-circuits on the first deny; unknown
 * state is deny. Client-asserted plan fields are ignored (§16 fixtures).
 */
export async function POST(request: Request) {
  const limited = rateLimit(request, "access-evaluate", 30);
  if (limited) return limited;
  const body = await readJsonBody(request);
  const feature = asString(body.feature).slice(0, 80);
  const fixture = fixtureFrom(body.fixture);
  const evaluatedAt = new Date().toISOString();

  const result = (
    decision: "allow" | "deny",
    code: AccessOutcomeCode | null,
    message?: string
  ) => {
    const payload: AccessEvaluation = {
      synthetic: true,
      decisionId: opaqueId("dec"),
      feature,
      decision,
      code,
      userSafeMessage:
        message ?? (code ? OUTCOME_COPY[code] : "Allowed for this request."),
      policyVersion: POLICY_VERSION,
      evaluatedAt,
    };
    return json(payload);
  };

  if (fixture === "POLICY_UNAVAILABLE") {
    return result("deny", "POLICY_UNAVAILABLE");
  }
  const isPublic = PUBLIC_FEATURES.has(feature);
  if (!isPublic) {
    if (!isDemoAccount(request)) return result("deny", "AUTH_REQUIRED");
    if (fixture === "SESSION_EXPIRED") {
      return result("deny", "AUTH_REQUIRED", SESSION_EXPIRED_COPY);
    }
  }
  if (fixture === "IDENTITY_DISABLED" && !isPublic) {
    return result("deny", "ACCOUNT_SCOPE_DENIED", IDENTITY_DISABLED_COPY);
  }
  const tenant = asString(body.tenantScope);
  if (tenant && tenant !== DEMO_TENANT) {
    return result("deny", "ACCOUNT_SCOPE_DENIED");
  }
  if (
    STEP_UP_FEATURES.has(feature) ||
    (fixture === "STEP_UP_REQUIRED" && !isPublic)
  ) {
    return result("deny", "MFA_STEP_UP_REQUIRED");
  }
  const entitlement = effectiveEntitlements(fixture, evaluatedAt).find(
    (item) => item.feature === feature
  );
  if (!entitlement) return result("deny", "FEATURE_NOT_RELEASED");
  if (entitlement.decision === "allow") return result("allow", null);
  if (entitlement.decision === "review_required") {
    // Feature allowed; per-source rights are still checked at use time.
    return result("allow", "SOURCE_RIGHTS_CHECK_REQUIRED");
  }
  return result(
    "deny",
    entitlement.reasons[0] ?? "POLICY_UNAVAILABLE",
    entitlement.reasonText
  );
}
