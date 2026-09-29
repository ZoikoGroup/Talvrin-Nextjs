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
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] xl:grid-cols-[minmax(0,578px)_minmax(0,500px)] xl:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="violet">Solutions / Investment Professionals</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            {/* The headline only reaches its full size once the text column is
                wide enough for it, at xl. */}
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[44px] xl:text-[54px]">
              Investigate markets and securities with a defensible source trail.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[560px] text-lg leading-8 text-white/70">
              Move from question to inspectable evidence, preserve the research view, and know when
              the underlying facts change — without turning generated output into the authority.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-4 max-w-[560px] text-base leading-6 text-white/60">
              Spend less time reconstructing research and more time interpreting what the evidence
              means.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <LinkButton href="#professional-research" variant="onDark">
              Explore Professional Research
            </LinkButton>
            <Link
              href="/product/how-it-works"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              See How Talvrin Works →
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-lg text-sm text-white/60">
              Research and intelligence. No trade execution. No manufactured investment
              recommendations.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[500/500] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:aspect-[500/556]"
        >
          <Image
            src="/images/solutions/investment-professionals/ip-hero-standing-group.webp"
            alt="Four colleagues talking together in a bright office atrium"
            fill
            priority
            sizes="(min-width: 1280px) 500px, (min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
