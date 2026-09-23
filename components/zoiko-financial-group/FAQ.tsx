"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      q: "What is Zoiko Financial Group?",
      a: "Zoiko Financial Group is the parent organization of Zoiko Markets.",
    },
    {
      q: "How is Zoiko Financial Group related to Talvrin?",
      a: "Zoiko Financial Group owns Zoiko Markets, which operates Talvrin as its institutional market intelligence and evidence technology trading name.",
    },
    {
      q: "Is Talvrin a separate company?",
      a: "Talvrin is a trading name and technology platform operated directly by Zoiko Markets under Zoiko Financial Group corporate governance.",
    },
    {
      q: "What is Zoiko Markets?",
      a: "Zoiko Markets is the principal operating company providing regulated market infrastructure and financial intelligence services.",
    },
    {
      q: "Which markets does Zoiko Financial Group operate in?",
      a: "Zoiko Financial Group operates across major international public markets including sovereign credit, fixed income, equity, and foreign exchange.",
    },
    {
      q: "How can I contact the organization?",
      a: "You can reach the executive and institutional teams through the official corporate inquiry channels or via the Contact Talvrin portal.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-[#F6F5FB] py-20 lg:py-24 border-b border-slate-900/10">
      <Container className="max-w-[1080px]">
        {/* Header on top */}
        <div className="flex flex-col items-start max-w-[760px]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-wider text-[#B98132] font-['IBM_Plex_Sans']">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 font-['IBM_Plex_Sans'] sm:text-4xl lg:text-[44px] lg:leading-[50px]">
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Direct answers about Zoiko
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Financial Group, Zoiko Markets,
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                and Talvrin.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* 2-Column Content: Left Accordion + Right Image (Tight Figma Gap) */}
        <div className="mt-10 flex flex-col lg:flex-row items-start justify-start gap-6 lg:gap-8">
          {/* Left Column: Accordion */}
          <div className="w-full lg:w-[620px] shrink-0">
            <Reveal delay={0.2}>
              <div className="flex flex-col border-t border-slate-900/10 w-full">
                {faqs.map((faq, i) => {
                  const isOpen = openIndexes.includes(i);
                  return (
                    <div
                      key={i}
                      onClick={() => toggleFaq(i)}
                      className="flex flex-col border-b border-slate-900/10 py-5 cursor-pointer hover:bg-white/40 transition-colors select-none"
                    >
                      <div className="flex justify-between items-center gap-4">
                        <h3 className="text-base font-semibold text-slate-900 font-['IBM_Plex_Sans']">
                          {faq.q}
                        </h3>
                        <span className="text-gray-600 text-xl font-light shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                      {isOpen && (
                        <p className="mt-3 text-sm sm:text-base text-gray-600 font-normal font-['IBM_Plex_Sans'] leading-6 pr-4">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Image (Tightly Positioned) */}
          <div className="w-full lg:w-[384px] shrink-0 flex justify-start">
            <Reveal delay={0.3} className="w-full">
              <div className="relative aspect-[384/463] min-h-[440px] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/zoiko-financial-group/image 95 (1).png"
                  alt="Zoiko Financial Group FAQ"
                  fill
                  sizes="(min-width: 1024px) 384px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}