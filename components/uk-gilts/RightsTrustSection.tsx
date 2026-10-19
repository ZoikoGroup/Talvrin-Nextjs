import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionHeading } from "../alerts/shared";

const boundaries = [
  {
    title: "Research, not execution",
    body: "This page and its evidence explorer support research and market intelligence. They do not support trade execution, order routing, or personalized investment advice.",
    cta: "About Talvrin",
    href: "/about-talvrin",
  },
  {
    title: "AI is assistive, not authoritative",
    body: "AI may help discover, summarize or compare evidence. Generated interpretation is always labeled separately from the underlying source record.",
    cta: "AI Principles",
    href: "/trust/ai-principles",
  },
  {
    title: "Access follows source licensing",
    body: "Display and excerpt rights depend on each source’s license. A visible record does not imply unrestricted redistribution rights.",
    cta: "Data Rights",
    href: "/trust/data-rights",
  },
  {
    title: "Global ambition ≠ universal coverage",
    body: "Talvrin’s architecture is built for global markets, but a market only appears here once the Coverage Registry confirms it is released.",
    cta: "Market Coverage",
    href: "/markets/market-coverage",
  },
];

export default function RightsTrustSection() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
            Rights, Trust &amp; AI Limitations
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading inverted>What this page is, and is not.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-4">
          {boundaries.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.05 * (index + 2)}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-white/60">{item.body}</p>
              <Link
                href={item.href}
                className="mt-4 text-sm font-semibold text-indigo-300 transition-colors hover:text-white"
              >
                {item.cta} →
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
