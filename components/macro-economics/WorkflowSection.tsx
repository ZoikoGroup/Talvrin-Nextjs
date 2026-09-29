import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const pills = ["Ask", "Discover", "Inspect", "Understand", "Build", "Monitor", "Reassess"];

/* The design describes six of the seven pills, in this order. */
const steps = [
  {
    label: "Ask",
    body: "Begin with an economic event, policy issue, market, or research question — a structured research object, not a headline reaction.",
  },
  {
    label: "Discover",
    body: "Find relevant official releases, central-bank communications, policy/regulatory evidence, and supporting context under source, coverage, and rights governance.",
  },
  {
    label: "Inspect",
    body: "Open the source and review publication time, reference period, jurisdiction, and version/revision — never hidden behind a summary.",
  },
  {
    label: "Monitor",
    body: "Keep the view connected to material evidence, surfacing governed source and revision changes.",
  },
  {
    label: "Reassess",
    body: "Return when meaningful evidence changes, with what changed shown clearly.",
  },
  {
    label: "Understand",
    body: "See how evidence supports, challenges, updates, or contextualizes the question, with fact, analysis, and AI layers kept distinct.",
  },
];

export default function WorkflowSection() {
  return (
    <section id="macro-research" className="scroll-mt-24 bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Core Workflow</SectionEyebrow>
          <SectionHeading inverted>
            Understand what changed in the evidence — not just that a headline appeared.
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-9 flex flex-wrap items-center gap-2.5">
            {/* Each arrow sits inside its step so a wrapped row never starts with one. */}
            {pills.map((pill, index) => (
              <li key={pill} className="flex items-center gap-2.5">
                <span className="whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase text-white">
                  {pill}
                </span>
                {index < pills.length - 1 && (
                  <span className="text-white/30" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        {/* On the widest screens the photo fills the fourth column beside the two
            description rows, as designed. */}
        <div className="mt-11 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,494px)]">
          {steps.map((step, index) => (
            <Reveal key={step.label} delay={index * 0.04}>
              <h3 className="text-xs font-bold uppercase tracking-wide text-accent-amber">
                {step.label}
              </h3>
              <p className="mt-1.5 text-sm leading-5 text-white/75">{step.body}</p>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative aspect-[494/240] w-full overflow-hidden rounded-2xl xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:self-start"
          >
            <Image
              src="/images/markets/macro-economics/macro-workflow-laptop-group.webp"
              alt="Four colleagues gathered around a laptop in a lounge area"
              fill
              sizes="(min-width: 1280px) 494px, (min-width: 1024px) 298px, (min-width: 640px) 288px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
