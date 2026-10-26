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

const AFRICA_GROUPINGS: GroupingCard[] = [
  {
    title: "North Africa",
    status: "PENDING APPROVAL",
    description:
      "Jurisdiction and source context for Egypt, Morocco, Algeria and Tunisia.",
    linkText: "View North Africa",
    linkHref: "#",
  },
  {
    title: "West Africa",
    status: "PENDING APPROVAL",
    description:
      "Jurisdiction and source context for Nigeria, Ghana, Côte d'Ivoire and Senegal.",
    linkText: "View West Africa",
    linkHref: "#",
  },
  {
    title: "East Africa",
    status: "PENDING APPROVAL",
    description:
      "Jurisdiction and source context for Kenya, Ethiopia, Tanzania and Rwanda.",
    linkText: "View East Africa",
    linkHref: "#",
  },
];

export default function AfricaOverview() {
  return (
    <section className="w-full min-h-screen bg-[#F6F5FB] text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content & Cards (8 Columns on Large Screens) */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6C5CE7] uppercase mb-3">
            AFRICA OVERVIEW
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-4">
            Five regional groupings, each its own approval object.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-8 max-w-xl">
            North, West, East, Southern and Central Africa are tracked
            separately below, for navigation only. None inherits another&apos;s
            status.
          </p>

          {/* Reusable Cards Grid (3 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {AFRICA_GROUPINGS.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <h3 className="text-sm font-bold text-[#171335] leading-snug">
                      {card.title}
                    </h3>
                    <span className="text-[9px] font-semibold tracking-wider bg-[#ECEBF5] text-[#4F46E5] px-2.5 py-1 rounded-full uppercase whitespace-nowrap self-start sm:self-auto flex-shrink-0">
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
        <div className="lg:col-span-4 relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/africa/3.png"
            alt="Africa Overview - Team analyzing financial documents"
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
