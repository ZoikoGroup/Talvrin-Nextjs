"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RegulatorsCTA() {
  return (
    <section className="w-full border-t border-[rgba(23,19,53,0.08)] bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[760px] flex-col items-center text-center"
        >
          {/* Heading */}
          <h2 className="font-sans text-[32px] font-bold leading-[1.15] text-[#171335] sm:text-[38px] md:text-[42px] md:leading-[48.3px]">
            Start with the regulator, not
            <br />
            the headline.
          </h2>

          {/* Description */}
          <p className="mt-4 font-sans text-[16px] font-normal leading-[1.6] text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            Browse the regulator registry, request access to the full research
            workflow, or review Talvrin&apos;s verified market coverage.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#directory"
              className="inline-flex items-center justify-center rounded-lg bg-[#171335] px-7 py-4 font-sans text-[16px] font-semibold text-[#F6F5FB] shadow-xs transition-all hover:bg-[#251f52] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            >
              Browse the Regulator Directory
            </Link>
            <Link
              href="/request-access"
              className="inline-flex items-center justify-center rounded-lg border border-[rgba(23,19,53,0.2)] bg-transparent px-7 py-4 font-sans text-[16px] font-semibold text-[#171335] transition-all hover:bg-[rgba(23,19,53,0.05)] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            >
              Request Access
            </Link>
            <Link
              href="/markets/market-coverage"
              className="inline-flex items-center justify-center rounded-lg border border-[rgba(23,19,53,0.2)] bg-transparent px-7 py-4 font-sans text-[16px] font-semibold text-[#171335] transition-all hover:bg-[rgba(23,19,53,0.05)] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            >
              View Market Coverage
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 font-sans text-[13px] font-normal text-[#5D5A72] sm:text-[14px]">
            No advice or predictions. Regulatory publications are evidence;
            TALVRIN interpretation is not the issuing authority.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
