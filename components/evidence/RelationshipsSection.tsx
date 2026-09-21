import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const relationships = [
  {
    title: "Supports",
    description: "The evidence is relevant in favor of a claim, assumption or interpretation.",
    boundary: "Does not equal proof, recommendation or certainty.",
  },
  {
    title: "Contradicts",
    description: "The evidence conflicts with or weakens part of a claim, assumption or interpretation.",
    boundary: "Preserves both the contradiction and original context.",
  },
  {
    title: "Updates",
    description: "The evidence adds newer information that changes or extends the evidence base.",
    boundary: "Never automatically labeled material.",
  },
  {
    title: "Contextualizes",
    description: "The evidence helps explain scope, timing, jurisdiction, comparison or background.",
    boundary: "Never presented as a directional signal.",
  },
];

export default function RelationshipsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Evidence Relationships</SectionEyebrow>
          <SectionHeading>Evidence can support a view without becoming the view.</SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-7">
            Relationships stay neutral. None of them equal proof, recommendation or certainty.
          </SectionLede>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {relationships.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className="flex flex-col rounded-2xl border border-ink/10 bg-surface p-6"
            >
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-base leading-6 text-slate-600">{item.description}</p>
              <p className="mt-4 border-t border-ink/10 pt-4 text-xs leading-5 text-accent-amber">
                {item.boundary}
              </p>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 sm:col-span-2 sm:aspect-auto sm:h-64 lg:col-span-4 xl:col-span-1 xl:h-auto xl:min-h-[246px]"
          >
            <Image
              src="/images/product/evidence/evidence-relationships-files.webp"
              alt="Three colleagues reviewing files from a cabinet in an office"
              fill
              sizes="(min-width: 1280px) 246px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
