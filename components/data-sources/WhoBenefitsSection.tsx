import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";

const audiences = [
  {
    audience: "Self-directed investors",
    value:
      "See where evidence came from, distinguish source from commentary, and inspect context before forming a view.",
  },
  {
    audience: "Investment professionals",
    value: "Review source identity, timing, jurisdiction, revision and access states efficiently.",
  },
  {
    audience: "Research teams",
    value: "Use a repeatable shared source vocabulary and provenance layer across research workflows.",
  },
  {
    audience: "Financial institutions / enterprise",
    value:
      "Assess whether source governance, rights gating, provenance and coverage disclosure can support controlled research workflows.",
  },
];

export default function WhoBenefitsSection() {
  return (
    <section id="who-benefits" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Value Without Overclaiming" title="Who provenance transparency serves." />
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <dl className="rounded-2xl bg-surface px-2 pb-2 pt-2">
            {audiences.map((row) => (
              <div
                key={row.audience}
                className="grid grid-cols-1 gap-1.5 border-b border-ink/10 px-3 py-5 last:border-b-0 sm:px-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-4"
              >
                <dt className="text-base font-bold text-ink">{row.audience}</dt>
                <dd className="text-sm leading-5 text-ink-soft md:pt-0.5">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
