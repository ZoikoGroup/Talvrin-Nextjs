import {
  cancelResearchJob,
  researchJobView,
} from "@/lib/assistant/research-store";
import { isOwner, json, notAvailable } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ ref: string }> }
) {
  const { ref } = await params;
  if (!isOwner("research", ref, request)) {
    return notAvailable("JOB_NOT_FOUND");
  }
  const record = cancelResearchJob(ref);
  if (!record) {
    return notAvailable("JOB_NOT_FOUND");
  }
  return json({ job: researchJobView(record) });
}
