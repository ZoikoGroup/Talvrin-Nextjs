"use client";

import { motion } from "framer-motion";

const highlights = [
  "SOURCE-GOVERNED INVENTORY",
  "ANSWER-FIRST SUMMARIES",
  "REAL PUBLICATION DATES",
  "STABLE CANONICALS",
  "ACCESSIBLE BY DEFAULT",
  "NON-ADVISORY",
];

export default function ResearchLibraryHighlights() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        border-y
        border-slate-900/10
        bg-white
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[96px]
          w-full
          max-w-[1439.8px]
          items-center
          px-5
          py-6
          sm:px-7
          lg:px-[52.4px]
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            flex-wrap
            items-center
            justify-center
            gap-x-7
            gap-y-3
            lg:gap-x-7
          "
        >
          {highlights.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-7"
            >
              <span
                className="
                  whitespace-nowrap
                  font-['IBM_Plex_Sans']
                  text-[11px]
                  font-semibold
                  leading-4
                  tracking-[0.06em]
                  text-slate-900
                  sm:text-xs
                "
              >
                {item}
              </span>

              {index < highlights.length - 1 && (
                <span
                  aria-hidden="true"
                  className="
                    font-['IBM_Plex_Sans']
                    text-base
                    font-normal
                    leading-4
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