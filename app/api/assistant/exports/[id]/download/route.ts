import {
  ExportError,
  advanceExportJob,
  exportJobView,
  getExportJob,
  issueDownloadToken,
  redeemDownloadToken,
} from "@/lib/assistant/exports";
import { buildExportArtifact } from "@/lib/assistant/artifacts";
import {
  apiError,
  guestSessionFrom,
  isOwner,
  json,
  newRequestId,
  notAvailable,
  rateLimit,
} from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

function fail(error: unknown, fallback: string) {
  if (error instanceof ExportError) {
    if (error.code === "EXPORT_NOT_FOUND") return notAvailable("EXPORT_NOT_FOUND");
    return apiError(error.code, error.message, error.status, { retryable: false });
  }
  return apiError("EXPORT_DOWNLOAD_FAILED", fallback, 500);
}

/**
 * POST /api/assistant/exports/{id}/download (WF-10 §10).
 * Re-authorises identity (session owner), entitlement (server grant), the
 * pinned revision, current rights and object expiry, then issues a one-use
 * token with a short TTL. No client-supplied account flag is read.
 */
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const limited = rateLimit(request, "export-download-token", 10);
  if (limited) return limited;
  const { id } = await params;
  const record = getExportJob(id);
  if (!record || !isOwner("export", id, request)) {
    return notAvailable("EXPORT_NOT_FOUND");
  }
  await advanceExportJob(record, buildExportArtifact);
  try {
    const grant = issueDownloadToken(record, guestSessionFrom(request));
    return json({ download: grant, job: exportJobView(record) });
  } catch (error) {
    return fail(error, "The download could not be authorised.");
  }
}

/**
 * GET /api/assistant/exports/{id}/download?token=… returns the artifact.
 * The token is one-use, bound to this session and export, and every check
 * runs again before bytes are returned. The guest session header is
 * required, so a copied URL does not work in another browser session.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const token = new URL(request.url).searchParams.get("token") ?? "";
  const record = getExportJob(id);
  if (!record || !isOwner("export", id, request)) {
    return notAvailable("EXPORT_NOT_FOUND");
  }
  if (!token) {
    return apiError(
      "DOWNLOAD_TOKEN_REQUIRED",
      "Request the download from the export page; direct links are not accepted.",
      401,
      { retryable: false }
    );
  }
  try {
    const artifact = redeemDownloadToken(record, token, guestSessionFrom(request));
    return new Response(
      new Blob([artifact.bytes as BlobPart], { type: artifact.contentType }),
      {
        status: 200,
        headers: {
          "content-type": artifact.contentType,
          "content-length": String(artifact.size),
          "content-disposition": `attachment; filename="${artifact.fileName}"`,
          "cache-control": "no-store, max-age=0",
          "x-content-type-options": "nosniff",
          "x-talvrin-sha256": artifact.sha256,
          "x-talvrin-manifest": record.manifestHash,
          "x-request-id": newRequestId(),
        },
      }
    );
  } catch (error) {
    return fail(error, "The package could not be delivered.");
  }
}
