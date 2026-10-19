import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionHeading } from "../alerts/shared";

const steps = [
  {
    label: "Ask",
    body: "Start with the question: what has materially changed in the outlook for Japanese government bond issuance?",
  },
  {
    label: "Discover",
    body: "Find relevant Bank of Japan, Japan Ministry of Finance and official-statistics evidence using source and rights filters.",
  },
  {
    label: "Inspect",
    body: "Open each source and review publication date, effective period, jurisdiction and version — never hidden behind a summary.",
  },
  {
    label: "Build",
    body: "Form a current research view from the evidence, with source fact kept separate from interpretation.",
  },
  {
    label: "Monitor",
    body: "Keep the view connected to new publications, revisions and source changes going forward.",
  },
  {
    label: "Reassess",
    body: "Return when material new evidence changes the base, with what changed shown clearly.",
  },
];

export default function QuestionExampleSection() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
            Question-to-Evidence Example
          </p>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold tracking-wide text-white/70 sm:text-[11px]">
            CONCEPTUAL WORKFLOW — NOT A LIVE FEATURE
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading inverted className="max-w-[760px]">
            What has materially changed in the outlook for Japanese government bond issuance?
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-white/70 sm:text-lg">
            An illustrative walk from question to evidence to monitored view —
            not a forecast and not live product output.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <ol aria-hidden="true" className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3 sm:mt-10">
            {steps.map((step, index) => (
              <li key={step.label} className="flex items-center gap-2">
                <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase text-white">
                  {step.label}
                </span>
                {index < steps.length - 1 && <span className="text-sm text-white/30">→</span>}
              </li>
            ))}
          </ol>
        </Reveal>

        <ol className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:mt-14">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.label} delay={0.04 * (index + 1)}>
              <p className="text-xs font-bold uppercase tracking-wide text-accent-amber">{step.label}</p>
              <p className="mt-2 text-sm leading-6 text-white/70">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
