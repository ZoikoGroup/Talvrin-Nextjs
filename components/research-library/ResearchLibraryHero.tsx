"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

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

export default function ResearchLibraryHero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  /*
   * Scroll progress for the hero section.
   *
   * The animation is intentionally subtle so the page
   * remains visually close to the Figma design.
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [35, 0, -20]),
    {
      stiffness: 90,
      damping: 25,
      mass: 0.5,
    }
  );

  const imageY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -35]),
    {
      stiffness: 75,
      damping: 25,
      mass: 0.6,
    }
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.97, 1, 1.02]
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.75, 1],
    [0.7, 1, 1, 0.9]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#1E1B49]
        text-violet-50
      "
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_72%_45%,rgba(103,82,177,0.12),transparent_34%)]
        "
      />

      {/* ============================================================
          MAIN CONTAINER
      ============================================================ */}

      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-[1240px]
          items-center
          px-5
          py-14
          sm:px-7
          sm:py-16
          lg:min-h-[490px]
          lg:py-[66px]
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-10
            sm:gap-12
            lg:grid-cols-[minmax(0,1fr)_555px]
            lg:gap-[48px]
          "
        >
          {/* ========================================================
              LEFT CONTENT
          ======================================================== */}

          <motion.div
            style={{ y: contentY }}
            className="
              flex
              w-full
              max-w-[578px]
              flex-col
              items-start
              gap-[14px]
            "
          >
            {/* ------------------------------------------------------
                EYEBROW
            ------------------------------------------------------ */}

            <div className="flex w-full flex-col items-start">
              <span
                className="
                  font-['IBM_Plex_Sans']
                  text-xs
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.08em]
                  text-indigo-500
                "
              >
                Research / Research Library
              </span>
            </div>

            {/* ------------------------------------------------------
                HEADING
            ------------------------------------------------------ */}

            <div className="flex w-full flex-col items-start pt-2">
              <h1
                className="
                  w-full
                  font-['IBM_Plex_Sans']
                  text-[40px]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.025em]
                  text-violet-50
                  sm:text-[48px]
                  sm:leading-[1.08]
                  lg:text-[60px]
                  lg:leading-[63.8px]
                "
              >
                Find research that
                <br className="hidden sm:block" />
                stays connected to
                <br className="hidden sm:block" />
                the evidence.
              </h1>
            </div>

            {/* ------------------------------------------------------
                DESCRIPTION
            ------------------------------------------------------ */}

            <div className="w-full max-w-[560px] pb-4 pt-2.5">
              <p
                className="
                  font-['IBM_Plex_Sans']
                  text-base
                  font-normal
                  leading-7
                  text-violet-50/70
                  sm:text-lg
                  sm:leading-8
                "
              >
                Search and browse approved TALVRIN public-market research
                with concise summaries, real publication dates, source
                context, and market or jurisdiction metadata where relevant.
              </p>
            </div>

            {/* ========================================================
                SEARCH BAR
            ======================================================== */}

            <div
              className="
                flex
                w-full
                max-w-[600px]
                items-center
                gap-2
                rounded-xl
                border
                border-violet-50/20
                bg-violet-50/5
                p-2
              "
            >
              {/* Search input area */}

              <div
                className="
                  min-w-0
                  flex-1
                  overflow-hidden
                  px-2
                  py-2.5
                "
              >
                <span
                  className="
                    block
                    truncate
                    font-['IBM_Plex_Sans']
                    text-sm
                    font-normal
                    text-neutral-500
                    sm:text-base
                  "
                >
                  Search by market, issuer, central bank, policy topic, or
                  theme…
                </span>
              </div>

              {/* Search button */}

              <button
                type="button"
                className="
                  shrink-0
                  rounded-lg
                  bg-violet-50
                  px-5
                  py-2.5
                  font-['IBM_Plex_Sans']
                  text-sm
                  font-semibold
                  text-slate-900
                  transition-all
                  duration-200
                  hover:bg-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-violet-300/50
                  active:scale-[0.98]
                "
              >
                Search
              </button>
            </div>

            {/* ========================================================
                BROWSE LINKS
            ======================================================== */}

            <div
              className="
                flex
                w-full
                flex-wrap
                items-start
                gap-x-4
                gap-y-2
                pt-1
              "
            >
              <span
                className="
                  font-['IBM_Plex_Sans']
                  text-xs
                  font-normal
                  leading-4
                  text-violet-50/50
                "
              >
                Browse:
              </span>

              {browseItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="
                    font-['IBM_Plex_Sans']
                    text-xs
                    font-normal
                    leading-4
                    text-indigo-300/90
                    transition-colors
                    duration-200
                    hover:text-violet-50
                  "
                >
                  {item}
                </button>
              ))}
            </div>

            {/* ========================================================
                DISCLAIMER
            ======================================================== */}

            <div className="w-full pt-1.5">
              <p
                className="
                  font-['IBM_Plex_Sans']
                  text-sm
                  font-normal
                  leading-5
                  text-violet-50/60
                "
              >
                Public research and market intelligence. Not investment
                advice.
              </p>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT IMAGE
          ======================================================== */}

          <motion.div
            style={{
              y: imageY,
              scale: imageScale,
              opacity: imageOpacity,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[555px]
              overflow-hidden
              rounded-xl
            "
          >
            <div
              className="
                relative
                aspect-square
                w-full
                overflow-hidden
                rounded-xl
                border
                border-violet-50/10
              "
            >
              <Image
                src="/images/research/research-library/hero.png"
                alt="TALVRIN research library"
                fill
                priority
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 555px"
                className="
                  object-cover
                  object-center
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}