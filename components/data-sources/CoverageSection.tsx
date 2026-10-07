import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { StateLabel, StateTone } from "./shared";

const tiers: { label: string; tone: StateTone; description: string }[] = [
  {
    label: "Deep coverage",
    tone: "green",
    description:
      "High-confidence, production-supported research depth for a named market/domain where production readiness is confirmed.",
  },
  { label: "Supported", tone: "green", description: "Production-supported but narrower than Deep Coverage." },
  {
    label: "Limited / beta",
    tone: "amber",
    description: "Available with explicit limitations; a visible limitation label is required.",
  },
  {
    label: "Planned",
    tone: "neutral",
    description: "Roadmap only; displayed only where roadmap publication is approved.",
  },
  {
    label: "Architecture-ready",
    tone: "neutral",
    description: "Internal capability state; generally not marketed as current source coverage.",
  },
  {
    label: "Unavailable / unknown",
    tone: "rose",
    description: "No supported state is substituted; absence or uncertainty is explained when relevant.",
  },
];

export default function CoverageSection() {
  return (
    <section id="coverage" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Released Coverage, Not Architecture"
            tone="amber"
            title="Coverage comes from the governed registry — never evergreen copy."
          >
            Country flags or source logos are never used as a shortcut for live coverage unless the
            underlying coverage state is explicit. Architecture-ready capability is not marketed as
            current source coverage.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <dl>
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className="grid grid-cols-1 gap-3 border-b border-ink/10 py-4 md:grid-cols-[190px_minmax(0,1fr)] md:gap-4"
              >
                <dt>
                  <StateLabel label={tier.label} tone={tier.tone} />
                </dt>
                <dd className="text-sm leading-5 text-ink-soft md:pt-1">{tier.description}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
