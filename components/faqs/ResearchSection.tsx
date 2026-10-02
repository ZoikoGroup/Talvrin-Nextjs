import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="max-w-[1048px]">
        <Reveal>
          <SectionEyebrow tone="amber">Research &amp; Evidence</SectionEyebrow>
          <SectionHeading size="md">
            Evidence-first research, monitoring and information sources.
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <div className="relative h-72 overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:h-96">
            <Image
              src="/faq/image 322.png"
              alt="Researchers reviewing source-linked evidence together"
              fill
              sizes="(min-width: 1024px) 1000px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
