import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const commitments = [
  {
    title: "Traceable evidence",
    body: "Every material research conclusion preserves a navigable or inspectable relationship back to its source, where rights permit.",
  },
  {
    title: "Explainable, not opaque, AI",
    body: "AI-assisted interpretation is kept visibly separate from primary evidence and Talvrin analysis, so the source never disappears behind the answer.",
  },
  {
    title: "Governed, not assumed, access",
    body: "Entitlements, jurisdiction and source rights are enforced server-side and disclosed plainly, not inferred from an institutional relationship.",
  },
];

export default function InstitutionalProposition() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionEyebrow>Institutional Proposition</SectionEyebrow>
          <SectionHeading>
            Research infrastructure built to be inspected, not taken on faith.
          </SectionHeading>
          <SectionLede className="max-w-[800px]">
            Three commitments shape every institutional workflow Talvrin supports, regardless of
            size or jurisdiction.
          </SectionLede>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {commitments.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="flex h-full flex-col rounded-[14px] border border-ink/10 bg-white px-7 pb-7 pt-[27.9px]"
            >
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-[22.4px] text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
