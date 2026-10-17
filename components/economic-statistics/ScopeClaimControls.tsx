"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const rows = [
  {
    label: "Coverage Claims",
    mayExplain: "Show capability × country × publisher status with dated verification.",
    mustNotAssume: "Imply global statistical coverage from architecture alone.",
  },
  {
    label: "Data Dates",
    mayExplain: "Separate publication date, reference period and vintage as distinct fields.",
    mustNotAssume: "Merge them into a single ambiguous “last updated” label.",
  },
  {
    label: "Revisions",
    mayExplain: "Maintain a versioned vintage log with corrected and withdrawn states.",
    mustNotAssume: "Overwrite a prior value without preserving its history.",
  },
  {
    label: "AI & Evidence",
    mayExplain: "Use AI to help organize and explain statistical evidence, clearly labeled as interpretation.",
    mustNotAssume: "Let generated content appear more authoritative than the issuing agency’s own documents.",
  },
  {
    label: "Comparability",
    mayExplain: "Flag methodology, unit, adjustment and geography differences before any comparison.",
    mustNotAssume: "Silently normalize or compare incomparable series.",
  },
  {
    label: "Licensing",
    mayExplain: "Enforce entitlement checks and a governed license registry before any export.",
    mustNotAssume: "Display or retain data beyond its licensed terms.",
  },
];

export default function ScopeClaimControls() {
  const [visible, setVisible] = useState(true);

  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Scope &amp; Claim Controls</SectionEyebrow>
          <SectionHeading>
            An evidence directory — not a statistical-series ingestion engine.
          </SectionHeading>
          <p className="mt-5 max-w-[800px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            This destination helps researchers understand and find official economic-statistical
            evidence, its meaning, release timing, series definitions and revisions — without
            implying that Talvrin distributes every source or that generated interpretation is
            authoritative.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-7">
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg border border-ink/20 px-5 py-[11px] text-sm font-semibold text-ink"
          >
            {visible ? "Hide" : "Show"} in-scope / out-of-scope detail
          </button>
        </Reveal>

        {visible && (
          <>
            <div className="mt-7 grid grid-cols-1 gap-3 pb-3 sm:grid-cols-[200px_minmax(0,1fr)_minmax(0,1fr)] sm:gap-4">
              <span aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.72px] text-slate-600">
                May Explain
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.72px] text-slate-600">
                Must Not Assume
              </p>
            </div>

            <div className="divide-y divide-ink/10 border-t border-ink/10">
              {rows.map((row, index) => (
                <Reveal key={row.label} delay={index * 0.05}>
                  <div className="grid grid-cols-1 gap-3 pb-[20.8px] pt-5 sm:grid-cols-[200px_minmax(0,1fr)_minmax(0,1fr)] sm:items-start sm:gap-4">
                    <span className="inline-flex w-fit shrink-0 items-center rounded-md border border-ink/16 bg-white px-4 py-2 text-center text-[13px] font-bold text-ink">
                      {row.label}
                    </span>
                    <p className="text-[15px] text-ink-soft">{row.mayExplain}</p>
                    <p className="text-sm text-slate-600">{row.mustNotAssume}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
