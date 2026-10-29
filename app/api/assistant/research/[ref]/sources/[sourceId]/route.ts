import { sourceDetail } from "@/lib/assistant/evidence";
import { readableAnswerRecord } from "@/lib/assistant/research-access";
import { json, notAvailable, rateLimit } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/**
 * WF-03 §9.1 source detail. The excerpt is present only when the current
 * rights decision permits it; otherwise metadata with a typed reason.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ ref: string; sourceId: string }> }
) {
  const limited = rateLimit(request, "evidence", 60);
  if (limited) return limited;
  const { ref, sourceId } = await params;
  const record = readableAnswerRecord(request, ref);
  if (record instanceof Response) return record;
  const detail = sourceDetail(record, sourceId);
  if (!detail) return notAvailable("SOURCE_NOT_FOUND");
  return json({ source: detail });
}
