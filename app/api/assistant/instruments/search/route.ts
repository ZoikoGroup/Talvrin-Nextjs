import {
  resolveInstrumentIds,
  searchInstruments,
} from "@/lib/assistant/comparison-data";
import { METRIC_CATALOG_VERSION } from "@/lib/assistant/methods";
import { json, rateLimit } from "@/lib/assistant/http";
import type { InstrumentSearchResponse } from "@/lib/assistant/types";

export const dynamic = "force-dynamic";

/**
 * Authorised instrument resolver (WF-04 CMP-03, A05, A06). Only canonical
 * public records are returned; `ids` resolves an existing selection.
 */
export async function GET(request: Request) {
  const limited = rateLimit(request, "instrument-search", 60);
  if (limited) return limited;
  const params = new URL(request.url).searchParams;
  const ids = params.getAll("id").slice(0, 6);
  if (ids.length) {
    const response: InstrumentSearchResponse = {
      query: "",
      results: resolveInstrumentIds(ids),
      ambiguousTickers: [],
      resolverVersion: METRIC_CATALOG_VERSION,
    };
    return json(response);
  }
  const query = (params.get("q") ?? "").slice(0, 64);
  const { results, ambiguousTickers } = searchInstruments(query);
  const response: InstrumentSearchResponse = {
    query,
    results,
    ambiguousTickers,
    resolverVersion: METRIC_CATALOG_VERSION,
  };
  return json(response);
}
