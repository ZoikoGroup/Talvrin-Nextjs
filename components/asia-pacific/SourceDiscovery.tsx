import React from "react";
import Image from "next/image";

interface RecordItem {
  key: string;
  description: string;
}

const RECORD_ITEMS: RecordItem[] = [
  {
    key: "record_id",
    description:
      "Stable opaque identifier for the jurisdiction record, never inferred from its display label.",
  },
  {
    key: "jurisdiction_id",
    description:
      "Authority-aligned jurisdiction reference where approved; not itself a legal conclusion.",
  },
  {
    key: "source_id",
    description:
      "Original publisher or source identity, with inspectable provenance.",
  },
  {
    key: "published_at",
    description: "Source publication time, including time zone.",
  },
  {
    key: "effective_period",
    description: "Applicable economic or legal period, where meaningful.",
  },
  {
    key: "rights_status",
    description:
      "Permitted, restricted, or not evaluated — not itself a user-facing legal guarantee.",
  },
  {
    key: "last_verified_at",
    description:
      "Actual governance verification timestamp, not the page build time.",
  },
  {
    key: "claim_owner",
    description:
      "The product, data-rights, or editorial approver responsible for the claim.",
  },
  {
    key: "availability_status",
    description:
      "Published status only: supported, limited, not currently available, or unknown.",
  },
];

export default function SourceDiscovery() {
  return (
    <section className="w-full min-h-screen bg-[#F6F5FB] text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        {/* Left Grid Area (8 Columns on Large Screens) */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6C5CE7] uppercase mb-3">
            SOURCE DISCOVERY
          </span>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-4">
            What a jurisdiction record actually carries.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-8 max-w-2xl">
            Country and sub-region detail is available as text and lists above
            and below — not only through a map — so the same information reaches
            keyboard and screen-reader visitors. Every Asia-Pacific jurisdiction
            or source record is described by the same fields, whether or not it
            is published yet.
          </p>

          {/* Reusable Data Fields Grid (3 columns x 3 rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {RECORD_ITEMS.map((item) => (
              <div
                key={item.key}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/60 flex flex-col justify-start"
              >
                <span className="font-mono text-xs font-bold text-[#171335] mb-2 block">
                  {item.key}
                </span>
                <p className="text-[11px] leading-relaxed text-slate-500 font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Area (4 Columns on Large Screens) */}
        <div className="lg:col-span-4 relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/asia/6.png"
            alt="Source discovery - Team review"
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
