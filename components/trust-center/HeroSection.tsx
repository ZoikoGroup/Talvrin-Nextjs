import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export const IMAGE_DIR = "/images/trust/trust-center";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-[115px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(800px 560px at 14% 4%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-10 xl:grid-cols-[minmax(0,578px)_minmax(0,480px)] xl:justify-between">
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent-amber">Trust Center</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="pt-1 text-4xl font-bold leading-[1.08] tracking-[-0.56px] text-white sm:text-5xl lg:text-6xl lg:leading-[61.6px]">
              Trust should be <br className="hidden sm:block" />
              inspectable.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-[560px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Talvrin&apos;s Trust Center is the public entry point for understanding how the platform
              approaches evidence provenance, governed data use, data rights, security, privacy, global
              data governance, responsible AI, and operational transparency.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div
              role="note"
              className="flex max-w-[560px] flex-col gap-2.5 rounded-xl border border-white/20 bg-white/5 px-5 pb-5 pt-6"
            >
              <p className="text-sm font-bold leading-6 text-white">
                A platform built around evidence must itself be open to scrutiny. Talvrin publishes
                material trust claims only when their scope, owner, evidence basis and review state are
                approved.
              </p>
              <p className="text-sm leading-5 text-white/70">
                Research and intelligence platform. No trade execution. No manufactured investment
                recommendations. AI assistance does not become the evidence.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-col items-stretch gap-4 pt-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#trust-domains"
              className="rounded-lg bg-surface px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore Trust Domains
            </a>
            <Link
              href="/trust/evidence-standards"
              className="rounded-lg border border-white/30 px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
            >
              Evidence Standards →
            </Link>
          </Reveal>

          <Reveal delay={0.35}>
            <Link
              href="/support/system-status"
              className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              Check current service status →
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[480/601] w-full max-w-[480px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:mx-0"
        >
          <Image
            src={`${IMAGE_DIR}/trust-center-hero-coffee.webp`}
            alt="A smiling woman sipping coffee at a desk with a notebook and laptop"
            fill
            priority
            sizes="(min-width: 1280px) 480px, (min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
