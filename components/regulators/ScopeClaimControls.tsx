"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScopeItem {
  category: string;
  inScope: string;
  outOfScope: string;
}

const scopeData: ScopeItem[] = [
  {
    category: "Authority Identification",
    inScope:
      "Show explicit issuer, jurisdiction and institutional-role descriptors for every regulator profile.",
    outOfScope:
      "Imply a universal regulatory category — the same document type can carry different legal force across jurisdictions.",
  },
  {
    category: "Legal-State Timing",
    inScope:
      "Separate issue, publication, effective, superseded and withdrawal dates for every document.",
    outOfScope:
      "Default any document to “in force” or infer enactment from publication alone.",
  },
  {
    category: "Evidence & AI",
    inScope:
      "Use AI to help organize, summarize and compare source material, clearly labeled as interpretation.",
    outOfScope:
      "Let a generated summary stand in for the original publication or imply AI is the source of record.",
  },
  {
    category: "Rights & Licensing",
    inScope:
      "Disclose per-item view, download, export and monitoring rights exactly as licensed.",
    outOfScope:
      "Assume republication, download or export is permitted because a record is publicly listed.",
  },
];

export default function ScopeClaimControls() {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <section className="w-full bg-[#F6F5FB] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-[#6C5CE7]">
            SCOPE & CLAIM CONTROLS
          </span>
          <h2 className="max-w-[780px] font-sans text-[30px] font-bold leading-[1.16] text-[#171335] sm:text-[36px] md:text-[42px] md:leading-[48.72px]">
            An evidence directory — not a
            <br />
            compliance determination engine.
          </h2>
          <p className="max-w-[800px] pt-2 font-sans text-[16px] font-normal leading-[1.6] text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            TALVRIN is a source-linked research and monitoring workspace for
            global public-market regulatory evidence: Ask → Discover → Inspect →
            Build → Monitor → Reassess, source-before-summary, context-before-confidence,
            and AI assistance rather than AI authority.
          </p>

          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="mt-3 inline-flex items-center justify-center rounded-lg border border-[rgba(23,19,53,0.2)] bg-transparent px-4 py-2 font-sans text-[14px] font-semibold text-[#171335] transition-colors hover:bg-[rgba(23,19,53,0.05)] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
          >
            {showDetails
              ? "Hide in-scope / out-of-scope detail"
              : "Show in-scope / out-of-scope detail"}
          </button>
        </div>

        {/* Comparison Table */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 overflow-hidden"
            >
              {/* Table Column Headers */}
              <div className="hidden grid-cols-[240px_1fr_1fr] gap-6 border-b border-[rgba(23,19,53,0.1)] pb-3 md:grid">
                <div />
                <div className="font-sans text-[12px] font-bold tracking-[0.06em] text-[#5D5A72] uppercase">
                  IN SCOPE
                </div>
                <div className="font-sans text-[12px] font-bold tracking-[0.06em] text-[#5D5A72] uppercase">
                  OUT OF SCOPE / RELEASE GATE
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[rgba(23,19,53,0.1)]">
                {scopeData.map((item) => (
                  <div
                    key={item.category}
                    className="grid grid-cols-1 gap-4 py-5 md:grid-cols-[240px_1fr_1fr] md:gap-6 md:py-6"
                  >
                    {/* Category Badge */}
                    <div className="flex items-start">
                      <span className="inline-flex items-center rounded-md border border-[rgba(23,19,53,0.16)] bg-white px-3.5 py-1.5 font-sans text-[13px] font-bold text-[#171335] shadow-xs">
                        {item.category}
                      </span>
                    </div>

                    {/* In Scope */}
                    <div>
                      <span className="mb-1 block font-sans text-[11px] font-bold uppercase tracking-wider text-[#5D5A72] md:hidden">
                        In Scope
                      </span>
                      <p className="font-sans text-[15px] font-normal leading-[1.6] text-[#322E52]">
                        {item.inScope}
                      </p>
                    </div>

                    {/* Out of Scope */}
                    <div>
                      <span className="mb-1 block font-sans text-[11px] font-bold uppercase tracking-wider text-[#5D5A72] md:hidden">
                        Out of Scope / Release Gate
                      </span>
                      <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#5D5A72]">
                        {item.outOfScope}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
