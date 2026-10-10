"use client";

import { motion, type Variants } from "framer-motion";

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
        py-5
        sm:py-5
        lg:py-4
      "
    >
      {/* TABLET AND DESKTOP */}

      <div
        className="
          hidden
          w-full
          items-start
          gap-4
          md:grid
          md:grid-cols-[150px_minmax(0,1fr)_minmax(0,1fr)]
          lg:grid-cols-[176px_minmax(0,1fr)_minmax(0,1fr)]
          lg:gap-6
          xl:gap-8
        "
      >
        {/* STAGE */}

        <div className="flex min-w-0 items-start justify-center">
          <div
            className="
              flex
              min-h-10
              w-full
              max-w-[176px]
              items-center
              justify-center
              rounded-md
              border
              border-slate-900/20
              bg-violet-50
              px-3
              py-2
              sm:px-4
              lg:px-6
            "
          >
            <span
              className="
                text-center
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                leading-5
                text-slate-900
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
              break-words
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-slate-700
              lg:text-base
              lg:leading-7
            "
          >
            {item.teamJob}
          </p>
        </div>

        {/* REQUIRED BEHAVIOR */}

        <div className="min-w-0">
          <p
            className="
              break-words
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
              lg:leading-6
            "
          >
            {item.behavior}
          </p>
        </div>
      </div>

      {/* MOBILE */}

      <div className="flex w-full flex-col gap-5 md:hidden">
        {/* STAGE */}

        <div>
          <span
            className="
              inline-flex
              min-h-10
              min-w-[140px]
              items-center
              justify-center
              rounded-md
              border
              border-slate-900/20
              bg-violet-50
              px-6
              py-2
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              leading-5
              text-slate-900
            "
          >
            {item.stage}
          </span>
        </div>

        {/* TEAM JOB */}

        <div className="w-full min-w-0">
          <p
            className="
              mb-2
              font-['IBM_Plex_Sans']
              text-[10px]
              font-bold
              tracking-wide
              text-gray-600
            "
          >
            TEAM JOB
          </p>

          <p
            className="
              break-words
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-slate-700
              sm:text-base
              sm:leading-7
            "
          >
            {item.teamJob}
          </p>
        </div>

        {/* REQUIRED BEHAVIOR */}

        <div className="w-full min-w-0">
          <p
            className="
              mb-2
              font-['IBM_Plex_Sans']
              text-[10px]
              font-bold
              tracking-wide
              text-gray-600
            "
          >
            REQUIRED BEHAVIOR
          </p>

          <p
            className="
              break-words
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
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
    <section className="relative w-full overflow-hidden bg-white">
      {/* MAIN CONTAINER */}

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
          lg:py-[95px]
          xl:px-20
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
          {/* EYEBROW */}

          <motion.p
            variants={fadeUp}
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
              sm:text-sm
            "
          >
            TEAM RESEARCH WORKFLOW
          </motion.p>

          {/* HEADING */}

          <motion.h2
            variants={fadeUp}
            className="
              w-full
              max-w-[900px]
              pt-3
              font-['IBM_Plex_Sans']
              text-[clamp(1.8rem,3.5vw,3rem)]
              font-bold
              leading-[1.1]
              tracking-[-0.02em]
              text-slate-900
            "
          >
            Ask → Discover → Inspect → Understand → Build → Review → Monitor →
            Reassess.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            variants={fadeUp}
            className="
              w-full
              max-w-[780px]
              pt-4
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
              sm:pt-5
              sm:text-base
              sm:leading-7
            "
          >
            The eight-stage process a shared research object moves through —
            including a review stage no individual-research workflow needs.
          </motion.p>
        </motion.div>

        {/* WORKFLOW TABLE */}

        <div className="mt-8 w-full max-w-[1280px] sm:mt-10 lg:mt-10">
          {/* TABLE HEADER — TABLET AND DESKTOP */}

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
              w-full
              grid-cols-[150px_minmax(0,1fr)_minmax(0,1fr)]
              gap-4
              pb-3
              md:grid
              lg:grid-cols-[176px_minmax(0,1fr)_minmax(0,1fr)]
              lg:gap-6
              xl:gap-8
            "
          >
            <div aria-hidden="true" />

            <div className="min-w-0">
              <span
                className="
                  font-['IBM_Plex_Sans']
                  text-xs
                  font-bold
                  tracking-wide
                  text-gray-600
                "
              >
                TEAM JOB
              </span>
            </div>

            <div className="min-w-0">
              <span
                className="
                  font-['IBM_Plex_Sans']
                  text-xs
                  font-bold
                  tracking-wide
                  text-gray-600
                "
              >
                REQUIRED BEHAVIOR
              </span>
            </div>
          </motion.div>

          {/* WORKFLOW ROWS */}

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