import { evidencePackage } from "@/lib/assistant/evidence";
import { readableAnswerRecord } from "@/lib/assistant/research-access";
import { apiError, json, rateLimit } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/**
 * WF-03 §9 evidence package for an exact answer version. Rights are
 * re-evaluated on every request; `answerVersion` must match the version the
 * caller is inspecting, or the request is refused as superseded.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ ref: string }> }
) {
  const limited = rateLimit(request, "evidence", 60);
  if (limited) return limited;
  const { ref } = await params;
  const record = readableAnswerRecord(request, ref);
  if (record instanceof Response) return record;
  const search = new URL(request.url).searchParams;
  const version = search.get("answerVersion");
  if (version && version !== record.answer.answerVersion) {
    return apiError(
      "ANSWER_SUPERSEDED",
      "This answer version is no longer available for inspection.",
      409,
      { retryable: false }
    );
  }
  const citation = search.get("citation");
  return json({ evidence: evidencePackage(record, citation) });
}
