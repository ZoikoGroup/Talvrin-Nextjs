import { ExportError, exportPreflight } from "@/lib/assistant/exports";
import {
  apiError,
  asString,
  guestSessionFrom,
  isOwner,
  json,
  notAvailable,
  rateLimit,
  readJsonBody,
} from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/**
 * POST /api/assistant/exports/preflight (WF-10 §10 preflight).
 * Entitlement is resolved from the server-held grant for the caller's
 * session; no client-supplied account flag is read.
 */
export async function POST(request: Request) {
  const limited = rateLimit(request, "export-preflight", 30);
  if (limited) return limited;
  const body = await readJsonBody(request);
  if (!isOwner("research", asString(body.answerRef), request)) {
    return notAvailable("ANSWER_NOT_FOUND");
  }
  try {
    const result = exportPreflight({
      principal: guestSessionFrom(request),
      answerRef: asString(body.answerRef),
      answerVersion: asString(body.answerVersion),
      format: asString(body.format),
      purpose: asString(body.purpose),
      destination: asString(body.destination),
    });
    return json(result);
  } catch (error) {
    if (error instanceof ExportError) {
      return apiError(error.code, error.message, error.status);
    }
    return apiError(
      "EXPORT_PREFLIGHT_FAILED",
      "The export preflight could not be completed.",
      500
    );
  }
}
