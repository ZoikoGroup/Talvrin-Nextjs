import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export default function EvidenceProvenanceSection() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Evidence Provenance</SectionEyebrow>
          <SectionHeading inverted>The source should never disappear behind the answer.</SectionHeading>
          <SectionLede inverted>
            Every global-markets evidence object carries the same canonical fields, regardless of
            which market or jurisdiction it comes from.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-11 aspect-[1309/491] w-full overflow-hidden rounded-2xl bg-surface">
          <Image
            src="/images/markets/global-markets/global-markets-evidence-provenance.webp"
            alt="Analysts examining an evidence relationship graph on a screen"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
