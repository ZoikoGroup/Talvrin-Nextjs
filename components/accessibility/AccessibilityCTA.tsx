
"use client";

import Link from "next/link";

export default function AccessibilityCTA() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-violet-50 font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto flex min-h-[300px] sm:min-h-[340px] lg:min-h-[384px] w-full max-w-[1440px] items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-14 lg:py-16 xl:py-20">
        <div className="flex w-full max-w-[700px] flex-col items-center gap-3.5 sm:gap-4 text-center">
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl sm:leading-10 lg:text-4xl">
            An evidence-led statement, not a
            <br className="hidden sm:block" /> compliance badge.
          </h2>

          <p className="text-xs sm:text-sm md:text-base font-normal leading-5 sm:leading-6 text-gray-600">
            Hit a barrier using Talvrin? Tell us what happened — no diagnosis
            required. Enterprise procurement can request formal evidence
            through Trust Center once it is approved for release.
          </p>

          <div className="flex w-full flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5 pt-2 sm:pt-3">
            <Link
              href="/contact"
              className="inline-flex min-h-11 sm:min-h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-slate-900 px-5 sm:px-6 py-3 sm:py-3.5 text-center text-sm font-semibold text-violet-50 transition-colors hover:bg-slate-800 sm:text-base"
            >
              Report an accessibility barrier
            </Link>

            <Link
              href="/trust-center"
              className="inline-flex min-h-11 sm:min-h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-slate-900/25 px-5 sm:px-6 py-3 sm:py-3.5 text-center text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900/5 sm:text-base"
            >
              Explore Trust Center →
            </Link>
          </div>

          <p className="pt-1 text-[11px] sm:text-xs md:text-sm font-normal leading-5 text-gray-600">
            Research and intelligence platform. No trade execution. No
            manufactured investment recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
