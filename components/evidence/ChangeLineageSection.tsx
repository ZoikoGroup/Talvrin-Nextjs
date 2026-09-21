import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

type Tone = "amber" | "violet" | "slate" | "red";

const states: { label: string; tone: Tone; meaning: string; treatment: string }[] = [
  {
    label: "New",
    tone: "amber",
    meaning: "A newly available evidence object entered the research context.",
    treatment: "Source identity + published time shown; no automatic materiality claim.",
  },
  {
    label: "Updated",
    tone: "violet",
    meaning: "Known evidence gained a newer edition, revision or governed metadata change.",
    treatment: "Lineage and changed-state label exposed.",
  },
  {
    label: "Superseded",
    tone: "slate",
    meaning: "A newer source or version replaces the older one for current use.",
    treatment:
      "Older evidence stays visible in historical context; relationship linked when known.",
  },
  {
    label: "Unchanged",
    tone: "slate",
    meaning: "No qualifying evidence change since the governed comparison point.",
    treatment: "Used only where monitoring/comparison capability supports the claim.",
  },
  {
    label: "Review needed",
    tone: "amber",
    meaning: "A change may require user reassessment.",
    treatment: "Neutral review language — no automatic investment decision.",
  },
  {
    label: "Material — restricted use",
    tone: "red",
    meaning: "A governed product concept only.",
    treatment:
      "Not displayed unless a materiality rule, reviewer or process is approved and applicable.",
  },
];

const badgeStyles: Record<Tone, string> = {
  amber: "border-accent-amber/30 bg-accent-amber/8 text-accent-amber",
  violet: "border-accent-violet/30 bg-accent-violet/8 text-accent-violet",
  slate: "border-ink/15 bg-surface text-slate-600",
  red: "border-red-700/25 bg-red-700/5 text-red-700",
};

export default function ChangeLineageSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="violet">Change &amp; Lineage</SectionEyebrow>
          <SectionHeading>Know when the evidence changed — without rewriting history.</SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-7">
            A source can be new, updated, revised or superseded without automatically being
            &ldquo;material.&rdquo; Historical evidence used in an earlier view stays identifiable.
          </SectionLede>
        </Reveal>

        <div className="mt-12">
          {states.map((state, index) => (
            <Reveal
              key={state.label}
              delay={index * 0.04}
              className="grid grid-cols-1 gap-3 border-b border-ink/10 py-5 md:grid-cols-[170px_minmax(0,1fr)_minmax(0,1fr)] md:items-start md:gap-x-4 lg:gap-x-9"
            >
              <span
                className={clsx(
                  "w-fit min-w-[170px] rounded-md border px-3 py-1.5 text-center text-xs font-bold",
                  badgeStyles[state.tone]
                )}
              >
                {state.label}
              </span>
              <p className="text-[15px] text-slate-600">{state.meaning}</p>
              <p className="text-sm font-semibold text-ink">{state.treatment}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
