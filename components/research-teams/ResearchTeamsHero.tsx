"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ResearchTeamsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#171335]">
      <div className="mx-auto w-full max-w-[1440px] px-4 min-[480px]:px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex w-full flex-col justify-center gap-8 py-12 sm:gap-10 sm:py-14 lg:min-h-[650px] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-16 xl:min-h-[680px] xl:gap-12 xl:py-20 2xl:min-h-[720px]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex w-full min-w-0 flex-col items-start gap-4 lg:flex-1 lg:max-w-[580px]"
          >
            {/* Eyebrow */}
            <p className="w-full break-words font-['IBM_Plex_Sans'] text-xs font-bold tracking-[0.08em] text-indigo-500 sm:text-sm">
              SOLUTIONS / RESEARCH TEAMS
            </p>

            {/* Heading */}
            <h1 className="w-full break-words pt-1 font-['IBM_Plex_Sans'] text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-violet-50 xl:text-6xl xl:leading-[1.08]">
              Build research your team can reuse, review, and reassess.
            </h1>

            {/* Main Description */}
            <p className="w-full max-w-[560px] pt-1 font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-violet-50/70 sm:text-lg sm:leading-8">
              Talvrin connects research questions, source-linked evidence,
              context, research views, and continuous monitoring — so teams
              work from a more consistent evidence base and preserve why a
              conclusion was reached.
            </p>

            {/* Secondary Description */}
            <p className="w-full max-w-[560px] font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-violet-50/60 sm:text-base sm:leading-7">
              Repeatable, collaborative, monitored workflows — without turning
              shared access into invented approvals, permissions, or audit
              mechanics.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 pt-3 min-[480px]:flex-row min-[480px]:flex-wrap sm:gap-4 lg:flex-wrap">
              <a
                href="/solutions/research-teams"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-violet-50 px-5 py-3 text-center font-['IBM_Plex_Sans'] text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white min-[480px]:w-auto sm:px-6 sm:py-4 sm:text-base"
              >
                Explore Research Teams
              </a>

              <a
                href="/research/talvrin-methodology"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-violet-50/30 px-5 py-3 text-center font-['IBM_Plex_Sans'] text-sm font-semibold text-violet-50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-50/10 min-[480px]:w-auto sm:px-6 sm:py-4 sm:text-base"
              >
                See How Talvrin Works
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </div>

            {/* Disclaimer */}
            <p className="w-full pt-1 font-['IBM_Plex_Sans'] text-xs font-normal leading-5 text-violet-50/60 sm:text-sm sm:leading-6">
              Research and intelligence. No trade execution. No manufactured
              investment recommendations.
            </p>
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
            className="relative w-full min-w-0 lg:w-[42%] lg:max-w-[500px] lg:flex-none"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl min-[480px]:aspect-[5/3] lg:aspect-[4/5] xl:aspect-[5/6]">
              <Image
                src="/images/solutions/research-teams/hero.png"
                alt="Research team collaborating in a professional environment"
                fill
                priority
                sizes="(max-width: 479px) calc(100vw - 32px), (max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 42vw, 500px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}