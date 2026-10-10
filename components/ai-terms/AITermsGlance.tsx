
import Image from "next/image";

const clauses = [
  {
    title: "Scope & Capabilities",
    description:
      "What AI-assisted features actually do — and what counts as an approved capability versus an illustrative example.",
    id: "scope-capabilities",
  },
  {
    title: "Evidence Boundary",
    description:
      "AI output is assistance, not authoritative evidence — the underlying source stays separately inspectable.",
    id: "evidence-boundary",
  },
  {
    title: "Inputs & Outputs",
    description:
      "What you may submit as a prompt, and how you may reuse or represent what AI returns.",
    id: "inputs-outputs",
  },
  {
    title: "Governance & Changes",
    description:
      "Prohibited use, IP, enforcement and version changes stay sourced from approved registries and Legal review.",
    id: "governance-changes",
  },
  {
    title: "Your Responsibility",
    description:
      "Verify sources, apply human judgment, and treat non-advice and non-trade-execution boundaries as fixed.",
    id: "your-responsibility",
  },
  {
    title: "Privacy & Data Rights",
    description:
      "Prompt, output, retention, training and market-data-rights facts stay governed by approved policy, not marketing copy.",
    id: "privacy-data-rights",
  },
];

export default function AITermsGlance() {
  return (
    <section className="w-full border-b border-slate-900/10 bg-white font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-12 lg:py-16 xl:py-[72px]">
        {/* Section Heading */}
        <div className="w-full">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.1em] text-indigo-500">
            AI AT A GLANCE — CONVENIENCE SUMMARY ONLY
          </p>

          <h2 className="mt-2.5 sm:mt-3 max-w-[820px] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight sm:leading-10 text-slate-900">
            Six clause families. The sections below remain controlling.
          </h2>

          <p className="mt-2.5 sm:mt-3 max-w-[780px] text-sm leading-6 text-gray-600 sm:text-base">
            AI assists research; generated output is not authoritative
            evidence; verify sources before relying on a summary; human
            judgment remains responsible; and nothing here is investment
            advice or trade execution. This summary is a convenience
            orientation — if approved policy is broader than what is shown
            here, the full sections below govern.
          </p>
        </div>

        {/* Cards and Image */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 items-stretch gap-5 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] xl:gap-6">
          {/* Six Clause Cards */}
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
            {clauses.map((clause) => (
              <article
                key={clause.id}
                className="flex min-h-[140px] sm:min-h-[150px] h-full min-w-0 flex-col items-start rounded-2xl border border-slate-900/10 bg-violet-50 p-4 sm:p-5 transition-colors hover:border-indigo-300 hover:bg-indigo-50/70"
              >
                <h3 className="text-sm sm:text-base font-bold leading-5 text-slate-900">
                  {clause.title}
                </h3>

                <p className="mt-2 flex-1 text-xs sm:text-sm leading-5 text-gray-600">
                  {clause.description}
                </p>

                <a
                  href={`#${clause.id}`}
                  className="mt-auto pt-2 inline-flex items-center text-xs font-semibold text-indigo-500 transition-colors hover:text-indigo-700"
                >
                  Jump to section <span className="ml-1">→</span>
                </a>
              </article>
            ))}
          </div>

          {/* Image */}
          <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] xl:min-h-full w-full min-w-0 overflow-hidden rounded-2xl border border-slate-900/10">
            <Image
              src="/images/legal/ai-terms/image.png"
              alt="Professional using a laptop in a bright workspace"
              fill
              priority
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) calc(100vw - 96px), 42vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
