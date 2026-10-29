import { copyAnswerText } from "@/lib/assistant/evidence";
import { readableAnswerRecord } from "@/lib/assistant/research-access";
import { json, rateLimit } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/**
 * WF-02 I06 / C11 / A17: plain-text answer with numbered citations, built on
 * the server so restricted excerpts and licensed values are never included.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ ref: string }> }
) {
  const limited = rateLimit(request, "copy", 30);
  if (limited) return limited;
  const { ref } = await params;
  const record = readableAnswerRecord(request, ref);
  if (record instanceof Response) return record;
  return json({ text: copyAnswerText(record) });
}
