const meta = [
  { label: "DOCUMENT ID", value: "TAL-LEGAL-TOS-01" },
  { label: "LAST REVIEWED", value: "Not yet recorded — pending Legal review" },
  { label: "EFFECTIVE DATE", value: "Pending approval" },
  { label: "REVISION", value: "v1.0 · draft" },
  { label: "CONTRACTING ENTITY", value: "Pending confirmation — see trading-name disclosure below" },
];

const surfaces = [
  {
    title: "Public site",
    description: "Browsing Talvrin’s public marketing and research-preview pages without an account.",
  },
  {
    title: "Authenticated product",
    description: "Signed-in use of Talvrin’s research, evidence and monitoring workspace.",
  },
  {
    title: "Enterprise agreement (where executed)",
    description: "Governs an organization’s use alongside these Terms; see Organization and team usage.",
    href: "#organization-and-team-usage",
  },
];

export default function TermsOfServiceStatus() {
  return (
    <section className="w-full border-b border-slate-900/10 bg-white font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-12 lg:py-14">
        {/* Document status */}
        <div className="flex flex-col items-start gap-3 rounded-2xl border border-slate-900/10 bg-surface px-4 py-4 sm:flex-row sm:gap-4 sm:px-6 sm:py-5">
          <span className="shrink-0 whitespace-nowrap rounded-full bg-slate-900/10 px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-wide text-gray-600">
            PREPARED — NOT YET LOCKED
          </span>
          <p className="min-w-0 flex-1 text-sm sm:text-base leading-6 text-slate-700">
            This Terms of Service has not completed Legal and Product sign-off. Dates, applicability and
            contracting entity are shown honestly as pending rather than assumed.
          </p>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
          {meta.map((item) => (
            <div key={item.label} className="flex min-w-0 flex-col gap-1.5">
              <dt className="text-[11px] sm:text-xs font-bold tracking-wide text-gray-600">{item.label}</dt>
              <dd className="break-words text-sm leading-5 text-slate-900">{item.value}</dd>
            </div>
          ))}
        </dl>

        {/* Applicability */}
        <div className="mt-8 sm:mt-10">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.1em] text-indigo-500">APPLICABILITY</p>
          <h2 className="mt-2 text-lg sm:text-xl font-bold leading-7 text-slate-900">
            These Terms apply across Talvrin surfaces, not as one presumed global contract.
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-3">
            {surfaces.map((surface) => {
              const body = (
                <>
                  <h3 className="text-sm sm:text-base font-bold leading-5 text-slate-900">{surface.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-5 text-gray-600">{surface.description}</p>
                </>
              );
              const className =
                "block min-w-0 rounded-xl border border-slate-900/10 bg-surface p-4 sm:p-5";
              return surface.href ? (
                <a
                  key={surface.title}
                  href={surface.href}
                  className={`${className} transition-colors hover:border-indigo-300 hover:bg-indigo-50/70`}
                >
                  {body}
                </a>
              ) : (
                <div key={surface.title} className={className}>
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
