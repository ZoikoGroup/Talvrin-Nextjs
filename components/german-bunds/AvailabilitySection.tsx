import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const fields = [
  { label: "Release state", value: "Deep Coverage — registry-confirmed, not a default assumption." },
  {
    label: "Supported categories",
    value:
      "Deutsche Bundesbank and European Central Bank policy communication; Deutsche Finanzagentur Bund issuance & auction evidence; official German/euro-area economic-statistics context; explanatory/methodology material.",
  },
  {
    label: "Coverage window",
    value:
      "Current and recent publications. Historical backfill is limited and disclosed per record, not assumed complete.",
  },
  {
    label: "Primary sources",
    value:
      "Deutsche Bundesbank, European Central Bank, Deutsche Finanzagentur, and Destatis, where approved.",
  },
  {
    label: "Data timeliness",
    value: "Delayed / Snapshot per source. No live Bund yield, price or auction-result feed is enabled.",
  },
  { label: "Rights / access", value: "Open, subject to each source’s licensing and permitted-use terms." },
  { label: "Last verified", value: "02 Sep 2026 — tied to an actual Coverage Registry verification event." },
];

export default function AvailabilitySection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Availability / Coverage Snapshot</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[740px]">
            What German Bunds evidence is available in Talvrin?
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[760px] text-base leading-7 text-gray-600">
            This record comes from the governed Coverage Registry — never a
            hard-coded &quot;Available&quot; default. Every field below can
            change independently as the registry updates.
          </p>
        </Reveal>

        <dl className="mt-8 sm:mt-10">
          {fields.map((field, index) => (
            <Reveal
              key={field.label}
              delay={0.04 * (index + 1)}
              className="grid grid-cols-1 gap-x-4 gap-y-2 border-b border-ink/10 py-5 md:grid-cols-[200px_minmax(0,1fr)] md:items-start"
            >
              <dt className="inline-flex w-fit items-center justify-center rounded-md border border-ink/20 bg-surface px-4 py-1.5 text-center text-xs font-bold text-ink md:w-full">
                {field.label}
              </dt>
              <dd className="text-sm leading-6 text-slate-700 sm:text-base">{field.value}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={0.2} className="mt-8 rounded-2xl bg-surface px-6 py-6 sm:px-7">
          <p className="text-xs font-bold tracking-wide text-ink">FAIL-CLOSED RULE</p>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            If the Coverage Registry cannot be verified, this panel shows an
            unknown/stale state rather than defaulting to &quot;Available.&quot;
            No field here is asserted from front-end convention.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
