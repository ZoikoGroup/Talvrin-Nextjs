import Image from "next/image";

const notices = [
  {
    title: "Corporate Identity",
    description:
      "Trading-name relationship, parent company and confirmed office addresses.",
    id: "corporate-identity",
  },
  {
    title: "Registered & Regulatory Status",
    description:
      "Statutory entity details and regulatory or authorization notices, published only once approved.",
    id: "registered-entity-details",
  },
  {
    title: "Intellectual Property",
    description:
      "Copyright, trademark and third-party IP notices, governed by approved ownership records.",
    id: "copyright-notice",
  },
  {
    title: "Jurisdiction & Versioning",
    description:
      "Regional notices, language/translation status and how changes to this page are versioned.",
    id: "jurisdiction-specific-notices",
  },
  {
    title: "Research & Non-Advice Boundary",
    description:
      "TALVRIN’s stable product-category and non-investment-advice notice.",
    id: "research-non-advice-boundary",
  },
  {
    title: "Attributions & Contacts",
    description:
      "Data, market-information and open-source attributions, plus security, privacy and legal-notice contact routes.",
    id: "data-market-attributions",
  },
];

export default function LegalNoticesGlance() {
  return (
    <section className="w-full border-b border-slate-900/10 bg-white font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-12 lg:py-16 xl:py-[72px]">
        {/* Section Heading */}
        <div className="w-full">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.1em] text-indigo-500">
            LEGAL NOTICES AT A GLANCE — CONVENIENCE SUMMARY ONLY
          </p>

          <h2 className="mt-2.5 sm:mt-3 max-w-[820px] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight sm:leading-10 text-slate-900">
            Six notice families. The sections below remain controlling.
          </h2>

          <p className="mt-2.5 sm:mt-3 max-w-[780px] text-sm leading-6 text-gray-600 sm:text-base">
            TALVRIN is a trading name of Zoiko Markets, a Zoiko Financial Group
            company. This page states that relationship, TALVRIN&apos;s
            confirmed office addresses, and the copyright, trademark,
            attribution and jurisdiction notices approved for publication. It
            does not state registration numbers, regulator names or other legal
            identifiers beyond what Legal, Corporate Affairs and Brand have
            approved. This summary is a convenience orientation — the full
            sections below govern.
          </p>
        </div>

        {/* Cards and Image */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 items-stretch gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] xl:gap-4">
          {/* Six Notice Cards */}
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
            {notices.map((notice) => (
              <article
                key={notice.id}
                className="flex min-h-[140px] sm:min-h-[150px] h-full min-w-0 flex-col items-start rounded-2xl border border-slate-900/10 bg-violet-50 p-4 sm:p-5 transition-colors hover:border-indigo-300 hover:bg-indigo-50/70"
              >
                <h3 className="text-sm sm:text-base font-bold leading-5 text-slate-900">
                  {notice.title}
                </h3>

                <p className="mt-2 flex-1 text-xs sm:text-sm leading-5 text-gray-600">
                  {notice.description}
                </p>

                <a
                  href={`#${notice.id}`}
                  className="mt-auto pt-2 inline-flex items-center text-xs font-semibold text-indigo-500 transition-colors hover:text-indigo-700"
                >
                  Jump to section <span className="ml-1">→</span>
                </a>
              </article>
            ))}
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[320px] xl:min-h-[413px] w-full min-w-0 overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50">
            <Image
              src="/images/legal/legal-notices/legal-notices-glance-document-signing.webp"
              alt="Two colleagues reviewing and signing a document at a desk"
              fill
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) 300px, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
