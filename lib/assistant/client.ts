"use client";

import type {
  AlertDraft,
  AlertRuleInput,
  AnswerStatus,
  AssistantPreferences,
  ConfigResponse,
  ExportFormat,
  PreflightCheck,
  ResearchJobView,
  ScopeId,
} from "./types";
import { GUEST_SESSION_TTL_MS, opaqueId } from "./format";

export class ApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly fields?: Record<string, string>;
  readonly checks?: PreflightCheck[];
  /** Opaque, safe-to-show reference for support (WF-12 §8.1). */
  readonly requestId?: string;
  readonly retryable: boolean;
  /** Seconds from a 429/503 Retry-After (WF-01 S08, WF-02 §11). */
  readonly retryAfterSeconds?: number;

  constructor(
    message: string,
    status: number,
    code = "REQUEST_FAILED",
    fields?: Record<string, string>,
    checks?: PreflightCheck[],
    meta: {
      requestId?: string;
      retryable?: boolean;
      retryAfterSeconds?: number;
    } = {}
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.fields = fields;
    this.checks = checks;
    this.requestId = meta.requestId;
    this.retryable =
      meta.retryable ?? (status === 0 || status === 429 || status >= 500);
    this.retryAfterSeconds = meta.retryAfterSeconds;
  }
}

/* ------------------------------------------------------------------ */
/* Guest session key (WF-02 A01, WF-06 P0-04, WF-12 INT-06)            */
/* ------------------------------------------------------------------ */

const GUEST_SESSION_ID_KEY = "talvrin.assistant.guest-session-id.v1";
export const GUEST_SESSION_HEADER = "x-talvrin-guest-session";

/**
 * Per-tab opaque guest session key. Server routes bind every job, comparison
 * and export to it, so a copied reference does not open in another session.
 */
export function guestSessionId(): string {
  const storage = guestStorage();
  const existing = storage?.getItem(GUEST_SESSION_ID_KEY);
  if (existing && /^gs_[A-Za-z0-9]{8,64}$/.test(existing)) return existing;
  const created = opaqueId("gs");
  try {
    storage?.setItem(GUEST_SESSION_ID_KEY, created);
  } catch {
    // Without storage the key lives for this page only.
  }
  return created;
}

/** Ends the guest session: later reads with the old key are refused. */
export function rotateGuestSession() {
  try {
    guestStorage()?.removeItem(GUEST_SESSION_ID_KEY);
  } catch {
    // Nothing to rotate.
  }
}

export function newIdempotencyKey(): string {
  return opaqueId("idem");
}

export async function apiJson<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  let response: Response;
  try {
    response = await fetch(path, {
      ...init,
      headers: {
        "content-type": "application/json",
        [GUEST_SESSION_HEADER]: guestSessionId(),
        ...(init?.headers ?? {}),
      },
      cache: "no-store",
    });
  } catch {
    throw new ApiError(
      "The connection was interrupted. Your text is kept; try again.",
      0,
      "NETWORK_ERROR",
      undefined,
      undefined,
      { retryable: true }
    );
  }
  const text = await response.text();
  let data: Record<string, unknown> | null = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }
  if (!response.ok) {
    const retryAfterHeader = Number(response.headers.get("retry-after"));
    throw new ApiError(
      (data?.safeMessage as string | undefined) ??
        (data?.error as string | undefined) ??
        "The request could not be completed.",
      response.status,
      data?.code as string | undefined,
      data?.fields as Record<string, string> | undefined,
      data?.checks as PreflightCheck[] | undefined,
      {
        requestId:
          (data?.requestId as string | undefined) ??
          response.headers.get("x-request-id") ??
          undefined,
        retryable: data?.retryable as boolean | undefined,
        retryAfterSeconds:
          (data?.retryAfterSeconds as number | undefined) ??
          (Number.isFinite(retryAfterHeader) && retryAfterHeader > 0
            ? retryAfterHeader
            : undefined),
      }
    );
  }
  return data as T;
}

/* ------------------------------------------------------------------ */
/* Public config (WF-01 I01 / §7.1)                                     */
/* ------------------------------------------------------------------ */

let configPromise: Promise<ConfigResponse> | null = null;

/**
 * Loads /api/assistant/config once per page. Callers must fail closed when
 * it rejects (WF-01 CONFIG_ERROR: "Coverage currently unavailable").
 */
export function loadConfig(): Promise<ConfigResponse> {
  if (!configPromise) {
    configPromise = apiJson<ConfigResponse>("/api/assistant/config").catch(
      (error) => {
        configPromise = null;
        throw error;
      }
    );
  }
  return configPromise;
}

/* ------------------------------------------------------------------ */
/* Draft hand-off (WF-01 §6.1, WF-12 INT-14: no prompt text in URLs)   */
/* ------------------------------------------------------------------ */

const DRAFT_KEY = "talvrin.assistant.draft.v1";

export interface ComposerDraft {
  question: string;
  scopeId?: ScopeId;
}

/**
 * Stores a question for the entry composer in tab-scoped storage so links
 * such as "Ask again" never carry the question in the URL.
 */
export function stashDraft(draft: ComposerDraft) {
  writeJson(guestStorage(), DRAFT_KEY, draft);
}

/** Reads and removes the pending composer draft, if any. */
export function takeDraft(): ComposerDraft | null {
  const draft = readJson<ComposerDraft | null>(guestStorage(), DRAFT_KEY, null);
  try {
    guestStorage()?.removeItem(DRAFT_KEY);
  } catch {
    // Ignore.
  }
  return draft && typeof draft.question === "string" ? draft : null;
}

/* ------------------------------------------------------------------ */
/* Guest session history (WF-06)                                       */
/* ------------------------------------------------------------------ */

export interface SessionEntry {
  ref: string;
  question: string;
  answerState: AnswerStatus;
  jobStatus: ResearchJobView["status"];
  createdAt: string;
  expiresAt: string;
  scopeIds: ScopeId[];
  scenario: string;
}

const SESSION_KEY = "talvrin.assistant.guest-session.v1";
const PREFS_GUEST_KEY = "talvrin.assistant.prefs.guest.v1";
const PREFS_ACCOUNT_KEY = "talvrin.assistant.prefs.account.v1";
const ALERTS_KEY = "talvrin.assistant.alert-drafts.v2";
const READ_KEY = "talvrin.assistant.notifications.read.v1";
const MODE_KEY = "talvrin.assistant.demo-mode.v1";
const EXPORT_HISTORY_KEY = "talvrin.assistant.exports.history.v1";

function readJson<T>(storage: Storage | null, key: string, fallback: T): T {
  if (!storage) return fallback;
  try {
    const raw = storage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(storage: Storage | null, key: string, value: unknown) {
  if (!storage) return;
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be unavailable in private modes. The UI degrades to memory.
  }
}

function guestStorage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function localStorageSafe(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function readSessionEntries(): SessionEntry[] {
  const entries = readJson<SessionEntry[]>(guestStorage(), SESSION_KEY, []);
  const now = Date.now();
  return entries
    .filter((entry) => new Date(entry.expiresAt).getTime() > now)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 10);
}

export function recordSessionEntry(job: ResearchJobView): SessionEntry {
  const entries = readSessionEntries().filter((entry) => entry.ref !== job.ref);
  const entry: SessionEntry = {
    ref: job.ref,
    question: job.question,
    answerState: job.answerState,
    jobStatus: job.status,
    createdAt: job.createdAt,
    expiresAt: job.expiresAt,
    scopeIds: job.scopeIds,
    scenario: job.scenario,
  };
  entries.unshift(entry);
  writeJson(guestStorage(), SESSION_KEY, entries.slice(0, 10));
  return entry;
}

export function updateSessionEntry(job: ResearchJobView) {
  const entries = readSessionEntries();
  const index = entries.findIndex((entry) => entry.ref === job.ref);
  if (index === -1) {
    recordSessionEntry(job);
    return;
  }
  entries[index] = {
    ...entries[index],
    answerState: job.answerState,
    jobStatus: job.status,
  };
  writeJson(guestStorage(), SESSION_KEY, entries);
}

export function clearSessionEntries() {
  writeJson(guestStorage(), SESSION_KEY, []);
}

/**
 * WF-06 HIS-08 / GUEST_EXPIRED: how many stored items have expired, plus
 * every stored reference (active or expired) so a clear can invalidate them
 * on the server. Expired titles are deliberately not returned (P0-03).
 */
export function readSessionEntryStatus(): {
  active: SessionEntry[];
  expiredCount: number;
  allRefs: string[];
} {
  const entries = readJson<SessionEntry[]>(guestStorage(), SESSION_KEY, []);
  const list = Array.isArray(entries) ? entries : [];
  const now = Date.now();
  const expiredCount = list.filter(
    (entry) => !(new Date(entry.expiresAt).getTime() > now)
  ).length;
  return {
    active: readSessionEntries(),
    expiredCount,
    allRefs: list
      .map((entry) => entry?.ref)
      .filter((ref): ref is string => typeof ref === "string"),
  };
}

export function sessionExpiryFromNow(): string {
  return new Date(Date.now() + GUEST_SESSION_TTL_MS).toISOString();
}

/* ------------------------------------------------------------------ */
/* Preferences (WF-07)                                                 */
/* ------------------------------------------------------------------ */

export const DEFAULT_PREFS: AssistantPreferences = {
  answerDensity: "standard",
  citationStyle: "inline",
  timeZone: "UTC",
  numberLocale: "en-GB",
  reduceMotion: false,
  showTimestamps: true,
  uiLocale: "en-US",
  motion: "system",
  evidenceDepth: "summary",
  readableData: false,
  followUpHints: true,
  researchFocus: [],
  marketFocus: [],
};

export function loadPrefs(mode: "guest" | "account"): AssistantPreferences {
  const storage = mode === "account" ? localStorageSafe() : guestStorage();
  const key = mode === "account" ? PREFS_ACCOUNT_KEY : PREFS_GUEST_KEY;
  return { ...DEFAULT_PREFS, ...readJson<Partial<AssistantPreferences>>(storage, key, {}) };
}

export function savePrefs(
  mode: "guest" | "account",
  prefs: AssistantPreferences
) {
  const storage = mode === "account" ? localStorageSafe() : guestStorage();
  const key = mode === "account" ? PREFS_ACCOUNT_KEY : PREFS_GUEST_KEY;
  writeJson(storage, key, prefs);
}

/* ------------------------------------------------------------------ */
/* Alert drafts (WF-09 AC-12, 03-06)                                   */
/* ------------------------------------------------------------------ */

/**
 * Local alert drafts. A draft is never Active and is never sent anywhere;
 * only a server-acknowledged commit (POST /api/assistant/alerts) creates a
 * rule. Inbox read state lives on the server, not here.
 */
export function loadAlertDrafts(): AlertDraft[] {
  return readJson<AlertDraft[]>(localStorageSafe(), ALERTS_KEY, []).filter(
    (draft) => draft && draft.status === "DRAFT"
  );
}

export function saveAlertDraft(input: AlertRuleInput): AlertDraft {
  const draft: AlertDraft = {
    ...input,
    draft_id: opaqueId("draft"),
    status: "DRAFT",
    saved_at: new Date().toISOString(),
  };
  writeJson(localStorageSafe(), ALERTS_KEY, [draft, ...loadAlertDrafts()].slice(0, 10));
  return draft;
}

export function removeAlertDraft(draftId: string) {
  writeJson(
    localStorageSafe(),
    ALERTS_KEY,
    loadAlertDrafts().filter((draft) => draft.draft_id !== draftId)
  );
}

export function clearAlertDrafts() {
  writeJson(localStorageSafe(), ALERTS_KEY, []);
}

/** Header that marks the synthetic demo account on mock account routes. */
export const DEMO_ACCOUNT_HEADERS: Record<string, string> = {
  "x-talvrin-demo-mode": "account",
};

export function loadDemoMode(): "guest" | "account" {
  const mode = readJson<"guest" | "account">(localStorageSafe(), MODE_KEY, "guest");
  return mode === "account" ? "account" : "guest";
}

export function saveDemoMode(mode: "guest" | "account") {
  writeJson(localStorageSafe(), MODE_KEY, mode);
}

/* ------------------------------------------------------------------ */
/* Export history (WF-10)                                              */
/* ------------------------------------------------------------------ */

export interface ExportHistoryEntry {
  id: string;
  answerRef: string;
  question: string;
  format: ExportFormat;
  createdAt: string;
  fileName: string | null;
  partial: boolean;
  omittedSourceCount: number;
}

export function loadExportHistory(): ExportHistoryEntry[] {
  return readJson<ExportHistoryEntry[]>(
    localStorageSafe(),
    EXPORT_HISTORY_KEY,
    []
  ).slice(0, 20);
}

export function recordExportHistory(entry: ExportHistoryEntry) {
  const entries = loadExportHistory().filter((item) => item.id !== entry.id);
  entries.unshift(entry);
  writeJson(localStorageSafe(), EXPORT_HISTORY_KEY, entries.slice(0, 20));
}

export function clearExportHistory() {
  writeJson(localStorageSafe(), EXPORT_HISTORY_KEY, []);
}

/* ------------------------------------------------------------------ */
/* Subject-scoped cache clearing (WF-11 E12, J12, P0 08/32/33)         */
/* ------------------------------------------------------------------ */

/**
 * Removes every account-scoped browser cache: demo alerts, notification
 * read state, export history and account preferences. Called on sign-out
 * and account switch. Guest session research (tab-scoped) is not touched.
 */
export function clearSubjectCaches() {
  const storage = localStorageSafe();
  for (const key of [
    ALERTS_KEY,
    READ_KEY,
    EXPORT_HISTORY_KEY,
    PREFS_ACCOUNT_KEY,
  ]) {
    try {
      storage?.removeItem(key);
    } catch {
      // Storage unavailable; nothing persisted to clear.
    }
  }
}
