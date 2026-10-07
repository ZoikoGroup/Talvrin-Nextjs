import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { StateLabel, StateTone } from "../data-sources/shared";

const states: { label: string; tone: StateTone; meaning: string; rule: string }[] = [
  {
    label: "Unknown",
    tone: "neutral",
    meaning: "States that the relevant fact or state is unknown or not established.",
    rule: "Never an ambiguous blank when the state is material.",
  },
  {
    label: "Partial",
    tone: "amber",
    meaning: "Explains which part is available or limited.",
    rule: "A visible limitation label sits near the affected evidence.",
  },
  {
    label: "Conflicting",
    tone: "amber",
    meaning: "States that evidence conflicts; avoids forced synthesis into certainty.",
    rule: "Shows both or all relevant evidence relationships.",
  },
  {
    label: "Restricted",
    tone: "rose",
    meaning: "Explains the access limitation without disclosing restricted details.",
    rule: "No unauthorized open or export action.",
  },
  {
    label: "Unavailable",
    tone: "rose",
    meaning: "Explains the source or action is unavailable.",
    rule: "Preserves permitted metadata and dependency context.",
  },
  {
    label: "Materiality pending",
    tone: "amber",
    meaning: "States a change exists but materiality is unresolved.",
    rule: "Never styled as high-impact or material until governed.",
  },
  {
    label: "Superseded",
    tone: "neutral",
    meaning: "States that a newer version exists.",
    rule: "Maintains lineage/timeline where retention and rights allow.",
  },
];

export default function UncertaintySection() {
  return (
    <section id="uncertainty" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Uncertainty Stays Visible"
            tone="amber"
            title="Seven states — none of them quietly becomes certainty."
          >
            Unknown stays unknown; restricted never exposes content beyond permitted use; materiality
            is never assumed by default.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <dl>
            {states.map((state) => (
              <div
                key={state.label}
                className="grid grid-cols-1 gap-3 border-b border-ink/10 py-4 md:grid-cols-[190px_minmax(0,1fr)_minmax(0,1fr)] md:gap-4"
              >
                <dt>
                  <StateLabel label={state.label} tone={state.tone} />
                </dt>
                <dd className="text-sm leading-5 text-ink-soft md:pt-1">{state.meaning}</dd>
                <dd className="text-sm leading-5 text-muted md:pt-1">{state.rule}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
