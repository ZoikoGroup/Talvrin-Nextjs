"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

/* =========================================================
   BROWSE ITEMS
========================================================= */

const browseItems = [
  "Market Structure",
  "Fixed Income",
  "Central Banks",
  "Macro",
  "Companies & Filings",
  "Regulation & Policy",
  "Methodology",
  "Evidence & Data",
];

/* =========================================================
   ANIMATION
========================================================= */

const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ResearchLibraryHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentYRaw = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [20, 0, -10]
  );

  const imageYRaw = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [25, 0, -15]
  );

  const contentY = useSpring(contentYRaw, {
    stiffness: 90,
    damping: 25,
    mass: 0.5,
  });

  const imageY = useSpring(imageYRaw, {
    stiffness: 75,
    damping: 25,
    mass: 0.6,
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.985, 1, 1.01]
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.75, 1],
    [0.85, 1, 1, 0.95]
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#1E1B49] text-violet-50"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(103,82,177,0.12),transparent_34%)]"
      />

      {/* MAIN CONTAINER */}

      <div className="relative mx-auto w-full max-w-[1440px] px-4 py-10 min-[480px]:px-5 sm:py-12 md:px-8 lg:px-12 lg:py-14 xl:px-16 xl:py-16 min-[1024px]:max-[1200px]:py-8">
        <div className="grid w-full grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,555px)] xl:gap-12">
          {/* LEFT CONTENT */}

          <motion.div
            style={{
              y: shouldReduceMotion ? 0 : contentY,
            }}
            className="flex w-full min-w-0 flex-col items-start gap-3 lg:max-w-[578px]"
          >
            {/* EYEBROW */}

            <span className="font-['IBM_Plex_Sans'] text-xs font-bold uppercase leading-4 tracking-[0.08em] text-indigo-400 sm:text-sm">
              Research / Research Library
            </span>

            {/* HEADING */}

            <h1 className="w-full pt-1 font-['IBM_Plex_Sans'] text-[clamp(2rem,4.2vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.025em] text-violet-50 min-[1024px]:max-[1200px]:text-[clamp(2rem,3.5vw,2.5rem)]">
              Find research that stays connected to the evidence.
            </h1>

            {/* DESCRIPTION */}

            <p className="w-full max-w-[560px] pt-1 text-sm font-normal leading-6 text-violet-50/70 sm:text-base sm:leading-7 lg:text-[15px] xl:text-base">
              Search and browse approved TALVRIN public-market research
              with concise summaries, real publication dates, source
              context, and market or jurisdiction metadata where relevant.
            </p>

            {/* SEARCH BAR */}

            <form
              role="search"
              onSubmit={(event) => event.preventDefault()}
              className="flex w-full max-w-[600px] items-center gap-2 rounded-xl border border-violet-50/20 bg-violet-50/5 p-2 focus-within:border-violet-50/50"
            >
              <label
                htmlFor="research-library-search"
                className="sr-only"
              >
                Search research library
              </label>

              <input
                id="research-library-search"
                type="search"
                placeholder="Search by market, issuer, central bank, policy topic, or theme..."
                className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-sm text-violet-50 outline-none placeholder:text-violet-50/45 sm:text-base"
              />

              <button
                type="submit"
                className="shrink-0 rounded-lg bg-violet-50 px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 active:scale-[0.98] sm:px-5"
              >
                Search
              </button>
            </form>

            {/* BROWSE LINKS */}

            <div className="flex w-full flex-wrap items-center gap-x-3 gap-y-2 pt-1 sm:gap-x-4">
              <span className="font-['IBM_Plex_Sans'] text-xs leading-5 text-violet-50/50">
                Browse:
              </span>

              {browseItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="font-['IBM_Plex_Sans'] text-xs leading-5 text-indigo-300/90 transition-colors duration-200 hover:text-violet-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* DISCLAIMER */}

            <p className="pt-1 text-xs leading-5 text-violet-50/60 sm:text-sm">
              Public research and market intelligence. Not investment advice.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    y: imageY,
                    scale: imageScale,
                    opacity: imageOpacity,
                  }
            }
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.98,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              ease: smoothEase,
            }}
            className="relative mx-auto w-full min-w-0 max-w-[555px]"
          >
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl border border-violet-50/10 sm:aspect-[4/3] lg:aspect-square lg:max-h-[480px] min-[1024px]:max-[1200px]:aspect-[5/4] xl:aspect-square">
              <Image
                src="/images/research/research-library/hero.png"
                alt="TALVRIN research library"
                fill
                priority
                sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1200px) 42vw, (max-width: 1440px) 40vw, 555px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}