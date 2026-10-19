import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

export default function EvidenceInspectionProvenance() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Evidence Inspection &amp; Provenance</SectionEyebrow>
          <SectionHeading inverted>The source should never disappear behind the answer.</SectionHeading>
          <p className="mt-5 max-w-[780px] text-base leading-[27.2px] text-white/70 sm:text-lg">
            Illustrative provenance schema for a single evidence item — original link, citation,
            version, timing, language and access/rights restrictions.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-6 inline-flex items-center rounded-full bg-white/8 px-[9px] py-[3px]">
          <span className="text-[11px] font-bold uppercase tracking-[0.55px] text-white/65">
            Illustrative — not a live record
          </span>
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative mt-6 min-h-[200px] overflow-hidden rounded-2xl bg-surface sm:aspect-[1281/260]"
        >
          <Image
            src="/images/markets-central-banks/markets-central-banks-provenance-screenshot.webp"
            alt="Illustrative evidence-provenance schema showing source, citation and version detail"
            fill
            sizes="(min-width: 1024px) 1281px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
