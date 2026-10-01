export default function ScopeTruthStatement() {
  const rows = [
    {
      label: "Official Policy Evidence",
      explain:
        "Show source-linked policy and regulatory decisions, notices and consultations with authority, jurisdiction and timing.",
      mustNot:
        "Tell a user that a rule legally applies to them, or that they are compliant or non-compliant.",
    },
    {
      label: "Timing",
      explain:
        'Separate publication, effective, deadline and reference dates with explicit unknown states.',
      mustNot:
        'Collapse publication and effective dates into one ambiguous "date."',
    },
    {
      label: "Versioning",
      explain:
        "Show version/supersession relationships and stale-source warnings.",
      mustNot:
        "Let an older document appear current after it has been replaced.",
    },
    {
      label: "Cross-Jurisdiction Comparison",
      explain:
        "Compare factual metadata and source text across jurisdictions.",
      mustNot:
        "Imply legal equivalence between similar-sounding labels.",
    },
    {
      label: "AI-Assisted Content",
      explain:
        "Help discover, compare and summarize regulatory documents.",
      mustNot:
        "Appear authoritative, or replace inspection of the official source.",
    },
  ];

  return (
    <section className="w-full bg-violet-50">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-20 lg:py-24">
        {/* Header */}
        <div className="flex w-full flex-col items-start">
          {/* Eyebrow */}
          <div className="w-full">
            <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
              SCOPE &amp; DEFINITION
            </p>
          </div>

          {/* Heading */}
          <div className="w-full max-w-[780px] pt-3">
            <h2 className="font-['IBM_Plex_Sans'] text-[40px] font-bold leading-[1.08] text-slate-900 sm:text-5xl sm:leading-[48.72px]">
              An evidence-first research surface —
              <br className="hidden sm:block" />
              not a legal-advice portal.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[800px] pt-5">
            <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
              Policy &amp; Regulation helps researchers discover, inspect and
              monitor authoritative policy and regulatory evidence without
              losing source, jurisdiction, timing, version or uncertainty.
            </p>
          </div>

          {/* Column headings */}
          <div className="mt-10 hidden w-full items-start gap-4 pb-3 lg:grid lg:grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)]">
            <div />

            <div>
              <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
                MAY EXPLAIN
              </p>
            </div>

            <div>
              <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
                MUST NOT ASSUME
              </p>
            </div>
          </div>

          {/* Comparison rows */}
          <div className="w-full">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex w-full flex-col gap-5 border-b-[0.8px] border-slate-900/10 py-5 lg:grid lg:grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-4"
              >
                {/* Label */}
                <div className="flex min-w-0">
                  <div className="inline-flex rounded-md border border-slate-900/20 bg-white px-4 py-1.5">
                    <span className="whitespace-normal text-center font-['IBM_Plex_Sans'] text-xs font-bold text-slate-900">
                      {row.label}
                    </span>
                  </div>
                </div>

                {/* Mobile heading */}
                <div className="lg:hidden">
                  <p className="mb-1 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
                    MAY EXPLAIN
                  </p>

                  <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-6 text-slate-700">
                    {row.explain}
                  </p>
                </div>

                {/* Desktop explanation */}
                <div className="hidden min-w-0 lg:block">
                  <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-6 text-slate-700">
                    {row.explain}
                  </p>
                </div>

                {/* Mobile restriction */}
                <div className="lg:hidden">
                  <p className="mb-1 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-gray-600">
                    MUST NOT ASSUME
                  </p>

                  <p className="font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600">
                    {row.mustNot}
                  </p>
                </div>

                {/* Desktop restriction */}
                <div className="hidden min-w-0 lg:block">
                  <p className="font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600">
                    {row.mustNot}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}