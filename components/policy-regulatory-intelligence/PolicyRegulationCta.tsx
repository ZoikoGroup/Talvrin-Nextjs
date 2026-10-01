export default function PolicyRegulationCta() {
  return (
    <section className="w-full border-t-[0.8px] border-slate-900/10 bg-violet-50">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-4 px-6 py-20 text-center sm:px-8 sm:py-[88px]">
        {/* Heading */}
        <div className="w-full">
          <h2 className="font-['IBM_Plex_Sans'] text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-5xl sm:leading-[48.3px]">
            Keep policy research connected to
            <br className="hidden sm:block" />
            the evidence.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full">
          <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
            Explore Talvrin Policy &amp; Regulation — source-linked evidence
            with authority, jurisdiction,
            <br className="hidden sm:block" />
            timing and version always in view.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col items-center justify-center gap-3 pt-3.5 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="/research/policy-regulation"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-slate-900 px-7 py-4 font-['IBM_Plex_Sans'] text-base font-semibold text-violet-50 transition-colors duration-200 hover:bg-slate-800 sm:w-auto"
          >
            Explore Policy &amp; Regulation
          </a>

          <a
            href="/methodology"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-lg border border-slate-900/25 px-7 py-4 font-['IBM_Plex_Sans'] text-base font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-900/[0.03] sm:w-auto"
          >
            See Talvrin Methodology
          </a>
        </div>

        {/* Disclaimer */}
        <div className="w-full pt-0.5">
          <p className="font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600">
            Research and market intelligence. No legal advice. No trade
            execution. No manufactured buy/sell/hold
            <br className="hidden sm:block" />
            recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}