import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export const IMAGE_DIR = "/images/solutions/wealth-advisory-research";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-[97px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(700px 520px at 16% 6%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 95% 100%, rgba(185,129,50,0.08), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-10 xl:grid-cols-[minmax(0,578px)_minmax(0,500px)] xl:justify-between">
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent-violet">
              Solutions / Wealth &amp; Advisory Research
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="pt-1 text-4xl font-bold leading-[1.08] tracking-[-0.56px] text-white sm:text-5xl lg:text-[58px] lg:leading-[63.8px]">
              Strengthen the evidence behind professional analysis and client research processes.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-[560px] text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Talvrin connects public-market questions to source-linked evidence, preserves the
              reasoning behind a professional research view, and monitors what changes next.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-col items-stretch gap-4 pt-3 sm:flex-row sm:flex-wrap sm:items-center">
            <LinkButton href="/request-access" variant="onDark" className="px-7 py-[15px] text-base">
              Request Access
            </LinkButton>
            <a
              href="#research-workflow"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              See How It Works →
            </a>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="max-w-[560px] text-sm leading-5 text-white/60">
              Research and intelligence. No personalized financial advice. No suitability. No financial
              planning. No trade execution.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[500/614] w-full max-w-[500px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:mx-0"
        >
          <Image
            src={`${IMAGE_DIR}/wealth-advisory-hero-meeting.webp`}
            alt="An adviser and a client reviewing documents together at a desk"
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
