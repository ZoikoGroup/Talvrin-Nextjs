"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

type Issuer = {
  id: string;
  name: string;
  region: "Americas" | "Europe" | "Asia-Pacific";
  marketSubtitle: string;
};

const issuers: Issuer[] = [
  {
    id: "aapl",
    name: "Apple Inc.",
    region: "Americas",
    marketSubtitle: "United States · Nasdaq · Technology",
  },
  {
    id: "msft",
    name: "Microsoft Corporation",
    region: "Americas",
    marketSubtitle: "United States · Nasdaq · Technology",
  },
  {
    id: "shel",
    name: "Shell plc",
    region: "Europe",
    marketSubtitle: "United Kingdom · London Stock Exchange ·\nEnergy",
  },
  {
    id: "sie",
    name: "Siemens AG",
    region: "Europe",
    marketSubtitle: "Germany · Deutsche Börse (XETRA) ·\nIndustrials",
  },
  {
    id: "mc",
    name: "LVMH Moët Hennessy Louis\nVuitton",
    region: "Europe",
    marketSubtitle: "France · Euronext Paris · Consumer",
  },
  {
    id: "tm",
    name: "Toyota Motor Corporation",
    region: "Asia-Pacific",
    marketSubtitle: "Japan · Tokyo Stock Exchange · Automotive",
  },
  {
    id: "smsn",
    name: "Samsung Electronics Co., Ltd.",
    region: "Asia-Pacific",
    marketSubtitle: "South Korea · Korea Exchange · Technology",
  },
];

const regions = ["All", "Americas", "Europe", "Asia-Pacific"] as const;

export default function IssuerDirectorySection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<(typeof regions)[number]>("All");

  const filteredIssuers = issuers.filter((issuer) => {
    const matchesRegion =
      selectedRegion === "All" || issuer.region === selectedRegion;
    const matchesSearch =
      searchTerm.trim() === "" ||
      issuer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issuer.marketSubtitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const handleReset = () => {
    setSearchTerm("");
    setSelectedRegion("All");
  };

  return (
    <section id="issuer-directory" className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1281px] px-4 sm:px-6 xl:px-0">
        <Reveal>
          <SectionEyebrow tone="amber">PUBLIC COMPANY ISSUER DIRECTORY</SectionEyebrow>
          <h2 className="mt-[11.35px] max-w-[780px] text-3xl font-bold tracking-tight text-[#171335] sm:text-4xl lg:text-[42px] lg:leading-[48.72px]">
            Find the issuer. See the status behind
            <br className="hidden sm:inline" />
            its disclosures.
          </h2>
          <p className="mt-5 w-full max-w-[800px] text-base leading-relaxed text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            Issuers below come from the entity registry only. No document family, evidence depth or filing history is
            <br className="hidden sm:inline" />
            implied until the Coverage Registry approves it — directory presence is not evidence depth.
          </p>
        </Reveal>

        {/* Filter Box */}
        <Reveal delay={0.1} className="mt-10 rounded-2xl bg-[#F6F5FB] px-[28px] py-[24px]">
          <div>
            <label
              htmlFor="issuer-search"
              className="block text-xs font-bold uppercase tracking-[0.06em] text-[#5D5A72]"
            >
              SEARCH ISSUERS
            </label>
            <input
              id="issuer-search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by issuer, ticker or market…"
              className="mt-2 w-full max-w-[420px] rounded-lg border border-[#171335]/[0.18] bg-white px-[15.8px] py-[11.8px] text-[15px] text-[#171335] placeholder-[#757575] focus:border-[#6C5CE7] focus:outline-hidden focus:ring-1 focus:ring-[#6C5CE7]"
            />
          </div>

          <div className="mt-4">
            <span className="block text-xs font-bold uppercase tracking-[0.06em] text-[#5D5A72]">
              REGION / MARKET
            </span>
            <div className="mt-2 flex flex-wrap items-center gap-2.5">
              {regions.map((region) => {
                const isActive = selectedRegion === region;
                return (
                  <button
                    key={region}
                    type="button"
                    onClick={() => setSelectedRegion(region)}
                    className={`rounded-full px-[15.8px] py-[8.8px] text-[13px] font-bold transition-all duration-200 ${
                      isActive
                        ? "border border-[#6C5CE7]/40 bg-[#6C5CE7]/10 text-[#6C5CE7]"
                        : "border border-[#171335]/[0.16] bg-white text-[#5D5A72] hover:border-[#171335]/30 hover:bg-gray-50"
                    }`}
                  >
                    {region}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-3 text-xs text-[#5D5A72]">
            Document-family and rights facets activate once the registry confirms supported values.
          </p>

          <div className="mt-2.5">
            <button
              type="button"
              onClick={handleReset}
              className="text-sm font-semibold text-[#6C5CE7] transition-colors hover:text-[#5b4fe0]"
            >
              Reset filters
            </button>
          </div>
        </Reveal>

        {/* Counter */}
        <div className="mt-6">
          <p className="text-sm text-[#5D5A72]">
            {filteredIssuers.length === issuers.length
              ? "8 of 8 registry issuers shown"
              : `${filteredIssuers.length} of ${issuers.length} issuers matching filters`}
          </p>
        </div>

        {/* 8 Cards Grid (7 Issuer Cards + 1 Showcase Image Card) */}
        <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-[14.2px] sm:grid-cols-2 lg:grid-cols-4">
          {filteredIssuers.map((issuer) => (
            <div
              key={issuer.id}
              className="flex h-[265.6px] flex-col justify-between rounded-[14px] border border-[#171335]/10 bg-white px-[18px] py-[21.8px]"
            >
              <div>
                <h3 className="whitespace-pre-line text-[17px] font-bold leading-tight text-[#171335]">
                  {issuer.name}
                </h3>
                <div className="mt-1 text-[13px] text-[#5D5A72]">
                  {issuer.marketSubtitle.split("\n").map((line, idx) => (
                    <span key={idx} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </div>
                <div className="mt-2.5">
                  <span className="inline-flex items-center rounded-full border border-[#171335]/[0.14] bg-[#F6F5FB] px-[11.8px] py-[4.8px] text-xs font-bold text-[#5D5A72]">
                    Pending registry verification
                  </span>
                </div>
              </div>

              <div className="border-t border-[#171335]/[0.08] pt-4">
                <p className="whitespace-pre-line text-[13px] leading-[20.15px] text-[#5D5A72]">
                  No issuer enters public coverage until the{"\n"}Coverage Registry and Source Registry{"\n"}confirm document families, rights and{"\n"}operational readiness.
                </p>
              </div>
            </div>
          ))}

          {/* Card 8: Showcase Image Card from Figma */}
          {filteredIssuers.length === issuers.length && (
            <div className="relative h-[265.6px] w-full overflow-hidden rounded-[14px] border border-[#171335]/10">
              <Image
                src="/images/markets/public-companies/image_662.png"
                alt="Public company market registry evidence visualization"
                fill
                sizes="(min-width: 1024px) 305px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
