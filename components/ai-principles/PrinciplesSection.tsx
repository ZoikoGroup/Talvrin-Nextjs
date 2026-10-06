import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR } from "./shared";

const principles = [
  {
    title: "Evidence before assertion",
    body: "A claim is only as good as the evidence behind it — evidence comes first, interpretation second.",
    rule: "Every material AI statement links to supporting evidence where it exists.",
  },
  {
    title: "Source before summary",
    body: "A summary can save time, but it can never substitute for reading the thing it summarizes.",
    rule: "Source identity, timing and version render before the AI-assisted summary.",
  },
  {
    title: "Context before confidence",
    body: "Timing, jurisdiction, and version can change what evidence means — confidence without context is false precision.",
    rule: "No numeric confidence score ships without an approved, validated methodology.",
  },
  {
    title: "AI assistance, not AI authority",
    body: "Generated output does not become authoritative simply because it is fluent or persuasive.",
    rule: "Every AI-assisted output carries a persistent, non-color-only text label.",
  },
];

export default function PrinciplesSection() {
  return (
    <section id="principles" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Doctrine, Not Slogans"
            title="Five principles, each with an implementation implication."
          >
            Each principle converts into a concrete UI and implementation rule — not a responsible-AI
            slogan.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-surface p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-accent-amber">
                  Principle {index + 1}
                </p>
                <h3 className="text-lg font-bold leading-6 text-ink">{principle.title}</h3>
                <p className="flex-1 text-sm leading-5 text-ink-soft">{principle.body}</p>
                <p className="border-t border-ink/10 pt-2.5 text-xs leading-5 text-muted">
                  {principle.rule}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.25}
            className="relative aspect-video overflow-hidden rounded-2xl border border-ink/10 sm:col-span-2 xl:col-span-1 xl:aspect-auto xl:min-h-[320px]"
          >
            <Image
              src={`${IMAGE_DIR}/ai-principles-principles-team.webp`}
              alt="Three colleagues talking around a laptop at a small table"
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
