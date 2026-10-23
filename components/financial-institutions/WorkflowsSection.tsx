import { Fragment } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { ColumnLabel, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const journeys = [
  {
    role: "Sell-side / research analyst",
    moments:
      "Find instrument or issuer → inspect latest filing/statistics → compare periods → resolve discrepancies → prepare cited brief.",
    outcome:
      "Source-linked facts, as-of date, revisions, metric methodology and explainable exclusions.",
  },
  {
    role: "Bank treasury / markets research",
    moments:
      "Examine sovereign instruments or macro releases → compare rates/time series → inspect calculation conventions.",
    outcome: "Clear pricing/yield bases, licensed source status, market timestamps and limitations.",
  },
  {
    role: "Institutional risk researcher",
    moments:
      "Trace exposure-related market developments → identify published issuer/event changes → flag unverified assertions.",
    outcome:
      "Material update timeline, evidence status, scope limits — not regulatory compliance signoff.",
  },
  {
    role: "Credit research team",
    moments:
      "Review public financials, debt disclosures, actions and historical periods as licensed and available.",
    outcome: "Tri-temporal information lineage where delivered; no synthetic missing values.",
  },
  {
    role: "Research operations / platform",
    moments:
      "Assess roles, entitlement rights, workflows and traceable access before deployment.",
    outcome: "Capability and security assessment pack, subject to current release scope.",
  },
];

const loop = [
  { step: "Search", body: "Public market entity or instrument." },
  { step: "Discover", body: "Admissible records and source scope — not “everything”." },
  { step: "Inspect", body: "Original source, locator, and published / effective / as-of times." },
  { step: "Review", body: "Reported facts; apply governed deterministic calculations." },
  { step: "Check", body: "Corrections, conflicts, missing evidence and rights restrictions." },
  { step: "Create", body: "A referenceable research finding, shared only if entitled." },
];

export default function WorkflowsSection() {
  return (
    <section id="workflows" className="scroll-mt-24 bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Institutional workflows</SectionEyebrow>
          <SectionHeading className="max-w-[780px]">
            Role-specific journeys that end in human review, not an automated call.
          </SectionHeading>
          <SectionLede>
            Research journeys end with understanding and source review — never an automated
            investment recommendation.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <div className="hidden gap-4 pb-3 lg:grid lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)]">
            <span />
            <ColumnLabel>Workflow moments</ColumnLabel>
            <ColumnLabel>Outcome / evidence</ColumnLabel>
          </div>

          {journeys.map((j, i) => (
            <Reveal
              key={j.role}
              delay={i * 0.04}
              className="grid grid-cols-1 gap-3 border-b border-ink/10 py-5 lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-4"
            >
              <div>
                <span className="inline-block rounded-md border border-ink/20 bg-white px-3.5 py-1.5 text-center text-xs font-bold text-ink lg:block">
                  {j.role}
                </span>
              </div>
              <div>
                <p className="mb-1 lg:hidden">
                  <ColumnLabel>Workflow moments</ColumnLabel>
                </p>
                <p className="text-base leading-6 text-slate-700">{j.moments}</p>
              </div>
              <div>
                <p className="mb-1 lg:hidden">
                  <ColumnLabel>Outcome / evidence</ColumnLabel>
                </p>
                <p className="text-sm leading-[22px] text-slate-600">{j.outcome}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <p className="text-xs font-bold uppercase tracking-wide text-ink">
            Primary journey — source to decision loop
          </p>
          <ol className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {loop.map((l, i) => (
              <Fragment key={l.step}>
                <li className="flex flex-1 flex-col gap-1 rounded-[10px] border border-ink/10 bg-white px-4 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-accent-amber">
                    {l.step}
                  </span>
                  <span className="text-xs leading-5 text-slate-600">{l.body}</span>
                </li>
                <li
                  aria-hidden="true"
                  className="flex items-center justify-center text-ink/30"
                >
                  <span className="rotate-90 lg:rotate-0">{i < loop.length - 1 ? "→" : "↺"}</span>
                </li>
              </Fragment>
            ))}
          </ol>
          <p className="mt-4 text-xs leading-5 text-slate-600">
            All example journeys are capability targets — a user may see fewer steps until each
            underlying feature is approved and released.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
