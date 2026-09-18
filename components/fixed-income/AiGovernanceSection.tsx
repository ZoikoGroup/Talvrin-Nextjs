import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const rows: { may: string; mustNot: string }[] = [
  { may: "Search and evidence discovery", mustNot: "Authoritative evidence source" },
  { may: "Source summarization", mustNot: "Guaranteed fact" },
  {
    may: "Document / communication comparison",
    mustNot: "Investment advice or buy/sell/hold recommendation",
  },
  { may: "Change identification", mustNot: "Guaranteed materiality or market prediction" },
  { may: "Research organization", mustNot: "Substitute for source inspection" },
  {
    may: "Explanation / contradiction surfacing",
    mustNot: "Guarantee of completeness, accuracy, or market outcome",
  },
];

export default function AiGovernanceSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">AI Governance</SectionEyebrow>
          <SectionHeading>
            AI helps navigate the evidence. It does not become the evidence.
          </SectionHeading>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 pb-3 sm:grid-cols-2 sm:gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.72px] text-slate-600">
            AI May Assist With
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.72px] text-slate-600">
            AI Must Not Become
          </p>
        </div>

        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {rows.map((row) => (
            <div
              key={row.may}
              className="grid grid-cols-1 gap-3 py-4 sm:grid-cols-2 sm:items-start sm:gap-4"
            >
              <div className="flex items-start gap-2.5">
                <span className="mt-px text-[15px] text-accent-violet" aria-hidden="true">
                  ✓
                </span>
                <p className="text-[15px] text-ink">{row.may}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-px text-[15px] text-[#a84242]" aria-hidden="true">
                  ✕
                </span>
                <p className="text-[15px] text-slate-600">{row.mustNot}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-[780px] text-sm leading-[22.4px] text-slate-600">
          Generated or model-assisted fixed-income content carries a persistent visual provenance
          treatment distinct from source evidence. Users never need color alone to tell them apart.
        </p>
      </Container>
    </section>
  );
}
