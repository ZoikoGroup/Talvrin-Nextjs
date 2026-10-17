"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const faqItems = [
  {
    question: "What are German Bunds?",
    answer:
      "Bunds are German federal government bonds issued by the Deutsche Finanzagentur (German Finance Agency) on behalf of the Federal Republic of Germany. Talvrin organizes source evidence around them, contingent on verified coverage.",
  },
  {
    question: "What can I research about German Bunds on Talvrin?",
    answer:
      "You can inspect Deutsche Bundesbank and European Central Bank policy communication, Deutsche Finanzagentur issuance and auction evidence, official German and euro-area statistics, and explanatory/methodology material — all with visible source, timing and rights metadata.",
  },
  {
    question: "What’s the difference between Bunds and other German federal securities?",
    answer:
      "Bunds are the long-dated federal bonds; the Finanzagentur also issues shorter-dated securities such as Bobls and Schätze. Talvrin labels each evidence record with the instrument it concerns rather than treating them as interchangeable.",
  },
  {
    question: "How do I verify the evidence behind a German Bunds research view?",
    answer:
      "Every evidence record carries its publisher, publication date, effective or reference period, version and rights state, with a path back to the original source where rights permit. Interpretation is labeled separately from source fact.",
  },
  {
    question: "Does Deep Coverage mean Talvrin has live Bund yields and prices?",
    answer:
      "No. Deep Coverage describes the depth of released source evidence. Live Bund yields, prices and auction results are not released, and data timeliness is delayed or snapshot per source.",
  },
  {
    question: "Can I monitor changes to German Bunds evidence?",
    answer:
      "Yes, within released coverage. Monitoring keeps a research view connected to new publications, revisions and source changes, and Change Detection shows what differs against the version you last reviewed.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow>Answer-First FAQ</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 sm:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,399px)] xl:justify-between">
          <div className="border-b border-ink/10">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `german-bunds-faq-${index}`;
              return (
                <div key={item.question} className="border-t border-ink/10 first:border-t-0">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:py-6"
                    >
                      {item.question}
                      <span aria-hidden="true" className="shrink-0 text-xl font-normal text-ink/50">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div id={panelId} hidden={!isOpen}>
                    <p className="max-w-[720px] pb-6 text-sm leading-7 text-gray-600 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Reveal
            delay={0.2}
            className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:aspect-[16/10] lg:sticky lg:top-24 lg:aspect-[399/515]"
          >
            <Image
              src="/images/markets/german-bunds/german-bunds-faq-boardroom.webp"
              alt="Executive presenting to colleagues around a boardroom table"
              fill
              sizes="(min-width: 1280px) 399px, (min-width: 1024px) 360px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
