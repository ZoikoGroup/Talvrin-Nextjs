/**
 * SYNTHETIC access policy for the WF-11 mock API. Nothing here is an
 * identity provider, entitlement service, billing integration or rights
 * engine. It reproduces the response shapes and typed outcome codes of
 * WF-11 §10 so the UI can be built and tested against them.
 *
 * Demo identity is asserted by the browser (`x-talvrin-demo-mode`), which a
 * real system must never trust; every response is marked `synthetic: true`.
 */
import type {
  AccessFixture,
  AccessOutcomeCode,
  AuthActionId,
  EffectiveEntitlement,
  EntitlementDecision,
} from "@/lib/assistant/types";
import { FEATURE_FLAGS } from "@/lib/assistant/taxonomy";
import { guestSessionFrom } from "@/lib/assistant/http";

export const POLICY_VERSION = "demo-access-policy-v1";
export const DEMO_SUBJECT = "acct_demo_opaque";
export const DEMO_TENANT = "tenant_demo_public";
export const DEMO_MODE_HEADER = "x-talvrin-demo-mode";
export const INTENT_TTL_MS = 10 * 60 * 1000;

/** User-safe copy per code (WF-11 §13.1 where the spec gives copy). */
export const OUTCOME_COPY: Record<AccessOutcomeCode, string> = {
  AUTH_REQUIRED:
    "Sign in to access eligible account features. Your current research stays in this temporary session unless you choose what to save.",
  MFA_STEP_UP_REQUIRED:
    "Confirm it’s you before this action. A stronger sign-in check is required.",
  ACCOUNT_SCOPE_DENIED:
    "This request is outside your current account scope.",
  FEATURE_NOT_RELEASED: "This feature isn’t available yet.",
  // Spec copy continues "View available options." only when an approved
  // catalogue exists (J07); none is configured, so that sentence is omitted.
  PLAN_REQUIRED: "This feature isn’t included in your current access.",
  QUOTA_EXCEEDED:
    "The usage limit for this feature has been reached. Remaining usage and reset time can’t be confirmed right now.",
  SOURCE_RIGHTS_DENIED:
    "This source cannot be displayed for the requested use. Your plan does not change source permissions.",
  POLICY_UNAVAILABLE:
    "We’re unable to verify access right now, so protected features stay off. Try again later.",
  BILLING_RECONCILIATION_PENDING:
    "Your account change is being confirmed. Access will update when verification completes.",
  AUTH_INTENT_EXPIRED:
    "This sign-in request has expired or was already used. Start again from the action you wanted.",
  SOURCE_RIGHTS_CHECK_REQUIRED:
    "Allowed for this account, but each source’s rights are checked again for the exact use.",
};

export const SESSION_EXPIRED_COPY =
  "Your session has ended. Sign in again to continue.";

const FIXTURES: AccessFixture[] = [
  "NONE",
  "ENTITLEMENTS_PENDING",
  "BILLING_PENDING",
  "SESSION_EXPIRED",
  "STEP_UP_REQUIRED",
  "POLICY_UNAVAILABLE",
  "PLAN_REQUIRED",
  "QUOTA_BLOCKED",
  "IDENTITY_DISABLED",
];

/** WF-11 §09 IDENTITY_DISABLED: account hold; safe support action, no access. */
export const IDENTITY_DISABLED_COPY =
  "This account is on hold, so no account features are available. Contact support for help; your guest research in this tab is unaffected.";

export function fixtureFrom(value: unknown): AccessFixture {
  return typeof value === "string" &&
    (FIXTURES as string[]).includes(value)
    ? (value as AccessFixture)
    : "NONE";
}

export function isDemoAccount(request: Request): boolean {
  return request.headers.get(DEMO_MODE_HEADER) === "account";
}

/* ------------------------------------------------------------------ */
/* Return-intent allowlist (WF-11 A14, P0 02/03)                       */
/* ------------------------------------------------------------------ */

export const AUTH_ACTIONS: AuthActionId[] = [
  "sign_in",
  "save",
  "open_saved",
  "export",
  "alert",
  "history",
  "share",
  "source",
];

const ALLOWED_PATH_PREFIXES = [
  "/assistant/session/",
  "/assistant/history",
  "/assistant/export",
  "/assistant/updates",
  "/assistant/compare",
  "/assistant/settings",
  "/assistant/help",
  "/assistant/access",
];

/**
 * Accepts only same-origin assistant paths. Query strings are dropped
 * (no prompt text may travel through a return route) except the saved
 * library view. Anything else resolves to the safe default.
 */
export function safeReturnPath(candidate: unknown): string {
  if (typeof candidate !== "string" || !candidate) return "/assistant";
  if (!candidate.startsWith("/") || candidate.startsWith("//")) {
    return "/assistant";
  }
  if (candidate.includes("\\")) return "/assistant";
  try {
    const base = "https://assistant.talvrin.invalid";
    const url = new URL(candidate, base);
    if (url.origin !== base) return "/assistant";
    const path = url.pathname;
    if (path === "/assistant") return "/assistant";
    if (!ALLOWED_PATH_PREFIXES.some((prefix) => path.startsWith(prefix))) {
      return "/assistant";
    }
    if (path === "/assistant/history" && url.searchParams.get("view") === "saved") {
      return "/assistant/history?view=saved";
    }
    return path;
  } catch {
    return "/assistant";
  }
}

/* ------------------------------------------------------------------ */
/* In-memory stores (shared across route modules)                      */
/* ------------------------------------------------------------------ */

interface StoredIntent {
  actionId: AuthActionId;
  returnPath: string;
  guestSession: string;
  expiresAt: number;
  consumedAt: number | null;
}

interface AccessStores {
  intents: Map<string, StoredIntent>;
  consumedImports: Set<string>;
}

const globalStores = globalThis as typeof globalThis & {
  __talvrinAccessStores?: AccessStores;
};

export function stores(): AccessStores {
  if (!globalStores.__talvrinAccessStores) {
    globalStores.__talvrinAccessStores = {
      intents: new Map(),
      consumedImports: new Set(),
    };
  }
  const value = globalStores.__talvrinAccessStores;
  if (value.intents.size > 2000) value.intents.clear();
  if (value.consumedImports.size > 2000) value.consumedImports.clear();
  return value;
}

export function sessionKey(request: Request): string {
  return guestSessionFrom(request) ?? "anonymous";
}

/* ------------------------------------------------------------------ */
/* Effective entitlements (WF-11 §3, §5.2, §10.1)                      */
/* ------------------------------------------------------------------ */

interface FeatureRule {
  feature: string;
  label: string;
  decision: EntitlementDecision;
  reasons: AccessOutcomeCode[];
  reasonText: string;
  href?: string;
  action?: string;
  /** Commercially gated in the fixture (affected by plan/quota/billing). */
  commercial?: boolean;
}

function flagDecision(
  flag: keyof typeof FEATURE_FLAGS,
  released: Omit<FeatureRule, "feature" | "label">
): Omit<FeatureRule, "feature" | "label"> {
  if (FEATURE_FLAGS[flag] === "OFF") {
    return {
      decision: "disabled",
      reasons: ["FEATURE_NOT_RELEASED"],
      reasonText: OUTCOME_COPY.FEATURE_NOT_RELEASED,
    };
  }
  return released;
}

function baseRules(): FeatureRule[] {
  return [
    {
      feature: "research.public",
      label: "Public research",
      decision: "allow",
      reasons: [],
      reasonText: "Public evidence questions remain available without an account.",
      href: "/assistant",
      action: "Ask a question",
    },
    {
      feature: "research.session",
      label: "Session research",
      decision: "allow",
      reasons: [],
      reasonText: "Shown from this browser session only. No durable account library.",
      href: "/assistant/history",
      action: "Review session",
    },
    {
      feature: "research.save",
      label: "Saved research",
      commercial: true,
      ...flagDecision("savedResearch", {
        decision: "review_required",
        reasons: ["SOURCE_RIGHTS_CHECK_REQUIRED"],
        reasonText: OUTCOME_COPY.SOURCE_RIGHTS_CHECK_REQUIRED,
        href: "/assistant/history?view=saved",
        action: "Open saved research",
      }),
    },
    {
      feature: "research.export.pdf",
      label: "Export citation package",
      commercial: true,
      ...flagDecision("exports", {
        decision: "review_required",
        reasons: ["SOURCE_RIGHTS_CHECK_REQUIRED"],
        reasonText:
          "Synthetic demo entitlement. Every source’s export and quotation right is checked again for each package.",
        href: "/assistant/export",
        action: "Open export",
      }),
    },
    {
      feature: "alerts.in_app",
      label: "In-app alerts",
      commercial: true,
      ...flagDecision("alerts", {
        decision: "review_required",
        reasons: ["SOURCE_RIGHTS_CHECK_REQUIRED"],
        reasonText:
          "Rules are held by the demo server and become active only after a confirmed save. Threshold triggers and external delivery remain blocked.",
        href: "/assistant/updates",
        action: "Review alerts",
      }),
    },
    {
      feature: "alerts.external_delivery",
      label: "Email and push delivery",
      decision: "disabled",
      reasons: ["FEATURE_NOT_RELEASED"],
      reasonText:
        "This feature isn’t available yet. No verified address, consent record or delivery adapter is configured.",
    },
    {
      feature: "sharing.recipient",
      label: "Controlled recipient sharing",
      ...flagDecision("sharing", {
        decision: "review_required",
        reasons: ["SOURCE_RIGHTS_CHECK_REQUIRED"],
        reasonText: OUTCOME_COPY.SOURCE_RIGHTS_CHECK_REQUIRED,
      }),
    },
    {
      feature: "source.licensed",
      label: "Protected licensed source",
      decision: "denied",
      reasons: ["SOURCE_RIGHTS_DENIED"],
      reasonText: OUTCOME_COPY.SOURCE_RIGHTS_DENIED,
    },
    {
      feature: "research.history_packs",
      label: "Historical research packs",
      ...flagDecision("historicalTrends", {
        decision: "review_required",
        reasons: ["SOURCE_RIGHTS_CHECK_REQUIRED"],
        reasonText: OUTCOME_COPY.SOURCE_RIGHTS_CHECK_REQUIRED,
      }),
    },
  ];
}

/**
 * Applies the WF-11 §3.1 precedence: rights and release blocks are never
 * replaced by a commercial reason; commercial fixtures only affect
 * features that are otherwise allowed or under review.
 */
export function effectiveEntitlements(
  fixture: AccessFixture,
  evaluatedAt: string
): EffectiveEntitlement[] {
  return baseRules().map((rule) => {
    let decision = rule.decision;
    let reasons = rule.reasons;
    let reasonText = rule.reasonText;
    let href = rule.href;
    let action = rule.action;
    const commerciallyOpen =
      rule.commercial &&
      (rule.decision === "allow" || rule.decision === "review_required");
    if (commerciallyOpen && fixture === "PLAN_REQUIRED") {
      decision = "denied";
      reasons = ["PLAN_REQUIRED"];
      reasonText = OUTCOME_COPY.PLAN_REQUIRED;
      href = undefined;
      action = undefined;
    } else if (commerciallyOpen && fixture === "QUOTA_BLOCKED") {
      decision = "denied";
      reasons = ["QUOTA_EXCEEDED"];
      reasonText = OUTCOME_COPY.QUOTA_EXCEEDED;
      href = undefined;
      action = undefined;
    } else if (commerciallyOpen && fixture === "BILLING_PENDING") {
      decision = "disabled";
      reasons = ["BILLING_RECONCILIATION_PENDING"];
      reasonText = OUTCOME_COPY.BILLING_RECONCILIATION_PENDING;
      href = undefined;
      action = undefined;
    }
    return {
      feature: rule.feature,
      label: rule.label,
      decision,
      reasons,
      reasonText,
      // No reliable meter exists, so quota is never displayed (E07).
      quota: { remaining: null, windowEnd: null },
      effectiveAt: evaluatedAt,
      evaluatedAt,
      href,
      action,
    };
  });
}

/** Features that need step-up assurance before they run (A10, J13). */
export const STEP_UP_FEATURES = new Set(["billing.portal", "account.switch"]);
