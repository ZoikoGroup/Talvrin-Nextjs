import { transitionAlert } from "@/lib/assistant/notifications-data";
import { demoPrincipal, notificationError } from "@/lib/assistant/demo-principal";
import { apiError, asString, json, rateLimit, readJsonBody } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

const ACTIONS = ["pause", "resume", "unsubscribe"] as const;

/** Pause, resume (fresh preflight + consent) or unsubscribe (NTF-19/20). */
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const limited = rateLimit(request, "alerts-write", 20);
  if (limited) return limited;
  const principal = demoPrincipal(request);
  if (principal instanceof Response) return principal;
  const { id } = await params;
  const body = await readJsonBody(request);
  const action = ACTIONS.find((item) => item === body.action);
  if (!action || typeof body.version !== "number") {
    return apiError("INVALID_PAYLOAD", "Choose pause, resume or unsubscribe.", 422, {
      retryable: false,
    });
  }
  try {
    const rule = transitionAlert(
      principal,
      id,
      action,
      body.version,
      asString(body.preflight_token) || null,
      body.consent === true
    );
    return json({ rule });
  } catch (error) {
    return notificationError(error);
  }
}
