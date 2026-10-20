"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DocumentDetailProvenance() {
  return (
    <section className="w-full bg-[#171335] py-16 md:py-24 text-[#F6F5FB]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-[#6C5CE7]">
            DOCUMENT DETAIL & PROVENANCE
          </span>
          <h2 className="max-w-[780px] font-sans text-[30px] font-bold leading-[1.16] text-[#F6F5FB] sm:text-[36px] md:text-[42px] md:leading-[48.72px]">
            The source should never disappear
            <br />
            behind the answer.
          </h2>
          <p className="max-w-[800px] pt-1 font-sans text-[16px] font-normal leading-[1.6] text-[rgba(246,245,251,0.7)] sm:text-[17px] sm:leading-[27.2px]">
            Illustrative provenance schema for a single regulatory document —
            original link, citation, version, timing, language and access/rights
            restrictions.
          </p>

          {/* Badge */}
          <div className="mt-2">
            <span className="inline-flex items-center rounded-full bg-[rgba(246,245,251,0.08)] px-3 py-1 font-sans text-[11px] font-bold tracking-[0.05em] uppercase text-[rgba(246,245,251,0.65)]">
              ILLUSTRATIVE — NOT A LIVE RECORD
            </span>
          </div>
        </div>

        {/* Provenance Schema Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 relative w-full overflow-hidden rounded-2xl border border-[rgba(246,245,251,0.12)] bg-[#F6F5FB] shadow-xl"
        >
          <div className="relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] w-full">
            <Image
              src="/images/markets/regulators/document-detail-provenance.png"
              alt="Illustrative Document Detail and Provenance Schema"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1440px) 100vw, 1280px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
