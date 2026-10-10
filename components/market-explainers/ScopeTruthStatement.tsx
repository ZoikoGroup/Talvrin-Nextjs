"use client";

import { motion } from "framer-motion";

const truthRows = [
  {
    question: "What are Talvrin Market Explainers?",
    answer:
      "Evidence-linked explanations of public-market concepts, institutions, mechanics, and relationships — designed to help users understand the “why” behind market research.",
  },
  {
    question: "Are Market Explainers investment advice?",
    answer:
      "No. They are research and educational content, not trade execution, stock tips, or manufactured buy/sell/hold recommendations.",
  },
  {
    question: "Do explainers cover every market and jurisdiction?",
    answer:
      "No. Talvrin is architected globally, but released content and coverage are stated truthfully and specifically — never as a blanket claim.",
  },
  {
    question:
      "Can I use an explainer as the final answer to a research question?",
    answer:
      "An explainer is an orientation and understanding layer. Serious research should still inspect current evidence, context, and relevant sources.",
  },
];

export default function ScopeTruthStatement() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-violet-50
        text-slate-900
      "
    >
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
          lg:py-[95.9px]
          xl:px-0
        "
      >
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            flex-col
            items-start
          "
        >
          {/* Eyebrow */}

          <div
            className="
              w-full
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
            "
          >
            SCOPE &amp; TRUTH STATEMENT
          </div>

          {/* Heading */}

          <h2
            className="
              max-w-[780px]
              pt-3
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
            A learning surface, not a content-
            <br className="hidden sm:block" />
            generation engine.
          </h2>

          {/* Description */}

          <p
            className="
              max-w-[800px]
              pt-5
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-gray-600
            "
          >
            The page answers what it is and isn&apos;t before it answers a
            concept question — evidence, coverage, and finality are never
            implied beyond what&apos;s actually published.
          </p>
        </motion.div>

        {/* =====================================================
            PUBLIC ANSWER LABEL
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="
            mt-10
            hidden
            items-end
            gap-4
            pb-3

            lg:flex
          "
        >
          {/* Empty question column */}

          <div className="w-72 shrink-0" />

          {/* Answer heading */}

          <div
            className="
              flex-1
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-gray-600
            "
          >
            PUBLIC ANSWER
          </div>
        </motion.div>

        {/* =====================================================
            MOBILE PUBLIC ANSWER
        ===================================================== */}

        <div
          className="
            mt-10
            pb-3
            font-['IBM_Plex_Sans']
            text-xs
            font-bold
            tracking-wide
            text-gray-600

            lg:hidden
          "
        >
          PUBLIC ANSWER
        </div>

        {/* =====================================================
            TRUTH ROWS
        ===================================================== */}

        <div className="w-full">
          {truthRows.map((row, index) => (
            <motion.div
              key={row.question}
              initial={{
                opacity: 0,
                y: 18,
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
                duration: 0.65,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                flex
                w-full
                flex-col
                gap-4
                border-b
                border-slate-900/10
                py-5

                lg:grid
                lg:grid-cols-[288px_minmax(0,1fr)]
                lg:items-start
                lg:gap-4
              "
            >
              {/* =================================================
                  QUESTION
              ================================================= */}

              <div
                className="
                  inline-flex
                  w-fit
                  max-w-full
                  rounded-lg
                  border
                  border-slate-900/20
                  bg-white
                  px-4
                  py-2.5

                  lg:min-h-[44px]
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
                  {row.question}
                </span>
              </div>

              {/* =================================================
                  ANSWER
              ================================================= */}

              <div
                className="
                  min-w-0
                  pt-0

                  lg:pt-[11px]
                "
              >
                <p
                  className="
                    max-w-[964px]
                    font-['IBM_Plex_Sans']
                    text-base
                    font-normal
                    leading-6
                    text-slate-700
                  "
                >
                  {row.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}