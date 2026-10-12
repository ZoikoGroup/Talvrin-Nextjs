
"use client";

const legalDocuments = [
  { number: "01", title: "Terms of Service", status: "APPROVED & LOCKED", type: "approved" },
  { number: "02", title: "Privacy Notice", status: "APPROVED & LOCKED", type: "approved" },
  { number: "03", title: "Cookie Notice", status: "APPROVED & LOCKED", type: "approved" },
  { number: "04", title: "Acceptable Use", status: "APPROVED & LOCKED", type: "approved" },
  { number: "05", title: "Accessibility", status: "CURRENT", type: "current" },
  { number: "06", title: "Data Processing Addendum", status: "BLOCKED", type: "blocked" },
  { number: "07", title: "AI Terms", status: "BLOCKED", type: "blocked" },
  { number: "08", title: "Data & Market Information Terms", status: "BLOCKED", type: "blocked" },
  { number: "09", title: "Legal Notices", status: "BLOCKED", type: "blocked" },
];

export default function AccessibilityRelated() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-white font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-12 lg:py-16 xl:py-[72px]">
        <div className="flex flex-col items-start gap-2.5 sm:gap-3">
          <p className="text-[11px] sm:text-xs font-bold tracking-wide text-yellow-600">
            26. RELATED LEGAL DOCUMENTS
          </p>

          <h2 className="max-w-[800px] text-2xl font-bold leading-tight text-slate-900 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
            Accessibility is item five of nine in the Talvrin Legal sequence.
          </h2>

          <p className="max-w-[780px] pt-1 text-sm font-normal leading-6 text-gray-600 sm:text-base">
            Each Legal destination is approved individually and in order.
            Later destinations stay blocked until their own review and
            approval.
          </p>
        </div>

        <div className="mt-6 w-full overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50">
          {legalDocuments.map((document, index) => (
            <div
              key={document.number}
              className={`grid min-h-[52px] sm:min-h-[56px] grid-cols-[28px_minmax(0,1fr)_auto] sm:grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-2.5 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 ${
                index !== legalDocuments.length - 1
                  ? "border-b border-slate-900/10"
                  : ""
              } ${
                document.type === "current" ? "bg-indigo-500/[0.03]" : ""
              }`}
            >
              <span className="text-xs font-bold text-gray-600">
                {document.number}
              </span>

              <span
                className={`min-w-0 break-words text-xs sm:text-sm md:text-base font-bold leading-snug ${
                  document.type === "current"
                    ? "text-slate-900"
                    : "text-gray-600"
                }`}
              >
                {document.title}
              </span>

              <span
                className={`justify-self-end whitespace-nowrap rounded-full px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold tracking-wide ${
                  document.type === "approved"
                    ? "bg-teal-800/10 text-teal-800"
                    : document.type === "current"
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
