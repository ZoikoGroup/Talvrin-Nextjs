import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export default function MethodStatusSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="violet">Authentication Method Status</SectionEyebrow>
          <SectionHeading>No authentication method is currently published.</SectionHeading>
          <SectionLede className="max-w-[760px] sm:text-base sm:leading-6">
            Every fact below resolves to one approved Authentication Method Registry version. Until
            that registry publishes a method, this page describes governance only — never a guessed
            protocol, credential type, or endpoint.
          </SectionLede>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-white sm:aspect-[2/1] lg:aspect-[1279/356]"
        >
          <Image
            src="/images/developers/authentication/authentication-method-status-team.webp"
            alt="Colleagues sitting outside a building looking toward the skyline"
            fill
            sizes="(min-width: 1310px) 1279px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
