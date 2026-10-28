import React from "react";

interface HandlingItem {
  status: string;
  description: string;
  isSupported?: boolean;
}

const HANDLING_ITEMS: HandlingItem[] = [
  {
    status: "SUPPORTED",
    description:
      "English interface — available sitewide, independent of regional source coverage.",
    isSupported: true,
  },
  {
    status: "NOT CURRENTLY AVAILABLE",
    description:
      "Arabic-language sources — not yet verified or dialect-tested.",
    isSupported: false,
  },
  {
    status: "NOT CURRENTLY AVAILABLE",
    description: "Right-to-left (RTL) layout rendering — not yet verified.",
    isSupported: false,
  },
  {
    status: "NOT CURRENTLY AVAILABLE",
    description: "Mixed Arabic/English document handling — not yet verified.",
    isSupported: false,
  },
];

export default function ArabicEnglishPublicationHandling() {
  return (
    <section className="w-full min-h-screen bg-white text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col justify-center">
        {/* Header Section */}
        <div className="mb-10">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#B98132] uppercase mb-3 block">
            ARABIC/ENGLISH PUBLICATION HANDLING
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl max-w-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-4">
            Local-script publishing only where verified and tested.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-3xl">
            Interface language is separate from source-language support.
            Arabic-language sources require dialect, right-to-left layout and
            script verification before being marked supported.
          </p>
        </div>

        {/* List Rows */}
        <div className="w-full border-t border-b border-slate-200/60 max-w-3xl divide-y divide-slate-200/60">
          {HANDLING_ITEMS.map((item, index) => (
            <div
              key={index}
              className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              {/* Status Badge */}
              <div className="flex-shrink-0">
                <span
                  className={`inline-block text-[10px] font-semibold tracking-wider px-3 py-1.5 rounded-full uppercase ${
                    item.isSupported
                      ? "bg-[#ECEBF5] text-[#4F46E5]"
                      : "bg-[#F1F0F5] text-slate-500"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {/* Description Text */}
              <div className="flex-grow sm:text-right">
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
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
