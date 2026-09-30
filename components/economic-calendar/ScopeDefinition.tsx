"use client";

import { motion } from "framer-motion";

const rows = [
  {
    label: "Event Status",
    explain:
      "Show upcoming, released, revised, delayed, canceled or time-TBD status exactly as the source supports.",
    assume:
      "Imply a deterministic market reaction to any release.",
  },
  {
    label: "Values",
    explain:
      "Label actual, previous, revised-previous and consensus values distinctly, with units.",
    assume:
      "Present consensus as authoritative fact or omit its provider/methodology.",
  },
  {
    label: "Timing",
    explain:
      "Separate scheduled, published and reference-period timestamps with an explicit active time zone.",
    assume:
      "Rely on unlabeled browser-local time or invent a time when the source has none.",
  },
  {
    label: "Revisions",
    explain:
      "Preserve a traceable history when an official source revises, corrects or supersedes a value.",
    assume:
      "Overwrite prior values silently.",
  },
  {
    label: "Coverage & Taxonomy",
    explain:
      "Show jurisdictions, categories and coverage states from governed registries.",
    assume:
      "Imply global, real-time coverage before a registry approves it.",
  },
];

export default function ScopeDefinition() {
  return (
    <section
      id="scope-definition"
      className="relative overflow-hidden bg-violet-50"
    >
      {/* Subtle fixed-mode background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(99,102,241,0.045),transparent_45%)]"
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex w-full flex-col items-start"
        >
          {/* Eyebrow */}
          <span className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
            SCOPE &amp; DEFINITION
          </span>

          {/* Title */}
          <h2 className="max-w-[1000px] pt-3 font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[42px] sm:leading-[1.1] lg:text-5xl lg:leading-[48.72px]">
            An evidence-linked macro calendar —
            <br className="hidden sm:block" />
            not a trading terminal.
          </h2>

          {/* Description */}
          <p className="max-w-[800px] pt-5 font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
            A source-linked calendar for macroeconomic events that keeps time,
            reference period, official evidence, revisions and research context
            together — without implying that any release has a deterministic
            market impact.
          </p>
        </motion.div>

        {/* Desktop column headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 hidden grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)] gap-4 pb-3 md:grid"
        >
          <div />

          <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
            MAY EXPLAIN
          </div>

          <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
            MUST NOT ASSUME
          </div>
        </motion.div>

        {/* Rows */}
        <div className="mt-6 md:mt-0">
          {rows.map((row, index) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              className="
                grid
                grid-cols-1
                gap-5
                border-b-[0.8px]
                border-slate-900/10
                py-6
                md:grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)]
                md:items-start
                md:gap-4
                md:py-5
              "
            >
              {/* Label */}
              <div className="flex items-start">
                <div className="inline-flex min-h-[32px] items-center justify-center rounded-md bg-white px-5 py-1.5 outline outline-1 outline-offset-[-1px] outline-slate-900/20">
                  <span className="whitespace-nowrap text-center font-['IBM_Plex_Sans'] text-xs font-bold text-slate-900">
                    {row.label}
                  </span>
                </div>
              </div>

              {/* May Explain */}
              <div className="flex flex-col items-start">
                <div className="mb-2 font-['IBM_Plex_Sans'] text-[10px] font-bold tracking-wide text-gray-500 md:hidden">
                  MAY EXPLAIN
                </div>

                <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-slate-700">
                  {row.explain}
                </p>
              </div>

              {/* Must Not Assume */}
              <div className="flex flex-col items-start">
                <div className="mb-2 font-['IBM_Plex_Sans'] text-[10px] font-bold tracking-wide text-gray-500 md:hidden">
                  MUST NOT ASSUME
                </div>

                <p className="font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600">
                  {row.assume}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}