import { markRead } from "@/lib/assistant/notifications-data";
import { demoPrincipal, notificationError } from "@/lib/assistant/demo-principal";
import { asStringArray, json, rateLimit, readJsonBody } from "@/lib/assistant/http";
import type { NotificationCategory } from "@/lib/assistant/types";

export const dynamic = "force-dynamic";

const SCOPES = ["ALL", "RESEARCH", "EVIDENCE", "SERVICE"];

/** Bulk mark read with an explicit, named scope (AC-31). Idempotent. */
export async function POST(request: Request) {
  const limited = rateLimit(request, "updates-write", 30);
  if (limited) return limited;
  const principal = demoPrincipal(request);
  if (principal instanceof Response) return principal;
  const body = await readJsonBody(request);
  const ids = asStringArray(body.ids).slice(0, 100);
  const category = SCOPES.includes(String(body.category))
    ? (body.category as NotificationCategory | "ALL")
    : "ALL";
  try {
    return json(markRead(principal, ids.length ? { ids } : { category }));
  } catch (error) {
    return notificationError(error);
  }
}
