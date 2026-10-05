import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMAGE_DIR, SectionIntro } from "./shared";

const problems = [
  {
    title: "Fragmented sources",
    body: "Research is scattered across tabs, documents, feeds, and memory.",
    response: "Bring evidence, organization, context, and monitoring into one research workflow.",
  },
  {
    title: "Conflicting commentary",
    body: "Narratives may disagree without showing underlying evidence.",
    response:
      "Keep source evidence inspectable and distinguish it from commentary and interpretation.",
  },
  {
    title: "Rapidly changing narratives",
    body: "A reasonable view can weaken when new filings, policy changes, or economic evidence appear.",
    response: "Monitor the evidence base and surface meaningful changes for reassessment.",
  },
  {
    title: "Convincing AI-generated content",
    body: "Fluent output can create false confidence.",
    response: "Keep AI-assisted content visibly separate from authoritative sources.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Why Individual Research Is Hard Now"
            title="Financial information is abundant. Defensible understanding is not."
          >
            Individual investors can access enormous volumes of filings, releases, policy decisions,
            market data, commentary, and AI-generated summaries. The difficulty is deciding what
            matters, where it came from, whether it&apos;s current, and whether yesterday&apos;s
            conclusion still holds.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <Reveal key={problem.title} delay={index * 0.05} className="h-full">
                <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-ink/10 bg-white px-7 pb-8 pt-7">
                  <p className="text-sm font-bold tracking-wide text-accent-violet/40">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="pt-1 text-base font-bold text-ink">{problem.title}</h3>
                  <p className="flex-1 text-sm leading-6 text-muted">{problem.body}</p>
                  <p className="mt-2.5 flex gap-2 border-t border-ink/10 pt-5 text-xs font-medium leading-5 text-ink">
                    <span aria-hidden="true" className="shrink-0 text-accent-amber">
                      →
                    </span>
                    {problem.response}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative min-h-[320px] overflow-hidden rounded-2xl border border-ink/10 bg-white"
          >
            <Image
              src={`${IMAGE_DIR}/individual-investors-problem-whiteboard.webp`}
              alt="An adviser walking two people through charts on a monitor beside a whiteboard of questions"
              fill
              sizes="(min-width: 1024px) 630px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
