"use client";

import Image from "next/image";

export default function CookieNoticeHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#17122F] text-violet-50">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_10%,rgba(91,70,180,0.28),transparent_45%),radial-gradient(ellipse_at_90%_85%,rgba(115,67,91,0.18),transparent_40%)]"
      />

      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 md:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 lg:px-12 lg:py-20 xl:gap-16 xl:px-16 2xl:px-20">
        {/* Left content */}
        <div className="flex min-w-0 flex-col items-start gap-4 font-['IBM_Plex_Sans',sans-serif]">
          <p className="text-xs font-bold tracking-wide text-yellow-600">
            LEGAL / COOKIE NOTICE
          </p>

          <h1 className="pt-1.5 text-4xl font-bold leading-tight tracking-normal text-violet-50 sm:text-5xl sm:leading-[1.1] lg:text-6xl lg:leading-[1.1]">
            Cookie Notice
          </h1>

          <p className="w-full max-w-[560px] text-base font-normal leading-7 text-violet-50/80 sm:text-lg sm:leading-8">
            How TALVRIN uses cookies, local storage, SDKs, pixels and similar
            technologies across its public and authenticated surfaces — and
            how applicable choices can be managed, without overstating actual
            tracking behavior.
          </p>

          {/* Version and review information */}
          <div className="flex w-full flex-col items-start gap-2.5 pt-[2.6px]">
            <span className="rounded-full border border-violet-50/20 bg-violet-50/10 px-3 py-[4.8px] text-xs font-bold text-violet-50">
              Version 1.0
            </span>

            <p className="max-w-full text-sm font-normal leading-5 text-violet-50/60">
              Effective and last-updated dates publish once Legal confirms
              governance records.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex w-full flex-wrap items-center gap-3 pt-2">
            <a
              href="#contents"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-violet-50 px-5 py-3.5 text-center text-sm font-semibold text-slate-900 transition-colors hover:bg-white sm:text-base"
            >
              Jump to contents
            </a>

            <a
              href="#cookie-choices"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-violet-50/30 px-5 py-3.5 text-center text-sm font-semibold text-violet-50 transition-colors hover:bg-violet-50/10 sm:text-base"
            >
              See how choices will work →
            </a>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-violet-50/20 px-5 py-3.5 text-sm font-semibold text-violet-50/75 transition-colors hover:bg-violet-50/10 sm:text-base"
            >
              Print
            </button>
          </div>

          {/* Cookie preferences status */}
          <div className="inline-flex max-w-full items-center rounded-lg bg-yellow-600/20 px-3.5 py-3">
            <p className="text-xs font-bold leading-5 text-yellow-700">
              Manage Cookie Preferences — not yet available
            </p>
          </div>
        </div>

        {/* Right hero image */}
        <div className="relative mx-auto w-full min-w-0 max-w-[500px] lg:max-w-none">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/legal/cookie-notice/hero.png"
              alt="Professionals discussing cookie and data privacy matters in a workplace"
              fill
              priority
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 80vw, (max-width: 1440px) 42vw, 616px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}