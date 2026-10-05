import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink, SectionIntro } from "../release-notes/shared";
import { CardShell, IMAGE_DIR } from "./shared";

type Faq = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

const faqs: Faq[] = [
  {
    question: "What is the Talvrin Help Center?",
    answer:
      "A public support discovery and self-service knowledge surface for finding approved guidance and the correct support path.",
  },
  {
    question: "How do I contact Talvrin Support?",
    answer:
      "Use Contact Support. This page won't state a channel, schedule or response time until Support Operations has approved it.",
    link: { label: "Contact Support", href: "/support/contact-support" },
  },
  {
    question: "How do I report an accessibility problem?",
    answer:
      "Use Accessibility Support. It isn't available in this build yet, and the Help Center itself targets WCAG 2.2 AA in the meantime.",
  },
  {
    question: "How do I report a product problem?",
    answer:
      "Use Report a Problem for a malfunction or reproducible issue. It isn't available in this build yet.",
  },
  {
    question: "How do I report a security issue?",
    answer:
      "Use Security Contact. Never put passwords, keys, tokens or other secrets into Help Center search or general feedback.",
  },
  {
    question: "How do I check whether Talvrin is having a service issue?",
    answer:
      "Use System Status, the authoritative operational-status destination, once it's implemented and approved.",
  },
];

export default function FaqSection() {
  return (
    <section id="faqs" className="scroll-mt-32 bg-white py-20 sm:py-[88px]">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Answer-First FAQ"
            tone="amber"
            title="Direct answers about the Help Center itself."
          >
            For broader product questions, see the full Talvrin FAQs page.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,413px)]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.05} className="h-full">
                <CardShell tone="surface" className="gap-2.5 p-6">
                  <h3 className="text-base font-bold leading-[22px] text-ink">{faq.question}</h3>
                  <p className="text-sm leading-6 text-muted">{faq.answer}</p>
                  {faq.link && (
                    <div className="mt-auto pt-1">
                      <CardLink href={faq.link.href}>{faq.link.label}</CardLink>
                    </div>
                  )}
                </CardShell>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[16/8] lg:aspect-auto"
          >
            <Image
              src={`${IMAGE_DIR}/help-center-faq-colleagues.webp`}
              alt="Three colleagues talking together in an office"
              fill
              sizes="(min-width: 1024px) 413px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-9 text-center">
          <Link
            href="/resources/faqs"
            className="text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
          >
            Browse the full Talvrin FAQs →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
