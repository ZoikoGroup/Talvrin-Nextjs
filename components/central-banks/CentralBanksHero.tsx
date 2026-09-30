"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef } from "react";

/* =========================================================
   Animation
========================================================= */

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
      ease: [0.22, 1, 0.36, 1] as [
        number,
        number,
        number,
        number
      ],
    },
  },
};

/* =========================================================
   Central Banks Hero
========================================================= */

export default function CentralBanksHero() {
  const heroRef = useRef<HTMLElement>(null);

  /* =======================================================
     Scroll progress
  ======================================================= */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* =======================================================
     Scroll-driven animations
  ======================================================= */

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -35]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 45]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.98]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.9],
    [1, 0.45]
  );

  return (
    <section
      ref={heroRef}
      className="
        relative
        isolate
        overflow-hidden
        bg-[#171335]
        text-violet-50
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Main Figma radial background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_16%_6%,rgba(99,102,241,0.20)_0%,rgba(99,102,241,0.08)_32%,transparent_65%)]
        "
      />

      {/* Subtle secondary glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[180px]
          -top-[220px]
          -z-10
          h-[650px]
          w-[650px]
          rounded-full
          bg-indigo-500/[0.045]
          blur-[120px]
        "
      />

      {/* =====================================================
          HERO CONTAINER
      ====================================================== */}

      <motion.div
        style={{
          opacity: heroOpacity,
        }}
        className="
          relative
          mx-auto
          flex
          min-h-[852px]
          w-full
          max-w-[1440px]
          items-center
          px-6
          py-20
          sm:px-8
          lg:px-[80px]
          lg:py-0
        "
      >
        {/* ===================================================
            FIGMA INNER CONTENT

            1440px viewport
            80px left
            80px right
            1280px content
        ==================================================== */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-16
            lg:grid-cols-[578px_540px]
            lg:justify-between
            lg:gap-0
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            style={{
              y: contentY,
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={{
              hidden: {},

              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="
              flex
              w-full
              max-w-[578px]
              flex-col
              items-start
            "
          >
            {/* =================================================
                EYEBROW
            ================================================== */}

            <motion.div
              variants={fadeUp}
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                tracking-[0.08em]
                text-yellow-600
              "
            >
              Research / Central Banks
            </motion.div>

            {/* =================================================
                HEADING
            ================================================== */}

            <motion.h1
              variants={fadeUp}
              className="
                mt-[18px]
                w-full
                max-w-[578px]
                font-['IBM_Plex_Sans']
                text-[40px]
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                text-violet-50
                sm:text-[48px]
                lg:text-[56px]
                lg:leading-[63.8px]
              "
            >
              Follow the decision.
              <br />
              Inspect the source.
              <br />
              Know what changed.
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              variants={fadeUp}
              className="
                mt-[26px]
                w-full
                max-w-[560px]
                font-['IBM_Plex_Sans']
                text-[16px]
                font-normal
                leading-7
                text-violet-50/70
                sm:text-[17px]
                sm:leading-8
                lg:text-lg
              "
            >
              Talvrin Central Banks connects policy meetings,
              official decisions, communications and source
              evidence into one research timeline — with the
              timing, jurisdiction and provenance needed to
              reassess a view when the evidence changes.
            </motion.p>

            {/* =================================================
                EVIDENCE NOTE
            ================================================== */}

            <motion.p
              variants={fadeUp}
              className="
                mt-[18px]
                w-full
                max-w-[540px]
                font-['IBM_Plex_Sans']
                text-sm
                font-normal
                leading-6
                text-violet-50/60
                sm:text-[15px]
              "
            >
              Evidence first. AI may assist navigation and
              explanation; official source material remains
              separately inspectable.
            </motion.p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <motion.div
              variants={fadeUp}
              className="
                mt-[24px]
                flex
                w-full
                flex-col
                items-start
                gap-3
                sm:w-auto
              "
            >
              {/* Primary CTA */}

              <Link
                href="#research"
                className="
                  inline-flex
                  h-14
                  items-center
                  justify-center
                  rounded-lg
                  bg-violet-50
                  px-7
                  font-['IBM_Plex_Sans']
                  text-base
                  font-semibold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-violet-50/50
                  focus:ring-offset-2
                  focus:ring-offset-[#171335]
                  max-sm:w-full
                "
              >
                Explore Central-Bank Research
              </Link>

              {/* Secondary CTA */}

              <Link
                href="#evidence"
                className="
                  inline-flex
                  h-14
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-violet-50/30
                  px-7
                  font-['IBM_Plex_Sans']
                  text-base
                  font-semibold
                  text-violet-50
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-violet-50/60
                  hover:bg-violet-50/[0.04]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-violet-50/40
                  max-sm:w-full
                "
              >
                See How Evidence Is Sourced →
              </Link>
            </motion.div>

            {/* =================================================
                DISCLAIMER
            ================================================== */}

            <motion.p
              variants={fadeUp}
              className="
                mt-[12px]
                w-full
                max-w-[540px]
                font-['IBM_Plex_Sans']
                text-sm
                font-normal
                leading-6
                text-violet-50/60
              "
            >
              Research and market intelligence. No trade
              execution. No manufactured investment
              recommendations or guaranteed policy forecasts.
            </motion.p>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <motion.div
            style={{
              y: imageY,
              scale: imageScale,
            }}
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1] as [
                number,
                number,
                number,
                number
              ],
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[540px]
              lg:mx-0
            "
          >
            {/* =================================================
                FIGMA OUTER IMAGE FRAME

                Desktop:
                Width  = 540px
                Height = 810px
            ================================================== */}

            <div
              className="
                relative
                h-[540px]
                w-full
                overflow-hidden
                bg-[#201b47]
                sm:h-[650px]
                lg:h-[810px]
              "
            >
              {/* =================================================
                  ACTUAL PHOTO

                  Desktop:
                  Width  = 540px
                  Height = 624px
                  Top    = 93px
                  Bottom = 93px
              ================================================== */}

              <div
                className="
                  absolute
                  left-0
                  top-[93px]
                  h-[624px]
                  w-full
                  sm:top-[75px]
                  sm:h-[500px]
                  lg:top-[93px]
                  lg:h-[624px]
                "
              >
                <Image
                  src="/images/markets/central-banks/hero.png"
                  alt="Central bank research team reviewing source evidence"
                  fill
                  priority
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 540px, 540px"
                  className="
                    object-cover
                    object-center
                  "
                />
              </div>

              {/* =================================================
                  SUBTLE IMAGE OVERLAY
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#171335]/10
                  via-transparent
                  to-[#171335]/5
                "
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}