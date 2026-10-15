import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const pillars = [
  {
    title: "Provenance integrity",
    body: "Source identity, timing and version travel with evidence wherever it appears in the product.",
  },
  {
    title: "Data rights",
    body: "Access, preview and download are gated by confirmed licensing and entitlement.",
  },
  {
    title: "Corrections & supersession",
    body: "Amendments and replacements are recorded with links back to the earlier version.",
  },
  {
    title: "Responsible AI",
    body: "Generated interpretation is labeled distinctly and never replaces the original source.",
  },
  {
    title: "Privacy",
    body: "Research questions, evidence content and entitlements are never logged in public analytics.",
  },
];

export default function GovernanceSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow>Security, Governance &amp; Trust</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[760px]">
            Source intelligence only works if the pipeline behind it is governed.
          </SectionHeading>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 sm:mt-12 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.05 * (index + 1)}>
              <span aria-hidden="true" className="block h-0.5 w-7 bg-accent-violet" />
              <h3 className="mt-5 text-base font-bold text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
