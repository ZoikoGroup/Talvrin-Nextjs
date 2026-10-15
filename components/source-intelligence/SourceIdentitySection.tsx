import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

export default function SourceIdentitySection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow>Source Identity &amp; Provenance</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[800px]">
            Every source carries the same identity contract.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
            These fields travel with a source wherever it appears — in Discover,
            Inspect, Build or Monitor. A missing field is shown as missing,
            never filled in.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink sm:mt-8 sm:aspect-[16/7] lg:aspect-[1320/324]"
        >
          <Image
            src="/images/product/source-intelligence/source-intelligence-identity-team-discussion.webp"
            alt="Team listening as a colleague explains a point during a meeting"
            fill
            sizes="(min-width: 1320px) 1320px, 100vw"
            className="object-cover object-[70%_center]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
