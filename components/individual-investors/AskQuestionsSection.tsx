import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMAGE_DIR, SectionIntro } from "./shared";

const questions = [
  {
    question: "What is actually happening?",
    body: "Start with the event, issuer, security, market, or policy issue rather than a recommendation.",
  },
  {
    question: "What evidence supports that conclusion?",
    body: "Expose source authority and supporting relationships.",
  },
  {
    question: "What would cause me to reconsider my view?",
    body: "Connect the research object to monitoring and reassessment.",
  },
  {
    question: "What contradicts it?",
    body: "Surface challenging evidence instead of confirmation-only content.",
  },
];

export default function AskQuestionsSection() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Ask Better Questions"
            tone="amber"
            inverted
            title={<>Instead of only asking &quot;what should I buy?&quot;</>}
          >
            Talvrin uses this question pattern as a central research motif — it differentiates
            evidence-led research from stock-tip intent without lecturing you.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {questions.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.05} className="h-full">
                <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-base font-bold leading-6 text-white">{item.question}</h3>
                  <p className="text-sm leading-6 text-white/60">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <Image
              src={`${IMAGE_DIR}/individual-investors-ask-questions-table.webp`}
              alt="Overhead view of people reviewing printed reports and charts around a table"
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
