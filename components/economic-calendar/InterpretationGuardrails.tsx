"use client";

import { motion } from "framer-motion";

const guardrails = [
  {
    title: "Distinct value labels",
    description: (
      <>
        Actual, previous, revised-previous
        <br className="hidden lg:block" />
        and consensus/estimate are each
        <br className="hidden lg:block" />
        labeled distinctly, never merged.
      </>
    ),
  },
  {
    title: "Consensus disclosure",
    description: (
      <>
        Where shown, consensus discloses
        <br className="hidden lg:block" />
        it is an estimate/aggregation and
        <br className="hidden lg:block" />
        names the governed provider or
        <br className="hidden lg:block" />
        method.
      </>
    ),
  },
  {
    title: "No color-only deltas",
    description: (
      <>
        Red/green never communicates
        <br className="hidden lg:block" />
        above/below consensus alone; text
        <br className="hidden lg:block" />
        or symbol labels are always
        <br className="hidden lg:block" />
        present.
      </>
    ),
  },
  {
    title: "Explain transformations",
    description: (
      <>
        Seasonal adjustment, annualized
        <br className="hidden lg:block" />
        rates, index levels or percentage-
        <br className="hidden lg:block" />
        point vs. percent changes are
        <br className="hidden lg:block" />
        explained when needed.
      </>
    ),
  },
  {
    title: "Schedule integrity",
    description: (
      <>
        If source timing changes, the
        <br className="hidden lg:block" />
        delayed/canceled/revised state is
        <br className="hidden lg:block" />
        surfaced instead of silently moving
        <br className="hidden lg:block" />
        the event.
      </>
    ),
  },
];

export default function InterpretationGuardrails() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="flex flex-col items-start gap-3"
        >
          {/* Eyebrow */}
          <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500">
            INTERPRETATION GUARDRAILS
          </div>

          {/* Heading */}
          <h2 className="max-w-[760px] font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[42px] lg:text-5xl lg:leading-[48.72px]">
            A release is data, not a trading
            <br className="hidden sm:block" />
            instruction.
          </h2>

          {/* Description */}
          <p className="max-w-[780px] pt-2 pb-4 font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600 sm:pb-7">
            The page may explain what an event measures and whether a release
            was revised. It must not convert a release into a buy/sell
            instruction or claim a specific result will cause a specific
            market move.
          </p>
        </motion.div>

        {/* =====================================================
            GUARDRAILS PANEL
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: "easeOut",
          }}
          className="rounded-2xl bg-violet-50 p-6 sm:p-8"
        >
          <div
            className="
              grid
              grid-cols-1
              gap-8
              sm:grid-cols-2
              lg:grid-cols-5
              lg:gap-7
            "
          >
            {guardrails.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                className="
                  flex
                  flex-col
                  items-start
                  gap-[5px]
                  pb-5
                  sm:pb-2
                  lg:pb-5
                "
              >
                {/* Title */}
                <h3 className="font-['IBM_Plex_Sans'] text-base font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-['IBM_Plex_Sans'] text-sm font-normal leading-5 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}