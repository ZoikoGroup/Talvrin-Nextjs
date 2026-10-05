"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../release-notes/shared";

const faqs = [
  {
    question: "What does Account Support cover?",
    answer:
      "Sign-in and access problems, account profile or details, unavailable verification methods, organization or workspace access, and account state such as a restricted or disabled account. Product defects, accessibility barriers, and security reports have their own destinations.",
  },
  {
    question: "What should I never share here?",
    answer:
      "Passwords, one-time or recovery codes, API keys or secrets, private keys, payment credentials, or unnecessary government identifiers. Talvrin support will never ask you for them.",
  },
  {
    question: "How are my recovery options decided?",
    answer:
      "Recovery follows Talvrin's approved identity and account policies for your account. Support can't bypass those checks, and this page doesn't promise a specific recovery method.",
  },
  {
    question: "What happens if I think someone accessed my account?",
    answer:
      "Treat it as a security issue rather than a general account request. Use the Security Contact path for suspected compromise — and don't share credentials in any message.",
  },
  {
    question: "Why can't you just tell me if my account is disabled?",
    answer:
      "Confirming an account's state publicly could expose information to someone who isn't the account holder. Account-state questions are handled through a request so identity can be verified first.",
  },
  {
    question: "Is there a guaranteed response time for account requests?",
    answer:
      "No. No service-level commitment for account requests has been published yet, so this page doesn't state a response time.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,800px)_minmax(0,384px)] lg:justify-between">
        <div>
          <Reveal>
            <SectionIntro
              eyebrow="Answers First"
              tone="amber"
              title="Account Support frequently asked questions."
            />
          </Reveal>

          <div className="mt-8 flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `account-faq-${index}`;
              return (
                <Reveal key={faq.question} delay={index * 0.04}>
                  <div
                    className={clsx(
                      "rounded-xl border bg-surface transition-colors",
                      isOpen ? "border-ink/20" : "border-ink/10"
                    )}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full px-5 py-4 text-left text-base font-semibold text-ink"
                    >
                      {faq.question}
                    </button>
                    {isOpen && (
                      <p id={panelId} className="px-5 pb-5 text-[15px] leading-6 text-muted">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[384/519] w-full max-w-[384px] overflow-hidden rounded-2xl lg:mx-0"
        >
          <Image
            src="/images/support/account-support/account-support-faq-colleagues.webp"
            alt="Two colleagues smiling as they talk in an office corridor"
            fill
            sizes="(min-width: 1024px) 384px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
