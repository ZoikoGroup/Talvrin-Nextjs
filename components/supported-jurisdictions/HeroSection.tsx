import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { IMG, SectionEyebrow } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(640px 440px at 14% 4%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 88% 88%, rgba(185,129,50,0.10), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,600px)_minmax(0,500px)] lg:justify-between lg:gap-10">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Markets / Supported Jurisdictions</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.03]">
              Understand where coverage is confirmed — not just where it&apos;s architecturally
              possible.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[600px] text-lg leading-7 text-white/80">
              Talvrin is designed for global public-markets research. The jurisdictions, data
              types and use rights available to any user depend on source coverage, licensing,
              operating readiness and entitlement.
            </p>
            <p className="mt-3.5 max-w-[560px] text-sm leading-5 text-white/50">
              This page explains how to tell what has actually been released, jurisdiction by
              jurisdiction. It is informational — not a representation that any particular
              jurisdiction is currently supported for trading, custody or investment-advisory
              purposes.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-6">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-[5px] text-xs font-bold text-white">
              Last reviewed by the Talvrin coverage team: 28 Aug 2026
            </span>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <LinkButton href="#explorer" variant="onDark" className="px-7 py-[15px] text-base">
              Explore Verified Coverage
            </LinkButton>
            <Link
              href="/how-talvrin-works"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Learn How Talvrin Works
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[500/603] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        >
          <Image
            src={`${IMG}/jurisdictions-hero-briefing.webp`}
            alt="Analyst explaining a chart to colleagues around a laptop"
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
