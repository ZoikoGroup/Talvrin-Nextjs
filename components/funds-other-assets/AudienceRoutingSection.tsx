import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const audiences = [
  {
    title: "Self-Directed Investors",
    body: "Understand a fund or other public-market vehicle from its governing evidence, not a screener ranking.",
    href: "/solutions/individual-investors",
  },
  {
    title: "Research Teams / Institutions",
    body: "Apply consistent coverage and capability truth across every released asset category.",
    href: "/solutions/financial-institutions",
  },
];

export default function AudienceRoutingSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Audience Routing</SectionEyebrow>
          <SectionHeading>Built for people who need the evidence, not a screener.</SectionHeading>
        </Reveal>

        {/* The photo sits between the two cards on wide screens, as designed. */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)_minmax(0,300px)]">
          <Reveal className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="text-lg font-bold text-ink">{audiences[0].title}</h3>
            <p className="mt-2.5 text-sm leading-5 text-slate-600">{audiences[0].body}</p>
            <Link
              href={audiences[0].href}
              className="mt-auto pt-4 text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
            >
              Learn more →
            </Link>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl sm:order-last sm:col-span-2 sm:aspect-[16/6] lg:order-none lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:aspect-auto"
          >
            <Image
              src="/images/markets/funds-other-assets/funds-audience-handshake.webp"
              alt="Two people shaking hands in a bright office while a colleague looks on"
              fill
              sizes="(min-width: 1280px) 630px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6 lg:col-start-3 lg:row-start-1"
          >
            <h3 className="text-lg font-bold text-ink">{audiences[1].title}</h3>
            <p className="mt-2.5 text-sm leading-5 text-slate-600">{audiences[1].body}</p>
            <Link
              href={audiences[1].href}
              className="mt-auto pt-4 text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
            >
              Learn more →
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
