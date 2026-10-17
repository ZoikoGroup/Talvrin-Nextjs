import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const routes = [
  {
    title: "Macro & Economics",
    body: "Economic releases, policy and macro evidence adjacent to statistical sources.",
    href: "/markets",
    cta: "View Macro & Economics",
  },
  {
    title: "Central Banks",
    body: "Monetary-policy evidence from central banks, adjacent to statistical releases.",
    href: "/markets/central-banks",
    cta: "View Central Banks",
  },
  {
    title: "Regulators",
    body: "Regulatory source material connected to the same evidence architecture.",
    href: "/markets/regulators",
    cta: "View Regulators",
  },
  {
    title: "Global Markets",
    body: "Cross-market research connected to economic evidence.",
    href: "/markets",
    cta: "View Global Markets",
  },
  {
    title: "Economic Calendar",
    body: "Scheduled and released macroeconomic events with timing and provenance.",
    href: "/markets",
    cta: "View Economic Calendar",
  },
  {
    title: "Policy and Regulation",
    body: "Broader policy and regulatory research context across jurisdictions.",
    href: "/markets/regulators",
    cta: "View Policy and Regulation",
  },
];

function RouteCard({ title, body, href, cta }: (typeof routes)[number]) {
  return (
    <Link
      href={href}
      className="flex h-full flex-col gap-2 rounded-[14px] border border-ink/8 bg-surface p-[23px] transition-colors hover:border-ink/20"
    >
      <h3 className="text-[16px] font-bold text-ink">{title}</h3>
      <p className="text-sm leading-[21px] text-slate-600">{body}</p>
      <span className="mt-auto pt-2 text-[13px] font-semibold text-accent-violet">{cta} →</span>
    </Link>
  );
}

export default function AdjacentMarketRoutes() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Adjacent Market Routes</SectionEyebrow>
          <SectionHeading>
            Statistical evidence connects to adjacent market and policy research.
          </SectionHeading>
          <p className="mt-5 max-w-[800px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Cross-links imply no endorsement, derived availability or factual dependence — each
            destination carries its own verified coverage record.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,760px)_minmax(0,500px)]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route, index) => (
              <Reveal key={route.title} delay={index * 0.05}>
                <RouteCard {...route} />
              </Reveal>
            ))}
          </div>
          <Reveal className="relative min-h-[260px] overflow-hidden rounded-[14px] border border-ink/8">
            <Image
              src="/images/economic-statistics/economic-statistics-adjacent-routes-desk.webp"
              alt="An analyst writing notes at a desk overlooking a city skyline"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
