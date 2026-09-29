import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const outcomes = [
  {
    title: "Faster research",
    body: "Spend less time reconstructing information and more time interpreting it.",
    note: "Value is evidence continuity, not raw speed claims.",
  },
  {
    title: "Stronger provenance",
    body: "Keep important conclusions connected to supporting sources.",
    note: "The evidence chain is the proof, not styling.",
  },
  {
    title: "Institutional memory",
    body: "Preserve evidence and reasoning beyond an isolated session or analyst.",
    note: "No unapproved archive or admin claim.",
  },
  {
    title: "Greater reviewability",
    body: "Make it easier for colleagues and governance functions to inspect the basis of a view.",
    note: "No invented approval or compliance workflow.",
  },
  {
    title: "Scalable workflows",
    body: "Create repeatable research processes across teams, markets, and jurisdictions.",
    note: "Coverage and governance truth, not a universal-support claim.",
  },
  {
    title: "Continuous monitoring",
    body: "Focus attention on changes that may affect an existing research view.",
    note: "Not a trade signal or alert-volume promise.",
  },
];

export default function OutcomesSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Professional Outcomes</SectionEyebrow>
          <SectionHeading>Seven source-backed outcomes for serious research.</SectionHeading>
        </Reveal>

        {/* On the widest screens the photo fills the fourth column beside both
            card rows, as designed. */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,497px)]">
          {outcomes.map((outcome, index) => (
            <Reveal
              key={outcome.title}
              delay={index * 0.04}
              className="flex flex-col rounded-2xl border border-ink/10 bg-surface p-6"
            >
              <h3 className="text-base font-bold text-ink">{outcome.title}</h3>
              <p className="mt-2.5 text-sm leading-5 text-slate-600">{outcome.body}</p>
              <p className="mt-auto border-t border-ink/10 pt-3 text-xs leading-4 text-accent-amber">
                {outcome.note}
              </p>
            </Reveal>
          ))}

          <Reveal
            delay={0.25}
            className="relative aspect-[497/453] w-full overflow-hidden rounded-2xl xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
          >
            <Image
              src="/images/solutions/investment-professionals/ip-outcomes-pair-laptop.webp"
              alt="Two colleagues in conversation over a laptop"
              fill
              sizes="(min-width: 1280px) 497px, (min-width: 1024px) 298px, (min-width: 640px) 294px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
