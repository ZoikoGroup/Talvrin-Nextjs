"use client";

const legalItems = [
  { number: "01", title: "Terms of Service", status: "APPROVED & LOCKED", type: "approved" },
  { number: "02", title: "Privacy Notice", status: "APPROVED & LOCKED", type: "approved" },
  { number: "03", title: "Cookie Notice", status: "APPROVED & LOCKED", type: "approved" },
  { number: "04", title: "Acceptable Use", status: "APPROVED & LOCKED", type: "approved" },
  { number: "05", title: "Accessibility", status: "APPROVED & LOCKED", type: "approved" },
  { number: "06", title: "Data Processing Addendum", status: "APPROVED & LOCKED", type: "approved" },
  { number: "07", title: "AI Terms", status: "APPROVED & LOCKED", type: "approved" },
  { number: "08", title: "Data & Market Information Terms", status: "CURRENT", type: "current" },
  { number: "09", title: "Legal Notices", status: "BLOCKED", type: "blocked" },
];

const relatedLinks = [
  { label: "Data Sources", href: "/data-sources" },
  { label: "Evidence Standards", href: "/evidence-standards" },
  { label: "Methodology", href: "/methodology" },
  { label: "Trust Center", href: "/trust-center" },
];

export default function DataMarketRelatedLegal() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-white font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-12 lg:py-[72px] xl:px-16 2xl:px-20">
        <div className="flex w-full flex-col items-start gap-3">
          {/* SECTION LABEL */}
          <p className="text-xs font-bold leading-5 tracking-wide text-yellow-600">
            RELATED LEGAL / TRUST / METHODOLOGY
          </p>

          {/* HEADING */}
          <h2 className="max-w-[800px] text-3xl font-bold leading-9 text-slate-900 sm:text-4xl sm:leading-10">
            Data &amp; Market Information Terms is item eight of nine in the
            Talvrin Legal sequence.
          </h2>

          {/* DESCRIPTION */}
          <p className="max-w-[780px] pt-1 text-base font-normal leading-6 text-gray-600">
            Each Legal destination is approved individually and in order.
            Legal Notices remains blocked until Data &amp; Market Information
            Terms is approved.
          </p>

          {/* LEGAL STATUS LIST */}
          <div className="mt-2 w-full overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50">
            {legalItems.map((item, index) => (
              <div
                key={item.number}
                className={`grid grid-cols-[32px_minmax(0,1fr)] items-center gap-x-3 gap-y-2 px-4 py-4 sm:grid-cols-[40px_minmax(0,1fr)_auto] sm:px-5 ${
                  index !== legalItems.length - 1
                    ? "border-b border-slate-900/10"
                    : ""
                }`}
              >
                {/* NUMBER */}
                <span className="text-xs font-bold text-gray-600">
                  {item.number}
                </span>

                {/* DOCUMENT NAME */}
                <span
                  className={`min-w-0 break-words text-sm font-bold sm:text-base ${
                    item.type === "current"
                      ? "text-slate-900"
                      : "text-gray-600"
                  }`}
                >
                  {item.title}
                </span>

                {/* STATUS BADGE */}
                <span
                  className={`col-start-2 inline-flex w-fit items-center justify-center rounded-full px-3 py-1 text-[10px] font-bold leading-3 tracking-wide sm:col-start-auto sm:text-xs ${
                    item.type === "approved"
                      ? "bg-teal-800/10 text-teal-800"
                      : item.type === "current"
                        ? "bg-indigo-500/10 text-indigo-500"
                        : "bg-yellow-600/10 text-yellow-800"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          {/* RELATED LINKS */}
          <nav
            aria-label="Related legal and trust resources"
            className="flex w-full flex-wrap items-center gap-x-7 gap-y-3 pt-4"
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