"use client";

import Image from "next/image";

export default function DataMarketInformationTermsHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#17122F] text-violet-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_10%,rgba(91,70,180,0.28),transparent_45%),radial-gradient(ellipse_at_90%_85%,rgba(115,67,91,0.18),transparent_40%)]"
      />

      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 lg:px-12 lg:py-20 xl:gap-16 xl:px-20 py-10 sm:py-14 md:py-16">
        <div className="flex min-w-0 flex-col items-start gap-4 font-['IBM_Plex_Sans',sans-serif]">
          <p className="text-xs font-bold tracking-wide text-yellow-600">
            LEGAL / DATA &amp; MARKET INFORMATION TERMS
          </p>

          <h1 className="w-full pt-1.5 text-3xl font-bold leading-tight tracking-normal text-violet-50 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl sm:leading-[1.1] lg:leading-[1.1]">
            Data &amp; Market
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Information Terms
          </h1>

          <p className="w-full max-w-[560px] text-base font-normal leading-relaxed text-violet-50/80 sm:text-lg sm:leading-8">
            Terms governing use of market information, source content and
            related evidence available through Talvrin — source classes,
            rights and access states, timeliness, permitted use, exports and
            third-party provider terms.
          </p>

          <div className="flex w-full flex-col items-start gap-2.5 pt-1 sm:pt-[2.8px]">
            <span className="rounded-full border border-violet-50/20 bg-violet-50/10 px-3 py-1 text-xs font-bold text-violet-50">
              Version 1.0
            </span>

            <p className="max-w-full text-xs sm:text-sm font-normal leading-5 text-violet-50/60">
              Effective and last-updated dates publish once Legal confirms
              governance records.
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#terms-content"
              className="inline-flex min-h-11 sm:min-h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-violet-50 px-5 py-3 sm:py-3.5 text-center text-sm font-semibold text-slate-900 transition-colors hover:bg-white sm:text-base"
            >
              Jump to contents
            </a>

            <a
              href="#rights-access-states"
              className="inline-flex min-h-11 sm:min-h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-violet-50/30 px-5 py-3 sm:py-3.5 text-center text-sm font-semibold text-violet-50 transition-colors hover:bg-violet-50/10 sm:text-base"
            >
              Explore Data Rights →
            </a>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-11 sm:min-h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-violet-50/20 px-5 py-3 sm:py-3.5 text-sm font-semibold text-violet-50/75 transition-colors hover:bg-violet-50/10 sm:text-base"
            >
              Print
            </button>
          </div>

          <div className="inline-flex max-w-full items-center rounded-lg bg-yellow-600/20 px-3.5 py-2.5 sm:py-3">
            <p className="text-xs font-bold leading-5 text-yellow-700">
              Version history — not yet available
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[480px] xl:max-w-[500px]">
          <div className="relative w-full overflow-hidden rounded-xl">
            <Image
              src="/images/legal/data-market-information-terms/hero.png"
              alt="Data and market information terms illustration"
              width={488}
              height={648}
              priority
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) min(80vw, 460px), (max-width: 1440px) 42vw, 500px"
              className="block h-auto w-full max-h-[380px] sm:max-h-[440px] lg:max-h-[520px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}