import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import ClaimTable, { type ClaimRow } from "./ClaimTable";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows: ClaimRow[] = [
  {
    label: "Economic Releases",
    explains: "Official release evidence, publication time, reference period, revisions, context.",
    assumes: "A complete economic database or every series/country.",
  },
  {
    label: "Central Banks",
    explains: "Official communication and policy evidence where supported.",
    assumes: "Rate forecasts, meeting probabilities, or universal central-bank coverage.",
  },
  {
    label: "Policy / Regulation",
    explains: "Policy decisions/notices relevant to market research.",
    assumes: "Legal advice, political advocacy, or exhaustive policy coverage.",
  },
  {
    label: "Cross-Market Context",
    explains:
      "How macro evidence can contextualize rates, currencies, sovereigns, equities, and market structure.",
    assumes: "Deterministic causality or forecast certainty.",
  },
  {
    label: "Calendar Relationship",
    explains: "Economic Calendar may exist as a separate Research destination.",
    assumes:
      "Real-time calendar feed, alerts, consensus, or surprise metrics unless capability registry confirms.",
  },
];

export default function ScopeSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Scope &amp; Definition</SectionEyebrow>
          <SectionHeading>What Macro &amp; Economics means in Talvrin.</SectionHeading>
          <SectionLede className="max-w-[820px] sm:text-base sm:leading-7">
            Talvrin Macro &amp; Economics is an evidence-led research destination for economic
            releases, policy decisions, central-bank communications, and related cross-market
            context. It keeps the source, reference period, jurisdiction, version, and relationship
            to the research question visible.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <ClaimTable rows={rows} />
        </div>
      </Container>
    </section>
  );
}
