
const legalDocuments = [
  {
    number: "01",
    title: "Terms of Service",
    status: "APPROVED & LOCKED",
    type: "approved",
    href: "/terms-of-service",
  },
  {
    number: "02",
    title: "Privacy Notice",
    status: "APPROVED & LOCKED",
    type: "approved",
    href: "/privacy",
  },
  {
    number: "03",
    title: "Cookie Notice",
    status: "CURRENT",
    type: "current",
    href: "/cookie-notice",
  },
  {
    number: "04",
    title: "Acceptable Use",
    status: "APPROVED & LOCKED",
    type: "approved",
    href: "/acceptable-use",
  },
  {
    number: "05",
    title: "Accessibility",
    status: "APPROVED & LOCKED",
    type: "approved",
    href: "/accessibility",
  },
  {
    number: "06",
    title: "Data Processing Addendum",
    status: "BLOCKED",
    type: "blocked",
    href: "/data-processing-addendum",
  },
  {
    number: "07",
    title: "AI Terms",
    status: "APPROVED & LOCKED",
    type: "approved",
    href: "/ai-terms",
  },
  {
    number: "08",
    title: "Data & Market Information Terms",
    status: "BLOCKED",
    type: "blocked",
    href: "/data-market-information-terms",
  },
  {
    number: "09",
    title: "Legal Notices",
    status: "BLOCKED",
    type: "blocked",
    href: "/legal-notices",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles = {
    approved: "bg-teal-800/10 text-teal-800",
    current: "bg-indigo-500/10 text-indigo-500",
    blocked: "bg-yellow-600/10 text-yellow-800",
  };

  const type =
    status === "CURRENT"
      ? "current"
      : status === "BLOCKED"
        ? "blocked"
        : "approved";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full px-3 py-1 text-[10px] font-bold tracking-wide sm:text-xs ${styles[type]}`}
    >
      {status}
    </span>
  );
}

export default function CookieNoticeRelated() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-20 lg:py-[72px]">
        {/* Heading */}
        <div className="flex flex-col items-start gap-3">
          <p className="text-xs font-bold tracking-wide text-yellow-600">
            RELATED LEGAL DOCUMENTS
          </p>

          <h2 className="max-w-[800px] text-2xl font-bold leading-tight text-slate-900 sm:text-3xl sm:leading-10 lg:text-4xl">
            Cookie Notice is item three of nine in the Talvrin Legal sequence.
          </h2>

          <p className="max-w-[780px] pt-1 text-sm leading-6 text-gray-600 sm:text-base">
            Each Legal destination is approved individually. This notice works
            alongside the Privacy Notice, Terms of Service and other Legal
            destinations rather than duplicating them.
          </p>
        </div>

        {/* Legal document list */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50">
          {legalDocuments.map((document, index) => (
            <a
              key={document.number}
              href={document.href}
              aria-current={
                document.type === "current" ? "page" : undefined
              }
              className={`flex min-h-[52px] items-center gap-3 px-3 py-3 transition-colors hover:bg-indigo-500/5 sm:gap-4 sm:px-5 ${
                index !== legalDocuments.length - 1
                  ? "border-b border-slate-900/10"
                  : ""
              }`}
            >
              <span className="w-6 shrink-0 text-[10px] font-bold text-gray-600 sm:w-10 sm:text-xs">
                {document.number}
              </span>

              <span
                className={`min-w-0 flex-1 text-xs font-bold sm:text-sm ${
                  document.type === "current"
                    ? "text-slate-900"
                    : "text-gray-600"
                }`}
              >
                {document.title}
              </span>

              <StatusBadge status={document.status} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
