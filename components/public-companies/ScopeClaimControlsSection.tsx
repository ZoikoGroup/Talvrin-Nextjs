"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

const scopeRows = [
  {
    category: "Coverage Claims",
    mayExplain: "Show issuer × market × document-family status with dated verification.",
    mustNotAssume: 'Imply “all public companies” are covered from architecture alone.',
  },
  {
    category: "Identity",
    mayExplain: "Use identifiers, exchange, jurisdiction and explicit selection to resolve an issuer.",
    mustNotAssume: "Merge entities automatically from ticker or name alone.",
  },
  {
    category: "Filings & Revisions",
    mayExplain: "Maintain an original / amended / restated / superseded document lineage.",
    mustNotAssume: "Overwrite a prior filing without preserving its history.",
  },
  {
    category: "Dates",
    mayExplain: (
      <>
        <span className="whitespace-nowrap">
          Separate reporting period, publication date and ingestion / verified-as-of as
        </span>
        <br />
        distinct fields.
      </>
    ),
    mustNotAssume: 'Merge them into a single ambiguous “last updated” label.',
  },
  {
    category: "AI & Evidence",
    mayExplain: "Use AI to help read and organize disclosures, clearly labeled as interpretation.",
    mustNotAssume: "Let generated summaries stand in for the issuer’s own filing.",
  },
  {
    category: "Rights & Licensing",
    mayExplain: "Gate preview, download and export by verified entitlement and license.",
    mustNotAssume: "Display or retain licensed document content beyond its terms.",
  },
];

export default function ScopeClaimControlsSection() {
  const [isDetailVisible, setIsDetailVisible] = useState(true);

  return (
    <section className="bg-[#F6F5FB] py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1281px] px-4 sm:px-6 xl:px-0">
        <Reveal>
          <SectionEyebrow tone="violet">SCOPE & CLAIM CONTROLS</SectionEyebrow>
          <h2 className="mt-[11.35px] max-w-[780px] text-3xl font-bold tracking-tight text-[#171335] sm:text-4xl lg:text-[42px] lg:leading-[48.72px]">
            An issuer-evidence directory — not a
            <br className="hidden sm:inline" />
            trading terminal.
          </h2>
          <p className="mt-5 w-full max-w-[800px] text-base leading-relaxed text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            This destination helps researchers inspect issuer disclosures, reporting periods, identity and revisions —
            <br className="hidden sm:inline" />
            without implying that Talvrin covers every public company or filing, or that generated interpretation is
            <br className="hidden sm:inline" />
            authoritative.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <button
            type="button"
            onClick={() => setIsDetailVisible(!isDetailVisible)}
            className="inline-flex items-center justify-center rounded-lg border border-[#171335]/20 bg-transparent px-[17.8px] py-[9.8px] text-sm font-semibold text-[#171335] transition-colors duration-200 hover:border-[#171335]/40 hover:bg-[#171335]/5"
          >
            {isDetailVisible ? "Hide in-scope / out-of-scope detail" : "Show in-scope / out-of-scope detail"}
          </button>
        </Reveal>

        {isDetailVisible && (
          <Reveal delay={0.2} className="mt-7 overflow-x-auto">
            <div className="min-w-[1160px]">
              {/* Header: Note in Figma there is NO border line below MAY EXPLAIN / MUST NOT ASSUME */}
              <div className="grid grid-cols-[200px_minmax(600px,1.4fr)_minmax(0,1fr)] items-center gap-4 pb-3 pt-7">
                <div className="w-[200px]" />
                <div className="text-xs font-bold uppercase tracking-[0.06em] text-[#5D5A72]">
                  MAY EXPLAIN
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.06em] text-[#5D5A72]">
                  MUST NOT ASSUME
                </div>
              </div>

              {/* Rows: Each row has bottom border 0.8px rgba(23, 19, 53, 0.1) */}
              <div>
                {scopeRows.map((row) => (
                  <div
                    key={row.category}
                    className="grid grid-cols-[200px_minmax(600px,1.4fr)_minmax(0,1fr)] items-center gap-4 border-b border-[#171335]/10 py-5"
                  >
                    <div>
                      <span className="inline-flex h-8 w-[200px] items-center justify-center rounded-[6px] border border-[#171335]/[0.16] bg-white px-3 py-[6.8px] text-center text-[13px] font-bold text-[#171335]">
                        {row.category}
                      </span>
                    </div>
                    <div className="text-[15px] leading-relaxed text-[#322E52]">
                      {row.mayExplain}
                    </div>
                    <div className="text-sm leading-relaxed text-[#5D5A72]">
                      {row.mustNotAssume}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

