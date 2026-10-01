"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const governanceItems = [
  {
    title: "Methodology version",
    description:
      "Human-readable version identifier tied to an approved publication record.",
  },
  {
    title: "Published date",
    description: "Date the current version became public.",
  },
  {
    title: "Last reviewed",
    description:
      "Show only when an actual review occurred; no cosmetic freshness timestamp.",
  },
  {
    title: "Change summary",
    description:
      "Explain material methodological changes in plain language.",
  },
  {
    title: "Owner",
    description:
      "Named internal function/role, not necessarily a public individual, responsible for the methodology.",
  },
  {
    title: "Required reviewers",
    description:
      "Research/editorial, product, legal/compliance, data rights, AI governance, accessibility/SEO as applicable.",
  },
  {
    title: "Prior versions",
    description:
      "Provide access or a summary trail where publication governance permits.",
  },
  {
    title: "Open dependencies",
    description:
      "Flag unresolved methodology/product contracts rather than hiding them.",
  },
];

export default function MethodologyGovernance() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-[96px]">
        {/* Section heading */}
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
          <div className="text-xs font-bold uppercase tracking-[0.08em] text-yellow-600 [font-family:'IBM_Plex_Sans']">
            METHODOLOGY GOVERNANCE
          </div>

          <h2 className="pt-3 text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[44px] lg:text-5xl lg:leading-[48.72px] [font-family:'IBM_Plex_Sans']">
            The methodology itself behaves like
            <br className="hidden sm:block" /> governed evidence.
          </h2>

          <p className="pt-5 text-base font-normal leading-7 text-gray-600 [font-family:'IBM_Plex_Sans']">
            Dated, reviewable, versioned, and explicit about material changes —
            never a cosmetic freshness timestamp.
          </p>
        </motion.div>

        {/* Main governance content */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-[58px] lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-[66px]">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -28, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-900"
          >
            <Image
              src="/images/research/talvrin-methodology/image4.png"
              alt="Professionals discussing methodology governance"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 440px"
              priority={false}
            />
          </motion.div>

          {/* Governance details */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
            {governanceItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-slate-900/10 py-3.5"
              >
                <h3 className="text-base font-bold leading-6 text-slate-900 [font-family:'IBM_Plex_Sans']">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs font-normal leading-5 text-gray-600 [font-family:'IBM_Plex_Sans']">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Review cadence */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 rounded-2xl border border-slate-900/10 bg-violet-50 px-6 py-5"
        >
          <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-slate-900 [font-family:'IBM_Plex_Sans']">
            REVIEW CADENCE
          </h3>

          <p className="mt-2 text-sm font-normal leading-6 text-gray-600 [font-family:'IBM_Plex_Sans']">
            The source documents do not define an exact review cadence.
            Monthly, quarterly, annual or event-driven review is never claimed
            as current fact unless separately approved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}