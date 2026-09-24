import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const leftQuestions = [
  {
    title: "Interface lifecycle",
    body: "Is the interface released, limited, deprecated, or retired?",
    source: "Data API Registry / lifecycle governance.",
  },
  {
    title: "Provenance capability",
    body: "How can a consumer inspect source and context lineage?",
    source: "API contract + provenance capability mapping.",
  },
  {
    title: "Change history",
    body: "What released changes are relevant to this interface?",
    source: "Changelog / release-note authority.",
  },
];

const rightQuestions = [
  {
    title: "Rights & permitted use",
    body: "What high-level use constraints must an evaluator know?",
    source: "Data-rights / licensing authority.",
  },
  {
    title: "Operational status",
    body: "Is the mapped service or component currently affected?",
    source: "Developer Status authority.",
  },
  {
    title: "Version & deprecation",
    body: "Which contract version is current, and what migration state applies?",
    source: "API Contract Registry + deprecation policy.",
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
          <SectionEyebrow tone="violet">How to Evaluate a Data API</SectionEyebrow>
          <SectionHeading inverted>
            Nine questions, nine separate sources — never one badge.
          </SectionHeading>
          <SectionLede inverted className="max-w-[780px] sm:text-base sm:leading-6">
            Published interface, deep market coverage, entitled account access, and an operational
            service are different facts with different owners. This page will never collapse them
            into a single &ldquo;Available&rdquo; label.
          </SectionLede>
        </Reveal>

        {/* Two question columns flanking the photo on wide screens. */}
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
              src="/images/developers/data-APIs/data-apis-evaluation-meeting.webp"
              alt="Team discussing work around a table in an office"
              fill
              sizes="(min-width: 1280px) 627px, 100vw"
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
