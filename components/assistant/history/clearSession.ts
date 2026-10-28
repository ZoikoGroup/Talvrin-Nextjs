"use client";

import {
  apiJson,
  clearSessionEntries,
  readSessionEntryStatus,
  rotateGuestSession,
} from "@/lib/assistant/client";

/** Fired after a clear so other mounted UI (e.g. the shell) can re-read. */
export const SESSION_CLEARED_EVENT = "talvrin:session-cleared";

export interface ClearSessionResult {
  /** Items that were in this tab's list (active + expired). */
  itemCount: number;
  /** DELETE calls that did not confirm; the key rotation still blocks reads. */
  unconfirmed: number;
}

/**
 * WF-06 F-03 / P0-07 and WF-07 SET-22 / F02: clear only the current guest
 * session in this tab.
 *
 * 1. Ask the server to drop every reference this session owns, so later
 *    reads 404 immediately (idempotent, non-revealing).
 * 2. Remove the local list.
 * 3. Rotate the guest session key so any reference the server did not
 *    confirm is still unreadable from this tab.
 *
 * Display preferences, cookie consent and any account data are untouched.
 */
export async function clearThisSession(): Promise<ClearSessionResult> {
  const { allRefs } = readSessionEntryStatus();
  const results = await Promise.allSettled(
    allRefs.map((ref) =>
      apiJson<{ cleared: boolean }>(
        `/api/assistant/research/${encodeURIComponent(ref)}`,
        { method: "DELETE" }
      )
    )
  );
  clearSessionEntries();
  rotateGuestSession();
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(SESSION_CLEARED_EVENT));
  }
  return {
    itemCount: allRefs.length,
    unconfirmed: results.filter((result) => result.status === "rejected").length,
  };
}

/** The exact scope shown before confirmation (WF-06 HIS-19, WF-07 §12.1). */
export function clearScopeLines(itemCount: number): string[] {
  return [
    itemCount === 1
      ? "The 1 research item in This session is removed from this tab."
      : `The ${itemCount} research items in This session are removed from this tab.`,
    "Their links stop opening immediately, including copies you may have shared or bookmarked.",
    "This tab starts a new temporary session, so comparisons and exports started earlier in this tab will no longer open.",
    "Display preferences, cookie choices and any account data are not affected.",
    "Other tabs, browsers and devices are not affected.",
    "Cleared research cannot be recovered. Some records may remain only where required by security or legal policy.",
  ];
}
