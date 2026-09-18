import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

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
    description:
      "High-confidence, production-supported research depth for a named market or domain.",
    example: "U.S. Treasuries · U.K. Gilts",
  },
  {
    status: "Supported",
    tone: "ink",
    description: "Production-supported but narrower than Deep Coverage.",
    example: "Additional sovereign markets",
  },
  {
    status: "Limited / Beta",
    tone: "amber",
    description: "Available with explicit limitations, clearly labeled.",
    example: "Select corporate credit",
  },
  {
    status: "Planned",
    tone: "slate",
    description: "Roadmap only — never presented as current coverage.",
    example: "Broader credit markets",
  },
  {
    status: "Architecture-Ready",
    tone: "slateLight",
    description: "Platform can support the category; no coverage claim implied.",
    example: "Additional jurisdictions",
  },
];

const states = [
  {
    title: "Coverage state",
    detail: "Deep Coverage · Supported · Limited/Beta · Planned · Architecture-ready.",
  },
  {
    title: "Data state",
    detail: "Live · Delayed · Snapshot · Example — required on every displayed numeric datum.",
  },
  {
    title: "Access state",
    detail: "Open · Entitlement required · Restricted · Unavailable.",
  },
  {
    title: "Freshness state",
    detail: "Current · Revised · Superseded · Stale/Unknown.",
  },
];

export default function CoverageTruthSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Coverage Truth</SectionEyebrow>
          <SectionHeading>A Fixed Income label does not imply universal bond coverage.</SectionHeading>
          <p className="mt-5 max-w-[780px] text-base text-slate-600 sm:text-lg">
            Status comes from the governed Coverage Registry — never a hard-coded evergreen claim.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          {rows.map((row, index) => (
            <Reveal key={row.status} delay={index * 0.05}>
              <div className="grid grid-cols-1 gap-3 pb-[20.8px] pt-5 sm:grid-cols-[160px_minmax(0,1fr)_200px] sm:items-center sm:gap-4">
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

        <Reveal delay={0.2} className="mt-[30px] rounded-[14px] border border-ink/10 bg-white p-[27px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.65px] text-ink">
            Coverage Publish Lock
          </p>
          <p className="mt-2 text-[15px] leading-[24px] text-slate-600">
            U.S. Treasuries and U.K. Gilts may appear as examples of approved initial wedges only
            when the Coverage Registry confirms the relevant production state is ready. No other
            fixed-income market, instrument class, or country may be added by design convention.
          </p>
        </Reveal>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {states.map((state) => (
            <Reveal key={state.title} className="rounded-xl border border-ink/8 bg-white px-5 py-[19px]">
              <p className="text-[13px] font-bold text-ink">{state.title}</p>
              <p className="mt-1.5 text-[13px] leading-[19.5px] text-slate-600">{state.detail}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
