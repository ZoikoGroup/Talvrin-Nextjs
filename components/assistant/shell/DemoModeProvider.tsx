"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { loadDemoMode, saveDemoMode } from "@/lib/assistant/client";

type DemoMode = "guest" | "account";

interface DemoModeContextValue {
  mode: DemoMode;
  isAccount: boolean;
  ready: boolean;
  setMode: (mode: DemoMode) => void;
}

const DemoModeContext = createContext<DemoModeContextValue | null>(null);

export function DemoModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<DemoMode>("guest");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setModeState(loadDemoMode());
    setReady(true);
    const onStorage = (event: StorageEvent) => {
      if (event.key === "talvrin.assistant.demo-mode.v1") {
        setModeState(loadDemoMode());
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setMode = useCallback((next: DemoMode) => {
    setModeState(next);
    saveDemoMode(next);
  }, []);

  const value = useMemo(
    () => ({
      mode,
      isAccount: mode === "account",
      ready,
      setMode,
    }),
    [mode, ready, setMode]
  );

  return (
    <DemoModeContext.Provider value={value}>
      {children}
    </DemoModeContext.Provider>
  );
}

export function useDemoMode(): DemoModeContextValue {
  const context = useContext(DemoModeContext);
  if (!context) {
    throw new Error("useDemoMode must be used inside DemoModeProvider");
  }
  return context;
}
