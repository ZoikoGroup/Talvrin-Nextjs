import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import ClaimTable, { type ClaimRow } from "./ClaimTable";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows: ClaimRow[] = [
  {
    label: "Category & Taxonomy",
    explains:
      "The exact registry-approved label and public coverage state for a category, when released.",
    assumes: 'That "Funds" means ETFs/mutual funds, or that any specific category exists by default.',
  },
  {
    label: "Vehicle Identity",
    explains: "Stable governed identity for a released vehicle or instrument.",
    assumes: "Ticker or name as a universal identifier across venues.",
  },
  {
    label: "Structure & Relationships",
    explains:
      "Issuer/provider, listing, share class, and underlying relationships where source-defined.",
    assumes: "Inferred look-through, holdings, or benchmark relationships.",
  },
  {
    label: "Evidence & Monitoring",
    explains: "Source-linked governing documents and what changed in them.",
    assumes: "That a document change implies a price, return, or risk change.",
  },
  {
    label: "Coverage Truth",
    explains: "Current released-category state from the governed registries.",
    assumes: "A single fund/asset-class example implies broad category coverage.",
  },
];

export default function ScopeSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Scope &amp; Definition</SectionEyebrow>
          <SectionHeading>What Funds &amp; Other Assets means in Talvrin.</SectionHeading>
          <SectionLede className="max-w-[800px] sm:text-base sm:leading-7">
            Talvrin Funds &amp; Other Assets applies Talvrin&apos;s source-linked research and
            monitoring model to the fund and public-market asset categories that are actually
            released under its governed coverage architecture.
          </SectionLede>
          <p className="mt-4 max-w-[800px] text-base leading-6 text-slate-600">
            This destination does not assume that &quot;Funds&quot; means ETFs or mutual funds, or
            that &quot;Other Assets&quot; means any particular category. Category and capability come
            from registries, never from convention.
          </p>
        </Reveal>

        <div className="mt-10">
          <ClaimTable rows={rows} />
        </div>
      </Container>
    </section>
  );
}
