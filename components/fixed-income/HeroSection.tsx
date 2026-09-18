import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[108px] pb-[86px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 16% 6%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 90% 82%, rgba(185,129,50,0.14), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,570.4px)_minmax(0,500px)] lg:gap-x-[99.2px]">
        <div>
          <Reveal>
            <p className="text-[13px] font-bold uppercase tracking-[1.17px] text-accent-amber">
              Markets / Fixed Income
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-[23.2px]">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.6px] text-white sm:text-5xl lg:text-[60px] lg:leading-[64.8px]">
              Understand the evidence behind rates and sovereign-market views.
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="mt-[23.2px]">
            <p className="max-w-[540px] text-[19px] leading-[30.4px] text-white/72">
              Talvrin connects fixed-income research questions to source-linked policy, sovereign,
              macro, and governed market evidence — then keeps the research connected to what
              changes next.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-4">
            <p className="max-w-[520px] text-sm leading-[21.7px] text-white/50">
              Coverage varies by market, jurisdiction, source rights, and released capability.
            </p>
          </Reveal>

          <Reveal
            delay={0.4}
            className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <LinkButton href="/request-access" variant="onDark">
              Explore Fixed Income
            </LinkButton>
            <a
              href="/markets/market-coverage"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              View Market Coverage →
            </a>
          </Reveal>

          <Reveal delay={0.5} className="mt-5">
            <p className="max-w-[520px] text-sm text-white/55">
              Research and intelligence platform. No trade execution. No manufactured bond
              recommendations.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mt-[41.4px] aspect-[500/513.8] w-full overflow-hidden rounded-2xl border border-white/14 bg-white/4"
        >
          <Image
            src="/images/fixed-income/fixed-income-hero-team.webp"
            alt="A research team reviewing fixed-income evidence together in an office"
            fill
            priority
            sizes="(min-width: 1024px) 500px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
