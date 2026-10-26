import React from "react";
import Image from "next/image";

export default function ReleaseGovernance() {
  return (
    <section className="w-full min-h-screen bg-[#F6F5FB] text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Text Content (8 Columns on Large Screens) */}
        <div className="lg:col-span-8 flex flex-col items-start justify-center">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6C5CE7] uppercase mb-3">
            RELEASE GOVERNANCE
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-6">
            An entitlement in one jurisdiction does not extend automatically.
          </h2>

          {/* Body Paragraph 1 */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-4 max-w-2xl">
            Financial regulation, data licensing and redistribution rights are
            set independently across Middle East jurisdictions. A license or
            source entitlement confirmed in one market carries no implication
            for a neighboring one, regardless of GCC membership, currency peg,
            or shared trade agreements.
          </p>

          {/* Body Paragraph 2 */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-2xl">
            Political and financial-institution sources carry their own
            contextual publication dates; a status confirmed at one point in
            time is never presented as current without a matching verification
            timestamp. Talvrin&apos;s access to, and right to redistribute,
            source material is evaluated jurisdiction by jurisdiction and
            recorded against a named claim owner.
          </p>
        </div>

        {/* Right Column - Image Card (4 Columns on Large Screens) */}
        <div className="lg:col-span-4 relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/east/6.png"
            alt="Release Governance - Executive team meeting"
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
