import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const rules = [
  {
    title: "Last verified",
    body: "A timestamp tied to an actual governance verification event — never a cosmetic page-updated date.",
  },
  {
    title: "Effective period",
    body: "When a status or scope change actually applies, shown only where meaningful.",
  },
  {
    title: "Status changed",
    body: "Previous and current states are recorded; public history is shown only where release-note policy approves.",
  },
  {
    title: "Rights changed",
    body: "Access can change independently of the coverage label and is propagated without delay.",
  },
  {
    title: "Claim ownership",
    body: "Every visible claim traces to a named Product, Data Rights, Legal/Privacy, or Content owner.",
  },
  {
    title: "Rollback",
    body: "An incorrect or expired claim is corrected or unpublished rather than left live.",
  },
];

export default function GovernanceSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow>Release &amp; currentness governance</SectionEyebrow>
          <SectionHeading inverted className="max-w-[760px]">
            Coverage claims are owned, timestamped, and correctable.
          </SectionHeading>
        </Reveal>

        <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {rules.map((r, i) => (
            <Reveal key={r.title} delay={(i % 5) * 0.05} className="flex flex-col gap-1.5">
              <dt className="text-base font-bold text-white">{r.title}</dt>
              <dd className="text-sm leading-[22px] text-white/70">{r.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
