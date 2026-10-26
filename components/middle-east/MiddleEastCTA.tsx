import React from "react";

export default function MiddleEastCTA() {
  return (
    <section className="w-full min-h-screen bg-[#171335] text-white py-20 px-6 sm:px-12 md:px-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="max-w-4xl w-full flex flex-col items-center justify-center mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight max-w-3xl">
          See what&apos;s released before you assume Middle East coverage.
        </h2>

        {/* Subtitle / Description */}
        <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-10 max-w-xl">
          Request access to Talvrin, backed by jurisdiction and source pages
          that never overstate what is actually published.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 items-center justify-center mb-16">
          <a
            href="#"
            className="bg-slate-100 hover:bg-white text-[#171335] font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 shadow-md inline-flex items-center justify-center text-center"
          >
            Request Access
          </a>
          <a
            href="#"
            className="bg-transparent hover:bg-white/5 border border-slate-700/80 text-white font-medium text-sm px-7 py-3.5 rounded-xl transition-all duration-200 inline-flex items-center justify-center text-center"
          >
            Back to Global Coverage
          </a>
        </div>

        {/* Footer / Disclaimer Note */}
        <p className="text-[11px] leading-normal text-slate-500 max-w-lg mx-auto">
          Research and intelligence platform. No trade execution, suitability
          ranking, asset allocation, or manufactured investment recommendations.
        </p>
      </div>
    </section>
  );
}
