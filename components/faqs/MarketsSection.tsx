import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, FaqList, CardLink } from "./shared";

const questions = [
  {
    q: "Which markets does Talvrin cover?",
    a: (
      <>
        Talvrin is architected for global public markets. Individual markets and capabilities should be represented according to the current governed<br className="hidden md:inline" /> coverage state rather than a blanket global-coverage claim.
      </>
    ),
  },
];

export default function MarketsSection() {
  return (
    <section
      id="markets"
      className="scroll-mt-32 bg-[#F6F5FB] py-20 sm:py-24"
      style={{ backgroundColor: "rgba(246, 245, 251, 1)" }}
    >
      <Container className="max-w-[1000px]">
        <Reveal>
          <SectionEyebrow tone="amber">MARKETS & COVERAGE</SectionEyebrow>
          <SectionHeading size="md">How coverage is described and released.</SectionHeading>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <FaqList items={questions}>
            <div className="pt-2 pb-2">
              <CardLink href="/markets/market-coverage">View Market Coverage</CardLink>
            </div>
          </FaqList>
        </Reveal>
      </Container>
    </section>
  );
}
