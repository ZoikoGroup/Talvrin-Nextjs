import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, UnavailablePill } from "./shared";

const resources = [
  {
    title: "Trust Center",
    body: "A consolidated view of Talvrin trust, security, and governance commitments.",
  },
  {
    title: "Security Policy",
    body: "Vulnerability-disclosure terms, researcher conduct, and any safe-harbor language, once approved.",
  },
  {
    title: "Privacy Notice",
    body: "How Talvrin handles personal data, including security-report content.",
  },
  {
    title: "Data Governance",
    body: "Global data governance and evidence-handling standards.",
  },
];

export default function TrustSecuritySection() {
  return (
    <section id="resources" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[680px]">
          <SectionEyebrow>Trust &amp; Security</SectionEyebrow>
          <SectionHeading>Trust and security resources.</SectionHeading>
          <SectionLede>
            Links appear only once their destination is approved and current — nothing below is a
            placeholder pretending to be real.
          </SectionLede>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {resources.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
                <p className="text-[15px] font-bold text-ink">{item.title}</p>
                <p className="flex-1 text-[13px] leading-[19.5px] text-muted">{item.body}</p>
                <UnavailablePill />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
