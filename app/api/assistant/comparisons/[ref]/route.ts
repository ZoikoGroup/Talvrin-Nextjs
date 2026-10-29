import {
  comparisonJobView,
  getComparisonJob,
} from "@/lib/assistant/comparison-store";
import { getSources } from "@/lib/assistant/sources";
import { isOwner, json, notAvailable } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/**
 * Comparison job view plus rights-filtered source records. Rights are
 * re-evaluated on every read; excerpts leave the server only when the
 * licence permits display and quotation (WF-05 RES-12, WF-03 AC03).
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ ref: string }> }
) {
  const { ref } = await params;
  const record = getComparisonJob(ref);
  if (!record || !isOwner("comparison", ref, request)) {
    return notAvailable("COMPARISON_NOT_FOUND");
  }
  const job = comparisonJobView(record);
  const sources = job.result
    ? getSources(job.result.sources).map((source) => ({
        ...source,
        excerpt:
          source.rights.display && source.rights.quote && source.excerpt
            ? source.excerpt.slice(0, source.rights.excerptLimit)
            : null,
      }))
    : [];
  return json({ job, sources });
}
