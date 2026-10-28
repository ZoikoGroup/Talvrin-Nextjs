import { apiError, guestSessionFrom } from "./http";
import { NotificationError } from "./notifications-data";

/**
 * Synthetic account principal for mock account routes (WF-09, WF-11). The
 * demo identity is asserted by a browser header, which a real system must
 * never trust. The principal is still bound to the per-tab session key so
 * one tab cannot read another tab's demo inbox.
 */
export function demoPrincipal(request: Request): string | Response {
  const session = guestSessionFrom(request);
  if (!session || request.headers.get("x-talvrin-demo-mode") !== "account") {
    return apiError(
      "AUTH_REQUIRED",
      "Sign in to see account updates. Guest research shows its status on the research page only.",
      401,
      { retryable: false }
    );
  }
  return session;
}

export function notificationError(error: unknown): Response {
  if (error instanceof NotificationError) {
    return apiError(error.code, error.message, error.status, {
      retryable: error.status >= 500,
    });
  }
  return apiError("UPDATES_UNAVAILABLE", "Updates unavailable.", 503, {
    retryAfterSeconds: 10,
  });
}
