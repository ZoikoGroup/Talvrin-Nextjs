import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const audiences = [
  {
    title: "Macro / Rates Professionals",
    body: "Connect official releases, central-bank communication, and policy into a defensible, source-linked view.",
    href: "/solutions/financial-institutions",
  },
  {
    title: "Equity / Multi-Asset Researchers",
    body: "Connect macro evidence to broader market questions without pretending causality.",
    href: "/solutions/individual-investors",
  },
  {
    title: "Research Teams / Institutions",
    body: "Keep macro research reviewable across jurisdictions, revisions, and monitored deltas.",
    href: "/solutions/enterprise",
  },
];

export default function AudienceRoutingSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Audience Routing</SectionEyebrow>
          <SectionHeading>Built for people who need to know why.</SectionHeading>
        </Reveal>

        {/* The photo leads the row, ahead of the three cards, as designed. */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal className="relative aspect-[302/221] w-full overflow-hidden rounded-2xl lg:aspect-auto">
            <Image
              src="/images/markets/macro-economics/macro-audience-presenter.webp"
              alt="Presenter speaking with open hands in a meeting room"
              fill
              sizes="(min-width: 1024px) 302px, (min-width: 640px) 294px, 100vw"
              className="object-cover"
            />
          </Reveal>

          {audiences.map((audience, index) => (
            <Reveal
              key={audience.title}
              delay={(index + 1) * 0.05}
              className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6"
            >
              <h3 className="text-lg font-bold leading-6 text-ink">{audience.title}</h3>
              <p className="mt-2.5 text-sm leading-5 text-slate-600">{audience.body}</p>
              <Link
                href={audience.href}
                className="mt-auto pt-4 text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
              >
                Learn more →
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
