import React from "react";
import Image from "next/image";

export default function MiddleEastBoundaries() {
  return (
    <section className="w-full bg-white text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Text Content (8 Columns on Large Screens) */}
        <div className="lg:col-span-8 flex flex-col items-start justify-center">
          {/* Tag / Category Subtitle */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#B98132] uppercase mb-3">
            AUTHORITY &amp; BOUNDARIES
          </span>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-6">
            The Middle East is not a single regulatory bloc.
          </h2>

          {/* Body Paragraph */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-2xl">
            The region spans Gulf Cooperation Council member states, Levant
            jurisdictions and other national regulatory regimes, each with its
            own licensing, disclosure and market-holiday rules. Talvrin&apos;s
            research architecture is designed to extend across all of them, but
            that design choice is not a coverage claim. This page states,
            jurisdiction by jurisdiction, what is actually released, pending, or
            not yet available.
          </p>
        </div>

        {/* Right Column - Image Card (4 Columns on Large Screens) */}
        <div className="lg:col-span-4 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/east/2.png"
            alt="The Middle East is not a single regulatory bloc - Business consultation"
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
