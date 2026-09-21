import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const rows = [
  { title: "Name", description: "Concise, user-understandable, editable if capability allows." },
  {
    title: "Purpose / description",
    description: "Optional concise context explaining what the list is for.",
  },
  {
    title: "Scope / owner",
    description: "Personal/team/workspace label only if the permission model defines it.",
  },
  { title: "Item count", description: "Reflects server truth; never used as engagement pressure." },
  {
    title: "Last edited",
    description: "Shown only if materially useful; never implies research revalidation.",
  },
  {
    title: "Review summary",
    description: "Aggregates approved Monitoring states; never calculates local materiality.",
  },
  { title: "Primary action", description: "Open / review list — one dominant action." },
  {
    title: "Secondary actions",
    description: "Rename, edit purpose, manage items, archive/delete where capabilities exist.",
  },
  { title: "Privacy state", description: "Private by default unless product policy says otherwise." },
];

export default function AnatomySection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Anatomy of a Watchlist</SectionEyebrow>
          <SectionHeading>Every list carries its own purpose — not just a name.</SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-stretch">
          <Reveal className="relative min-h-[320px] w-full overflow-hidden rounded-2xl border border-ink/8 lg:min-h-0">
            <Image
              src="/images/product/watchlist/Background+Border (1).webp"
              alt="Analyst pointing to a research dashboard on a large monitor"
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="divide-y divide-ink/10 border-t border-ink/10 lg:border-t-0">
            {rows.map((row, index) => (
              <Reveal key={row.title} delay={index * 0.04}>
                <div className="flex items-start gap-3 py-2.5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-accent-violet/40 text-[11px] font-bold text-accent-violet">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink">{row.title}</h3>
                    <p className="mt-0.5 text-[13px] leading-snug text-slate-600">{row.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
