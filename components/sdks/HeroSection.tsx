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
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-10 xl:grid-cols-[minmax(0,607px)_minmax(0,584px)] xl:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Developers · SDKs</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl font-bold leading-[1.14] tracking-tight text-white sm:text-5xl lg:text-[48px]">
              Client libraries for Talvrin, published only once a language is actually released.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[560px] text-lg leading-7 text-white/70">
              SDKs are versioned wrappers around the Talvrin API family. Package identity,
              compatibility, and install commands resolve from one approved SDK Registry — never a
              popular-language guess.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 py-2 pl-3.5 pr-4 text-sm text-white/80">
              <span className="size-2 shrink-0 rounded-sm bg-accent-amber" aria-hidden="true" />
              No SDK, in any language or runtime, is currently published.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <LinkButton href="/developers/api-documentation" variant="onDark">
              API Documentation
            </LinkButton>
            <Link
              href="/developers/authentication"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Authentication
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-lg text-sm text-white/60">
              SDK availability never implies API entitlement, data rights, or market coverage.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[584/500] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:aspect-[584/559]"
        >
          <Image
            src="/images/developers/SDKs/sdks-hero-team.webp"
            alt="Developers reviewing code together at a desk"
            fill
            priority
            sizes="(min-width: 1280px) 584px, (min-width: 1024px) 460px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
