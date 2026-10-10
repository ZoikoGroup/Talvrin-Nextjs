"use client";

import Image from "next/image";

const clauseFamilies = [
  {
    title: "Scope & Coverage",
    description:
      "What these terms cover, and the accuracy and coverage limitations that always apply.",
    href: "#scope-coverage",
  },
  {
    title: "Source Classes & Rights States",
    description:
      "How source class, timeliness and rights/access states are classified and shown.",
    href: "#source-classes-rights-states",
  },
  {
    title: "Access, Export & Sharing",
    description:
      "Copying, download, export, API, sharing and derived-data rights, gated by source and entitlement.",
    href: "#access-export-sharing",
  },
  {
    title: "Governance & Changes",
    description:
      "Provider terms, entitlement changes, prohibited use and how these terms are updated.",
    href: "#governance-changes",
  },
  {
    title: "Permitted Use & Attribution",
    description:
      "What internal research use is allowed, and when source attribution must stay visible.",
    href: "#permitted-use-attribution",
  },
  {
    title: "AI, Caching & History",
    description:
      "AI-assisted use, caching/retention and how historical revisions are handled.",
    href: "#ai-caching-history",
  },
];

export default function DataMarketInformationAtGlance() {
  return (
    <section className="w-full border-b border-slate-900/10 bg-white font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-12 lg:py-[72px] xl:px-16 2xl:px-20">
        {/* SECTION LABEL */}
        <p className="text-xs font-bold leading-5 tracking-wide text-indigo-500">
          DATA &amp; MARKET INFORMATION AT A GLANCE — CONVENIENCE SUMMARY ONLY
        </p>

        {/* HEADING */}
        <h2 className="mt-3 max-w-[820px] text-4xl font-bold leading-10 text-slate-900 max-sm:text-3xl max-sm:leading-tight">
          Six clause families. The sections below remain controlling.
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 max-w-[780px] text-base font-normal leading-6 text-gray-600">
          Rights vary by source, entitlement, action, region and provider terms.
          Visibility of market information is not, by itself, permission to
          copy, export, share or redistribute it, and AI-assisted processing
          does not expand your underlying rights. This summary is a convenience
          orientation — if approved policy is broader than what is shown here,
          the full sections below govern.
        </p>

        {/* CARDS AND IMAGE */}
        <div className="mt-7 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(280px,2.1fr)] xl:gap-[10px]">
          {clauseFamilies.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex min-h-[160px] min-w-0 flex-col items-start rounded-2xl border border-slate-900/10 bg-violet-50 p-5 transition-colors duration-200 hover:border-indigo-500/30 hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              <h3 className="text-base font-bold leading-5 text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-normal leading-5 text-gray-600">
                {item.description}
              </p>

              <span className="mt-auto pt-3 text-xs font-semibold text-indigo-500">
                Jump to section →
              </span>
            </a>
          ))}

          {/* IMAGE */}
          <div className="relative min-h-[280px] min-w-0 overflow-hidden rounded-xl border border-slate-900/10 bg-violet-50 sm:col-span-2 lg:col-span-2 xl:col-span-1 xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:min-h-0">
            <Image
              src="/images/legal/data-market-information-terms/image.png"
              alt="Colleagues discussing data and market information"
              fill
              priority
              sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 60vw, 35vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}