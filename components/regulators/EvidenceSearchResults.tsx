"use client";

import { motion } from "framer-motion";

const rowContracts = [
  {
    field: "Title",
    rule: "Official document title exactly as published — never a generated substitute.",
  },
  {
    field: "Issuer",
    rule: "Named regulator or publishing body — kept separate from third-party commentary.",
  },
  {
    field: "Original identifier",
    rule: "Exact original publication identifier retained where the source provides one.",
  },
  {
    field: "Jurisdiction",
    rule: "Stable jurisdiction entity tied to the issuing authority.",
  },
  {
    field: "Source family",
    rule: "Governed taxonomy — rule, consultation, notice, guidance, enforcement or disclosure.",
  },
  {
    field: "Publication time",
    rule: "Official publication timestamp, shown separately from any effective date.",
  },
  {
    field: "Availability / rights",
    rule: "Public / entitled / restricted / metadata-only, exactly as the license supports.",
  },
];

export default function EvidenceSearchResults() {
  return (
    <section className="w-full bg-[#F6F5FB] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3">
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-[#6C5CE7]">
            EVIDENCE SEARCH & RESULTS
          </span>
          <h2 className="max-w-[780px] font-sans text-[30px] font-bold leading-[1.16] text-[#171335] sm:text-[36px] md:text-[42px] md:leading-[48.72px]">
            What a document row will show —
            <br />
            never fewer fields, never a guess.
          </h2>
          <p className="max-w-[780px] pt-1 font-sans text-[16px] font-normal leading-[1.6] text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            Sort by official publication date, issuer or source family; filter by
            jurisdiction and family once verified. Column headers stay semantic
            and source-type / rights status stay explicit.
          </p>
        </div>

        {/* Contract Section Header */}
        <div className="mt-10 border-b border-[rgba(23,19,53,0.1)] pb-3">
          <span className="font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-[#5D5A72]">
            EVIDENCE ROW CONTRACT
          </span>
        </div>

        {/* Row Contract Items */}
        <div className="divide-y divide-[rgba(23,19,53,0.1)]">
          {rowContracts.map((item, idx) => (
            <motion.div
              key={item.field}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="grid grid-cols-1 gap-3 py-4 sm:grid-cols-[220px_1fr] sm:gap-6 sm:py-5 md:grid-cols-[240px_1fr]"
            >
              <div className="flex items-center">
                <span className="inline-flex min-w-[160px] items-center justify-center rounded-md border border-[rgba(23,19,53,0.16)] bg-white px-4 py-1.5 font-sans text-[13px] font-bold text-[#171335] shadow-xs">
                  {item.field}
                </span>
              </div>
              <div className="flex items-center">
                <p className="font-sans text-[15px] font-normal leading-[1.6] text-[#322E52]">
                  {item.rule}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State Live Record Box */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-xs sm:p-7 md:p-8">
          <h3 className="font-sans text-[15px] font-semibold leading-[24px] text-[#322E52]">
            There are no published evidence records yet.
          </h3>
          <p className="mt-1 font-sans text-[14px] font-normal leading-[1.6] text-[#5D5A72]">
            Live evidence rows will follow this exact contract, with every field
            sourced from a governed registry rather than a fabricated
            placeholder.
          </p>
        </div>
      </div>
    </section>
  );
}
