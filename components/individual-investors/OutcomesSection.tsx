import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMAGE_DIR, SectionIntro } from "./shared";

const outcomes = [
  {
    title: "Less fragmented research",
    body: "Spend less time moving between disconnected sources and more time understanding the evidence.",
    caveat: "No time-saved percentages without evidence.",
  },
  {
    title: "Clearer authority",
    body: "Distinguish source evidence from commentary and generated interpretation.",
    caveat: "Visible provenance treatment in product proof.",
  },
  {
    title: "Research continuity",
    body: "Return to the reasoning behind a view instead of rebuilding it from memory.",
    caveat: "No invented storage or retention guarantees.",
  },
  {
    title: "Meaningful change awareness",
    body: "Focus on new evidence that may require reassessment instead of constant manual checking.",
    caveat: "No promise every relevant event will be detected.",
  },
];

export default function OutcomesSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="What This Changes for You"
            tone="amber"
            title="Five source-backed benefits for your personal research."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {outcomes.map((outcome, index) => (
            <Reveal key={outcome.title} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
                <h3 className="text-base font-bold text-ink">{outcome.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-[22px] text-muted">{outcome.body}</p>
                <p className="mt-3.5 border-t border-ink/10 pt-3 text-xs leading-[18px] text-accent-amber">
                  {outcome.caveat}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative hidden min-h-[256px] overflow-hidden rounded-2xl border border-ink/10 lg:block"
          >
            <Image
              src={`${IMAGE_DIR}/individual-investors-outcomes-presentation.webp`}
              alt="A presenter walking colleagues through a project timeline on a wall display"
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
