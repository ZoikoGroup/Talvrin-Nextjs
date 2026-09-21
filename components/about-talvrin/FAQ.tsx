"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is Talvrin?",
      a: "Talvrin is a source-linked research and monitoring platform for global public markets. It is designed to help users discover evidence, understand market developments, build research views and monitor the underlying information for meaningful changes.",
    },
    {
      q: "Why is Talvrin being created?",
      a: "It is created to bridge the widening gap between abundant financial data and defensible understanding, ensuring every market insight remains securely tied to verified source documents.",
    },
    {
      q: "What problem does Talvrin solve?",
      a: "It solves the fragmentation of financial data, broken source trails, and the difficulty of tracking when and why underlying market facts change over time.",
    },
    {
      q: "Who is Talvrin for?",
      a: "It is built for investors, finance professionals, research teams, and institutions that require transparent, verifiable, and source-linked market intelligence.",
    },
    {
      q: "How can Talvrin help individual investors?",
      a: "By providing clear access to verifiable evidence and robust monitoring tools without manufactured recommendations, portfolio management bias, or trade execution pressure.",
    },
    {
      q: "How can Talvrin help businesses and professional teams?",
      a: "By streamlining institutional research workflows, ensuring complete traceability back to original regulatory filings, and alerting teams instantly when underlying data shifts.",
    },
    {
      q: "What is Talvrin's mission?",
      a: "To serve as the trusted evidence layer for global public markets, bringing structural clarity, transparency, and verifiability to financial research.",
    },
    {
      q: "What is Talvrin's vision?",
      a: "A financial ecosystem where every research view and market thesis remains permanently and transparently connected to its factual origins.",
    },
  ];

  return (
    <>
      {/* FAQ Section */}
      <section id="faq" className="bg-white py-20 lg:py-32 overflow-hidden">
        <Container className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Questions List */}
          <div className="flex-1 w-full">
            <Reveal>
              <p className="text-xs font-bold tracking-wide text-[#6C5CE7] uppercase">QUESTIONS</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight text-slate-900 lg:whitespace-nowrap">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <div className="mt-12 flex flex-col">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <Reveal key={faq.q} delay={0.05 * idx}>
                    <div className="flex flex-col border-b border-slate-900/10">
                      <div 
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="flex cursor-pointer items-center justify-between py-5 select-none"
                      >
                        <span className="text-base font-semibold text-slate-900 pr-4">
                          {faq.q}
                        </span>
                        <span className="text-xl font-light text-[#5D5A72] shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                      {isOpen && (
                        <div className="pb-5">
                          <p className="max-w-2xl text-base leading-6 text-gray-600">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image (444px x 634px) shifted down by 120px total */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0 lg:translate-y-[120px]">
            <Reveal delay={0.4}>
              <div className="w-full sm:w-[444px] h-[634px] overflow-hidden rounded-2xl bg-violet-50/5 border border-slate-200 shadow-lg relative">
                <Image
                  src="/about-talvrin/image 70.png"
                  alt="FAQ"
                  width={444}
                  height={634}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>

        </Container>
      </section>
    </>
  );
}