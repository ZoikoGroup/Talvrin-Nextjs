"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const contractFields = [
  {
    label: "Official name",
    desc: "Approved canonical entity name and aliases from the registry — never an ad hoc rebranding.",
  },
  {
    label: "Institutional role",
    desc: "Securities regulator, conduct authority, markets authority or another approved class — never a guessed taxonomy.",
  },
  {
    label: "Mandate summary",
    desc: "Summarized only from approved authoritative source material, with a source link where permitted.",
  },
  {
    label: "Published source types",
    desc: "A regulator-specific governed list from the Source Family registry — never assumed.",
  },
  {
    label: "Primary source domains",
    desc: "Approved source registry only.",
  },
  {
    label: "Limitations",
    desc: "Missing document types, latency, historical limits or jurisdiction-specific constraints shown explicitly when material.",
  },
];

export default function AuthorityProfileTemplate() {
  return (
    <section className="w-full bg-[#F6F5FB] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-[#6C5CE7]">
            AUTHORITY PROFILE TEMPLATE
          </span>
          <h2 className="max-w-[780px] font-sans text-[30px] font-bold leading-[1.16] text-[#171335] sm:text-[36px] md:text-[42px] md:leading-[48.72px]">
            Stable identity, mandate and source
            <br />
            navigation — never a guessed
            <br />
            taxonomy.
          </h2>
          <p className="max-w-[780px] pt-1 font-sans text-[16px] font-normal leading-[1.6] text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            Every regulator page follows this field contract. Bracketed values
            populate only from approved registries and official sources.
          </p>
        </div>

        {/* Content Grid: Visual Card on left, Field Contracts on right */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-14">
          {/* Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-[#171335] p-3 shadow-xl sm:h-[400px] lg:h-[380px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/images/markets/regulators/authority-profile-card-1.png"
                alt="Authority Profile Template Contract"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>
          </motion.div>

          {/* Field Contracts Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {contractFields.map((field, idx) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="flex flex-col justify-between border-b border-[rgba(23,19,53,0.1)] pb-6"
              >
                <div>
                  <h3 className="font-sans text-[16px] font-semibold text-[#171335] sm:text-[17px]">
                    {field.label}
                  </h3>
                  <p className="mt-2 font-sans text-[14px] font-normal leading-[1.6] text-[#5D5A72]">
                    {field.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
