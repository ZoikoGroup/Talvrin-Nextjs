import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, FaqList, CardLink } from "./shared";

const questions = [
  {
    q: "Which markets does Talvrin cover?",
    a: "Talvrin is architected for global public markets. Individual markets and capabilities should be represented according to the current governed coverage state rather than a blanket global-coverage claim.",
  },
];

export default function MarketsSection() {
  return (
    <section id="markets" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="max-w-[1048px]">
        <Reveal>
          <SectionEyebrow tone="amber">Markets &amp; Coverage</SectionEyebrow>
          <SectionHeading size="md">How coverage is described and released.</SectionHeading>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <FaqList items={questions} />
          <div className="mt-4 pb-2 pl-1">
            <CardLink href="/markets/market-coverage">View Market Coverage</CardLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
