import Image from "next/image";

const evidenceLayers = [
  {
    title: "Official Source",
    description:
      "Primary evidence; highest source prominence; never silently rewritten.",
  },
  {
    title: "Talvrin Normalization",
    description:
      "Clearly labeled structured metadata extracted from the source.",
  },
  {
    title: "Talvrin Analysis",
    description:
      "Distinct analytical layer; cites underlying evidence and exposes uncertainty.",
  },
  {
    title: "AI-Assisted Content",
    description:
      "Persistent provenance treatment; never visually equivalent to official source text.",
  },
  {
    title: (
      <>
        User Notes / Research
        <br className="hidden sm:block" /> Links
      </>
    ),
    description:
      "Clearly user-created and separate from platform analysis.",
  },
];

export default function SourceEvidenceChain() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24 xl:px-0">
        {/* Eyebrow */}
        <div className="w-full">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
            SOURCE &amp; EVIDENCE CHAIN
          </p>
        </div>

        {/* Heading */}
        <div className="w-full max-w-[1000px] pt-3">
          <h2 className="font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-5xl sm:leading-[48.72px]">
            The source should never disappear
            <br className="hidden sm:block" />
            behind the summary.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[800px] pt-4">
          <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
            Every derived summary or conclusion retains a navigable path to
            evidence where rights permit. Labels and iconography — never color
            alone — distinguish each layer.
          </p>
        </div>

        {/* Evidence chain */}
        <div className="w-full max-w-[820px] pt-5">
          <p className="font-['IBM_Plex_Sans'] text-xs font-semibold leading-6 tracking-tight text-indigo-500">
            QUESTION → SOURCE DISCOVERY → AUTHORITY &amp; RIGHTS CHECK →
            PUBLICATION / EFFECTIVE TIME → JURISDICTION CONTEXT → OFFICIAL
            EVIDENCE → NORMALIZATION → ANALYSIS / AI → RESEARCH VIEW →
            MONITORING
          </p>
        </div>

        {/* Layer cards */}
        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {evidenceLayers.map((layer) => (
            <div
              key={
                typeof layer.title === "string"
                  ? layer.title
                  : "User Notes / Research Links"
              }
              className="flex h-full min-h-[190px] w-full flex-col items-start rounded-2xl border border-slate-900/10 bg-violet-50 p-5"
            >
              <h3 className="font-['IBM_Plex_Sans'] text-base font-bold leading-6 text-slate-900">
                {layer.title}
              </h3>

              <p className="mt-2 font-['IBM_Plex_Sans'] text-sm font-normal leading-5 text-gray-600">
                {layer.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="relative mt-10 w-full overflow-hidden rounded-2xl bg-rose-400">
          <div className="relative aspect-[16/4.8] min-h-[220px] w-full sm:min-h-[280px] lg:h-[384px] lg:aspect-auto">
            <Image
              src="/images/research/policy-regulatory-intelligence/image4.png"
              alt="Source and evidence chain"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}