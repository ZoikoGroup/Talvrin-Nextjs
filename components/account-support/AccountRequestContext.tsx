"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export const issues = [
  { id: "sign-in", title: "Sign-in or access problem", body: "I can't access my account." },
  { id: "profile", title: "Account profile or details", body: "I need help with account information." },
  {
    id: "verification",
    title: "Access method or verification problem",
    body: "My normal verification or sign-in path is unavailable.",
  },
  {
    id: "workspace",
    title: "Organization or workspace access",
    body: "I can't access, leave, or join the correct organization or workspace.",
  },
  {
    id: "account-state",
    title: "Account state",
    body: "My account appears restricted, disabled, closed, or otherwise unavailable.",
  },
] as const;

export type IssueId = (typeof issues)[number]["id"];
export type SignInAnswer = "yes" | "no";

type AccountRequestState = {
  issue: IssueId | null;
  setIssue: (issue: IssueId) => void;
  canSignIn: SignInAnswer | null;
  setCanSignIn: (answer: SignInAnswer) => void;
};

const AccountRequestContext = createContext<AccountRequestState | null>(null);

/** Shares the hero's issue/sign-in answers with the request form further down the page. */
export function AccountRequestProvider({ children }: { children: ReactNode }) {
  const [issue, setIssueState] = useState<IssueId | null>(null);
  const [canSignIn, setCanSignIn] = useState<SignInAnswer | null>(null);

  function setIssue(next: IssueId) {
    setIssueState(next);
    // A different issue may route differently, so the sign-in answer is asked again.
    setCanSignIn(null);
  }

  return (
    <AccountRequestContext.Provider value={{ issue, setIssue, canSignIn, setCanSignIn }}>
      {children}
    </AccountRequestContext.Provider>
  );
}

export function useAccountRequest() {
  const context = useContext(AccountRequestContext);
  if (!context) throw new Error("useAccountRequest must be used inside AccountRequestProvider");
  return context;
}
