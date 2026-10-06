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
              Trust / Data Rights
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="pt-1.5 text-4xl font-bold leading-[1.08] tracking-[-0.56px] text-white sm:text-5xl lg:text-6xl lg:leading-[61.6px]">
              Use evidence within the rights that govern it.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-[560px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Talvrin treats licensing, entitlement and permitted-use requirements as part of evidence
              governance. Access to a source is not the same as permission to display, redistribute,
              retain or expose it in every context.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p
              role="note"
              className="max-w-[560px] rounded-[10px] border border-white/20 bg-white/5 px-4 pb-3.5 pt-4 text-sm font-bold leading-6 text-white"
            >
              Rights state is governed. Talvrin does not assume a right merely because a source can be
              discovered or accessed.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-col items-stretch gap-4 pt-3.5 sm:flex-row sm:items-center">
            <a
              href="#rights-states"
              className="rounded-lg bg-surface px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Understand rights states
            </a>
            <Link
              href="/trust/data-sources"
              className="rounded-lg border border-white/30 px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
            >
              Explore Data Sources →
            </Link>
          </Reveal>

          <Reveal delay={0.35}>
            <Link
              href="/trust/evidence-standards"
              className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              See Evidence Standards →
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[480/573] w-full max-w-[480px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:mx-0 lg:mt-2"
        >
          <Image
            src={`${IMAGE_DIR}/data-rights-hero-team.webp`}
            alt="A smiling team in discussion around a meeting table"
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
