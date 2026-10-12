import Image from "next/image";

export default function PolicyRegulationHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#171335]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-16 xl:px-20 xl:py-24">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* LEFT CONTENT */}
          <div className="flex w-full max-w-[578px] flex-col items-start gap-4">
            {/* Eyebrow */}
            <div className="flex w-full flex-col items-start">
              <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-[#F6A942]">
                RESEARCH / POLICY &amp; REGULATION
              </p>
            </div>

            {/* Heading */}
            <div className="w-full pt-1.5">
              <h1 className="font-['IBM_Plex_Sans'] text-[34px] font-bold leading-[1.08] text-[#F7F4FF] sm:text-[44px] lg:text-[46px] lg:leading-[1.12] xl:text-[60px] xl:leading-[63.8px]">
                Track policy and
                <br className="hidden sm:block lg:hidden xl:block" />
                {" "}regulation back to
                <br className="hidden sm:block lg:hidden xl:block" />
                {" "}the source.
              </h1>
            </div>

            {/* Description */}
            <div className="w-full max-w-[560px] pt-2">
              <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-[#F7F4FF]/70 sm:text-lg sm:leading-8">
                Talvrin Policy &amp; Regulation organizes official policy
                decisions, regulatory notices and consultations for
                public-market research — keeping authority, jurisdiction,
                timing, version and source provenance visible.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="w-full max-w-[540px]">
              <p className="font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-[#F7F4FF]/60 sm:text-base">
                Research and market intelligence — not legal advice,
                compliance certification or investment recommendations.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex w-full flex-col items-stretch gap-3 pt-4 sm:w-auto sm:flex-row sm:items-start sm:gap-4">
              <a
                href="#coverage-browse"
                className="rounded-lg bg-[#F7F4FF] px-7 py-4 text-center font-['IBM_Plex_Sans'] text-base font-semibold text-[#171335] transition-opacity hover:opacity-90"
              >
                Explore Policy &amp; Regulation
              </a>

              <a
                href="/research/talvrin-methodology"
                className="rounded-lg border border-[#F7F4FF]/30 px-7 py-4 text-center font-['IBM_Plex_Sans'] text-base font-semibold text-[#F7F4FF] transition-colors hover:bg-[#F7F4FF]/10"
              >
                See Talvrin Methodology →
              </a>
            </div>

            {/* Bottom disclaimer */}
            <div className="w-full pt-1">
              <p className="font-['IBM_Plex_Sans'] text-xs font-normal leading-5 text-[#F7F4FF]/60 sm:text-sm sm:leading-6">
                Research and market intelligence. No legal advice. No trade
                execution. No manufactured buy/sell/hold recommendations.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-none xl:max-w-[608px]">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/research/policy-regulatory-intelligence/hero.png"
                alt="Policy and regulation research"
                fill
                priority
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 608px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}