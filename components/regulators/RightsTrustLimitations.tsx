"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const trustCards = [
  {
    title: "Research, not compliance advice",
    description:
      "This page and its regulator finder support research and market intelligence. They do not provide legal, regulatory, investment or compliance advice, and do not constitute a compliance determination.",
    linkText: "About Talvrin →",
    href: "/about-talvrin",
  },
  {
    title: "AI is assistive, not authoritative",
    description:
      "AI may help discover, summarize or compare regulatory evidence. Generated interpretation is always labeled separately from the underlying source record.",
    linkText: "AI Principles →",
    href: "/trust/ai-principles",
  },
  {
    title: "Access follows source licensing",
    description:
      "Display, download and export rights depend on each source’s license. A visible record does not imply unrestricted redistribution rights.",
    linkText: "Data Rights →",
    href: "/trust/data-rights",
  },
];

export default function RightsTrustLimitations() {
  return (
    <section className="w-full bg-[#171335] py-16 md:py-24 text-[#F6F5FB]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-[#6C5CE7]">
            RIGHTS, TRUST & LIMITATIONS
          </span>
          <h2 className="max-w-[780px] font-sans text-[30px] font-bold leading-[1.16] text-[#F6F5FB] sm:text-[36px] md:text-[42px] md:leading-[48.72px]">
            What this page is, and is not.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col justify-between rounded-xl border border-[rgba(246,245,251,0.12)] bg-[rgba(246,245,251,0.05)] p-6 shadow-sm"
            >
              <div>
                <h3 className="font-sans text-[16px] font-bold text-[#F6F5FB]">
                  {card.title}
                </h3>
                <p className="mt-3 font-sans text-[13px] font-normal leading-[1.6] text-[rgba(246,245,251,0.72)]">
                  {card.description}
                </p>
              </div>
              <Link
                href={card.href}
                className="mt-6 font-sans text-[13px] font-semibold text-[#B4A8FF] transition-colors hover:text-white"
              >
                {card.linkText}
              </Link>
            </motion.div>
          ))}

          {/* 4th Card: Visual Element from Figma */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative min-h-[220px] overflow-hidden rounded-xl border border-[rgba(246,245,251,0.12)] bg-[rgba(246,245,251,0.05)]"
          >
            <Image
              src="/images/markets/regulators/adjacent-policy-regulation.png"
              alt="Policy and regulatory evidence trust standards"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
