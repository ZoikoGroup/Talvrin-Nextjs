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
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,580px)_minmax(0,500px)] lg:justify-between lg:gap-10">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Product</SectionEyebrow>
            <p className="mt-4 text-base font-semibold text-indigo-300">
              Keep research connected to the evidence that changes.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl sm:leading-[1.24]">
              Watchlists &amp; Alerts
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[580px] text-lg leading-7 text-white/80">
              Talvrin is designed to let researchers organize the topics and evidence sources they
              follow, preserve their research context, and understand when relevant source
              information changes. Alerts are research prompts, not trading instructions or
              guarantees that every change will be detected.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <LinkButton href="/product/overview" variant="onDark" className="px-7 py-[15px] text-base">
              Explore the Product
            </LinkButton>
            <Link
              href="/how-talvrin-works"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              How Talvrin Works
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-[580px] text-sm text-white/60">
              Public descriptions are conceptual until approved watchlist and notification services
              are released. Neither an alert nor its absence is financial advice.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[500/436] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        >
          <Image
            src={`${IMG}/wa-hero-notes.webp`}
            alt="Smiling researcher taking notes at a desk"
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
