import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(640px 440px at 16% 6%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] xl:grid-cols-[minmax(0,578px)_minmax(0,578px)] xl:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Markets / Macro &amp; Economics</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            {/* The headline only reaches its full size once the text column is
                wide enough for it, at xl. */}
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[44px] xl:text-[54px]">
              Understand economic releases, policy decisions, and central-bank communication in
              context.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[540px] text-lg leading-8 text-white/70">
              Talvrin connects macroeconomic questions to source-linked releases, policy evidence,
              jurisdictional context, and continuous monitoring — so you can see what changed and
              reassess the research view.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-4 max-w-[520px] text-sm leading-5 text-white/50">
              Coverage varies by country, institution, jurisdiction, source rights, and released
              capability.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <LinkButton href="#macro-research" variant="onDark">
              Explore Macro Research
            </LinkButton>
            <Link
              href="#coverage-truth"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              View Market Coverage →
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-lg text-sm text-white/60">
              Research and intelligence platform. No economic forecasts. No trade execution.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[578/500] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:aspect-[578/705]"
        >
          <Image
            src="/images/markets/macro-economics/macro-hero-meeting.webp"
            alt="Colleagues discussing printouts and laptops around a meeting table"
            fill
            priority
            sizes="(min-width: 1280px) 578px, (min-width: 1024px) 420px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
