"use client";

import Link from "next/link";

export default function DataMarketInformationCTA() {
  return (
    <section className="relative w-full border-t border-slate-900/10 bg-violet-50 font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto flex min-h-[368px] w-full max-w-[1440px] items-center justify-center px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-12 lg:py-[80px] xl:px-16">
        <div className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center">
          {/* HEADING */}
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl sm:leading-10">
            A rights-aware market-information surface,
            <br className="hidden sm:block" /> not a data catalog.
          </h2>

          {/* DESCRIPTION */}
          <p className="text-base font-normal leading-6 text-gray-600">
            Questions about source rights, entitlements or provider terms route
            to Support or the Trust Center below. This page is not a substitute
            for Talvrin&apos;s Terms of Service, Acceptable Use policy or AI
            Terms once fully published.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex w-full flex-col items-center justify-center gap-3.5 pt-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-3.5 text-base font-semibold text-violet-50 transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 sm:w-auto"
            >
              Contact Support
            </Link>

            <Link
              href="/trust-center"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-slate-900/25 px-6 py-3.5 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 sm:w-auto"
            >
              Explore Trust Center →
            </Link>
          </div>

          {/* DISCLAIMER */}
          <p className="pt-1 text-sm font-normal leading-5 text-gray-600">
            Research and intelligence platform. No trade execution. No
            manufactured investment recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}