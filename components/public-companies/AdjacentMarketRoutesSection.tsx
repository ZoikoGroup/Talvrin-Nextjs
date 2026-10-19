import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

const routes = [
  {
    title: "Equities",
    description:
      "Supported public-company\nmarket coverage adjacent to\nissuer evidence.",
    cta: "View Equities →",
    href: "/markets/equities",
  },
  {
    title: "Regulators",
    description:
      "Regulatory source material\nconnected to the same\nevidence architecture.",
    cta: "View Regulators →",
    href: "/markets/regulators",
  },
  {
    title: "Global Markets",
    description:
      "Cross-market research\nconnected to company\nevidence.",
    cta: "View Global Markets →",
    href: "/markets/global-markets",
  },
  {
    title: "Market Coverage",
    description:
      "Canonical released-coverage\nmatrix and market status.",
    cta: "View Market Coverage →",
    href: "/markets/market-coverage",
  },
  {
    title: "Research Workspace",
    description:
      "Question-led research with\nsource-linked context.",
    cta: "Open Research Workspace →",
    href: "/product/research-workspace",
  },
  {
    title: "Economic Statistics",
    description:
      "Official statistical releases and\nsupporting context.",
    cta: "View Economic Statistics →",
    href: "/markets/economic-statistics",
  },
];

export default function AdjacentMarketRoutesSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1281px] px-4 sm:px-6 xl:px-0">
        <Reveal>
          <SectionEyebrow tone="amber">ADJACENT MARKET ROUTES</SectionEyebrow>
          <h2 className="mt-[11.35px] max-w-[780px] text-3xl font-bold tracking-tight text-[#171335] sm:text-4xl lg:text-[42px] lg:leading-[48.72px]">
            Issuer evidence connects to adjacent
            <br className="hidden sm:inline" />
            market and research destinations.
          </h2>
          <p className="mt-5 w-full max-w-[800px] text-base leading-relaxed text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            Cross-links imply no endorsement, derived availability or factual dependence — each destination carries
            <br className="hidden sm:inline" />
            its own verified coverage record.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: 6 Cards in 3x2 Grid */}
          <Reveal delay={0.1} className="w-full shrink-0 lg:w-[760.6px]">
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {routes.map((route) => (
                <Link
                  key={route.title}
                  href={route.href}
                  className="group flex h-[171.8px] flex-col justify-between rounded-[14px] border border-[#171335]/[0.08] bg-[#F6F5FB] p-[21.8px] transition-all duration-300 hover:border-[#6C5CE7]/40 hover:shadow-md"
                >
                  <div>
                    <h3 className="text-base font-bold text-[#171335] transition-colors group-hover:text-[#6C5CE7]">
                      {route.title}
                    </h3>
                    <p className="mt-2 whitespace-pre-line text-sm leading-[21px] text-[#5D5A72]">
                      {route.description}
                    </p>
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-[#6C5CE7] group-hover:underline">
                      {route.cta}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Right: Showcase Card */}
          <Reveal
            delay={0.2}
            className="relative h-[363.6px] w-full shrink-0 overflow-hidden rounded-[14px] border border-[#171335]/[0.08] bg-[#F6F5FB] lg:w-[500.4px]"
          >
            <Image
              src="/images/markets/public-companies/image_665.png"
              alt="Adjacent market and cross-jurisdiction research route connections"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
              priority
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
