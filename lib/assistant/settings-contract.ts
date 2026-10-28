/**
 * WF-07 §10–11 settings contract shared by the mock routes and the client.
 * Pure data and validation only: no storage, no browser or server APIs.
 */
import type { AssistantPreferences } from "./types";
import { SCOPES } from "./taxonomy";

/** Demo-only stand-in for a server-derived account principal (WF-07 §13). */
/** Shared synthetic demo-account header used by every account route (WF-12 §7.1). */
export const DEMO_ACCOUNT_HEADER = "x-talvrin-demo-mode";
export const DEMO_ACCOUNT_VALUE = "account";

/** Keys a client may write. Everything else is rejected (AC-07). */
export const EDITABLE_PREF_KEYS = [
  "uiLocale",
  "timeZone",
  "numberLocale",
  "showTimestamps",
  "answerDensity",
  "evidenceDepth",
  "motion",
  "readableData",
  "followUpHints",
  "researchFocus",
  "marketFocus",
] as const;

export type EditablePrefKey = (typeof EDITABLE_PREF_KEYS)[number];
export type EditablePrefs = Pick<AssistantPreferences, EditablePrefKey>;

/** Policy fields that no client, role or demo mode may change (AC-03/04). */
export const IMMUTABLE_POLICY = {
  authoritativeSourcesOnly: true,
  materialClaimCitationsRequired: true,
  sourceRightsEnforcedServerSide: true,
  autoSaveResearch: false,
} as const;

export const IMMUTABLE_POLICY_KEYS = [
  ...Object.keys(IMMUTABLE_POLICY),
  "immutablePolicy",
  "immutable_policy",
  "citationStyle",
  "reduceMotion",
];

export const POLICY_VERSION = "research-policy-2026-10";

/** Server-side defaults (WF-07 §7). Mirrors DEFAULT_PREFS in client.ts. */
export const DEFAULT_EDITABLE: EditablePrefs = {
  uiLocale: "en-US",
  timeZone: "UTC",
  numberLocale: "en-GB",
  showTimestamps: true,
  answerDensity: "standard",
  evidenceDepth: "summary",
  motion: "system",
  readableData: false,
  followUpHints: true,
  researchFocus: [],
  marketFocus: [],
};

export interface SettingsOption {
  id: string;
  label: string;
  supported: boolean;
  note?: string;
}

export interface SettingsCapabilities {
  mode: "guest" | "account";
  status: "GUEST" | "SIGNED_IN" | "RESTRICTED";
  featureGates: {
    persistentPreferences: boolean;
    notifications: boolean;
    savedResearch: boolean;
    autoSaveResearch: boolean;
    privacyRequests: boolean;
  };
  locales: SettingsOption[];
  assetClasses: SettingsOption[];
  markets: SettingsOption[];
  themes: SettingsOption[];
  immutablePolicy: typeof IMMUTABLE_POLICY;
  policyVersion: string;
}

export interface SettingsDocument {
  revision: string;
  mode: "account";
  editable: EditablePrefs;
  immutablePolicy: typeof IMMUTABLE_POLICY;
  updatedAt: string;
}

export const LOCALE_OPTIONS: SettingsOption[] = [
  { id: "en-US", label: "English (United States)", supported: true },
];

export const ASSET_CLASS_OPTIONS: SettingsOption[] = [
  ...SCOPES.map((scope) => ({
    id: scope.id,
    label: scope.label,
    supported: scope.supported,
    note: scope.note,
  })),
  {
    id: "fx",
    label: "Foreign exchange",
    supported: false,
    note: "Not in current coverage. Choosing it would not add data.",
  },
  {
    id: "commodities",
    label: "Commodities",
    supported: false,
    note: "Not in current coverage. Choosing it would not add data.",
  },
];

export const MARKET_OPTIONS: SettingsOption[] = [
  { id: "GB", label: "United Kingdom", supported: true },
  { id: "US", label: "United States", supported: true },
  { id: "EA", label: "Euro area", supported: true },
  {
    id: "JP",
    label: "Japan",
    supported: false,
    note: "Not in current coverage or data rights.",
  },
];

export const THEME_OPTIONS: SettingsOption[] = [
  { id: "dark", label: "Dark", supported: true },
  {
    id: "system",
    label: "Follow system",
    supported: false,
    note: "Not delivered in this build.",
  },
  {
    id: "light",
    label: "Light",
    supported: false,
    note: "Not delivered in this build.",
  },
];

export function pickEditable(prefs: AssistantPreferences): EditablePrefs {
  const out = {} as Record<string, unknown>;
  for (const key of EDITABLE_PREF_KEYS) out[key] = prefs[key];
  return out as EditablePrefs;
}

export function sameEditable(a: AssistantPreferences, b: AssistantPreferences) {
  return EDITABLE_PREF_KEYS.every(
    (key) => JSON.stringify(a[key]) === JSON.stringify(b[key])
  );
}

export function changedEditableKeys(
  a: AssistantPreferences,
  b: AssistantPreferences
): EditablePrefKey[] {
  return EDITABLE_PREF_KEYS.filter(
    (key) => JSON.stringify(a[key]) !== JSON.stringify(b[key])
  );
}

export const PREF_LABELS: Record<EditablePrefKey, string> = {
  uiLocale: "Language",
  timeZone: "Time zone",
  numberLocale: "Regional format",
  showTimestamps: "Answer header timestamps",
  answerDensity: "Answer density",
  evidenceDepth: "Evidence depth",
  motion: "Motion",
  readableData: "Readable data",
  followUpHints: "Follow-up hints",
  researchFocus: "Asset focus",
  marketFocus: "Market focus",
};

export function isValidTimeZone(value: string): boolean {
  if (!value || value.length > 64 || !/^[A-Za-z_+\-/0-9]+$/.test(value)) {
    return false;
  }
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: value });
    return true;
  } catch {
    return false;
  }
}

function oneOf<T extends string>(value: unknown, allowed: readonly T[]): value is T {
  return typeof value === "string" && (allowed as readonly string[]).includes(value);
}

function supportedIds(options: SettingsOption[], value: unknown): string[] | null {
  if (!Array.isArray(value) || value.length > options.length) return null;
  const allowed = new Set(options.filter((o) => o.supported).map((o) => o.id));
  const ids: string[] = [];
  for (const item of value) {
    if (typeof item !== "string" || !allowed.has(item)) return null;
    if (!ids.includes(item)) ids.push(item);
  }
  return ids;
}

/**
 * Strict schema validation for a write (WF-07 AC-04, AC-07, AC-08, AC-12).
 * Returns either the validated values or per-field errors. Immutable policy
 * keys are reported separately so the route can answer 403.
 */
export function validateEditable(input: unknown):
  | { ok: true; value: EditablePrefs }
  | { ok: false; immutable: string[]; fields: Record<string, string> } {
  const fields: Record<string, string> = {};
  const immutable: string[] = [];
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, immutable, fields: { editable: "Settings must be an object." } };
  }
  const record = input as Record<string, unknown>;
  for (const key of Object.keys(record)) {
    if (IMMUTABLE_POLICY_KEYS.includes(key)) immutable.push(key);
    else if (!(EDITABLE_PREF_KEYS as readonly string[]).includes(key)) {
      fields[key] = "This setting is not recognised.";
    }
  }
  if (immutable.length) return { ok: false, immutable, fields };

  if (!oneOf(record.uiLocale, ["en-US"] as const)) {
    fields.uiLocale = "Choose a supported interface language.";
  }
  if (typeof record.timeZone !== "string" || !isValidTimeZone(record.timeZone)) {
    fields.timeZone = "Choose a valid IANA time zone, for example Europe/London.";
  }
  if (!oneOf(record.numberLocale, ["en-GB", "en-US"] as const)) {
    fields.numberLocale = "Choose a supported regional format.";
  }
  if (typeof record.showTimestamps !== "boolean") {
    fields.showTimestamps = "Choose whether to show timestamps.";
  }
  if (!oneOf(record.answerDensity, ["concise", "standard", "detailed"] as const)) {
    fields.answerDensity = "Choose concise, balanced or detailed.";
  }
  if (!oneOf(record.evidenceDepth, ["summary", "expanded"] as const)) {
    fields.evidenceDepth = "Choose summary or expanded evidence.";
  }
  if (!oneOf(record.motion, ["system", "reduce"] as const)) {
    fields.motion = "Choose follow system or reduce motion.";
  }
  if (typeof record.readableData !== "boolean") {
    fields.readableData = "Choose whether to show table-first data.";
  }
  if (typeof record.followUpHints !== "boolean") {
    fields.followUpHints = "Choose whether to show follow-up hints.";
  }
  const researchFocus = supportedIds(ASSET_CLASS_OPTIONS, record.researchFocus);
  if (!researchFocus) {
    fields.researchFocus = "Choose only asset classes in current coverage.";
  }
  const marketFocus = supportedIds(MARKET_OPTIONS, record.marketFocus);
  if (!marketFocus) {
    fields.marketFocus = "Choose only markets in current coverage.";
  }
  if (Object.keys(fields).length) return { ok: false, immutable, fields };

  return {
    ok: true,
    value: {
      uiLocale: record.uiLocale as EditablePrefs["uiLocale"],
      timeZone: record.timeZone as string,
      numberLocale: record.numberLocale as EditablePrefs["numberLocale"],
      showTimestamps: record.showTimestamps as boolean,
      answerDensity: record.answerDensity as EditablePrefs["answerDensity"],
      evidenceDepth: record.evidenceDepth as EditablePrefs["evidenceDepth"],
      motion: record.motion as EditablePrefs["motion"],
      readableData: record.readableData as boolean,
      followUpHints: record.followUpHints as boolean,
      researchFocus: researchFocus ?? [],
      marketFocus: marketFocus ?? [],
    },
  };
}
