"use client";

import { motion } from "framer-motion";

interface ChangeState {
  badge: string;
  badgeStyle: string;
  description: string;
}

const changeStates: ChangeState[] = [
  {
    badge: "NEW",
    badgeStyle: "bg-[rgba(185,129,50,0.1)] text-[#B98132]",
    description:
      "A new rule, consultation, notice or guidance enters released coverage.",
  },
  {
    badge: "UPDATED",
    badgeStyle: "bg-[rgba(108,92,231,0.14)] text-[#6C5CE7]",
    description:
      "Existing document metadata changes, or a new version is published.",
  },
  {
    badge: "CORRECTED",
    badgeStyle: "bg-[rgba(168,66,66,0.1)] text-[#A84242]",
    description:
      "The regulator issues a correction; the prior state remains traceable where possible.",
  },
  {
    badge: "SUPERSEDED",
    badgeStyle: "bg-[rgba(168,66,66,0.1)] text-[#A84242]",
    description:
      "A newer official version replaces an earlier document.",
  },
  {
    badge: "WITHDRAWN",
    badgeStyle: "bg-[rgba(168,66,66,0.1)] text-[#A84242]",
    description:
      "The regulator withdraws the document; the record stays visibly labelled, not removed.",
  },
  {
    badge: "SCOPE CHANGED",
    badgeStyle: "bg-[rgba(185,129,50,0.1)] text-[#B98132]",
    description:
      "The regulator’s jurisdiction or named scope changes from the prior governed record.",
  },
  {
    badge: "SOURCE UNAVAILABLE",
    badgeStyle: "bg-[rgba(93,90,114,0.1)] text-[#5D5A72]",
    description:
      "A known source cannot currently be accessed; evidence is not silently removed.",
  },
  {
    badge: "MATERIALITY PENDING",
    badgeStyle: "bg-[rgba(93,90,114,0.1)] text-[#5D5A72]",
    description:
      "A change exists but has not yet been classified for research materiality — significance is never overstated.",
  },
];

export default function MonitoringHandoff() {
  return (
    <section className="w-full bg-[#F6F5FB] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-[#6C5CE7]">
            MONITORING HANDOFF
          </span>
          <h2 className="max-w-[780px] font-sans text-[30px] font-bold leading-[1.16] text-[#171335] sm:text-[36px] md:text-[42px] md:leading-[48.72px]">
            Follow approved research and source
            <br />
            scope — no automatic notification
            <br />
            claim.
          </h2>
          <p className="max-w-[780px] pt-1 font-sans text-[16px] font-normal leading-[1.6] text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            Eight explicit change states, so a correction, withdrawal or
            supersession never disappears silently.
          </p>
        </div>

        {/* Change States Card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[rgba(23,19,53,0.08)] bg-white p-6 shadow-xs sm:p-8 md:p-10">
          <div className="divide-y divide-[rgba(23,19,53,0.08)]">
            {changeStates.map((item, idx) => (
              <motion.div
                key={item.badge}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="flex items-center gap-3 py-4"
              >
                <span
                  className={`inline-flex shrink-0 items-center rounded-[6px] px-2.5 py-1 font-sans text-[11px] font-bold tracking-wide ${item.badgeStyle}`}
                >
                  {item.badge}
                </span>
                <p className="font-sans text-[15px] font-medium text-[#171335]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
