export default function LatestOfficialActions() {
  const records = [
    {
      label: "Official title",
      description:
        "Uses the source title as primary; a Talvrin-friendly short label may be secondary and clearly identified.",
    },
    {
      label: "Issuing authority",
      description:
        'Named entity from the registry — never a generic "regulator."',
    },
    {
      label: "Jurisdiction",
      description:
        "Shown where economically, legally or structurally relevant.",
    },
    {
      label: "Source class",
      description:
        "Primary / official / licensed / institutional / other, only where supported.",
    },
    {
      label: "Publication timestamp",
      description:
        "Source timezone or unambiguous normalized time.",
    },
    {
      label: "Effective / reference date",
      description:
        'Separate field; shows "not supplied / not yet determined" rather than guessing.',
    },
    {
      label: "Lifecycle & change state",
      description:
        "Approved status taxonomy only: new / updated / superseded / withdrawn / unchanged / source unavailable / review pending.",
    },
    {
      label: "Open source & summary",
      description:
        "Deep link where rights permit, plus a concise answer-first summary that never visually replaces the source.",
    },
  ];

  return (
    <section className="w-full bg-violet-50">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        {/* Header */}
        <div className="w-full">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
            LATEST OFFICIAL ACTIONS
          </p>

          <div className="max-w-[780px] pt-3">
            <h2 className="font-['IBM_Plex_Sans'] text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-5xl sm:leading-[48.72px]">
              Start with the official evidence.
            </h2>
          </div>

          <div className="max-w-[780px] pt-5">
            <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
              Default ordering is newest verified publication/update time —
              never opaque editorial &quot;importance&quot; — unless a
              separately governed relevance model exists.
            </p>
          </div>
        </div>

        {/* Table heading */}
        <div className="mt-10 hidden grid-cols-[208px_minmax(0,1fr)] gap-4 pb-3 lg:grid">
          <div />

          <div>
            <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
              RECORD CARD SHOWS
            </p>
          </div>
        </div>

        {/* Record rows */}
        <div className="w-full">
          {records.map((record) => (
            <div
              key={record.label}
              className="flex w-full flex-col gap-3 border-b-[0.8px] border-slate-900/10 py-5 lg:grid lg:grid-cols-[208px_minmax(0,1fr)] lg:items-start lg:gap-4"
            >
              {/* Label */}
              <div className="flex min-w-0">
                <div className="inline-flex max-w-full items-center justify-center rounded-md border border-slate-900/20 bg-white px-4 py-1.5">
                  <span className="text-center font-['IBM_Plex_Sans'] text-xs font-bold text-slate-900">
                    {record.label}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="min-w-0">
                <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-6 text-slate-700">
                  {record.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Copy Rule */}
        <div className="mt-10 w-full rounded-2xl bg-slate-900 px-6 py-6 sm:px-7">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
            COPY RULE
          </p>

          <p className="mt-2 font-['IBM_Plex_Sans'] text-base font-normal leading-6 text-violet-50/90">
            The page may explain what a source officially published, changed or
            clarified. It must not tell a user that a rule legally applies to
            them, that they are compliant or non-compliant, or what legal
            action to take.
          </p>
        </div>

        {/* Empty state */}
        <div className="mt-6 w-full rounded-2xl bg-white px-6 py-6 sm:px-7">
          <p className="font-['IBM_Plex_Sans'] text-base font-semibold leading-6 text-slate-700">
            There are no published policy or regulatory records yet.
          </p>

          <p className="mt-1.5 font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600">
            Live record cards will follow this exact contract, with AI-assisted
            content always persistently labeled and visually subordinate to the
            primary source.
          </p>
        </div>
      </div>
    </section>
  );
}