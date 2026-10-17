import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

export default function TaxonomySection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow>Data Classes &amp; Evidence Taxonomy</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[780px]">
            Ten terms that describe every piece of Japanese Government Bonds evidence.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[800px] text-base leading-7 text-gray-600">
            A shared data dictionary — not a proprietary scoring model or a
            hidden methodology.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white sm:mt-10 sm:aspect-[16/7] lg:aspect-[1279/303]"
        >
          <Image
            src="/images/markets/japanese-government-bonds/jgb-taxonomy-colleagues.webp"
            alt="Four colleagues walking and talking together in an office corridor"
            fill
            sizes="(min-width: 1310px) 1280px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
