export default function CookiePreferencesSection() {
  const commitments = [
    "Allowed choices receive equal prominence — no deceptive color hierarchy favoring acceptance.",
    "Optional categories are never preselected contrary to approved policy.",
    "Withdrawal stays as easy to reach as the initial choice, through a persistent preference link.",
    "Essential site content remains usable whether or not optional categories are accepted.",
  ];

  return (
    <section
      id="cookie-choices"
      className="relative w-full overflow-hidden bg-slate-900 text-violet-50"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-20 lg:py-[72px]">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left content */}
          <div className="flex min-w-0 flex-col items-start gap-3 font-['IBM_Plex_Sans',sans-serif]">
            <p className="text-xs font-bold tracking-wide text-yellow-600">
              05. MANAGE COOKIE PREFERENCES
            </p>

            <h2 className="max-w-[520px] text-2xl font-bold leading-tight text-violet-50 sm:text-3xl sm:leading-10 lg:text-4xl">
              How preference management will work, once it exists.
            </h2>

            <p className="max-w-[560px] pt-1 pb-2 text-sm font-normal leading-6 text-violet-50/80 sm:text-base">
              A dedicated Manage Cookie Preferences control renders only once
              an approved consent-management platform (CMP) is configured.
              Until then, no preference center is implied or simulated here.
            </p>

            <span className="inline-flex max-w-full items-center rounded-full bg-yellow-600/20 px-3.5 py-1.5 text-xs font-bold tracking-wide text-yellow-700">
              NO APPROVED CONSENT TOOL CONFIGURED YET
            </span>
          </div>

          {/* Right commitments card */}
          <div className="flex min-w-0 flex-col gap-4 rounded-2xl border border-violet-50/10 bg-violet-50/[0.05] p-5 sm:p-6">
            <p className="text-xs font-bold tracking-wide text-violet-50/60">
              COMMITMENTS ONCE A CMP EXISTS
            </p>

            <ul className="flex flex-col gap-3">
              {commitments.map((commitment) => (
                <li
                  key={commitment}
                  className="flex items-start gap-2.5 text-sm font-normal leading-5 text-violet-50/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[7px] size-[5px] shrink-0 rounded-full bg-indigo-500"
                  />
                  <span>{commitment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}