import { opaqueId } from "./format";

/**
 * Shared response envelope (WF-12 §8 / §8.1). Every response carries an
 * opaque requestId, both in the `x-request-id` header and, for JSON bodies,
 * as `requestId`, so the UI can show a safe reference without exposing
 * internals.
 */
export function newRequestId(): string {
  return opaqueId("req");
}

export function json(
  data: unknown,
  status = 200,
  headers: Record<string, string> = {}
): Response {
  const requestId = newRequestId();
  const body =
    data && typeof data === "object" && !Array.isArray(data)
      ? { ...(data as Record<string, unknown>), requestId }
      : data;
  return Response.json(body, {
    status,
    headers: {
      "cache-control": "no-store, max-age=0",
      "x-request-id": requestId,
      ...headers,
    },
  });
}

/**
 * Error envelope (WF-01 §7.3, WF-12 §8.1):
 * `{ error, code, safeMessage, retryable, retryAfterSeconds?, requestId }`.
 * `error` is kept as an alias of `safeMessage` for existing callers.
 */
export function apiError(
  code: string,
  message: string,
  status = 422,
  extra: Record<string, unknown> = {}
): Response {
  const retryAfterSeconds =
    typeof extra.retryAfterSeconds === "number"
      ? extra.retryAfterSeconds
      : undefined;
  const retryable =
    typeof extra.retryable === "boolean"
      ? extra.retryable
      : status === 429 || status === 503 || status >= 500;
  return json(
    {
      error: message,
      safeMessage: message,
      code,
      retryable,
      ...extra,
    },
    status,
    retryAfterSeconds !== undefined
      ? { "retry-after": String(retryAfterSeconds) }
      : {}
  );
}

/**
 * Deny without revealing whether a reference exists (WF-06 P0-04, WF-10
 * AC-22, WF-12 INT-06). Used both for unknown refs and for refs owned by a
 * different guest session.
 */
export function notAvailable(code = "NOT_AVAILABLE"): Response {
  return apiError(
    code,
    "That item is not available. It may have expired, been cleared, or belong to another browser session.",
    404,
    { retryable: false }
  );
}

/* ------------------------------------------------------------------ */
/* Rate limiting (WF-01 S08, WF-02 §11, WF-12 §9 RATE_LIMITED)          */
/* ------------------------------------------------------------------ */

const buckets = new Map<string, number[]>();

/**
 * In-memory sliding-window limiter for the demo server. Returns a 429
 * response with Retry-After when the caller is over the limit, otherwise
 * null. Production must use a shared limiter at the edge.
 */
export function rateLimit(
  request: Request,
  bucket: string,
  limit: number,
  windowMs = 60_000
): Response | null {
  const caller =
    request.headers.get(GUEST_SESSION_HEADER) ??
    request.headers.get("x-forwarded-for") ??
    "anonymous";
  const key = `${bucket}:${caller}`;
  const now = Date.now();
  const hits = (buckets.get(key) ?? []).filter((at) => now - at < windowMs);
  if (hits.length >= limit) {
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((windowMs - (now - hits[0])) / 1000)
    );
    buckets.set(key, hits);
    return apiError(
      "RATE_LIMITED",
      "Too many requests in a short time. Wait a moment, then try again.",
      429,
      { retryAfterSeconds, retryable: true }
    );
  }
  hits.push(now);
  buckets.set(key, hits);
  if (buckets.size > 2000) buckets.clear();
  return null;
}

/* ------------------------------------------------------------------ */
/* Guest session binding (WF-02 A01, WF-06 P0-04, WF-12 INT-06)         */
/* ------------------------------------------------------------------ */

/**
 * The client sends a per-tab opaque guest session key on every request.
 * In production this is an HttpOnly server session; in the demo it is
 * generated in sessionStorage so tabs never share guest research.
 */
export const GUEST_SESSION_HEADER = "x-talvrin-guest-session";

export function guestSessionFrom(request: Request): string | null {
  const value = request.headers.get(GUEST_SESSION_HEADER);
  return value && /^gs_[A-Za-z0-9]{8,64}$/.test(value) ? value : null;
}

const owners = new Map<string, string>();

export type OwnedKind = "research" | "comparison" | "export";

export function bindOwner(kind: OwnedKind, ref: string, request: Request) {
  const session = guestSessionFrom(request);
  if (session) owners.set(`${kind}:${ref}`, session);
  if (owners.size > 5000) {
    const first = owners.keys().next().value;
    if (first) owners.delete(first);
  }
}

/** True only when the caller's guest session created the reference. */
export function isOwner(
  kind: OwnedKind,
  ref: string,
  request: Request
): boolean {
  const owner = owners.get(`${kind}:${ref}`);
  const session = guestSessionFrom(request);
  return Boolean(owner && session && owner === session);
}

export function releaseOwner(kind: OwnedKind, ref: string) {
  owners.delete(`${kind}:${ref}`);
}

/* ------------------------------------------------------------------ */
/* Body helpers                                                         */
/* ------------------------------------------------------------------ */

export async function readJsonBody(
  request: Request
): Promise<Record<string, unknown>> {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object") return {};
    return body as Record<string, unknown>;
  } catch {
    return {};
  }
}

export function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

export function asBoolean(value: unknown): boolean {
  return value === true;
}

export function asStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

/** Idempotency key from the `Idempotency-Key` header or the body field. */
export function idempotencyKeyFrom(
  request: Request,
  body: Record<string, unknown>
): string {
  return (
    request.headers.get("idempotency-key") ?? asString(body.idempotencyKey)
  ).slice(0, 128);
}
