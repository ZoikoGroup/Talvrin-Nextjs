"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* =========================================================
   ANIMATION
========================================================= */

const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
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
   RESEARCH VIEW DATA
========================================================= */

type ResearchView = {
  title: string;
  description: ReactNode;
};

const researchViews: ResearchView[] = [
  {
    title: "Question / scope",
    description: (
      <>
        Stable statement of what the team is
        <br className="hidden lg:block" />
        investigating.
      </>
    ),
  },

  {
    title: "Current view",
    description: (
      <>
        Concise synthesis with visible
        <br className="hidden lg:block" />
        provenance to evidence.
      </>
    ),
  },

  {
    title: "Supporting evidence",
    description: <>Linked governed sources.</>,
  },

  {
    title: "Challenging evidence",
    description: (
      <>
        Contradictory evidence stays visible
        <br className="hidden lg:block" />
        rather than suppressed.
      </>
    ),
  },

  {
    title: "Last reviewed",
    description: (
      <>
        Shown only if backed by real review
        <br className="hidden lg:block" />
        metadata; no cosmetic freshness.
      </>
    ),
  },

  {
    title: "Monitoring state",
    description: (
      <>
        What evidence remains under
        <br className="hidden lg:block" />
        observation.
      </>
    ),
  },

  {
    title: "Change history",
    description: (
      <>
        New/updated/unchanged evidence
        <br className="hidden lg:block" />
        shown conceptually; exact audit
        <br className="hidden lg:block" />
        mechanics remain capability-gated.
      </>
    ),
  },

  {
    title: "Assumptions",
    description: (
      <>
        Represented only if the product
        <br className="hidden lg:block" />
        supports the field; exact schema is
        <br className="hidden lg:block" />
        capability-gated.
      </>
    ),
  },
];

/* =========================================================
   RESEARCH VIEW ITEM
========================================================= */

type ResearchViewItemProps = {
  item: ResearchView;
  index: number;
};

function ResearchViewItem({
  item,
  index,
}: ResearchViewItemProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay: index * 0.06,
      }}
      className="
        w-full
        min-w-0
        pt-4
        pb-9
        border-b-[0.8px]
        border-slate-900/10
        flex
        flex-col
        items-start
        gap-1
      "
    >
      {/* TITLE */}

      <div
        className="
          w-full
          text-slate-900
          text-base
          font-bold
          font-['IBM_Plex_Sans']
          leading-5
        "
      >
        {item.title}
      </div>

      {/* DESCRIPTION */}

      <div
        className="
          w-full
          text-gray-600
          text-xs
          font-normal
          font-['IBM_Plex_Sans']
          leading-5
        "
      >
        {item.description}
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ReusableResearchViews() {
  return (
    <section
      className="
        relative
        w-full
        bg-white
        overflow-hidden
      "
    >
      {/* =====================================================
          MAIN 1440PX CONTAINER
      ===================================================== */}

      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto
          px-6
          sm:px-8
          lg:px-[80px]
          pt-[72px]
          pb-[72px]
          lg:pt-[96.4px]
          lg:pb-[96px]
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
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
                staggerChildren: 0.12,
              },
            },
          }}
          className="
            w-full
            max-w-[1280px]
          "
        >
          {/* EYEBROW */}

          <motion.div
            variants={fadeUp}
            className="
              text-indigo-500
              text-xs
              font-bold
              font-['IBM_Plex_Sans']
              tracking-wide
            "
          >
            REUSABLE RESEARCH VIEWS
          </motion.div>

          {/* HEADING */}

          <motion.h2
            variants={fadeUp}
            className="
              w-full
              max-w-[1000px]
              pt-3
              text-slate-900
              text-[32px]
              sm:text-[40px]
              lg:text-5xl
              font-bold
              font-['IBM_Plex_Sans']
              leading-[1.08]
              lg:leading-[48.72px]
              tracking-[-0.02em]
            "
          >
            A research view that survives beyond
            <br className="hidden sm:block" />
            one analyst or document.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            variants={fadeUp}
            className="
              w-full
              max-w-[800px]
              pt-2
              text-gray-600
              text-sm
              sm:text-base
              font-normal
              font-['IBM_Plex_Sans']
              leading-6
              lg:leading-7
            "
          >
            Reasoning stays discoverable through the research object — not
            scattered across an individual&apos;s tabs,
            <br className="hidden lg:block" />
            notes, and memory.
          </motion.p>
        </motion.div>

        {/* ===================================================
            MAIN CONTENT

            DESKTOP:

            224px
            224px
            224px
            224px
            240px IMAGE

            The image occupies the fifth column and spans
            both content rows.
        =================================================== */}

        <div
          className="
            w-full
            max-w-[1280px]
            mt-[59px]
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[repeat(4,minmax(0,1fr))_240px]
            gap-x-[38.4px]
            gap-y-0
            items-start
          "
        >
          {/* =================================================
              FIRST 8 RESEARCH ITEMS
          ================================================= */}

          {researchViews.map((item, index) => (
            <ResearchViewItem
              key={item.title}
              item={item}
              index={index}
            />
          ))}

          {/* =================================================
              IMAGE

              Figma:
              240 × 240
              x = 1129.60
              y = 337.80
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: smoothEase,
              delay: 0.15,
            }}
            className="
              relative
              w-full
              h-[240px]
              bg-red-700
              rounded-2xl
              border-b-[0.8px]
              border-slate-900/10
              overflow-hidden
              mt-4
              sm:col-span-2
              lg:col-span-1
              lg:row-span-2
              lg:row-start-1
              lg:col-start-5
              lg:mt-0
            "
          >
            <Image
              src="/images/solutions/research-teams/image2.png"
              alt="Reusable research view"
              fill
              priority
              sizes="240px"
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}