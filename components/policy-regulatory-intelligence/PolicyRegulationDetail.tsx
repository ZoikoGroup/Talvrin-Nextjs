import Image from "next/image";

const detailItems = [
  {
    title: "Identity",
    description:
      "Official title, issuing authority, jurisdiction, stable Talvrin record ID and source identifier when available.",
  },
  {
    title: "Lifecycle",
    description:
      "Approved status taxonomy; supersession/withdrawal relationship where documented.",
  },
  {
    title: "Timing",
    description:
      "Published, effective/reference, deadline/transition, timezone basis and unknown state.",
  },
  {
    title: "Source",
    description:
      "Primary source title, source class, original URL/viewer action, rights/access state and language.",
  },
  {
    title: "What changed",
    description:
      'Version delta or update summary, with a "no comparison available" state when needed.',
  },
  {
    title: "Normalization / analysis / AI",
    description:
      "Each layer clearly labeled and visually distinct from official source text.",
  },
];

export default function PolicyRegulationDetail() {
  return (
    <section className="w-full bg-violet-50">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        {/* Eyebrow */}
        <div className="w-full">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500">
            POLICY / REGULATION DETAIL
          </p>
        </div>

        {/* Heading */}
        <div className="w-full max-w-[1000px] pt-3">
          <h2 className="font-['IBM_Plex_Sans'] text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-5xl sm:leading-[48.72px]">
            The detail record reads like evidence
            <br className="hidden sm:block" />
            first — content second.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[780px] pt-4">
          <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
            Hierarchy on a record: official title → authority/jurisdiction →
            lifecycle/timing → source action → concise answer →
            evidence/version/change → analysis/AI → related research.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-10 flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* Image */}
          <div className="relative w-full shrink-0 overflow-hidden rounded-2xl border border-slate-900/10 bg-white sm:max-w-[440px] lg:w-[440px]">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/research/policy-regulatory-intelligence/image3.png"
                alt="Policy and regulation detail record"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 440px, 440px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Detail List */}
          <div className="flex w-full min-w-0 flex-col lg:flex-1">
            {detailItems.map((item) => (
              <div
                key={item.title}
                className="w-full border-b-[0.8px] border-slate-900/10 py-3.5 first:pt-0 last:border-b-0"
              >
                <h3 className="font-['IBM_Plex_Sans'] text-base font-bold leading-6 text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-1 max-w-[720px] font-['IBM_Plex_Sans'] text-xs font-normal leading-5 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}