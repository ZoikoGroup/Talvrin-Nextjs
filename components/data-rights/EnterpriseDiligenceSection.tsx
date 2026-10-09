import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { Pill } from "../ai-principles/shared";

const materials = [
  {
    title: "Rights registry overview",
    body: "How Talvrin maps public rights states to the authoritative rights registry.",
  },
  {
    title: "Provider & license summary",
    body: "Category-level summary of provider licensing relationships, once approved for disclosure.",
  },
  {
    title: "Redistribution & export policy",
    body: "How export, API, share and collaboration surfaces are independently rights-checked.",
  },
  {
    title: "Retention & caching policy",
    body: "Governing policy for storage and caching once an approved operational contract exists.",
  },
  {
    title: "Entitlement & workspace model",
    body: "How identity, workspace role and provider entitlement combine to govern access.",
  },
  { title: "Evidence Standards", body: "How evidence is sourced, classified, and kept inspectable." },
];

export default function EnterpriseDiligenceSection() {
  return (
    <section id="enterprise-diligence" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Procurement Without Invented Assurance"
            tone="amber"
            title="Enterprise diligence materials, once they exist."
          >
            Core rights standards stay public and ungated. Deeper provider-specific review is offered
            only once an approved diligence process exists.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {materials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="h-full">
              <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="text-[13px] leading-5 text-muted">{item.body}</p>
                <div className="mt-auto pt-2">
                  <Pill>Not yet available</Pill>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
