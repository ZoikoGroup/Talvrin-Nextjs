import { alertPreflight } from "@/lib/assistant/notifications-data";
import { demoPrincipal, notificationError } from "@/lib/assistant/demo-principal";
import { json, rateLimit, readJsonBody } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/** NTF-13: concrete eligibility before create or resume. */
export async function POST(request: Request) {
  const limited = rateLimit(request, "alerts-preflight", 30);
  if (limited) return limited;
  const principal = demoPrincipal(request);
  if (principal instanceof Response) return principal;
  const body = await readJsonBody(request);
  try {
    return json(alertPreflight(principal, body.rule));
  } catch (error) {
    return notificationError(error);
  }
}
