import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 16% 8%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 90% 82%, rgba(185,129,50,0.14), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,570px)_minmax(0,500px)] lg:gap-x-[100px]">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Product / Watchlists</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[52px]">
              Keep the research that matters in view.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-white/72">
              Talvrin Watchlists are designed to organize the public-market research contexts you
              choose to follow, keeping the path back to the research, evidence, and approved
              monitoring state close at hand instead of scattered across tabs and documents.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <LinkButton href="/request-access" variant="onDark">
              Request Access
            </LinkButton>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              See a Watchlist Example →
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-lg text-sm text-white/50">
              Research organization, not a brokerage portfolio. Watchlist membership does not
              imply ownership, recommendation, or live market coverage.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[520/401] w-full overflow-hidden rounded-2xl border border-white/14 bg-white/4"
        >
          <Image
            src="/images/product/watchlist/Overlay+Border.webp"
            alt="Two analysts reviewing research on a tablet in a meeting room"
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
