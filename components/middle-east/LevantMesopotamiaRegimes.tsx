import React from "react";
import Image from "next/image";

interface JurisdictionItem {
  name: string;
  status: string;
  description: string;
}

const JURISDICTIONS: JurisdictionItem[] = [
  {
    name: "Jordan",
    status: "NOT CURRENTLY AVAILABLE",
    description:
      "National jurisdiction context; no dataset or market record is published yet.",
  },
  {
    name: "Lebanon",
    status: "NOT CURRENTLY AVAILABLE",
    description:
      "National jurisdiction context; no dataset or market record is published yet.",
  },
  {
    name: "Iraq",
    status: "NOT CURRENTLY AVAILABLE",
    description:
      "National jurisdiction context; no dataset or market record is published yet.",
  },
];

export default function LevantMesopotamiaRegimes() {
  return (
    <section className="w-full min-h-screen bg-[#F6F5FB] text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content & Cards (8 Columns on Large Screens) */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6C5CE7] uppercase mb-3">
            JURISDICTION GROUPINGS — LEVANT &amp; MESOPOTAMIA
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-4">
            Jordan, Lebanon, Iraq and Israel run independent regulatory regimes.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-8 max-w-xl">
            Geographic proximity and shared history do not imply shared market
            infrastructure or source rights. Each jurisdiction below carries its
            own independent record.
          </p>

          {/* Reusable Cards Grid (3 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {JURISDICTIONS.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-sm font-bold text-[#171335]">
                      {item.name}
                    </h3>
                    <span className="text-[9px] font-semibold tracking-wider bg-[#F1F0F5] text-slate-500 px-2 py-0.5 rounded-full uppercase whitespace-nowrap self-start sm:self-auto">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image Card (4 Columns on Large Screens) */}
        <div className="lg:col-span-4 relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[3/3] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/east/4.png"
            alt="Jordan, Lebanon, Iraq and Israel independent regulatory regimes"
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
