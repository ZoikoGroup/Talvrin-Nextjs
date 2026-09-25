import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const leftQuestions = [
  {
    title: "Capability",
    body: "What can this integration actually read or do, and in which direction?",
    source: "Integration Registry / capability contract.",
  },
  {
    title: "Rights & permitted use",
    body: "What licensing or entitlement limits apply before data can move or be exported?",
    source: "Data-rights / licensing authority.",
  },
];

const rightQuestions = [
  {
    title: "Timing & data flow",
    body: "What direction, trigger, and timing semantics apply to this connection?",
    source: "API / data contract.",
  },
  {
    title: "Provenance & evidence",
    body: "Does the connection preserve source identity, timing, and jurisdiction context — or lose it?",
    source: "Provenance capability mapping.",
  },
];

function QuestionCard({
  question,
  delay,
}: {
  question: { title: string; body: string; source: string };
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="flex flex-col gap-2.5 rounded-2xl bg-[#1b1745] p-6">
      <h3 className="text-base font-bold text-white">{question.title}</h3>
      <p className="text-base leading-6 text-white/75">{question.body}</p>
      <p className="mt-auto border-t border-white/10 pt-3 text-xs leading-5 text-white/60">
        {question.source}
      </p>
    </Reveal>
  );
}

export default function EvaluationSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="violet">How to Evaluate an Integration</SectionEyebrow>
          <SectionHeading inverted>
            Six questions, six separate sources — never one Connect button.
          </SectionHeading>
          <SectionLede inverted className="max-w-[780px] sm:text-base sm:leading-6">
            Capability, permission scope, provenance handling, timing, rights, and
            lifecycle/operations are different facts with different owners. This page will never
            collapse them into a single &ldquo;Connect&rdquo; promise.
          </SectionLede>
        </Reveal>

        {/* Question columns flank the photo on wide screens; the photo drops below otherwise. */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-[minmax(0,288px)_minmax(0,1fr)_minmax(0,288px)]">
          <div className="flex flex-col gap-5">
            {leftQuestions.map((question, index) => (
              <QuestionCard key={question.title} question={question} delay={index * 0.05} />
            ))}
          </div>

          <Reveal
            delay={0.15}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[#1b1745] sm:order-last sm:col-span-2 sm:aspect-[16/7] xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:aspect-auto"
          >
            <Image
              src="/images/developers/integrations/integrations-evaluation-briefing.webp"
              alt="Colleagues watching a governance framework presentation on screen"
              fill
              sizes="(min-width: 1280px) 629px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="flex flex-col gap-5 xl:col-start-3 xl:row-start-1">
            {rightQuestions.map((question, index) => (
              <QuestionCard key={question.title} question={question} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
