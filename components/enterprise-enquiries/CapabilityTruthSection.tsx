import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, StatusPill } from "./shared";

const capabilities: { label: string; supported: boolean }[] = [
  { label: "Evidence, research & monitoring workflow", supported: true },
  { label: "Coverage, rights & jurisdiction governance", supported: true },
  { label: "Single sign-on, SCIM, role-based admin", supported: false },
  { label: "APIs, integrations & data export", supported: false },
  { label: "Audit logs, retention & legal hold", supported: false },
  { label: "Private AI, model isolation & zero retention", supported: false },
  { label: "Data residency & dedicated deployment", supported: false },
  { label: "Security certifications, SLAs & support tiers", supported: false },
  { label: "Pricing, plans & contract terms", supported: false },
];

export default function CapabilityTruthSection() {
  return (
    <section id="capability-truth" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="max-w-[1012px]">
        <Reveal>
          <SectionEyebrow>Capability Truth</SectionEyebrow>
          <SectionHeading>What we can confirm today — and what still needs review.</SectionHeading>
          <SectionLede>
            Enterprise buyers deserve an honest capability map before a procurement conversation starts.
            Verified capabilities are shown as such; everything else is named directly rather than implied.
          </SectionLede>
        </Reveal>

        <Reveal className="mt-8">
          <ul className="flex flex-col gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10">
            {capabilities.map((capability) => (
              <li
                key={capability.label}
                className="flex flex-col gap-3 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="text-base font-semibold text-ink">{capability.label}</p>
                <StatusPill tone={capability.supported ? "teal" : "amber"} className="px-2.5 text-xs">
                  {capability.supported ? "Source-supported" : "Not established"}
                </StatusPill>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-4 max-w-[760px] text-xs leading-5 text-muted">
          &quot;Not established&quot; means the current sources don&apos;t confirm a capability — not that it will
          never exist. Tell us what your evaluation needs in the form below; it becomes part of the review.
        </p>
      </Container>
    </section>
  );
}
