import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

export default function TaxonomySection() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Change Taxonomy</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading inverted className="max-w-[800px]">
            Changes can be new publications, revisions, corrections, removals or
            changes in relevant context.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-white/70">
            Each class of change is labeled for what it is — a classification
            never substitutes for the source&apos;s own words.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:aspect-[16/7] lg:aspect-[1320/323]"
        >
          <Image
            src="/images/product/change-detection/change-detection-taxonomy-discussion.webp"
            alt="Two colleagues in conversation in a dimly lit evening office"
            fill
            sizes="(min-width: 1320px) 1320px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.3}
          className="mt-3.5 max-w-[760px] rounded-xl border border-accent-amber/30 bg-accent-amber/10 px-5 py-4"
        >
          <p className="text-sm leading-6 text-white sm:text-base">
            A source change does not automatically change the research
            conclusion. Each class above describes the evidence, not the
            reader&apos;s verdict.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
