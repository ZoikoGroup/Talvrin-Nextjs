import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const boundaries = [
  { yes: "Search and evidence discovery", no: "Authoritative evidence source" },
  { yes: "Document and source summarization", no: "Guaranteed fact" },
  { yes: "Research organization", no: "Investment recommendation engine" },
  {
    yes: "Relationship explanation and contradiction surfacing",
    no: "Buy/sell/hold rating, target price, or portfolio action",
  },
];

export default function AiBoundarySection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">AI Boundary</SectionEyebrow>
          <SectionHeading>AI accelerates research. It does not become the evidence.</SectionHeading>
        </Reveal>

        {/* The photo column would squeeze the cards to ~245px at 1024, so it
            only sits beside them from xl. */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,626px)]">
          {boundaries.map((boundary, index) => (
            <Reveal
              key={boundary.yes}
              delay={index * 0.05}
              className="flex flex-col gap-2.5 rounded-2xl border border-ink/10 bg-surface p-6"
            >
              <p className="flex items-start gap-2.5 text-sm font-bold leading-5 text-ink">
                <span className="font-normal text-accent-violet" aria-hidden="true">
                  ✓
                </span>
                {boundary.yes}
              </p>
              <p className="flex items-start gap-2.5 text-sm leading-5 text-slate-500">
                <span className="text-red-500" aria-hidden="true">
                  ✕
                </span>
                {boundary.no}
              </p>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative aspect-[626/300] w-full max-w-[626px] overflow-hidden rounded-2xl sm:col-span-2 xl:col-span-1 xl:col-start-3 xl:row-span-2 xl:row-start-1 xl:aspect-auto xl:max-w-none"
          >
            <Image
              src="/images/solutions/investment-professionals/ip-ai-boundary-tablet.webp"
              alt="Two colleagues with a tablet in a bright lounge"
              fill
              sizes="(min-width: 640px) 626px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <p className="mt-6 max-w-[880px] text-sm leading-6 text-slate-600">
            Generated or model-assisted content carries a persistent provenance label distinct from
            source evidence. If Talvrin cannot ground a professional answer in inspectable evidence,
            the UI states that limitation rather than producing generic finance commentary.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
