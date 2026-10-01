"use client";

import { motion } from "framer-motion";

const scopeItems = [
  {
    question: "What belongs in the library?",
    answer:
      "Approved public TALVRIN research items that satisfy the Research Content Registry and required metadata contract.",
  },
  {
    question: "Is every Research page a library item?",
    answer:
      "No. Destinations such as Economic Calendar or Talvrin Methodology are separate public surfaces; library inclusion requires explicit content-registry eligibility.",
  },
  {
    question: "Does the library contain third-party research?",
    answer:
      "Source cards may cite authoritative or licensed sources, but library inventory itself is approved TALVRIN public content.",
  },
  {
    question: "Are all results current?",
    answer:
      "Each item exposes truthful published and materially-updated dates. Archived or superseded research stays clearly labeled if retained.",
  },
  {
    question: "Does listing imply endorsement?",
    answer:
      "No. Talvrin is a research and intelligence platform, not a recommendation engine.",
  },
  {
    question: "Can inventory be incomplete?",
    answer:
      "Yes. If indexing or coverage is limited, the library states that condition rather than implying exhaustive global research.",
  },
];

export default function LibraryScopeTruth() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-violet-50
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          py-20
          sm:px-7
          sm:py-24
          lg:px-0
          lg:py-[95.8px]
        "
      >
        {/* ==========================================================
            SECTION HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex w-full flex-col items-start"
        >
          {/* Eyebrow */}

          <div className="flex w-full flex-col items-start">
            <span
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                leading-4
                tracking-[0.08em]
                text-yellow-600
              "
            >
              Library Scope &amp; Truth Statement
            </span>
          </div>

          {/* Heading */}

          <div className="w-full max-w-[780px] pt-3">
            <h2
              className="
                font-['IBM_Plex_Sans']
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                text-slate-900
                sm:text-[44px]
                sm:leading-[48.72px]
                lg:text-5xl
              "
            >
              A retrieval surface, not a content-
              <br className="hidden sm:block" />
              generation engine.
            </h2>
          </div>

          {/* Description */}

          <div className="w-full max-w-[800px] pt-5">
            <p
              className="
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-gray-600
              "
            >
              The library answers what it is and isn&apos;t before it answers
              a query — inventory, currentness, and endorsement are never
              implied beyond what the registry actually publishes.
            </p>
          </div>
        </motion.div>

        {/* ==========================================================
            TABLE HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            w-full
            grid-cols-1
            gap-3
            pt-10
            pb-3
            lg:grid-cols-[256px_minmax(0,1fr)]
            lg:gap-4
          "
        >
          {/* Empty first column on desktop */}

          <div className="hidden lg:block" />

          {/* Public answer */}

          <div className="flex w-full items-start">
            <span
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                leading-4
                tracking-[0.08em]
                text-gray-600
              "
            >
              PUBLIC ANSWER
            </span>
          </div>
        </motion.div>

        {/* ==========================================================
            QUESTIONS / ANSWERS
        ========================================================== */}

        <div className="w-full">
          {scopeItems.map((item, index) => (
            <motion.div
              key={item.question}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                grid
                w-full
                grid-cols-1
                items-start
                gap-4
                border-b
                border-slate-900/10
                py-5
                lg:grid-cols-[256px_minmax(0,1fr)]
              "
            >
              {/* ====================================================
                  QUESTION
              ==================================================== */}

              <div className="w-full lg:w-fit">
                <div
                  className="
                    inline-flex
                    max-w-full
                    items-center
                    rounded-lg
                    border
                    border-slate-900/20
                    bg-white
                    px-4
                    py-2.5
                  "
                >
                  <span
                    className="
                      font-['IBM_Plex_Sans']
                      text-sm
                      font-bold
                      leading-5
                      text-slate-900
                    "
                  >
                    {item.question}
                  </span>
                </div>
              </div>

              {/* ====================================================
                  ANSWER
              ==================================================== */}

              <div className="w-full min-w-0">
                <p
                  className="
                    max-w-[980px]
                    font-['IBM_Plex_Sans']
                    text-base
                    font-normal
                    leading-6
                    text-slate-700
                  "
                >
                  {item.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}