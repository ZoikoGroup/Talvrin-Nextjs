import {
  ExportError,
  entitlementView,
  issueDemoGrant,
  revokeDemoGrant,
} from "@/lib/assistant/exports";
import { apiError, guestSessionFrom, json, rateLimit } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/**
 * Mock export entitlement for the caller's browser session.
 *
 * Stands in for the IAM + commercial entitlement service (WF-11). The grant
 * is held server-side, bound to the guest session header, expires after a
 * short TTL and is re-checked at preflight, create and download. It is a
 * synthetic demo grant, not a customer plan, licence or approval.
 */
export async function GET(request: Request) {
  return json({ entitlement: entitlementView(guestSessionFrom(request)) });
}

export async function POST(request: Request) {
  const limited = rateLimit(request, "export-entitlement", 5);
  if (limited) return limited;
  try {
    return json({ entitlement: issueDemoGrant(guestSessionFrom(request)) }, 201);
  } catch (error) {
    if (error instanceof ExportError) {
      return apiError(error.code, error.message, error.status);
    }
    return apiError("ENTITLEMENT_FAILED", "Access could not be checked.", 500);
  }
}

export async function DELETE(request: Request) {
  return json({ entitlement: revokeDemoGrant(guestSessionFrom(request)) });
}
