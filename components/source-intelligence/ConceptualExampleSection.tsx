import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const cards = [
  {
    label: "SOURCE CARD",
    tone: "text-accent-violet",
    body: "Source title placeholder — publisher, type, date, jurisdiction and license state shown together.",
  },
  {
    label: "CONTEXT CARD",
    tone: "text-accent-amber",
    body: "Reporting period and jurisdiction distinguished from publication date, with any unresolved field marked unknown.",
  },
  {
    label: "RELATIONSHIP CARD",
    tone: "text-emerald-600",
    body: "A second source shown as “contradicts” the first, with both kept visible.",
  },
];

export default function ConceptualExampleSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-stretch lg:gap-5 xl:grid-cols-[minmax(0,1fr)_315px]">
        <div className="min-w-0">
          <Reveal>
            <SectionEyebrow tone="amber">Conceptual Example</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading className="max-w-[800px]">
              What does source context look like next to a research question?
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[720px] text-base leading-7 text-gray-600 sm:text-lg">
              A generic, clearly-labeled illustration — no fabricated issuers,
              quotes, rates or actual source documents.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-5">
            {cards.map((card, index) => (
              <Reveal
                key={card.label}
                delay={0.05 * (index + 2)}
                className="rounded-2xl border border-ink/10 bg-white p-5 sm:p-6"
              >
                <p className={clsx("text-xs font-bold tracking-wide", card.tone)}>{card.label}</p>
                <p className="mt-3 text-sm leading-6 text-ink sm:text-base">{card.body}</p>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 text-sm italic text-gray-600">
            Illustrative example — not actual market data, advice, or a product
            screenshot.
          </p>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-white sm:aspect-[16/9] lg:aspect-auto lg:min-h-[398px]"
        >
          <Image
            src="/images/product/source-intelligence/source-intelligence-conceptual-plans.webp"
            alt="Colleagues annotating architectural plans spread across a table"
            fill
            sizes="(min-width: 1280px) 315px, (min-width: 1024px) 280px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
