"use client"
import Image from "next/image";
import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is Talvrin AI Assistance?",
    answer:
      "Talvrin AI Assistance is a product capability layer that helps you discover information, organize evidence, compare documents, summarize material, identify changes and explain relationships — while the underlying sources remain independently inspectable.",
  },
  {
    question: "What can Talvrin AI help with?",
    answer:
      "It helps discover information, organize evidence, compare documents, summarize material, identify changes, and explain relationships within a strict boundary.",
  },
  {
    question: "Does Talvrin AI provide investment advice?",
    answer:
      "No. Talvrin is designed for research and market intelligence rather than investment recommendations or predictions.",
  },
  {
    question: "Can I inspect the sources behind an AI-assisted answer?",
    answer:
      "Yes. Source identity, context, version, rights/access state, and linked evidence are exposed alongside AI-assisted interpretation.",
  },
  {
    question: "How does Talvrin handle conflicting evidence?",
    answer:
      "Conflict and abstention states are shown explicitly. Talvrin does not collapse disagreement into a single manufactured conclusion.",
  },
  {
    question: "Does AI replace analysts or researchers?",
    answer:
      "No. Talvrin is designed to improve the information environment; interpretation, judgment, and responsibility remain human.",
  },
  {
    question: "How does Talvrin distinguish AI interpretation from evidence?",
    answer:
      "Through a multi-layer authority model that keeps generated interpretation visually and programmatically distinct from source material.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#6C5CE7]">
              ANSWER-FIRST FAQ
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Frequently asked, answered first.
            </h2>
          </Reveal>
        </div>

        {/* Main Grid: Accordion list on the left, Image on the right */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Accordion (7 cols) */}
          <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10 lg:col-span-7">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={item.question} delay={0.05 * (index + 1)}>
                  <div className="py-6">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between text-left focus:outline-none"
                    >
                      <h3 className="text-base font-bold text-ink sm:text-lg">
                        {item.question}
                      </h3>
                      <span className="ml-4 text-xl font-normal text-ink/50 shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-4 text-sm leading-relaxed text-ink/70 pr-6">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column: Image sticky or aligned (5 cols) */}
          <Reveal delay={0.3} className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink/10 bg-ink/5 shadow-md">
              <Image
                src="/images/product/ai-assistance/faq.png"
                alt="Colleagues collaborating and pointing at documents in a meeting"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
