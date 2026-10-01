"use client";

import { motion } from "framer-motion";

const principles = [
  "ANSWER-FIRST",
  "SOURCE-LINKED",
  "CONTEXT-RICH",
  "EDITORIALLY ACCOUNTABLE",
  "CURRENT, NOT COSMETICALLY FRESH",
  "NON-ADVISORY",
];

export default function ResearchPrinciples() {
  return (
    <section className="relative w-full border-y border-slate-900/10 bg-white">
      <div className="mx-auto flex min-h-[80px] w-full max-w-[1320px] items-center justify-center px-5 py-5 sm:px-8 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3"
        >
          {principles.map((principle, index) => (
            <div
              key={principle}
              className="flex items-center gap-5"
            >
              <span className="whitespace-nowrap text-center font-['IBM_Plex_Sans'] text-[11px] font-semibold tracking-[0.06em] text-slate-900 sm:text-xs">
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
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}