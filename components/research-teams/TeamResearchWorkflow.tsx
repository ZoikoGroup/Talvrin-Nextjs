"use client";

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
    y: 28,
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
   DATA
========================================================= */

type WorkflowItem = {
  stage: string;
  teamJob: string;
  behavior: string;
};

const workflowItems: WorkflowItem[] = [
  {
    stage: "ASK",
    teamJob:
      "Define the market, issuer, security, event, or policy question.",
    behavior:
      "Create a durable research object rather than a transient chat.",
  },

  {
    stage: "DISCOVER",
    teamJob: "Find relevant evidence and context.",
    behavior:
      "Govern source classes, rights, coverage, and relevance.",
  },

  {
    stage: "INSPECT",
    teamJob: "Review the underlying material.",
    behavior:
      "Preserve source identity, timing, jurisdiction, version, and access state.",
  },

  {
    stage: "UNDERSTAND",
    teamJob: "Relate evidence to the question.",
    behavior:
      "Show supports / contradicts / updates / contextualizes.",
  },

  {
    stage: "BUILD",
    teamJob: "Develop and preserve the research view.",
    behavior:
      "Separate source facts, Talvrin normalization, analysis, AI assistance, and user/team interpretation.",
  },

  {
    stage: "REVIEW",
    teamJob:
      "Enable another person to understand the basis of the view.",
    behavior:
      "Describe reviewability; exact reviewer workflow remains capability-gated.",
  },

  {
    stage: "MONITOR",
    teamJob:
      "Keep important evidence and assumptions under watch.",
    behavior:
      "Surface meaningful changes without noise.",
  },

  {
    stage: "REASSESS",
    teamJob: "Return when evidence changes.",
    behavior:
      "Show delta, source trail, and prior/current research context.",
  },
];

/* =========================================================
   WORKFLOW ROW
========================================================= */

type WorkflowRowProps = {
  item: WorkflowItem;
  index: number;
};

function WorkflowRow({ item, index }: WorkflowRowProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={fadeUp}
      transition={{
        delay: index * 0.045,
      }}
      className="
        w-full
        border-b-[0.8px]
        border-slate-900/10
        py-4
      "
    >
      {/* =====================================================
          DESKTOP / TABLET ROW
      ===================================================== */}

      <div
        className="
          hidden
          md:grid
          md:grid-cols-[176px_minmax(0,1fr)_minmax(0,1fr)]
          md:gap-4
          md:items-start
        "
      >
        {/* STAGE */}

        <div
          className="
            min-w-0
            flex
            justify-center
            items-center
          "
        >
          <div
            className="
              min-w-[176px]
              min-h-[40px]
              px-6
              py-1.5
              bg-violet-50
              rounded-md
              border
              border-slate-900/20
              flex
              items-center
              justify-center
            "
          >
            <span
              className="
                text-center
                text-slate-900
                text-xs
                font-bold
                font-['IBM_Plex_Sans']
                leading-5
              "
            >
              {item.stage}
            </span>
          </div>
        </div>

        {/* TEAM JOB */}

        <div className="min-w-0">
          <p
            className="
              text-slate-700
              text-base
              font-normal
              font-['IBM_Plex_Sans']
              leading-7
            "
          >
            {item.teamJob}
          </p>
        </div>

        {/* REQUIRED BEHAVIOR */}

        <div className="min-w-0">
          <p
            className="
              text-gray-600
              text-sm
              font-normal
              font-['IBM_Plex_Sans']
              leading-6
            "
          >
            {item.behavior}
          </p>
        </div>
      </div>

      {/* =====================================================
          MOBILE ROW
      ===================================================== */}

      <div
        className="
          md:hidden
          w-full
          flex
          flex-col
          gap-5
        "
      >
        {/* STAGE */}

        <div>
          <div
            className="
              inline-flex
              min-w-[140px]
              min-h-[40px]
              px-6
              py-1.5
              bg-violet-50
              rounded-md
              border
              border-slate-900/20
              items-center
              justify-center
            "
          >
            <span
              className="
                text-slate-900
                text-xs
                font-bold
                font-['IBM_Plex_Sans']
                leading-5
              "
            >
              {item.stage}
            </span>
          </div>
        </div>

        {/* TEAM JOB */}

        <div className="w-full">
          <div
            className="
              mb-2
              text-gray-600
              text-[10px]
              font-bold
              font-['IBM_Plex_Sans']
              tracking-wide
            "
          >
            TEAM JOB
          </div>

          <p
            className="
              text-slate-700
              text-base
              font-normal
              font-['IBM_Plex_Sans']
              leading-7
            "
          >
            {item.teamJob}
          </p>
        </div>

        {/* REQUIRED BEHAVIOR */}

        <div className="w-full">
          <div
            className="
              mb-2
              text-gray-600
              text-[10px]
              font-bold
              font-['IBM_Plex_Sans']
              tracking-wide
            "
          >
            REQUIRED BEHAVIOR
          </div>

          <p
            className="
              text-gray-600
              text-sm
              font-normal
              font-['IBM_Plex_Sans']
              leading-6
            "
          >
            {item.behavior}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TeamResearchWorkflow() {
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
          1440px DESKTOP CONTAINER
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
          lg:pt-[95.7px]
          lg:pb-[95px]
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
              text-yellow-600
              text-xs
              font-bold
              font-['IBM_Plex_Sans']
              tracking-wide
            "
          >
            TEAM RESEARCH WORKFLOW
          </motion.div>

          {/* HEADING */}

          <motion.h2
            variants={fadeUp}
            className="
              w-full
              max-w-[780px]
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
            Ask → Discover → Inspect →
            <br className="hidden sm:block" />
            Understand → Build → Review →
            <br className="hidden sm:block" />
            Monitor → Reassess.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            variants={fadeUp}
            className="
              w-full
              max-w-[780px]
              pt-5
              text-gray-600
              text-sm
              sm:text-base
              font-normal
              font-['IBM_Plex_Sans']
              leading-6
              lg:leading-7
            "
          >
            The eight-stage process a shared research object moves through —
            including a review stage no
            <br className="hidden lg:block" />
            individual-research workflow needs.
          </motion.p>
        </motion.div>

        {/* ===================================================
            TABLE
        =================================================== */}

        <div
          className="
            w-full
            max-w-[1280px]
            mt-10
          "
        >
          {/* =================================================
              TABLE HEADER
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              hidden
              md:grid
              md:grid-cols-[176px_minmax(0,1fr)_minmax(0,1fr)]
              md:gap-4
              w-full
              pb-3
            "
          >
            {/* Empty stage column */}

            <div className="min-w-0" />

            {/* Team job */}

            <div className="min-w-0">
              <span
                className="
                  text-gray-600
                  text-xs
                  font-bold
                  font-['IBM_Plex_Sans']
                  tracking-wide
                "
              >
                TEAM JOB
              </span>
            </div>

            {/* Required behavior */}

            <div className="min-w-0">
              <span
                className="
                  text-gray-600
                  text-xs
                  font-bold
                  font-['IBM_Plex_Sans']
                  tracking-wide
                "
              >
                REQUIRED BEHAVIOR
              </span>
            </div>
          </motion.div>

          {/* =================================================
              WORKFLOW ROWS
          ================================================= */}

          <div className="w-full">
            {workflowItems.map((item, index) => (
              <WorkflowRow
                key={item.stage}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}