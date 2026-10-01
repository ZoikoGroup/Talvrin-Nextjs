"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
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

export default function MarketExplainersHero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* ---------------------------------------------
     Scroll-driven animation
  --------------------------------------------- */

  const rawTextY = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -35]
  );

  const rawImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [55, -25]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.96, 1.03]
  );

  const textY = useSpring(rawTextY, {
    stiffness: 90,
    damping: 22,
    mass: 0.5,
  });

  const imageY = useSpring(rawImageY, {
    stiffness: 70,
    damping: 22,
    mass: 0.6,
  });

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        overflow-hidden
        bg-[#171335]
        text-violet-50
      "
    >
      {/* ---------------------------------------------
          Background
      --------------------------------------------- */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            right-[8%]
            top-[18%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-indigo-500/[0.035]
            blur-[120px]
          "
        />
      </div>

      {/* ---------------------------------------------
          Main container
      --------------------------------------------- */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          py-16

          sm:px-8
          sm:py-20

          lg:px-16
          lg:py-[72px]

          xl:px-[100px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12

            lg:grid-cols-[minmax(0,578px)_minmax(0,518px)]
            lg:justify-between
            lg:gap-16

            xl:gap-[70px]
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            style={{ y: textY }}
            className="
              flex
              w-full
              max-w-[578px]
              flex-col
              items-start
              gap-3.5
            "
          >
            {/* ---------------------------------------------
                Eyebrow
            --------------------------------------------- */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                w-full
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                tracking-wide
                text-indigo-500
              "
            >
              RESEARCH / MARKET EXPLAINERS
            </motion.div>

            {/* ---------------------------------------------
                Heading
            --------------------------------------------- */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                w-full
                pt-2
                font-['IBM_Plex_Sans']
                text-[40px]
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                text-violet-50

                sm:text-[48px]
                sm:leading-[1.08]

                lg:text-[56px]
                lg:leading-[63.8px]

                xl:text-[60px]
              "
            >
              Understand how
              <br className="hidden sm:block" />
              markets work — with
              <br className="hidden sm:block" />
              the evidence still
              <br className="hidden sm:block" />
              visible.
            </motion.h1>

            {/* ---------------------------------------------
                Description
            --------------------------------------------- */}

            <motion.div
              initial={{
                opacity: 0,
                y: 22,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                w-full
                max-w-[560px]
                pt-2.5
                pb-4
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-violet-50/70

                sm:text-[17px]
                sm:leading-7

                lg:text-lg
                lg:leading-8
              "
            >
              Evidence-linked explanations of market concepts,
              institutions, mechanics, and relationships for people who
              want to understand why — not just receive an answer.
            </motion.div>

            {/* ---------------------------------------------
                Search
            --------------------------------------------- */}

            <motion.form
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              onSubmit={(event) => {
                event.preventDefault();
              }}
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
              <div
                className="
                  min-w-0
                  flex-1
                  px-2
                  py-2.5
                "
              >
                <input
                  type="search"
                  aria-label="Search market explainers"
                  placeholder="Search a concept, mechanism, institution, or market term…"
                  className="
                    w-full
                    min-w-0
                    bg-transparent
                    font-['IBM_Plex_Sans']
                    text-sm
                    text-violet-50
                    outline-none
                    placeholder:text-neutral-500

                    sm:text-base
                  "
                />
              </div>

              <button
                type="submit"
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
                  transition-transform
                  duration-200
                  hover:scale-[1.02]
                  active:scale-[0.98]
                "
              >
                Search
              </button>
            </motion.form>

            {/* ---------------------------------------------
                Browse links
            --------------------------------------------- */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                flex
                w-full
                flex-wrap
                items-center
                gap-x-3
                gap-y-2
                pt-0.5
                font-['IBM_Plex_Sans']
                text-xs
              "
            >
              <span className="text-violet-50/50">
                Browse:
              </span>

              {browseItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="
                    text-indigo-300/90
                    transition-colors
                    duration-200
                    hover:text-indigo-200
                  "
                >
                  {item}
                </Link>
              ))}
            </motion.div>

            {/* ---------------------------------------------
                Disclaimer
            --------------------------------------------- */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: 0.36,
              }}
              className="
                w-full
                pt-1.5
                font-['IBM_Plex_Sans']
                text-xs
                font-normal
                leading-5
                text-violet-50/60

                sm:text-sm
                sm:leading-6
              "
            >
              Source-linked. Context-aware. Research-led. No investment
              recommendations.
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}

          <motion.div
            style={{
              y: imageY,
              scale: imageScale,
            }}
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[518px]
              lg:mx-0
              lg:ml-auto
            "
          >
            <div
              className="
                relative
                w-full
                overflow-hidden
                border
                border-[#268DFF]
              "
            >
              <Image
                src="/images/research/market-explainers/hero.png"
                alt="Market explainers"
                width={518}
                height={591}
                priority
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 518px"
                className="
                  block
                  h-auto
                  w-full
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