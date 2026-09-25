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
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-12">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Developers · Developer Status</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Developer Status
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[560px] text-lg leading-8 text-white/80">
              Current operational status for approved public Talvrin developer-facing services,
              incidents, and maintenance.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <LinkButton href="#component-status" variant="onDark">
              View component status
            </LinkButton>
            <Link
              href="#component-status"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Incident history
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-7 max-w-[540px] text-sm leading-6 text-white/60">
              Operational status is separate from authentication, authorization, entitlement, data
              coverage, API/SDK lifecycle, and your local configuration.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[655/467] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        >
          <Image
            src="/images/developers/developer-status/developer-status-hero-team.webp"
            alt="Three colleagues reviewing a tablet together at a desk"
            fill
            priority
            sizes="(min-width: 1024px) 655px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
