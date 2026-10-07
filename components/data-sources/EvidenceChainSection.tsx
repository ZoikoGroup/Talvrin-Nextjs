import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { Banner } from "../data-rights/shared";
import { IMAGE_DIR } from "./shared";

const steps = [
  "Research question",
  "Source discovery",
  "Authority / rights check",
  "Time + jurisdiction context",
  "Evidence",
  "Interpretation",
  "Research view",
  "Monitoring",
];

export default function EvidenceChainSection() {
  return (
    <section id="evidence-chain" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Source to Research"
            title="The source should never disappear behind the answer."
          >
            Every displayed research conclusion preserves a navigable path back to evidence where the
            product supports that relationship.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <ol className="overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:pt-7">
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

        <Reveal delay={0.15} className="mt-14">
          <h3 className="text-xs font-bold uppercase tracking-wide text-muted">
            Source record vs. evidence item
          </h3>
          <Banner
            src={`${IMAGE_DIR}/data-sources-evidence-chain-review.webp`}
            alt="Two colleagues reviewing work together on a laptop"
            ratio="aspect-[1280/398]"
            className="mt-4"
          />
        </Reveal>
      </Container>
    </section>
  );
}
