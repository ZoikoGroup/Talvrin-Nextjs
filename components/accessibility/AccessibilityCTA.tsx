
"use client";

import Link from "next/link";

export default function AccessibilityCTA() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-violet-50 font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto flex w-full max-w-[1440px] justify-center px-5 py-16 sm:px-8 sm:py-20 lg:py-[80px]">
        <div className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
            An evidence-led statement, not a
            <br className="hidden sm:block" /> compliance badge.
          </h2>

          <p className="text-sm font-normal leading-6 text-gray-600 sm:text-base">
            Hit a barrier using Talvrin? Tell us what happened — no diagnosis
            required. Enterprise procurement can request formal evidence
            through Trust Center once it is approved for release.
          </p>

          <div className="flex w-full flex-wrap items-center justify-center gap-3.5 pt-3">
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-3.5 text-center text-sm font-semibold text-violet-50 transition-colors hover:bg-slate-800 sm:w-auto sm:text-base"
            >
              Report an accessibility barrier
            </Link>

            <Link
              href="/trust-center"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-slate-900/25 px-6 py-3.5 text-center text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900/5 sm:w-auto sm:text-base"
            >
              Explore Trust Center →
            </Link>
          </div>

          <p className="pt-[4.8px] text-xs font-normal leading-5 text-gray-600 sm:text-sm">
            Research and intelligence platform. No trade execution. No
            manufactured investment recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
