import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const panels = [
  {
    title: "Header",
    shows: "Source name, title, class and current access state.",
    ifUnavailable: "Restricted content is never labeled as open.",
  },
  {
    title: "Primary source surface",
    shows: "Rendered source, approved excerpt, metadata-only view, or external route per rights.",
    ifUnavailable: "Metadata and state stay visible.",
  },
  {
    title: "Timing panel",
    shows: "Publication time plus effective/reference period.",
    ifUnavailable: "Unknowns remain unknown — no inferred dates.",
  },
  {
    title: "Context panel",
    shows: "Jurisdiction, version/supersession and relationship to the research object.",
    ifUnavailable: "Inapplicable fields are hidden rather than padded with guesses.",
  },
  {
    title: "Derived analysis panel",
    shows: "Talvrin-derived context linked to evidence.",
    ifUnavailable: "Clearly labeled as downstream from source.",
  },
  {
    title: "AI panel",
    shows: "Optional AI-assisted summary or comparison.",
    ifUnavailable: "Explicit AI label; sources remain inspectable.",
  },
];

export default function ProvenanceInspectorSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Provenance Inspector</SectionEyebrow>
          <SectionHeading>The source should never disappear behind the answer.</SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-7">
            Where rights permit, users move from interpretation to the underlying source or a
            governed viewer. Where rights do not permit access, Talvrin preserves only the metadata
            and actions allowed by policy — never a reconstruction of the source.
          </SectionLede>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {panels.map((panel, index) => (
            <Reveal
              key={panel.title}
              delay={index * 0.05}
              className="rounded-xl border border-ink/10 bg-surface p-5"
            >
              <h3 className="text-base font-bold text-ink">{panel.title}</h3>
              <p className="mt-3 text-xs font-bold uppercase tracking-wide text-accent-violet">
                Shows
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-700">{panel.shows}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                If Unavailable
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-600">{panel.ifUnavailable}</p>
            </Reveal>
          ))}

          <Reveal
            delay={0.3}
            className="relative min-h-[220px] overflow-hidden rounded-xl border border-ink/10 sm:col-span-2"
          >
            <Image
              src="/images/product/evidence/evidence-provenance-analyst.webp"
              alt="Analyst reading source material at a desk by a window"
              fill
              sizes="(min-width: 1024px) 645px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
