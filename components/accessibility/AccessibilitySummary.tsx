
"use client";

import Image from "next/image";

const capabilities = [
  {
    title: "Navigate & Operate",
    description:
      "Keyboard, focus, zoom/reflow and mobile touch behavior.",
    href: "#navigate-operate",
  },
  {
    title: "Perceive & Understand",
    description:
      "Screen readers, color/contrast, motion and equivalent chart data.",
    href: "#perceive-understand",
  },
  {
    title: "Forms & Access",
    description:
      "Forms, accessible authentication, documents and media.",
    href: "#forms-access",
  },
];

export default function AccessibilitySummary() {
  return (
    <section className="w-full border-b border-slate-900/10 bg-white font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(220px,308px)] lg:gap-x-8 lg:px-12 lg:py-16 xl:px-20 xl:py-[72px] py-10 sm:py-12">
        {/* Heading and description */}
        <div className="min-w-0 lg:col-start-1">
          <p className="text-[11px] sm:text-xs font-bold tracking-wide text-indigo-500">
            ACCESSIBILITY AT A GLANCE — CONVENIENCE SUMMARY ONLY
          </p>

          <h2 className="mt-2.5 sm:mt-3 max-w-[820px] text-2xl font-bold leading-tight text-slate-900 sm:text-3xl sm:leading-10 lg:text-4xl">
            Four capability families. The sections below remain controlling.
          </h2>

          <p className="mt-3 sm:mt-4 max-w-[780px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
            This summary orients you quickly. If approved accessibility
            evidence is broader or narrower than this convenience grouping,
            the full sections below govern.
          </p>

          {/* Capability cards */}
          <div className="mt-6 sm:mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex min-h-[130px] sm:min-h-[140px] h-full min-w-0 flex-col items-start gap-2 rounded-2xl border border-slate-900/10 bg-violet-50 p-4 sm:p-5 transition-colors hover:border-indigo-300 hover:bg-indigo-50"
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal leading-5 text-gray-600">
                  {item.description}
                </p>

                <span className="mt-auto pt-2 text-xs font-semibold text-indigo-500">
                  Jump to section →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right-side image */}
        <div className="relative mx-auto aspect-[308/397] w-full max-w-[280px] sm:max-w-[308px] overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50 lg:col-start-2 lg:row-start-1 lg:mt-0">
          <Image
            src="/images/legal/accessibility/image.png"
            alt="Colleagues discussing accessibility and workplace practices"
            fill
            sizes="(max-width: 1023px) min(100vw - 32px, 308px), 308px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
