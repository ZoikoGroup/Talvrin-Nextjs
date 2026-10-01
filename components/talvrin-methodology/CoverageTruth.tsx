"use client";

import { motion } from "framer-motion";

const coverageRows = [
  {
    label: "Deep Coverage",
    meaning:
      "High-confidence production-supported research depth for a named market/domain, where approved.",
    treatment: "May be described only when registry-approved.",
  },
  {
    label: "Supported",
    meaning:
      "Production-supported but narrower than deep coverage.",
    treatment: "Show with scope/limitations.",
  },
  {
    label: "Limited / Beta",
    meaning: "Available with explicit limitations.",
    treatment: "Limitation label is mandatory.",
  },
  {
    label: "Planned",
    meaning: "Roadmap only.",
    treatment:
      "Do not present as current coverage; expose only if roadmap publication is approved.",
  },
  {
    label: "Architecture-ready",
    meaning:
      "Platform architecture could support the category.",
    treatment:
      "Generally internal; does not create a customer-facing coverage claim.",
  },
];

export default function CoverageTruth() {
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
          className="max-w-[780px]"
        >
          <div className="text-xs font-bold uppercase tracking-[0.08em] text-indigo-500 [font-family:'IBM_Plex_Sans']">
            COVERAGE TRUTH
          </div>

          <h2 className="pt-3 text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[44px] lg:text-5xl lg:leading-[48.72px] [font-family:'IBM_Plex_Sans']">
            Architecture-ready is not the same as
           released coverage.
          </h2>

          <p className="pt-5 text-base font-normal leading-7 text-gray-600 [font-family:'IBM_Plex_Sans']">
            Live coverage is described as released, not inferred from what the
            platform is architecturally capable of.
          </p>
        </motion.div>

        {/* Table */}
        <div className="mt-10 lg:mt-10">
          {/* Desktop column headings */}
          <div className="hidden grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)] gap-4 border-b border-transparent pb-3 md:grid">
            <div />

            <div className="text-xs font-bold uppercase tracking-[0.08em] text-gray-600 [font-family:'IBM_Plex_Sans']">
              MEANING
            </div>

            <div className="text-xs font-bold uppercase tracking-[0.08em] text-gray-600 [font-family:'IBM_Plex_Sans']">
              METHODOLOGY TREATMENT
            </div>
          </div>

          {/* Rows */}
          <div>
            {coverageRows.map((row, index) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-1 gap-5 border-b border-slate-900/10 py-5 md:grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)] md:items-start md:gap-4"
              >
                {/* Label */}
                <div className="flex items-start">
                  <span className="inline-flex min-h-[29px] items-center justify-center rounded-md border border-slate-900/20 bg-white px-4 py-1.5 text-center text-xs font-bold leading-4 text-slate-900 [font-family:'IBM_Plex_Sans']">
                    {row.label}
                  </span>
                </div>

                {/* Meaning */}
                <div className="md:pr-4">
                  <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.08em] text-gray-500 md:hidden [font-family:'IBM_Plex_Sans']">
                    MEANING
                  </div>

                  <p className="text-base font-normal leading-7 text-slate-700 [font-family:'IBM_Plex_Sans']">
                    {row.meaning}
                  </p>
                </div>

                {/* Treatment */}
                <div>
                  <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.08em] text-gray-500 md:hidden [font-family:'IBM_Plex_Sans']">
                    METHODOLOGY TREATMENT
                  </div>

                  <p className="text-sm font-normal leading-6 text-gray-600 [font-family:'IBM_Plex_Sans']">
                    {row.treatment}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}