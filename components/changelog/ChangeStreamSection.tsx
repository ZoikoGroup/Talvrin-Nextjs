"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";
import { changes, typeStyles, actionStyles } from "./changes";

const surfaces = ["All surfaces", ...Array.from(new Set(changes.map((c) => c.surface)))];
const types = ["All types", ...Array.from(new Set(changes.map((c) => c.type)))];
const actions = ["All actions", ...Array.from(new Set(changes.map((c) => c.action)))];
const periods = ["All time", ...Array.from(new Set(changes.map((c) => c.month)))];

const selectClasses =
  "mt-1.5 w-full rounded-lg border border-ink/20 bg-white py-3 pl-4 pr-7 text-sm text-ink focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-accent-violet/30";

export default function ChangeStreamSection() {
  const [query, setQuery] = useState("");
  const [surface, setSurface] = useState(surfaces[0]);
  const [type, setType] = useState(types[0]);
  const [action, setAction] = useState(actions[0]);
  const [period, setPeriod] = useState(periods[0]);
  const [sort, setSort] = useState("Newest first");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    const filtered = changes.filter((change) => {
      const matchesQuery =
        !term ||
        [change.title, change.summary, change.surface, change.version ?? ""].some((field) =>
          field.toLowerCase().includes(term)
        );
      return (
        matchesQuery &&
        (surface === surfaces[0] || change.surface === surface) &&
        (type === types[0] || change.type === type) &&
        (action === actions[0] || change.action === action) &&
        (period === periods[0] || change.month === period)
      );
    });
    // Records are authored newest-first; reverse for oldest-first.
    return sort === "Newest first" ? filtered : [...filtered].reverse();
  }, [query, surface, type, action, period, sort]);

  const months = Array.from(new Set(results.map((change) => change.month)));

  return (
    <section id="change-stream" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <Container>
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[760px]">
            <SectionEyebrow tone="violet">Change Stream</SectionEyebrow>
            <SectionHeading>What changed, where, and whether you need to act.</SectionHeading>
          </div>
          <p className="font-mono text-xs leading-5 text-slate-600">
            Registry snapshot [snapshot-id]
            <br />
            Verified 2026-09-23 14:32 UTC
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-7 rounded-2xl border border-ink/10 bg-surface px-5 pb-5 pt-6"
        >
          {/* Six fields only share one row once there is room; below that they
              wrap in threes and then pairs, so no select is squeezed. */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[minmax(0,2fr)_repeat(5,minmax(0,1fr))]">
            <div>
              <label htmlFor="changelog-search" className="block text-xs font-semibold text-ink">
                Search changes
              </label>
              <input
                id="changelog-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Title, summary, surface, or public version"
                className="mt-1.5 w-full rounded-lg border border-ink/20 bg-white px-4 py-3 text-base text-ink placeholder:text-slate-500 focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-accent-violet/30"
              />
            </div>

            {[
              { id: "surface", label: "Surface", value: surface, set: setSurface, options: surfaces },
              { id: "type", label: "Change type", value: type, set: setType, options: types },
              { id: "action", label: "Developer action", value: action, set: setAction, options: actions },
              { id: "period", label: "Published", value: period, set: setPeriod, options: periods },
              {
                id: "sort",
                label: "Sort",
                value: sort,
                set: setSort,
                options: ["Newest first", "Oldest first"],
              },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-xs font-semibold text-ink">
                  {field.label}
                </label>
                <select
                  id={field.id}
                  value={field.value}
                  onChange={(event) => field.set(event.target.value)}
                  className={selectClasses}
                >
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <p className="mt-4 border-t border-ink/10 pt-3.5 text-sm text-slate-700">
            {results.length === changes.length
              ? `Showing all ${changes.length} changes in this snapshot, ${sort.toLowerCase()}.`
              : `Showing ${results.length} of ${changes.length} changes in this snapshot.`}
          </p>
        </Reveal>

        {results.length === 0 ? (
          <Reveal delay={0.15} className="mt-9 rounded-2xl border border-ink/10 bg-surface p-8">
            <p className="text-base font-semibold text-ink">No changes match these filters.</p>
            <p className="mt-1 text-sm text-slate-600">
              This snapshot holds {changes.length} records. Widen a filter to see them.
            </p>
          </Reveal>
        ) : (
          <div className="mt-9 flex flex-col gap-9">
            {months.map((month) => (
              <div key={month} className="flex flex-col gap-3">
                <h3 className="border-b-2 border-ink pb-2.5 font-mono text-xs font-bold uppercase tracking-wide text-slate-600">
                  {month}
                </h3>

                {results
                  .filter((change) => change.month === month)
                  .map((change, index) => (
                    <Reveal
                      key={change.id}
                      delay={index * 0.03}
                      className="flex flex-col gap-4 border-b border-ink/10 py-6 md:flex-row md:gap-8"
                    >
                      <div className="flex flex-row gap-3 md:w-28 md:shrink-0 md:flex-col md:gap-1">
                        <p className="font-mono text-sm font-semibold text-ink">{change.date}</p>
                        <p className="font-mono text-xs text-slate-600">{change.time}</p>
                        <p className="font-mono text-xs text-slate-600">{change.id}</p>
                      </div>

                      <div className="flex flex-1 flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-ink/20 px-2.5 py-1 text-xs font-semibold text-ink">
                            {change.surface}
                          </span>
                          <span
                            className={clsx(
                              "rounded-md px-2 py-[5px] font-mono text-xs font-bold uppercase",
                              typeStyles[change.type]
                            )}
                          >
                            {change.type}
                          </span>
                          <span
                            className={clsx(
                              "rounded-md border px-2.5 py-1 text-xs font-bold",
                              actionStyles[change.action]
                            )}
                          >
                            {change.action}
                          </span>
                          {change.lifecycle !== "Published" && (
                            <span className="rounded-md border border-dashed border-slate-500 px-2 py-1 font-mono text-xs font-bold uppercase text-slate-600">
                              {change.lifecycle}
                            </span>
                          )}
                        </div>

                        <h4 className="mt-1 text-lg font-bold leading-6 text-ink">{change.title}</h4>
                        <p className="max-w-[780px] text-base leading-6 text-slate-700">
                          {change.summary}
                        </p>

                        {change.supersededBy && (
                          <p className="text-sm text-slate-600">
                            Superseded by{" "}
                            <Link href="#change-detail" className="text-accent-violet hover:text-ink">
                              {change.supersededBy}
                            </Link>
                            . Use the current guidance.
                          </p>
                        )}

                        <div className="mt-1.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                          <p className="text-sm font-semibold text-ink">
                            Effective:{" "}
                            <span className="text-slate-600">{change.effective}</span>
                            {change.version && (
                              <span className="ml-6 font-mono text-xs font-normal text-slate-600">
                                {change.version}
                              </span>
                            )}
                          </p>
                          <Link
                            href="#change-detail"
                            className="text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
                          >
                            View details →
                          </Link>
                        </div>
                      </div>
                    </Reveal>
                  ))}
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
