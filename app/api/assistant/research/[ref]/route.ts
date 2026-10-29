import {
  deleteResearchJob,
  getResearchJob,
  researchJobView,
} from "@/lib/assistant/research-store";
import {
  isOwner,
  json,
  notAvailable,
  releaseOwner,
} from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ ref: string }> }
) {
  const { ref } = await params;
  const record = getResearchJob(ref);
  // Unknown refs and refs from another guest session get the same answer.
  if (!record || !isOwner("research", ref, request)) {
    return notAvailable("JOB_NOT_FOUND");
  }
  return json({ job: researchJobView(record) });
}

/** Guest clear: the job stops being readable immediately (WF-06 P0-07). */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ ref: string }> }
) {
  const { ref } = await params;
  if (isOwner("research", ref, request)) {
    deleteResearchJob(ref);
    releaseOwner("research", ref);
  }
  // Idempotent and non-revealing: same response whether or not it existed.
  return json({ cleared: true });
}
