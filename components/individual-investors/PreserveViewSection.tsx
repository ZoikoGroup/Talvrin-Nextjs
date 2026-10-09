import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CheckLine, CrossLine, SectionIntro } from "./shared";

const commitments = [
  {
    does: "A research view can be preserved and revisited as a product objective.",
    doesNot: "Exact autosave mechanics, storage limits, and history depth remain dependency-gated.",
  },
  {
    does: "The view remains linked conceptually to supporting and challenging evidence.",
    doesNot: "Exact data model or persistence guarantee until implementation is approved.",
  },
  {
    does: "Monitoring can support later reassessment.",
    doesNot: "Specific alert channel, cadence, or notification behavior.",
  },
];

export default function PreserveViewSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Preserve the Reasoning Behind a View"
            tone="amber"
            title="Return to why you held a view — not just what you concluded."
          >
            Talvrin is designed to preserve a research view so you can revisit the reasoning behind
            it. Exact storage, history, export, and sync mechanics remain product dependencies, not
            marketing promises.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-2 md:grid-cols-3">
          {commitments.map((item, index) => (
            <Reveal key={item.does} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-6">
                <CheckLine bold>{item.does}</CheckLine>
                <CrossLine>{item.doesNot}</CrossLine>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
