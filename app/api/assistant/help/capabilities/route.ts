import { helpCapabilities } from "@/lib/assistant/help-data";
import { json } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

/** GET /public-help/capabilities equivalent (WF-08 §10, AC-14). Public-safe. */
export async function GET() {
  return json({ capabilities: helpCapabilities() });
}
