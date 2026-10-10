const legalDocuments = [
  { number: "01", title: "Terms of Service", status: "APPROVED & LOCKED" },
  { number: "02", title: "Privacy Notice", status: "APPROVED & LOCKED" },
  { number: "03", title: "Cookie Notice", status: "APPROVED & LOCKED" },
  { number: "04", title: "Acceptable Use", status: "CURRENT" },
  { number: "05", title: "Accessibility", status: "BLOCKED" },
  { number: "06", title: "Data Processing Addendum", status: "BLOCKED" },
  { number: "07", title: "AI Terms", status: "BLOCKED" },
  { number: "08", title: "Data & Market Information Terms", status: "BLOCKED" },
  { number: "09", title: "Legal Notices", status: "BLOCKED" },
];

export default function AURelated() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-white font-['IBM_Plex_Sans']">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-12 lg:py-16 xl:py-[72px]">
        <div className="mb-6 sm:mb-8">
          <p className="text-[11px] sm:text-xs font-bold tracking-wide text-yellow-600">
            26. RELATED LEGAL DOCUMENTS
          </p>

          <h2 className="mt-2.5 sm:mt-3 max-w-[800px] text-2xl font-bold leading-tight text-slate-900 sm:text-3xl sm:leading-10 lg:text-4xl">
            Acceptable Use is item four of nine in the Talvrin Legal sequence.
          </h2>

          <p className="mt-2.5 sm:mt-3 max-w-[780px] text-sm leading-6 text-gray-600 sm:text-base">
            Each Legal destination is approved individually and in order.
            Later destinations stay blocked until their own review and approval.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50">
          {legalDocuments.map((document, index) => (
            <div
              key={document.number}
              className={`grid min-h-[52px] sm:min-h-[58px] grid-cols-[28px_minmax(0,1fr)_auto] sm:grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-2.5 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 ${
                index !== legalDocuments.length - 1
                  ? "border-b border-slate-900/10"
                  : ""
              }`}
            >
              <span className="w-6 sm:w-10 shrink-0 text-xs font-bold text-gray-600">
                {document.number}
              </span>

              <span
                className={`min-w-0 break-words text-xs sm:text-sm md:text-base font-bold leading-snug ${
                  document.status === "CURRENT"
                    ? "text-slate-900"
                    : "text-gray-600"
                }`}
              >
                {document.title}
              </span>

              <span
                className={`shrink-0 whitespace-nowrap rounded-full px-2 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold tracking-wide ${
                  document.status === "APPROVED & LOCKED"
                    ? "bg-teal-800/10 text-teal-800"
                    : document.status === "CURRENT"
                      ? "bg-indigo-500/10 text-indigo-500"
                      : "bg-yellow-600/10 text-yellow-800"
                }`}
              >
                {document.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}