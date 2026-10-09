"use client";

import { motion } from "framer-motion";

const links = [
  {
    title: "Research",
    description:
      "Return to the Research hub for source-linked public-market intelligence.",
    href: "/research/research-library",
  },
  {
    title: "Evidence Standards",
    description:
      "How evidence is sourced, classified and presented, in full.",
    href: "/trust/evidence-standards",
  },
  {
    title: "AI Principles",
    description:
      "AI boundaries, provenance and human-verification expectations.",
    href: "/trust/ai-principles",
  },
  {
    title: "Market Coverage",
    description:
      "Canonical released-coverage matrix and market status.",
    href: "/markets/market-coverage",
  },
  {
    title: "Policy & Regulation",
    description:
      "See the methodology applied to policy and regulatory evidence.",
    href: "/research/policy-regulatory-intelligence",
  },
];

export default function RelatedResearchTrust() {
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
            RELATED RESEARCH &amp; TRUST
          </div>

          <h2 className="pt-3 text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[44px] lg:text-5xl lg:leading-[48.72px] [font-family:'IBM_Plex_Sans']">
            Continue into evidence, trust
            <br className="hidden sm:block" /> and coverage.
          </h2>

          <p className="pt-2 text-base font-normal leading-7 text-gray-600 [font-family:'IBM_Plex_Sans']">
            Only through approved routes — never a generic &quot;recommended
            for you&quot; ranking.
          </p>
        </motion.div>

        {/* Related links */}
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {links.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="group flex min-h-[150px] flex-col rounded-2xl border border-slate-900/10 bg-white p-5 transition-shadow duration-300 hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-base font-bold leading-6 text-slate-900 [font-family:'IBM_Plex_Sans']">
                  {link.title}
                </h3>

                <span
                  aria-hidden="true"
                  className="ml-2 shrink-0 text-base font-bold text-slate-900 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>

              <p className="mt-2 text-sm font-normal leading-5 text-gray-600 [font-family:'IBM_Plex_Sans']">
                {link.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}