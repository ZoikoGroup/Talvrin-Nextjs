"use client";

import { motion } from "framer-motion";

const comparisons = [
  {
    risk: "Definition without provenance",
    treatment:
      "Direct answer plus inspectable source basis where claims warrant it.",
  },
  {
    risk: "Simplification that erases context",
    treatment:
      "Explicit timing, jurisdiction, regime, assumptions, and caveats where material.",
  },
  {
    risk: "Static text after facts change",
    treatment:
      "Material update, review, and supersession workflow.",
  },
  {
    risk: "AI summary presented as authority",
    treatment:
      "AI role disclosed; source evidence remains separately inspectable.",
  },
  {
    risk: "Generic related articles",
    treatment:
      "Typed concept relationships and research handoffs.",
  },
  {
    risk: "SEO-first volume",
    treatment:
      "Editorially governed, non-commodity content standard.",
  },
];

export default function TheDifferentiator() {
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex w-full flex-col items-start"
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
            THE DIFFERENTIATOR
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
            An explanation is more useful when
            <br className="hidden sm:block" />
            you can inspect what it rests on.
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
            Generic finance explainers stop at the definition. Talvrin&apos;s
            stay connected to the evidence and to the moment that evidence
            changes.
          </p>
        </motion.div>

        {/* =====================================================
            COLUMN HEADINGS
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
            grid-cols-[288px_minmax(0,1fr)]
            gap-4
            pb-3

            lg:grid
          "
        >
          <div
            className="
              pr-24
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-gray-600
            "
          >
            TRADITIONAL EXPLAINER RISK
          </div>

          <div
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-gray-600
            "
          >
            TALVRIN TREATMENT
          </div>
        </motion.div>

        {/* =====================================================
            MOBILE COLUMN HEADINGS
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-2
            pb-3

            lg:hidden
          "
        >
          <div
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-gray-600
            "
          >
            TRADITIONAL EXPLAINER RISK
          </div>

          <div
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-gray-600
            "
          >
            TALVRIN TREATMENT
          </div>
        </div>

        {/* =====================================================
            COMPARISON ROWS
        ===================================================== */}

        <div className="w-full">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.risk}
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
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                grid
                w-full
                grid-cols-1
                gap-4
                border-b
                border-slate-900/10
                py-5

                lg:grid-cols-[288px_minmax(0,1fr)]
                lg:items-start
              "
            >
              {/* =================================================
                  RISK
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
                  {item.risk}
                </span>
              </div>

              {/* =================================================
                  TALVRIN TREATMENT
              ================================================= */}

              <div
                className="
                  min-w-0
                  pt-0

                  lg:pt-0
                "
              >
                <p
                  className="
                    max-w-[650px]
                    font-['IBM_Plex_Sans']
                    text-base
                    font-normal
                    leading-6
                    text-slate-700
                  "
                >
                  {item.treatment}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}