import {
  ReferenceNotAvailableError,
  resolveClaimContext,
} from "@/lib/assistant/cases";
import { apiError, isOwner, json, rateLimit } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/**
 * GET /research/claims/{ref}/report-context equivalent (WF-08 §10, HLP-10,
 * HLP-11, AC-04/05/06). Rights are re-evaluated on every call. A forged
 * reference, or one from another session, gets the same 404 as an unknown
 * one.
 */
export async function GET(request: Request) {
  const limited = rateLimit(request, "case-context", 60);
  if (limited) return limited;
  const params = new URL(request.url).searchParams;
  try {
    const context = resolveClaimContext(
      {
        answerRef: params.get("answerRef") ?? undefined,
        comparisonRef: params.get("comparisonRef") ?? undefined,
        claimId: params.get("claimId") ?? undefined,
        sourceId: params.get("sourceId") ?? undefined,
      },
      (kind, ref) => isOwner(kind, ref, request)
    );
    return json({ context });
  } catch (error) {
    if (error instanceof ReferenceNotAvailableError) {
      return apiError(
        "REFERENCE_NOT_AVAILABLE",
        "This reference is not available for a report. It may have expired, not be ready yet, or belong to another browser session.",
        404,
        { retryable: false }
      );
    }
    return apiError(
      "CONTEXT_UNAVAILABLE",
      "The claim context could not be loaded.",
      503
    );
  }
}
