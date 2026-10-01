"use client";

import { motion } from "framer-motion";

const principles = [
  "EVIDENCE BEFORE ASSERTION",
  "SOURCE BEFORE SUMMARY",
  "CONTEXT BEFORE CONFIDENCE",
  "TRANSPARENCY BEFORE PERSUASION",
  "AI ASSISTANCE, NOT AI AUTHORITY",
  "COVERAGE BEFORE CLAIMS",
  "JUDGMENT REMAINS HUMAN",
];

export default function ResearchPrinciplesStrip() {
  return (
    <section className="w-full border-y border-slate-900/10 bg-white">
      <div
        className="
          mx-auto
          flex
          min-h-[112px]
          w-full
          max-w-[1439.8px]
          items-center
          justify-center
          px-6
          py-6

          sm:px-8

          lg:px-12
          lg:py-0
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            max-w-[1320px]
            flex-wrap
            items-center
            justify-center
            gap-x-7
            gap-y-5
          "
        >
          {principles.map((principle, index) => (
            <div
              key={principle}
              className="flex items-center gap-x-7"
            >
              <span
                className="
                  whitespace-nowrap
                  text-[10px]
                  font-semibold
                  leading-[16px]
                  tracking-[0.07em]
                  text-slate-900

                  sm:text-[11px]

                  lg:text-[12px]
                "
              >
                {principle}
              </span>

              {index < principles.length - 1 && (
                <span
                  aria-hidden="true"
                  className="
                    text-[16px]
                    font-normal
                    leading-none
                    text-slate-900/25
                  "
                >
                  ·
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}