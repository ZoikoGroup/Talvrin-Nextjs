"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CoverageStatus =
  | "Deep Coverage"
  | "Supported"
  | "Limited / Beta";

type AssetClass = "Fixed Income" | "Equities";

type CoverageRecord = {
  name: string;
  category: string;
  status: CoverageStatus;
  sourceClass: string;
  timeliness: string;
  rights: string;
  verified: string;
  capabilities: string[];
  limitation: string;
  assetClass: AssetClass;
};

const coverageRecords: CoverageRecord[] = [
  {
    name: "U.S. Treasuries",
    category: "Fixed Income · United States",
    status: "Deep Coverage",
    sourceClass: "Official / Primary — U.S. Treasury, Federal Reserve",
    timeliness: "Delayed / Snapshot per source",
    rights: "Open",
    verified: "28 Aug 2026",
    capabilities: ["Evidence", "Monitoring", "AI Assistance"],
    limitation:
      "Live pricing and yield analytics are not enabled; depth applies to primary and official evidence, not market data.",
    assetClass: "Fixed Income",
  },
  {
    name: "U.K. Gilts",
    category: "Fixed Income · United Kingdom",
    status: "Deep Coverage",
    sourceClass: "Official / Primary — HM Treasury, Bank of England, UK DMO",
    timeliness: "Delayed / Snapshot per source",
    rights: "Open",
    verified: "28 Aug 2026",
    capabilities: ["Evidence", "Monitoring", "AI Assistance"],
    limitation:
      "Live pricing and yield analytics are not enabled; depth applies to primary and official evidence, not market data.",
    assetClass: "Fixed Income",
  },
  {
    name: "U.S. Equities",
    category: "Equities · United States",
    status: "Supported",
    sourceClass:
      "Official / Regulatory — company filings, exchange and regulatory disclosures",
    timeliness: "Snapshot / Example per filing",
    rights: "Open",
    verified: "21 Aug 2026",
    capabilities: ["Evidence", "Monitoring"],
    limitation:
      "Research depth varies by issuer; AI-assisted comparison across filings is not yet enabled.",
    assetClass: "Equities",
  },
  {
    name: "Eurozone Sovereign Debt",
    category: "Fixed Income · Eurozone (subset of member states)",
    status: "Limited / Beta",
    sourceClass:
      "Official — subset of eurozone national treasuries and the ECB",
    timeliness: "Snapshot",
    rights: "Open",
    verified: "12 Aug 2026",
    capabilities: ["Evidence"],
    limitation:
      "Only a subset of eurozone issuers is covered; monitoring and AI assistance are not yet available for this record.",
    assetClass: "Fixed Income",
  },
];

const statusFilters: Array<{
  label: string;
  value: CoverageStatus | "All";
}> = [
  {
    label: "Deep Coverage (2)",
    value: "Deep Coverage",
  },
  {
    label: "Supported (1)",
    value: "Supported",
  },
  {
    label: "Limited / Beta (1)",
    value: "Limited / Beta",
  },
  {
    label: "Planned (1) — roadmap",
    value: "All",
  },
];

const assetFilters: Array<{
  label: string;
  value: AssetClass | "All";
}> = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Fixed Income",
    value: "Fixed Income",
  },
  {
    label: "Equities",
    value: "Equities",
  },
];

function getStatusClasses(status: CoverageStatus) {
  switch (status) {
    case "Deep Coverage":
      return {
        badge:
          "bg-indigo-500/10 text-indigo-500 outline-indigo-500/30",
      };

    case "Supported":
      return {
        badge:
          "bg-slate-900/5 text-slate-900 outline-slate-900/25",
      };

    case "Limited / Beta":
      return {
        badge:
          "bg-yellow-600/10 text-yellow-600 outline-yellow-600/30",
      };

    default:
      return {
        badge:
          "bg-white text-gray-600 outline-slate-900/20",
      };
  }
}

export default function CoverageExplorer() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    CoverageStatus | "All"
  >("All");
  const [assetFilter, setAssetFilter] = useState<
    AssetClass | "All"
  >("All");

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>(
      "[data-reveal]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.remove(
            "opacity-0",
            "translate-y-8"
          );

          entry.target.classList.add(
            "opacity-100",
            "translate-y-0"
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const filteredRecords = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return coverageRecords.filter((record) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        record.name.toLowerCase().includes(normalizedSearch) ||
        record.category.toLowerCase().includes(normalizedSearch) ||
        record.sourceClass.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        statusFilter === "All" ||
        record.status === statusFilter;

      const matchesAsset =
        assetFilter === "All" ||
        record.assetClass === assetFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesAsset
      );
    });
  }, [search, statusFilter, assetFilter]);

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setAssetFilter("All");
  };

  return (
    <section
      id="coverage-explorer"
      ref={sectionRef}
      className="w-full scroll-mt-20 overflow-hidden bg-white"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-10 lg:px-20 lg:py-[96px]">

        {/* --------------------------------------------- */}
        {/* HEADER */}
        {/* --------------------------------------------- */}

        <div
          data-reveal
          className="
            translate-y-8
            opacity-0
            transition-all
            duration-700
            ease-out
          "
        >
          <p
            className="
              m-0
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
            "
          >
            COVERAGE EXPLORER
          </p>
        </div>

        <div
          data-reveal
          className="
            mt-3
            max-w-[780px]
            translate-y-8
            opacity-0
            transition-all
            duration-700
            ease-out
          "
          style={{
            transitionDelay: "80ms",
          }}
        >
          <h2
            className="
              m-0
              font-['IBM_Plex_Sans']
              text-[36px]
              font-bold
              leading-[1.08]
              tracking-[-1px]
              text-slate-900
              sm:text-[42px]
              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            Can Talvrin support the market or
            <br className="hidden sm:block" />
            research need you have in mind?
          </h2>
        </div>

        <div
          data-reveal
          className="
            mt-5
            max-w-[780px]
            translate-y-8
            opacity-0
            transition-all
            duration-700
            ease-out
          "
          style={{
            transitionDelay: "140ms",
          }}
        >
          <p
            className="
              m-0
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-gray-600
            "
          >
            Every row below comes from the same governed coverage
            registry that drives status badges across Talvrin.
            Planned records are excluded from current support by
            default.
          </p>
        </div>

        {/* --------------------------------------------- */}
        {/* FILTER PANEL */}
        {/* --------------------------------------------- */}

        <div
          data-reveal
          className="
            mt-8
            translate-y-8
            rounded-2xl
            bg-violet-50
            px-6
            pb-6
            pt-10
            opacity-0
            transition-all
            duration-700
            ease-out
            sm:px-7
            sm:pt-12
          "
          style={{
            transitionDelay: "200ms",
          }}
        >
          {/* Search */}
          <div>
            <label
              htmlFor="coverage-search"
              className="
                block
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                tracking-wide
                text-gray-600
              "
            >
              SEARCH COVERAGE
            </label>

            <div className="mt-2 max-w-[384px]">
              <input
                id="coverage-search"
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search market, asset class, or jurisdiction…"
                className="
                  h-12
                  w-full
                  rounded-lg
                  border
                  border-slate-900/20
                  bg-white
                  px-4
                  font-['IBM_Plex_Sans']
                  text-base
                  text-slate-900
                  outline-none
                  transition
                  placeholder:text-neutral-500
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/10
                "
              />
            </div>
          </div>

          {/* Coverage Status */}
          <div className="mt-5">
            <p
              className="
                m-0
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                tracking-wide
                text-gray-600
              "
            >
              COVERAGE STATUS
            </p>

            <div className="mt-2.5 flex flex-wrap gap-2.5">
              {statusFilters.map((filter) => {
                const isActive =
                  filter.value !== "All" &&
                  statusFilter === filter.value;

                return (
                  <button
                    key={filter.label}
                    type="button"
                    onClick={() =>
                      setStatusFilter(
                        filter.value === "All"
                          ? "All"
                          : filter.value
                      )
                    }
                    className={`
                      rounded-full
                      px-4
                      py-2
                      font-['IBM_Plex_Sans']
                      text-xs
                      font-bold
                      outline
                      outline-1
                      outline-offset-[-1px]
                      transition
                      ${
                        isActive
                          ? "bg-indigo-500/10 text-indigo-500 outline-indigo-500/30"
                          : filter.value === "Supported"
                            ? "bg-slate-900/5 text-slate-900 outline-slate-900/25"
                            : filter.value === "Limited / Beta"
                              ? "bg-yellow-600/10 text-yellow-600 outline-yellow-600/30"
                              : "bg-white text-gray-600 outline-slate-900/20"
                      }
                      hover:opacity-80
                    `}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Asset Class */}
          <div className="mt-4">
            <p
              className="
                m-0
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                tracking-wide
                text-gray-600
              "
            >
              ASSET CLASS
            </p>

            <div className="mt-2.5 flex flex-wrap gap-2.5">
              {assetFilters.map((filter) => {
                const isActive =
                  assetFilter === filter.value;

                return (
                  <button
                    key={filter.label}
                    type="button"
                    onClick={() =>
                      setAssetFilter(filter.value)
                    }
                    className={`
                      rounded-full
                      px-4
                      py-2
                      font-['IBM_Plex_Sans']
                      text-xs
                      font-bold
                      outline
                      outline-1
                      outline-offset-[-1px]
                      transition
                      ${
                        isActive
                          ? "bg-indigo-500/10 text-indigo-500 outline-indigo-500/40"
                          : "bg-white text-gray-600 outline-slate-900/20"
                      }
                      hover:opacity-80
                    `}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reset */}
          <button
            type="button"
            onClick={resetFilters}
            className="
              mt-4
              p-0
              font-['IBM_Plex_Sans']
              text-sm
              font-semibold
              text-indigo-500
              transition
              hover:opacity-70
            "
          >
            Reset filters
          </button>
        </div>

        {/* --------------------------------------------- */}
        {/* RESULT COUNT */}
        {/* --------------------------------------------- */}

        <div
          data-reveal
          className="
            mt-5
            translate-y-8
            opacity-0
            transition-all
            duration-700
            ease-out
          "
          style={{
            transitionDelay: "260ms",
          }}
        >
          <p
            className="
              m-0
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              text-gray-600
            "
          >
            {filteredRecords.length} of 4 coverage records shown
          </p>
        </div>

        {/* --------------------------------------------- */}
        {/* RECORDS */}
        {/* --------------------------------------------- */}

        <div className="mt-2 flex flex-col gap-4">
          {filteredRecords.map((record, index) => {
            const statusClasses = getStatusClasses(
              record.status
            );

            return (
              <article
                key={record.name}
                data-reveal
                className="
                  translate-y-8
                  rounded-2xl
                  border
                  border-slate-900/10
                  bg-white
                  px-5
                  py-6
                  opacity-0
                  transition-all
                  duration-700
                  ease-out
                  sm:px-6
                "
                style={{
                  transitionDelay: `${300 + index * 80}ms`,
                }}
              >
                {/* Record Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3
                      className="
                        m-0
                        font-['IBM_Plex_Sans']
                        text-lg
                        font-bold
                        leading-6
                        text-slate-900
                      "
                    >
                      {record.name}
                    </h3>

                    <p
                      className="
                        m-0
                        mt-1
                        font-['IBM_Plex_Sans']
                        text-xs
                        font-normal
                        text-gray-600
                      "
                    >
                      {record.category}
                    </p>
                  </div>

                  <span
                    className={`
                      inline-flex
                      w-fit
                      shrink-0
                      rounded-full
                      px-3
                      py-1.5
                      font-['IBM_Plex_Sans']
                      text-xs
                      font-bold
                      outline
                      outline-1
                      outline-offset-[-1px]
                      ${statusClasses.badge}
                    `}
                  >
                    {record.status}
                  </span>
                </div>

                {/* Information Grid */}
                <div
                  className="
                    mt-6
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                    lg:grid-cols-4
                  "
                >
                  <InfoItem
                    label="SOURCE CLASS"
                    value={record.sourceClass}
                  />

                  <InfoItem
                    label="DATA TIMELINESS"
                    value={record.timeliness}
                  />

                  <InfoItem
                    label="RIGHTS / ACCESS"
                    value={record.rights}
                  />

                  <InfoItem
                    label="LAST VERIFIED"
                    value={record.verified}
                  />
                </div>

                {/* Research Capabilities */}
                <div className="mt-5">
                  <p
                    className="
                      m-0
                      font-['IBM_Plex_Sans']
                      text-xs
                      font-bold
                      tracking-wide
                      text-gray-600
                    "
                  >
                    RESEARCH CAPABILITIES
                  </p>

                  <div className="mt-1.5 flex flex-wrap gap-2">
                    {record.capabilities.map(
                      (capability) => (
                        <span
                          key={capability}
                          className="
                            rounded-full
                            bg-indigo-500/10
                            px-2.5
                            py-[5px]
                            font-['IBM_Plex_Sans']
                            text-xs
                            font-semibold
                            text-indigo-500
                          "
                        >
                          {capability}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Limitation */}
                <div
                  className="
                    mt-5
                    border-t
                    border-slate-900/10
                    pt-3.5
                  "
                >
                  <p
                    className="
                      m-0
                      font-['IBM_Plex_Sans']
                      text-xs
                      leading-5
                    "
                  >
                    <span className="font-bold text-slate-900">
                      Limitation:
                    </span>{" "}
                    <span className="font-normal text-gray-600">
                      {record.limitation}
                    </span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredRecords.length === 0 && (
          <div
            className="
              mt-4
              rounded-2xl
              border
              border-slate-900/10
              px-6
              py-12
              text-center
            "
          >
            <p
              className="
                m-0
                font-['IBM_Plex_Sans']
                text-base
                text-gray-600
              "
            >
              No coverage records match your filters.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="
                mt-3
                font-['IBM_Plex_Sans']
                text-sm
                font-semibold
                text-indigo-500
              "
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* --------------------------------------------- */
/* INFO ITEM */
/* --------------------------------------------- */

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <p
        className="
          m-0
          font-['IBM_Plex_Sans']
          text-xs
          font-bold
          tracking-wide
          text-gray-600
        "
      >
        {label}
      </p>

      <p
        className="
          m-0
          mt-1
          font-['IBM_Plex_Sans']
          text-sm
          font-normal
          leading-5
          text-slate-700
        "
      >
        {value}
      </p>
    </div>
  );
}