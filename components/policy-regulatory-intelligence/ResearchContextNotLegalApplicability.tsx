import Image from "next/image";

const contextItems = [
  {
    title: "Market / asset class",
    description:
      "Shown as research context when source text or governed mapping supports the relationship.",
  },
  {
    title: "Entity / issuer",
    description:
      "Explicit source mentions or governed entity relationships; distinguishes direct mention from analyst association.",
  },
  {
    title: "Topic",
    description:
      "Controlled taxonomy with visible definitions where ambiguity is material.",
  },
  {
    title: "User-specific relevance",
    description:
      "Not assumed. Requires separately approved product/legal architecture.",
  },
  {
    title: "Jurisdiction",
    description:
      "Issuing jurisdiction and documented cross-border context; avoids overgeneralization.",
  },
  {
    title: "Potential significance",
    description:
      "Method, reviewer state and uncertainty made explicit — never presented as a source fact.",
  },
];

export default function ResearchContextNotLegalApplicability() {
  return (
    <section className="w-full bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        {/* Eyebrow */}
        <div className="w-full">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
            RESEARCH CONTEXT — NOT LEGAL APPLICABILITY
          </p>
        </div>

        {/* Heading */}
        <div className="w-full max-w-[780px] pt-3">
          <h2 className="font-['IBM_Plex_Sans'] text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-violet-50 sm:text-5xl sm:leading-[48.72px]">
            Evidence relationships, never an
            <br className="hidden sm:block" />
            applicability ruling.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[780px] pt-4">
          <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-violet-50/70">
            The page may show topics, markets, entities or jurisdictions
            supported by governed evidence. It must not label a rule
            &quot;applicable to you,&quot; &quot;compliant,&quot;
            &quot;non-compliant,&quot; or &quot;required action&quot; unless a
            separately approved legal capability exists.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 flex w-full flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,760px)_500px] lg:items-start lg:gap-5">
          {/* Context Cards */}
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contextItems.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[160px] w-full flex-col rounded-2xl border border-violet-50/10 bg-violet-50/5 p-5"
              >
                <h3 className="font-['IBM_Plex_Sans'] text-base font-bold leading-6 text-violet-50">
                  {item.title}
                </h3>

                <p className="mt-2 font-['IBM_Plex_Sans'] text-sm font-normal leading-5 text-violet-50/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-violet-50/10 bg-violet-50/5">
            <div className="relative aspect-[500/320] w-full">
              <Image
                src="/images/research/policy-regulatory-intelligence/image5.png"
                alt="Research context and evidence relationships"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}