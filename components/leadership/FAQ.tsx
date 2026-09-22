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
      q: "Who leads Talvrin?", 
      a: "Current approved leadership profiles are published on this page. Each profile identifies the person, public title, entity affiliation, and reviewed biography. No profiles are published at this time." 
    },
    { 
      q: "What should appear before profiles are approved?", 
      a: "Before profiles are approved and published, placeholder notices and formal governance statements are shown. Profiles undergo strict factual verification, background review, and legal validation before publication." 
    },
    { 
      q: "Which organization does each leader represent?", 
      a: "Every leadership title must clearly identify the specific legal entity and public scope to which it applies, distinguishing between Talvrin, Zoiko Markets, and Zoiko Financial Group." 
    },
    { 
      q: "Is Talvrin a separate company?", 
      a: "Talvrin is an institutional intelligence and evidence technology platform operating within Zoiko Financial Group and Zoiko Markets corporate governance structures." 
    },
    { 
      q: "How can I contact a leader?", 
      a: "Leadership profiles do not accept personal outreach or unverified direct messaging. For business enquiries, media requests, or official communications, please use the Contact Talvrin channels." 
    },
    { 
      q: "Where can I find job opportunities?", 
      a: "All open roles, career tracks, and recruitment inquiries are managed centrally through the Zoiko Markets and Talvrin Careers portal." 
    },
    { 
      q: "What happens when a leader changes role or leaves?", 
      a: "When a leader changes role, transitions, or departs, public directory records are immediately updated or retired in accordance with ongoing transparency and institutional recordkeeping standards." 
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="lg:max-w-[1332px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="flex flex-col">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-[#B98132] font-['IBM_Plex_Sans']">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 className="mt-6 text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['IBM_Plex_Sans'] leading-tight lg:leading-[54px] max-w-xl">
                Direct answers about published leadership information, role scope, updates, and contact.
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="mt-12">
              <div className="flex flex-col border-t border-slate-900/10">
                {faqs.map((faq, i) => {
                  const isOpen = openIndexes.includes(i);
                  return (
                    <div 
                      key={i} 
                      onClick={() => toggleFaq(i)}
                      className="flex flex-col border-b border-slate-900/10 py-5 cursor-pointer hover:bg-slate-50/50 transition-colors select-none"
                    >
                      <div className="flex justify-between items-center gap-4">
                        <h3 className="text-base font-semibold text-slate-900 font-['IBM_Plex_Sans']">{faq.q}</h3>
                        <span className="text-gray-400 text-xl font-light shrink-0">{isOpen ? '−' : '+'}</span>
                      </div>
                      {isOpen && (
                        <p className="mt-3 text-sm text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed pr-6">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 flex items-center">
                <Link
                  href="/request-access"
                  className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#6C5CE7] hover:text-[#5846E2] font-['IBM_Plex_Sans'] transition-colors"
                >
                  <span>Contact Talvrin</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform group-hover:translate-x-1 shrink-0"
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
          <div className="w-full lg:pl-10 h-full flex items-start">
            <Reveal delay={0.4} className="w-full">
              <div className="overflow-hidden rounded-2xl border border-slate-900/10 shadow-sm bg-slate-50">
                <Image
                  src="/Leadership/image 101 (1).png"
                  alt="Talvrin Leadership FAQ"
                  width={550}
                  height={700}
                  className="w-full h-auto object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}