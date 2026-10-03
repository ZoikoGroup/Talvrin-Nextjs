import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, FaqList, CardLink } from "./shared";

const questions = [
  {
    q: "Does Talvrin use artificial intelligence?",
    a: "Yes. AI can assist with discovering, organizing, summarizing, comparing and interrogating evidence, while underlying sources remain separately inspectable.",
  },
  {
    q: "What makes Talvrin different from a generic AI financial assistant?",
    a: "Talvrin is being built around evidence provenance and continuous monitoring. Generated interpretation is intended to remain distinguishable from the underlying source material used to support a research view.",
  },
];

export default function AiSection() {
  return (
    <section id="ai" className="scroll-mt-32 bg-ink py-20 sm:py-24">
      <Container className="max-w-[1048px]">
        <Reveal>
          <SectionEyebrow tone="violet">AI</SectionEyebrow>
          <SectionHeading size="md" inverted>
            What AI can assist with, and where its authority ends.
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <FaqList items={questions} inverted />
          <div className="mt-6 pl-1">
            <CardLink href="/product/ai-assistance" className="text-white hover:text-white/80">
              Read the full AI boundary
            </CardLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
