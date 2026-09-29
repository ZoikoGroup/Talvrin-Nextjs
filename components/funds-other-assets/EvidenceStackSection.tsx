import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const layers = [
  {
    title: "Primary / Governing Evidence",
    body: "Named source or governing document, such as a prospectus, trust deed, or fund report, when applicable.",
    note: "Source, title, period, jurisdiction, version, and rights shown.",
  },
  {
    title: "Provider / Issuer Evidence",
    body: "Named official disclosure where a governed provider relationship applies.",
    note: "Provider/issuer relationship kept explicit.",
  },
  {
    title: "Underlying / Exposure Context",
    body: "Only source- or registry-grounded relationships between a vehicle and its exposure.",
    note: "No assumed holdings or look-through.",
  },
  {
    title: "Monitoring",
    body: "NEW, UPDATED, REVISED, SUPERSEDED, or UNCHANGED state on the evidence.",
    note: "No return, risk, or allocation recommendation.",
  },
  {
    title: "Method / Benchmark Context",
    body: "Methodology or benchmark reference, only when governed and rights-permitted.",
    note: "No hidden methodology.",
  },
  {
    title: "Interpretation",
    body: "The evidence relationship and the resulting research view.",
    note: "Fact, normalization, analysis, and AI layers stay separated.",
  },
];

export default function EvidenceStackSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="violet">Evidence Stack</SectionEyebrow>
          <SectionHeading inverted>
            Lead with what the asset is and what defines it — not with performance.
          </SectionHeading>
          <SectionLede inverted className="max-w-[780px] sm:text-base sm:leading-7">
            Every proof step keeps fact, normalization, analysis, and AI layers visibly distinct.
          </SectionLede>
        </Reveal>

        {/* On the widest screens the photo fills the fourth column beside both
            card rows, as designed. */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,484px)]">
          {layers.map((layer, index) => (
            <Reveal
              key={layer.title}
              delay={index * 0.05}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-base font-bold text-white">{layer.title}</h3>
              <p className="mt-2.5 text-sm leading-5 text-white/70">{layer.body}</p>
              <p className="mt-auto border-t border-white/10 pt-3 text-xs leading-4 text-accent-amber">
                {layer.note}
              </p>
            </Reveal>
          ))}

          <Reveal
            delay={0.25}
            className="relative aspect-[484/531] w-full overflow-hidden rounded-2xl xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
          >
            <Image
              src="/images/markets/funds-other-assets/funds-evidence-stack-laptop-group.webp"
              alt="Four colleagues gathered around a laptop"
              fill
              sizes="(min-width: 1280px) 484px, (min-width: 1024px) 298px, (min-width: 640px) 294px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
