import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import ClaimTable, { type ClaimRow } from "./ClaimTable";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows: ClaimRow[] = [
  {
    label: "Asset Category",
    explains: "Exact registry label plus public coverage state.",
    assumes: "Invented taxonomy.",
  },
  {
    label: "Vehicle / Instrument",
    explains: "Stable governed identity.",
    assumes: "Name/ticker ambiguity.",
  },
  {
    label: "Issuer / Provider / Sponsor",
    explains: "Explicit source-governed relationship, where applicable.",
    assumes: "Brand vs. legal-issuer confusion.",
  },
  {
    label: "Listing / Venue",
    explains: "Shown only when applicable and supported.",
    assumes: "Assuming every asset is exchange-traded.",
  },
  {
    label: "Share Class / Line",
    explains: "Explicit class identity when applicable.",
    assumes: "Class conflation.",
  },
  {
    label: "Underlying / Exposure",
    explains: "Only a source- or registry-defined relationship.",
    assumes: "Invented look-through or holdings.",
  },
  {
    label: "Benchmark / Method",
    explains: "Only an approved relationship and methodology.",
    assumes: "Unlicensed benchmark or opaque calculation.",
  },
  {
    label: "Identifiers",
    explains: "Contextual public identifiers only where approved.",
    assumes: "Treating a ticker or ISIN as universal identity.",
  },
];

export default function IdentitySection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Asset / Vehicle Identity</SectionEyebrow>
          <SectionHeading>
            Category, vehicle, provider, listing, and class stay separate — never merged into one
            guess.
          </SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-7">
            Each layer below is a distinct governed concept. Talvrin renders only what a registry
            confirms for a given vehicle.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <ClaimTable rows={rows} showHeadings={false} />
        </div>
      </Container>
    </section>
  );
}
