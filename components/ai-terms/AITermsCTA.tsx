"use client";

import Link from "next/link";

export default function AITermsCTA() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-violet-50 font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto flex min-h-[384px] w-full max-w-[1440px] flex-col items-center justify-center px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-10 lg:py-[80px]">
        <div className="flex w-full max-w-[700px] flex-col items-center gap-4">
          <h2 className="text-center text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
            An evidence-first AI boundary, not an AI
            <br className="hidden sm:block" /> marketing page.
          </h2>

          <p className="max-w-full text-center text-sm font-normal leading-6 text-gray-600 sm:text-base">
            Questions about how Talvrin&apos;s AI-assisted features work route
            to Support or the Trust Center below. This page is not a substitute
            for Talvrin&apos;s Terms of Service, Privacy Notice or Data
            Processing Addendum once fully published.
          </p>

          <div className="flex w-full flex-wrap items-center justify-center gap-3.5 pt-3">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-violet-50 transition-colors hover:bg-slate-800 sm:text-base"
            >
              Contact Support
            </Link>

            <Link
              href="/trust"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-900/25 px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-white/70 sm:text-base"
            >
              Explore Trust Center →
            </Link>
          </div>

          <p className="pt-1 text-center text-xs font-normal leading-5 text-gray-600 sm:text-sm">
            Research and intelligence platform. No trade execution. No
            manufactured investment recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}