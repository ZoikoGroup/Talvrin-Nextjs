import { ALERT_SUBJECTS, commitAlert, listAlerts } from "@/lib/assistant/notifications-data";
import { demoPrincipal, notificationError } from "@/lib/assistant/demo-principal";
import {
  asString,
  idempotencyKeyFrom,
  json,
  rateLimit,
  readJsonBody,
} from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const principal = demoPrincipal(request);
  if (principal instanceof Response) return principal;
  try {
    return json({ rules: listAlerts(principal), subjects: ALERT_SUBJECTS });
  } catch (error) {
    return notificationError(error);
  }
}

/** Server-acknowledged, versioned, idempotent commit (AC-12, 03-06). */
export async function POST(request: Request) {
  const limited = rateLimit(request, "alerts-write", 10);
  if (limited) return limited;
  const principal = demoPrincipal(request);
  if (principal instanceof Response) return principal;
  const body = await readJsonBody(request);
  try {
    const { rule, replayed } = commitAlert(
      principal,
      body.rule,
      asString(body.preflight_token),
      body.consent === true,
      idempotencyKeyFrom(request, body)
    );
    return json({ rule, replayed }, replayed ? 200 : 201);
  } catch (error) {
    return notificationError(error);
  }
}
