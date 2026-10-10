"use client";

const legalDocuments = [
  { number: "01", title: "Terms of Service", status: "APPROVED & LOCKED", type: "approved" },
  { number: "02", title: "Privacy Notice", status: "APPROVED & LOCKED", type: "approved" },
  { number: "03", title: "Cookie Notice", status: "APPROVED & LOCKED", type: "approved" },
  { number: "04", title: "Acceptable Use", status: "APPROVED & LOCKED", type: "approved" },
  { number: "05", title: "Accessibility", status: "APPROVED & LOCKED", type: "approved" },
  { number: "06", title: "Data Processing Addendum", status: "APPROVED & LOCKED", type: "approved" },
  { number: "07", title: "AI Terms", status: "CURRENT", type: "current" },
  { number: "08", title: "Data & Market Information Terms", status: "BLOCKED", type: "blocked" },
  { number: "09", title: "Legal Notices", status: "BLOCKED", type: "blocked" },
] as const;

export default function LegalSequence() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-[73px]">
        <div className="mb-3 text-xs font-bold tracking-wide text-yellow-600">
          26. RELATED LEGAL / AI PRINCIPLES / TRUST
        </div>

        <h2 className="max-w-[800px] text-2xl font-bold leading-tight text-slate-900 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
          AI Terms is item seven of nine in the Talvrin Legal sequence.
        </h2>

        <p className="mt-4 max-w-[780px] text-sm leading-6 text-gray-600 sm:text-base">
          Each Legal destination is approved individually and in order. Data
          &amp; Market Information Terms and Legal Notices remain blocked until
          their own review and approval.
        </p>

        <div className="mt-6 w-full overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50">
          {legalDocuments.map((document, index) => (
            <div
              key={document.number}
              className={`grid min-h-[55px] grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-3 px-3 py-4 sm:grid-cols-[40px_minmax(0,1fr)_auto] sm:gap-4 sm:px-5 ${
                index !== legalDocuments.length - 1
                  ? "border-b border-slate-900/10"
                  : ""
              }`}
            >
              <span className="text-xs font-bold text-gray-600">
                {document.number}
              </span>

              <span
                className={`min-w-0 break-words text-xs font-bold sm:text-sm ${
                  document.type === "current"
                    ? "text-slate-900"
                    : "text-gray-600"
                }`}
              >
                {document.title}
              </span>

              <span
                className={`justify-self-end whitespace-nowrap rounded-full px-2 py-1 text-[8px] font-bold tracking-wide sm:px-3 sm:text-[10px] ${
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