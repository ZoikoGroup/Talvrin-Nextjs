const comparisonRows = [
  {
    label: "Compared versions",
    description:
      "Shows source titles/IDs, publication dates and version state for both sides.",
  },
  {
    label: "Change summary",
    description:
      'Plain-language synopsis with explicit "Talvrin summary" provenance.',
  },
  {
    label: "Textual delta",
    description:
      "Highlights additions/removals only when legally permitted and technically reliable; always ships an accessible text alternative.",
  },
  {
    label: "Effective-date delta",
    description:
      "Separate from textual delta; shows old/new values and source basis.",
  },
  {
    label: "Status delta",
    description:
      "Proposed → final → effective → superseded, using approved lifecycle ontology only.",
  },
  {
    label: "Unknown / partial",
    description:
      'Incomplete comparison stays visible; missing coverage never becomes "no change."',
  },
  {
    label: "Open source",
    description:
      "One-click route to each authoritative version when permitted.",
  },
];

export default function VersionChangeComparison() {
  return (
    <section className="w-full bg-violet-50">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24 xl:px-0">
        {/* Header */}
        <div className="w-full">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500">
            VERSION / CHANGE COMPARISON
          </p>

          <div className="w-full max-w-[760px] pt-3">
            <h2 className="font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-5xl sm:leading-[48.72px]">
              Know what changed — and what
              <br className="hidden sm:block" />
              remains unresolved.
            </h2>
          </div>

          <div className="w-full max-w-[780px] pt-5">
            <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
              Missing source coverage never quietly becomes &quot;no
              change.&quot; Every visual diff ships with a complete accessible
              text alternative.
            </p>
          </div>
        </div>

        {/* Desktop column heading */}
        <div className="mt-10 hidden grid-cols-[208px_minmax(0,1fr)] gap-4 pb-3 lg:grid">
          <div />

          <div>
            <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
              REQUIRED BEHAVIOR
            </p>
          </div>
        </div>

        {/* Comparison rows */}
        <div className="w-full">
          {comparisonRows.map((row) => (
            <div
              key={row.label}
              className="flex w-full flex-col gap-3 border-b-[0.8px] border-slate-900/10 py-5 lg:grid lg:grid-cols-[208px_minmax(0,1fr)] lg:items-start lg:gap-4"
            >
              {/* Label */}
              <div className="flex min-w-0">
                <div className="inline-flex max-w-full items-center justify-center rounded-md border border-slate-900/20 bg-white px-4 py-1.5">
                  <span className="text-center font-['IBM_Plex_Sans'] text-xs font-bold leading-5 text-slate-900">
                    {row.label}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="min-w-0">
                <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-6 text-slate-700">
                  {row.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}