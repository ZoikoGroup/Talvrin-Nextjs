export default function ResearchPrinciplesBar() {
  const principles = [
    "SOURCE-LINKED",
    "TIMING-SEPARATED",
    "JURISDICTION-AWARE",
    "VERSION-AWARE",
    "EVIDENCE BEFORE INTERPRETATION",
    "NON-ADVISORY",
  ];

  return (
    <section className="w-full border-y border-slate-900/10 bg-white">
      <div className="mx-auto flex min-h-20 w-full max-w-[1320px] flex-wrap items-center justify-center gap-x-5 gap-y-3 px-6 py-5 sm:px-8 lg:flex-nowrap lg:gap-x-6 lg:px-14 lg:py-6">
        {principles.map((principle, index) => (
          <div
            key={principle}
            className="flex shrink-0 items-center gap-5 lg:gap-6"
          >
            <span className="whitespace-nowrap font-['IBM_Plex_Sans'] text-[11px] font-semibold tracking-wide text-slate-900 sm:text-xs">
              {principle}
            </span>

            {index < principles.length - 1 && (
              <span
                aria-hidden="true"
                className="font-['IBM_Plex_Sans'] text-base font-normal text-slate-900/25"
              >
                ·
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}