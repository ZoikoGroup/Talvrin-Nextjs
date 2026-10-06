"use client";

import { useState } from "react";
import clsx from "clsx";
import { UnknownDot, UnknownPill } from "./shared";

type ComponentGroup = {
  name: string;
  components: { name: string; description: string }[];
};

const groups: ComponentGroup[] = [
  {
    name: "Research & Evidence Platform",
    components: [
      { name: "Research Workspace", description: "Question-led research workflow and saved research objects." },
      { name: "Evidence & Source Access", description: "Source documents, provenance, and evidence relationships." },
      { name: "Market Data & Coverage", description: "Released market, fixed income, equities, and macro coverage." },
    ],
  },
  {
    name: "Account & Notifications",
    components: [
      { name: "Sign-In & Authentication", description: "Account sign-in, session, and identity verification." },
      { name: "Watchlists & Alerts Delivery", description: "Evidence-change monitoring and alert delivery." },
    ],
  },
  {
    name: "Developer Platform",
    components: [
      { name: "API & Data Services", description: "Public Data APIs and programmatic access." },
      { name: "Developer Authentication", description: "API keys, tokens, and developer identity services." },
    ],
  },
  {
    name: "Content & Documentation",
    components: [
      { name: "Public Website & Marketing Pages", description: "talvrin.com marketing and informational pages." },
      { name: "Help Center & Documentation", description: "Self-service support content and product documentation." },
    ],
  },
];

const ALL = "All components";

export default function ComponentDirectory() {
  const [filter, setFilter] = useState(ALL);
  const visibleGroups = filter === ALL ? groups : groups.filter((group) => group.name === filter);

  return (
    <div>
      <div role="group" aria-label="Filter components" className="flex flex-wrap gap-2 pt-4">
        {[ALL, ...groups.map((group) => group.name)].map((option) => {
          const active = option === filter;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(option)}
              className={clsx(
                "rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
                active ? "border-ink bg-ink text-white" : "border-ink/20 bg-white text-ink hover:border-ink/40"
              )}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col gap-7">
        {visibleGroups.map((group) => (
          <div key={group.name} className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-ink">{group.name}</h3>
            <ul className="flex flex-col gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10">
              {group.components.map((component) => (
                <li
                  key={component.name}
                  className="flex flex-col gap-3 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="pt-1.5">
                      <UnknownDot />
                    </span>
                    <div>
                      <p className="text-base font-semibold text-ink">{component.name}</p>
                      <p className="max-w-96 text-xs leading-5 text-muted">{component.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pl-[22px] sm:pl-0">
                    <span aria-hidden="true" className="hidden text-xs text-gray-400 sm:inline">
                      —
                    </span>
                    <UnknownPill>Unknown — awaiting source</UnknownPill>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
