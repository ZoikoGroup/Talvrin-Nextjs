"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useMemo, useState } from "react";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const evidenceTypes = [
  "Policy Communication",
  "Financing / Issuance",
  "Official Statistics",
  "Explanatory / Methodology",
] as const;

type EvidenceType = (typeof evidenceTypes)[number];

// Illustrative, released records only; mirrors the four supported categories.
const records: {
  title: string;
  type: EvidenceType;
  publisher: string;
  published: string;
  rights: string;
  status: string;
}[] = [
  {
    title: "Monetary Policy Committee Summary — September 2026",
    type: "Policy Communication",
    publisher: "Bank of England",
    published: "19 Sep 2026",
    rights: "Open",
    status: "Reviewed",
  },
  {
    title: "Gilt Issuance Calendar — Q3 2026",
    type: "Financing / Issuance",
    publisher: "U.K. Debt Management Office",
    published: "31 Jul 2026",
    rights: "Open",
    status: "Reviewed",
  },
  {
    title: "Public Sector Finances — August 2026",
    type: "Official Statistics",
    publisher: "Office for National Statistics",
    published: "20 Sep 2026",
    rights: "Open",
    status: "Reviewed",
  },
  {
    title: "Gilt Market Overview",
    type: "Explanatory / Methodology",
    publisher: "U.K. Debt Management Office",
    published: "15 Jun 2026",
    rights: "Open",
    status: "Reviewed",
  },
];

export default function EvidenceExplorerSection() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<EvidenceType | "All">("All");
  const searchId = useId();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return records.filter(
      (record) =>
        (activeType === "All" || record.type === activeType) &&
        (!q || `${record.title} ${record.publisher}`.toLowerCase().includes(q))
    );
  }, [query, activeType]);

  const reset = () => {
    setQuery("");
    setActiveType("All");
  };

  return (
    <section id="evidence-explorer" className="scroll-mt-20 bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow>U.K. Gilts Evidence Explorer</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[640px]">
            Search indexed, released U.K. Gilts evidence.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[800px] text-base leading-7 text-gray-600">
            Shown only because this coverage record is released. Each result
            card carries source identity, document type, timestamps and rights —
            never a generated substitute.
          </p>
        </Reveal>

        <div className="mt-8 rounded-2xl bg-white p-5 sm:mt-10 sm:p-7">
          <label htmlFor={searchId} className="text-xs font-bold tracking-wide text-gray-600">
            SEARCH EVIDENCE
          </label>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, publisher or identifier..."
            className="mt-2 block w-full max-w-[420px] rounded-lg border border-ink/15 bg-surface px-4 py-3 text-sm text-ink placeholder:text-gray-500 focus:border-accent-violet focus:outline-none focus:ring-2 focus:ring-accent-violet/20"
          />

          <p className="mt-5 text-xs font-bold tracking-wide text-gray-600" id={`${searchId}-types`}>
            EVIDENCE TYPE
          </p>
          <div
            role="group"
            aria-labelledby={`${searchId}-types`}
            className="mt-2 flex flex-wrap gap-2"
          >
            {(["All", ...evidenceTypes] as const).map((type) => {
              const isActive = activeType === type;
              return (
                <button
                  key={type}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveType(type)}
                  className={clsx(
                    "rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm",
                    isActive
                      ? "border-accent-violet/40 bg-accent-violet/10 text-accent-violet"
                      : "border-ink/15 bg-surface text-slate-700 hover:border-ink/30"
                  )}
                >
                  {type}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={reset}
            className="mt-4 text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
          >
            Reset filters
          </button>
        </div>

        <p aria-live="polite" className="mt-6 text-sm text-gray-600">
          {results.length} of {records.length} indexed evidence records shown
        </p>

        <div className="mt-3 flex flex-col gap-4">
          <ul className="flex min-w-0 flex-col gap-4">
            {results.length === 0 && (
              <li className="rounded-2xl border border-dashed border-ink/20 bg-white px-6 py-8 text-sm text-gray-600">
                No indexed evidence records match these filters.
              </li>
            )}
            {results.map((record) => (
              <li key={record.title} className="rounded-2xl border border-ink/10 bg-white px-5 py-5 sm:px-7 sm:py-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-ink sm:text-lg">{record.title}</h3>
                  <span className="shrink-0 rounded-full bg-accent-violet/10 px-3 py-1 text-xs font-semibold text-accent-violet">
                    {record.type}
                  </span>
                </div>
                <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4 sm:max-w-[520px]">
                  {[
                    ["Publisher", record.publisher],
                    ["Published", record.published],
                    ["Rights", record.rights],
                    ["Reviewed status", record.status],
                  ].map(([label, value]) => (
                    <div key={label} className="min-w-0">
                      <dt className="text-[11px] font-bold uppercase tracking-wide text-gray-600">{label}</dt>
                      <dd className="mt-1 text-sm text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="#evidence-provenance"
                  className="mt-3 inline-block text-xs font-semibold text-accent-violet transition-colors hover:text-brand sm:text-sm"
                >
                  Inspect Provenance →
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white sm:aspect-[16/7] lg:aspect-[1280/355]">
            <Image
              src="/images/markets/uk-gilts/uk-gilts-explorer-boardroom.webp"
              alt="Team in discussion around a boardroom table in front of a planning wall"
              fill
              sizes="(min-width: 1310px) 1280px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
