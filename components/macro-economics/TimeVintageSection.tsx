import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export default function TimeVintageSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="violet">Time &amp; Vintage Contract</SectionEyebrow>
          <SectionHeading>
            Publication time ≠ reference period ≠ revision vintage.
          </SectionHeading>
          <SectionLede className="max-w-[860px] sm:text-base sm:leading-7">
            Macro research becomes misleading when these concepts are flattened into one date.
            Talvrin keeps them separate wherever the source provides them.
          </SectionLede>
        </Reveal>

        {/* A wide band — it keeps the design's ratio at every width rather than
            being cropped taller on small screens. */}
        <Reveal
          delay={0.15}
          className="relative mt-9 aspect-[1277/320] w-full overflow-hidden rounded-2xl bg-white"
        >
          <Image
            src="/images/markets/macro-economics/macro-time-vintage-window.webp"
            alt="Colleagues reviewing documents together beside a bright window"
            fill
            sizes="(min-width: 1310px) 1277px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
