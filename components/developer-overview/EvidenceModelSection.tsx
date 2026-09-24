import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const principles = [
  {
    title: "Source remains inspectable",
    quote: "A convenient explanation should not erase the technical or evidentiary source behind it.",
    note: "Provenance links are preserved through developer surfaces and examples, where the released contract exposes them.",
  },
  {
    title: "Context travels with meaning",
    quote: "Version, timing, jurisdiction, and coverage can change what a value means.",
    note: "Context fields are never stripped in previews or hard-coded away from the data.",
  },
  {
    title: "Changes are reviewable",
    quote:
      "Developers should be able to see what changed and determine whether implementation needs reassessment.",
    note: "Changes route to an approved changelog or version notice — never communicated silently.",
  },
  {
    title: "Interpretation stays labeled",
    quote: "Generated or derived interpretation is not the same as underlying evidence.",
    note: "Explicit semantic labels distinguish evidence, derived, and generated content.",
  },
];

export default function EvidenceModelSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Evidence-Aware Developer Model</SectionEyebrow>
          <SectionHeading>
            Evidence and provenance are part of integration quality, not decorative metadata.
          </SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-7">
            Talvrin&apos;s evidence-first doctrine carries directly into how developer surfaces
            should behave once released.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,617px)] xl:gap-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                delay={index * 0.05}
                className="flex flex-col rounded-2xl bg-surface p-6"
              >
                <h3 className="text-base font-bold text-ink">{principle.title}</h3>
                <p className="mt-2.5 text-base leading-6 text-slate-700">
                  &ldquo;{principle.quote}&rdquo;
                </p>
                <p className="mt-4 border-t border-ink/10 pt-4 text-xs leading-5 text-slate-600">
                  {principle.note}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl bg-surface sm:aspect-[5/2] xl:aspect-[617/544]"
          >
            <Image
              src="/images/developers/developer-overview/developer-overview-evidence-model-desk.webp"
              alt="Developers reviewing work together at desks in an office"
              fill
              sizes="(min-width: 1280px) 617px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
