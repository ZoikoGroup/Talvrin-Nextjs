import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import ClaimTable, { type ClaimRow } from "./ClaimTable";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows: ClaimRow[] = [
  {
    label: "Category",
    explains: "Pending registry release — shown here as a category-neutral placeholder.",
    assumes: "No specific fund/ETF/asset type implied.",
  },
  {
    label: "Vehicle Identity",
    explains: "Illustrative example only — no real vehicle named.",
    assumes: "Governed identity, not an invented name or ticker.",
  },
  {
    label: "Governing Evidence",
    explains: "Governing document class shown by type, not by fabricated content.",
    assumes: "Source + period + jurisdiction + version + rights when real.",
  },
  {
    label: "Underlying / Exposure",
    explains: "Relationship shown only when source-defined; otherwise omitted.",
    assumes: "No assumed holdings or exposure.",
  },
  {
    label: "Monitoring Delta",
    explains: "NEW / UPDATED / REVISED / SUPERSEDED / UNCHANGED.",
    assumes: "No price, NAV, AUM, or return value implied.",
  },
];

export default function IllustrativeSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Illustrative — No Asset Data</SectionEyebrow>
          <SectionHeading>
            What a research view looks like once a category and vehicle are actually released.
          </SectionHeading>
          <SectionLede className="max-w-[820px] sm:text-base sm:leading-7">
            This walkthrough is category-neutral by design. No fund, ETF, ticker, price, NAV, or
            return is invented to make the example feel complete.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <ClaimTable
            rows={rows}
            showHeadings={false}
            badgeClassName="border-ink/10 bg-surface text-ink"
          />
        </div>
      </Container>
    </section>
  );
}
