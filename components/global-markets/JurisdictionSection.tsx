import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const faqs = [
  {
    question: "Why does jurisdiction matter?",
    answer:
      "Market structure, regulation, policy, source authority, rights, disclosure rules, and economic meaning can vary by jurisdiction.",
  },
  {
    question: "Is every country supported?",
    answer:
      "No. Coverage is released progressively as evidence, data-rights, and operational capabilities are ready.",
  },
  {
    question: "Can architecture-ready regions be shown as supported?",
    answer: "No. Architecture capability does not create a customer-facing coverage claim.",
  },
  {
    question: "How is locale and language handled?",
    answer:
      "Localized variants exist only where content materially differs; source timestamps stay unambiguous.",
  },
];

export default function JurisdictionSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-10">
        <div>
          <Reveal className="max-w-2xl">
            <SectionEyebrow tone="amber">Jurisdiction Context</SectionEyebrow>
            <SectionHeading>Jurisdiction changes context. It does not become a directory here.</SectionHeading>
            <SectionLede>
              Global Markets explains why jurisdiction matters. Supported Jurisdictions owns the
              current jurisdiction inventory.
            </SectionLede>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.06} className="flex flex-col gap-2">
                <span className="h-0.5 w-7 bg-accent-violet" aria-hidden="true" />
                <h3 className="text-[17px] font-bold text-ink">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <Link
              href="/markets/supported-jurisdictions"
              className="mt-7 inline-block text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
            >
              Explore Supported Jurisdictions →
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative mt-10 aspect-[238/430] w-full max-w-xs overflow-hidden rounded-2xl lg:mt-0">
          <Image
            src="/images/markets/global-markets/global-markets-jurisdiction-office.webp"
            alt="Two colleagues reviewing research on a laptop in a modern office"
            fill
            sizes="(min-width: 1024px) 260px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
