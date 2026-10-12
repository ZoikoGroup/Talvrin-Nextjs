
"use client";

import Image from "next/image";

export default function AccessibilityPosture() {
  return (
    <section className="relative w-full overflow-hidden bg-[#17122F] font-['IBM_Plex_Sans',sans-serif] text-violet-50">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,345px)] lg:gap-8 lg:px-12 xl:grid-cols-[minmax(0,1fr)_345px] xl:gap-12 xl:px-20 py-10 sm:py-12 lg:py-16 xl:py-[72px]">
        
        {/* Left content */}
        <div className="min-w-0">
          <p className="text-[11px] sm:text-xs font-bold tracking-wide text-yellow-600">
            05. CURRENT CONFORMANCE POSTURE
          </p>

          <h2 className="mt-2.5 sm:mt-3 max-w-[820px] text-2xl font-bold leading-tight sm:text-3xl sm:leading-10 lg:text-4xl">
            Target, tested scope and formal status are three different things.
          </h2>

          <p className="mt-3 sm:mt-4 max-w-[780px] text-sm font-normal leading-6 text-violet-50/70 sm:text-base">
            We keep these separate on purpose — collapsing them into a single
            &quot;compliant&quot; badge would overstate what is actually
            established today.
          </p>

          {/* Information cards */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-3.5 sm:gap-4 sm:grid-cols-2">
            <div className="flex h-full min-w-0 flex-col items-start gap-2.5 sm:gap-3 rounded-2xl border border-violet-50/10 bg-violet-50/5 p-4 sm:p-5 lg:p-6">
              <p className="text-[11px] sm:text-xs font-bold tracking-wide text-violet-50/50">
                TARGETED STANDARD
              </p>

              <h3 className="text-base sm:text-lg font-bold leading-6 text-violet-50">
                WCAG 2.2 Level AA
              </h3>

              <p className="text-xs sm:text-sm font-normal leading-5 text-violet-50/70">
                The minimum baseline Talvrin designs and tests toward across
                its public experience.
              </p>
            </div>

            <div className="flex h-full min-w-0 flex-col items-start gap-2.5 sm:gap-3 rounded-2xl border border-violet-50/10 bg-violet-50/5 p-4 sm:p-5 lg:p-6">
              <p className="text-[11px] sm:text-xs font-bold tracking-wide text-violet-50/50">
                TESTED SCOPE
              </p>

              <h3 className="text-base sm:text-lg font-bold leading-6 text-violet-50">
                Not yet published
              </h3>

              <p className="text-xs sm:text-sm font-normal leading-5 text-violet-50/70">
                No approved Accessibility Evidence Registry has been supplied
                to publish a per-surface tested-scope summary yet.
              </p>
            </div>
          </div>
        </div>

        {/* Right-side image */}
        <div className="relative mx-auto aspect-[4/3] sm:aspect-square w-full max-w-[360px] lg:max-w-none overflow-hidden rounded-2xl border border-violet-50/10 bg-violet-50/5">
          <Image
            src="/images/legal/accessibility/image1.png"
            alt="Colleagues discussing accessibility and reviewing information"
            fill
            priority
            sizes="(max-width: 1023px) min(100vw - 32px, 360px), (max-width: 1440px) 32vw, 345px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
