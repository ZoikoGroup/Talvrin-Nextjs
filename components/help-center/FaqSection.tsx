import { ReactNode } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, CardLink } from "./shared";

type FaqItem = {
  question: string;
  answer: ReactNode;
  linkLabel?: string;
  href?: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is the Talvrin Help Center?",
    answer: (
      <>
        The Help Center is Talvrin&apos;s self-service hub for product<br className="hidden md:inline" /> guidance, workflow help, troubleshooting and routes to<br className="hidden md:inline" /> deeper resources or support.
      </>
    ),
  },
  {
    question: "Where should I start if I am new to Talvrin?",
    answer: (
      <>
        Use Getting Started for a guided introduction, then<br className="hidden md:inline" /> return to the Help Center for task-specific guidance.
      </>
    ),
    linkLabel: "Open Getting Started",
    href: "/resources/getting-started",
  },
  {
    question: "How does Talvrin use AI?",
    answer: (
      <>
        AI may assist research workflows, but generated<br className="hidden md:inline" /> interpretation remains distinguishable from the<br className="hidden md:inline" /> underlying evidence and does not become the<br className="hidden md:inline" /> authoritative source.
      </>
    ),
    linkLabel: "Read the AI boundary",
    href: "/product/ai-assistance",
  },
  {
    question: "How can I learn about evidence provenance?",
    answer: (
      <>
        Use the relevant Help articles and Evidence to<br className="hidden md:inline" /> understand source identity, timing, jurisdiction,<br className="hidden md:inline" /> versions and evidence relationships.
      </>
    ),
    linkLabel: "Explore Evidence",
    href: "/product/evidence",
  },
  {
    question: "Are all Help Center articles public?",
    answer: (
      <>
        Access depends on approved content and access<br className="hidden md:inline" /> policy. Public pages never expose restricted article<br className="hidden md:inline" /> content through snippets or structured data.
      </>
    ),
  },
  {
    question: "What if I cannot find an answer?",
    answer: (
      <>
        Use Contact Support. If the problem may be service<br className="hidden md:inline" /> availability, check Service Status.
      </>
    ),
    linkLabel: "Contact Support",
    href: "/resources/contact-support",
  },
];

function FaqCard({ faq }: { faq: FaqItem }) {
  return (
    <article
      className="flex h-[172px] w-full lg:w-[386px] flex-col justify-between rounded-2xl border p-5"
      style={{
        backgroundColor: "rgba(246, 245, 251, 1)",
        borderColor: "rgba(23, 19, 53, 0.1)",
      }}
    >
      <div>
        <h3 className="text-[14.5px] font-bold leading-[18px] text-ink font-['IBM_Plex_Sans']">{faq.question}</h3>
        <p className="mt-1.5 text-xs leading-[18px] text-muted font-['IBM_Plex_Sans']">{faq.answer}</p>
      </div>
      {faq.linkLabel && faq.href && (
        <div className="mt-auto pt-1">
          <CardLink href={faq.href} size="xs">
            {faq.linkLabel}
          </CardLink>
        </div>
      )}
    </article>
  );
}

export default function FaqSection() {
  return (
    <section id="faqs" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="!max-w-[1200px] !px-4 sm:!px-6 lg:!px-0">
        <Reveal>
          <SectionEyebrow tone="amber">ANSWER-FIRST FAQ</SectionEyebrow>
          <SectionHeading>Direct answers about the Help Center itself.</SectionHeading>
          <SectionLede style={{ color: "rgba(93, 90, 114, 1)" }}>
            For broader product questions, see the full Talvrin FAQs page.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-[386px_386px_398px] lg:w-[1200px]">
          {/* Row 1: Faq 0 and Faq 1 */}
          <Reveal delay={0}>
            <FaqCard faq={faqs[0]} />
          </Reveal>
          <Reveal delay={0.05}>
            <FaqCard faq={faqs[1]} />
          </Reveal>

          {/* Col 3 Image spanning 3 rows */}
          <Reveal delay={0.15} className="hidden lg:block lg:col-start-3 lg:row-start-1 lg:row-span-3">
            <div className="relative h-[546px] w-full lg:w-[398px] overflow-hidden rounded-2xl border border-[rgba(23,19,53,0.1)] bg-surface">
              <Image
                src="/help-center/image 336.png"
                alt="Talvrin support team answering help questions"
                fill
                sizes="(min-width: 1024px) 398px, 100vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </Reveal>

          {/* Row 2: Faq 2 and Faq 3 */}
          <Reveal delay={0.1}>
            <FaqCard faq={faqs[2]} />
          </Reveal>
          <Reveal delay={0.15}>
            <FaqCard faq={faqs[3]} />
          </Reveal>

          {/* Row 3: Faq 4 and Faq 5 */}
          <Reveal delay={0.2}>
            <FaqCard faq={faqs[4]} />
          </Reveal>
          <Reveal delay={0.25}>
            <FaqCard faq={faqs[5]} />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-8 flex justify-center">
          <CardLink href="/resources/faqs" size="xs">
            Browse the full Talvrin FAQs
          </CardLink>
        </Reveal>
      </Container>
    </section>
  );
}
