import { updateItem } from "@/lib/assistant/notifications-data";
import { demoPrincipal, notificationError } from "@/lib/assistant/demo-principal";
import { json, rateLimit, readJsonBody } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/** Hide (not delete) or change read state, with a version check (409). */
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const limited = rateLimit(request, "updates-write", 30);
  if (limited) return limited;
  const principal = demoPrincipal(request);
  if (principal instanceof Response) return principal;
  const { id } = await params;
  const body = await readJsonBody(request);
  try {
    const item = updateItem(
      principal,
      id,
      {
        hidden: typeof body.hidden === "boolean" ? body.hidden : undefined,
        status:
          body.status === "READ" || body.status === "UNREAD"
            ? body.status
            : undefined,
      },
      typeof body.version === "number" ? body.version : null
    );
    return json({ item });
  } catch (error) {
    return notificationError(error);
  }
}
