import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR } from "./shared";

const relationships = [
  {
    title: "Supports",
    body: "The source provides evidence consistent with the research proposition or fact being examined.",
    rule: "Say \"supports\" rather than \"proves\" unless the proposition truly warrants stronger language.",
  },
  {
    title: "Contradicts",
    body: "The source conflicts with or weakens the proposition or assumption.",
    rule: "Keep visible and equally navigable — never suppressed because it is inconvenient.",
  },
  {
    title: "Updates",
    body: "The source changes or supersedes relevant evidence or context.",
    rule: "Connect to the change/version timeline where supported.",
  },
];

export default function RelationshipsSection() {
  return (
    <section id="relationships" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Evidence Relationships"
            tone="amber"
            title="Evidence can support a view without becoming the view."
          >
            Relationships stay neutral. None of them equal proof, recommendation or certainty.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-4">
          {relationships.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-2 rounded-2xl border border-ink/10 bg-white p-6 sm:p-7">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="text-[15px] leading-6 text-muted">{item.body}</p>
                <p className="mt-2 border-t border-ink/10 pt-3 text-[13px] leading-5 text-accent-amber">
                  {item.rule}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative aspect-video overflow-hidden rounded-2xl border border-ink/10 md:col-span-3 xl:col-span-1 xl:aspect-auto xl:min-h-[240px]"
          >
            <Image
              src={`${IMAGE_DIR}/evidence-standards-relationships-meeting.webp`}
              alt="A professional speaking with colleagues across a bright meeting table"
              fill
              sizes="(min-width: 1280px) 320px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
