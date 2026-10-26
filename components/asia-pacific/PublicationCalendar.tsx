import React from "react";

interface CalendarItem {
  status: string;
  description: string;
}

const CALENDAR_ITEMS: CalendarItem[] = [
  {
    status: "NOT CURRENTLY AVAILABLE",
    description:
      "Market-holiday calendars — not yet verified for any Asia-Pacific jurisdiction.",
  },
  {
    status: "NOT CURRENTLY AVAILABLE",
    description:
      "Local trading-session times — not yet verified for any Asia-Pacific jurisdiction.",
  },
  {
    status: "NOT CURRENTLY AVAILABLE",
    description:
      "Cross-time-zone publication normalization — not yet verified.",
  },
];

export default function PublicationCalendar() {
  return (
    <section className="w-full min-h-screen bg-white text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col justify-center">
        {/* Header Section */}
        <div className="mb-10">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#B98132] uppercase mb-3 block">
            PUBLICATION TIME &amp; MARKET CALENDAR
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-4xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-4">
            More time zones and holiday calendars than any other region.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-3xl">
            Asia-Pacific sessions run across roughly ten standard time zones
            with independent public and market-holiday calendars. A publication
            time or trading-session state verified for one jurisdiction is never
            assumed for another.
          </p>
        </div>

        {/* List Rows */}
        <div className="w-full border-t border-b max-w-3xl border-slate-200/60 divide-y divide-slate-200/60">
          {CALENDAR_ITEMS.map((item, index) => (
            <div
              key={index}
              className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              {/* Status Badge */}
              <div className="flex-shrink-0">
                <span className="inline-block text-[10px] font-semibold tracking-wider bg-[#F1F0F5] text-slate-500 px-3 py-1.5 rounded-full uppercase">
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
