import React from "react";
import Image from "next/image";

export default function SouthAsiaOceania() {
  return (
    <section className="w-full min-h-screen bg-white text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column - Content & Cards */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#B98132] uppercase mb-3">
            JURISDICTION GROUPINGS — SOUTH ASIA &amp; OCEANIA
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-4">
            India, Australia and New Zealand run independent regulatory regimes.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-8 max-w-xl">
            Geographic grouping for navigation only — proximity does not imply
            shared jurisdiction, language or source entitlement.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/* India Card */}
            <div className="bg-[#F6F5FB] rounded-2xl p-5 shadow-sm border border-slate-200/60 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-sm font-bold text-[#171335]">India</h3>
                  <span className="text-[9px] font-semibold tracking-wider bg-[#ECEBF5] text-slate-500 px-2 py-0.5 rounded-full uppercase whitespace-nowrap self-start sm:self-auto">
                    NOT CURRENTLY AVAILABLE
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  National jurisdiction context; no dataset or market record is
                  published yet.
                </p>
              </div>
            </div>

            {/* Australia Card */}
            <div className="bg-[#F6F5FB] rounded-2xl p-5 shadow-sm border border-slate-200/60 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-sm font-bold text-[#171335]">
                    Australia
                  </h3>
                  <span className="text-[9px] font-semibold tracking-wider bg-[#ECEBF5] text-slate-500 px-2 py-0.5 rounded-full uppercase whitespace-nowrap self-start sm:self-auto">
                    NOT CURRENTLY AVAILABLE
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  National jurisdiction context; no dataset or market record is
                  published yet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image Card */}
        <div className="w-full lg:w-5/12 relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/asia/5.png"
            alt="India, Australia and New Zealand independent regulatory regimes"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
