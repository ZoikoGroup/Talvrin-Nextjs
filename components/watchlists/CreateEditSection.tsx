"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const behaviors = [
  {
    title: "Duplicate add",
    description: "Prevent duplicate membership or explain existing item per service contract.",
  },
  { title: "Rename / edit purpose", description: "Edits organization metadata only." },
  {
    title: "Delete / archive watchlist",
    description: "High-impact action; explains that research/evidence remains unless policy states otherwise.",
  },
  {
    title: "No search result",
    description: "States no matching supported item found; never fabricates an entity.",
  },
  {
    title: "Mutation error",
    description: "Preserves form/selection state; accessible error; never duplicates on retry.",
  },
  {
    title: "Name validation",
    description: "Client + server validation; length/character rules from the capability registry.",
  },
];

const researchContexts = [
  { id: "jp-yield", title: "Japan Yield-Curve Policy", meta: "Macro · Japan" },
  { id: "us-treasury", title: "U.S. Treasury Yields", meta: "Fixed Income · U.S." },
  { id: "ecb-rate", title: "ECB Policy Rate", meta: "Macro · Eurozone" },
  { id: "uk-gilts", title: "U.K. Gilts Coverage", meta: "Fixed Income · U.K." },
  { id: "cn-trade", title: "China Trade Policy", meta: "Macro · China" },
];

const fieldClasses =
  "mt-1.5 w-full rounded-lg border border-ink/12 bg-surface px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-accent-violet";

function CreateWatchlistCard() {
  const [name, setName] = useState("Global Rates & Policy");
  const [purpose, setPurpose] = useState("Active macro research contexts");
  const [created, setCreated] = useState<string | null>(null);

  function handleCreate() {
    const trimmed = name.trim();
    if (!trimmed) return;
    setCreated(trimmed);
  }

  function handleCancel() {
    setName("");
    setPurpose("");
    setCreated(null);
  }

  return (
    <Reveal className="flex h-full flex-col gap-4 rounded-[14px] border border-ink/8 bg-white p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-accent-violet">Create Watchlist</p>

      <label className="block">
        <span className="text-xs text-slate-500">Name</span>
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setCreated(null);
          }}
          placeholder="e.g. Global Rates & Policy"
          className={fieldClasses}
        />
      </label>

      <label className="block">
        <span className="text-xs text-slate-500">Purpose (optional)</span>
        <input
          value={purpose}
          onChange={(event) => setPurpose(event.target.value)}
          placeholder="Active macro research contexts"
          className={fieldClasses}
        />
      </label>

      <div className="mt-1 flex items-center gap-4">
        <button
          type="button"
          onClick={handleCreate}
          className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink-2"
        >
          Create Watchlist
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="text-sm font-medium text-slate-500 transition-colors hover:text-ink"
        >
          Cancel
        </button>
      </div>

      <p className="min-h-4 text-xs text-accent-violet">
        {created ? `✓ "${created}" created. (Demo only — nothing is saved.)` : null}
      </p>
    </Reveal>
  );
}

function AddItemCard() {
  const [query, setQuery] = useState("");
  const [added, setAdded] = useState<string[]>([]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = q ? researchContexts.filter((c) => c.title.toLowerCase().includes(q)) : researchContexts;
    return matches.slice(0, 3);
  }, [query]);

  return (
    <Reveal delay={0.08} className="flex h-full flex-col gap-4 rounded-[14px] border border-ink/8 bg-white p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-accent-violet">Add Item</p>

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search research contexts…"
        className="rounded-lg border border-ink/12 bg-surface px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-accent-violet"
      />

      <div className="flex flex-col gap-2">
        {results.length === 0 && (
          <p className="text-xs text-slate-500">No matching supported item found.</p>
        )}
        {results.map((item) => {
          const isAdded = added.includes(item.id);
          return (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border border-ink/8 px-3 py-2.5"
            >
              <div>
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="text-xs text-slate-500">{item.meta}</p>
              </div>
              <button
                type="button"
                disabled={isAdded}
                onClick={() => setAdded((prev) => [...prev, item.id])}
                className={clsx(
                  "text-sm font-semibold transition-colors",
                  isAdded ? "text-slate-400" : "text-accent-violet hover:text-ink"
                )}
              >
                {isAdded ? "Added" : "Add"}
              </button>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}

function RemoveItemCard() {
  const [status, setStatus] = useState<"pending" | "removed" | "kept">("pending");

  return (
    <Reveal delay={0.16} className="flex h-full flex-col gap-4 rounded-[14px] border border-ink/8 bg-white p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-accent-violet">Remove Item</p>

      {status === "pending" && (
        <>
          <p className="text-sm leading-relaxed text-slate-600">
            Remove &ldquo;U.S. Treasury yields&rdquo; from this Watchlist? The underlying research
            and evidence remain unchanged.
          </p>
          <div className="mt-1 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setStatus("removed")}
              className="rounded-lg bg-[#a84242] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#8f3838]"
            >
              Remove from Watchlist
            </button>
            <button
              type="button"
              onClick={() => setStatus("kept")}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-ink"
            >
              Cancel
            </button>
          </div>
        </>
      )}

      {status !== "pending" && (
        <>
          <p className="text-sm leading-relaxed text-slate-600">
            {status === "removed"
              ? "✓ Removed from this Watchlist. The underlying research and evidence remain unchanged."
              : "Kept in this Watchlist."}
          </p>
          <button
            type="button"
            onClick={() => setStatus("pending")}
            className="self-start text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
          >
            Try again
          </button>
        </>
      )}
    </Reveal>
  );
}

export default function CreateEditSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Create, Edit & Empty States</SectionEyebrow>
          <SectionHeading>Organization is reversible by design.</SectionHeading>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <CreateWatchlistCard />
          <AddItemCard />
          <RemoveItemCard />

          <Reveal
            delay={0.24}
            className="relative min-h-[220px] overflow-hidden rounded-[14px] border border-ink/8 bg-white sm:col-span-2 lg:col-span-1 lg:min-h-0"
          >
            <Image
              src="/images/product/watchlist/watchlist-create-edit-team.png"
              alt="Research team reviewing data together at their workstations"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-ink/10 pt-8 sm:grid-cols-3">
          {behaviors.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <h3 className="text-[15px] font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
