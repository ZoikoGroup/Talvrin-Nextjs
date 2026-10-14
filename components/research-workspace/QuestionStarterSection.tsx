import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const questions = [
  "What changed in this issuer's latest filing?",
  "How has this central bank's guidance shifted this quarter?",
  "What is the reporting period for this economic release?",
  "Which sources disagree about this market's outlook?",
];

export default function QuestionStarterSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Question Starter</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading>Start with a question, not a blank chat box.</SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[760px] text-base leading-7 text-gray-600">
            This illustrates how a question becomes a scoped research object. A
            real, interactive query is gated behind an authenticated, approved
            workspace.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-2 lg:gap-8">
          <Reveal
            delay={0.2}
            className="relative aspect-[623/384] w-full overflow-hidden rounded-2xl border border-ink/10 bg-white"
          >
            <Image
              src="/images/product/research-workspace/research-workspace-question-starter-review.webp"
              alt="Smiling professional holding a printed report during a conversation"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="min-w-0">
            <Reveal delay={0.25}>
              <p className="text-xs font-bold tracking-wide text-gray-600">
                SUGGESTED QUESTIONS — ILLUSTRATIVE, NOT GENERATED FROM LIVE DATA
              </p>
            </Reveal>
            <ul className="mt-2.5 flex flex-col gap-2.5">
              {questions.map((question, index) => (
                <Reveal
                  as="li"
                  key={question}
                  delay={0.05 * (index + 5)}
                  className="rounded-[10px] border border-ink/10 bg-white px-4 py-4 text-sm text-ink sm:text-base"
                >
                  {question}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
