"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef } from "react";

/* =========================================================
   ANIMATION
========================================================= */

const smoothEase: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

/* =========================================================
   CENTRAL BANKS HERO
========================================================= */

export default function CentralBanksHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -25]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 25]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduceMotion ? 1 : 0.99]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.9],
    [1, 0.7]
  );

  return (
    <section
      ref={heroRef}
      className="relative isolate w-full overflow-clip bg-[#171335] text-violet-50"
    >
      {/* BACKGROUND GRADIENT */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_10%_8%,rgba(99,102,241,0.20)_0%,rgba(99,102,241,0.07)_35%,transparent_70%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-48 -z-10 h-[650px] w-[650px] rounded-full bg-indigo-500/[0.05] blur-[120px]"
      />

      {/* HERO CONTAINER */}

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-12 xl:px-16 xl:py-10 2xl:px-20"
      >
        {/* CONTENT GRID */}

        <div className="grid w-full grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:grid-cols-[minmax(0,660px)_minmax(0,540px)] xl:justify-between xl:gap-8 2xl:gap-10">
          {/* LEFT CONTENT */}

          <motion.div
            style={{ y: contentY }}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="flex w-full min-w-0 flex-col items-start"
          >
            {/* EYEBROW */}

            <motion.p
              variants={fadeUp}
              className="font-['IBM_Plex_Sans'] text-[11px] font-bold uppercase tracking-[0.1em] text-amber-500 sm:text-xs"
            >
              Research / Central Banks
            </motion.p>

            {/* HEADING */}

            <motion.h1
              variants={fadeUp}
              className="mt-5 w-full max-w-[660px] font-['IBM_Plex_Sans'] text-[clamp(2rem,4.1vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.035em] text-violet-50 sm:mt-6 lg:text-[clamp(2.5rem,3.5vw,3.5rem)] xl:mt-[30px] xl:text-[56px] xl:leading-[1.22]"
            >
              Follow the decision.
              <br />
              Inspect the source.
              <br />
              Know what changed.
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              variants={fadeUp}
              className="mt-5 w-full max-w-[600px] font-['IBM_Plex_Sans'] text-[15px] font-normal leading-7 text-violet-50/70 sm:mt-6 sm:text-base sm:leading-[1.9] lg:text-[17px] xl:mt-[26px] xl:text-[18px] xl:leading-[1.8]"
            >
              Talvrin Central Banks connects policy meetings,
              official decisions, communications and source
              evidence into one research timeline — with the
              timing, jurisdiction and provenance needed to
              reassess a view when the evidence changes.
            </motion.p>

            {/* EVIDENCE NOTE */}

            <motion.p
              variants={fadeUp}
              className="mt-4 w-full max-w-[600px] font-['IBM_Plex_Sans'] text-[13px] font-normal leading-6 text-violet-50/60 sm:mt-[18px] sm:text-sm xl:text-[15px]"
            >
              Evidence first. AI may assist navigation and
              explanation; official source material remains
              separately inspectable.
            </motion.p>

            {/* CTA BUTTONS */}

            <motion.div
              variants={fadeUp}
              className="mt-6 flex w-full flex-col items-stretch gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center xl:mt-8"
            >
              <Link
                href="#research"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-violet-50 px-5 py-3 text-center font-['IBM_Plex_Sans'] text-sm font-semibold leading-5 text-[#171335] transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171335] sm:w-auto sm:px-6 sm:text-base xl:px-7"
              >
                Explore Central-Bank Research
              </Link>

              <Link
                href="#evidence"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg border border-violet-50/30 px-5 py-3 text-center font-['IBM_Plex_Sans'] text-sm font-semibold leading-5 text-violet-50 transition-colors duration-300 hover:border-violet-50/60 hover:bg-violet-50/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-50/40 sm:w-auto sm:px-6 sm:text-base xl:px-7"
              >
                <span>See How Evidence Is Sourced</span>
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>

            {/* DISCLAIMER */}

            <motion.p
              variants={fadeUp}
              className="mt-4 w-full max-w-[600px] font-['IBM_Plex_Sans'] text-xs font-normal leading-5 text-violet-50/55 sm:mt-5 sm:text-[13px] sm:leading-6"
            >
              Research and market intelligence. No trade
              execution. No manufactured investment
              recommendations or guaranteed policy forecasts.
            </motion.p>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            style={{
              y: imageY,
              scale: imageScale,
            }}
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease: smoothEase,
            }}
            className="relative mx-auto w-full min-w-0 max-w-[540px] lg:mx-0 lg:justify-self-end"
          >
            {/* RESPONSIVE IMAGE FRAME */}

            <div className="relative h-[320px] w-full overflow-hidden rounded-xl bg-[#201b47] sm:h-[420px] sm:rounded-2xl md:h-[500px] lg:h-[540px] xl:h-[620px] 2xl:h-[620px]">
              <Image
                src="/images/markets/central-banks/hero.png"
                alt="Central bank research team reviewing source evidence"
                fill
                priority
                sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 46vw, (max-width: 1599px) 40vw, 540px"
                className="object-cover object-center"
              />

              {/* SUBTLE IMAGE OVERLAY */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171335]/10 via-transparent to-[#171335]/5"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}