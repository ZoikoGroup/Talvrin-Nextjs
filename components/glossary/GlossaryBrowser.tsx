"use client";

import Image from "next/image";
import { useId, useMemo, useState, type FormEvent } from "react";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "../alerts/shared";
import { terms, topics } from "./terms";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const examples = ["duration", "free cash flow", "ETF"];

function scrollToTerms() {
  document.getElementById("all-terms")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function GlossaryBrowser() {
  const [draft, setDraft] = useState("");
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<string | null>(null);
  const [letter, setLetter] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const searchId = useId();

  const topicCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const t of terms) counts[t.topic] = (counts[t.topic] ?? 0) + 1;
    return counts;
  }, []);

  const availableLetters = useMemo(
    () => new Set(terms.map((t) => t.term[0].toUpperCase())),
    []
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return terms.filter(
      (t) =>
        (!topic || t.topic === topic) &&
        (!letter || t.term[0].toUpperCase() === letter) &&
        (!q || `${t.term} ${t.topic} ${t.definition}`.toLowerCase().includes(q))
    );
  }, [query, topic, letter]);

  const isFiltered = Boolean(query.trim() || topic || letter);

  const runSearch = (value: string) => {
    setDraft(value);
    setQuery(value);
    scrollToTerms();
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runSearch(draft);
  };

  const clearAll = () => {
    setDraft("");
    setQuery("");
    setTopic(null);
    setLetter(null);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-16 sm:py-20 lg:py-[108px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(640px 440px at 14% 4%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(520px 380px at 92% 92%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
          }}
        />
        <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-10 xl:grid-cols-[minmax(0,785px)_minmax(0,378px)] xl:justify-between">
          <div>
            <Reveal>
              <SectionEyebrow tone="amber">Research / Glossary</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-[60px] xl:leading-[1.03]">
                Financial market glossary
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-[700px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                Understand market terminology, financial metrics and evidence
                labels with definitions that distinguish context, methodology
                and limitations.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <form role="search" onSubmit={onSubmit} className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <label htmlFor={searchId} className="sr-only">
                  Search the glossary
                </label>
                <input
                  id={searchId}
                  type="search"
                  value={draft}
                  onChange={(event) => {
                    setDraft(event.target.value);
                    setQuery(event.target.value);
                  }}
                  placeholder="Search a term, acronym or concept"
                  className="min-w-0 flex-1 rounded-lg bg-white px-4 py-3.5 text-base text-ink placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-violet/60"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-surface px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white"
                >
                  Search
                </button>
              </form>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <span className="text-xs text-white/50">Example:</span>
                {examples.map((example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => runSearch(example)}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white/90 transition-colors hover:border-white/40 hover:bg-white/15"
                  >
                    {example}
                  </button>
                ))}
              </div>
              <p className="mt-4 max-w-[660px] text-xs leading-5 text-white/50">
                Results contain only published terms — searching never implies a
                term exists when it has not been approved.
              </p>
            </Reveal>
          </div>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[378/350] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:block"
          >
            <Image
              src="/images/research/glossary/glossary-hero-presenter.webp"
              alt="A smiling woman in a blazer presenting in a bright office"
              fill
              priority
              sizes="(min-width: 1280px) 378px, 340px"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      {/* Browse by topic / A–Z */}
      <section className="border-b border-ink/10 bg-white py-14 sm:py-16">
        <Container>
          <Reveal>
            <SectionEyebrow>Browse by Topic</SectionEyebrow>
            <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">Featured topics</h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-5 flex flex-wrap gap-2.5">
            {topics.map(({ label, published }) => {
              const active = topic === label;
              const count = topicCounts[label] ?? 0;
              return (
                <button
                  key={label}
                  type="button"
                  disabled={!published}
                  aria-pressed={published ? active : undefined}
                  onClick={() => {
                    setTopic(active ? null : label);
                    scrollToTerms();
                  }}
                  className={clsx(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors",
                    !published && "cursor-not-allowed border-ink/10 text-ink/30",
                    published && !active && "border-ink/10 bg-surface text-ink hover:border-ink/30",
                    active && "border-ink bg-ink text-white"
                  )}
                >
                  {label}
                  <span className="text-xs font-bold opacity-70">
                    {published ? `${count} ${count === 1 ? "term" : "terms"}` : "Not yet published"}
                  </span>
                </button>
              );
            })}
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <SectionEyebrow tone="amber">Browse A–Z</SectionEyebrow>
            <div role="group" aria-label="Filter by first letter" className="mt-4 flex flex-wrap gap-2">
              {letters.map((l) => {
                const available = availableLetters.has(l);
                const active = letter === l;
                return (
                  <button
                    key={l}
                    type="button"
                    disabled={!available}
                    aria-pressed={available ? active : undefined}
                    aria-label={available ? `Terms starting with ${l}` : `${l}: no published terms`}
                    onClick={() => {
                      setLetter(active ? null : l);
                      scrollToTerms();
                    }}
                    className={clsx(
                      "flex size-10 items-center justify-center rounded-lg border text-base transition-colors",
                      !available && "cursor-not-allowed border-ink/5 font-semibold text-ink/25",
                      available && !active && "border-ink/10 bg-white font-bold text-ink hover:border-ink/40",
                      active && "border-ink bg-ink font-bold text-white"
                    )}
                  >
                    {l}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* All terms */}
      <section id="all-terms" className="scroll-mt-20 bg-surface py-14 sm:py-16">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-bold text-ink">All glossary terms</h2>
            <p className="text-xs font-semibold text-gray-600">Sorted A–Z</p>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
            <p aria-live="polite" className="text-sm text-gray-600">
              Showing {results.length} of {terms.length} published terms.
            </p>
            {isFiltered && (
              <button
                type="button"
                onClick={clearAll}
                className="text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
              >
                Clear filters
              </button>
            )}
          </div>

          {results.length === 0 ? (
            <p className="mt-6 rounded-2xl border border-dashed border-ink/20 bg-white px-6 py-8 text-sm text-gray-600">
              No published term matches this search. That doesn&apos;t mean the
              term exists — only approved definitions appear here.
            </p>
          ) : (
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {results.map((item) => {
                const open = expanded === item.term;
                const panelId = `glossary-${item.term.replace(/\W+/g, "-").toLowerCase()}`;
                return (
                  <li key={item.term} className="flex flex-col rounded-2xl border border-ink/10 bg-white p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-bold text-ink">{item.term}</h3>
                      <span className="shrink-0 rounded-full bg-ink/5 px-2.5 py-[3px] text-[11px] font-bold text-gray-600">
                        {item.topic}
                      </span>
                    </div>
                    <p
                      id={panelId}
                      className={clsx("mt-2.5 text-sm leading-5 text-gray-600", !open && "line-clamp-2")}
                    >
                      {item.definition}
                    </p>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setExpanded(open ? null : item.term)}
                      className="mt-3.5 w-fit text-xs font-bold text-accent-violet transition-colors hover:text-brand"
                    >
                      {open ? "Hide definition ↑" : "View definition →"}
                    </button>
                  </li>
                );
              })}
              {!isFiltered && (
                <li
                  aria-hidden="true"
                  className="relative hidden min-h-[176px] overflow-hidden rounded-2xl border border-ink/10 bg-white xl:col-span-2 xl:block"
                >
                  <Image
                    src="/images/research/glossary/glossary-terms-colleague-smiling.webp"
                    alt=""
                    fill
                    sizes="590px"
                    className="object-cover"
                  />
                </li>
              )}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
