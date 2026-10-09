"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export const categories = [
  {
    id: "product",
    title: "Product / workflow behavior",
    description: "A button, workflow, save, filter, navigation, or state behaves unexpectedly.",
  },
  {
    id: "data",
    title: "Data / content display",
    description: "A value, label, source link, timestamp, or content element looks wrong or incomplete.",
  },
  {
    id: "performance",
    title: "Performance / reliability",
    description: "Something is slow, times out, or fails intermittently.",
  },
  {
    id: "notifications",
    title: "Notifications / monitoring",
    description: "An expected alert or update is missing, duplicated, delayed, or incorrect.",
  },
  {
    id: "integration",
    title: "Integration / developer",
    description: "An API, integration, or SDK flow doesn't behave as documented.",
  },
  {
    id: "account",
    title: "Account / permission behavior",
    description: "Sign-in, access, authorization, or entitlement issue.",
  },
  {
    id: "accessibility",
    title: "Accessibility barrier",
    description: "Keyboard, screen reader, zoom, motion, media, or form accessibility issue.",
  },
  {
    id: "security",
    title: "Security issue",
    description: "A vulnerability, exposed secret, or suspicious credential behavior.",
  },
  { id: "other", title: "Other problem", description: "Doesn't match the categories above." },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

type ReportState = {
  /** The category the visitor confirmed with Continue — this is what routes the report. */
  category: CategoryId | null;
  setCategory: (category: CategoryId) => void;
};

const ReportContext = createContext<ReportState | null>(null);

/** Shares the Step 1 choice with the Step 2 form further down the page. */
export function ReportProvider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState<CategoryId | null>(null);
  return <ReportContext.Provider value={{ category, setCategory }}>{children}</ReportContext.Provider>;
}

export function useReport() {
  const context = useContext(ReportContext);
  if (!context) throw new Error("useReport must be used inside ReportProvider");
  return context;
}
