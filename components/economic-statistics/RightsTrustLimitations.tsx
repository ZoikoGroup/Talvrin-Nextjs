import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const cards = [
  {
    title: "Research, not investment advice",
    body: "This page and its source directory support research and market intelligence. They do not provide investment, legal, tax or other professional advice, or a recommendation to buy or sell any financial instrument.",
    cta: "About Talvrin",
    href: "/about-talvrin",
  },
  {
    title: "AI is assistive, not authoritative",
    body: "AI may help discover, summarize or compare statistical evidence. Generated interpretation is always labeled separately from the underlying official source.",
    cta: "AI Principles",
    href: "/ai-principles",
  },
  {
    title: "Access follows source licensing",
    body: "Display, download and export rights depend on each source's license. A visible record does not imply unrestricted redistribution rights.",
    cta: "Data Rights",
    href: "/data-rights",
  },
  {
    title: "Global ambition ≠ universal coverage",
    body: "Talvrin's architecture is built for global statistical sources, but a publisher only appears as released here once the Coverage Registry confirms it.",
    cta: "Market Coverage",
    href: "/markets/market-coverage",
  },
];

export default function RightsTrustLimitations() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Rights, Trust &amp; Limitations</SectionEyebrow>
          <SectionHeading inverted>What this page is, and is not.</SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05}>
              <div className="flex h-full flex-col gap-[10px] rounded-[14px] border border-white/12 bg-white/5 p-6">
                <h3 className="text-[16px] font-bold text-white">{card.title}</h3>
                <p className="text-sm leading-[21.7px] text-white/72">{card.body}</p>
                <Link href={card.href} className="mt-auto pt-2 text-[13px] font-semibold text-[#b4a8ff]">
                  {card.cta} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
