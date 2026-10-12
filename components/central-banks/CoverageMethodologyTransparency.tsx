"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const methodologyRows = [
  {
    title: "Institution coverage",
    description:
      "The exact published list and status come from the governed Coverage Registry.",
  },
  {
    title: "Evidence classes",
    description:
      "States which official document/event types are supported for each institution or coverage tier.",
  },
  {
    title: "Source policy",
    description:
      "Defines primary/official/licensed/institutional/other governed source classes.",
  },
  {
    title: "Timing policy",
    description:
      "Explains scheduled time, publication time, effective/reference time, time-zone conversion and latency.",
  },
  {
    title: "Normalization",
    description:
      "Documents entity names, instrument mapping, units and cross-institution transformations.",
  },
  {
    title: "Change detection",
    description:
      "Explains how new, updated, corrected or superseded evidence is recognized and surfaced.",
  },
  {
    title: "AI boundary",
    description:
      "States where AI may assist and how source evidence remains independently inspectable.",
  },
  {
    title: "Rights / access",
    description:
      "Clarifies that restricted or licensed material is shown only within permitted use.",
  },
];

export default function CoverageMethodologyTransparency() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 15%"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.3], [30, 0]);

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-white"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-14
          sm:px-6
          sm:py-16
          md:px-8
          lg:px-12
          lg:py-[96px]
          xl:px-[80px]
        "
      >
        <div className="mx-auto w-full max-w-[1280px]">
          {/* Header */}
          <motion.div
            style={{
              opacity: contentOpacity,
              y: contentY,
            }}
          >
            {/* Eyebrow */}
            <div
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                tracking-wide
                text-indigo-500
              "
            >
              COVERAGE &amp; METHODOLOGY TRANSPARENCY
            </div>

            {/* Heading */}
            <h2
              className="
                mt-4
                max-w-[720px]
                font-['IBM_Plex_Sans']
                text-[30px]
                font-bold
                leading-[1.1]
                text-slate-900
                sm:text-[38px]
                sm:leading-[44px]
                md:text-[44px]
                lg:text-5xl
                lg:leading-[48.72px]
              "
            >
              Coverage you can verify.
              <br />
              Normalization you can inspect.
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[780px]
                font-['IBM_Plex_Sans']
                text-base
              font-normal
              leading-7
              text-gray-600
            "
          >
            Institution presence in the directory is not the same as evidence
            depth. Every claim below traces back to a governed registry.
          </p>
        </motion.div>

        {/* Methodology rows */}
        <div className="mt-12 w-full">
          {methodologyRows.map((row, index) => (
            <motion.div
              key={row.title}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                grid
                w-full
                grid-cols-1
                gap-2
                border-b
                border-slate-900/10
                py-4
                sm:grid-cols-[192px_1fr]
                sm:gap-4
                lg:grid-cols-[192px_1fr]
              "
            >
              {/* Label */}
              <div
                className="
                  min-w-0
                  font-['IBM_Plex_Sans']
                  text-base
                  font-semibold
                  text-slate-900
                "
              >
                {row.title}
              </div>

              {/* Description */}
              <div
                className="
                  min-w-0
                  font-['IBM_Plex_Sans']
                  text-sm
                  font-normal
                  leading-6
                  text-gray-600
                "
              >
                {row.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Invention */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-10
            w-full
            rounded-2xl
            border
            border-slate-900/10
            bg-violet-50
            p-6
          "
        >
          <div
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-slate-900
            "
          >
            NO INVENTION
          </div>

          <p
            className="
              mt-2
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-6
              text-gray-600
            "
          >
            No supported central bank, canonical route, source feed,
            policy-rate taxonomy, historical depth, live coverage, alert
            availability, AI capability or commercial availability is invented
            on this page. Governed registries remain authoritative.
          </p>
        </motion.div>
        </div>
      </div>
    </section>
  );
}