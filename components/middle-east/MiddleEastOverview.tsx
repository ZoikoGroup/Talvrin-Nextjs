import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

interface GroupingCard {
  title: string;
  status: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const GROUPINGS_DATA: GroupingCard[] = [
  {
    title: "Gulf Cooperation Council (GCC)",
    status: "PENDING APPROVAL",
    description:
      "Jurisdiction and source context for Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain and Oman.",
    linkText: "View GCC",
    linkHref: "#",
  },
  {
    title: "Levant & Mesopotamia",
    status: "PENDING APPROVAL",
    description:
      "Jurisdiction and source context for Jordan, Lebanon, Iraq and Israel.",
    linkText: "View Levant & Mesopotamia",
    linkHref: "#",
  },
];

export default function MiddleEastOverview() {
  return (
    <section className="w-full min-h-screen bg-[#F6F5FB] text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content & Cards (8 Columns on Large Screens) */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6C5CE7] uppercase mb-3">
            MIDDLE EAST OVERVIEW
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-4">
            Three groupings, each its own approval object.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-8 max-w-xl">
            Gulf Cooperation Council states, Levant &amp; Mesopotamia
            jurisdictions, and the broader Middle East are tracked separately
            below. None inherits another&apos;s status.
          </p>

          {/* Reusable Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {GROUPINGS_DATA.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-base font-bold text-[#171335] leading-snug">
                      {card.title}
                    </h3>
                    <span className="text-[10px] font-semibold tracking-wider bg-[#ECEBF5] text-[#4F46E5] px-2.5 py-1 rounded-full uppercase whitespace-nowrap flex-shrink-0">
                      {card.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>
                <div>
                  <a
                    href={card.linkHref}
                    className="inline-flex items-center text-xs font-semibold text-[#5849E9] hover:underline"
                  >
                    {card.linkText} <ArrowDown className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image Card (4 Columns on Large Screens) */}
        <div className="lg:col-span-4 relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/east/3.png"
            alt="Middle East Overview - Business meeting discussion"
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
