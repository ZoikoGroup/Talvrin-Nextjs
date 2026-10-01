"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function CentralBanksCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 10%"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [35, 0]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        overflow-hidden
        border-t
        border-slate-900/10
        bg-white
      "
    >
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="
          mx-auto
          flex
          w-full
          max-w-[1000px]
          flex-col
          items-center
          gap-4
          px-6
          py-20
          text-center
          sm:px-8
          sm:py-24
          lg:px-0
          lg:py-[88.8px]
        "
      >
        {/* Heading */}
        <h2
          className="
            w-full
            font-['IBM_Plex_Sans']
            text-[38px]
            font-bold
            leading-[42px]
            text-slate-900
            sm:text-[44px]
            sm:leading-[46px]
            lg:text-5xl
            lg:leading-[48.3px]
          "
        >
          Build central-bank research that
          <br className="hidden sm:block" />
          remains connected to the source.
        </h2>

        {/* Description */}
        <p
          className="
            w-full
            font-['IBM_Plex_Sans']
            text-base
            font-normal
            leading-7
            text-gray-600
          "
        >
          Explore Talvrin Central Banks — source-linked policy research with
          evidence, timing and
             <br className="hidden sm:block" />
           change history always in view.
        </p>

        {/* Buttons */}
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-3.5
            pt-3.5
            sm:flex-row
          "
        >
          {/* Primary CTA */}
          <Link
            href="/markets/central-banks"
            className="
              flex
              min-h-[56px]
              w-full
              items-center
              justify-center
              rounded-lg
              bg-slate-900
              px-7
              py-4
              font-['IBM_Plex_Sans']
              text-base
              font-semibold
              text-violet-50
              transition-opacity
              duration-200
              hover:opacity-90
              sm:w-auto
            "
          >
            Explore Central-Bank Research
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/markets/central-banks/methodology"
            className="
              flex
              min-h-[56px]
              w-full
              items-center
              justify-center
              rounded-lg
              border
              border-slate-900/25
              bg-white
              px-7
              py-4
              font-['IBM_Plex_Sans']
              text-base
              font-semibold
              text-slate-900
              transition-colors
              duration-200
              hover:bg-slate-50
              sm:w-auto
            "
          >
            Review Methodology / Evidence Standards
          </Link>
        </div>

        {/* Disclaimer */}
        <p
          className="
            w-full
            pt-0.5
            font-['IBM_Plex_Sans']
            text-sm
            font-normal
            leading-5
            text-gray-600
          "
        >
          Research and market intelligence. No trade execution. No
          manufactured investment recommendations or 
             <br className="hidden sm:block" />guaranteed policy
          forecasts.
        </p>
      </motion.div>
    </section>
  );
}