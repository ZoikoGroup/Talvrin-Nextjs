import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export const IMAGE_DIR = "/images/trust/privacy";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-[114px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(800px 560px at 14% 4%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-10 xl:grid-cols-[minmax(0,578px)_minmax(0,540px)] xl:justify-between">
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent-amber">Trust / Privacy</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="pt-1 text-4xl font-bold leading-[1.08] tracking-[-0.56px] text-white sm:text-5xl lg:text-6xl lg:leading-[61.6px]">
              Privacy that is clear about what is known — and what still requires an authoritative
              notice.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-[560px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Talvrin&apos;s supplied privacy principle is to minimize unnecessary collection and
              provide clear controls. This page explains the public privacy architecture and routes to
              approved privacy notices and controls when available.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p
              role="note"
              className="max-w-[560px] rounded-[10px] border border-white/20 bg-white/5 px-4 py-3.5 text-sm font-bold leading-6 text-white"
            >
              Boundary: Talvrin does not state specific data categories, legal bases, retention
              periods, transfer mechanisms or rights on this page unless approved source material
              establishes them.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-col items-stretch gap-4 pt-3 sm:flex-row sm:items-center">
            <a
              href="#controls"
              className="rounded-lg bg-surface px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Review Privacy Controls
            </a>
            <Link
              href="/trust/trust-center"
              className="rounded-lg border border-white/30 px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
            >
              Explore Trust Center →
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[540/719] w-full max-w-[540px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:mx-0"
        >
          <Image
            src={`${IMAGE_DIR}/privacy-hero-colleagues.webp`}
            alt="Two colleagues laughing together in a bright office"
            fill
            priority
            sizes="(min-width: 1280px) 540px, (min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
