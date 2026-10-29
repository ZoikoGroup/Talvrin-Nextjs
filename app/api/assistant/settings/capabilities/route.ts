import { FEATURE_FLAGS } from "@/lib/assistant/taxonomy";
import { json, rateLimit } from "@/lib/assistant/http";
import {
  ASSET_CLASS_OPTIONS,
  DEMO_ACCOUNT_HEADER,
  DEMO_ACCOUNT_VALUE,
  IMMUTABLE_POLICY,
  LOCALE_OPTIONS,
  MARKET_OPTIONS,
  POLICY_VERSION,
  THEME_OPTIONS,
  type SettingsCapabilities,
} from "@/lib/assistant/settings-contract";

export const dynamic = "force-dynamic";

/**
 * WF-07 §10 GET capabilities: resolves guest/signed-in mode, enabled controls,
 * locales, markets and immutable policy. No private history is returned.
 * The demo derives "account" from a header the demo-account switch sends;
 * production derives the principal from the server session only.
 */
export async function GET(request: Request) {
  const limited = rateLimit(request, "settings-capabilities", 60);
  if (limited) return limited;

  const account = request.headers.get(DEMO_ACCOUNT_HEADER) === DEMO_ACCOUNT_VALUE;
  const capabilities: SettingsCapabilities = {
    mode: account ? "account" : "guest",
    status: account ? "SIGNED_IN" : "GUEST",
    featureGates: {
      persistentPreferences: account,
      notifications: false,
      savedResearch: FEATURE_FLAGS.savedResearch === "ON",
      autoSaveResearch: false,
      privacyRequests: false,
    },
    locales: LOCALE_OPTIONS,
    assetClasses: ASSET_CLASS_OPTIONS,
    markets: MARKET_OPTIONS,
    themes: THEME_OPTIONS,
    immutablePolicy: IMMUTABLE_POLICY,
    policyVersion: POLICY_VERSION,
  };
  return json(capabilities);
}
