import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { ColumnLabel, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const pillars = [
  {
    name: "Source-linked intelligence",
    sees: "Issuer filings, exchange records, official statistics and cited source anchors.",
    gate: "Show only covered jurisdictions/assets and verifiable originator references.",
  },
  {
    name: "Deterministic analysis",
    sees: "Clearly labelled reported versus calculated metrics, formulas and versions.",
    gate: "Published methodological approval; test coverage, units and conventions.",
  },
  {
    name: "Monitoring & revisions",
    sees: "Specific source updates, corrections and watchlist-linked changes if shipped.",
    gate: "Event detection reliability, timestamp rules, retention and alert permissions.",
  },
  {
    name: "Research collaboration",
    sees: "Saved briefs, sharing, roles and review states only if supported.",
    gate: "Tenancy and RBAC/ABAC tested; sharing and audit semantics confirmed.",
  },
  {
    name: "Rights-aware dissemination",
    sees: "Visibility of export/display permission and source-usage restrictions.",
    gate: "Legal/commercial rights matrix controls the actual operation server-side.",
  },
  {
    name: "Institutional delivery",
    sees: "Institutional access, approved SSO, API and integration options if delivered.",
    gate: "Security, contract, billing, access and support gates all passed.",
  },
];

const states = [
  {
    label: "Released",
    body: "Present-tense claim permitted; requires release ID, owner, coverage declaration and evidence link.",
    card: "bg-indigo-200/80",
    title: "text-ink",
  },
  {
    label: "Limited / approved pilot",
    body: "Published only with commercial/legal permission; eligibility and restrictions identified clearly.",
    card: "bg-accent-amber/15",
    title: "text-ink",
  },
  {
    label: "Planned / target",
    body: "Never represented as a product capability; omitted unless roadmap disclosure is explicitly approved.",
    card: "bg-slate-100",
    title: "text-ink",
  },
  {
    label: "Restricted / unlicensed",
    body: "Restricted output and marketing promise suppressed regardless of visual design.",
    card: "bg-pink-100/70",
    title: "text-pink-800",
  },
  {
    label: "Withdrawn",
    body: "Public claim and linked CTAs removed immediately; internal revision/audit trail retained.",
    card: "bg-slate-100",
    title: "text-slate-600",
  },
];

export default function CapabilityModelSection() {
  return (
    <section id="capability-model" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow>Capability model</SectionEyebrow>
          <SectionHeading>
            Six user-facing pillars, each gated by a controlled capability registry.
          </SectionHeading>
          <SectionLede>
            Release truth is fetched from a controlled registry rather than assumed from static
            marketing copy.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <div className="hidden gap-4 pb-3 lg:grid lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)]">
            <span />
            <ColumnLabel>What the user sees</ColumnLabel>
            <ColumnLabel>Validation / display gate</ColumnLabel>
          </div>

          {pillars.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.04}
              className="grid grid-cols-1 gap-3 border-b border-ink/10 py-5 lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-4"
            >
              <div>
                <span className="inline-block rounded-md border border-ink/20 bg-surface px-3.5 py-1.5 text-center text-xs font-bold text-ink lg:block">
                  {p.name}
                </span>
              </div>
              <div>
                <p className="mb-1 lg:hidden">
                  <ColumnLabel>What the user sees</ColumnLabel>
                </p>
                <p className="text-base leading-6 text-slate-700">{p.sees}</p>
              </div>
              <div>
                <p className="mb-1 lg:hidden">
                  <ColumnLabel>Validation / display gate</ColumnLabel>
                </p>
                <p className="text-sm leading-[22px] text-slate-600">{p.gate}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <p className="text-xs font-bold uppercase tracking-wide text-ink">
            Capability-state vocabulary — CMS governed
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
            {states.map((s) => (
              <li key={s.label} className={clsx("rounded-xl p-[18px]", s.card)}>
                <p className={clsx("text-xs font-bold uppercase tracking-wide", s.title)}>
                  {s.label}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-600">{s.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-2.5 lg:grid-cols-2">
          <Reveal delay={0.1} className="rounded-2xl bg-ink px-6 py-7">
            <p className="text-xs font-bold uppercase tracking-wide text-indigo-300">
              Policy: no implied certification
            </p>
            <p className="mt-2 text-sm leading-[22px] text-white/70">
              No customer endorsements, regulatory approvals, ISO certification, SOC reports, bank
              partnerships, audited SLAs or geographic deployment assurances without independently
              documented authorization.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="rounded-2xl border border-ink/10 bg-surface px-6 py-7">
            <p className="text-xs font-bold uppercase tracking-wide text-accent-amber">
              Coverage note
            </p>
            <p className="mt-2 text-sm leading-[22px] text-slate-600">
              Market, jurisdiction, instrument, refresh frequency and historical depth depend on
              approved coverage and source rights.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
