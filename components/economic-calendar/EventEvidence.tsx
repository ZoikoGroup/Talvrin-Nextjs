"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const evidenceItems = [
  {
    title: "Event identity",
    description:
      "Official/governed event name, jurisdiction and category.",
  },
  {
    title: "Timing",
    description:
      "Scheduled time, actual publication time, time zone, reference period and last-updated time, kept distinct.",
  },
  {
    title: "Values",
    description:
      "Actual / previous / revised prior / consensus shown only where licensed and semantically valid.",
  },
  {
    title: "Revision state",
    description:
      "Original release, revision, supersession, correction, delay or cancellation when the source exposes it.",
  },
  {
    title: "Source provenance",
    description:
      "Source organization, source class, original title and a governed viewer route.",
  },
  {
    title: "Rights / access",
    description:
      "Restricted or licensed source states never expose impermissible content.",
  },
];

export default function EventEvidence() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(99,102,241,0.10),transparent_48%)]"
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        {/* =====================================================
            SECTION HEADER
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
            EVENT DETAIL &amp; EVIDENCE SURFACE
          </div>

          {/* Heading */}
          <h2 className="max-w-[1000px] pt-3 font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-violet-50 sm:text-[42px] lg:text-5xl lg:leading-[48.72px]">
            Inspect provenance, values, period and
            <br className="hidden sm:block" />
            rights-aware source.
          </h2>

          {/* Description */}
          <p className="max-w-[780px] pt-5 font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-violet-50/70">
            Every event detail follows the same field contract below.
            Bracketed values populate only from approved source and rights
            registries.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(320px,441px)_minmax(0,752px)] lg:gap-11">
          {/* ===================================================
              IMAGE
          =================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="relative aspect-square w-full overflow-hidden rounded-2xl bg-violet-50/5 outline outline-1 outline-offset-[-1px] outline-violet-50/10"
          >
            <Image
              src="/images/research/economic-calendar/image1.png"
              alt="Economic research and evidence review"
              fill
              priority={false}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 441px"
            />
          </motion.div>

          {/* ===================================================
              EVIDENCE DETAILS
          =================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            {evidenceItems.map((item, index) => (
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
                className={`
                  flex min-h-[132px] flex-col items-start gap-1
                  border-violet-50/10
                  py-5
                  md:px-5
                  ${
                    index < 4
                      ? "border-b-[0.8px]"
                      : index === 4
                        ? "border-b-[0.8px] md:border-b-[0.8px]"
                        : "border-b-[0.8px] md:border-b-0"
                  }
                  ${
                    index % 2 === 0
                      ? "md:border-r-[0.8px]"
                      : ""
                  }
                `}
              >
                {/* Title */}
                <h3 className="font-['IBM_Plex_Sans'] text-base font-bold text-violet-50">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="max-w-[340px] font-['IBM_Plex_Sans'] text-xs font-normal leading-5 text-violet-50/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}