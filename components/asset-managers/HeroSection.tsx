import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#171335] pt-24 pb-16 lg:pt-[108px] lg:pb-[96px]">
      {/* Radial Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_6%,rgba(108,92,231,0.22)_0%,transparent_65%),radial-gradient(circle_at_85%_90%,rgba(185,129,50,0.12)_0%,transparent_60%)]"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-[26px] xl:gap-[34px]">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start">
            <Reveal>
              <p className="text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wide text-[#B98132]">
                SOLUTIONS / ASSET MANAGERS
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-4">
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#F6F5FB] font-['IBM_Plex_Sans'] sm:text-5xl lg:text-[56px] xl:text-[60px] lg:leading-[64px]">
                Keep investment<br className="hidden sm:inline" /> research connected<br className="hidden sm:inline" /> to the evidence —<br className="hidden sm:inline" /> and know when the<br className="hidden sm:inline" /> evidence changes.
              </h1>
            </Reveal>

            <Reveal delay={0.2} className="mt-6">
              <p className="max-w-[560px] text-base sm:text-lg font-normal leading-relaxed text-[#F6F5FB]/70 font-['IBM_Plex_Sans']">
                Talvrin helps asset-management organizations make public-<br className="hidden sm:inline" />market research more systematic, traceable, reviewable,<br className="hidden sm:inline" />reusable, and continuously monitorable across investment<br className="hidden sm:inline" />workflows.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/request-access"
                className="inline-flex h-[52px] items-center justify-center rounded-[10px] bg-[#F6F5FB] px-7 text-base font-semibold text-[#171335] font-['IBM_Plex_Sans'] transition-colors hover:bg-white shadow-sm"
              >
                Request Access
              </Link>
              <Link
                href="/product/overview"
                className="group inline-flex h-[52px] items-center justify-center gap-2 rounded-[10px] border border-[#F6F5FB]/30 px-7 text-base font-semibold text-[#F6F5FB] font-['IBM_Plex_Sans'] transition-colors hover:border-[#F6F5FB]/60 hover:bg-[#F6F5FB]/10"
              >
                <span>See How It Works</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Reveal>

            <Reveal delay={0.4} className="mt-6">
              <p className="max-w-[560px] text-xs sm:text-sm font-normal text-[#F6F5FB]/60 font-['IBM_Plex_Sans'] leading-normal">
                Research and intelligence. No portfolio management. No trade execution. No manufactured investment recommendations.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Hero Image */}
          <div className="flex justify-center lg:justify-end w-full">
            <Reveal delay={0.2} className="w-full max-w-[500px]">
              <div className="relative aspect-[500/556] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
                <Image
                  src="/asset-managers/image 71.png"
                  alt="Asset managers collaborating over evidence and market research"
                  fill
                  priority
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
