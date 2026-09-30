"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RevisionTimeline() {
  return (
    <section className="relative overflow-hidden bg-violet-50">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
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
          className="flex flex-col items-start"
        >
          {/* Eyebrow */}
          <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
            REVISION &amp; CORRECTION TIMELINE
          </div>

          {/* Heading */}
          <h2 className="max-w-[1000px] pt-3 font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[42px] lg:text-5xl lg:leading-[48.72px]">
            Official data can change after release.
            <br className="hidden sm:block" />
            Keep the history visible.
          </h2>

          {/* Description */}
          <p className="max-w-[780px] pt-5 font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
            A release is not always a single immutable point. Where the
            authoritative source revises or corrects a value, the event
            preserves a traceable timeline rather than overwriting history.
          </p>
        </motion.div>

        {/* =====================================================
            TIMELINE IMAGE
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.75,
            delay: 0.08,
            ease: "easeOut",
          }}
          className="relative mt-12 h-[280px] overflow-hidden rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-slate-900/10 sm:h-[340px] lg:h-[384px]"
        >
          <Image
            src="/images/research/economic-calendar/image2.png"
            alt="Economic data revision and correction timeline"
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
          />
        </motion.div>
      </div>
    </section>
  );
}