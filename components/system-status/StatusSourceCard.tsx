"use client";

import { useState } from "react";
import { UnknownDot, UnknownPill } from "./shared";

/**
 * No authoritative status source is connected on this build, so "Check again"
 * can only confirm that — it records when the check happened and never
 * flips to an assumed "operational" state.
 */
export default function StatusSourceCard() {
  const [lastChecked, setLastChecked] = useState<string | null>(null);

  return (
    <div className="w-full max-w-[680px] rounded-2xl bg-white px-5 pb-6 pt-7 sm:px-7 sm:pt-11">
      <div className="flex flex-col-reverse items-start gap-3 sm:flex-row sm:justify-between">
        <div className="flex items-start gap-3.5">
          <span className="pt-[5px]">
            <UnknownDot size="lg" />
          </span>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold leading-7 text-ink">Status source not yet connected</h2>
            <p className="text-sm text-muted">Scope: public customer-facing services</p>
          </div>
        </div>
        <UnknownPill className="py-[5px]">SOURCE UNAVAILABLE</UnknownPill>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted">
        Not available — no authoritative status source is connected for this build.
      </p>

      <div className="mt-4 flex flex-col items-start gap-3 border-t border-ink/10 pt-4 sm:flex-row sm:items-center sm:gap-4">
        <button
          type="button"
          onClick={() =>
            setLastChecked(
              new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
            )
          }
          className="rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          Check again
        </button>
        <a
          href="#components"
          className="text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
        >
          View component directory →
        </a>
      </div>

      <p aria-live="polite" className="text-xs text-muted empty:hidden">
        {lastChecked && (
          <span className="mt-3 block">Checked at {lastChecked} — still no status source connected.</span>
        )}
      </p>
    </div>
  );
}
