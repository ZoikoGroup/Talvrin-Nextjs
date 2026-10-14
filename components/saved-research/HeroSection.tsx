import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#171335] py-16 sm:py-20 lg:py-24">
      {/* Background radial gradient overlay matching Figma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(640px 480px at 15% 10%, rgba(108, 92, 231, 0.22), rgba(108, 92, 231, 0) 65%), radial-gradient(540px 400px at 90% 85%, rgba(185, 129, 50, 0.16), rgba(185, 129, 50, 0) 60%)",
        }}
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-12 xl:grid-cols-[570px_520px] xl:justify-between">
        {/* Left column */}
        <div className="flex flex-col">
          <Reveal>
            <div className="text-[13px] font-bold uppercase tracking-[1.2px] text-[#b98132]">
              PRODUCT / Saved Research
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight text-[#f6f5fb] sm:text-5xl lg:text-[56px]">
              Return to research
              <br />
              with its evidence
              <br />
              intact.
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-[540px] text-base leading-relaxed text-[#f6f5fb]/75 sm:text-[19px] sm:leading-[1.58]">
              Keep important questions, research views, source references and supporting context connected so you can return to the reasoning behind a view — not just the latest summary.
            </p>
          </Reveal>

          {/* Buttons Row */}
          <Reveal
            delay={0.2}
            className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="/request-access"
              className="inline-flex items-center justify-center rounded-lg bg-[#f6f5fb] px-7 py-3.5 text-base font-semibold text-[#171335] transition-all duration-200 hover:bg-white hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request Access
            </Link>
            <Link
              href="/how-talvrin-works"
              className="inline-flex items-center justify-center rounded-lg border border-[#f6f5fb]/30 px-7 py-3.5 text-base font-semibold text-[#f6f5fb] transition-all duration-200 hover:border-white/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See How Talvrin Works →
            </Link>
          </Reveal>

          {/* Footnote */}
          <Reveal delay={0.25} className="mt-7">
            <p className="max-w-[540px] text-sm leading-snug text-[#f6f5fb]/55">
              Know what evidence supported the view, when it was recorded, and what requires reassessment.
            </p>
          </Reveal>
        </div>

        {/* Right column: Image Frame */}
        <Reveal delay={0.2} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl border border-[#f6f5fb]/14 bg-[#f6f5fb]/[0.04] p-1 shadow-2xl backdrop-blur-sm">
            <div className="relative aspect-[520/480] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/saved-research/saved-research-hero.webp"
                alt="Return to research with its evidence intact"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
