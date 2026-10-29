import { openUpdate } from "@/lib/assistant/notifications-data";
import { demoPrincipal, notificationError } from "@/lib/assistant/demo-principal";
import { json, rateLimit } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/** Resolves the opaque deeplink only after re-checking access (AC-06). */
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const limited = rateLimit(request, "updates-write", 30);
  if (limited) return limited;
  const principal = demoPrincipal(request);
  if (principal instanceof Response) return principal;
  const { id } = await params;
  try {
    return json(openUpdate(principal, id));
  } catch (error) {
    return notificationError(error);
  }
}
