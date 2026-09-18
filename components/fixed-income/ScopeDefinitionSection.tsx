import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const rows = [
  {
    label: "Rates / Sovereign Research",
    mayExplain:
      "Policy expectations, financing/issuance context, macro evidence, jurisdiction, source changes.",
    mustNot: "Universal bond coverage, every sovereign market, or live yield curves.",
  },
  {
    label: "Issuer / Instrument Context",
    mayExplain: "Use issuer/security terms where approved data exists.",
    mustNot: "Complete security master, ratings, pricing, or holdings analytics.",
  },
  {
    label: "Curve / Yield Context",
    mayExplain: "Explain conceptually that tenor and curve context may matter.",
    mustNot: "A proprietary curve model or specific benchmark methodology without source approval.",
  },
  {
    label: "Cross-Market Context",
    mayExplain: "Connect to macro, policy, currency, and related public-market evidence.",
    mustNot: "Causal certainty or a predictive market model.",
  },
];

export default function ScopeDefinitionSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Scope &amp; Definition</SectionEyebrow>
          <SectionHeading>What Fixed Income means in Talvrin.</SectionHeading>
          <p className="mt-5 max-w-[800px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Talvrin Fixed Income is an evidence-led research destination for investigating
            fixed-income market questions through governed sources, context, and monitoring.
            Public sources support a U.S. Treasury yield research example and identify U.S.
            Treasuries and U.K. Gilts as initial market wedges where production readiness is
            confirmed.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 pb-3 sm:grid-cols-[200px_minmax(0,1fr)_minmax(0,1fr)] sm:gap-4">
          <span aria-hidden="true" />
          <p className="text-xs font-bold uppercase tracking-[0.72px] text-slate-600">May Explain</p>
          <p className="text-xs font-bold uppercase tracking-[0.72px] text-slate-600">
            Must Not Assume
          </p>
        </div>

        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {rows.map((row, index) => (
            <Reveal key={row.label} delay={index * 0.05}>
              <div className="grid grid-cols-1 gap-3 pb-[20.8px] pt-5 sm:grid-cols-[200px_minmax(0,1fr)_minmax(0,1fr)] sm:items-start sm:gap-4">
                <span className="inline-flex w-fit shrink-0 items-center rounded-md border border-ink/16 bg-white px-4 py-2 text-center text-[13px] font-bold text-ink">
                  {row.label}
                </span>
                <p className="text-[15px] text-ink/80">{row.mayExplain}</p>
                <p className="text-sm text-slate-600">{row.mustNot}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
