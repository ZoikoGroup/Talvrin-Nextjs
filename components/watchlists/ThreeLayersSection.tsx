import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const columns = ["Watchlists", "Monitoring", "Alerts"];

const rows: { label: string; cells: string[] }[] = [
  {
    label: "Owns",
    cells: [
      "Organization of followed research contexts/items; context recovery; summary handoff to research/evidence/monitoring.",
      "Continuous connection between research views and relevant evidence; surfaced changes; review/reassessment workflow.",
      "Future approved delivery/notification layer for configured triggers/events.",
    ],
  },
  {
    label: "Does Not Own",
    cells: [
      "Evidence-change detection, materiality logic, notification delivery, trade signals.",
      "List organization or outbound notification delivery.",
      "Watchlist membership semantics or evidence authority.",
    ],
  },
];

export default function ThreeLayersSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Watchlists vs Monitoring vs Alerts</SectionEyebrow>
          <SectionHeading>Three layers, one continuous workflow.</SectionHeading>
        </Reveal>

        <Reveal delay={0.1} className="mt-11 overflow-hidden rounded-2xl border border-ink/10 bg-white">
          <div className="min-w-[720px] overflow-x-auto sm:min-w-0">
            <div className="grid grid-cols-[140px_repeat(3,minmax(0,1fr))] border-b border-ink/10">
              <div />
              {columns.map((col) => (
                <div key={col} className="border-l border-ink/10 px-6 py-4 text-sm font-bold text-ink">
                  {col}
                </div>
              ))}
            </div>

            {rows.map((row) => (
              <div key={row.label} className="grid grid-cols-[140px_repeat(3,minmax(0,1fr))] border-b border-ink/10 last:border-b-0">
                <div className="px-6 py-5 text-xs font-bold uppercase tracking-wide text-accent-amber">
                  {row.label}
                </div>
                {row.cells.map((cell, index) => (
                  <div
                    key={columns[index]}
                    className="border-l border-ink/10 px-6 py-5 text-sm leading-relaxed text-slate-600"
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
