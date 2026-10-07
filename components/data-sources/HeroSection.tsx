import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMAGE_DIR } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-[115px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(800px 560px at 14% 4%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-10 xl:grid-cols-[minmax(0,578px)_minmax(0,480px)] xl:justify-between">
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent-amber">
              Trust / Data Sources
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="pt-1.5 text-4xl font-bold leading-[1.08] tracking-[-0.56px] text-white sm:text-5xl lg:text-6xl lg:leading-[61.6px]">
              Know where the information came from.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-[560px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Talvrin is designed to use governed source and data inputs, including authoritative
              sources and appropriately licensed information where applicable. Source identity,
              provenance, timing, jurisdiction, version and access state should remain inspectable
              wherever they materially affect the research.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p
              role="note"
              className="max-w-[560px] rounded-[10px] border border-white/20 bg-white/5 px-4 pb-3.5 pt-4 text-sm font-bold leading-6 text-white"
            >
              Exact providers and live coverage appear only when registry-backed and publicly approved
              — never inferred from platform architecture.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-col items-stretch gap-4 pt-3.5 sm:flex-row sm:items-center">
            <Link
              href="/trust/evidence-standards"
              className="rounded-lg bg-surface px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore Evidence Standards
            </Link>
            <Link
              href="/trust/data-rights"
              className="rounded-lg border border-white/30 px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
            >
              Understand Data Rights →
            </Link>
          </Reveal>

          <Reveal delay={0.35}>
            <a
              href="#source-model"
              className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              See how the source model works →
            </a>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[480/597] w-full max-w-[480px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:mx-0 lg:mt-4"
        >
          <Image
            src={`${IMAGE_DIR}/data-sources-hero-reception.webp`}
            alt="A professional chatting with a colleague at an office reception desk"
            fill
            priority
            sizes="(min-width: 1280px) 480px, (min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
