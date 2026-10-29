import { json, rateLimit } from "@/lib/assistant/http";
import { sessionKey, stores } from "../../access/_policy/policy";

export const dynamic = "force-dynamic";

/**
 * SYNTHETIC · POST /api/assistant/auth/logout (WF-11 E12, P0 08).
 * There is no real session to revoke. This invalidates the demo's
 * outstanding return intents for this browser session and reports a
 * scoped outcome. It never claims that "all devices" were signed out.
 */
export async function POST(request: Request) {
  const limited = rateLimit(request, "auth-logout", 20);
  if (limited) return limited;
  const session = sessionKey(request);
  const { intents } = stores();
  let revokedIntents = 0;
  for (const [id, intent] of intents) {
    if (intent.guestSession === session) {
      intents.delete(id);
      revokedIntents += 1;
    }
  }
  return json({
    synthetic: true,
    signedOut: true,
    scope: "this-browser-demo-session",
    revokedIntents,
    revokedAt: new Date().toISOString(),
  });
}
