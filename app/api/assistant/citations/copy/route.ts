import { copyCitationText } from "@/lib/assistant/evidence";
import { readableAnswerRecord } from "@/lib/assistant/research-access";
import {
  apiError,
  asString,
  json,
  rateLimit,
  readJsonBody,
} from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/**
 * POST /api/assistant/citations/copy (WF-10 EXP-16, WF-03 §7.1). The
 * citation line is assembled on the server after a rights check and never
 * contains excerpt text.
 */
export async function POST(request: Request) {
  const limited = rateLimit(request, "copy", 30);
  if (limited) return limited;
  const body = await readJsonBody(request);
  const record = readableAnswerRecord(request, asString(body.answerRef));
  if (record instanceof Response) return record;
  const text = copyCitationText(record, asString(body.sourceId));
  if (!text) {
    return apiError(
      "COPY_NOT_PERMITTED",
      "A citation for this source cannot be copied under current access rights.",
      403,
      { retryable: false }
    );
  }
  return json({ text });
}
