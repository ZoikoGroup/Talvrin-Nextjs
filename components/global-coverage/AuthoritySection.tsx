import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export default function AuthoritySection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-2.5">
        <Reveal>
          <SectionEyebrow tone="amber">Authority &amp; boundaries</SectionEyebrow>
          <SectionHeading className="max-w-[600px]">
            Global by architecture. Specific by disclosure.
          </SectionHeading>
          <SectionLede className="max-w-[635px]">
            Talvrin&apos;s research and evidence architecture is designed to extend to global
            public markets. That design choice is not itself a coverage claim. This page states,
            region by region and record by record, what is actually released, pending, or not yet
            available.
          </SectionLede>
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative aspect-[635/275] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={`${IMG}/coverage-authority-laptop.webp`}
            alt="Man working on a laptop at a sunlit desk"
            fill
            sizes="(min-width: 1024px) 635px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
