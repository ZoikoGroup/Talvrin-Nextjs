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
            "radial-gradient(640px 440px at 16% 6%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 88% 88%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)] lg:gap-10 xl:grid-cols-[minmax(0,608px)_minmax(0,606px)] xl:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Developers · Integrations</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl font-bold leading-[1.14] tracking-tight text-white sm:text-5xl lg:text-[48px]">
              Connect Talvrin to the systems in your research workflow — once a connection is real,
              not before.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[560px] text-lg leading-7 text-white/70">
              This is the intended home for released Talvrin integrations — with capability,
              direction, permissions, provenance, rights, version, and operational state always kept
              visible. Catalog content will publish only from the approved Integration Registry,
              never authored ahead of it.
            </p>
          </Reveal>

          <Reveal
            delay={0.25}
            className="mt-5 max-w-[560px] rounded-[10px] border border-white/20 bg-white/5 px-4 pb-3.5 pt-5"
          >
            <p className="text-sm font-bold leading-5 text-white">
              No integrations are currently published to this catalog.{" "}
              <span className="text-white/80">
                Nothing below should be read as confirming a provider, connection, or capability.
              </span>
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <LinkButton href="/developers/api-documentation" variant="onDark">
              View API Documentation
            </LinkButton>
            <Link
              href="/developers/overview"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Return to Developer Overview
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-lg text-sm text-white/60">
              Research and intelligence platform. No trade execution. No manufactured investment
              recommendations.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[606/520] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:aspect-[606/755]"
        >
          <Image
            src="/images/developers/integrations/integrations-hero-team.webp"
            alt="Team celebrating together around a desk in an office"
            fill
            priority
            sizes="(min-width: 1280px) 606px, (min-width: 1024px) 430px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
