import React from "react";
import Image from "next/image";

interface FallbackCard {
  title: string;
  description: string;
}

const FALLBACK_ITEMS: FallbackCard[] = [
  {
    title: "Text-first jurisdiction detail",
    description:
      "Every country and source record above is readable as text and lists, not only through a map, so the same information reaches keyboard and screen-reader visitors.",
  },
  {
    title: "No heavy client-side dependency",
    description:
      "Core coverage content loads and reflows without map tiles, animated widgets, or other connection-heavy components.",
  },
  {
    title: "Keyboard and screen-reader parity",
    description:
      "Every disclosure on this page is reachable with Tab and Shift+Tab and reads the same status information as the visual layout.",
  },
];

export default function ConnectivityFallback() {
  return (
    <section className="w-full min-h-screen bg-white text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content & Cards (8 Columns on Large Screens) */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#B98132] uppercase mb-3">
            CONNECTIVITY &amp; FALLBACK
          </span>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-4">
            Built to work without assuming a map, a fast connection or a mouse.
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-8 max-w-2xl">
            This page&apos;s jurisdiction and source detail is published as
            ordinary text and lists, reflows at 320px and 200% zoom, and never
            relies on a single interactive widget to carry meaning.
          </p>

          {/* Cards Grid (3 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {FALLBACK_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-[#F6F5FB] rounded-2xl p-5 shadow-sm border border-slate-200/60 flex flex-col justify-start"
              >
                <h3 className="text-xs sm:text-sm font-bold text-[#171335] leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-[11px] leading-relaxed text-slate-500 font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image Card (4 Columns on Large Screens) */}
        <div className="lg:col-span-4 relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/africa/6.png"
            alt="Connectivity and Fallback - Team examining printed documentation"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
