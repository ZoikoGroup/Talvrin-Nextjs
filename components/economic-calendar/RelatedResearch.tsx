"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const researchLinks = [
  {
    title: "Central Banks",
    description:
      "Central-bank events route to institution profiles, policy evidence and coverage transparency once approved.",
  },
  {
    title: "Policy & Regulation",
    description:
      "Policy-sensitive releases connect to regulatory research once that route is approved.",
  },
  {
    title: "Market Explainers",
    description:
      "Longer explanatory material on indicators and methodology, linked where approved.",
  },
  {
    title: "Research Library",
    description:
      "Browse published Talvrin research connected to the same event and entity graph.",
  },
];

export default function RelatedResearch() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
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
          <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
            RELATED RESEARCH &amp; CONTINUATION
          </div>

          {/* Heading */}
          <h2 className="max-w-[780px] pt-3 font-['IBM_Plex_Sans'] text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-violet-50 sm:text-[36px] md:text-[42px] lg:text-5xl lg:leading-[48.72px]">
            Turn an event into a research trail.
          </h2>

          {/* Description */}
          <p className="max-w-[780px] pt-4 font-['IBM_Plex_Sans'] text-sm sm:text-base font-normal leading-relaxed text-violet-50/70">
            An economic event can lead to relevant Research destinations,
            entity pages or saved research — only through approved routes,
            never a generic &quot;learn more.&quot;
          </p>
        </motion.div>

        {/* =====================================================
            RESEARCH CARDS + IMAGE
        ===================================================== */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {/* Research cards */}
          {researchLinks.map((item, index) => (
            <motion.a
              key={item.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              className="group flex min-h-[160px] h-full flex-col rounded-2xl bg-violet-50/5 p-5 outline outline-1 outline-offset-[-1px] outline-violet-50/10 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-50/10"
            >
              {/* Card title */}
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-['IBM_Plex_Sans'] text-base font-bold text-violet-50">
                  {item.title}
                </h3>

                <ArrowRight className="size-4 shrink-0 text-violet-50 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              {/* Card description */}
              <p className="mt-2 font-['IBM_Plex_Sans'] text-sm font-normal leading-5 text-violet-50/70">
                {item.description}
              </p>
            </motion.a>
          ))}

          {/* ===================================================
              IMAGE
          =================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="relative min-h-[174px] overflow-hidden rounded-2xl bg-violet-50/5 outline outline-1 outline-offset-[-1px] outline-violet-50/10"
          >
            <Image
              src="/images/research/economic-calendar/image3.png"
              alt="Research collaboration"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}