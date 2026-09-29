import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import ClaimTable, { type ClaimRow } from "./ClaimTable";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows: ClaimRow[] = [
  {
    label: "Central-Bank Communication",
    explains:
      "Source-linked statement/communication, comparison, chronology, evidence relationship.",
    assumes: "Next-meeting prediction presented as Talvrin fact.",
  },
  {
    label: "Policy Decisions",
    explains: "Official decision/evidence and its context.",
    assumes: "Guaranteed market direction.",
  },
  {
    label: "Fiscal Policy",
    explains: "Governed evidence relevant to research.",
    assumes: "Political advocacy or investment advice.",
  },
  {
    label: "Regulatory Notice",
    explains: "Official notice and jurisdiction context.",
    assumes: "Legal advice or unsupported applicability conclusion.",
  },
];

export default function PolicyContractSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Central-Bank &amp; Policy Contract</SectionEyebrow>
          <SectionHeading inverted>
            Official communication and policy evidence — never a rate call.
          </SectionHeading>
          <SectionLede inverted className="max-w-[860px] sm:text-base sm:leading-7">
            Central-bank statements, policy decisions, fiscal-policy evidence, and regulatory
            notices are shown as source-linked evidence, connected to research context — never as a
            prediction of the next decision or a guaranteed market direction.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <ClaimTable rows={rows} inverted headings={["Allowed", "Forbidden"]} />
        </div>
      </Container>
    </section>
  );
}
