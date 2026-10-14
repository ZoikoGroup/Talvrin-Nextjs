import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

type ContractItem = {
  badge: string;
  description: string;
};

const items: ContractItem[] = [
  {
    badge: "DATA CONTRACT",
    description:
      "Source ID, publisher, type, publication and effective dates, jurisdiction, version, fetched-at and license state travel with every piece of evidence.",
  },
  {
    badge: "UNKNOWNS",
    description:
      'Unknown metadata is shown as "Not provided" or "Not verified" — never a plausible-looking placeholder.',
  },
  {
    badge: "CONFLICTS",
    description:
      "Multiple versions of a source are shown alongside an explanation of why they differ, instead of a silent majority vote.",
  },
  {
    badge: "AI LABELING",
    description:
      "Any AI summary is labeled distinctly, with the underlying source left open to inspect where rights permit.",
  },
  {
    badge: "AUTHORIZATION",
    description:
      "Licensed content access is enforced server-side; private extracts are never indexed.",
  },
];

export default function EvidenceTrustTruthSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header Block */}
        <div className="max-w-[800px]">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[1.2px] text-[#b98132]">
              EVIDENCE & TRUST TRUTH
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl font-bold leading-[1.18] tracking-tight text-[#171335] sm:text-4xl lg:text-[38px]">
              Source data is authoritative only to the
              <br />
              degree its provenance supports it.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 max-w-[780px] text-base leading-relaxed text-[#5d5a72] sm:text-[17px]">
              Research interpretation is kept separate from the evidence it draws on. Unknown metadata is shown as unknown — never a plausible-looking placeholder.
            </p>
          </Reveal>
        </div>

        {/* 5 Rows with horizontal border divider */}
        <div className="mt-12 divide-y divide-[#171335]/10 border-b border-[#171335]/10">
          {items.map((item, idx) => (
            <Reveal key={item.badge} delay={0.2 + idx * 0.05}>
              <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-6">
                {/* Fixed pill badge */}
                <div className="w-fit min-w-[150px] shrink-0 rounded-md border border-[#171335]/14 bg-[#f6f5fb] px-4 py-1.5 text-center">
                  <span className="text-[12px] font-bold tracking-wider text-[#171335]">
                    {item.badge}
                  </span>
                </div>

                {/* Description text */}
                <p className="text-[15px] leading-relaxed text-[#5d5a72]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
