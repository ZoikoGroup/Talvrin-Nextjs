
"use client";

import Image from "next/image";

export default function AccessibilityPosture() {
  return (
    <section className="relative w-full overflow-hidden bg-[#17122F] font-['IBM_Plex_Sans',sans-serif] text-violet-50">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,345px)] lg:gap-8 lg:px-12 lg:py-[72px] xl:grid-cols-[minmax(0,1fr)_345px] xl:gap-12 xl:px-16">
        
        {/* Left content */}
        <div className="min-w-0">
          <p className="text-xs font-bold tracking-wide text-yellow-600">
            05. CURRENT CONFORMANCE POSTURE
          </p>

          <h2 className="mt-3 max-w-[820px] text-2xl font-bold leading-tight sm:text-3xl sm:leading-10 lg:text-4xl">
            Target, tested scope and formal status are three different things.
          </h2>

          <p className="mt-4 max-w-[780px] text-sm font-normal leading-6 text-violet-50/70 sm:text-base">
            We keep these separate on purpose — collapsing them into a single
            &quot;compliant&quot; badge would overstate what is actually
            established today.
          </p>

          {/* Information cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex min-w-0 flex-col items-start gap-3 rounded-2xl border border-violet-50/10 bg-violet-50/5 px-6 pb-8 pt-6">
              <p className="text-xs font-bold tracking-wide text-violet-50/50">
                TARGETED STANDARD
              </p>

              <h3 className="text-lg font-bold leading-6 text-violet-50">
                WCAG 2.2 Level AA
              </h3>

              <p className="text-sm font-normal leading-5 text-violet-50/70">
                The minimum baseline Talvrin designs and tests toward across
                its public experience.
              </p>
            </div>

            <div className="flex min-w-0 flex-col items-start gap-3 rounded-2xl border border-violet-50/10 bg-violet-50/5 p-6">
              <p className="text-xs font-bold tracking-wide text-violet-50/50">
                TESTED SCOPE
              </p>

              <h3 className="text-lg font-bold leading-6 text-violet-50">
                Not yet published
              </h3>

              <p className="text-sm font-normal leading-5 text-violet-50/70">
                No approved Accessibility Evidence Registry has been supplied
                to publish a per-surface tested-scope summary yet.
              </p>
            </div>
          </div>
        </div>

        {/* Right-side image */}
        <div className="relative mx-auto aspect-square w-full max-w-[417px] overflow-hidden rounded-2xl border border-violet-50/10 bg-violet-50/5 lg:max-w-none">
          <Image
            src="/images/legal/accessibility/image1.png"
            alt="Colleagues discussing accessibility and reviewing information"
            fill
            priority
            sizes="(max-width: 1023px) min(100vw - 40px, 417px), (max-width: 1440px) 32vw, 417px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
