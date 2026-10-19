import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionHeading } from "../alerts/shared";

export default function ProvenanceSection() {
  return (
    <section id="evidence-provenance" className="scroll-mt-20 bg-ink py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
            Evidence Detail &amp; Provenance
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading inverted className="max-w-[720px]">
            The source should never disappear behind the answer.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-white/70">
            Example provenance view for the FOMC Statement — September 2026
            record above. Source fact and Talvrin interpretation stay visibly
            separate.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5 sm:mt-10 sm:aspect-[16/7] lg:aspect-[1280/261]"
        >
          <Image
            src="/images/markets/us-treasuries/us-treasuries-provenance-team.webp"
            alt="Four colleagues smiling together while reviewing a screen"
            fill
            sizes="(min-width: 1310px) 1280px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
