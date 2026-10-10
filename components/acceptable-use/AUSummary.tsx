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
      <div className="mx-auto w-full max-w-[1600px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-[72px] xl:px-20">
        {/* Heading */}
        <div className="mb-7">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500">
            ACCEPTABLE USE AT A GLANCE — CONVENIENCE SUMMARY ONLY
          </p>

          <h2 className="mt-3 max-w-[820px] font-['IBM_Plex_Sans'] text-[28px] font-bold leading-[1.2] text-slate-900 sm:text-3xl lg:text-4xl lg:leading-10">
            Six rule families. The sections below remain controlling.
          </h2>

          <p className="mt-3 max-w-[780px] font-['IBM_Plex_Sans'] text-sm leading-6 text-gray-600 sm:text-base">
            This summary is a convenience orientation, not an exhaustive list.
            If Legal policy is broader than what is shown here, the full
            sections below govern.
          </p>
        </div>

        {/* Rule cards and image */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] xl:gap-3">
          {/* Six cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {rules.map((rule) => (
              <a
                key={rule.title}
                href={rule.href}
                className="flex min-h-[184px] flex-col items-start gap-2 rounded-2xl border border-slate-900/10 bg-violet-50 p-5 transition-colors hover:border-indigo-300 hover:bg-indigo-50/70"
              >
                <h3 className="font-['IBM_Plex_Sans'] text-base font-bold text-slate-900">
                  {rule.title}
                </h3>

                <p className="font-['IBM_Plex_Sans'] text-sm leading-5 text-gray-600">
                  {rule.description}
                </p>

                <span className="mt-auto pt-1 font-['IBM_Plex_Sans'] text-xs font-semibold text-indigo-500">
                  Jump to section →
                </span>
              </a>
            ))}
          </div>

          {/* Image */}
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-slate-900/10 sm:min-h-[320px] lg:min-h-full">
            <Image
              src="/images/legal/acceptable-use/image.png"
              alt="Professionals meeting and discussing their work"
              fill
              sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1600px) 32vw, 500px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}