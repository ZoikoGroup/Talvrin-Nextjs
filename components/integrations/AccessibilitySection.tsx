import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const commitments = [
  "WCAG 2.2 AA semantics, keyboard operation, and 200% zoom / 320px reflow across catalog, filters, and setup flows",
  "Catalog and canonical documentation links stay server-rendered and usable even if search, filters, or JavaScript fail",
  "No provider, capability, permission, credential, or commercial claim ships without an approved registry source",
  "Deprecated and withdrawn integrations carry explicit, non-color-only lifecycle treatment and lose their Connect action",
  "Disconnect/revoke is discoverable in-product and never requires contacting sales unless a genuine contractual process applies",
];

export default function AccessibilitySection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <SectionEyebrow tone="violet">Accessibility &amp; Resilience</SectionEyebrow>
          <SectionHeading>
            Built for developers who need to evaluate a connection honestly.
          </SectionHeading>
          <SectionLede className="max-w-[560px] sm:text-base sm:leading-6">
            These commitments hold from the first released integration onward — they aren&apos;t
            contingent on which connector ships first.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1}>
          <ul>
            {commitments.map((commitment) => (
              <li
                key={commitment}
                className="flex items-start gap-3 border-b border-ink/10 py-3.5 text-base text-slate-700"
              >
                <span className="text-accent-violet" aria-hidden="true">
                  ✓
                </span>
                {commitment}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
