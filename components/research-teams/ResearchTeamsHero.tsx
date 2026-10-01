"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ResearchTeamsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#171335]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div className="flex min-h-[680px] w-full flex-col justify-center gap-10 py-10 sm:min-h-[720px] sm:py-12 lg:min-h-[558px] lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:py-[42px]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex w-full max-w-[577.9px] flex-col items-start gap-4"
          >
            {/* Eyebrow */}
            <div className="w-full">
              <p className="text-xs font-bold tracking-[0.08em] text-indigo-500 [font-family:'IBM_Plex_Sans']">
                SOLUTIONS / RESEARCH TEAMS
              </p>
            </div>

            {/* Heading */}
            <div className="w-full pt-2">
              <h1 className="text-[42px] font-bold leading-[1.08] tracking-[-0.02em] text-violet-50 sm:text-[52px] sm:leading-[1.08] lg:text-6xl lg:leading-[63.8px] [font-family:'IBM_Plex_Sans']">
                Build research your
                <br />
                team can reuse,
                <br />
                review, and
                <br />
                reassess.
              </h1>
            </div>

            {/* Main Description */}
            <div className="w-full max-w-[560px] pt-2">
              <p className="text-base font-normal leading-7 text-violet-50/70 sm:text-lg sm:leading-8 [font-family:'IBM_Plex_Sans']">
                Talvrin connects research questions, source-linked evidence,
                context, research views, and continuous monitoring — so teams
                work from a more consistent evidence base and preserve why a
                conclusion was reached.
              </p>
            </div>

            {/* Secondary Description */}
            <div className="w-full max-w-[560px]">
              <p className="text-sm font-normal leading-6 text-violet-50/60 sm:text-base [font-family:'IBM_Plex_Sans']">
                Repeatable, collaborative, monitored workflows — without
                turning shared access into invented approvals, permissions, or
                audit mechanics.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 pt-4 sm:w-auto sm:flex-row sm:gap-4">
              <a
                href="/solutions/research-teams"
                className="inline-flex items-center justify-center rounded-lg bg-violet-50 px-7 py-4 text-base font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white [font-family:'IBM_Plex_Sans']"
              >
                Explore Research Teams
              </a>

              <a
                href="/research/talvrin-methodology"
                className="inline-flex items-center justify-center rounded-lg border border-violet-50/30 px-7 py-4 text-base font-semibold text-violet-50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-50/10 [font-family:'IBM_Plex_Sans']"
              >
                See How Talvrin Works →
              </a>
            </div>

            {/* Disclaimer */}
            <div className="w-full pt-[4.8px]">
              <p className="text-sm font-normal leading-6 text-violet-50/60 [font-family:'IBM_Plex_Sans']">
                Research and intelligence. No trade execution. No
                manufactured investment recommendations.
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full max-w-[500px] shrink-0 lg:self-center"
          >
            <div
              className="
                relative
                h-[460px]
                w-full
                overflow-hidden
                rounded-2xl
                sm:h-[540px]
                lg:h-[620px]
              "
            >
              <Image
                src="/images/solutions/research-teams/hero.png"
                alt="Research team collaborating in a professional environment"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 500px, 500px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}