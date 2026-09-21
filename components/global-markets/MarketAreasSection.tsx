import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const areas = [
  {
    title: "Fixed Income",
    description: "Research rates, sovereigns, credit, and fixed-income evidence where coverage is released.",
    caveat: "No unsupported instrument depth, analytics, or live price claims.",
    href: "/markets/fixed-income",
    cta: "Explore Fixed Income",
  },
  {
    title: "Equities",
    description: "Research companies, securities, filings, and related market evidence where coverage is released.",
    caveat: "No invented screening, valuation, or exchange coverage.",
    href: "/markets/equities",
    cta: "Explore Equities",
  },
  {
    title: "Macro & Economics",
    description: "Research economic releases, central banks, policy, and macro evidence across released markets.",
    caveat: "No unsupported calendar, forecast, or country-completeness claims.",
    href: "/markets/macro-economics",
    cta: "Explore Macro & Economics",
  },
];

export default function MarketAreasSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Market Areas</SectionEyebrow>
          <SectionHeading>Route into the market-specific research you need.</SectionHeading>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-[14px] border border-ink/8 bg-white p-7">
                <h3 className="text-lg font-bold text-ink">{area.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">{area.description}</p>
                <p className="mt-4 border-t border-ink/8 pt-3 text-xs text-accent-amber">{area.caveat}</p>
                <Link
                  href={area.href}
                  className="mt-4 text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
                >
                  {area.cta} →
                </Link>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.24} className="relative min-h-[220px] overflow-hidden rounded-[14px] border border-ink/8 bg-white sm:col-span-2 lg:col-span-1 lg:min-h-0">
            <Image
              src="/images/markets/global-markets/global-markets-market-areas-team.webp"
              alt="Analysts reviewing research together on laptops"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
