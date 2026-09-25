"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "Are there any published integrations today?",
    answer:
      "Not currently. This catalog will list only integrations published through the approved Integration Registry, each linked to its own capability, permission, and lifecycle detail.",
  },
  {
    question: "How is a lifecycle state different from operational status?",
    answer:
      "Lifecycle says whether an integration is released, deprecated, or withdrawn. Operational status says whether the mapped service is currently affected. They come from different sources and are never merged into one badge.",
  },
  {
    question: "Will connecting ever grant more data rights than I already have?",
    answer:
      "No. A technically successful connection does not change licensing or entitlement. Rights come from the canonical licensing policy, and no connection asserts redistribution rights an agreement doesn't grant.",
  },
  {
    question: "Does an integration preserve evidence provenance?",
    answer:
      "Each released integration states whether source identity, timing, and jurisdiction context are preserved, transformed, or dropped when data crosses the boundary — never a blanket promise of lossless provenance.",
  },
  {
    question: "What permissions will an integration ask for?",
    answer:
      "Only the minimum required, with each permission mapped to a documented capability or operational reason and shown before you authorize. Permissions are never preselected or bundled.",
  },
  {
    question: "Can I disconnect once a connection is set up?",
    answer:
      "Yes. Disconnect and revoke are discoverable in-product with their effect explained, and never require contacting sales unless a genuine contractual process applies.",
  },
  {
    question: "Where do I go until an integration is released?",
    answer:
      "Review the API Documentation shell to see how released interfaces are structured, explore Data APIs, or return to the Developer Overview for every planned destination and its real state.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end xl:grid-cols-[minmax(0,840px)_minmax(0,395px)] xl:gap-11">
          <Reveal delay={0.1} className="border-b border-ink/10">
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

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[395/535] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/developers/integrations/integrations-faq-presentation.webp"
              alt="Two colleagues reviewing a presentation on a screen"
              fill
              sizes="(min-width: 1280px) 395px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
