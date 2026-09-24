import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function AvailableNowSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="violet">Available Now</SectionEyebrow>
          <SectionHeading>
            Released developer resources appear here — from a governed registry, not a promise.
          </SectionHeading>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,736px)_minmax(0,518px)] lg:gap-6">
          <Reveal
            delay={0.1}
            className="flex flex-col items-center gap-2.5 rounded-2xl border border-ink/10 bg-white px-6 pb-10 pt-12 text-center sm:px-10 sm:pt-14"
          >
            <p className="text-lg font-semibold leading-7 text-ink">
              Public developer resources are not currently listed.
            </p>
            <p className="max-w-[560px] text-base leading-6 text-slate-600">
              This page will list only resources released through the approved Developer Resource
              Registry. In the meantime, explore the Talvrin platform and research model.
            </p>
            <div className="mt-4 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
              <LinkButton href="/product/overview" variant="primary">
                Explore the Platform
              </LinkButton>
              <LinkButton href="/product/evidence" variant="secondary">
                Explore Evidence
              </LinkButton>
              <LinkButton href="/about-talvrin" variant="secondary">
                About Talvrin
              </LinkButton>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[518/286] w-full overflow-hidden rounded-2xl border border-ink/10 bg-white"
          >
            <Image
              src="/images/developers/developer-overview/developer-overview-available-now-team.webp"
              alt="Colleagues talking beside a table in a bright office"
              fill
              sizes="(min-width: 1024px) 518px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
