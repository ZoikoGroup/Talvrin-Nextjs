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
      <Container className="relative grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-10 xl:grid-cols-[minmax(0,570px)_minmax(0,500px)] xl:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">German Bunds</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
              German Bunds: research the evidence behind German federal borrowing.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[540px] text-base leading-7 text-white/70 sm:mt-6 sm:text-lg sm:leading-8">
              Explore the market through source-linked issuance, policy and
              economic context — subject to verified, permitted coverage. Inspect
              the provenance and time period behind each source before forming a
              research view.
            </p>
            <p className="mt-4 max-w-[520px] text-sm leading-5 text-white/50">
              This is a research destination, not a trading terminal or
              brokerage interface. Coverage is a governed product fact, shown
              before any explorer or CTA.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <LinkButton href="#evidence-explorer" variant="onDark" className="px-7 py-[15px]">
              View Available Evidence
            </LinkButton>
            <Link
              href="/markets/market-coverage"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              View Market Coverage
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-[570px] text-sm text-white/60">
              Research and intelligence platform. No live Bund yields, prices,
              auction results, or investment recommendations.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[500/575] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:aspect-[4/3] lg:aspect-[500/575]"
        >
          <Image
            src="/images/markets/german-bunds/german-bunds-hero-team.webp"
            alt="Four professionals in business attire standing together in an office"
            fill
            priority
            sizes="(min-width: 1280px) 500px, (min-width: 1024px) 440px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
