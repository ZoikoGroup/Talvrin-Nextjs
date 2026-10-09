"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stages = [
  {
    stage: "STAGE 01",
    title: "Topic selection",
    description:
      "A concept is chosen for its research value, not its search volume.",
  },
  {
    stage: "STAGE 02",
    title: "Source review",
    description:
      "Primary and high-authority sources are identified and rights-checked.",
  },
  {
    stage: "STAGE 03",
    title: "Drafting",
    description:
      "The direct answer and mechanism are written to stay accurate out of context.",
  },
  {
    stage: "STAGE 04",
    title: "Editorial review",
    description:
      "A named editor verifies accuracy, sourcing, and non-advisory framing.",
  },
  {
    stage: "STAGE 05",
    title: "Publish",
    description:
      "The explainer goes live with a real publication date and named ownership.",
  },
  {
    stage: "STAGE 06",
    title: "Monitor",
    description:
      "The explainer is watched for source revisions or meaning-changing developments.",
  },
];

export default function MethodologyEditorialStandards() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-8
          lg:py-[96px]
          xl:px-0
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Eyebrow */}

          <div
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
            "
          >
            METHODOLOGY &amp; EDITORIAL STANDARDS
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-[36px]
              font-bold
              leading-[1.12]
              tracking-[-0.02em]
              text-slate-900

              sm:text-[42px]

              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            Seven governed stages, from topic
            <br className="hidden sm:block" />
            selection to retirement.
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-[800px]
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-gray-600
            "
          >
            Definitions stay stable across Talvrin unless the source or
            methodology itself changes — and every material correction gets a
            visible note, never a silent edit.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP CONTENT GRID

            3 CARDS     IMAGE
            3 CARDS     IMAGE

            Cards:
            240px
            240px
            240px

            Image:
            500px
            spanning both rows
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            w-full
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-5
            xl:grid-cols-[240px_240px_240px_minmax(0,1fr)]
            xl:grid-rows-[minmax(160px,auto)_minmax(160px,auto)]
            xl:gap-x-[20px]
            xl:gap-y-[18.8px]
          "
        >
          {/* =================================================
              IMAGE

              Explicitly fixed to column 4 and spans
              both desktop rows on xl.
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              order-first
              h-[240px]
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              bg-violet-50
              sm:col-span-2
              sm:h-[280px]
              lg:col-span-3
              lg:h-[300px]
              xl:order-none
              xl:col-span-1
              xl:col-start-4
              xl:row-start-1
              xl:row-span-2
              xl:h-full
              xl:min-h-0
            "
          >
            <Image
              src="/images/research/market-explainers/image6.png"
              alt="Talvrin methodology and editorial standards"
              fill
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 1279px) 100vw,
                500px
              "
              className="
                object-cover
                object-center
              "
            />
          </motion.div>

          {/* =================================================
              STAGE 01
          ================================================= */}

          <StageCard
            index={0}
            stage="STAGE 01"
            title="Topic selection"
            description="A concept is chosen for its research value, not its search volume."
          />

          {/* =================================================
              STAGE 02
          ================================================= */}

          <StageCard
            index={1}
            stage="STAGE 02"
            title="Source review"
            description="Primary and high-authority sources are identified and rights-checked."
          />

          {/* =================================================
              STAGE 03
          ================================================= */}

          <StageCard
            index={2}
            stage="STAGE 03"
            title="Drafting"
            description="The direct answer and mechanism are written to stay accurate out of context."
          />

          {/* =================================================
              STAGE 04
          ================================================= */}

          <StageCard
            index={3}
            stage="STAGE 04"
            title="Editorial review"
            description="A named editor verifies accuracy, sourcing, and non-advisory framing."
          />

          {/* =================================================
              STAGE 05
          ================================================= */}

          <StageCard
            index={4}
            stage="STAGE 05"
            title="Publish"
            description="The explainer goes live with a real publication date and named ownership."
          />

          {/* =================================================
              STAGE 06
          ================================================= */}

          <StageCard
            index={5}
            stage="STAGE 06"
            title="Monitor"
            description="The explainer is watched for source revisions or meaning-changing developments."
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   STAGE CARD
============================================================ */

type StageCardProps = {
  stage: string;
  title: string;
  description: string;
  index: number;
};

function StageCard({
  stage,
  title,
  description,
  index,
}: StageCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        h-full
        min-h-[160px]
        w-full
        flex-col
        rounded-2xl
        border
        border-slate-900/10
        bg-violet-50
        px-6
        py-5
      "
    >
      {/* Stage */}

      <div
        className="
          font-['IBM_Plex_Sans']
          text-xs
          font-bold
          leading-4
          text-yellow-600
        "
      >
        {stage}
      </div>

      {/* Title */}

      <h3
        className="
          mt-2
          font-['IBM_Plex_Sans']
          text-base
          font-bold
          leading-6
          text-slate-900
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-2
          font-['IBM_Plex_Sans']
          text-xs
          font-normal
          leading-5
          text-gray-600
        "
      >
        {description}
      </p>
    </motion.article>
  );
}