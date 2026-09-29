import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const problems = [
  {
    number: "01",
    title: "Fragmented research",
    body: "Serious questions cross filings, releases, policy, market data, research, and changing source versions.",
    answer: "Evidence organized around the research question.",
  },
  {
    number: "02",
    title: "Reconstruction overhead",
    body: "Professionals repeatedly rebuild context, timelines, and source trails.",
    answer: "Preserved research view and source chain.",
  },
  {
    number: "03",
    title: "Weak provenance",
    body: "A conclusion is harder to defend when the source path disappears.",
    answer: "Inspectable source identity, timing, jurisdiction, version, and rights.",
  },
  {
    number: "04",
    title: "Weak institutional memory",
    body: "Reasoning disappears when it lives only in analyst memory and disconnected files.",
    answer: "Research view remains connected to evidence.",
  },
  {
    number: "05",
    title: "Review difficulty",
    body: "Colleagues and governance functions need to understand why a view was reached.",
    answer: "Reviewable evidence basis — no formal sign-off claim.",
  },
  {
    number: "06",
    title: "Evidence change",
    body: "A defensible conclusion can weaken when new evidence appears.",
    answer: "Monitoring and reassessment.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">The Professional Research Problem</SectionEyebrow>
          <SectionHeading>The cost of fragmented research isn&apos;t only time.</SectionHeading>
          <SectionLede className="max-w-[820px] sm:text-base sm:leading-7">
            It&apos;s duplicated work, inconsistent evidence, weak institutional memory, and
            difficulty reviewing why a conclusion was reached.
          </SectionLede>
        </Reveal>

        {/* The photo closes the second row of cards, as designed. */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {problems.map((problem, index) => (
            <Reveal
              key={problem.number}
              delay={index * 0.04}
              className="flex flex-col rounded-2xl border border-ink/10 bg-white p-7"
            >
              <p className="text-sm font-bold tracking-wide text-accent-violet/40">
                {problem.number}
              </p>
              <h3 className="mt-2.5 text-base font-bold text-ink">{problem.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{problem.body}</p>
              <div className="mt-auto flex items-start gap-2 border-t border-ink/10 pt-3.5">
                <span className="mt-1.5 h-1 w-3 shrink-0 bg-accent-amber" aria-hidden="true" />
                <p className="text-xs font-medium leading-5 text-ink">{problem.answer}</p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.25}
            className="relative aspect-[628/260] w-full overflow-hidden rounded-2xl border border-ink/10 sm:col-span-2 lg:col-span-3 xl:col-span-2"
          >
            <Image
              src="/images/solutions/investment-professionals/ip-problem-walking-trio.webp"
              alt="Three colleagues talking while walking through an office"
              fill
              sizes="(min-width: 1280px) 628px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
