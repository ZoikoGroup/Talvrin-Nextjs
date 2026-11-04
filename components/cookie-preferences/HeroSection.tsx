import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG } from "./shared";
import { CONSENT_VERSION } from "./consent";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20 lg:py-[100px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(900px 560px at 14% 4%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%)",
        }}
      />

      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,698px)_minmax(0,450px)] lg:justify-center lg:gap-10">
        <div className="flex flex-col items-start gap-3.5">
          <Reveal className="pt-2.5">
            <p className="text-xs font-bold uppercase tracking-wide text-accent-amber">
              Talvrin / Cookie Preferences
            </p>
          </Reveal>

          <Reveal delay={0.1} className="pt-2.5">
            <h1 className="text-4xl font-bold leading-[1.15] text-surface sm:text-5xl sm:leading-[57.2px]">
              Cookie Preferences
            </h1>
          </Reveal>

          <Reveal delay={0.15} className="max-w-[680px] pt-1">
            <p className="text-base leading-7 text-surface/90 sm:text-lg">
              Review and manage optional cookie choices for TALVRIN. Available categories reflect the
              technologies actually in use. Your selection must take effect and be saved before this
              page confirms success.
            </p>
          </Reveal>

          <Reveal
            delay={0.2}
            className="w-full max-w-[680px] rounded-[10px] border border-surface/20 bg-surface/5 px-4 py-3.5"
          >
            <p className="text-sm leading-5 text-surface/75">
              The applicable policy and available controls reflect TALVRIN&apos;s verified deployment,
              jurisdiction and approved document version — nothing here is assumed ahead of that.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="flex flex-wrap items-center gap-2.5 pt-3.5">
            <span className="rounded-full border border-surface/20 bg-surface/10 px-3 py-1 text-xs font-bold text-surface">
              Version {CONSENT_VERSION}
            </span>
            <span className="text-sm text-surface/60">
              Document TAL-LEGAL-03 · interactive prototype, pending full Legal/Privacy/Engineering
              sign-off
            </span>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[450/360] w-full max-w-[450px] overflow-hidden rounded-2xl bg-white lg:mx-0"
        >
          <Image
            src={`${IMG}/hero-tablet-review.webp`}
            alt="Two colleagues reviewing settings together on a tablet"
            fill
            priority
            sizes="(min-width: 1024px) 450px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
