"use client";

import { motion } from "framer-motion";

const rows = [
  {
    title: "Official Decisions",
    mayExplain: (
      <>
        Show what an institution officially announced, changed or clarified,
        with the primary source.
      </>
    ),
    mustNotAssume: (
      <>
        Convert evidence into a hawkish/dovish score, buy/sell signal or
        certainty about future policy.
      </>
    ),
  },
  {
    title: "Policy Instruments",
    mayExplain: (
      <>
        Display institution-specific instrument names, values and units
        exactly as the source publishes them.
      </>
    ),
    mustNotAssume: (
      <>
        Force every central bank into one generic &quot;policy rate&quot; field.
      </>
    ),
  },
  {
    title: "Meeting Timelines",
    mayExplain: (
      <>
        Separate scheduled, publication and effective/reference timing with
        explicit time zones.
      </>
    ),
    mustNotAssume: (
      <>
        Collapse schedule, publication and effective dates into one ambiguous
        timestamp.
      </>
    ),
  },
  {
    title: "Communications & Evidence",
    mayExplain: (
      <>
        Preserve a chronological record of statements, minutes, speeches and
        corrections with source identity.
      </>
    ),
    mustNotAssume: (
      <>
        Mix third-party commentary into the official evidence stream without
        separation.
      </>
    ),
  },
  {
    title: "Cross-Institution Comparison",
    mayExplain: (
      <>
        Compare governed, like-with-like fields once a transparent methodology
        exists.
      </>
    ),
    mustNotAssume: (
      <>
        Rank institutions as more or less &quot;hawkish&quot; without an
        approved, disclosed methodology.
      </>
    ),
  },
];

const easing = [
  0.22,
  1,
  0.36,
  1,
] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easing,
    },
  },
};

export default function ScopeDefinition() {
  return (
    <section
      id="scope-definition"
      className="
        relative
        overflow-hidden
        bg-violet-50
      "
    >
      {/* =====================================================
          DESKTOP / TABLET CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-14
          sm:px-6
          sm:py-16
          md:px-8
          lg:px-12
          lg:py-[95.6px]
          xl:px-[80px]
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={containerVariants}
          className="
            w-full
            max-w-[1280px]
          "
        >
          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.div variants={itemVariants}>
            <div
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                tracking-[0.06em]
                text-yellow-600
              "
            >
              Scope &amp; Definition
            </div>
          </motion.div>

          {/* =================================================
              TITLE
          ================================================== */}

          <motion.h2
            variants={itemVariants}
            className="
              mt-3
              max-w-[1000px]
              font-['IBM_Plex_Sans']
              text-[28px]
              font-bold
              leading-[1.1]
              tracking-[-0.02em]
              text-slate-900
              sm:text-[38px]
              md:text-[42px]
              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            An evidence-first research destination
            <br className="hidden sm:block" />
            — not a prediction engine.
          </motion.h2>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            variants={itemVariants}
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
            Central Banks helps users follow official decisions,
            communications, meeting timelines, policy context and meaningful
            source changes without losing provenance, timing or jurisdiction.
          </motion.p>

          {/* =================================================
              TABLE HEADER
          ================================================== */}

          <motion.div
            variants={itemVariants}
            className="
              mt-10
              hidden
              grid-cols-[180px_minmax(0,1fr)_minmax(0,1fr)]
              gap-4
              pb-3
              lg:grid
              xl:grid-cols-[208px_minmax(224px,1fr)_minmax(224px,1fr)]
            "
          >
            {/* Empty label column */}

            <div aria-hidden="true" />

            {/* May explain */}

            <div
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                tracking-[0.06em]
                text-gray-600
              "
            >
              May Explain
            </div>

            {/* Must not assume */}

            <div
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                tracking-[0.06em]
                text-gray-600
              "
            >
              Must Not Assume
            </div>
          </motion.div>

          {/* =================================================
              MOBILE HEADERS
          ================================================== */}

          <div
            className="
              mt-8
              grid
              grid-cols-2
              gap-4
              border-b-[0.8px]
              border-slate-900/10
              pb-3
              lg:hidden
            "
          >
            <div
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                tracking-[0.06em]
                text-gray-600
              "
            >
              May Explain
            </div>

            <div
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                tracking-[0.06em]
                text-gray-600
              "
            >
              Must Not Assume
            </div>
          </div>

          {/* =================================================
              TABLE ROWS
          ================================================== */}

          <div className="w-full">
            {rows.map((row, index) => (
              <motion.div
                key={row.title}
                variants={itemVariants}
                className="
                  grid
                  grid-cols-1
                  gap-5
                  border-b-[0.8px]
                  border-slate-900/10
                  py-5
                  lg:grid-cols-[180px_minmax(0,1fr)_minmax(0,1fr)]
                  lg:items-start
                  lg:gap-4
                  xl:grid-cols-[208px_minmax(224px,1fr)_minmax(224px,1fr)]
                "
              >
                {/* =================================================
                    LABEL
                ================================================== */}

                <div
                  className="
                    flex
                    min-w-0
                    items-start
                    lg:min-w-[180px]
                    xl:min-w-[208px]
                  "
                >
                  <div
                    className="
                      inline-flex
                      min-h-[32px]
                      items-center
                      justify-center
                      rounded-md
                      bg-white
                      px-4
                      py-1.5
                      text-center
                      outline
                      outline-1
                      outline-offset-[-1px]
                      outline-slate-900/20
                    "
                  >
                    <span
                      className="
                        whitespace-nowrap
                        font-['IBM_Plex_Sans']
                        text-xs
                        font-bold
                        leading-4
                        text-slate-900
                      "
                    >
                      {row.title}
                    </span>
                  </div>
                </div>

                {/* =================================================
                    MAY EXPLAIN
                ================================================== */}

                <div
                  className="
                    min-w-0
                    font-['IBM_Plex_Sans']
                    text-[15px]
                    font-normal
                    leading-7
                    text-slate-700
                    lg:text-base
                  "
                >
                  <span
                    className="
                      mb-1
                      block
                      font-['IBM_Plex_Sans']
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.06em]
                      text-gray-500
                      lg:hidden
                    "
                  >
                    May Explain
                  </span>

                  {row.mayExplain}
                </div>

                {/* =================================================
                    MUST NOT ASSUME
                ================================================== */}

                <div
                  className="
                    min-w-0
                    font-['IBM_Plex_Sans']
                    text-sm
                    font-normal
                    leading-6
                    text-gray-600
                  "
                >
                  <span
                    className="
                      mb-1
                      block
                      font-['IBM_Plex_Sans']
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.06em]
                      text-gray-500
                      lg:hidden
                    "
                  >
                    Must Not Assume
                  </span>

                  {row.mustNotAssume}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}