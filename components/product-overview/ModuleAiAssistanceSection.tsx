import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface AssistanceRow {
  assist: string;
  mustNot: string;
}

const assistanceItems: AssistanceRow[] = [
  {
    assist: "Discovering relevant information",
    mustNot: "The authoritative source",
  },
  {
    assist: "Organizing evidence",
    mustNot: "A substitute for provenance",
  },
  {
    assist: "Comparing documents",
    mustNot: "A hidden transformation layer",
  },
  {
    assist: "Summarizing material",
    mustNot: "A replacement for inspecting the source",
  },
  {
    assist: "Identifying changes",
    mustNot: "An unreviewable materiality oracle",
  },
  {
    assist: "Explaining relationships",
    mustNot: "Investment advice, stock tips, or guaranteed outcomes",
  },
];

export default function ModuleAiAssistanceSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#6C5CE7]">
              MODULE 06 · AI ASSISTANCE
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              AI should help you navigate the evidence — not replace it.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Use AI to accelerate discovery, organization, comparison,
              summarization, and interrogation while keeping the underlying
              sources independently inspectable.
            </p>
          </Reveal>
        </div>

        {/* Two-Column Table View */}
        <div className="mt-16">
          {/* Table Header */}
          <div className="grid grid-cols-1 gap-6 pb-4 border-b border-ink/15 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[1.2px] text-ink/50">
                AI MAY ASSIST WITH
              </span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[1.2px] text-ink/50">
                AI MUST NOT BECOME
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-ink/10">
            {assistanceItems.map((item, index) => (
              <Reveal key={item.assist} delay={0.05 * (index + 1)}>
                <div className="grid grid-cols-1 gap-4 py-5 lg:grid-cols-2 lg:gap-8 lg:items-center">
                  <div>
                    <p className="text-sm font-medium text-ink">
                      {item.assist}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-ink/70">
                      {item.mustNot}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Link Footer */}
        <Reveal delay={0.3} className="mt-8">
          <Link
            href="/ai-assistance"
            className="inline-flex items-center text-sm font-semibold text-[#6C5CE7] transition-colors hover:text-ink"
          >
            Explore AI Assistance →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
