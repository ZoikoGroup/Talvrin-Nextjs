import Image from "next/image";

const rules = [
  {
    title: "Account Integrity",
    description:
      "Keep credentials and access scoped to what your account or workspace entitlement authorizes.",
    href: "#account-integrity",
  },
  {
    title: "Security",
    description:
      "No attacks, probing, bypass or interference with the systems that protect Talvrin and its users.",
    href: "#security",
  },
  {
    title: "Data & Rights",
    description:
      "Viewing evidence does not grant rights to copy, extract, redistribute or relicense source or market data.",
    href: "#data-rights",
  },
  {
    title: "Lawful & Responsible Use",
    description:
      "Use Talvrin lawfully and consistently with its role as a research and intelligence platform.",
    href: "#lawful-use",
  },
  {
    title: "Automation",
    description:
      "Automated access, scraping and integrations are permitted only within your approved API agreement.",
    href: "#automation",
  },
  {
    title: "AI",
    description:
      "AI assistance is a research aid, not authoritative evidence, and stays distinguishable from source material.",
    href: "#ai",
  },
];

export default function AUSummary() {
  return (
    <section className="w-full border-b border-slate-900/10 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-12 lg:py-16 xl:py-[72px]">
        {/* Heading */}
        <div className="mb-6 sm:mb-8">
          <p className="font-['IBM_Plex_Sans'] text-[11px] sm:text-xs font-bold tracking-wide text-indigo-500">
            ACCEPTABLE USE AT A GLANCE — CONVENIENCE SUMMARY ONLY
          </p>

          <h2 className="mt-2.5 sm:mt-3 max-w-[820px] font-['IBM_Plex_Sans'] text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl lg:leading-10">
            Six rule families. The sections below remain controlling.
          </h2>

          <p className="mt-2.5 sm:mt-3 max-w-[780px] font-['IBM_Plex_Sans'] text-sm leading-6 text-gray-600 sm:text-base">
            This summary is a convenience orientation, not an exhaustive list.
            If Legal policy is broader than what is shown here, the full
            sections below govern.
          </p>
        </div>

        {/* Rule cards and image */}
        <div className="grid grid-cols-1 items-stretch gap-5 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] xl:gap-6">
          {/* Six cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
            {rules.map((rule) => (
              <a
                key={rule.title}
                href={rule.href}
                className="flex min-h-[150px] sm:min-h-[160px] h-full flex-col items-start gap-2 rounded-2xl border border-slate-900/10 bg-violet-50 p-4 sm:p-5 transition-colors hover:border-indigo-300 hover:bg-indigo-50/70"
              >
                <h3 className="font-['IBM_Plex_Sans'] text-sm sm:text-base font-bold text-slate-900">
                  {rule.title}
                </h3>

                <p className="font-['IBM_Plex_Sans'] text-xs sm:text-sm leading-5 text-gray-600">
                  {rule.description}
                </p>

                <span className="mt-auto pt-2 font-['IBM_Plex_Sans'] text-xs font-semibold text-indigo-500">
                  Jump to section →
                </span>
              </a>
            ))}
          </div>

          {/* Image */}
          <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] xl:min-h-full overflow-hidden rounded-2xl border border-slate-900/10">
            <Image
              src="/images/legal/acceptable-use/image.png"
              alt="Professionals meeting and discussing their work"
              fill
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) calc(100vw - 96px), 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}