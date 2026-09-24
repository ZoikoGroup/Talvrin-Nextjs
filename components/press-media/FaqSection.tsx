"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Talvrin?",
    answer:
      "Talvrin is building a source-linked research and monitoring platform for global public markets. It is designed to help users connect questions, evidence, context, preserved research views, and continuous monitoring.",
  },
  {
    question: "Where can I find official Talvrin updates?",
    answer:
      "Use the Talvrin Newsroom for approved updates and source-linked perspectives. Each publication has a canonical page with visible dates and supporting context.",
  },
  {
    question: "How do I submit a media enquiry?",
    answer:
      "Use the media enquiry form on this page. Include the publication or program, your deadline and time zone, and the specific topic so the request can be routed appropriately.",
  },
  {
    question: "Can I request an interview or speaker?",
    answer:
      "Yes — select the interview or speaker enquiry type and describe the topic, format and deadline. Submission does not guarantee a response, interview or comment.",
  },
  {
    question: "Can I download Talvrin logos or images?",
    answer:
      "Asset permissions are handled case by case. Submit an asset or logo permission enquiry describing the intended use, and do not alter approved assets without permission.",
  },
  {
    question: "Where do I report a security or privacy issue?",
    answer:
      "Security and privacy reports do not belong in a media enquiry. Use the security contact route in the Talvrin Trust Center so the report reaches the accountable owner.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-32 bg-white py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,840px)_minmax(0,388px)] lg:items-end lg:gap-12">
          <div>
            <Reveal>
              <SectionEyebrow tone="amber">Frequently Asked Questions</SectionEyebrow>
              <SectionHeading>
                Direct answers about Talvrin facts, media resources, Newsroom publications,
                permissions, interviews, and media enquiries.
              </SectionHeading>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 border-b border-ink/10">
              {faqs.map((faq, index) => {
                const isOpen = index === openIndex;
                return (
                  <div key={faq.question} className="border-t border-ink/10 first:border-t-0">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left sm:gap-6 sm:py-5"
                    >
                      <span className="text-base font-semibold text-ink">{faq.question}</span>
                      <span className="shrink-0 text-xl font-light text-slate-500" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="max-w-[720px] pb-5 text-base leading-6 text-slate-600">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </Reveal>

            <Reveal delay={0.15}>
              <Link
                href="/company/contact"
                className="mt-6 inline-block text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
              >
                Contact Talvrin →
              </Link>
            </Reveal>
          </div>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[388/597] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/company/press-media/press-media-faq-team.webp"
              alt="Two colleagues reviewing information together on a laptop"
              fill
              sizes="388px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
