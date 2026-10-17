"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const families = [
  {
    title: "Rules & Regulations",
    description:
      "Primary binding evidence; highest source prominence when in force.",
  },
  {
    title: "Consultation Papers",
    description:
      "Proposed, not binding — labeled as a proposal with its comment/consultation window.",
  },
  {
    title: "Market Disclosures",
    description:
      "Issuer- or market-facing disclosure requirements, shown with jurisdiction and applicable scope.",
  },
  {
    title: "Notices",
    description:
      "Operational or administrative evidence, distinguished from a rule change.",
  },
  {
    title: "Guidance",
    description:
      "Interpretive material from the regulator, kept separate from binding rule text.",
  },
  {
    title: "Enforcement Publications",
    description:
      "Named actions and decisions, linked to the regulator and dated distinctly from any underlying rule.",
  },
];

export default function RegulatorySourceFamilies() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-[#B98132]">
            REGULATORY SOURCE FAMILIES
          </span>
          <h2 className="max-w-[780px] font-sans text-[30px] font-bold leading-[1.16] text-[#171335] sm:text-[36px] md:text-[42px] md:leading-[48.72px]">
            Official documents before
            <br />
            interpretation.
          </h2>
          <p className="max-w-[800px] pt-1 font-sans text-[16px] font-normal leading-[1.6] text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            Rules, consultations, notices, guidance, enforcement publications
            and market disclosures appear as separate source families — only when
            verified — rather than collapsing into undifferentiated &quot;regulatory
            news.&quot;
          </p>
        </div>

        {/* Content Layout: 6 cards grid + Visual graphic on right */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_minmax(0,480px)] xl:grid-cols-[1fr_minmax(0,500px)]">
          {/* 6 Source Family Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {families.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="flex flex-col justify-between rounded-xl border border-[rgba(23,19,53,0.08)] bg-[#F6F5FB] p-5 shadow-xs transition-shadow hover:shadow-md"
              >
                <div>
                  <h3 className="font-sans text-[16px] font-bold text-[#171335]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 font-sans text-[13px] font-normal leading-[1.6] text-[#5D5A72]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[500/348] w-full overflow-hidden rounded-2xl border border-[rgba(23,19,53,0.08)] bg-[#F6F5FB] p-2 shadow-sm"
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/images/markets/regulators/regulatory-source-families.png"
                alt="Regulatory source families visualization"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
