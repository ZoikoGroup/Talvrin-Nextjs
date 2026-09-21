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

function MockField({ label, value }: { label?: string; value: string }) {
  return (
    <div>
      {label && <p className="text-xs text-slate-500">{label}</p>}
      <p className={clsx("rounded-lg border border-ink/12 bg-surface px-3 py-2 text-sm text-ink/70", label && "mt-1.5")}>
        {value}
      </p>
    </div>
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
          <Reveal className="flex h-full flex-col gap-4 rounded-[14px] border border-ink/8 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-violet">
              Create Watchlist
            </p>
            <MockField label="Name" value="Global Rates & Policy" />
            <MockField label="Purpose (optional)" value="Active macro research contexts" />
            <div className="mt-1 flex items-center gap-4">
              <span className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white">
                Create Watchlist
              </span>
              <span className="text-sm font-medium text-slate-500">Cancel</span>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex h-full flex-col gap-4 rounded-[14px] border border-ink/8 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-violet">Add Item</p>
            <MockField value="Search research contexts…" />
            <div className="flex items-center justify-between rounded-lg border border-ink/8 px-3 py-2.5">
              <div>
                <p className="text-sm font-semibold text-ink">Japan Yield-Curve Policy</p>
                <p className="text-xs text-slate-500">Macro · Japan</p>
              </div>
              <span className="text-sm font-semibold text-accent-violet">Add</span>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="flex h-full flex-col gap-4 rounded-[14px] border border-ink/8 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-violet">Remove Item</p>
            <p className="text-sm leading-relaxed text-slate-600">
              Remove &ldquo;U.S. Treasury yields&rdquo; from this Watchlist? The underlying
              research and evidence remain unchanged.
            </p>
            <div className="mt-1 flex items-center gap-4">
              <span className="rounded-lg bg-[#a84242] px-4 py-2 text-sm font-semibold text-white">
                Remove from Watchlist
              </span>
              <span className="text-sm font-medium text-slate-500">Cancel</span>
            </div>
          </Reveal>

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
