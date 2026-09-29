import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export default function DataStateSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="amber">Data State &amp; Currentness</SectionEyebrow>
          <SectionHeading inverted>
            Every numeric value carries a truthful state. Nothing is silently current.
          </SectionHeading>
          <SectionLede inverted className="max-w-[860px] sm:text-base sm:leading-7">
            Coverage, capability, data, access, and currentness are governed separately, so a
            supported category can still have an unavailable capability without that being hidden.
          </SectionLede>
        </Reveal>

        {/* A wide band like the Released Categories banner — it keeps the design's
            ratio at every width rather than being cropped taller on small screens. */}
        <Reveal
          delay={0.15}
          className="relative mt-9 aspect-[1276/362] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/markets/funds-other-assets/funds-data-state-office.webp"
            alt="Colleagues working with laptops around a table in a glass-walled office"
            fill
            sizes="(min-width: 1310px) 1276px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
