import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "./shared";

const stages = [
  {
    label: "Question",
    body: "\"What has materially changed in the outlook for U.S. Treasury yields?\" — not a forecast or trade recommendation.",
  },
  {
    label: "Evidence",
    body: "Inspect Federal Reserve, U.S. Treasury, and official economic evidence where approved — source authority, timing, jurisdiction, and relationship shown.",
  },
  {
    label: "View",
    body: "Build a reasoned view around the evidence, preserving the relationship and assumptions. No buy/sell/hold label.",
  },
  {
    label: "Change",
    body: "New or updated evidence appears later — Talvrin surfaces what changed and routes back to source, with no automatic claim about price direction.",
  },
  {
    label: "Reassess",
    body: "You review the changed evidence and reassess. Talvrin supports your judgment; it doesn’t decide for you.",
  },
];

export default function JourneySection() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Illustrative Research Journey"
            tone="amber"
            inverted
            title="Question → evidence → view → change → reassess."
          />
        </Reveal>

        <dl className="mt-12">
          {stages.map((stage, index) => (
            <Reveal key={stage.label} delay={index * 0.05}>
              <div className="flex flex-col gap-1.5 border-b border-white/10 py-4 sm:flex-row sm:gap-0">
                <dt className="shrink-0 pt-0.5 text-xs font-bold uppercase tracking-wide text-accent-amber sm:w-[110px]">
                  {stage.label}
                </dt>
                <dd className="text-[15px] leading-6 text-white/75">{stage.body}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
