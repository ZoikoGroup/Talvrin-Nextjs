const researchLinks = [
  {
    title: "Central Banks",
    description:
      "Institution profiles, official decisions and evidence monitoring once the authority/event relationship is explicit and supported.",
  },
  {
    title: "Economic Calendar",
    description:
      "Scheduled and released economic events tied to a policy item where product data supports the link.",
  },
  {
    title: "Market Intelligence",
    description:
      "Broader market context, with evidence and analysis provenance kept visible.",
  },
  {
    title: "Research Library",
    description:
      "Durable source and research collections once the capability exists.",
  },
  {
    title: "Talvrin Methodology",
    description:
      "How normalization, classification and monitoring doctrine are defined and reviewed.",
  },
];

export default function RelatedResearchContinuation() {
  return (
    <section className="w-full bg-violet-50">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        {/* Header */}
        <div className="w-full">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
            RELATED RESEARCH &amp; CONTINUATION
          </p>

          <div className="w-full max-w-[780px] pt-3">
            <h2 className="font-['IBM_Plex_Sans'] text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-5xl sm:leading-[48.72px]">
              Continue a defensible research
              <br className="hidden sm:block" />
              workflow.
            </h2>
          </div>

          <div className="w-full max-w-[780px] pt-4">
            <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
              A policy item can lead to related research — only through
              approved routes, never a generic &quot;recommended for you&quot;
              ranking.
            </p>
          </div>
        </div>

        {/* Research cards */}
        <div className="mt-7 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {researchLinks.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[190px] w-full flex-col rounded-2xl border border-slate-900/10 bg-white p-5"
            >
              <h3 className="font-['IBM_Plex_Sans'] text-base font-bold leading-6 text-slate-900">
                {item.title}
                <span className="font-['Arial']"> →</span>
              </h3>

              <p className="mt-2 font-['IBM_Plex_Sans'] text-sm font-normal leading-5 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}