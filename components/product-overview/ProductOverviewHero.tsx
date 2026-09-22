import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function ProductOverviewHero() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 16% 6%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 90% 82%, rgba(185,129,50,0.14), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-10 xl:grid-cols-[minmax(0,570px)_minmax(0,520px)] xl:justify-between">
        <div>
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-amber-500">
              PRODUCT OVERVIEW
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-3 text-sm font-medium text-[#B4A8FF]">
              The evidence layer for global public markets.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
              See the evidence. Build the view. Know when it changes.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[540px] text-lg leading-8 text-white/72">
              Talvrin connects questions, source-linked evidence, context,
              research views, and continuous monitoring in one research platform
              — so users can understand what the evidence says, why it matters,
              and when it changes.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <LinkButton href="/explore-talvrin" variant="onDark">
              Explore Talvrin
            </LinkButton>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              See How Talvrin Works →
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-lg text-sm text-white/50">
              Research and intelligence platform. No trade execution. No
              manufactured investment recommendations.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[520/460] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl"
        >
          <Image
            src="/images/product/overview/hero.png"
            alt="Top-down view of a team collaborating around a wooden meeting table with laptops, tablets, and notes"
            fill
            priority
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
