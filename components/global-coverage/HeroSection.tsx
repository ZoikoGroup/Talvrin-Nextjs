import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { IMG, SectionEyebrow } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(640px 440px at 16% 6%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 88% 88%, rgba(185,129,50,0.10), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,638px)_minmax(0,471px)] lg:justify-between lg:gap-10">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Global / Global Coverage</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Global Coverage
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 max-w-[500px] text-lg leading-8 text-white/70">
              Global market coverage, evidence rights, and availability by jurisdiction.
            </p>
            <p className="mt-3 max-w-[620px] text-base leading-6 text-white/60">
              Talvrin is building a source-linked research and monitoring workspace for global
              public markets. The architecture is global; what is released is specific and
              disclosed here, region by region.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <LinkButton href="/markets/market-coverage" variant="onDark" className="px-7 py-[15px] text-base">
              View Current Market Coverage
            </LinkButton>
            <Link
              href="/how-talvrin-works"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              How Talvrin Works
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-[620px] text-xs leading-[18px] text-white/50">
              Market, source, language, and access availability depend on published verification.
              Research is not trade execution or investment advice.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[471/392] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={`${IMG}/coverage-hero-greeting.webp`}
            alt="Two colleagues greeting each other in a bright office with a waterfront view"
            fill
            priority
            sizes="(min-width: 1024px) 471px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
