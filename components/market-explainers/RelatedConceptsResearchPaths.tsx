"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const researchPaths = [
  {
    title: "Market Intelligence",
    description:
      "See the concept applied in current market context — only once the destination is live.",
  },
  {
    title: "Research Library",
    description:
      "Durable evidence collections for concepts that warrant deeper retrieval.",
  },
  {
    title: "Policy & Regulation",
    description:
      "Regulatory process and effective-date concepts — never legal advice.",
  },
  {
    title: "Talvrin Methodology",
    description:
      "How sources, normalization, and interpretation are handled across Talvrin research.",
  },
  {
    title: "Central Banks",
    description:
      "Policy tool, communication, and transmission concepts tied to a specific institution.",
  },
  {
    title: "Economic Calendar",
    description:
      "Explainers tied to a scheduled release or economic concept, where the relationship is real.",
  },
];

export default function RelatedConceptsResearchPaths() {
  return (
    <section className="w-full overflow-hidden bg-slate-900">
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-6
          py-20
          sm:px-8
          lg:px-0
          lg:py-[96px]
        "
      >
        {/* ================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full"
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
            RELATED CONCEPTS &amp; RESEARCH PATHS
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              max-w-[1280px]
              font-['IBM_Plex_Sans']
              text-[36px]
              font-bold
              leading-[1.1]
              tracking-[-0.02em]
              text-violet-50

              sm:text-[42px]

              lg:text-5xl
              lg:leading-[48.3px]
            "
          >
            Understanding the concept is the start. Here&apos;s where deeper
            <br className="hidden lg:block" />
            research lives.
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
              text-violet-50/70
            "
          >
            Related concepts use typed editorial relationships — prerequisite,
            related mechanism, contrasting concept, or deeper research — never
            an opaque engagement-optimized carousel. Each destination links out
            only once its own module is live.
          </p>
        </motion.div>

        {/* ================================================
            DESKTOP GRID

            COLUMN 1 = 240px
            COLUMN 2 = 240px
            COLUMN 3 = 240px
            COLUMN 4 = IMAGE

            ROW 1 = 192px
            ROW 2 = 208px

            IMAGE = COLUMN 4 + ROW 1/2
        ================================================= */}

        <div
          className="
            mt-10
            grid
            w-full
            grid-cols-1
            gap-4

            sm:grid-cols-2

            lg:grid-cols-[240px_240px_240px_minmax(0,1fr)]
            lg:grid-rows-[192px_208px]
            lg:gap-x-[20.8px]
            lg:gap-y-[18.7px]
          "
        >
          {/* ============================================
              IMAGE

              IMPORTANT:
              Explicitly placed BEFORE the cards and
              explicitly assigned to column 4 / rows 1-2.
          ============================================= */}

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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              order-first
              min-h-[320px]
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-violet-50/10
              bg-violet-50/5

              sm:col-span-2

              lg:order-none
              lg:col-start-4
              lg:row-start-1
              lg:row-span-2
              lg:col-span-1
              lg:min-h-0
              lg:h-full
            "
          >
            <Image
              src="/images/research/market-explainers/image5.png"
              alt="Research and market analysis"
              fill
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 1023px) 100vw,
                497px
              "
              className="
                object-cover
                object-center
              "
            />
          </motion.div>

          {/* ============================================
              CARD 1
          ============================================= */}

          <ResearchCard
            index={0}
            title="Market Intelligence"
            href="/research/market-intelligence"
            description="See the concept applied in current market context — only once the destination is live."
          />

          {/* ============================================
              CARD 2
          ============================================= */}

          <ResearchCard
            index={1}
            title="Research Library"
            href="/research/research-library"
            description="Durable evidence collections for concepts that warrant deeper retrieval."
          />

          {/* ============================================
              CARD 3
          ============================================= */}

          <ResearchCard
            index={2}
            title="Policy & Regulation"
            href="/research/policy-regulatory-intelligence"
            description="Regulatory process and effective-date concepts — never legal advice."
          />

          {/* ============================================
              CARD 4
          ============================================= */}

          <ResearchCard
            index={3}
            title="Talvrin Methodology"
            href="/research/talvrin-methodology"
            description="How sources, normalization, and interpretation are handled across Talvrin research."
          />

          {/* ============================================
              CARD 5
          ============================================= */}

          <ResearchCard
            index={4}
            title="Central Banks"
            href="/markets/central-banks"
            description="Policy tool, communication, and transmission concepts tied to a specific institution."
          />

          {/* ============================================
              CARD 6
          ============================================= */}

          <ResearchCard
            index={5}
            title="Economic Calendar"
            href="/research/economic-calendar"
            description="Explainers tied to a scheduled release or economic concept, where the relationship is real."
          />
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   CARD COMPONENT
======================================================== */

type ResearchCardProps = {
  title: string;
  description: string;
  href: string;
  index: number;
};

function ResearchCard({
  title,
  description,
  href,
  index,
}: ResearchCardProps) {
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
        min-h-[192px]
        w-full
        flex-col
        rounded-2xl
        border
        border-violet-50/10
        bg-violet-50/5
        px-6
        pt-6
        pb-7
      "
    >
      {/* Title */}

      <h3
        className="
          font-['IBM_Plex_Sans']
          text-base
          font-bold
          leading-6
          text-violet-50
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-2.5
          flex-1
          font-['IBM_Plex_Sans']
          text-sm
          font-normal
          leading-5
          text-violet-50/70
        "
      >
        {description}
      </p>

      {/* Learn more */}

      <Link
        href={href}
        className="
          mt-2
          font-['IBM_Plex_Sans']
          text-xs
          font-semibold
          text-indigo-300
          hover:text-indigo-200
        "
      >
        Learn more →
      </Link>
    </motion.article>
  );
}