"use client";

import { motion } from "framer-motion";

const walkthroughSteps = [
  {
    number: "01",
    title: "Question",
    description:
      '"What evidence has changed around a public-market policy or macro question?"',
  },
  {
    number: "02",
    title: "Discover",
    description:
      "Surface governed source candidates and clearly identify source identity and timing.",
  },
  {
    number: "03",
    title: "Inspect",
    description:
      "Open source or governed viewer; show original title, publication time, reference period, jurisdiction, version, and rights state where material.",
  },
  {
    number: "04",
    title: "Understand",
    description:
      "Explain how each source supports, contradicts, updates, or contextualizes the question.",
  },
  {
    number: "05",
    title: "Build",
    description:
      "Preserve the researcher’s view and assumptions separately from source evidence and AI-assisted interpretation.",
  },
  {
    number: "06",
    title: "Monitor",
    description:
      "Show new/updated/unchanged/source-unavailable/materiality-pending states without generic alert noise.",
  },
  {
    number: "07",
    title: "Reassess",
    description:
      "Highlight which assumptions or evidence relationships deserve review when material new evidence arrives.",
  },
];

export default function AppliedMethodologyWalkthrough() {
  return (
    <section className="w-full overflow-hidden bg-violet-50">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-[96px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[800px]"
        >
          <div className="text-xs font-bold uppercase tracking-[0.08em] text-indigo-500 [font-family:'IBM_Plex_Sans']">
            APPLIED METHODOLOGY WALKTHROUGH
          </div>

          <h2 className="pt-3 text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[44px] lg:text-5xl lg:leading-[48.72px] [font-family:'IBM_Plex_Sans']">
            The method, demonstrated with a
            <br className="hidden sm:block" /> neutral research question.
          </h2>

          <p className="pt-2 text-base font-normal leading-7 text-gray-600 [font-family:'IBM_Plex_Sans']">
            Illustrative walkthrough. It does not imply current live coverage
            unless the relevant source/coverage registry approves it, and
            carries no investment recommendation.
          </p>
        </motion.div>

        {/* Walkthrough card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 overflow-hidden rounded-2xl border border-slate-900/10 bg-white pt-2 md:mt-10 md:pt-4 lg:mt-7"
        >
          {walkthroughSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-3 border-b border-slate-900/10 px-5 py-5 last:border-b-0 sm:px-6 md:flex-row md:items-start md:gap-5"
            >
              {/* Number */}
              <div className="w-6 shrink-0">
                <span className="text-xs font-bold leading-5 text-indigo-500 [font-family:'IBM_Plex_Sans']">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold leading-6 text-slate-900 [font-family:'IBM_Plex_Sans']">
                  {step.title}
                </h3>

                <p className="mt-1 max-w-[1100px] text-sm font-normal leading-5 text-gray-600 [font-family:'IBM_Plex_Sans']">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}