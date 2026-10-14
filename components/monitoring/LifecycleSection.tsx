import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const states = [
  {
    label: "NEW",
    tone: "border-emerald-600/30 text-emerald-600",
    body: "New evidence attached to research object.",
    rule: "Linked back to the saved question and original source.",
  },
  {
    label: "UPDATED",
    tone: "border-accent-amber/30 text-accent-amber",
    body: "Existing evidence materially or structurally changed.",
    rule: "Earlier version remains inspectable alongside the revision.",
  },
  {
    label: "UNCHANGED",
    tone: "border-gray-600/25 text-gray-600",
    body: "No material evidence change; avoid notification noise.",
    rule: "Not surfaced as an actionable change.",
  },
  {
    label: "MATERIALITY PENDING",
    tone: "border-accent-violet/30 text-accent-violet",
    body: "Change detected; significance not yet governed or established.",
    rule: "Shown distinctly from a confirmed update.",
  },
  {
    label: "SOURCE UNAVAILABLE",
    tone: "border-pink-800/30 text-pink-800",
    body: "A relevant source is temporarily unreachable.",
    rule: "Last known state and timestamp remain visible.",
  },
];

export default function LifecycleSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow>Lifecycle</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[800px]">
            Observed update → contextualize → inspect → reassess.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
            Every observed change is classified explicitly. An unchanged source
            is never dressed up as new activity, and an unreachable source is
            never treated as settled.
          </p>
        </Reveal>

        <ul className="mt-8 sm:mt-10">
          {states.map((state, index) => (
            <Reveal
              as="li"
              key={state.label}
              delay={0.05 * (index + 1)}
              className="grid grid-cols-1 gap-x-4 gap-y-2 border-b border-ink/10 py-4 md:grid-cols-[190px_minmax(0,1fr)_minmax(0,1fr)] md:items-start"
            >
              <span
                className={clsx(
                  "inline-flex w-fit items-center justify-center rounded-md border bg-white px-4 py-1.5 text-center text-xs font-bold md:w-full",
                  state.tone
                )}
              >
                {state.label}
              </span>
              <p className="text-sm leading-6 text-gray-600 sm:text-base">{state.body}</p>
              <p className="text-sm font-semibold leading-6 text-ink">{state.rule}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
