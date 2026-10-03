import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, FaqList } from "./shared";

const questions = [
  {
    q: "Does Talvrin provide investment advice?",
    a: "No. Talvrin is designed as a research and market-intelligence platform rather than an investment recommendation engine. Users remain responsible for their own investment and professional decisions.",
  },
  {
    q: "Is Talvrin a trading platform?",
    a: "No. Talvrin is being built for research and market intelligence, not trade execution.",
  },
  {
    q: "Will Talvrin replace analysts?",
    a: "No. Talvrin is designed to improve the infrastructure available to analysts and researchers. Interpretation, judgment and responsibility remain human.",
  },
];

export default function BoundariesSection() {
  return (
    <section id="boundaries" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="max-w-[1048px]">
        <Reveal>
          <SectionEyebrow tone="amber">Product Boundaries</SectionEyebrow>
          <SectionHeading size="md">What Talvrin does not do.</SectionHeading>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <FaqList items={questions} />
          <p className="mt-2 text-sm leading-6 text-muted">
            Users remain responsible for their own investment and professional decisions.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
