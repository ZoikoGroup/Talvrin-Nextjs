import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function ApacOverview() {
  return (
    <section className="w-full bg-[#F6F5FB] text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content & Cards */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#B98132] uppercase mb-3">
            APAC OVERVIEW
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-4">
            Three groupings, each its own approval object.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-8 max-w-xl">
            North Asia, Southeast Asia, and South Asia &amp; Oceania are tracked
            separately below. None inherits another&apos;s status.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* North Asia Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-[#171335]">
                    North Asia
                  </h3>
                  <span className="text-[10px] font-semibold tracking-wider bg-[#ECEBF5] text-[#4F46E5] px-2.5 py-1 rounded-full uppercase">
                    PENDING APPROVAL
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Jurisdiction and source context for Japan, South Korea,
                  Mainland China, Hong Kong and Taiwan.
                </p>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-[#5849E9] hover:underline"
                >
                  View North Asia <ArrowDown className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Southeast Asia Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-[#171335]">
                    Southeast Asia
                  </h3>
                  <span className="text-[10px] font-semibold tracking-wider bg-[#ECEBF5] text-[#4F46E5] px-2.5 py-1 rounded-full uppercase">
                    PENDING APPROVAL
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Jurisdiction and source context for Singapore, Indonesia,
                  Malaysia and Thailand.
                </p>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-[#5849E9] hover:underline"
                >
                  View Southeast Asia <ArrowDown className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image Card */}
        <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/asia/3.png"
            alt="Three Groupings - Team collaboration high-five"
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
