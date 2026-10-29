import type { ConfigResponse } from "@/lib/assistant/types";
import { FEATURE_FLAGS, FIXTURE_LABEL, SCOPES, STARTER_PROMPTS } from "@/lib/assistant/taxonomy";
import { json } from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

// Starter card -> approved template intent (WF-01 C09, A07). A card is only
// enabled when its intent is allowed and its scope is supported.
const STARTER_INTENT: Record<string, string> = {
  "starter-company": "company",
  "starter-bond": "bond",
  "starter-economy": "economy",
  "starter-fund": "etf",
};

export async function GET() {
  const config: ConfigResponse = {
    demo: true,
    fixtureLabel: FIXTURE_LABEL,
    scopes: SCOPES.map((scope) => ({
      id: scope.id,
      label: scope.label,
      supported: scope.supported,
      note: scope.note,
    })),
    starterPrompts: STARTER_PROMPTS.map((prompt) => ({
      ...prompt,
      intentId: STARTER_INTENT[prompt.id],
    })),
    limits: {
      questionMin: 8,
      questionMax: 2000,
      comparisonMax: 3,
    },
    publicResearchEnabled: true,
    allowedIntents: ["company", "bond", "economy", "etf", "comparison"],
    coverageMessage:
      "Scope and timeliness depend on instruments, data rights and edition. Nothing is presented as live without a verified provider and rights status.",
    legalCopyVersion: "legal-copy-2026-10",
    uiVersion: "assistant-ui-demo-2026.10",
    policyVersion: "public-policy-demo-2026.10",
    allowedScopes: SCOPES.filter((scope) => scope.supported).map((scope) => scope.id),
    // Closest existing compliance notice route; Legal must confirm (WF-01 C12).
    legalNoticeHref: "/legal/ai-terms",
    featureFlags: FEATURE_FLAGS,
    search: [
      {
        href: "/assistant/help",
        label: "Help centre",
        description: "How evidence, citations, rights and sessions work.",
      },
      {
        href: "/assistant/help#coverage",
        label: "Coverage",
        description: "What the public assistant can and cannot research.",
      },
      {
        href: "/assistant/report",
        label: "Report a citation",
        description: "Raise a claim-level evidence concern for human review.",
      },
    ],
  };

  return json(config);
}
