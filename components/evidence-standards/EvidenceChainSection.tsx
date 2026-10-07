import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";

const steps = [
  "Research Question",
  "Source Discovery",
  "Authority / Rights Check",
  "Time + Jurisdiction Context",
  "Evidence",
  "Interpretation",
  "Research View",
  "Monitoring",
];

export default function EvidenceChainSection() {
  return (
    <section id="evidence-chain" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Source to Research View"
            tone="amber"
            title="Don't just show me the answer. Show me why."
          >
            Every displayed research conclusion preserves a navigable path back to evidence where the
            product supports that relationship. The chain never implies that every source is equally
            authoritative or equally complete.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <ol className="overflow-hidden rounded-2xl border border-ink/10 bg-white sm:pt-7">
            {steps.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-4 border-b border-ink/10 px-5 py-4 last:border-b-0"
              >
                <span className="w-10 shrink-0 text-xs font-bold text-accent-amber">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-bold text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
