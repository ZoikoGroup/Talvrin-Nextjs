
import Link from "next/link";

export default function CookieNoticeCTA() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-violet-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-[80px]">
        <div className="flex w-full max-w-[700px] flex-col items-center gap-4">
          {/* Heading */}
          <h2 className="text-center font-['IBM_Plex_Sans',sans-serif] text-2xl font-bold leading-tight text-slate-900 sm:text-3xl sm:leading-10 lg:text-4xl">
            A transparency surface, not a conversion
            <span className="block">opt-in machine.</span>
          </h2>

          {/* Description */}
          <p className="text-center font-['IBM_Plex_Sans',sans-serif] text-sm font-normal leading-6 text-gray-600 sm:text-base">
            Disclosures match deployed technology, choices stay understandable
            and technically enforced, and core content remains accessible
            regardless of what you choose.
          </p>

          {/* CTA buttons */}
          <div className="flex w-full flex-wrap items-center justify-center gap-3.5 pt-3">
            <Link
              href="/contact-support"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-slate-900 px-6 py-3.5 text-center font-['IBM_Plex_Sans',sans-serif] text-sm font-semibold text-violet-50 transition-colors hover:bg-slate-800 sm:text-base"
            >
              Contact Support
            </Link>

            <Link
              href="/privacy"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-900/25 px-6 py-3.5 text-center font-['IBM_Plex_Sans',sans-serif] text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900/5 sm:text-base"
            >
              Explore Privacy →
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="pt-[4.8px] text-center font-['IBM_Plex_Sans',sans-serif] text-xs font-normal leading-5 text-gray-600 sm:text-sm">
            Research and intelligence platform. No trade execution. No
            manufactured investment recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
