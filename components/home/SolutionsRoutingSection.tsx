import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function SolutionsRoutingSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Solutions Routing</SectionEyebrow>
          <SectionHeading>Built for people who need to know why.</SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)_minmax(0,1fr)] lg:items-stretch">
          <Reveal className="flex flex-col justify-between rounded-2xl border border-ink/8 bg-white p-7">
            <div>
              <h3 className="text-lg font-bold text-ink">Self-Directed Investors</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                Go beyond fragmented news and isolated commentary with source-linked research.
              </p>
            </div>
            <Link
              href="/solutions/individual-investors"
              className="mt-4 text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
            >
              Learn more →
            </Link>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative min-h-[220px] overflow-hidden rounded-2xl border border-ink/8 lg:min-h-0"
          >
            <Image
              src="/images/home/home-solutions-meeting.png"
              alt="Meeting room reviewing a Q4 growth strategy presentation with a city skyline view"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col justify-between rounded-2xl border border-ink/8 bg-white p-7">
            <div>
              <h3 className="text-lg font-bold text-ink">Financial Institutions</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                Deploy governed evidence and research capabilities across professional workflows.
              </p>
            </div>
            <Link
              href="/solutions/financial-institutions"
              className="mt-4 text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
            >
              Learn more →
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
