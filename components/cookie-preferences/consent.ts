/** Bump this when a materially new category or vendor is added so saved choices are re-requested. */
export const CONSENT_VERSION = "1.0";

export const STORAGE_KEY = "talvrin-cookie-preferences";

export type ConsentChoices = {
  analytics: boolean;
  functionality: boolean;
};

export type SavedConsent = ConsentChoices & {
  version: string;
  savedAt: string;
  reference: string;
};

export const DEFAULT_CHOICES: ConsentChoices = { analytics: false, functionality: false };

/** Returns the saved record for the current version, or null if none / outdated / unreadable. */
export function readSavedConsent(): SavedConsent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<SavedConsent>;
    if (
      parsed.version !== CONSENT_VERSION ||
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.functionality !== "boolean" ||
      typeof parsed.savedAt !== "string" ||
      typeof parsed.reference !== "string"
    ) {
      return null;
    }
    return parsed as SavedConsent;
  } catch {
    return null;
  }
}

function makeReference() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return "CKY-" + Array.from(bytes, (b) => alphabet[b % alphabet.length]).join("");
}

/**
 * Persists the choices and reads them back. Throws if storage is blocked or the
 * read-back does not match, so the UI never reports a save that didn't happen.
 */
export function writeConsent(choices: ConsentChoices, previousReference?: string): SavedConsent {
  const record: SavedConsent = {
    ...choices,
    version: CONSENT_VERSION,
    savedAt: new Date().toISOString(),
    reference: previousReference ?? makeReference(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));

  const check = readSavedConsent();
  if (
    !check ||
    check.analytics !== record.analytics ||
    check.functionality !== record.functionality ||
    check.savedAt !== record.savedAt
  ) {
    throw new Error("Consent could not be verified after saving.");
  }
  return record;
}
