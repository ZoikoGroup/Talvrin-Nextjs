import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const sources = [
  {
    name: "Federal Reserve",
    badge: "CENTRAL BANK",
    body: "Monetary-policy institution; source of policy communication relevant to rates and sovereign-market research.",
    cta: "View Central Banks",
    href: "/markets/central-banks",
  },
  {
    name: "U.S. Treasury Department",
    badge: "SOVEREIGN ISSUER",
    body: "Issuer and financing authority for U.S. government debt; source of financing and issuance evidence.",
    cta: "View Fixed Income",
    href: "/markets/fixed-income",
  },
  {
    name: "Official Statistical Agencies",
    badge: "OFFICIAL STATISTICS",
    body: "Publishers of inflation, labor and growth releases that may provide macro context for Treasury research.",
    cta: "View Economic Calendar",
    href: "/research/economic-calendar",
  },
];

export default function SourceUniverseSection() {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Source Universe Overview</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[780px]">
            Categories of primary source potentially relevant to U.S. Treasury
            research.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[800px] text-base leading-7 text-gray-600">
            Source badges below are derived only from the registry — a card never
            implies integration beyond what the inventory confirms.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-4">
          {sources.map((source, index) => (
            <Reveal
              key={source.name}
              delay={0.05 * (index + 2)}
              className="flex flex-col rounded-2xl border border-ink/10 bg-surface p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-bold text-ink">{source.name}</h3>
                <span className="mt-0.5 shrink-0 rounded-full bg-accent-violet/10 px-2 py-0.5 text-[10px] font-bold tracking-wide text-accent-violet">
                  {source.badge}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-5 text-gray-600">{source.body}</p>
              <div className="mt-5 border-t border-ink/10 pt-3">
                <Link
                  href={source.href}
                  className="text-xs font-semibold text-accent-violet transition-colors hover:text-brand"
                >
                  {source.cta} →
                </Link>
              </div>
            </Reveal>
          ))}
          <Reveal
            delay={0.3}
            className="relative aspect-[314/241] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface lg:aspect-auto lg:min-h-[241px]"
          >
            <Image
              src="/images/markets/us-treasuries/us-treasuries-source-universe-handshake.webp"
              alt="Colleagues shaking hands and applauding in a high-rise office"
              fill
              sizes="(min-width: 1024px) 314px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
