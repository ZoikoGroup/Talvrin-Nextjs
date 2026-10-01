"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "What is Talvrin Enterprise?",
    answer:
      "Talvrin Enterprise is the organization-level Solutions destination for evaluating scalable, governed, and reviewable public-market research capabilities across teams and markets.",
  },
  {
    question: "What can enterprises use Talvrin for?",
    answer:
      "Talvrin Enterprise supports governed public-market research workflows across teams, markets, and organizational functions.",
  },
  {
    question:
      "Does Talvrin Enterprise include SSO, SCIM, RBAC, audit logs, APIs, or integrations?",
    answer:
      "Talvrin Enterprise is designed to support enterprise security, governance, access control, auditability, APIs, and integrations.",
  },
  {
    question:
      "Can Talvrin replace our portfolio, trading, risk, or compliance systems?",
    answer:
      "Talvrin is designed to complement existing portfolio, trading, risk, and compliance systems rather than replace those systems.",
  },
  {
    question: "How does Talvrin support governance?",
    answer:
      "Talvrin provides governed research workflows designed to support consistent access, reviewability, and organizational controls.",
  },
  {
    question: "How does Talvrin use AI?",
    answer:
      "Talvrin uses AI-assisted workflows to help teams work with research more efficiently while maintaining appropriate review and governance.",
  },
  {
    question: "Which markets does Enterprise support?",
    answer:
      "Talvrin Enterprise supports public-market research workflows across supported markets and organizational use cases.",
  },
  {
    question: "How do Financial Institutions and Enterprise differ?",
    answer:
      "Financial Institutions focuses on institution-specific research workflows, while Enterprise addresses organization-level research capabilities across teams and markets.",
  },
];

export default function EnterpriseFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-10 lg:px-20 lg:py-[96px]">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[minmax(0,840px)_384px] lg:items-start lg:gap-[27px]">
          {/* LEFT - FAQ */}
          <div className="w-full">
            {/* Eyebrow */}
            <div className="font-['IBM_Plex_Sans'] text-[12px] font-bold leading-[16px] tracking-[0.04em] text-yellow-600">
              ANSWER-FIRST FAQ
            </div>

            {/* Heading */}
            <h2 className="m-0 mt-[13px] max-w-[760px] font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[43px] tracking-[-0.8px] text-slate-900 sm:text-[42px] sm:leading-[46px] lg:text-[48px] lg:leading-[48.3px]">
              Frequently asked, answered first.
            </h2>

            {/* FAQ List */}
            <div className="mt-7 w-full">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="w-full border-b-[0.8px] border-slate-900/10"
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left font-['IBM_Plex_Sans'] outline-none"
                    >
                      <span className="min-w-0 flex-1 text-[16px] font-semibold leading-6 text-slate-900">
                        {faq.question}
                      </span>

                      <span className="flex w-5 shrink-0 items-center justify-center font-['IBM_Plex_Sans'] text-[20px] font-light leading-none text-gray-600">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="max-w-[720px] pb-5 font-['IBM_Plex_Sans'] text-[16px] font-normal leading-6 text-gray-600">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="relative h-[608px] w-full overflow-hidden rounded-2xl lg:mt-[137px]">
            <Image
              src="/images/solutions/enterprise/image8.png"
              alt="Talvrin Enterprise team"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 384px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}