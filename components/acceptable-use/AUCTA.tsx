export default function AUCTA() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-violet-50 font-['IBM_Plex_Sans']">
      <div className="mx-auto flex min-h-[384px] w-full max-w-[1440px] flex-col items-center justify-center gap-4 px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <h2 className="max-w-[700px] text-[28px] font-bold leading-9 text-slate-900 sm:text-3xl sm:leading-10 lg:text-4xl">
          A platform-protection policy, not a threatening legal wall.
        </h2>

        <p className="max-w-[700px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
          Questions about this policy route to Support or Security below. This
          page is not a substitute for Talvrin&apos;s Terms of Service once
          approved and published.
        </p>

        <div className="flex w-full flex-col items-stretch justify-center gap-3 pt-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
          <a
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-violet-50 transition-colors hover:bg-slate-800 sm:text-base"
          >
            Contact Support
          </a>

          <a
            href="/trust"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-900/25 px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-white/70 sm:text-base"
          >
            Explore Trust Center →
          </a>
        </div>

        <p className="pt-1 text-xs font-normal leading-5 text-gray-600 sm:text-sm">
          Research and intelligence platform. No trade execution. No
          manufactured investment recommendations.
        </p>
      </div>
    </section>
  );
}