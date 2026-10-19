"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Regulator {
  id: string;
  name: string;
  jurisdiction: string;
  region: "Americas" | "Europe" | "Asia-Pacific";
  role: string;
}

const regulatorsData: Regulator[] = [
  {
    id: "sec",
    name: "U.S. Securities and Exchange Commission",
    jurisdiction: "United States",
    region: "Americas",
    role: "Securities regulator",
  },
  {
    id: "fca",
    name: "Financial Conduct Authority",
    jurisdiction: "United Kingdom",
    region: "Europe",
    role: "Conduct regulator",
  },
  {
    id: "esma",
    name: "European Securities and Markets Authority",
    jurisdiction: "European Union",
    region: "Europe",
    role: "Markets authority",
  },
  {
    id: "bafin",
    name: "Federal Financial Supervisory Authority (BaFin)",
    jurisdiction: "Germany",
    region: "Europe",
    role: "Financial supervisory authority",
  },
  {
    id: "finma",
    name: "Swiss Financial Market Supervisory Authority",
    jurisdiction: "Switzerland",
    region: "Europe",
    role: "Financial market supervisory authority",
  },
  {
    id: "fsa",
    name: "Financial Services Agency",
    jurisdiction: "Japan",
    region: "Asia-Pacific",
    role: "Financial services agency",
  },
  {
    id: "osc",
    name: "Ontario Securities Commission",
    jurisdiction: "Canada",
    region: "Americas",
    role: "Securities regulator",
  },
  {
    id: "cvm",
    name: "Comissão de Valores Mobiliários",
    jurisdiction: "Brazil",
    region: "Americas",
    role: "Securities regulator",
  },
];

const regions = ["All", "Americas", "Europe", "Asia-Pacific"] as const;

export default function RegulatorDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const filteredRegulators = useMemo(() => {
    return regulatorsData.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.jurisdiction.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.role.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRegion =
        selectedRegion === "All" || item.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedRegion("All");
  };

  const isDefaultView = searchQuery === "" && selectedRegion === "All";

  return (
    <section id="directory" className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3">
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-[#B98132]">
            REGULATOR DIRECTORY
          </span>
          <h2 className="max-w-[780px] font-sans text-[30px] font-bold leading-[1.16] text-[#171335] sm:text-[36px] md:text-[42px] md:leading-[48.72px]">
            Find the regulator. See the status
            <br />
            behind its evidence.
          </h2>
          <p className="max-w-[800px] pt-1 font-sans text-[16px] font-normal leading-[1.6] text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            Regulators below come from the entity registry only. No document
            family, evidence depth or historical claim is implied until the
            Coverage Registry approves it — directory presence is not evidence
            depth.
          </p>
        </div>

        {/* Search & Filter Panel */}
        <div className="mt-8 rounded-2xl bg-[#F6F5FB] p-6 md:p-8">
          <div className="flex flex-col gap-4">
            <label
              htmlFor="regulator-search"
              className="font-sans text-[12px] font-bold tracking-[0.06em] text-[#5D5A72] uppercase"
            >
              SEARCH REGULATORS
            </label>
            <div className="max-w-[420px]">
              <input
                id="regulator-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by regulator or jurisdiction…"
                className="w-full rounded-lg border border-[rgba(23,19,53,0.18)] bg-white px-4 py-3 font-sans text-[15px] text-[#171335] placeholder:text-[#757575] focus:border-[#6C5CE7] focus:outline-none focus:ring-1 focus:ring-[#6C5CE7]"
              />
            </div>

            {/* Region / Jurisdiction Filter */}
            <div className="pt-2">
              <span className="block font-sans text-[12px] font-bold tracking-[0.06em] text-[#5D5A72] uppercase">
                REGION / JURISDICTION
              </span>
              <div className="mt-2 flex flex-wrap gap-2.5">
                {regions.map((region) => {
                  const isActive = selectedRegion === region;
                  return (
                    <button
                      key={region}
                      type="button"
                      onClick={() => setSelectedRegion(region)}
                      className={`rounded-full px-4 py-1.5 font-sans text-[13px] font-bold transition-all ${
                        isActive
                          ? "border border-[rgba(108,92,231,0.4)] bg-[rgba(108,92,231,0.1)] text-[#6C5CE7]"
                          : "border border-[rgba(23,19,53,0.1)] bg-white text-[#5D5A72] hover:border-[rgba(23,19,53,0.25)] hover:text-[#171335]"
                      }`}
                    >
                      {region}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Facet Note & Reset Button */}
            <div className="flex flex-col items-start gap-2 pt-2">
              <p className="font-sans text-[12px] font-normal text-[#5D5A72]">
                Document-family and language facets activate once the registry
                confirms supported values.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="font-sans text-[14px] font-semibold text-[#6C5CE7] transition-opacity hover:underline"
              >
                Reset filters
              </button>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="mt-8 font-sans text-[14px] font-normal text-[#5D5A72]">
          {isDefaultView ? "10 of 10" : `${filteredRegulators.length} of 10`}{" "}
          registry regulators shown
        </div>

        {/* Regulators Grid: Exactly matches Figma 4-column layout */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* If default view, render in the exact Figma 4-column grid layout */}
          {isDefaultView ? (
            <>
              {/* Row 1: Cards 1 - 4 */}
              {regulatorsData.slice(0, 4).map((regulator, index) => (
                <motion.div
                  key={regulator.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex h-[282px] flex-col justify-between rounded-[14px] border border-[rgba(23,19,53,0.1)] bg-white p-[22px] shadow-xs transition-shadow hover:shadow-md"
                >
                  <div>
                    <h3 className="font-sans text-[17px] font-bold leading-snug text-[#171335]">
                      {regulator.name}
                    </h3>
                    <p className="mt-1 font-sans text-[14px] text-[#5D5A72]">
                      {regulator.jurisdiction} · {regulator.region} ·{" "}
                      {regulator.role}
                    </p>

                    <div className="mt-3">
                      <span className="inline-flex items-center rounded-full border border-[rgba(23,19,53,0.14)] bg-[#F6F5FB] px-3 py-1 font-sans text-[12px] font-bold text-[#5D5A72]">
                        Pending registry verification
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-[rgba(23,19,53,0.08)] pt-4">
                    <p className="font-sans text-[13px] font-normal leading-[20px] text-[#5D5A72]">
                      No regulator enters public coverage until the Coverage
                      Registry and Source Registry confirm document families,
                      rights and operational readiness.
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Row 2: Card 5 (FINMA) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex h-[282px] flex-col justify-between rounded-[14px] border border-[rgba(23,19,53,0.1)] bg-white p-[22px] shadow-xs transition-shadow hover:shadow-md"
              >
                <div>
                  <h3 className="font-sans text-[17px] font-bold leading-snug text-[#171335]">
                    {regulatorsData[4].name}
                  </h3>
                  <p className="mt-1 font-sans text-[14px] text-[#5D5A72]">
                    {regulatorsData[4].jurisdiction} ·{" "}
                    {regulatorsData[4].region} · {regulatorsData[4].role}
                  </p>

                  <div className="mt-3">
                    <span className="inline-flex items-center rounded-full border border-[rgba(23,19,53,0.14)] bg-[#F6F5FB] px-3 py-1 font-sans text-[12px] font-bold text-[#5D5A72]">
                      Pending registry verification
                    </span>
                  </div>
                </div>

                <div className="border-t border-[rgba(23,19,53,0.08)] pt-4">
                  <p className="font-sans text-[13px] font-normal leading-[20px] text-[#5D5A72]">
                    No regulator enters public coverage until the Coverage
                    Registry and Source Registry confirm document families,
                    rights and operational readiness.
                  </p>
                </div>
              </motion.div>

              {/* Row 2: Card 6 (FSA) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="flex h-[282px] flex-col justify-between rounded-[14px] border border-[rgba(23,19,53,0.1)] bg-white p-[22px] shadow-xs transition-shadow hover:shadow-md"
              >
                <div>
                  <h3 className="font-sans text-[17px] font-bold leading-snug text-[#171335]">
                    {regulatorsData[5].name}
                  </h3>
                  <p className="mt-1 font-sans text-[14px] text-[#5D5A72]">
                    {regulatorsData[5].jurisdiction} ·{" "}
                    {regulatorsData[5].region} · {regulatorsData[5].role}
                  </p>

                  <div className="mt-3">
                    <span className="inline-flex items-center rounded-full border border-[rgba(23,19,53,0.14)] bg-[#F6F5FB] px-3 py-1 font-sans text-[12px] font-bold text-[#5D5A72]">
                      Pending registry verification
                    </span>
                  </div>
                </div>

                <div className="border-t border-[rgba(23,19,53,0.08)] pt-4">
                  <p className="font-sans text-[13px] font-normal leading-[20px] text-[#5D5A72]">
                    No regulator enters public coverage until the Coverage
                    Registry and Source Registry confirm document families,
                    rights and operational readiness.
                  </p>
                </div>
              </motion.div>

              {/* Rows 2 & 3: Large Showcase Image (Col 3-4, Row 2-3 in Figma) */}
              <div className="relative min-h-[300px] overflow-hidden rounded-[14px] border border-[rgba(23,19,53,0.1)] bg-[#D65151] sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-2 lg:h-[584px]">
                <Image
                  src="/images/markets/regulators/regulator-directory-visual.png"
                  alt="Global Regulatory Directory coverage visualization"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 631px"
                />
              </div>

              {/* Row 3: Card 7 (Ontario Securities Commission) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex h-[282px] flex-col justify-between rounded-[14px] border border-[rgba(23,19,53,0.1)] bg-white p-[22px] shadow-xs transition-shadow hover:shadow-md"
              >
                <div>
                  <h3 className="font-sans text-[17px] font-bold leading-snug text-[#171335]">
                    {regulatorsData[6].name}
                  </h3>
                  <p className="mt-1 font-sans text-[14px] text-[#5D5A72]">
                    {regulatorsData[6].jurisdiction} ·{" "}
                    {regulatorsData[6].region} · {regulatorsData[6].role}
                  </p>

                  <div className="mt-3">
                    <span className="inline-flex items-center rounded-full border border-[rgba(23,19,53,0.14)] bg-[#F6F5FB] px-3 py-1 font-sans text-[12px] font-bold text-[#5D5A72]">
                      Pending registry verification
                    </span>
                  </div>
                </div>

                <div className="border-t border-[rgba(23,19,53,0.08)] pt-4">
                  <p className="font-sans text-[13px] font-normal leading-[20px] text-[#5D5A72]">
                    No regulator enters public coverage until the Coverage
                    Registry and Source Registry confirm document families,
                    rights and operational readiness.
                  </p>
                </div>
              </motion.div>

              {/* Row 3: Card 8 (Comissão de Valores Mobiliários) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="flex h-[282px] flex-col justify-between rounded-[14px] border border-[rgba(23,19,53,0.1)] bg-white p-[22px] shadow-xs transition-shadow hover:shadow-md"
              >
                <div>
                  <h3 className="font-sans text-[17px] font-bold leading-snug text-[#171335]">
                    {regulatorsData[7].name}
                  </h3>
                  <p className="mt-1 font-sans text-[14px] text-[#5D5A72]">
                    {regulatorsData[7].jurisdiction} ·{" "}
                    {regulatorsData[7].region} · {regulatorsData[7].role}
                  </p>

                  <div className="mt-3">
                    <span className="inline-flex items-center rounded-full border border-[rgba(23,19,53,0.14)] bg-[#F6F5FB] px-3 py-1 font-sans text-[12px] font-bold text-[#5D5A72]">
                      Pending registry verification
                    </span>
                  </div>
                </div>

                <div className="border-t border-[rgba(23,19,53,0.08)] pt-4">
                  <p className="font-sans text-[13px] font-normal leading-[20px] text-[#5D5A72]">
                    No regulator enters public coverage until the Coverage
                    Registry and Source Registry confirm document families,
                    rights and operational readiness.
                  </p>
                </div>
              </motion.div>
            </>
          ) : (
            /* When filtered by search or region */
            <>
              {filteredRegulators.map((regulator, index) => (
                <motion.div
                  key={regulator.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex h-[282px] flex-col justify-between rounded-[14px] border border-[rgba(23,19,53,0.1)] bg-white p-[22px] shadow-xs transition-shadow hover:shadow-md"
                >
                  <div>
                    <h3 className="font-sans text-[17px] font-bold leading-snug text-[#171335]">
                      {regulator.name}
                    </h3>
                    <p className="mt-1 font-sans text-[14px] text-[#5D5A72]">
                      {regulator.jurisdiction} · {regulator.region} ·{" "}
                      {regulator.role}
                    </p>

                    <div className="mt-3">
                      <span className="inline-flex items-center rounded-full border border-[rgba(23,19,53,0.14)] bg-[#F6F5FB] px-3 py-1 font-sans text-[12px] font-bold text-[#5D5A72]">
                        Pending registry verification
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-[rgba(23,19,53,0.08)] pt-4">
                    <p className="font-sans text-[13px] font-normal leading-[20px] text-[#5D5A72]">
                      No regulator enters public coverage until the Coverage
                      Registry and Source Registry confirm document families,
                      rights and operational readiness.
                    </p>
                  </div>
                </motion.div>
              ))}

              {filteredRegulators.length === 0 && (
                <div className="col-span-full rounded-2xl border border-[rgba(23,19,53,0.1)] bg-[#F6F5FB] p-8 text-center">
                  <p className="font-sans text-[16px] font-medium text-[#171335]">
                    No regulators found matching your criteria.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-3 font-sans text-[14px] font-semibold text-[#6C5CE7] hover:underline"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
