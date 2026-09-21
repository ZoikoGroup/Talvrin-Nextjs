import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const commitments = [
  {
    title: "Coverage",
    description:
      "Alerts operate only across currently supported monitored and source capabilities. Global architecture is not universal live coverage.",
  },
  {
    title: "Freshness",
    description:
      'No "real-time" or "instant" claim publishes without an approved service SLO/SLA and data-source timing contract.',
  },
  {
    title: "No-alert meaning",
    description:
      "Absence of an alert means no alert was delivered under current configured scope — it does not prove nothing changed.",
  },
  {
    title: "Rights",
    description: "Restricted evidence remains protected in alert payloads, previews and history.",
  },
  {
    title: "Authorization",
    description:
      "Every private alert definition, event and detail endpoint performs server-side authorization.",
  },
  {
    title: "Privacy",
    description:
      "Sensitive previews default to minimum necessary context — no private notes or licensed text in uncontrolled surfaces.",
  },
  {
    title: "Recipient privacy",
    description:
      "Team and workspace recipient lists are never exposed unless the permission model explicitly allows it.",
  },
  {
    title: "Auditability",
    description:
      "Configuration, source-event and delivery versions are recorded under retention policy for governance and support.",
  },
];

export default function CoverageTrustSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="violet">Coverage, Rights &amp; Trust</SectionEyebrow>
          <SectionHeading>Truth about coverage, freshness, and privacy — stated plainly.</SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {commitments.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <span className="block h-0.5 w-7 bg-accent-violet" aria-hidden="true" />
              <h3 className="mt-4 text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
