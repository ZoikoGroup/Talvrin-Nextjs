import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, FaqList } from "./shared";

const questions = [
  {
    q: "What is Talvrin?",
    a: "Talvrin is a source-linked research and monitoring platform for global public markets. It helps users discover evidence, build research views, and monitor underlying information for meaningful change.",
  },
  {
    q: "Who is Talvrin for?",
    a: "Talvrin is designed for serious self-directed investors, investment professionals, analysts, research teams, asset managers, wealth and advisory research functions, financial institutions and enterprise research teams.",
  },
  {
    q: "Why is Talvrin being created?",
    a: "Talvrin is being created because public-market research remains fragmented across many sources while the volume of information — including AI-generated content — continues to grow. Talvrin is designed to connect research back to inspectable evidence and keep that evidence monitorable over time.",
  },
  {
    q: "What problem does Talvrin solve?",
    a: "Talvrin addresses information fragmentation, source verification, research traceability, contextual timing and ongoing evidence-change monitoring within public-market research.",
  },
  {
    q: "Is Talvrin only for professional investors?",
    a: "No. Talvrin is intended to serve both serious self-directed investors and professional or institutional users, with workflows appropriate to different research needs.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="max-w-[1048px]">
        <Reveal>
          <SectionEyebrow tone="violet">About Talvrin</SectionEyebrow>
          <SectionHeading size="md">
            What Talvrin is, why it exists and who it serves.
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <FaqList items={questions} />
        </Reveal>
      </Container>
    </section>
  );
}
