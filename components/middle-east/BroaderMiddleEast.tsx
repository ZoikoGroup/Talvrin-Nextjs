import React from "react";

interface JurisdictionItem {
  name: string;
  status: string;
  description: string;
}

const JURISDICTIONS: JurisdictionItem[] = [
  {
    name: "Iran",
    status: "NOT CURRENTLY AVAILABLE",
    description:
      "National jurisdiction context; no dataset or market record is published yet.",
  },
  {
    name: "Türkiye",
    status: "NOT CURRENTLY AVAILABLE",
    description:
      "National jurisdiction context; no dataset or market record is published yet.",
  },
];

export default function BroaderMiddleEast() {
  return (
    <section className="w-full bg-white text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col justify-center">
        {/* Header Section */}
        <div className="mb-10 max-w-3xl">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#B98132] uppercase mb-3 block">
            JURISDICTION GROUPINGS — BROADER MIDDLE EAST
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-4">
            Iran and Türkiye are tracked as distinct national jurisdictions.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
            Regional grouping for navigation only — neither jurisdiction&apos;s
            regulatory or sanctions status is inferred from the other, or from
            any Gulf or Levant market.
          </p>
        </div>

        {/* Cards Grid (2 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-7xl">
          {JURISDICTIONS.map((item, index) => (
            <div
              key={index}
              className="bg-[#F6F5FB] rounded-2xl p-6 shadow-sm border border-slate-200/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-base font-bold text-[#171335]">
                    {item.name}
                  </h3>
                  <span className="text-[9px] font-semibold tracking-wider bg-[#ECEBF5] text-slate-500 px-2.5 py-1 rounded-full uppercase whitespace-nowrap self-start sm:self-auto">
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
    </section>
  );
}
