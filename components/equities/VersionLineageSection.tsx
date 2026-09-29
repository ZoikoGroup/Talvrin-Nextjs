import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export default function VersionLineageSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Filing &amp; Disclosure Version Lineage</SectionEyebrow>
          <SectionHeading inverted>
            Amended and restated filings never silently replace what came before.
          </SectionHeading>
          <SectionLede inverted className="max-w-[780px] sm:text-base sm:leading-7">
            Every filing or disclosure carries a version state, and prior versions remain part of
            the research trail.
          </SectionLede>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-9 aspect-[1278/326] w-full overflow-hidden rounded-2xl bg-surface"
        >
          <Image
            src="/images/markets/equities/equities-version-lineage-briefing.webp"
            alt="Colleague briefing a seated team beside a glass wall"
            fill
            sizes="(min-width: 1310px) 1278px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
