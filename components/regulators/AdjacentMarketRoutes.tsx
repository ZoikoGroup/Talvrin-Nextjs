"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const routes = [
  {
    title: "Central Banks",
    description:
      "Monetary-policy evidence from central banks, adjacent to regulatory source material.",
    linkText: "View Central Banks →",
    href: "/markets/central-banks",
  },
  {
    title: "Policy and Regulation",
    description:
      "Broader policy and regulatory research context across jurisdictions.",
    linkText: "View Policy and Regulation →",
    href: "/research/policy-regulatory-intelligence",
  },
  {
    title: "Equities",
    description:
      "Public-company market coverage connected to issuer disclosure rules.",
    linkText: "View Equities →",
    href: "/markets/equities",
  },
  {
    title: "Macro & Economics",
    description:
      "Economic releases and policy context adjacent to regulatory evidence.",
    linkText: "View Macro & Economics →",
    href: "/markets/macro-economics",
  },
  {
    title: "Global Markets",
    description:
      "Cross-market research connected to regulatory evidence.",
    linkText: "View Global Markets →",
    href: "/markets/global-markets",
  },
  {
    title: "Fixed Income",
    description:
      "Sovereign and other debt-market research adjacent to regulatory evidence.",
    linkText: "View Fixed Income →",
    href: "/markets/fixed-income",
  },
];

export default function AdjacentMarketRoutes() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-[#B98132]">
            ADJACENT MARKET ROUTES
          </span>
          <h2 className="max-w-[780px] font-sans text-[30px] font-bold leading-[1.16] text-[#171335] sm:text-[36px] md:text-[42px] md:leading-[48.72px]">
            Regulatory evidence connects to
            <br />
            adjacent market and policy research.
          </h2>
          <p className="max-w-[800px] pt-1 font-sans text-[16px] font-normal leading-[1.6] text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            Cross-links imply no endorsement, derived availability or factual
            dependence — each destination carries its own verified coverage
            record.
          </p>
        </div>

        {/* Content Layout: 6 route cards + Visual showcase */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_minmax(0,480px)] xl:grid-cols-[1fr_minmax(0,500px)]">
          {/* 6 Link Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route, idx) => (
              <motion.div
                key={route.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <Link
                  href={route.href}
                  className="group flex h-full flex-col justify-between rounded-xl border border-[rgba(23,19,53,0.08)] bg-[#F6F5FB] p-5 shadow-xs transition-all hover:border-[rgba(108,92,231,0.3)] hover:shadow-md"
                >
                  <div>
                    <h3 className="font-sans text-[16px] font-bold text-[#171335]">
                      {route.title}
                    </h3>
                    <p className="mt-2 font-sans text-[13px] font-normal leading-[1.6] text-[#5D5A72]">
                      {route.description}
                    </p>
                  </div>
                  <span className="mt-4 font-sans text-[13px] font-semibold text-[#6C5CE7] transition-transform group-hover:translate-x-1">
                    {route.linkText}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[500/364] w-full overflow-hidden rounded-2xl border border-[rgba(23,19,53,0.08)] bg-[#F6F5FB] p-2 shadow-sm"
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/images/markets/regulators/adjacent-central-banks.png"
                alt="Adjacent market and policy research routes"
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
