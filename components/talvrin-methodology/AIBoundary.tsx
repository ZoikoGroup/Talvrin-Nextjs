"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const boundaries = [
  {
    allowed: "Search and evidence discovery",
    notAllowed: "An authoritative source",
  },
  {
    allowed: "Document/source summarization",
    notAllowed: "A guaranteed fact",
  },
  {
    allowed: "Comparison across evidence",
    notAllowed: "Investment advice or a buy/sell/hold recommendation",
  },
  {
    allowed: "Research organization",
    notAllowed: "A guarantee of completeness or accuracy",
  },
  {
    allowed: "Relationship/contradiction surfacing",
    notAllowed: "An invisible layer whose provenance the user cannot inspect",
  },
  {
    allowed: "Explanation in accessible language",
    notAllowed: "A mechanism for erasing uncertainty, jurisdiction, version, or rights context",
  },
];

function BoundaryCard({
  allowed,
  notAllowed,
  index,
}: {
  allowed: string;
  notAllowed: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex min-h-[168px] flex-col gap-3.5 rounded-2xl border border-slate-900/10 bg-violet-50 px-6 py-6"
    >
      {/* Allowed */}
      <div className="flex items-start gap-2.5">
        <span
          aria-hidden="true"
          className="pt-[2px] text-sm font-normal leading-5 text-indigo-500"
        >
          ✓
        </span>

        <p className="text-[16px] font-semibold leading-6 text-slate-900 [font-family:'IBM_Plex_Sans']">
          {allowed}
        </p>
      </div>

      {/* Not allowed */}
      <div className="flex items-start gap-2.5">
        <span
          aria-hidden="true"
          className="pt-[2px] text-sm font-normal leading-5 text-pink-800"
        >
          ✕
        </span>

        <p className="text-sm font-normal leading-5 text-gray-600 [font-family:'IBM_Plex_Sans']">
          {notAllowed}
        </p>
      </div>
    </motion.div>
  );
}

export default function AIBoundary() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-[96px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[760px]"
        >
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-yellow-600 [font-family:'IBM_Plex_Sans']">
            AI BOUNDARY
          </div>

          <h2 className="text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[44px] sm:leading-[1.08] lg:text-5xl lg:leading-[48.72px] [font-family:'IBM_Plex_Sans']">
            AI may help organize and explain
            <br className="hidden sm:block" />
            {" "}the evidence. It does not become
            <br className="hidden sm:block" />
            {" "}the evidence.
          </h2>
        </motion.div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 gap-3 md:mt-12 md:grid-cols-2 lg:mt-[58px] lg:grid-cols-4 lg:gap-[13px]">
          {/* First 3 cards */}
          {boundaries.slice(0, 3).map((item, index) => (
            <BoundaryCard
              key={item.allowed}
              allowed={item.allowed}
              notAllowed={item.notAllowed}
              index={index}
            />
          ))}

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.65,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[304px] overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50 md:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-[304px]"
          >
            <Image
              src="/images/research/talvrin-methodology/image3.png"
              alt="Professionals discussing research and evidence"
              fill
              className="object-cover object-center"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 320px"
            />
          </motion.div>

          {/* Remaining 3 cards */}
          {boundaries.slice(3).map((item, index) => (
            <BoundaryCard
              key={item.allowed}
              allowed={item.allowed}
              notAllowed={item.notAllowed}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}