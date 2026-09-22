import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const statusStyles = {
  violet: "border-accent-violet/35 text-accent-violet",
  ink: "border-ink/25 text-ink",
  amber: "border-accent-amber/35 text-accent-amber",
  slate: "border-slate-400/30 text-slate-600",
  slateLight: "border-slate-400/20 text-slate-600",
} as const;

const rows: {
  status: string;
  tone: keyof typeof statusStyles;
  description: string;
  example: string;
}[] = [
  {
    status: "Deep Coverage",
    tone: "violet",
    description: "High-confidence, production-supported research depth for the named market or domain.",
    example: "U.S. Treasuries · U.K. Gilts",
  },
  {
    status: "Supported",
    tone: "ink",
    description: "Production-supported but narrower than Deep Coverage.",
    example: "U.S. Equities",
  },
  {
    status: "Limited / Beta",
    tone: "amber",
    description: "Available with explicit limitations, clearly labeled.",
    example: "Eurozone Sovereign Debt",
  },
  {
    status: "Planned",
    tone: "slate",
    description: "Roadmap only — never presented as current coverage.",
    example: "Emerging Market FX",
  },
  {
    status: "Architecture-Ready",
    tone: "slateLight",
    description: "Platform architecture can support the category; no coverage claim implied.",
    example: "Additional jurisdictions",
  },
];

export default function GlobalPositioningSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Global Positioning</SectionEyebrow>
          <SectionHeading>One evidence architecture. Global public markets.</SectionHeading>
          <SectionLede>
            Talvrin is engineered as a global, multi-jurisdiction and multi-market platform.
            Coverage expands through governed market, jurisdiction, source, licensing and policy
            capabilities — not through hard-coded country silos.
          </SectionLede>
        </Reveal>

        <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          {rows.map((row, index) => (
            <Reveal key={row.status} delay={index * 0.05}>
              <div className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-[180px_minmax(0,1fr)_220px] sm:items-center sm:gap-4">
                <span
                  className={clsx(
                    "inline-flex w-fit shrink-0 items-center rounded-md border bg-white px-4 py-2 text-center text-xs font-bold",
                    statusStyles[row.tone]
                  )}
                >
                  {row.status}
                </span>
                <p className="text-[15px] text-slate-600">{row.description}</p>
                <p className="text-sm font-semibold text-ink">{row.example}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
