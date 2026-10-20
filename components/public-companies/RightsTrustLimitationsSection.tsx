import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

const trustCards = [
  {
    title: "Research, not investment advice",
    lines: [
      "This page and its issuer directory support",
      "research and market intelligence. They",
      "do not provide investment, legal, tax or",
      "other professional advice, or a",
      "recommendation to buy, sell or hold any",
      "security.",
    ],
    cta: "About Talvrin →",
    href: "/about-talvrin",
  },
  {
    title: "AI is assistive, not authoritative",
    lines: [
      "AI may help discover, summarize or",
      "compare disclosures. Generated",
      "interpretation is always labeled",
      "separately from the issuer’s own filing.",
    ],
    cta: "AI Principles →",
    href: "/trust/ai-principles",
  },
  {
    title: "Access follows source licensing",
    lines: [
      "Display, download and export rights",
      "depend on each source’s license and the",
      "issuer or regulator’s terms. A visible",
      "record does not imply unrestricted",
      "redistribution rights.",
    ],
    cta: "Data Rights →",
    href: "/trust/data-rights",
  },
];

export default function RightsTrustLimitationsSection() {
  return (
    <section className="bg-[#171335] py-20 lg:py-[96.35px]">
      <div className="mx-auto w-full max-w-[1281px] px-4 sm:px-6 xl:px-0">
        <Reveal>
          <SectionEyebrow tone="violet">RIGHTS, TRUST & LIMITATIONS</SectionEyebrow>
          <h2 className="mt-[11.35px] max-w-[780px] text-3xl font-bold tracking-tight text-[#F6F5FB] sm:text-4xl lg:text-[42px] lg:leading-[48.72px]">
            What this page is, and is not.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card, idx) => (
            <Reveal
              key={card.title}
              delay={idx * 0.1}
              className="flex h-[244px] flex-col justify-between rounded-[14px] border border-[#F6F5FB]/[0.12] bg-[#F6F5FB]/[0.05] p-[21.8px] transition-all duration-300 hover:border-[#F6F5FB]/25 hover:bg-[#F6F5FB]/[0.08]"
            >
              <div>
                <h3 className="text-base font-bold text-[#F6F5FB]">{card.title}</h3>
                <p className="mt-2.5 text-sm leading-[21.7px] text-[#F6F5FB]/[0.72]">
                  {card.lines.map((line, lineIdx) => (
                    <span key={lineIdx} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <Link
                  href={card.href}
                  className="text-[13px] font-semibold text-[#B4A8FF] transition-colors hover:text-white"
                >
                  {card.cta}
                </Link>
              </div>
            </Reveal>
          ))}

          {/* Card 4: Showcase Image Card */}
          <Reveal
            delay={0.3}
            className="relative h-[244px] w-full overflow-hidden rounded-[14px] border border-[#F6F5FB]/[0.12] bg-[#F6F5FB]/[0.05]"
          >
            <Image
              src="/images/markets/public-companies/image_666.png"
              alt="Rights, trust and licensing limitation standards in financial disclosures"
              fill
              sizes="(min-width: 1024px) 314px, 100vw"
              className="object-cover"
              priority
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
