import type { HelpArticle, HelpCapabilities } from "./types";
import {
  CASE_NOTICE_PURPOSE,
  CASE_NOTICE_VERSION,
  CASE_TYPES,
  DESCRIPTION_MAX,
  DESCRIPTION_MIN,
} from "./cases";

/** Approved public corpus version (HLP-03, AC-02). */
export const HELP_CORPUS_VERSION = "public-help-corpus-demo-2026-10";
export const HELP_COPY_REVISION = "wf08-copy-demo-2026-10";

export const HELP_CATEGORIES = [
  "Research basics",
  "Evidence & citations",
  "Data rights",
  "Sessions & access",
  "Troubleshooting",
  "Policies",
];

export const HELP_ARTICLES: HelpArticle[] = [
  {
    id: "help-asking",
    title: "How to ask a researchable question",
    category: "Research basics",
    summary:
      "Name the entity, the period and the measure. Talvrin answers evidence questions, not open-ended opinions.",
    body: [
      "A good question identifies what should be measured, for which entity, and over which period. For example: 'Summarize Meridian Grid plc's audited revenue for the latest financial year' is researchable. 'Is Meridian Grid a good investment?' is not, because it asks for a personal recommendation.",
      "Select at least one scope before submitting. The scope narrows retrieval and makes coverage gaps visible. If you are unsure, choose the asset class or the type of official record you need.",
      "Talvrin will tell you when a question is outside coverage. It will not substitute a plausible answer from a different domain.",
    ],
    keywords: ["question", "scope", "prompt", "research", "specific"],
    updatedAt: "2026-10-24",
    language: "en-US",
    revision: "rev. 1.0",
  },
  {
    id: "help-answer-states",
    title: "What each answer state means",
    category: "Evidence & citations",
    summary:
      "Ready, partial, conflict, stale, restricted and unsupported are evidence decisions, not error messages.",
    body: [
      "Ready means every material claim is supported by an admissible record. Partial means some permitted evidence is unavailable and the affected values are marked. Conflict means two admissible records disagree and Talvrin does not choose between them. Stale means the newest admissible record is older than the freshness threshold. Restricted means the value exists but the current license or authorization does not permit display.",
      "Unsupported means the question is outside the current public coverage. No answer is fabricated in that state.",
      "A withheld value is never zero. It is a decision recorded in the evidence package, with a reason code.",
    ],
    keywords: ["status", "partial", "conflict", "stale", "restricted", "unsupported"],
    updatedAt: "2026-10-24",
    language: "en-US",
    revision: "rev. 1.0",
  },
  {
    id: "help-citations",
    title: "How citations and the Evidence Inspector work",
    category: "Evidence & citations",
    summary:
      "A citation is a navigable, version-bound link to evidence, not a model-generated hyperlink.",
    body: [
      "Every material claim carries one or more citations. Selecting a citation opens the Evidence Inspector, which shows the claim, the supporting records, the observation and publication dates, the rights decision and the method used for any derived value.",
      "The inspector is read-only. It never exposes a confidential record, a license-restricted value or another visitor's research.",
      "If a source is metadata-only, the inspector shows its identity, publisher, dates and rights decision rather than the withheld content.",
    ],
    keywords: ["citation", "inspector", "evidence", "source", "claim"],
    updatedAt: "2026-10-24",
    language: "en-US",
    revision: "rev. 1.0",
  },
  {
    id: "help-withheld",
    title: "Why a value can be withheld",
    category: "Data rights",
    summary:
      "Display, quotation, derivation, export and redistribution are separate permissions.",
    body: [
      "A source license may permit fetching and internal derivation while prohibiting public display. In that case the assistant can state that a record exists and show its metadata, but it cannot show the value.",
      "Talvrin fails closed. If a permission is missing or a license configuration is unknown, the value is withheld. It is not replaced with a delayed price, a third-party quote or a model estimate.",
      "Withholding is recorded in the answer's coverage notes so a reader can see why a cell is empty.",
    ],
    keywords: ["rights", "license", "licence", "withheld", "display", "export"],
    updatedAt: "2026-10-24",
    language: "en-US",
    revision: "rev. 1.0",
  },
  {
    id: "help-conflicts",
    title: "Why Talvrin shows conflicts instead of one number",
    category: "Evidence & citations",
    summary:
      "When admissible records disagree, averaging or silently choosing one would misstate both.",
    body: [
      "Conflicts usually come from restatements, amendments, different presentation bases, vendor revisions or fiscal-period misalignment. The assistant shows each record with its date and basis.",
      "Talvrin does not calculate a midpoint, choose the newest record automatically or label one record correct. A human reader, or an authorized research workflow, must decide which basis suits the purpose.",
      "If a conflict cannot be resolved from the public record, the answer remains in the conflict state.",
    ],
    keywords: ["conflict", "restatement", "revision", "average"],
    updatedAt: "2026-10-24",
    language: "en-US",
    revision: "rev. 1.0",
  },
  {
    id: "help-sessions",
    title: "Guest sessions, expiry and saving",
    category: "Sessions & access",
    summary:
      "A guest session is temporary and isolated. Durable history requires an explicit save after sign-in.",
    body: [
      "Guest research is held only for the current browser session and is designed to expire. It is not attached to an account and cannot be retrieved on another device.",
      "When an authenticated capability is available, saving is explicit and item by item. Signing in does not automatically convert guest research into account data.",
      "Clearing the session removes the local list immediately. Server-side job records also expire automatically.",
    ],
    keywords: ["session", "history", "save", "guest", "expiry"],
    updatedAt: "2026-10-24",
    language: "en-US",
    revision: "rev. 1.0",
  },
  {
    id: "help-access",
    title: "Sign-in, access and entitlements",
    category: "Sessions & access",
    summary:
      "Identity is necessary but never sufficient for financial content access.",
    body: [
      "Authentication proves who you are. It does not prove which data you are entitled to receive or which license permits a particular use.",
      "Each request requires a server-side feature authorization and source-specific rights check. A signed-in visitor without the relevant entitlement still sees the gated state.",
      "This demonstration build does not configure a real identity provider. Sign-in screens describe the required behavior; demo mode is plainly labeled.",
    ],
    keywords: ["sign in", "account", "entitlement", "access", "authentication"],
    updatedAt: "2026-10-24",
    language: "en-US",
    revision: "rev. 1.0",
  },
  {
    id: "help-exports",
    title: "Exports, sharing and citation packages",
    category: "Data rights",
    summary:
      "An export is an evidence snapshot, not unrestricted access to licensed data.",
    body: [
      "Export rights are checked at generation and again at access. A source may be included as a citation while its excerpt is omitted, and the package records every omission.",
      "Public guests cannot create permanent shared research links. Authenticated sharing, where approved, is named-recipient and revocable.",
      "Downloaded files carry claim identifiers, source locators and a generation timestamp so a reader can trace each statement back to its record.",
    ],
    keywords: ["export", "pdf", "docx", "csv", "share", "citation package"],
    updatedAt: "2026-10-24",
    language: "en-US",
    revision: "rev. 1.0",
  },
  {
    id: "help-report",
    title: "Report an incorrect figure or citation",
    category: "Troubleshooting",
    summary:
      "Claims are reviewed by a human owner. The assistant will not confirm that your allegation is correct.",
    body: [
      "Open the report from a citation or claim so the answer and claim references are attached read-only; Talvrin checks them on the server before they are recorded. A report without a claim reference is routed as a general concern. Attachments are not accepted through public intake.",
      "You will receive a case reference and a description of the review route. The assistant cannot promise a response time, alter a canonical fact or expose confidential evidence.",
      "Do not include personal or confidential information in the report. If the issue is a security vulnerability, use the security route instead of the research dispute form.",
    ],
    keywords: ["report", "incorrect", "dispute", "citation", "case"],
    updatedAt: "2026-10-24",
    language: "en-US",
    revision: "rev. 1.0",
  },
  {
    id: "help-accessibility",
    title: "Accessibility and display settings",
    category: "Troubleshooting",
    summary:
      "The assistant targets WCAG 2.2 AA, with 44 px targets, keyboard support and reduced motion.",
    body: [
      "All interactive controls are reachable by keyboard. Dialogs trap focus, restore it on close and respond to Escape. Status changes are announced through polite live regions rather than token-by-token speech.",
      "Display settings let you change answer density, citation placement, time zone, number format and motion. Source policy, citation integrity and rights gates cannot be turned off.",
      "If a page does not meet your access needs, use the accessibility route in Help. Do not include sensitive account information.",
    ],
    keywords: ["accessibility", "keyboard", "focus", "reduced motion", "settings"],
    updatedAt: "2026-10-24",
    language: "en-US",
    revision: "rev. 1.0",
  },
  {
    id: "help-coverage",
    title: "Coverage at launch",
    category: "Research basics",
    summary:
      "Launch coverage is deliberately narrower than the long-term target.",
    body: [
      "The public assistant covers listed equities, fixed income, listed funds, official economic statistics and central-bank publications. Licensed market values are metadata-only on the public surface.",
      "Historical Evidence Engine coverage before 2016 is a target capability, not a launch claim. Cryptoassets, private companies and personal advice are out of scope.",
      "Coverage gaps are shown in the answer rather than filled with inference. Coverage expands only after data-rights and methodology review.",
    ],
    keywords: ["coverage", "scope", "launch", "history", "crypto"],
    updatedAt: "2026-10-24",
    language: "en-US",
    revision: "rev. 1.0",
  },
  {
    id: "help-advice",
    title: "Why the assistant will not give investment advice",
    category: "Policies",
    summary:
      "Talvrin publishes evidence-linked research. It does not recommend buying, selling or holding an instrument.",
    body: [
      "A recommendation requires knowledge of your objectives, time horizon, tax position and risk tolerance, and is a regulated activity. The public assistant does not collect that information and is not authorized to provide personal advice.",
      "The assistant can retrieve audited results, explain a calculation, compare instruments on a common basis and state what the evidence does not support. It does not rank investments or label a winner.",
      "For personal guidance, consider a regulated financial advisor. Talvrin does not receive referral fees for any advisor.",
    ],
    keywords: ["advice", "recommendation", "buy", "sell", "ranking"],
    updatedAt: "2026-10-24",
    language: "en-US",
    revision: "rev. 1.0",
  },
];

export function searchHelp(query: string): HelpArticle[] {
  const q = query.trim().toLowerCase();
  if (!q) return HELP_ARTICLES;
  return HELP_ARTICLES.filter((article) => {
    const haystack = [
      article.title,
      article.category,
      article.summary,
      ...article.body,
      ...article.keywords,
    ]
      .join(" ")
      .toLowerCase();
    return q.split(/\s+/).every((term) => haystack.includes(term));
  });
}

/** Legacy in-page anchors used by other screens (#coverage, #methods…). */
export const HELP_ANCHORS: Record<string, string> = {
  coverage: "help-coverage",
  methods: "help-citations",
  "data-privacy": "help-sessions",
  advice: "help-advice",
  report: "help-report",
};

export function getHelpArticle(id: string): HelpArticle | undefined {
  return HELP_ARTICLES.find((article) => article.id === id);
}

/**
 * GET /public-help/capabilities equivalent (WF-08 §10, AC-14). Intake can be
 * switched off with TALVRIN_CASE_INTAKE=off so the UI replaces every report
 * CTA with a working contact route.
 */
export function helpCapabilities(): HelpCapabilities {
  const intakeOn =
    (process.env.TALVRIN_CASE_INTAKE ?? "on").toLowerCase() !== "off";
  return {
    copy_revision: HELP_COPY_REVISION,
    corpus_version: HELP_CORPUS_VERSION,
    notice_version: CASE_NOTICE_VERSION,
    notice_purpose: CASE_NOTICE_PURPOSE,
    principal: "GUEST",
    topics: HELP_CATEGORIES,
    intake: {
      research_cases: intakeOn ? "AVAILABLE" : "UNAVAILABLE",
      general_cases: intakeOn ? "AVAILABLE" : "UNAVAILABLE",
      attachments: "UNAVAILABLE",
      case_tracking: "UNAVAILABLE",
    },
    request_types: CASE_TYPES,
    contact_routes: [
      {
        id: "GENERAL_SUPPORT",
        label: "General support",
        href: "/support/report-a-problem",
        detail: "Product or navigation questions",
      },
      {
        id: "ACCESSIBILITY",
        label: "Accessibility support",
        href: "/support/accessibility-support",
        detail: "Equivalent non-modal route",
      },
      {
        id: "SECURITY_PRIVACY",
        label: "Security and privacy",
        href: "/trust/security",
        detail: "Protected route; do not post details publicly",
      },
      {
        id: "PRIVACY_REQUEST",
        label: "Privacy request",
        href: "/legal/privacy-notice",
        detail: "Subject-rights process",
      },
    ],
    limits: { description_min: DESCRIPTION_MIN, description_max: DESCRIPTION_MAX },
  };
}
