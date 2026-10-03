import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

export default function CoverageSection() {
  return (
    <section id="coverage" className="scroll-mt-32 bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Coverage and Availability Truth</SectionEyebrow>
          <SectionHeading>Global architecture is not the same as universal live coverage.</SectionHeading>
          <p className="mt-3 max-w-[720px] text-base leading-[25.6px] text-slate-600 sm:text-lg">
            Use current coverage information to understand what is supported, limited, planned, or
            not yet released.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-9 aspect-[1100/398.4] w-full overflow-hidden rounded-[14px] border border-ink/10 bg-white"
        >
          <Image
            src="/images/getting-started/getting-started-coverage-office-skyline.webp"
            alt="A preview of the Talvrin market coverage matrix"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.2} className="pt-[14px]">
          <Link
            href="/markets/market-coverage"
            className="text-sm font-semibold text-accent-violet hover:text-brand"
          >
            View the Market Coverage matrix →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
