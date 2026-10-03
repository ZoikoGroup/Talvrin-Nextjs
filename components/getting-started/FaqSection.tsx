import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const faqs = [
  {
    question: "What should I do first?",
    answer:
      "Start with a specific research question, identify the evidence that would support or challenge it, inspect the underlying sources, then preserve a view that can be reassessed when evidence changes.",
  },
  {
    question: "Is Talvrin a trading platform?",
    answer: "No. Talvrin is designed for research and market intelligence, not trade execution.",
  },
  {
    question: "Does Talvrin tell me what to buy or sell?",
    answer:
      "No. Talvrin is not a stock-tipping or manufactured recommendation engine; users remain responsible for their decisions.",
  },
  {
    question: "Can I trust an AI summary as the source?",
    answer:
      "No. AI may assist research, while the underlying evidence remains separately inspectable and governed.",
  },
  {
    question: "Why do publication date and effective period both matter?",
    answer:
      "A document may be published on one date but apply to another period; keeping them separate prevents false context.",
  },
  {
    question: "Why does jurisdiction matter?",
    answer:
      "Regulation, policy, market structure, source rights, and economic meaning can differ across jurisdictions.",
  },
  {
    question: 'Does "global" mean every market is available?',
    answer:
      "No. Talvrin is architected globally, while released coverage is stated separately and progressively.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-32 bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Common First-Session Questions</SectionEyebrow>
          <SectionHeading>Answers before you start.</SectionHeading>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-8 rounded-[14px] border border-ink/10 bg-surface px-[27px] pb-[9px] pt-[9px]"
        >
          <ul className="divide-y divide-ink/8">
            {faqs.map((faq) => (
              <li key={faq.question} className="flex flex-col gap-2 py-[22px]">
                <h3 className="text-base font-bold text-ink">{faq.question}</h3>
                <p className="text-[15px] leading-[24px] text-slate-600">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="pt-[7px]">
          <p className="text-sm leading-[22.4px] text-slate-600">
            Have a different question? See the full{" "}
            <Link href="/resources/faqs" className="text-accent-violet hover:text-brand">
              FAQs
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
