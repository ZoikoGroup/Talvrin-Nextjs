import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const steps = [
  {
    label: "Ask",
    body: "Start with the question: what changed in the policy stance since the last scheduled meeting?",
  },
  {
    label: "Discover",
    body: "Find the relevant institution and its verified source families — statements, minutes, speeches — using source and rights filters.",
  },
  {
    label: "Inspect",
    body: "Open each source and review issuer, publication date, effective period and version — never hidden behind a summary.",
  },
  {
    label: "Build",
    body: "Form a current research view from the evidence, with source fact kept separate from interpretation, assumptions and contrary evidence.",
  },
  {
    label: "Monitor",
    body: "Keep the view connected to new publications, revisions and schedule changes going forward.",
  },
  {
    label: "Reassess",
    body: "Return when material new evidence changes the base, with exactly what changed shown clearly.",
  },
];

export default function ResearchWorkflow() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <SectionEyebrow tone="violet" className="text-white">
              Related Policy Research — Question to Evidence
            </SectionEyebrow>
            <span className="inline-flex items-center rounded-full bg-white/8 px-[9px] py-[3px] text-[11px] font-bold uppercase tracking-[0.55px] text-white/65">
              Conceptual workflow — not a live feature
            </span>
          </div>
          <SectionHeading inverted>
            What changed in the policy stance since the last scheduled meeting?
          </SectionHeading>
          <p className="mt-2 max-w-[780px] text-base leading-[27.2px] text-white/72 sm:text-lg">
            An illustrative walk from question to evidence to a monitored view — with context,
            assumptions and contrary evidence kept visible, not a forecast or live product output.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 flex flex-wrap items-center gap-[10px]">
          {steps.map((step, index) => (
            <span key={step.label} className="flex items-center gap-[10px]">
              <span className="inline-flex items-center rounded-full border border-white/18 bg-white/6 px-[17px] py-[11px] text-[13px] font-semibold text-white">
                {step.label.toUpperCase()}
              </span>
              {index < steps.length - 1 && (
                <span aria-hidden="true" className="text-white/40">
                  →
                </span>
              )}
            </span>
          ))}
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-x-7 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.label} delay={0.05 + index * 0.04}>
              <p className="text-xs font-bold uppercase tracking-[0.72px] text-accent-amber">
                {step.label}
              </p>
              <p className="mt-[6px] text-sm leading-[21px] text-white/75">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
