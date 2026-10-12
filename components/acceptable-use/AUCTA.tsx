export default function AUCTA() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-violet-50 font-['IBM_Plex_Sans']">
      <div className="mx-auto flex min-h-[300px] sm:min-h-[340px] lg:min-h-[384px] w-full max-w-[1440px] flex-col items-center justify-center gap-3.5 sm:gap-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-14 lg:py-16 xl:py-20 text-center">
        <h2 className="max-w-[700px] text-2xl font-bold leading-tight text-slate-900 sm:text-3xl sm:leading-10 lg:text-4xl">
          A platform-protection policy, not a threatening legal wall.
        </h2>

        <p className="max-w-[700px] text-xs sm:text-sm md:text-base font-normal leading-5 sm:leading-6 text-gray-600">
          Questions about this policy route to Support or Security below. This
          page is not a substitute for Talvrin&apos;s Terms of Service once
          approved and published.
        </p>

        <div className="flex w-full flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5 pt-2 sm:pt-3">
          <a
            href="/contact"
            className="inline-flex min-h-11 sm:min-h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-slate-900 px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-violet-50 transition-colors hover:bg-slate-800 sm:text-base"
          >
            Contact Support
          </a>

          <a
            href="/trust"
            className="inline-flex min-h-11 sm:min-h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-slate-900/25 px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-white/70 sm:text-base"
          >
            Explore Trust Center →
          </a>
        </div>

        <p className="pt-1 text-[11px] sm:text-xs md:text-sm font-normal leading-5 text-gray-600">
          Research and intelligence platform. No trade execution. No
          manufactured investment recommendations.
        </p>
      </div>
    </section>
  );
}