import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const layers = [
  {
    title: "Question",
    body: "Research question plus market, issuer, security, or event context where governed.",
    note: "No forced recommendation prompt.",
  },
  {
    title: "Evidence set",
    body: "Source-linked cards with provenance metadata and relationships.",
    note: "No hidden source replacement.",
  },
  {
    title: "Interpretation layers",
    body: "Source fact, Talvrin normalization, Talvrin analysis, AI-assisted interpretation, and user-created notes.",
    note: "Kept distinct visually and semantically.",
  },
  {
    title: "Monitoring",
    body: "Relevant source and evidence changes tied back to the object.",
    note: "No automatic materiality or market-direction certainty.",
  },
  {
    title: "History / reviewability",
    body: "Source, version, and change trail preserved where supported.",
    note: "No invented formal audit, export, or approval feature.",
  },
  {
    title: "Research view",
    body: "Current synthesis with supporting and challenging evidence.",
    note: "Not a buy, sell, or hold rating.",
  },
];

export default function ResearchObjectSection() {
  return (
    <section id="professional-research" className="scroll-mt-24 bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Professional Research Object</SectionEyebrow>
          <SectionHeading>
            One durable object: question, evidence, view, and monitoring.
          </SectionHeading>
          <SectionLede className="max-w-[820px] sm:text-base sm:leading-7">
            Each layer stays distinct — no forced recommendation prompt, no hidden source
            replacement, no invented workflow tooling.
          </SectionLede>
        </Reveal>

        {/* On the widest screens the photo fills the fourth column beside both
            card rows, as designed. */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,499px)]">
          {layers.map((layer, index) => (
            <Reveal
              key={layer.title}
              delay={index * 0.04}
              className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6"
            >
              <h3 className="text-base font-bold text-ink">{layer.title}</h3>
              <p className="mt-2.5 text-sm leading-5 text-slate-600">{layer.body}</p>
              <p className="mt-auto border-t border-ink/10 pt-3 text-xs leading-4 text-accent-amber">
                {layer.note}
              </p>
            </Reveal>
          ))}

          <Reveal
            delay={0.25}
            className="relative aspect-[499/495] w-full overflow-hidden rounded-2xl border border-ink/10 xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
          >
            <Image
              src="/images/solutions/investment-professionals/ip-research-object-team.webp"
              alt="Three colleagues standing together outside an office building"
              fill
              sizes="(min-width: 1280px) 499px, (min-width: 1024px) 298px, (min-width: 640px) 294px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
