import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows = [
  {
    maySay: "State that Talvrin's architecture is designed for global public markets.",
    mustNot: "Universal API/data coverage claims not backed by a released registry.",
  },
  {
    maySay: "Explain that provenance and version context matter to integration quality.",
    mustNot: "Specific dataset fields, schemas, or endpoints that are not supplied.",
  },
  {
    maySay: "Note that licensing and entitlement may govern availability at a high level.",
    mustNot: "Specific redistribution rights, vendors, or contract terms.",
  },
  {
    maySay: "Distinguish research/intelligence from trade execution.",
    mustNot: "Any implication of manufactured investment recommendations.",
  },
];

export default function CoverageTruthSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="violet">Coverage, Provenance &amp; Data-Rights Truth</SectionEyebrow>
          <SectionHeading>Global architecture is broader than what is released.</SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-7">
            Talvrin&apos;s architecture is designed for global public markets, but that is not the
            same as universal developer or data-API coverage. Released coverage and licensing scope
            must always be stated separately and truthfully.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <div className="hidden gap-4 pb-3 sm:grid sm:grid-cols-2">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
              The overview may say
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
              The overview must not invent
            </p>
          </div>

          {rows.map((row, index) => (
            <Reveal
              key={row.maySay}
              delay={index * 0.04}
              className="grid grid-cols-1 gap-2 border-b border-ink/10 py-4 sm:grid-cols-2 sm:gap-4"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-600 sm:hidden">
                  May say
                </p>
                <p className="text-base text-ink">{row.maySay}</p>
              </div>
              <div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-slate-600 sm:hidden">
                  Must not invent
                </p>
                <p className="text-base text-slate-600">{row.mustNot}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
