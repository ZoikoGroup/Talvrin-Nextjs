import {
  advanceExportJob,
  cancelExport,
  exportJobView,
  getExportJob,
} from "@/lib/assistant/exports";
import { buildExportArtifact } from "@/lib/assistant/artifacts";
import { isOwner, json, notAvailable } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/** GET /api/assistant/exports/{id}: authoritative job state (EXP-13). */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const record = getExportJob(id);
  if (!record || !isOwner("export", id, request)) {
    return notAvailable("EXPORT_NOT_FOUND");
  }
  await advanceExportJob(record, buildExportArtifact);
  return json({ job: exportJobView(record) });
}

/**
 * DELETE /api/assistant/exports/{id}: cancels a pending job or withdraws a
 * ready one. Copies already downloaded are not erased (AC-27).
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const record = getExportJob(id);
  if (!record || !isOwner("export", id, request)) {
    return notAvailable("EXPORT_NOT_FOUND");
  }
  cancelExport(record);
  return json({
    job: exportJobView(record),
    externalCopies:
      "Copies already downloaded are outside Talvrin controls and are not erased.",
  });
}
