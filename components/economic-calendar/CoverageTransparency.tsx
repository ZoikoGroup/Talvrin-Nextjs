"use client";

import { motion } from "framer-motion";

const coverageItems = [
  {
    title: "Coverage status",
    description:
      "Distinguishes Deep Coverage, Supported, Limited/Beta and Planned only where approved — architecture-ready is never shown as live.",
  },
  {
    title: "Included jurisdictions",
    description:
      "Driven from the governed coverage registry, not hard-coded marketing copy.",
  },
  {
    title: "Event taxonomy",
    description:
      "Publishes only approved categories and their definitions.",
  },
  {
    title: "Data sources",
    description:
      "Describes source classes and provider roles without implying ownership of third-party data.",
  },
  {
    title: "Consensus methodology",
    description:
      "Discloses provider and methodology, and the applicable rights, whenever consensus is present.",
  },
  {
    title: "Refresh / latency",
    description:
      "Publishes only approved operational commitments — never an unsupported real-time SLA.",
  },
  {
    title: "Revision handling",
    description:
      "Explains how updated official values are reflected and how prior timestamps are preserved.",
  },
];

export default function CoverageTransparency() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-24 xl:px-16">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
        >
          {/* Eyebrow */}
          <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500">
            COVERAGE &amp; METHODOLOGY TRANSPARENCY
          </div>

          {/* Heading */}
          <h2 className="max-w-[760px] pt-3 font-['IBM_Plex_Sans'] text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900 sm:text-[36px] md:text-[42px] lg:text-5xl lg:leading-[48.72px]">
            Global by architecture. Coverage
            <br className="hidden sm:block" />
            shown as released.
          </h2>

          {/* Description */}
          <p className="max-w-[780px] pt-4 pb-8 font-['IBM_Plex_Sans'] text-sm sm:text-base font-normal leading-relaxed text-gray-600 lg:pb-10">
            Global architecture is not the same as live jurisdiction coverage.
            Every claim below traces back to a governed registry.
          </p>
        </motion.div>

        {/* =====================================================
            COVERAGE TABLE
        ===================================================== */}
        <div>
          {coverageItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="
                grid
                grid-cols-1
                gap-2
                border-b-[0.8px]
                border-slate-900/10
                py-5
                md:grid-cols-[192px_minmax(0,1fr)]
                md:gap-4
                md:py-4
              "
            >
              {/* Title */}
              <div className="flex flex-col items-start">
                <h3 className="font-['IBM_Plex_Sans'] text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex flex-col items-start">
                <p className="max-w-[900px] font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            NO INVENTION PANEL
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mt-12 rounded-2xl bg-violet-50 p-6 outline outline-1 outline-offset-[-1px] outline-slate-900/10 sm:p-7 lg:mt-16 lg:p-6"
        >
          {/* Label */}
          <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-slate-900">
            NO INVENTION
          </div>

          {/* Description */}
          <p className="mt-2 max-w-[1180px] font-['IBM_Plex_Sans'] text-base font-normal leading-6 text-gray-600">
            No canonical route, supported jurisdiction, release-feed vendor,
            event taxonomy, consensus data right, historical depth,
            entitlement, refresh SLA, forecast methodology or alert capability
            is invented on this page. Governed registries remain authoritative.
          </p>
        </motion.div>
      </div>
    </section>
  );
}