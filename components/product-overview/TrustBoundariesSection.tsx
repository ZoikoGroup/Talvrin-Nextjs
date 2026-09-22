import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface TrustBoundaryRow {
  trust: string;
  mustNot: string;
}

const trustBoundaryItems: TrustBoundaryRow[] = [
  {
    trust: "Trace important information back to its source where permitted.",
    mustNot: "That Talvrin removes market uncertainty.",
  },
  {
    trust:
      "Rely on licensing, entitlement, and permitted-use rules being respected.",
    mustNot: "That every source is accessible to every user.",
  },
  {
    trust:
      "Expect generated interpretation to remain distinguishable from evidence.",
    mustNot: "That fluent AI output is authoritative.",
  },
  {
    trust:
      "Expect coverage and availability claims to reflect released reality.",
    mustNot: "That global architecture means universal live coverage.",
  },
  {
    trust:
      "Remain responsible for their own investment or professional decisions.",
    mustNot:
      "That Talvrin provides personalized investment advice or guaranteed outcomes.",
  },
];

export default function TrustBoundariesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-amber-600">
              TRUST & BOUNDARIES
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-[44px]">
              What you can trust, and what Talvrin will never imply.
            </h2>
          </Reveal>
        </div>

        {/* Two-Column Comparison Table View */}
        <div className="mt-16">
          {/* Table Headers */}
          <div className="grid grid-cols-1 gap-6 pb-4 border-b border-ink/15 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[1.2px] text-ink/50">
                USERS CAN TRUST
              </span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[1.2px] text-ink/50">
                TALVRIN MUST NOT IMPLY
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-ink/10">
            {trustBoundaryItems.map((item, index) => (
              <Reveal key={item.trust} delay={0.05 * (index + 1)}>
                <div className="grid grid-cols-1 gap-4 py-5 lg:grid-cols-2 lg:gap-8 lg:items-center">
                  {/* Left Column: Trust item with checkmark */}
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#6C5CE7] text-xs font-bold">
                      ✓
                    </span>
                    <p className="text-sm font-medium text-ink sm:text-base">
                      {item.trust}
                    </p>
                  </div>

                  {/* Right Column: Must Not Imply item with cross */}
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-rose-500 text-xs font-bold">
                      ✕
                    </span>
                    <p className="text-sm text-ink/70 sm:text-base">
                      {item.mustNot}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
