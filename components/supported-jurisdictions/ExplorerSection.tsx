"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import {
  DIMENSIONS,
  JURISDICTIONS,
  STATUS_LABEL,
  STATUS_PILL,
  STATUS_TEXT,
  type Jurisdiction,
} from "./data";
import { SectionEyebrow, SectionHeading, SectionLede, StatusPill } from "./shared";

type RecordStatus = Jurisdiction["status"];

const FILTERS: RecordStatus[] = ["verified", "assessment"];

function countFor(status: RecordStatus) {
  return JURISDICTIONS.filter((j) => j.status === status).length;
}

export default function ExplorerSection() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<RecordStatus[]>([]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return JURISDICTIONS.filter((j) => {
      if (active.length > 0 && !active.includes(j.status)) return false;
      if (!q) return true;
      const haystack = [j.name, j.sourceClass, j.limitation, ...DIMENSIONS].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [query, active]);

  function toggle(status: RecordStatus) {
    setActive((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  }

  const filtered = query.trim() !== "" || active.length > 0;

  return (
    <section id="explorer" className="scroll-mt-24 bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Jurisdiction explorer</SectionEyebrow>
          <SectionHeading>Find a jurisdiction. See exactly what&apos;s confirmed for it.</SectionHeading>
          <SectionLede>
            Every record below comes from the same governed registry that drives status badges
            across Talvrin. No jurisdiction is listed as available merely because the platform is
            globally architected.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 rounded-2xl bg-white px-7 py-6">
          <label
            htmlFor="jurisdiction-search"
            className="text-xs font-bold uppercase tracking-wide text-slate-600"
          >
            Find a jurisdiction
          </label>
          <input
            id="jurisdiction-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by jurisdiction or asset class…"
            className="mt-2 block w-full max-w-96 rounded-lg border border-ink/20 bg-surface px-4 py-3 text-base text-ink placeholder:text-slate-500 focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-accent-violet/30"
          />

          <fieldset className="mt-5">
            <legend className="text-xs font-bold uppercase tracking-wide text-slate-600">
              Coverage status
            </legend>
            <div className="mt-2 flex flex-wrap gap-2.5">
              {FILTERS.map((status) => {
                const on = active.includes(status);
                return (
                  <button
                    key={status}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(status)}
                    className={clsx(
                      "rounded-full border px-4 py-2 text-xs font-bold transition-colors",
                      STATUS_PILL[status],
                      on && "ring-2 ring-current ring-offset-1"
                    )}
                  >
                    {STATUS_LABEL[status]} ({countFor(status)})
                  </button>
                );
              })}
            </div>
          </fieldset>

          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActive([]);
            }}
            disabled={!filtered}
            className="mt-4 text-sm font-semibold text-accent-violet transition-colors hover:text-ink disabled:cursor-default disabled:opacity-50 disabled:hover:text-accent-violet"
          >
            Reset filters
          </button>
        </Reveal>

        <p className="mt-6 text-sm text-slate-600" aria-live="polite">
          {results.length} of {JURISDICTIONS.length} jurisdiction records shown
        </p>

        <ul className="mt-3 flex flex-col gap-4">
          {results.map((j) => (
            <li
              key={j.name}
              className="flex flex-col gap-2.5 rounded-2xl border border-ink/10 bg-white p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-ink">{j.name}</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Owner: {j.owner} · Last reviewed {j.reviewed}
                  </p>
                </div>
                <StatusPill status={j.status} />
              </div>

              <ul className="mt-1 grid grid-cols-2 gap-2.5 md:grid-cols-4">
                {DIMENSIONS.map((d) => (
                  <li key={d} className="flex flex-col gap-2.5 rounded-[10px] bg-surface px-3.5 pb-3.5 pt-3">
                    <span className="text-xs font-bold tracking-wide text-slate-600">{d}</span>
                    <span className={clsx("text-xs font-bold", STATUS_TEXT[j.dimensions[d]])}>
                      {STATUS_LABEL[j.dimensions[d]]}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="pt-1.5 text-xs leading-5 text-slate-600">
                <span className="font-bold text-ink">Source class:</span> {j.sourceClass}
              </p>
              <p className="border-t border-ink/10 pt-3.5 text-xs leading-5 text-slate-600">
                <span className="font-bold text-ink">Limitation:</span> {j.limitation}
              </p>
            </li>
          ))}
          {results.length === 0 && (
            <li className="rounded-2xl border border-dashed border-ink/20 bg-white p-6 text-sm text-slate-600">
              No jurisdiction records match. Any jurisdiction not listed is architecture-ready only.
            </li>
          )}
        </ul>

        <Reveal delay={0.1} className="mt-4 rounded-2xl border border-ink/10 bg-white px-7 py-6">
          <p className="text-sm leading-6 text-slate-600">
            All jurisdictions outside the records above are architecture-ready only: Talvrin&apos;s
            platform can support additional jurisdictions in principle, but none beyond those
            listed is currently Verified Supported or In Assessment.{" "}
            <a
              href="#request-coverage"
              className="font-semibold text-accent-violet transition-colors hover:text-ink"
            >
              Ask about a jurisdiction not listed →
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
