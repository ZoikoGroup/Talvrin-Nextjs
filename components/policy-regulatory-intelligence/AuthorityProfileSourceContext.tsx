import Image from "next/image";

const authorityDetails = [
  {
    title: "Authority identity",
    description:
      "Canonical name from the entity/source registry; aliases support search only, never replace identity.",
  },
  {
    title: "Jurisdiction / remit context",
    description:
      "Descriptive, source-governed context; avoids broad legal-reach conclusions.",
  },
  {
    title: "Official source routes",
    description:
      "Website, publication feed, document repository or official viewer only where approved.",
  },
  {
    title: "Coverage status",
    description:
      "Deep Coverage / Supported / Limited-Beta / Planned only if the governed coverage model approves it.",
  },
  {
    title: "Source freshness",
    description:
      "Last successful verification/check shown where meaningful — no fake real-time claim.",
  },
  {
    title: "Rights / access",
    description:
      "Restricted or licensed evidence respects entitlement and permitted-use controls.",
  },
];

export default function AuthorityProfileSourceContext() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24 xl:px-0">
        {/* Header */}
        <div className="w-full">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
            AUTHORITY PROFILE / SOURCE CONTEXT
          </p>

          <div className="w-full max-w-[1000px] pt-3">
            <h2 className="font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-5xl sm:leading-[48.72px]">
              Stable identity, jurisdiction and rights
              <br className="hidden sm:block" />
              {" — "}never a guessed taxonomy.
            </h2>
          </div>

          <div className="w-full max-w-[780px] pt-4">
            <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
              Every issuing authority follows the same field contract below.
              Bracketed values are populated only from approved entity and
              coverage registries.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-10 flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-16">
          {/* Image */}
          <div className="relative w-full shrink-0 overflow-hidden rounded-2xl bg-slate-900 sm:max-w-[440px] lg:w-[380px] xl:w-[440px]">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/research/policy-regulatory-intelligence/image2.png"
                alt="Authority profile and source context"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 440px, 440px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Authority Details */}
          <div className="flex w-full min-w-0 flex-col lg:flex-1">
            {authorityDetails.map((item) => (
              <div
                key={item.title}
                className="flex w-full flex-col gap-1 border-b-[0.8px] border-slate-900/10 py-3.5 first:pt-0 last:border-b-0"
              >
                <h3 className="font-['IBM_Plex_Sans'] text-base font-bold leading-6 text-slate-900">
                  {item.title}
                </h3>

                <p className="max-w-[620px] font-['IBM_Plex_Sans'] text-xs font-normal leading-5 text-gray-600">
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