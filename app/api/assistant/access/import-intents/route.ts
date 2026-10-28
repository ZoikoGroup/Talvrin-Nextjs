import type {
  GuestImportReceipt,
  GuestImportResponse,
} from "@/lib/assistant/types";
import { getResearchJob } from "@/lib/assistant/research-store";
import { FEATURE_FLAGS } from "@/lib/assistant/taxonomy";
import {
  apiError,
  asBoolean,
  asString,
  asStringArray,
  isOwner,
  json,
  rateLimit,
  readJsonBody,
} from "@/lib/assistant/http";
import { OUTCOME_COPY, isDemoAccount, stores } from "../_policy/policy";

export const dynamic = "force-dynamic";

const CONSENT_VERSION = "guest-import-consent-demo-v1";

/**
 * SYNTHETIC · POST /api/assistant/access/import-intents (WF-11 A12, J01,
 * §10 "research/import-intents"). Only explicitly selected guest records
 * owned by this browser session, with consent and a one-time intent ID.
 * Each item gets its own receipt after a fresh flag and rights check.
 */
export async function POST(request: Request) {
  const limited = rateLimit(request, "access-import", 10);
  if (limited) return limited;
  const body = await readJsonBody(request);
  if (!isDemoAccount(request)) {
    return apiError("AUTH_REQUIRED", OUTCOME_COPY.AUTH_REQUIRED, 401, {
      retryable: false,
    });
  }
  const refs = Array.from(new Set(asStringArray(body.refs))).slice(0, 10);
  const importIntentId = asString(body.importIntentId).slice(0, 128);
  if (!refs.length || !asBoolean(body.consent) || !importIntentId) {
    return apiError(
      "INVALID_INPUT",
      "Select at least one item and confirm before saving.",
      422,
      { retryable: false }
    );
  }
  const { consumedImports } = stores();
  if (consumedImports.has(importIntentId)) {
    // Replay of a consent ID is rejected; no duplicate saves (§16).
    return apiError(
      "IMPORT_INTENT_CONSUMED",
      "This save request was already processed. Start a new selection to try again.",
      409,
      { retryable: false }
    );
  }
  consumedImports.add(importIntentId);

  const receipts: GuestImportReceipt[] = refs.map((ref) => {
    const record = getResearchJob(ref);
    if (!record || !isOwner("research", ref, request)) {
      return {
        ref,
        outcome: "NOT_SAVED",
        code: "NOT_AVAILABLE",
        message:
          "Not available to this browser session. It may have expired or been cleared.",
      };
    }
    if (FEATURE_FLAGS.savedResearch === "OFF") {
      return {
        ref,
        outcome: "NOT_SAVED",
        code: "FEATURE_NOT_RELEASED",
        message:
          "Saved research isn’t available yet. This item stays in your temporary session.",
      };
    }
    if (record.answer.status === "RESTRICTED") {
      return {
        ref,
        outcome: "NOT_SAVED",
        code: "SOURCE_RIGHTS_DENIED",
        message: OUTCOME_COPY.SOURCE_RIGHTS_DENIED,
      };
    }
    return {
      ref,
      outcome: "SAVED",
      code: null,
      message: "Saved to the demo account after a fresh rights check.",
    };
  });

  const payload: GuestImportResponse = {
    synthetic: true,
    importIntentId,
    consentVersion: CONSENT_VERSION,
    receipts,
  };
  return json(payload);
}
