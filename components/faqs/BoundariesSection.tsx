import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, FaqList } from "./shared";

const questions = [
  {
    q: "Does Talvrin provide investment advice?",
    a: (
      <>
        No. Talvrin is designed as a research and market-intelligence platform rather than an investment recommendation engine. Users remain<br className="hidden md:inline" /> responsible for their own investment and professional decisions.
      </>
    ),
  },
  {
    q: "Is Talvrin a trading platform?",
    a: "No. Talvrin is being built for research and market intelligence, not trade execution.",
  },
  {
    q: "Will Talvrin replace analysts?",
    a: (
      <>
        No. Talvrin is designed to improve the infrastructure available to analysts and researchers. Interpretation, judgment and responsibility<br className="hidden md:inline" /> remain human.
      </>
    ),
  },
];

export default function BoundariesSection() {
  return (
    <section
      id="boundaries"
      className="scroll-mt-32 bg-[#F6F5FB] py-20 sm:py-24"
      style={{ backgroundColor: "rgba(246, 245, 251, 1)" }}
    >
      <Container className="max-w-[1000px]">
        <Reveal>
          <SectionEyebrow tone="amber">PRODUCT BOUNDARIES</SectionEyebrow>
          <SectionHeading size="md">What Talvrin does not do.</SectionHeading>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <FaqList items={questions} />
          <p className="mt-4 text-sm leading-6 text-muted">
            Users remain responsible for their own investment and professional decisions.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
