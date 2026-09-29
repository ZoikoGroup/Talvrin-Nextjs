import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const audiences = [
  {
    title: "Self-Directed Investors",
    body: "Research a public company without relying only on headlines, price moves, or generated summaries.",
    href: "/solutions/individual-investors",
  },
  {
    title: "Institutions / Enterprises",
    body: "Govern company and security research across jurisdictions and rights constraints.",
    href: "/solutions/financial-institutions",
  },
];

export default function AudienceRoutingSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="violet">Audience Routing</SectionEyebrow>
          <SectionHeading>Built for people who need to know why.</SectionHeading>
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
              src="/images/markets/equities/equities-audience-laptop-analyst.webp"
              alt="Analyst smiling while working at a laptop"
              fill
              sizes="(min-width: 1280px) 651px, 100vw"
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
