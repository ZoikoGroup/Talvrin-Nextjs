"use client";

import { motion } from "framer-motion";

const sourceRows = [
  {
    title: "Source before summary",
    description:
      "Cards and pages never imply the summary text is itself the underlying evidence.",
  },
  {
    title: "Primary source exposure",
    description:
      "Sources are exposed where research makes factual or analytical claims, subject to rights.",
  },
  {
    title: "Rights-aware linking",
    description:
      "Deep links or governed viewers are used only where permitted.",
  },
  {
    title: "No licensed leakage",
    description:
      "Snippets, previews, structured data, and analytics never expose restricted source text.",
  },
  {
    title: "Version / supersession",
    description:
      "Preserved on the item page when the source version matters.",
  },
  {
    title: "Citation readiness",
    description:
      "Stable canonical URL, attributable author/editor, and dates support citation and answer-engine use.",
  },
];

export default function SourcesProvenanceRights() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1280px]
          flex-col
          px-5
          py-16
          sm:px-7
          sm:py-20
          lg:px-8
          lg:py-[95.98px]
          xl:px-0
        "
      >
        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex w-full flex-col items-start"
        >
          {/* Eyebrow */}

          <div className="w-full">
            <span
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                leading-4
                tracking-[0.08em]
                text-indigo-500
              "
            >
              Sources, Provenance &amp; Rights
            </span>
          </div>

          {/* Heading */}

          <div
            className="
              w-full
              max-w-[780px]
              pt-3
            "
          >
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
              Every card cites evidence. No card
              <br className="hidden sm:block" />
              leaks it.
            </h2>
          </div>

          {/* Description */}

          <div
            className="
              w-full
              max-w-[800px]
              pt-5
              pb-8
              sm:pb-10
            "
          >
            <p
              className="
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-gray-600
              "
            >
              Summaries are never mistaken for the underlying evidence, and
              restricted source text stays out of snippets, previews,
              structured data, and analytics.
            </p>
          </div>
        </motion.div>

        {/* ============================================================
            SOURCE / PROVENANCE ROWS
        ============================================================ */}

        <div className="w-full">
          {sourceRows.map((row, index) => (
            <SourceRow
              key={row.title}
              title={row.title}
              description={row.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   SOURCE ROW
================================================================== */

type SourceRowProps = {
  title: string;
  description: string;
  index: number;
};

function SourceRow({
  title,
  description,
  index,
}: SourceRowProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
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
        duration: 0.5,
        delay: index * 0.045,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        grid
        w-full
        grid-cols-1
        gap-2
        border-b
        border-slate-900/10
        py-4
        sm:grid-cols-[224px_minmax(0,1fr)]
        sm:gap-4
      "
    >
      {/* ==========================================================
          TITLE
      ========================================================== */}

      <div
        className="
          flex
          w-full
          flex-col
          items-start
          sm:pr-6
        "
      >
        <h3
          className="
            font-['IBM_Plex_Sans']
            text-base
            font-semibold
            leading-6
            text-slate-900
          "
        >
          {title}
        </h3>
      </div>

      {/* ==========================================================
          DESCRIPTION
      ========================================================== */}

      <div className="flex w-full flex-col items-start">
        <p
          className="
            w-full
            font-['IBM_Plex_Sans']
            text-sm
            font-normal
            leading-6
            text-gray-600
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}