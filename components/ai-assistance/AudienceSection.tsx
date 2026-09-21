import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface AudienceCard {
  title: string;
  description: string;
}

const audienceItems: AudienceCard[] = [
  {
    title: "Self-Directed Investors",
    description:
      "Use AI to work through evidence — not to be told what to buy — with visible source inspection and a clear no-recommendation boundary.",
  },
  {
    title: "Investment Professionals",
    description:
      "Accelerate source-linked comparison, summarization, and change identification with reviewable provenance at every step.",
  },
  {
    title: "Research Teams",
    description:
      "Review and reuse AI-assisted output without losing the source context that supports it, connected to Research Workspace and Evidence.",
  },
  {
    title: "Financial Institutions",
    description:
      "Evaluate AI governance, rights discipline, and reviewability alongside transparent capability and coverage boundaries.",
  },
];

export default function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div>
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-amber-600">
              WHO IT IS FOR
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Built for people who need to know why.
            </h2>
          </Reveal>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audienceItems.map((item, index) => (
            <Reveal key={item.title} delay={0.1 * (index + 1)} className="flex">
              <div className="flex w-full flex-col rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <h3 className="text-[18px] font-bold text-ink">{item.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
