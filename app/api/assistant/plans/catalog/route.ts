import { json } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/**
 * SYNTHETIC · GET /api/assistant/plans/catalog (WF-11 §10, E04, P0 23).
 * No approved commercial catalogue exists, so no plan, price or trial is
 * returned. The UI must show "unknown" rather than invent one.
 */
export async function GET() {
  return json({
    synthetic: true,
    configured: false,
    plans: [],
    message: "No approved plan catalogue is configured.",
  });
}
