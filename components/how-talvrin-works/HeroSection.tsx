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

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-12 xl:grid-cols-[570px_460px] xl:justify-between">
        {/* Left column */}
        <div className="flex flex-col">
          <Reveal>
            <div className="text-[13px] font-bold uppercase tracking-[1.2px] text-[#b98132]">
              PRODUCT / How Talvrin Works
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight text-[#f6f5fb] sm:text-5xl lg:text-[56px]">
              From a market
              <br />
              question to a
              <br />
              monitored research
              <br />
              view.
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 max-w-[540px] text-base leading-relaxed text-[#f6f5fb]/72 sm:text-[19px] sm:leading-[1.5]">
              Ask a question, inspect the source evidence, preserve the reasoning behind your view, and return when meaningful information changes.
            </p>
          </Reveal>

          {/* One-Line Definition Box */}
          <Reveal delay={0.2} className="mt-6 max-w-[560px]">
            <div className="rounded-xl border border-[#f6f5fb]/16 bg-[#f6f5fb]/[0.05] p-5 sm:p-6 backdrop-blur-sm">
              <span className="block text-[11px] font-bold uppercase tracking-[0.77px] text-[#b4a8ff]">
                ONE-LINE DEFINITION
              </span>
              <p className="mt-2 text-sm leading-6 text-[#f6f5fb] sm:text-base">
                Talvrin is designed around an evidence-led process: Ask → Discover → Inspect → Build → Monitor → Reassess.
              </p>
            </div>
          </Reveal>

          {/* Buttons Row */}
          <Reveal
            delay={0.25}
            className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="/request-access"
              className="inline-flex items-center justify-center rounded-lg bg-[#f6f5fb] px-7 py-3.5 text-base font-semibold text-[#171335] transition-all duration-200 hover:bg-white hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request Access
            </Link>
            <Link
              href="/product/research-workspace"
              className="inline-flex items-center justify-center rounded-lg border border-[#f6f5fb]/30 px-7 py-3.5 text-base font-semibold text-[#f6f5fb] transition-all duration-200 hover:border-white/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore Research Workspace →
            </Link>
          </Reveal>

          {/* Footnote */}
          <Reveal delay={0.3} className="mt-6">
            <p className="text-sm leading-snug text-[#f6f5fb]/55">
              Research and intelligence. No trade execution. No manufactured investment recommendations.
            </p>
          </Reveal>
        </div>

        {/* Right column: Image Frame */}
        <Reveal delay={0.2} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[460px] overflow-hidden rounded-2xl border border-[#f6f5fb]/14 bg-[#f6f5fb]/[0.04] p-1 shadow-2xl backdrop-blur-sm">
            <div className="relative aspect-[460/575] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/how-talvrin-works/hero-research-view.png"
                alt="From a market question to a monitored research view"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
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
