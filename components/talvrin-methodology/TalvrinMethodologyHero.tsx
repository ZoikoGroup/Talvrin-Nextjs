"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TalvrinMethodologyHero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /*
   * Scroll-driven animation
   *
   * Content moves slightly slower than the page.
   * Image has a slightly stronger parallax effect.
   */
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [55, 0, -35]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [70, 0, -55]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 1, 1.03]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 1],
    [0.65, 1, 1, 0.8]
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#171335] text-violet-50"
    >
      {/* Hero Container */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1296px]
          px-5
          py-14
          sm:px-8
          sm:py-20
          lg:grid
          lg:grid-cols-2
          lg:items-center
          lg:gap-8
          lg:px-8
          lg:py-16
          xl:grid-cols-[minmax(0,578px)_minmax(0,636px)]
          xl:gap-12
          xl:py-[74px]
        "
      >
        {/* =========================================================
            LEFT CONTENT
        ========================================================= */}

        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
          className="
            flex
            w-full
            max-w-[578px]
            flex-col
            items-start
            gap-4
          "
        >
          {/* Eyebrow */}
          <div className="flex w-full flex-col items-start">
            <span
              className="
                text-[12px]
                font-bold
                leading-[16px]
                tracking-[0.08em]
                text-[#D9A400]
              "
            >
              RESEARCH / TALVRIN METHODOLOGY
            </span>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-start pt-[6px]">
            <h1
              className="
                w-full
                text-[34px]
                font-bold
                leading-[1.12]
                tracking-[-0.025em]
                text-[#F6F5FB]
                sm:text-[44px]
                sm:leading-[1.12]
                lg:text-[44px]
                lg:leading-[1.12]
                xl:text-[60px]
                xl:leading-[63.8px]
              "
            >
              How Talvrin keeps
              <br className="hidden sm:block lg:hidden xl:block" />
              {" "}research connected
              <br className="hidden sm:block lg:hidden xl:block" />
              {" "}to the evidence.
            </h1>
          </div>

          {/* Main Description */}
          <div className="flex w-full max-w-[560px] flex-col items-start pt-2">
            <p
              className="
                text-[16px]
                font-normal
                leading-[28px]
                text-[#F6F5FB]/70

                sm:text-[17px]
                sm:leading-[30px]

                lg:text-[18px]
                lg:leading-[32px]
              "
            >
              Start with a question. Discover and inspect the underlying
              sources. Preserve the dates, jurisdictions, versions, rights and
              relationships that affect meaning. Build a research view. Keep it
              connected to the evidence. Reassess when material information
              changes.
            </p>
          </div>

          {/* AI Description */}
          <div className="flex w-full max-w-[540px] flex-col items-start">
            <p
              className="
                text-[14px]
                font-normal
                leading-[24px]
                text-[#F6F5FB]/60

                sm:text-[15px]
                sm:leading-[24px]

                lg:text-[16px]
                lg:leading-[24px]
              "
            >
              AI can assist discovery, organization, comparison, summarization,
              explanation and change identification. It does not become the
              evidence. Research judgment remains human.
            </p>
          </div>

          {/* Buttons */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-3
              pt-4

              sm:flex-row
              sm:items-start
              sm:gap-4
            "
          >
            {/* Primary Button */}
            <a
              href="#method"
              className="
                inline-flex
                min-h-[56px]
                items-center
                justify-center
                rounded-lg
                bg-[#F6F5FB]
                px-7
                py-4
                text-center
                text-[16px]
                font-semibold
                leading-[24px]
                text-[#171335]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white
              "
            >
              Explore the Method
            </a>

            {/* Secondary Button */}
            <a
              href="#evidence-principles"
              className="
                inline-flex
                min-h-[56px]
                items-center
                justify-center
                rounded-lg
                border
                border-[#F6F5FB]/30
                px-7
                py-4
                text-center
                text-[16px]
                font-semibold
                leading-[24px]
                text-[#F6F5FB]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#F6F5FB]/60
                hover:bg-[#F6F5FB]/5
              "
            >
              View Evidence Principles
              <span className="ml-1.5">→</span>
            </a>
          </div>

          {/* Disclaimer */}
          <div className="flex w-full flex-col items-start pt-1">
            <p
              className="
                text-[12px]
                font-normal
                leading-[20px]
                text-[#F6F5FB]/60

                sm:text-[13px]
                sm:leading-[20px]

                lg:text-[14px]
                lg:leading-[20px]
              "
            >
              Research and market intelligence. No legal advice. No trade
              execution. No manufactured buy/sell/hold recommendations.
            </p>
          </div>
        </motion.div>

        {/* =========================================================
            RIGHT IMAGE
        ========================================================= */}

        <motion.div
          style={{
            y: imageY,
            scale: imageScale,
          }}
          className="
            relative
            mx-auto
            mt-10
            w-full
            max-w-[500px]
            overflow-hidden
            rounded-[16px]
            sm:mt-12
            lg:mx-0
            lg:mt-0
            lg:max-w-none
            xl:max-w-[636px]
          "
        >
          <div className="relative aspect-square w-full">
            <Image
              src="/images/research/talvrin-methodology/hero.png"
              alt="Talvrin methodology research team"
              fill
              priority
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 636px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}