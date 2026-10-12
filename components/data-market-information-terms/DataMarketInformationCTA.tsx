"use client";

import Link from "next/link";

export default function DataMarketInformationCTA() {
  return (
    <section className="relative w-full border-t border-slate-900/10 bg-violet-50 font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto flex min-h-[300px] sm:min-h-[340px] lg:min-h-[368px] w-full max-w-[1440px] items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-14 lg:py-16 xl:py-20">
        <div className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center">
          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-slate-900 sm:leading-10">
            A rights-aware market-information surface,{" "}
            <span className="sm:inline lg:block">not a data catalog.</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-sm sm:text-base font-normal leading-relaxed text-gray-600">
            Questions about source rights, entitlements or provider terms route
            to Support or the Trust Center below. This page is not a substitute
            for Talvrin&apos;s Terms of Service, Acceptable Use policy or AI
            Terms once fully published.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex w-full flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 pt-2 sm:pt-3">
            <Link
              href="/contact-support"
              className="inline-flex min-h-11 sm:min-h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-slate-900 px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-violet-50 transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              Contact Support
            </Link>

            <Link
              href="/trust-center"
              className="inline-flex min-h-11 sm:min-h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-slate-900/25 px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-slate-900 transition-colors hover:bg-slate-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              Explore Trust Center →
            </Link>
          </div>

          {/* DISCLAIMER */}
          <p className="pt-2 text-xs sm:text-sm font-normal leading-5 text-gray-600">
            Research and intelligence platform. No trade execution. No
            manufactured investment recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}