import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const panels = [
  {
    title: "Why this view exists",
    yes: "Important conclusions remain connected to sources and context.",
    no: "Formal investment committee workflow.",
  },
  {
    title: "What evidence mattered",
    yes: "Supporting, challenging, updating, and contextualizing relationships remain visible.",
    no: "Automated research-score or conviction engine.",
  },
  {
    title: "Governance relevance",
    yes: "Research can be more inspectable and durable.",
    no: "Regulatory recordkeeping compliance unless separately approved.",
  },
  {
    title: "What changed",
    yes: "Monitoring surfaces meaningful source changes.",
    no: "Guaranteed materiality or causal impact.",
  },
];

export default function ReviewabilitySection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Reviewability</SectionEyebrow>
          <SectionHeading>Defensible without an invented approval workflow.</SectionHeading>
          <SectionLede className="max-w-[860px] sm:text-base sm:leading-7">
            A colleague or governance stakeholder can inspect the basis of a view. That is not the
            same as a built-in approval, audit, or compliance workflow.
          </SectionLede>
        </Reveal>

        {/* The photo column would squeeze the cards to ~245px at 1024, so it
            only sits beside them from xl. */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,628px)]">
          {panels.map((panel, index) => (
            <Reveal
              key={panel.title}
              delay={index * 0.05}
              className="flex flex-col gap-3 rounded-2xl border border-ink/10 bg-surface p-6"
            >
              <h3 className="text-base font-bold text-ink">{panel.title}</h3>
              <p className="flex items-start gap-2.5 text-sm leading-5 text-slate-700">
                <span className="text-accent-violet" aria-hidden="true">
                  ✓
                </span>
                {panel.yes}
              </p>
              <p className="flex items-start gap-2.5 text-sm leading-5 text-slate-500">
                <span className="text-red-500" aria-hidden="true">
                  ✕
                </span>
                {panel.no}
              </p>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative aspect-[628/440] w-full max-w-[628px] overflow-hidden rounded-2xl sm:col-span-2 xl:col-span-1 xl:col-start-3 xl:row-span-2 xl:row-start-1 xl:aspect-auto xl:max-w-none"
          >
            <Image
              src="/images/solutions/investment-professionals/ip-reviewability-laptop.webp"
              alt="Three colleagues reviewing a laptop screen together in a meeting room"
              fill
              sizes="(min-width: 640px) 628px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
