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
      <div className="mx-auto flex min-h-[112px] w-full max-w-[1440px] items-center justify-center px-5 py-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex w-full max-w-[1190px] flex-wrap items-center justify-center gap-x-6 gap-y-4"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={principle}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="flex items-center gap-6"
            >
              <span className="whitespace-nowrap text-[11px] font-semibold tracking-[0.06em] text-slate-900 sm:text-xs [font-family:'IBM_Plex_Sans']">
                {principle}
              </span>

              {index < principles.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-base font-normal text-slate-900/25"
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