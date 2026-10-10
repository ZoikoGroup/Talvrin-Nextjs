
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
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-8 px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(220px,308px)] lg:gap-x-3 lg:px-12 lg:py-[72px] xl:px-16">
        {/* Heading and description */}
        <div className="min-w-0 lg:col-start-1">
          <p className="text-xs font-bold tracking-wide text-indigo-500">
            ACCESSIBILITY AT A GLANCE — CONVENIENCE SUMMARY ONLY
          </p>

          <h2 className="mt-3 max-w-[820px] text-2xl font-bold leading-tight text-slate-900 sm:text-3xl sm:leading-10 lg:text-4xl">
            Four capability families. The sections below remain controlling.
          </h2>

          <p className="mt-4 max-w-[780px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
            This summary orients you quickly. If approved accessibility
            evidence is broader or narrower than this convenience grouping,
            the full sections below govern.
          </p>

          {/* Capability cards */}
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex min-w-0 flex-col items-start gap-2 rounded-2xl border border-slate-900/10 bg-violet-50 p-5 transition-colors hover:border-indigo-300 hover:bg-indigo-50"
              >
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm font-normal leading-5 text-gray-600">
                  {item.description}
                </p>

                <span className="pt-1 text-xs font-semibold text-indigo-500">
                  Jump to section →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right-side image */}
        <div className="relative mx-auto aspect-[308/397] w-full max-w-[308px] overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50 lg:col-start-2 lg:row-start-1 lg:mt-0">
          <Image
            src="/images/legal/accessibility/image.png"
            alt="Colleagues discussing accessibility and workplace practices"
            fill
            sizes="(max-width: 1023px) 100vw, 308px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
