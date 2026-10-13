import Image from "next/image";

const clauses = [
  {
    title: "Scope & Parties",
    description:
      "What this DPA covers, how it is incorporated, and how roles are defined.",
    id: "scope-and-incorporation",
  },
  {
    title: "Instructions & Confidentiality",
    description:
      "Processing only on customer instructions, and who may access personal data.",
    id: "documented-instructions",
  },
  {
    title: "Transfers & Rights Assistance",
    description:
      "Cross-border transfer mechanisms and assistance with data-subject and DPIA requests.",
    id: "international-transfers",
  },
  {
    title: "Annexes & Schedules",
    description:
      "Processing details, security measures, subprocessors and regional transfer schedules bound to this DPA’s version.",
    id: "annex-i-processing-details",
  },
  {
    title: "Security & Subprocessors",
    description:
      "How technical and organizational measures and subprocessor use are governed.",
    id: "security-measures",
  },
  {
    title: "Incidents, Deletion & Audit",
    description:
      "Security-incident notification, end-of-service deletion and audit/information rights.",
    id: "security-incidents",
  },
];

export default function DPAGlance() {
  return (
    <section className="w-full border-b border-slate-900/10 bg-white font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-12 lg:py-16 xl:py-[72px]">
        {/* Section Heading */}
        <div className="w-full">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.1em] text-indigo-500">
            DPA AT A GLANCE — CONVENIENCE SUMMARY ONLY
          </p>

          <h2 className="mt-2.5 sm:mt-3 max-w-[820px] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight sm:leading-10 text-slate-900">
            Six clause families. The sections below remain controlling.
          </h2>

          <p className="mt-2.5 sm:mt-3 max-w-[780px] text-sm leading-6 text-gray-600 sm:text-base">
            This Data Processing Addendum explains the contractual framework
            that applies when Talvrin processes personal data on a
            customer&apos;s behalf. It does not assign controller, processor or
            subprocessor roles, state security measures, or name subprocessors
            and transfer mechanisms beyond what Legal, Privacy and Security
            have approved. This summary is a convenience orientation — the full
            sections below govern.
          </p>
        </div>

        {/* Cards and Image */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 items-stretch gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] xl:gap-4">
          {/* Six Clause Cards */}
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
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
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[320px] xl:min-h-[392px] w-full min-w-0 overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50">
            <Image
              src="/images/legal/data-processing-addendum/dpa-glance-team-desk.webp"
              alt="Two colleagues working on laptops at a shared office desk"
              fill
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) 300px, 40vw"
              className="object-cover object-[70%_center]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
