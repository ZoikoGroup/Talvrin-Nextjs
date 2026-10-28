import { comparisonCatalog } from "@/lib/assistant/comparison-data";
import { json } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/** Metric, period, currency and method catalogue for WF-04 (CMP-06–CMP-09). */
export async function GET() {
  return json({ catalog: comparisonCatalog() });
}
