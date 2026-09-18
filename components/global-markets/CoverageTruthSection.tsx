import Link from "next/link";
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

const evaluatedAcross = [
  "Geography",
  "Asset class",
  "Issuer type",
  "Institution / source class",
  "Language",
  "Jurisdiction",
  "Data timeliness",
  "Rights level",
  "Research capability",
];

export default function CoverageTruthSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Coverage Truth</SectionEyebrow>
          <SectionHeading>Global architecture is not the same as released coverage.</SectionHeading>
          <SectionLede>
            This page explains the coverage model. Market Coverage owns the current,
            market-by-market capability status.
          </SectionLede>
        </Reveal>

        <div className="mt-8 divide-y divide-ink/10 border-t border-ink/10">
          {rows.map((row, index) => (
            <Reveal key={row.status} delay={index * 0.05}>
              <div className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-[160px_minmax(0,1fr)_200px] sm:items-center sm:gap-4">
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

        <Reveal delay={0.2} className="mt-9">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
            Coverage Is Evaluated Across
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {evaluatedAcross.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink/12 bg-white px-4 py-2 text-sm font-semibold text-ink"
              >
                {item}
              </span>
            ))}
          </div>
          <Link
            href="/markets/market-coverage"
            className="mt-5 inline-block text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
          >
            View Market Coverage →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
