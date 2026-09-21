"use client";
"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Talvrin?",
    answer:
      "Talvrin is a source-linked research and monitoring platform for global public markets.",
  },
  {
    question: "What does the platform help users do?",
    answer:
      "It helps users investigate, organize, monitor, and navigate evidence across global public markets securely and transparently.",
  },
  {
    question: "Is Talvrin a trading platform?",
    answer:
      "No, Talvrin is not a trading platform, execution venue, or broker-dealer.",
  },
  {
    question: "Does Talvrin provide investment advice?",
    answer:
      "No, Talvrin does not provide investment advice, stock tips, or guaranteed outcomes.",
  },
  {
    question: "How does AI fit into Talvrin?",
    answer:
      "AI is used to assist with discovery, summarization, and organization while keeping sources independently inspectable.",
  },
  {
    question: "Is Talvrin globally available?",
    answer:
      "Talvrin is engineered for global public markets, though actual coverage availability depends on the approved coverage registry.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-amber-600">
              ANSWER-FIRST FAQ
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Frequently asked, answered first.
            </h2>
          </Reveal>
        </div>

        {/* Main Content Layout: Accordion on left, image on right */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Accordion (7 cols) */}
          <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10 lg:col-span-7">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={faq.question} delay={0.05 * (index + 1)}>
                  <div className="py-5">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between text-left transition-colors hover:text-ink/80"
                    >
                      <span className="text-base font-bold text-ink sm:text-lg">
                        {faq.question}
                      </span>
                      <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-lg font-normal text-ink/60">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="mt-3 pr-8">
                        <p className="text-sm leading-relaxed text-ink/70 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column: Featured Image (5 cols) */}
          <Reveal delay={0.3} className="lg:col-span-5">
            <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-2xl border border-ink/10 bg-[#F6F5FB] shadow-xl">
              <Image
                src="/images/product/overview/faq.png"
                alt="Colleagues collaborating and reviewing documents together near a window"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
