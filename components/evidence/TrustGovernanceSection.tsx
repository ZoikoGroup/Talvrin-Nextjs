import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const controls = [
  {
    title: "Evidence provenance",
    description:
      "Source origin, timing, context, relationship and inspectability visible where relevant.",
  },
  {
    title: "Data rights",
    description: "Licensing, entitlement and permitted-use requirements respected.",
  },
  {
    title: "Security",
    description: "Protect source connectors, user identities, workspaces and sensitive parameters.",
  },
  {
    title: "Privacy",
    description: "Minimize collection — no raw research or source content in public-page analytics.",
  },
  {
    title: "Responsible AI",
    description: "Generated interpretation stays distinguishable from evidence.",
  },
  {
    title: "Coverage truth",
    description:
      "Source and market availability reflects released coverage, not architectural aspiration.",
  },
  {
    title: "Operational transparency",
    description: "Unavailable, restricted, stale or failed states are communicated honestly.",
  },
  {
    title: "Human judgment",
    description:
      "No evidence relationship or AI output becomes investment advice by presentation.",
  },
];

export default function TrustGovernanceSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="amber">Trust, Rights &amp; Governance</SectionEyebrow>
          <SectionHeading>Global intelligence requires global-grade controls.</SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {controls.map((control, index) => (
            <Reveal key={control.title} delay={index * 0.04}>
              <span className="block h-0.5 w-7 bg-accent-violet" aria-hidden="true" />
              <h3 className="mt-4 text-base font-bold text-ink">{control.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{control.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
