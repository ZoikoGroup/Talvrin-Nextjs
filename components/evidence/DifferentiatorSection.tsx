import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export default function DifferentiatorSection() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Primary Differentiator</SectionEyebrow>
          <SectionHeading inverted>Don&apos;t just show me the answer. Show me why.</SectionHeading>
          <SectionLede inverted className="max-w-[780px] sm:text-base sm:leading-7">
            Every evidence object carries the same canonical fields, whether it appears in
            Research, Evidence or Monitoring.
          </SectionLede>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-9 aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[2/1] lg:aspect-[1309/332]"
        >
          <Image
            src="/images/product/evidence/evidence-differentiator-documents.webp"
            alt="Two analysts reviewing printed source documents at a table"
            fill
            sizes="(min-width: 1310px) 1310px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
