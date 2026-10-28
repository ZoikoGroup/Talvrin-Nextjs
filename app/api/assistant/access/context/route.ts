import type { AccessContextResponse } from "@/lib/assistant/types";
import { json } from "@/lib/assistant/http";
import {
  DEMO_SUBJECT,
  DEMO_TENANT,
  POLICY_VERSION,
  fixtureFrom,
  isDemoAccount,
} from "../_policy/policy";

export const dynamic = "force-dynamic";

/**
 * SYNTHETIC · GET /api/assistant/access/context (WF-11 §10 "access/context").
 * Returns account and tenant scope as opaque identifiers only; no PII.
 */
export async function GET(request: Request) {
  const fixture = fixtureFrom(new URL(request.url).searchParams.get("fixture"));
  const now = new Date().toISOString();
  const account = isDemoAccount(request);
  const expired = account && fixture === "SESSION_EXPIRED";
  const disabled = account && fixture === "IDENTITY_DISABLED";
  const active = account && !expired && !disabled;
  const body: AccessContextResponse = {
    synthetic: true,
    state: expired
      ? "SESSION_EXPIRED"
      : disabled
        ? "IDENTITY_DISABLED"
        : account
          ? "AUTHENTICATED"
          : "GUEST",
    subjectScope: active ? DEMO_SUBJECT : null,
    tenantScope: active ? DEMO_TENANT : null,
    assurance: active ? "DEMO" : "NONE",
    authTime: active ? now : null,
    sessionVersion: 1,
    evaluatedAt: now,
    policyVersion: POLICY_VERSION,
  };
  return json(body);
}
