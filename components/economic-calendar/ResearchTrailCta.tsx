"use client";

import { motion } from "framer-motion";

export default function ResearchTrailCta() {
  return (
    <section className="relative overflow-hidden border-t-[0.8px] border-slate-900/10 bg-white">
      <div className="mx-auto flex min-h-[300px] sm:min-h-[340px] lg:min-h-[384px] w-full max-w-[1320px] items-center justify-center px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.05,
            }}
            className="font-['IBM_Plex_Sans'] text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900 sm:text-[36px] md:text-[42px] lg:text-5xl lg:leading-[48.3px]"
          >
            Turn an event into a research trail.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.1,
            }}
            className="max-w-[700px] font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600"
          >
            Explore Talvrin Economic Calendar — source-linked macro events with
            timing, provenance and revision history always in view.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.15,
            }}
            className="flex w-full flex-col items-stretch justify-center gap-3 pt-3.5 sm:w-auto sm:flex-row sm:items-start sm:gap-4"
          >
            {/* Primary CTA */}
            <a
              href="#"
              className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-slate-900 px-7 py-4 font-['IBM_Plex_Sans'] text-base font-semibold text-violet-50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Explore Talvrin
            </a>

            {/* Secondary CTA */}
            <a
              href="#"
              className="inline-flex min-h-[52px] items-center justify-center rounded-lg px-7 py-4 font-['IBM_Plex_Sans'] text-base font-semibold text-slate-900 outline outline-1 outline-offset-[-1px] outline-slate-900/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
            >
              See How Talvrin Works
            </a>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="pt-0.5 font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600"
          >
            Research and market intelligence. No trade execution. No
            manufactured investment recommendations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}