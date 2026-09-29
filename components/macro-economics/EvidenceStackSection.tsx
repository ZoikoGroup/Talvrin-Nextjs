import { Fragment } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const families = [
  {
    title: "Official Economic Release",
    body: "Inflation or other economic release from an authoritative/statistical source where supported.",
    fields:
      "Source identity, publication time, reference period, jurisdiction, revision/version, rights.",
  },
  {
    title: "Central-Bank Communication",
    body: "Policy communication, statement, or other official communication where supported.",
    fields: "Institution, jurisdiction, publication time, version, evidence relationship.",
  },
  {
    title: "Market Context",
    body: "Governed market evidence used to contextualize research.",
    fields: "Data state + source + timestamp + rights; no live implication without support.",
  },
  {
    title: "Research / Commentary",
    body: "Approved contextual research where useful.",
    fields: "Never visually merged with primary/official evidence.",
  },
];

export default function EvidenceStackSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="violet">Macro Evidence Stack</SectionEyebrow>
          <SectionHeading>The evidence families behind a macro or policy view.</SectionHeading>
        </Reveal>

        {/* The photo sits third, between the second and third family, as designed —
            it keeps that position in the flow at every breakpoint. */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {families.map((family, index) => (
            <Fragment key={family.title}>
              <Reveal
                delay={index * 0.05}
                className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6"
              >
                <h3 className="text-base font-bold text-ink">{family.title}</h3>
                <p className="mt-2.5 text-sm leading-5 text-slate-600">{family.body}</p>
                <p className="mt-auto border-t border-ink/10 pt-3 text-xs leading-4 text-accent-amber">
                  {family.fields}
                </p>
              </Reveal>

              {index === 1 && (
                <Reveal
                  delay={0.15}
                  className="relative aspect-[235/276] w-full overflow-hidden rounded-2xl border border-ink/10"
                >
                  <Image
                    src="/images/markets/macro-economics/macro-evidence-stack-desk.webp"
                    alt="Colleagues looking at a screen together at a shared desk"
                    fill
                    sizes="(min-width: 1280px) 237px, (min-width: 1024px) 298px, (min-width: 640px) 294px, 100vw"
                    className="object-cover"
                  />
                </Reveal>
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
