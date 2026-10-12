"use client";

import { motion } from "framer-motion";

const principles = [
  "FASTER RESEARCH",
  "STRONGER PROVENANCE",
  "INSTITUTIONAL MEMORY",
  "CONTINUOUS MONITORING",
  "BETTER COLLABORATION",
  "GREATER REVIEWABILITY",
  "SCALABLE WORKFLOWS",
];

export default function ResearchTeamsPrinciples() {
  return (
    <section className="w-full overflow-hidden border-y border-slate-900/10 bg-white">
      <div
        className="
          mx-auto
          flex
          min-h-[112px]
          w-full
          max-w-[1440px]
          items-center
          justify-center
          px-4
          py-6
          min-[480px]:px-5
          sm:px-8
          lg:px-12
          xl:px-20
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            max-w-[1190px]
            flex-wrap
            items-center
            justify-center
            gap-x-3
            gap-y-4
            min-[480px]:gap-x-4
            sm:gap-x-5
            lg:gap-x-6
          "
        >
          {principles.map((principle, index) => (
            <motion.div
              key={principle}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="flex items-center gap-3 min-[480px]:gap-4 sm:gap-5 lg:gap-6"
            >
              <span
                className="
                  whitespace-nowrap
                  font-['IBM_Plex_Sans']
                  text-[10px]
                  font-semibold
                  tracking-[0.04em]
                  text-slate-900
                  min-[380px]:text-[11px]
                  sm:text-xs
                  sm:tracking-[0.06em]
                "
              >
                {principle}
              </span>

              {index < principles.length - 1 && (
                <span
                  aria-hidden="true"
                  className="
                    text-base
                    font-normal
                    leading-none
                    text-slate-900/25
                  "
                >
                  ·
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}