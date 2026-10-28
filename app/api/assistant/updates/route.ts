import { listUpdates } from "@/lib/assistant/notifications-data";
import { demoPrincipal, notificationError } from "@/lib/assistant/demo-principal";
import { json, rateLimit } from "@/lib/assistant/http";
import type { NotificationCategory } from "@/lib/assistant/types";

export const dynamic = "force-dynamic";

const CATEGORIES: NotificationCategory[] = ["RESEARCH", "EVIDENCE", "SERVICE"];

/** Principal-scoped inbox; unread counts come from the server (NTF-02). */
export async function GET(request: Request) {
  const limited = rateLimit(request, "updates", 60);
  if (limited) return limited;
  const principal = demoPrincipal(request);
  if (principal instanceof Response) return principal;
  const raw = new URL(request.url).searchParams.get("category");
  const category = CATEGORIES.includes(raw as NotificationCategory)
    ? (raw as NotificationCategory)
    : null;
  try {
    return json(listUpdates(principal, category));
  } catch (error) {
    return notificationError(error);
  }
}
