import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { IMAGE_DIR } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-[108px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(700px 520px at 16% 6%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 95% 100%, rgba(185,129,50,0.08), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,578px)_minmax(0,500px)] lg:justify-between">
        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent-violet">
              Solutions / Individual Investors
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-6">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.56px] text-white sm:text-5xl lg:text-[58px] lg:leading-[63.8px]">
              Research public markets with evidence you can inspect.
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="mt-6 max-w-[560px] space-y-4">
            <p className="text-lg leading-8 text-white/70">
              Build a view you can revisit. Know when the evidence changes.
            </p>
            <p className="text-base leading-[26px] text-white/60">
              Talvrin helps serious individual investors move beyond fragmented news, isolated
              commentary, and disposable AI answers by connecting research questions to source-linked
              evidence, context, a preserved research view, and continuous monitoring.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <LinkButton href="/product/overview" variant="onDark" className="px-7 py-[15px] text-base">
              Explore Talvrin
            </LinkButton>
            <Link
              href="/product/how-talvrin-works"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              See How Talvrin Works →
            </Link>
          </Reveal>

          <Reveal delay={0.4} className="mt-6 max-w-[560px]">
            <p className="text-sm leading-[19px] text-white/60">
              Research and intelligence platform. No trade execution. No stock tips. No manufactured
              investment recommendations.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[500/556] w-full max-w-[500px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:mx-0"
        >
          <Image
            src={`${IMAGE_DIR}/individual-investors-hero-analysts.webp`}
            alt="Three investors reviewing printed charts and a laptop together"
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
