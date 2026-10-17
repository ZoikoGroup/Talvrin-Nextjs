import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const sources = [
  {
    name: "Deutsche Bundesbank",
    body: "National central bank within the Eurosystem; source of policy communication and balance-sheet context relevant to German sovereign-market research.",
    cta: "View Central Banks",
    href: "/markets/central-banks",
  },
  {
    name: "European Central Bank",
    body: "Eurosystem monetary-policy authority; Governing Council decisions provide euro-area policy context, kept distinct from German issuance evidence.",
    cta: "View Central Banks",
    href: "/markets/central-banks",
  },
  {
    name: "Deutsche Finanzagentur",
    body: "Issuer and financing agency for German federal securities; source of Bund issuance and auction evidence.",
    cta: "View Fixed Income",
    href: "/markets/fixed-income",
  },
  {
    name: "Destatis",
    body: "Federal Statistical Office of Germany; publisher of inflation, labor, growth and public-finance releases that may provide macro context for Bund research.",
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
            Categories of primary source potentially relevant to German Bunds
            research.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[800px] text-base leading-7 text-gray-600">
            Source badges below are derived only from the registry — a card never
            implies integration beyond what the inventory confirms.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-4 xl:grid-cols-5">
          {sources.map((source, index) => (
            <Reveal
              key={source.name}
              delay={0.05 * (index + 2)}
              className="flex flex-col rounded-2xl border border-ink/10 bg-surface p-6"
            >
              <h3 className="text-base font-bold text-ink">{source.name}</h3>
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
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:hidden xl:block xl:aspect-auto xl:min-h-[329px]"
          >
            <Image
              src="/images/markets/german-bunds/german-bunds-source-universe-laptop.webp"
              alt="Three colleagues reviewing work together on a laptop"
              fill
              sizes="(min-width: 1280px) 236px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
