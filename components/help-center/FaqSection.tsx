import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, CardLink } from "./shared";

const faqs = [
  {
    question: "What is the Talvrin Help Center?",
    answer:
      "The Help Center is Talvrin's self-service hub for product guidance, workflow help, troubleshooting and routes to deeper resources or support.",
  },
  {
    question: "Where should I start if I am new to Talvrin?",
    answer:
      "Use Getting Started for a guided introduction, then return to the Help Center for task-specific guidance.",
    linkLabel: "Open Getting Started",
    href: "/resources/getting-started",
  },
  {
    question: "How does Talvrin use AI?",
    answer:
      "AI may assist research workflows, but generated interpretation remains distinguishable from the underlying evidence and does not become the authoritative source.",
    linkLabel: "Read the AI boundary",
    href: "/product/ai-assistance",
  },
  {
    question: "How can I learn about evidence provenance?",
    answer:
      "Use the relevant Help articles and Evidence to understand source identity, timing, jurisdiction, versions and evidence relationships.",
    linkLabel: "Explore Evidence",
    href: "/product/evidence",
  },
  {
    question: "Are all Help Center articles public?",
    answer:
      "Access depends on approved content and access policy. Public pages never expose restricted article content through snippets or structured data.",
  },
  {
    question: "What if I cannot find an answer?",
    answer: "Use Contact Support. If the problem may be service availability, check Service Status.",
    linkLabel: "Contact Support",
    href: "/resources/contact-support",
  },
];

export default function FaqSection() {
  return (
    <section id="faqs" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Direct answers about the Help Center itself.</SectionHeading>
          <SectionLede>
            For broader product questions, see the full Talvrin FAQs page.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.slice(0, 2).map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.05}>
              <FaqCard faq={faq} />
            </Reveal>
          ))}

          <Reveal delay={0.15} className="hidden lg:block lg:row-span-3">
            <div className="relative h-full min-h-[560px] overflow-hidden rounded-2xl border border-ink/10 bg-surface">
              <Image
                src="/help-center/image 336.png"
                alt="Talvrin support team answering help questions"
                fill
                sizes="(min-width: 1024px) 384px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {faqs.slice(2).map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.05}>
              <FaqCard faq={faq} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 text-center">
          <CardLink href="/resources/faqs" size="sm">
            Browse the full Talvrin FAQs
          </CardLink>
        </Reveal>
      </Container>
    </section>
  );
}

function FaqCard({ faq }: { faq: (typeof faqs)[number] }) {
  return (
    <article className="flex h-full flex-col gap-2.5 rounded-2xl border border-ink/10 bg-surface px-6 py-6">
      <h3 className="text-base font-bold leading-5 text-ink">{faq.question}</h3>
      <p className="text-sm leading-6 text-muted">{faq.answer}</p>
      {faq.linkLabel && faq.href && (
        <CardLink href={faq.href} className="mt-auto pt-1">
          {faq.linkLabel}
        </CardLink>
      )}
    </article>
  );
}
