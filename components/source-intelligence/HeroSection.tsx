import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "../alerts/shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-24 lg:py-[100px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 16% 6%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 90% 82%, rgba(185,129,50,0.14), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-10 xl:grid-cols-[minmax(0,570px)_minmax(0,480px)] xl:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Product / Source Intelligence</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
              Understand the source behind every research view.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[540px] text-base leading-7 text-white/70 sm:mt-6 sm:text-lg sm:leading-8">
              Talvrin is designed to connect market observations to inspectable
              source material — making provenance, dates, jurisdiction, versions
              and relevant context visible before a researcher relies on an
              interpretation.
            </p>
          </Reveal>

          <Reveal
            delay={0.25}
            className="mt-6 max-w-[560px] rounded-xl border border-white/20 bg-white/5 px-5 py-5"
          >
            <p className="text-xs font-bold tracking-wide text-indigo-300">ONE-LINE DEFINITION</p>
            <p className="mt-2 text-sm leading-6 text-white sm:text-base">
              Source Intelligence is the source-context layer that helps
              researchers discover, inspect, compare and revisit the evidence
              behind a public-market question.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <LinkButton href="/request-access" variant="onDark" className="px-7 py-[15px]">
              Request Access
            </LinkButton>
            <Link
              href="/product/how-talvrin-works"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              See How Talvrin Works →
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-[570px] text-sm text-white/60">
              Research and intelligence. Source identity, timing and rights are
              shown as confirmed by the registry — never inferred to look
              complete.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[480/541] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:aspect-[4/3] lg:aspect-[480/541]"
        >
          <Image
            src="/images/product/source-intelligence/source-intelligence-hero-laptop-cafe.webp"
            alt="Smiling professional working on a laptop at a café table"
            fill
            priority
            sizes="(min-width: 1280px) 480px, (min-width: 1024px) 440px, 100vw"
            className="object-cover object-[center_30%]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
