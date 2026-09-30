"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EconomicCalendarHero() {
  return (
    <section className="relative overflow-hidden bg-[#17133B] text-violet-50">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_6%,rgba(99,102,241,0.20),transparent_65%)]"
      />

      <div className="relative mx-auto flex min-h-[719px] w-full max-w-[1440px] items-center px-6 py-20 sm:px-8 lg:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,560px)] lg:gap-14">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex w-full max-w-[578px] flex-col items-start gap-4"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <span className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
                RESEARCH / ECONOMIC CALENDAR
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="pt-1.5 font-['IBM_Plex_Sans'] text-[42px] font-bold leading-[1.08] tracking-[-0.025em] text-violet-50 sm:text-[50px] sm:leading-[1.08] lg:text-[60px] lg:leading-[63.8px]"
            >
              Economic events,
              <br />
              connected to the
              <br />
              evidence.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-[560px] pt-2 font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-violet-50/70 sm:text-lg sm:leading-8"
            >
              Track upcoming and released macroeconomic events with clear
              timing, source provenance, revision history and research context
              — so you can inspect what changed, not just watch a countdown.
            </motion.p>

            {/* Disclaimer */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-[540px] font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-violet-50/60 sm:text-base"
            >
              Research and intelligence platform. No trade execution. No
              manufactured investment recommendations.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex w-full flex-col items-stretch gap-3 pt-4 sm:w-auto sm:flex-row sm:items-start sm:gap-4"
            >
              <a
                href="#todays-events"
                className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-violet-50 px-7 py-4 font-['IBM_Plex_Sans'] text-base font-semibold text-slate-900 transition-transform duration-200 hover:-translate-y-0.5"
              >
                View Today&apos;s Events
              </a>

              <a
                href="#evidence-sourced"
                className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-violet-50/30 px-7 py-4 font-['IBM_Plex_Sans'] text-base font-semibold text-violet-50 transition-colors duration-200 hover:bg-violet-50/10"
              >
                How Evidence Is Sourced →
              </a>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full"
          >
            <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[2px]">
              <Image
                src="/images/research/economic-calendar/hero.png"
                alt="Economic calendar research meeting"
                width={560}
                height={560}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}