"use client";

import { motion } from "framer-motion";

export default function ResearchCTA() {
  return (
    <section className="w-full overflow-hidden border-t border-slate-900/10 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-[88px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center"
        >
          {/* Heading */}
          <h2 className="text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[44px] lg:text-5xl lg:leading-[48.3px] [font-family:'IBM_Plex_Sans']">
            Build research that remains
            <br className="hidden sm:block" />
            {" "}connected to the evidence.
          </h2>

          {/* Description */}
          <p className="text-base font-normal leading-7 text-gray-600 [font-family:'IBM_Plex_Sans']">
            Explore how Talvrin can help you discover evidence, inspect
            sources, build a defensible research view, and monitor what
            changes next.
          </p>

          {/* Buttons */}
          <div className="flex w-full flex-col items-stretch justify-center gap-3 pt-3.5 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <a
              href="/research/research-library"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-7 py-4 text-base font-semibold leading-5 text-violet-50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 [font-family:'IBM_Plex_Sans']"
            >
              Explore Talvrin Research
            </a>

            <a
              href="/trust/evidence-standards"
              className="inline-flex items-center justify-center rounded-lg border border-slate-900/25 px-7 py-4 text-base font-semibold leading-5 text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 [font-family:'IBM_Plex_Sans']"
            >
              See Evidence Principles
            </a>
          </div>

          {/* Disclaimer */}
          <p className="pt-0.5 text-center text-sm font-normal leading-6 text-gray-600 [font-family:'IBM_Plex_Sans']">
            Research and market intelligence. No legal advice. No trade
            execution. No manufactured buy/sell/hold recommendations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}