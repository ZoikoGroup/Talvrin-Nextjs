"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const rows = [
  {
    label: "Institution Discovery",
    inScope:
      "Discover monetary-policy institution pages, controlled source catalogs and explanatory institution profiles.",
    outOfScope:
      "Assert that any named bank, document type, language, transcript or feed is currently supported without coverage-registry confirmation.",
  },
  {
    label: "Evidence Metadata",
    inScope:
      "Show original source, publishing body, release vs. effective date, period, jurisdiction, and original/corrected version.",
    outOfScope:
      "Invent a policy decision, interest-rate figure, committee vote, timestamp, latency, historical depth or revision.",
  },
  {
    label: "Research Journey",
    inScope: "Support discovery, evidence inspection, saved research and monitoring pathways.",
    outOfScope:
      "Fabricate a live alert channel, real-time source detection, guarantee of completeness, or investment advice.",
  },
  {
    label: "Rights & Licensing",
    inScope: "Disclose licensed or restricted source state, correction, withdrawal and supersession.",
    outOfScope: "Reproduce copyrighted or restricted materials beyond authorized terms.",
  },
];

export default function ScopeDefinition() {
  const [visible, setVisible] = useState(true);

  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Scope &amp; Claim Controls</SectionEyebrow>
          <SectionHeading>An evidence directory — not a central-bank product partnership.</SectionHeading>
          <p className="mt-5 max-w-[800px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            TALVRIN is a source-linked research and monitoring workspace for global public
            markets: Ask → Discover → Inspect → Build → Monitor → Reassess, source-before-summary,
            context-before-confidence, and AI assistance rather than AI authority.
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
              <p className="text-xs font-bold uppercase tracking-[0.72px] text-slate-600">In Scope</p>
              <p className="text-xs font-bold uppercase tracking-[0.72px] text-slate-600">
                Out of Scope / Release Gate
              </p>
            </div>

            <div className="divide-y divide-ink/10 border-t border-ink/10">
              {rows.map((row, index) => (
                <Reveal key={row.label} delay={index * 0.05}>
                  <div className="grid grid-cols-1 gap-3 pb-[20.8px] pt-5 sm:grid-cols-[200px_minmax(0,1fr)_minmax(0,1fr)] sm:items-start sm:gap-4">
                    <span className="inline-flex w-fit shrink-0 items-center rounded-md border border-ink/16 bg-white px-4 py-2 text-center text-[13px] font-bold text-ink">
                      {row.label}
                    </span>
                    <p className="text-[15px] text-ink-soft">{row.inScope}</p>
                    <p className="text-sm text-slate-600">{row.outOfScope}</p>
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
