import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const steps = [
  {
    label: "Discover",
    description: "Determine whether the needed developer surface exists.",
    conditional: false,
  },
  {
    label: "Qualify",
    description: "Understand release state, coverage, and entitlement.",
    conditional: false,
  },
  {
    label: "Access",
    description: "Follow approved authentication only if published.",
    conditional: true,
  },
  {
    label: "Integrate",
    description: "Use canonical docs, SDK, or integration contracts only.",
    conditional: false,
  },
  {
    label: "Validate",
    description: "Compare implementation against approved examples and schema.",
    conditional: false,
  },
  { label: "Monitor", description: "Use Developer Status if live.", conditional: true },
  {
    label: "Update",
    description: "Follow Changelog and version notices when available.",
    conditional: true,
  },
];

export default function JourneySection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="amber">Conditional Implementation Journey</SectionEyebrow>
          <SectionHeading>
            A task flow assembled from released resource contracts — not a fixed pipeline.
          </SectionHeading>
          <SectionLede className="max-w-[760px] sm:text-base sm:leading-6">
            Each step only appears when the corresponding resource is actually released. Access,
            for example, is shown only when a resource requires authentication.
          </SectionLede>
        </Reveal>

        <ol className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal
              key={step.label}
              delay={index * 0.04}
              as="li"
              className="flex items-center gap-3"
            >
              <div className="flex h-full min-h-[96px] flex-1 flex-col gap-1.5 rounded-xl border border-ink/10 bg-white px-4 py-4">
                <p className="text-xs font-bold uppercase tracking-wide text-ink">{step.label}</p>
                <p className="text-xs leading-4 text-slate-600">{step.description}</p>
                {step.conditional && (
                  <p className="mt-auto text-xs font-semibold text-accent-amber">Conditional</p>
                )}
              </div>
              {index < steps.length - 1 && (
                <span className="hidden shrink-0 text-ink/30 sm:inline" aria-hidden="true">
                  →
                </span>
              )}
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
