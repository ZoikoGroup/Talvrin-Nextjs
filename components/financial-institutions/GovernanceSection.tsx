import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { ColumnLabel, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const proofs = [
  {
    area: "Source origin and validation",
    proof: "Source Methodology; approved taxonomy and fact-status vocabulary; public, non-sensitive explanation.",
  },
  {
    area: "Calculation lineage",
    proof: "Documented metric basis, deterministic calculation registry and validation/reconciliation criteria.",
  },
  {
    area: "Temporal correctness",
    proof: "Publication / effective / observation dates; corrections and as-known-at reproducibility where supported.",
  },
  {
    area: "Coverage disclosures",
    proof: "Source scope, market/instrument/jurisdiction and gaps — no universal completeness claim.",
  },
  {
    area: "Data licensing",
    proof: "Public plain-language restrictions; contract-specific source entitlement and redistribution terms handled privately.",
  },
  {
    area: "Tenant protection",
    proof: "Controlled isolation, authentication, authorization, monitoring and security evidence only after audit and approval.",
  },
  {
    area: "AI controls",
    proof: "AI explains admissible evidence; unsupported claims withheld; model output is not a source of fact.",
  },
  {
    area: "Oversight and review",
    proof: "Owners, correction path, incident/escalation channel and change governance — no implied certified control.",
  },
];

export default function GovernanceSection() {
  return (
    <section id="governance" className="scroll-mt-24 bg-ink py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Governance &amp; trust</SectionEyebrow>
          <SectionHeading inverted>
            High-level proof, without exposing restricted architecture.
          </SectionHeading>
          <SectionLede inverted>
            Assertions stay evidence-backed. The page does not give legal or regulatory assurances
            it cannot support.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <div className="hidden pb-3 lg:block lg:pl-[236px]">
            <ColumnLabel inverted>Public proof artifact / gate</ColumnLabel>
          </div>
          <dl>
            {proofs.map((p, i) => (
              <Reveal
                key={p.area}
                delay={i * 0.03}
                className="grid grid-cols-1 gap-1 border-b border-white/10 py-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-4"
              >
                <dt className="text-sm font-bold text-white">{p.area}</dt>
                <dd className="text-sm leading-[22px] text-white/60">{p.proof}</dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal delay={0.1} className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-7 py-6">
          <p className="text-xs font-bold uppercase tracking-wide text-indigo-300">
            Correct separation of responsibilities
          </p>
          <p className="mt-2 text-base leading-6 text-white/75">
            Talvrin provides researched, source-linked information and, where authorized, workflow
            controls. An institution retains responsibility for its own regulated activities,
            investment decisions, suitability processes, internal model governance and
            independently validating any use in a controlled production setting.
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-5 rounded-2xl border border-dashed border-white/20 px-6 py-5"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-white/60">
            Controlled confidential follow-up — not a public download
          </p>
          <p className="mt-2 text-sm leading-[22px] text-white/55">
            Security overview, data flow diagram, questionnaire responses, lawful data processing
            terms, commercial rights schedule, support model, service descriptions and audit
            artifacts are supplied only when actually available and approved for disclosure. No
            self-serve &ldquo;SOC 2&rdquo;, &ldquo;EU-hosted&rdquo;, &ldquo;FCA compliant&rdquo;,
            &ldquo;bank-grade certified&rdquo; or &ldquo;99.99% SLA&rdquo; badges without signed
            evidence.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
