import { redactedSourceRecords } from "@/lib/assistant/evidence";
import { readableAnswerRecord } from "@/lib/assistant/research-access";
import { json, rateLimit } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/**
 * Published answer plus rights-filtered source records. Excerpts are
 * removed on the server unless the current licence permits them (WF-03 AC03).
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ ref: string }> }
) {
  const limited = rateLimit(request, "answer", 60);
  if (limited) return limited;
  const { ref } = await params;
  const record = readableAnswerRecord(request, ref);
  if (record instanceof Response) return record;
  return json({
    answer: record.answer,
    sources: redactedSourceRecords(record),
  });
}
