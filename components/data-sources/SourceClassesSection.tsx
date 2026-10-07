import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { Pill } from "../ai-principles/shared";
import { IMAGE_DIR } from "./shared";

const classes = [
  {
    label: "Primary",
    body: "Registry classification for direct/original source material where governance has approved that class.",
    note: "Not inferred from brand recognition alone.",
  },
  {
    label: "Official",
    body: "Registry classification for an official publication channel or record where governance has approved that label.",
    note: "Does not guarantee completeness, timeliness or applicability.",
  },
  {
    label: "Licensed",
    body: "Source or data input accessed under an approved licensing arrangement.",
    note: "Public naming and access details remain subject to rights/publication approval.",
  },
  {
    label: "Institutional",
    body: "Governed institutional source class where supported by the source registry.",
    note: "Shown only where the registry record exists.",
  },
];

export default function SourceClassesSection() {
  return (
    <section id="source-classes" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Classification, Not a Quality Score"
            tone="amber"
            title="Five registry-backed source classes."
          >
            Source class is descriptive provenance metadata. It does not imply that every
            &quot;official&quot;, &quot;licensed&quot; or &quot;institutional&quot; source is complete,
            current, equally relevant, or suitable for every research question.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {classes.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-6">
                <Pill tone="ink" className="bg-ink/5">{item.label}</Pill>
                <p className="flex-1 text-sm leading-5 text-ink-soft">{item.body}</p>
                <p className="border-t border-ink/10 pt-2.5 text-xs leading-5 text-muted">{item.note}</p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.25}
            className="relative aspect-video overflow-hidden rounded-2xl border border-ink/10 sm:col-span-2 xl:col-span-1 xl:aspect-auto xl:min-h-[253px]"
          >
            <Image
              src={`${IMAGE_DIR}/data-sources-source-classes-team.webp`}
              alt="Three colleagues in suits exchanging business cards"
              fill
              sizes="(min-width: 1280px) 240px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
