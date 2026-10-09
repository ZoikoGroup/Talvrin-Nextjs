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
    description: <>Stable statement of what the team is investigating.</>,
  },
  {
    title: "Current view",
    description: <>Concise synthesis with visible provenance to evidence.</>,
  },
  {
    title: "Supporting evidence",
    description: <>Linked governed sources.</>,
  },
  {
    title: "Challenging evidence",
    description: (
      <>Contradictory evidence stays visible rather than suppressed.</>
    ),
  },
  {
    title: "Last reviewed",
    description: (
      <>Shown only if backed by real review metadata; no cosmetic freshness.</>
    ),
  },
  {
    title: "Monitoring state",
    description: <>What evidence remains under observation.</>,
  },
  {
    title: "Change history",
    description: (
      <>
        New/updated/unchanged evidence shown conceptually; exact audit mechanics
        remain capability-gated.
      </>
    ),
  },
  {
    title: "Assumptions",
    description: (
      <>
        Represented only if the product supports the field; exact schema is
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
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={fadeUp}
      transition={{
        delay: index * 0.06,
      }}
      className="
        flex
        min-w-0
        w-full
        flex-col
        items-start
        gap-1
        border-b-[0.8px]
        border-slate-900/10
        py-5
        sm:py-6
        lg:py-5
      "
    >
      <h3
        className="
          w-full
          break-words
          font-['IBM_Plex_Sans']
          text-base
          font-bold
          leading-5
          text-slate-900
        "
      >
        {item.title}
      </h3>

      <div
        className="
          w-full
          break-words
          font-['IBM_Plex_Sans']
          text-xs
          font-normal
          leading-5
          text-gray-600
          sm:text-sm
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
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-12
          min-[480px]:px-5
          sm:py-16
          md:px-8
          lg:px-12
          lg:py-20
          xl:px-20
          xl:py-[96px]
        "
      >
        {/* HEADER */}

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
          className="w-full max-w-[1280px]"
        >
          <motion.p
            variants={fadeUp}
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-indigo-500
              sm:text-sm
            "
          >
            REUSABLE RESEARCH VIEWS
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="
              w-full
              max-w-[1000px]
              pt-3
              font-['IBM_Plex_Sans']
              text-[clamp(1.8rem,3.5vw,3rem)]
              font-bold
              leading-[1.1]
              tracking-[-0.02em]
              text-slate-900
            "
          >
            A research view that survives beyond one analyst or document.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              w-full
              max-w-[800px]
              pt-3
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
              sm:text-base
              sm:leading-7
            "
          >
            Reasoning stays discoverable through the research object — not
            scattered across an individual&apos;s tabs, notes, and memory.
          </motion.p>
        </motion.div>

        {/* MAIN CONTENT GRID */}

        <div
          className="
            mt-8
            grid
            w-full
            max-w-[1280px]
            grid-cols-1
            items-start
            gap-x-8
            gap-y-0
            sm:mt-10
            sm:grid-cols-2
            sm:gap-x-8
            lg:mt-[59px]
            lg:grid-cols-[repeat(4,minmax(0,1fr))_240px]
            lg:gap-x-6
            xl:gap-x-[38.4px]
          "
        >
          {/* RESEARCH VIEW ITEMS */}

          {researchViews.map((item, index) => (
            <ResearchViewItem
              key={item.title}
              item={item}
              index={index}
            />
          ))}

          {/* IMAGE */}

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
              mt-6
              aspect-square
              w-full
              min-w-0
              overflow-hidden
              rounded-2xl
              border-b-[0.8px]
              border-slate-900/10
              bg-red-700
              sm:col-span-2
              sm:mx-auto
              sm:max-w-[360px]
              lg:col-span-1
              lg:col-start-5
              lg:row-span-2
              lg:row-start-1
              lg:mt-0
              lg:max-w-none
            "
          >
            <Image
              src="/images/solutions/research-teams/image2.png"
              alt="Reusable research view"
              fill
              priority
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 360px, (max-width: 1279px) 220px, 240px"
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}