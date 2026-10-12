"use client";

import { motion } from "framer-motion";

const workflowSteps = [
  {
    number: "01",
    title: "Ask",
    userJob:
      "Frame a market, issuer, security, event, policy issue, or research question.",
    behavior:
      "Preserve the question as the research object context rather than reducing it to a keyword query.",
  },
  {
    number: "02",
    title: "Discover",
    userJob: "Find relevant evidence and context.",
    behavior:
      "Return governed source candidates with source identity and scope, not only synthesized answers.",
  },
  {
    number: "03",
    title: "Inspect",
    userJob: "Review the underlying sources.",
    behavior:
      "Open source or governed viewer; show publication timing, version, jurisdiction, and rights state where relevant.",
  },
  {
    number: "04",
    title: "Understand",
    userJob: "See how evidence relates to the question.",
    behavior:
      "Expose supporting, contradicting, updating, or contextual relationships without a hidden black-box score.",
  },
  {
    number: "05",
    title: "Build",
    userJob: "Develop and preserve a research view.",
    behavior:
      "Keep evidence, interpretation, assumptions, and user notes distinguishable and revisit-able.",
  },
  {
    number: "06",
    title: "Monitor",
    userJob: "Continue watching relevant evidence and assumptions.",
    behavior:
      "Surface meaningful evidence changes separately from market-price alerts or generic notification noise.",
  },
  {
    number: "07",
    title: "Reassess",
    userJob: "Return when new evidence changes the basis of the view.",
    behavior:
      "Show what changed, when, where, and which prior assumption/evidence relationship may need review.",
  },
];

export default function ResearchWorkflow() {
  return (
    <section className="w-full overflow-hidden bg-white text-slate-900">
      <div
        className="
          mx-auto
          w-full
          max-w-[1439.8px]
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-8
          lg:py-[96px]
          xl:px-20
        "
      >
        <div className="mx-auto w-full max-w-[1280px]">
          {/* =====================================================
              SECTION HEADER
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            <div>
              <span
                className="
                  font-['IBM_Plex_Sans']
                  text-[12px]
                  font-bold
                  leading-4
                  tracking-[0.07em]
                  text-indigo-500
                "
              >
                RESEARCH WORKFLOW
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-3
                max-w-[780px]
                font-['IBM_Plex_Sans']
                text-[36px]
                font-bold
                leading-[1.12]
                tracking-[-0.025em]
                text-slate-900

                sm:text-[42px]

                lg:text-[48px]
                lg:leading-[48.72px]
              "
            >
              Ask → Discover → Inspect →
              <br className="hidden sm:block" />
              Understand → Build → Monitor
              <br className="hidden sm:block" />
              → Reassess.
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[780px]
                font-['IBM_Plex_Sans']
                text-[15px]
                font-normal
                leading-7
                text-gray-600

                sm:text-[16px]
              "
            >
              The seven-step process a research object moves through, from a
              framed question to a monitored, revisit-able view.
            </p>
          </motion.div>

          {/* =====================================================
              WORKFLOW TABLE
          ===================================================== */}

          <div className="mt-10 lg:mt-[40px]">
            {/* ---------------------------------------------------
                DESKTOP / TABLET HEADERS
            --------------------------------------------------- */}

            <div
              className="
                hidden
                grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)]
                gap-4
                border-b
                border-slate-900/10
                px-0
                pb-3

                md:grid
              "
            >
              {/* Empty first column */}
              <div aria-hidden="true" />

              {/* User Job */}
              <div>
                <span
                  className="
                    font-['IBM_Plex_Sans']
                    text-[12px]
                    font-bold
                    leading-4
                    tracking-[0.07em]
                    text-gray-600
                  "
                >
                  USER JOB
                </span>
              </div>

              {/* UI / Content Behavior */}
              <div>
                <span
                  className="
                    font-['IBM_Plex_Sans']
                    text-[12px]
                    font-bold
                    leading-4
                    tracking-[0.07em]
                    text-gray-600
                  "
                >
                  UI / CONTENT BEHAVIOR
                </span>
              </div>
            </div>

            {/* ---------------------------------------------------
                WORKFLOW ROWS
            --------------------------------------------------- */}

            <div className="flex flex-col">
              {workflowSteps.map((step, index) => (
                <WorkflowRow
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  userJob={step.userJob}
                  behavior={step.behavior}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   WORKFLOW ROW
=============================================================== */

function WorkflowRow({
  number,
  title,
  userJob,
  behavior,
  index,
}: {
  number: string;
  title: string;
  userJob: string;
  behavior: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 22,
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
        duration: 0.55,
        delay: index * 0.055,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        border-b
        border-slate-900/10
        py-5

        md:grid
        md:grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)]
        md:items-start
        md:gap-4
      "
    >
      {/* =======================================================
          STEP
      ======================================================= */}

      <div className="mb-4 md:mb-0">
        <div
          className="
            inline-flex
            min-h-[32px]
            min-w-[208px]
            items-center
            justify-center
            rounded-md
            border
            border-slate-900/20
            bg-violet-50
            px-6
            py-1.5

            md:w-[208px]
          "
        >
          <span
            className="
              whitespace-nowrap
              text-center
              font-['IBM_Plex_Sans']
              text-[12px]
              font-bold
              leading-4
              text-slate-900
            "
          >
            {number} {title}
          </span>
        </div>
      </div>

      {/* =======================================================
          USER JOB
      ======================================================= */}

      <div className="mb-4 md:mb-0">
        {/* Mobile label */}
        <div className="mb-1.5 md:hidden">
          <span
            className="
              font-['IBM_Plex_Sans']
              text-[10px]
              font-bold
              leading-4
              tracking-[0.07em]
              text-gray-500
            "
          >
            USER JOB
          </span>
        </div>

        <p
          className="
            font-['IBM_Plex_Sans']
            text-[15px]
            font-normal
            leading-6
            text-slate-700

            sm:text-[16px]
          "
        >
          {userJob}
        </p>
      </div>

      {/* =======================================================
          UI / CONTENT BEHAVIOR
      ======================================================= */}

      <div>
        {/* Mobile label */}
        <div className="mb-1.5 md:hidden">
          <span
            className="
              font-['IBM_Plex_Sans']
              text-[10px]
              font-bold
              leading-4
              tracking-[0.07em]
              text-gray-500
            "
          >
            UI / CONTENT BEHAVIOR
          </span>
        </div>

        <p
          className="
            font-['IBM_Plex_Sans']
            text-[13px]
            font-normal
            leading-5
            text-gray-600

            sm:text-[14px]
          "
        >
          {behavior}
        </p>
      </div>
    </motion.div>
  );
}