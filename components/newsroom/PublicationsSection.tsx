"use client";

import { useMemo, useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

type Publication = {
  title: string;
  topic: string;
  contentType: string;
  year: string;
};

/**
 * Nothing has been published yet, so every filter below is intentionally
 * empty: options appear only once a verified public record exists.
 */
const publications: Publication[] = [];

const filters = [
  { id: "content-type", label: "All Content Types" },
  { id: "topic", label: "No topics available yet" },
  { id: "year", label: "No years available yet" },
];

export default function PublicationsSection() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return publications;
    return publications.filter((item) =>
      [item.title, item.topic, item.contentType].some((field) =>
        field.toLowerCase().includes(term)
      )
    );
  }, [query]);

  return (
    <section id="all-publications" className="scroll-mt-32 bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="amber">All Publications</SectionEyebrow>
          <SectionHeading>
            Browse approved Talvrin updates and source-linked perspectives.
          </SectionHeading>
          <SectionLede className="max-w-[760px] sm:text-base sm:leading-7">
            Every published item has a canonical page with visible dates, an accountable owner,
            supporting sources, and correction history.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="newsroom-search" className="sr-only">
            Search publications
          </label>
          <input
            id="newsroom-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search titles, topics, or keywords"
            className="w-full rounded-lg border border-ink/20 bg-surface px-4 py-3.5 text-base text-ink placeholder:text-slate-500 focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-accent-violet/30 sm:flex-1"
          />
          <button
            type="button"
            onClick={() => setQuery("")}
            className="rounded-lg border border-ink/20 px-5 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-surface"
          >
            Clear All Filters
          </button>
        </Reveal>

        <div id="topics" className="scroll-mt-32">
          <Reveal delay={0.15} className="mt-3 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <span key={filter.id}>
                <label htmlFor={filter.id} className="sr-only">
                  {filter.label}
                </label>
                <select
                  id={filter.id}
                  disabled
                  defaultValue="all"
                  className="cursor-not-allowed rounded-lg border border-ink/20 bg-surface py-3 pl-4 pr-7 text-sm font-medium text-slate-600"
                >
                  <option value="all">{filter.label}</option>
                </select>
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-5 text-sm font-semibold text-slate-600">
            Showing {results.length} of {publications.length} current publications
          </p>
        </Reveal>

        {results.length === 0 && (
          <Reveal
            delay={0.25}
            className="mt-4 rounded-2xl border border-ink/10 bg-surface px-6 pb-9 pt-10 sm:px-8 sm:pt-12"
          >
            <SectionEyebrow tone="amber">Status</SectionEyebrow>
            <p className="mt-2 text-base font-semibold leading-7 text-ink">
              {query
                ? "No publications match your search."
                : "There are currently no published newsroom updates."}
            </p>
            <p className="mt-1 text-base leading-6 text-slate-600">
              When Talvrin publishes verified company, product, or research updates, they will
              appear here with visible dates, sources, and an accountable owner.
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
