import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const states = [
  {
    label: "BEFORE",
    tone: "text-accent-violet",
    body: "The research view and evidence as you saved it — kept intact as the point of comparison.",
  },
  {
    label: "AFTER",
    tone: "text-accent-amber",
    body: "Newer evidence shown alongside the saved view, never overwriting the original narrative automatically.",
  },
];

export default function SavedResearchHandoffSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-stretch lg:gap-5 xl:grid-cols-[minmax(0,1fr)_493px]">
        <div className="min-w-0">
          <Reveal>
            <SectionEyebrow tone="amber">Saved Research Handoff</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading className="max-w-[800px]">
              Return to the evidence and assumptions you saved, then inspect what
              is different.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
              A newer piece of evidence never silently overwrites the research
              narrative you saved — both stay visible until a person decides what
              changes.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-6">
            {states.map((state, index) => (
              <Reveal
                key={state.label}
                delay={0.1 * (index + 2)}
                className="rounded-2xl border border-ink/10 bg-white p-6"
              >
                <p className={clsx("text-xs font-bold tracking-wide", state.tone)}>{state.label}</p>
                <p className="mt-2.5 text-sm leading-6 text-ink sm:text-base">{state.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <Link
              href="/product/saved-research"
              className="mt-8 inline-block text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
            >
              Explore Saved Research →
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[493/389] w-full overflow-hidden rounded-2xl border border-ink/10 bg-white sm:aspect-[16/10] lg:aspect-auto lg:min-h-[389px]"
        >
          <Image
            src="/images/product/change-detection/change-detection-saved-research-review.webp"
            alt="Three colleagues smiling while reviewing a folder together"
            fill
            sizes="(min-width: 1280px) 493px, (min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
