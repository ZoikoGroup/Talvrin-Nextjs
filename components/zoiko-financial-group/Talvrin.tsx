import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Talvrin() {
  const steps = ["ASK", "DISCOVER", "INSPECT", "BUILD", "MONITOR", "REASSESS"];

  return (
    <section className="w-full bg-[#171335] py-20 lg:py-24 relative overflow-hidden text-white border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(108,92,231,0.12)_0%,transparent_50%)]" />
      <Container className="relative z-10 max-w-[1200px]">
        <div className="flex flex-col items-start max-w-[840px]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-wide text-[#B98132] font-['IBM_Plex_Sans']">
              TALVRIN
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] lg:leading-[50px] font-bold text-[#F6F5FB] font-['IBM_Plex_Sans']">
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Source-linked research and
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                monitoring for global public markets.
              </span>
            </h2>

            <div className="mt-6 flex flex-col gap-4 text-sm sm:text-base text-[#F6F5FB]/75 font-['IBM_Plex_Sans'] leading-relaxed">
              <p>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Talvrin is designed to help users discover evidence, inspect underlying sources, understand
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  market developments, build research views, and monitor important information for meaningful
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  changes.
                </span>
              </p>
              <p>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  The product model connects a research question to evidence, context, a preserved view, and
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  continued reassessment.
                </span>
              </p>
            </div>
          </Reveal>

          {/* 6-step pill flow */}
          <Reveal delay={0.2} className="mt-8 w-full">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {steps.map((step, idx) => (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <div className="px-4 py-2 bg-white/[0.04] rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-xs font-semibold tracking-wider text-[#F6F5FB] font-['IBM_Plex_Sans']">
                      {step}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <span className="text-white/30 text-xs font-light" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Action Links */}
          <Reveal delay={0.3} className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/product/overview"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B4A8FF] font-['IBM_Plex_Sans'] hover:underline"
            >
              <span>Explore Talvrin</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0 transition-transform group-hover:translate-x-1 text-[#B4A8FF]"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link
              href="/about-talvrin"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B4A8FF] font-['IBM_Plex_Sans'] hover:underline"
            >
              <span>About Talvrin</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0 transition-transform group-hover:translate-x-1 text-[#B4A8FF]"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}