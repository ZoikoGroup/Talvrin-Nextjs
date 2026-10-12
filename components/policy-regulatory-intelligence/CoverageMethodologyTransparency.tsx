const transparencyRows = [
  {
    title: "Coverage status",
    description:
      "States actual released jurisdiction/authority/source coverage; distinguishes architecture-ready from live coverage.",
  },
  {
    title: "Source classes",
    description:
      "Defines primary/official/licensed/institutional/other governed classes used by the page.",
  },
  {
    title: "Refresh / verification",
    description:
      'Describes the actual update model and limitations — no unsupported "real-time" claim.',
  },
  {
    title: "Lifecycle taxonomy",
    description:
      "Publishes definitions for every state label used in the UI.",
  },
  {
    title: "Versioning",
    description:
      "Explains how revisions, supersession, withdrawal and source unavailability are represented.",
  },
  {
    title: "AI use",
    description:
      "States where AI may assist and how evidence remains separately inspectable.",
  },
  {
    title: "Legal boundary",
    description:
      "Research and intelligence only — not legal advice or compliance certification.",
  },
  {
    title: "Last reviewed",
    description:
      "Uses a genuine materially-updated/reviewed date, not cosmetic freshness.",
  },
];

export default function CoverageMethodologyTransparency() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24 xl:px-0">
        {/* Eyebrow */}
        <div className="w-full">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500">
            COVERAGE &amp; METHODOLOGY TRANSPARENCY
          </p>
        </div>

        {/* Heading */}
        <div className="w-full max-w-[1000px] pt-3">
          <h2 className="font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-5xl sm:leading-[48.72px]">
            Coverage and classification should be
            <br className="hidden sm:block" />
            inspectable too.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[780px] pt-5">
          <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
            Global architecture is not the same as live jurisdiction coverage.
            Every claim below traces back to a governed registry.
          </p>
        </div>

        {/* Transparency rows */}
        <div className="mt-8 w-full">
          {transparencyRows.map((row) => (
            <div
              key={row.title}
              className="flex w-full flex-col gap-2 border-b-[0.8px] border-slate-900/10 py-4 sm:flex-row sm:items-start sm:gap-4"
            >
              {/* Label */}
              <div className="w-full shrink-0 sm:w-48 lg:w-52">
                <p className="font-['IBM_Plex_Sans'] text-base font-semibold leading-6 text-slate-900">
                  {row.title}
                </p>
              </div>

              {/* Description */}
              <div className="min-w-0 flex-1">
                <p className="font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600">
                  {row.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No invention */}
        <div className="mt-10 w-full rounded-2xl border border-slate-900/10 bg-violet-50 p-6">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-slate-900">
            NO INVENTION
          </p>

          <p className="mt-2 font-['IBM_Plex_Sans'] text-base font-normal leading-6 text-gray-600">
            No canonical route, live jurisdiction, regulator list, data feed,
            legal conclusion, coverage claim, pricing, entitlement or
            launch-state claim is invented on this page. Governed registries
            remain authoritative.
          </p>
        </div>
      </div>
    </section>
  );
}