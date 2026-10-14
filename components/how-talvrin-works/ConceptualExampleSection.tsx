import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

type ExampleCard = {
  badge: string;
  badgeColor: string;
  description: string;
};

const cards: ExampleCard[] = [
  {
    badge: "EVIDENCE CARD",
    badgeColor: "text-[#6c5ce7]",
    description: "Source title placeholder — source type, date, jurisdiction, revision and license status.",
  },
  {
    badge: "INTERPRETATION CARD",
    badgeColor: "text-[#b98132]",
    description: "Researcher view with visible open questions. Presented as a view, never an asserted finding.",
  },
  {
    badge: "MONITORED CHANGE",
    badgeColor: "text-[#63a876]",
    description: "Before/after conceptual metadata changes — no generated live alert.",
  },
  {
    badge: "DECISION CARD",
    badgeColor: "text-[#5d5a72]",
    description: "A human user reassesses the view, records rationale, or takes no action.",
  },
];

export default function ConceptualExampleSection() {
  return (
    <section className="bg-[#f6f5fb] py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header Block */}
        <div className="max-w-[800px]">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[1.2px] text-[#6c5ce7]">
              CONCEPTUAL EXAMPLE
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl font-bold leading-[1.18] tracking-tight text-[#171335] sm:text-4xl lg:text-[38px]">
              How did a policy announcement change the
              <br />
              assumptions behind a research view?
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 max-w-[780px] text-base leading-relaxed text-[#5d5a72] sm:text-[17px]">
              A generic, clearly-labeled illustration of the workflow — no fabricated data, companies, prices or actual source documents.
            </p>
          </Reveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <Reveal key={card.badge} delay={0.2 + idx * 0.05} className="flex">
              <div className="flex w-full flex-col justify-start rounded-[14px] border border-[#171335]/[0.08] bg-white p-[22px] shadow-sm transition-all duration-200 hover:border-[#171335]/20 hover:shadow-md">
                <span className={`text-[11px] font-bold tracking-wider ${card.badgeColor}`}>
                  {card.badge}
                </span>
                <p className="mt-3 text-[15px] leading-relaxed text-[#171335]">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footnote */}
        <Reveal delay={0.4} className="mt-6">
          <p className="text-[13px] leading-relaxed text-[#5d5a72]">
            Illustrative workflow — not actual market data, advice, or a product screenshot.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
