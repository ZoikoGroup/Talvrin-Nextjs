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
            <SectionEyebrow tone="amber">Developers · Changelog</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Changelog
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[560px] text-lg leading-8 text-white/80">
              Developer-facing changes across approved Talvrin developer surfaces, with impact,
              timing, required action, and links to authoritative documentation.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <LinkButton href="#change-stream" variant="onDark">
              Browse latest changes
            </LinkButton>
            <Link
              href="/developers/api-documentation"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              API Documentation
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-7 max-w-[540px] text-sm leading-6 text-white/60">
              For live service health, use{" "}
              <Link href="/developers/status" className="text-indigo-300 hover:text-white">
                Developer Status →
              </Link>{" "}
              For current API, data, authentication, and SDK behavior, the respective documentation
              stays authoritative.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f0c29]"
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-white/5 px-5 py-3">
            <span className="font-mono text-xs text-white/60">changelog.latest</span>
            <span className="rounded-full bg-orange-300 px-2.5 py-[3px] font-mono text-xs font-bold tracking-wide text-ink">
              SPECIMEN
            </span>
          </div>
          <div className="relative aspect-[690/472] w-full">
            <Image
              src="/images/developers/changelog/changelog-hero-handshake.webp"
              alt="Two colleagues shaking hands across a café table"
              fill
              priority
              sizes="(min-width: 1024px) 690px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
