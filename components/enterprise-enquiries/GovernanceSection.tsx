import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const commitments = [
  {
    label: "Evidence Provenance",
    text: "Every research view traces back to named sources with timing, jurisdiction, version, and rights attached.",
  },
  {
    label: "Reviewability",
    text: "Authorized users can inspect why a view was formed — not a formal audit, approval, or compliance attestation.",
  },
  {
    label: "Institutional Memory",
    text: "Research and reasoning can be revisited across teams and time — not a legal retention or records guarantee.",
  },
  {
    label: "Global Coverage Discipline",
    text: "Talvrin is architected for global markets; actual released coverage is explicit and governed, never assumed.",
  },
  {
    label: "Human-Governed AI",
    text: "AI can discover, organize, compare and summarize evidence — it never becomes the authority or the decision-maker.",
  },
  {
    label: "Continuous Monitoring",
    text: "Meaningful evidence changes stay attached to existing research — not an operational alert system.",
  },
];

export default function GovernanceSection() {
  return (
    <section id="governance" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="max-w-[1132px]">
        <Reveal>
          <SectionEyebrow tone="amber">Research Governance, at Organization Scale</SectionEyebrow>
          <SectionHeading>Evidence stays inspectable — at any scale.</SectionHeading>
          <SectionLede>
            These commitments carry through research at organization scale, whatever an eventual enterprise
            configuration turns out to include.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.04}
              className="flex flex-col gap-2.5 rounded-xl border border-ink/10 bg-white p-5"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.6px] text-accent-violet">{item.label}</h3>
              <p className="text-sm leading-5 text-ink">{item.text}</p>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-xl border border-ink/10 bg-white lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:block"
          >
            <Image
              src={`${IMG}/enterprise-enquiries-governance-review.png`}
              alt="Three colleagues reviewing research together on a laptop"
              fill
              sizes="264px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
