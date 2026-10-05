import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMAGE_DIR, SectionIntro } from "./shared";

const layers = [
  {
    title: "Authoritative source evidence",
    body: "The original, official, primary, or governed underlying material.",
    treatment: "Highest source identity clarity; remains inspectable.",
  },
  {
    title: "Talvrin normalization",
    body: "Structured representation derived from governed evidence.",
    treatment: "Labeled as Talvrin-derived; never masquerades as original source.",
  },
  {
    title: "Talvrin analysis",
    body: "Human-authored interpretation where applicable.",
    treatment: "Attributed where appropriate; linked to supporting evidence.",
  },
  {
    title: "AI-assisted interpretation",
    body: "Generated summary, comparison, organization, or explanation.",
    treatment: "Persistent AI/provenance treatment; not color-only.",
  },
];

export default function SourceLayersSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Source, Commentary, AI & Your Notes"
            title="Fluent text should never be mistaken for a source."
          >
            Authoritative evidence, Talvrin&apos;s own structuring, AI assistance, and your personal
            notes stay visually and semantically distinct at every layer.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {layers.map((layer, index) => (
            <Reveal key={layer.title} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-surface p-6">
                <h3 className="text-base font-bold text-ink">{layer.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-[22px] text-muted">{layer.body}</p>
                <p className="mt-3.5 border-t border-ink/10 pt-3 text-xs leading-[18px] text-accent-amber">
                  {layer.treatment}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative hidden min-h-[236px] overflow-hidden rounded-2xl border border-ink/10 lg:block"
          >
            <Image
              src={`${IMAGE_DIR}/individual-investors-source-layers-team.webp`}
              alt="Colleagues working on laptops together in a bright office"
              fill
              sizes="(min-width: 1024px) 235px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
