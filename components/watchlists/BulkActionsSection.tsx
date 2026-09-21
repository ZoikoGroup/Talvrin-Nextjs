import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const rows = [
  { title: "Multi-select", description: "Optional capability; selection count visible and announced." },
  {
    title: "Bulk remove",
    description: 'Explicit "Remove N items from Watchlist"; no underlying object deletion.',
  },
  {
    title: "Move / copy between lists",
    description: "Only if capability exists; server-authorized; destination described before commit.",
  },
  {
    title: "Clear filters",
    description: "Never clears selections or list membership unless explicitly stated.",
  },
  {
    title: "Delete list",
    description: "Separate from remove items; explicit consequence summary and recovery policy.",
  },
  { title: "Undo", description: "Used for reversible organizational mutations where technically reliable." },
  { title: "Drag reorder", description: "May exist only as enhancement; keyboard alternative required." },
  {
    title: "Import / export",
    description: "Not specified by sources; hidden unless separately approved.",
  },
];

export default function BulkActionsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Bulk and Destructive Actions</SectionEyebrow>
          <SectionHeading>
            Explicit selection. Explicit consequence. No ambiguous &ldquo;delete&rdquo;.
          </SectionHeading>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="divide-y divide-ink/10 border-t border-ink/10">
            {rows.map((row, index) => (
              <Reveal key={row.title} delay={index * 0.04}>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[220px_minmax(0,1fr)] sm:items-start sm:gap-6">
                  <h3 className="text-[15px] font-bold text-ink">{row.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{row.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="relative min-h-[260px] overflow-hidden rounded-2xl border border-ink/8 lg:min-h-0">
            <Image
              src="/images/product/watchlist/Frame 43.png"
              alt="Analyst presenting a growth strategy dashboard to a boardroom"
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
