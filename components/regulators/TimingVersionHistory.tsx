"use client";

import { motion } from "framer-motion";

const timingItems = [
  {
    type: "DOCUMENT DATE",
    description:
      "The date the regulator assigns to the document itself — distinct from when it was made public.",
  },
  {
    type: "PUBLICATION DATE",
    description:
      "When the document was officially released, with explicit time zone.",
  },
  {
    type: "EFFECTIVE DATE",
    description:
      "When a rule or requirement actually takes effect — shown as unknown until the source confirms it, never inherited from the publication date.",
  },
  {
    type: "SUPERSESSION / WITHDRAWAL",
    description:
      "When a later document replaces or withdraws this one — tracked separately, never silently overwriting the original record.",
  },
];

export default function TimingVersionHistory() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-[#B98132]">
            TIMING & VERSION HISTORY
          </span>
          <h2 className="max-w-[800px] font-sans text-[30px] font-bold leading-[1.16] text-[#171335] sm:text-[36px] md:text-[42px] md:leading-[48.72px]">
            Document, publication, effective
            <br />
            and supersession dates are different
            <br />
            questions.
          </h2>
          <p className="max-w-[800px] pt-1 font-sans text-[16px] font-normal leading-[1.6] text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            No timeline event is shown without a source-linked timestamp.
            Effective dates are never inherited from a publication date — timezone
            and locale render alongside the retained canonical timestamp.
          </p>
        </div>

        {/* Timing Rows */}
        <div className="mt-10 divide-y divide-[rgba(23,19,53,0.1)] border-t border-[rgba(23,19,53,0.1)]">
          {timingItems.map((item, idx) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-[240px_1fr] sm:gap-6 sm:py-6 md:grid-cols-[280px_1fr]"
            >
              <div className="flex items-center">
                <span className="inline-flex min-w-[200px] items-center justify-center rounded-md border border-[rgba(23,19,53,0.14)] bg-[#F6F5FB] px-4 py-2 font-sans text-[12px] font-bold tracking-wide text-[#171335] sm:text-[13px]">
                  {item.type}
                </span>
              </div>
              <div className="flex items-center">
                <p className="font-sans text-[15px] font-normal leading-[1.6] text-[#322E52]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
