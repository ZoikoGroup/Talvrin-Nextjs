"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { AssistantPreferences } from "@/lib/assistant/types";
import {
  ApiError,
  apiJson,
  DEFAULT_PREFS,
  loadPrefs,
  savePrefs,
} from "@/lib/assistant/client";
import {
  DEMO_ACCOUNT_HEADER,
  DEMO_ACCOUNT_VALUE,
  pickEditable,
  type SettingsDocument,
} from "@/lib/assistant/settings-contract";
import { useDemoMode } from "./DemoModeProvider";

/**
 * Where committed preferences come from (WF-07 §9.1, §11.2):
 * - "local": guest, session-scoped in this tab only.
 * - "loading" / "synced": demo-account settings from the server contract.
 * - "error": the account settings service did not answer; the last local
 *   display cache is used for presentation only and writes fail closed.
 */
export type PrefsSource = "local" | "loading" | "synced" | "error";

export type CommitResult =
  | { ok: true; revision: string | null }
  | {
      ok: false;
      kind: "conflict";
      server: AssistantPreferences | null;
      revision: string | null;
      message: string;
      requestId?: string;
    }
  | {
      ok: false;
      kind: "auth" | "forbidden" | "invalid" | "error";
      message: string;
      code: string;
      fields?: Record<string, string>;
      requestId?: string;
    };

interface PrefsContextValue {
  /** Effective preferences (reduceMotion resolved from motion + OS). */
  prefs: AssistantPreferences;
  /** Last committed values, before motion resolution. */
  storedPrefs: AssistantPreferences;
  /** Local-only write. Kept for existing callers. */
  setPrefs: (next: AssistantPreferences) => void;
  resetPrefs: () => void;
  hydrated: boolean;
  source: PrefsSource;
  revision: string | null;
  systemReducedMotion: boolean;
  /** Guest: applies to this tab. Account: PUT with If-Match; never optimistic. */
  commitPrefs: (next: AssistantPreferences) => Promise<CommitResult>;
  /** Re-reads the account document (after a conflict or error). */
  reloadPrefs: () => Promise<AssistantPreferences | null>;
}

const PrefsContext = createContext<PrefsContextValue | null>(null);

export function accountHeaders(mode: "guest" | "account"): Record<string, string> {
  return mode === "account" ? { [DEMO_ACCOUNT_HEADER]: DEMO_ACCOUNT_VALUE } : {};
}

function fromDocument(
  base: AssistantPreferences,
  doc: SettingsDocument
): AssistantPreferences {
  return { ...base, ...pickEditable({ ...base, ...doc.editable }) };
}

export function AssistantPrefsProvider({ children }: { children: ReactNode }) {
  const { mode, ready } = useDemoMode();
  const [stored, setStored] = useState<AssistantPreferences>(DEFAULT_PREFS);
  const [hydrated, setHydrated] = useState(false);
  const [source, setSource] = useState<PrefsSource>("local");
  const [revision, setRevision] = useState<string | null>(null);
  const [systemReducedMotion, setSystemReducedMotion] = useState(false);
  const storedRef = useRef(stored);
  const modeRef = useRef(mode);

  useEffect(() => {
    storedRef.current = stored;
  }, [stored]);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setSystemReducedMotion(query.matches);
    const onChange = (event: MediaQueryListEvent) =>
      setSystemReducedMotion(event.matches);
    query.addEventListener?.("change", onChange);
    return () => query.removeEventListener?.("change", onChange);
  }, []);

  const applyDocument = useCallback((doc: SettingsDocument) => {
    const next = fromDocument(storedRef.current, doc);
    setStored(next);
    storedRef.current = next;
    // Display cache only; the server document stays authoritative.
    savePrefs("account", next);
    setRevision(doc.revision);
    setSource("synced");
    return next;
  }, []);

  const fetchDocument = useCallback(async () => {
    if (modeRef.current !== "account") return null;
    try {
      const doc = await apiJson<SettingsDocument>("/api/assistant/settings", {
        headers: accountHeaders("account"),
      });
      if (modeRef.current !== "account") return null;
      return { prefs: applyDocument(doc), revision: doc.revision };
    } catch {
      if (modeRef.current === "account") setSource("error");
      return null;
    }
  }, [applyDocument]);

  const reloadPrefs = useCallback(
    async () => (await fetchDocument())?.prefs ?? null,
    [fetchDocument]
  );

  useEffect(() => {
    if (!ready) return;
    const local = loadPrefs(mode);
    setStored(local);
    storedRef.current = local;
    setHydrated(true);
    if (mode === "account") {
      setSource("loading");
      setRevision(null);
      void reloadPrefs();
    } else {
      setSource("local");
      setRevision(null);
    }
  }, [mode, ready, reloadPrefs]);

  const setPrefs = useCallback(
    (next: AssistantPreferences) => {
      setStored(next);
      savePrefs(mode, next);
    },
    [mode]
  );

  const resetPrefs = useCallback(() => {
    setStored(DEFAULT_PREFS);
    savePrefs(mode, DEFAULT_PREFS);
  }, [mode]);

  const commitPrefs = useCallback(
    async (next: AssistantPreferences): Promise<CommitResult> => {
      if (mode !== "account") {
        setStored(next);
        savePrefs("guest", next);
        return { ok: true, revision: null };
      }
      if (!revision) {
        return {
          ok: false,
          kind: "error",
          code: "SETTINGS_UNAVAILABLE",
          message:
            "Account settings could not be loaded, so nothing was saved. Retry when the service is available.",
        };
      }
      try {
        const doc = await apiJson<SettingsDocument>("/api/assistant/settings", {
          method: "PUT",
          headers: { ...accountHeaders("account"), "if-match": `"${revision}"` },
          body: JSON.stringify({ editable: pickEditable(next) }),
        });
        applyDocument(doc);
        return { ok: true, revision: doc.revision };
      } catch (error) {
        const apiError =
          error instanceof ApiError
            ? error
            : new ApiError("Settings were not saved.", 0, "NETWORK_ERROR");
        if (apiError.status === 412) {
          const latest = await fetchDocument();
          return {
            ok: false,
            kind: "conflict",
            server: latest?.prefs ?? null,
            revision: latest?.revision ?? null,
            message: apiError.message,
            requestId: apiError.requestId,
          };
        }
        return {
          ok: false,
          kind:
            apiError.status === 401
              ? "auth"
              : apiError.status === 403
                ? "forbidden"
                : apiError.status === 422
                  ? "invalid"
                  : "error",
          code: apiError.code,
          message: apiError.message,
          fields: apiError.fields,
          requestId: apiError.requestId,
        };
      }
    },
    [mode, revision, applyDocument, fetchDocument]
  );

  const prefs = useMemo<AssistantPreferences>(
    () => ({
      ...stored,
      reduceMotion:
        stored.motion === "reduce" || systemReducedMotion,
    }),
    [stored, systemReducedMotion]
  );

  const value = useMemo(
    () => ({
      prefs,
      storedPrefs: stored,
      setPrefs,
      resetPrefs,
      hydrated,
      source,
      revision,
      systemReducedMotion,
      commitPrefs,
      reloadPrefs,
    }),
    [
      prefs,
      stored,
      setPrefs,
      resetPrefs,
      hydrated,
      source,
      revision,
      systemReducedMotion,
      commitPrefs,
      reloadPrefs,
    ]
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function useAssistantPrefs(): PrefsContextValue {
  const context = useContext(PrefsContext);
  if (!context) {
    throw new Error("useAssistantPrefs must be used inside AssistantPrefsProvider");
  }
  return context;
}
