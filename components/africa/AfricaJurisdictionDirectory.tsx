import React from "react";
import Image from "next/image";

interface Jurisdiction {
  name: string;
  status: string;
  description: string;
}

interface RegionSection {
  region: string;
  jurisdictions: Jurisdiction[];
}

const REGIONS: RegionSection[] = [
  {
    region: "NORTH AFRICA",
    jurisdictions: [
      {
        name: "Egypt",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
      {
        name: "Morocco",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
      {
        name: "Algeria",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
      {
        name: "Tunisia",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
    ],
  },
  {
    region: "WEST AFRICA",
    jurisdictions: [
      {
        name: "Nigeria",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
      {
        name: "Ghana",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
      {
        name: "Côte d'Ivoire",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
    ],
  },
  {
    region: "EAST AFRICA",
    jurisdictions: [
      {
        name: "Kenya",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
      {
        name: "Ethiopia",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
      {
        name: "Tanzania",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
    ],
  },
  {
    region: "SOUTHERN AFRICA",
    jurisdictions: [
      {
        name: "South Africa",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
      {
        name: "Botswana",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
      {
        name: "Namibia",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
      {
        name: "Zambia",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
    ],
  },
  {
    region: "CENTRAL AFRICA",
    jurisdictions: [
      {
        name: "Democratic Republic of the Congo",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
      {
        name: "Cameroon",
        status: "NOT CURRENTLY AVAILABLE",
        description:
          "National jurisdiction context; no dataset or market record is published yet.",
      },
    ],
  },
];

export default function AfricaJurisdictionDirectory() {
  return (
    <section className="w-full min-h-screen bg-white text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col justify-center">
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#B98132] uppercase mb-3 block">
            JURISDICTION STATUS DIRECTORY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-4">
            Every listed country carries its own independent record.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
            This is an illustrative, non-exhaustive set of national
            jurisdictions grouped by region for navigation only. Regional
            economic community membership, geographic proximity or shared
            currency arrangements do not establish shared data-rights or
            licensing status.
          </p>
        </div>

        {/* Outer 4-Column Grid system allowing image spanning without increasing div heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 items-start">
          {/* 1. NORTH AFRICA (Spans 4 Columns) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              NORTH AFRICA
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {REGIONS[0].jurisdictions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F6F5FB] rounded-2xl p-5 shadow-sm border border-slate-200/50 flex flex-col justify-between min-h-[120px]"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="text-sm font-bold text-[#171335] leading-snug">
                      {item.name}
                    </h4>
                    <span className="text-[9px] font-semibold tracking-wider bg-[#ECEBF5] text-slate-500 px-2.5 py-1 rounded-full uppercase whitespace-nowrap flex-shrink-0">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2 & 3. WEST AFRICA + EAST AFRICA (Columns 1 to 3) & IMAGE (Column 4, Spanning across both rows) */}
          {/* WEST AFRICA (3 Cards - Cols 1-3) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              WEST AFRICA
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {REGIONS[1].jurisdictions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F6F5FB] rounded-2xl p-5 shadow-sm border border-slate-200/50 flex flex-col justify-between min-h-[120px]"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="text-sm font-bold text-[#171335] leading-snug">
                      {item.name}
                    </h4>
                    <span className="text-[9px] font-semibold tracking-wider bg-[#ECEBF5] text-slate-500 px-2.5 py-1 rounded-full uppercase whitespace-nowrap flex-shrink-0">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE CARD (Occupies 4th column in large grid, height decoupled) */}
          <div className="col-span-1 lg:col-span-1 lg:row-span-2 relative w-full h-full min-h-[280px] lg:min-h-[320px] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/africa/4.png"
              alt="Africa region data directory consultation"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </div>

          {/* EAST AFRICA (3 Cards - Cols 1-3) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              EAST AFRICA
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {REGIONS[2].jurisdictions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F6F5FB] rounded-2xl p-5 shadow-sm border border-slate-200/50 flex flex-col justify-between min-h-[120px]"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="text-sm font-bold text-[#171335] leading-snug">
                      {item.name}
                    </h4>
                    <span className="text-[9px] font-semibold tracking-wider bg-[#ECEBF5] text-slate-500 px-2.5 py-1 rounded-full uppercase whitespace-nowrap flex-shrink-0">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. SOUTHERN AFRICA (Spans 4 Columns) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              SOUTHERN AFRICA
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {REGIONS[3].jurisdictions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F6F5FB] rounded-2xl p-5 shadow-sm border border-slate-200/50 flex flex-col justify-between min-h-[120px]"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="text-sm font-bold text-[#171335] leading-snug">
                      {item.name}
                    </h4>
                    <span className="text-[9px] font-semibold tracking-wider bg-[#ECEBF5] text-slate-500 px-2.5 py-1 rounded-full uppercase whitespace-nowrap flex-shrink-0">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. CENTRAL AFRICA (Spans 4 Columns) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              CENTRAL AFRICA
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {REGIONS[4].jurisdictions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F6F5FB] rounded-2xl p-5 shadow-sm border border-slate-200/50 flex flex-col justify-between min-h-[120px]"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="text-sm font-bold text-[#171335] leading-snug">
                      {item.name}
                    </h4>
                    <span className="text-[9px] font-semibold tracking-wider bg-[#ECEBF5] text-slate-500 px-2.5 py-1 rounded-full uppercase whitespace-nowrap flex-shrink-0">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
