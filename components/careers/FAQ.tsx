"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      q: "What is Talvrin?",
      a: (
        <>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            Talvrin is a source-linked research and monitoring platform for global public markets. It is designed
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            to help users discover evidence, understand market developments, build research views, and
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            monitor underlying information for meaningful changes.
          </span>
        </>
      ),
    },
    {
      q: "Where are roles located?",
      a: "Role locations are specified individually on each job listing, encompassing our headquarters in Sacramento, European offices in London, and approved distributed locations.",
    },
    {
      q: "Does Talvrin offer remote work?",
      a: "Workplace models (onsite, hybrid, or remote) are determined on a per-role basis to support team collaboration and operational excellence while offering necessary flexibility.",
    },
    {
      q: "What is the hiring process?",
      a: "Our structured hiring process includes application review, initial screening, technical/functional evaluations, and collaborative team conversations designed to assess mutual fit.",
    },
    {
      q: "How is candidate information used?",
      a: "Candidate data is handled in strict compliance with applicable privacy regulations and used exclusively for recruiting, evaluation, and compliance purposes as detailed in our Candidate Privacy Notice.",
    },
    {
      q: "Can I request an accessibility accommodation?",
      a: "Yes, Talvrin provides reasonable accommodations for individuals with disabilities throughout the interview and onboarding process via our dedicated support channel.",
    },
    {
      q: "How can I verify a recruitment message?",
      a: "Legitimate communications from Talvrin and Zoiko Markets will always originate from official corporate email domains. We never request financial transactions or sensitive credentials during initial outreach.",
    },
    {
      q: "How can I get help with an existing application?",
      a: "If you have already submitted an application, you can reach out through our candidate support portal or respond directly to the coordinator associated with your interview process.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-white py-20 lg:py-24 border-b border-slate-900/10">
      <Container className="max-w-[1200px]">
        {/* Header on top */}
        <div className="flex flex-col items-start max-w-[760px]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-wider text-yellow-600 font-['IBM_Plex_Sans']">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 font-['IBM_Plex_Sans'] sm:text-4xl lg:text-[48px] lg:leading-[50.60px]">
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Direct answers about current
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                vacancies, job terms, applications,
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                privacy, accessibility, and
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                recruitment safety.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* 2-Column Content: Left Accordion + Right Image (top-aligned with accordion) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Accordion */}
          <div className="lg:col-span-7 flex flex-col w-full max-w-[760px]">
            <Reveal delay={0.2}>
              <div className="flex flex-col border-t border-slate-900/10 w-full">
                {faqs.map((faq, i) => {
                  const isOpen = openIndexes.includes(i);
                  return (
                    <div
                      key={i}
                      onClick={() => toggleFaq(i)}
                      className="flex flex-col border-b border-slate-900/10 py-5 cursor-pointer hover:bg-slate-50/50 transition-colors select-none"
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
                        <div className="mt-3 text-base text-gray-600 font-normal font-['IBM_Plex_Sans'] leading-6 pr-6">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center">
                <Link
                  href="/request-access"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-500 font-['IBM_Plex_Sans'] hover:underline"
                >
                  <span>Contact Talvrin</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform group-hover:translate-x-1 shrink-0 text-indigo-500"
                  >
                    <path
                      d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={0.3} className="w-full max-w-[384px]">
              <div className="relative aspect-[384/653] min-h-[500px] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/Careers/image 106.png"
                  alt="Talvrin Careers FAQ"
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