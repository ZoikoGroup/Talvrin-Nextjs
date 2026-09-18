import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const pillars = [
  { title: "Evidence provenance", description: "Trace important outputs back to supporting material." },
  {
    title: "Data rights",
    description: "Respect licensing, redistribution, access and permitted-use controls.",
  },
  {
    title: "Regional governance",
    description: "Support jurisdiction-sensitive execution and data controls.",
  },
  { title: "Security", description: "Protect identities, workspaces, services and secrets." },
  {
    title: "Resilience",
    description: "Operate against defined availability, recovery and monitoring objectives.",
  },
  { title: "Privacy", description: "Minimize unnecessary collection and provide clear data controls." },
  {
    title: "AI governance",
    description: "Keep model output subordinate to evidence and policy controls.",
  },
];

export default function TrustArchitectureSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Trust Architecture</SectionEyebrow>
          <SectionHeading>Global intelligence requires global-grade controls.</SectionHeading>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.04} className="flex flex-col gap-2">
              <span className="h-0.5 w-7 bg-accent-violet" aria-hidden="true" />
              <h3 className="text-[17px] font-bold text-ink">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
