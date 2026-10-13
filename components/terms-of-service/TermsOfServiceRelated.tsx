const legalItems = [
  { number: "01", title: "Terms of Service", href: "/legal/terms-of-service", status: "CURRENT", type: "current" },
  { number: "02", title: "Privacy Notice", href: "/legal/privacy-notice", status: "APPROVED & LOCKED", type: "approved" },
  { number: "03", title: "Cookie Notice", href: "/legal/cookie-notice", status: "APPROVED & LOCKED", type: "approved" },
  { number: "04", title: "Acceptable Use", href: "/legal/acceptable-use", status: "APPROVED & LOCKED", type: "approved" },
  { number: "05", title: "Accessibility", href: "/legal/accessibility", status: "APPROVED & LOCKED", type: "approved" },
  { number: "06", title: "Data Processing Addendum", href: "/legal/data-processing-addendum", status: "APPROVED & LOCKED", type: "approved" },
  { number: "07", title: "AI Terms", href: "/legal/ai-terms", status: "APPROVED & LOCKED", type: "approved" },
  { number: "08", title: "Data & Market Information Terms", href: "/legal/data-market-information-terms", status: "APPROVED & LOCKED", type: "approved" },
  { number: "09", title: "Legal Notices", href: "/legal/legal-notices", status: "BLOCKED", type: "blocked" },
];

const relatedLinks = [
  { label: "Acceptable Use", href: "/legal/acceptable-use" },
  { label: "AI Terms", href: "/legal/ai-terms" },
  { label: "Data & Market Information Terms", href: "/legal/data-market-information-terms" },
  { label: "Trust Center", href: "/trust/trust-center" },
];

export default function TermsOfServiceRelated() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-white font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-14 lg:py-16 xl:py-20">
        <div className="flex w-full flex-col items-start gap-3">
          {/* SECTION LABEL */}
          <p className="text-xs font-bold leading-5 tracking-wide text-yellow-600">
            RELATED LEGAL / TRUST / METHODOLOGY
          </p>

          {/* HEADING */}
          <h2 className="max-w-[800px] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-slate-900 sm:leading-10">
            Terms of Service is item one of nine in the Talvrin Legal sequence.
          </h2>

          {/* DESCRIPTION */}
          <p className="max-w-[780px] pt-1 text-sm sm:text-base font-normal leading-relaxed text-gray-600">
            Specialized terms supplement these Terms rather than replace them —
            Acceptable Use, AI Terms and Data &amp; Market Information Terms
            apply alongside the clauses above wherever they address a more
            specific behavior.
          </p>

          {/* LEGAL STATUS LIST */}
          <div className="mt-3 w-full overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50">
            {legalItems.map((item, index) => (
              <a
                key={item.number}
                href={item.href}
                aria-current={item.type === "current" ? "page" : undefined}
                className={`grid grid-cols-[28px_minmax(0,1fr)_auto] sm:grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-x-2 sm:gap-x-4 px-3.5 py-3 sm:px-5 sm:py-3.5 transition-colors hover:bg-indigo-500/5 ${
                  index !== legalItems.length - 1
                    ? "border-b border-slate-900/10"
                    : ""
                }`}
              >
                {/* NUMBER */}
                <span className="text-xs font-bold text-gray-500">
                  {item.number}
                </span>

                {/* DOCUMENT NAME */}
                <span
                  className={`min-w-0 break-words text-xs sm:text-sm md:text-base font-bold ${
                    item.type === "current"
                      ? "text-slate-900"
                      : "text-gray-600"
                  }`}
                >
                  {item.title}
                </span>

                {/* STATUS BADGE */}
                <span
                  className={`inline-flex shrink-0 items-center justify-center rounded-full px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold tracking-wide whitespace-nowrap ${
                    item.type === "approved"
                      ? "bg-teal-800/10 text-teal-800"
                      : item.type === "current"
                        ? "bg-indigo-500/10 text-indigo-500"
                        : "bg-yellow-600/10 text-yellow-800"
                  }`}
                >
                  {item.status}
                </span>
              </a>
            ))}
          </div>

          {/* RELATED LINKS */}
          <nav
            aria-label="Related legal and trust resources"
            className="flex w-full flex-wrap items-center gap-x-6 sm:gap-x-7 gap-y-2.5 sm:gap-y-3 pt-3 sm:pt-4"
          >
            {relatedLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-500 transition-colors hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                {link.label}
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
