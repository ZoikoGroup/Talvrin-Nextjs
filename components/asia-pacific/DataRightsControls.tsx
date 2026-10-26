import React from "react";
import Image from "next/image";

export default function DataRightsControls() {
  return (
    <section className="w-full min-h-screen bg-white text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Text Content (8 Columns on Large Screens) */}
        <div className="lg:col-span-8 flex flex-col items-start justify-center">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#B98132] uppercase mb-3">
            DATA-RIGHTS CONTROLS
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-6">
            An entitlement in one jurisdiction does not extend automatically.
          </h2>

          {/* Body Paragraph 1 */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-4 max-w-2xl">
            Financial regulation, data licensing and redistribution rights are
            set independently across Asia-Pacific jurisdictions. A license or
            source entitlement confirmed in one market carries no implication
            for a neighboring one, regardless of trade-bloc membership,
            geographic proximity or shared time zone.
          </p>

          {/* Body Paragraph 2 */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-2xl">
            Talvrin&apos;s access to, and right to redistribute, source material
            is evaluated jurisdiction by jurisdiction and recorded against a
            named claim owner and verification timestamp.
          </p>
        </div>

        {/* Right Column - Image Card (4 Columns on Large Screens) */}
        <div className="lg:col-span-4 relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/asia/7.png"
            alt="Data-rights controls - Professional presentation"
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
