import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const commitments = [
  "WCAG 2.2 AA semantics, keyboard operation, and 200% zoom / 320px reflow across search, navigation, and reference content",
  "Canonical reference stays server-rendered and linkable even if search, schema tooling, or JavaScript degrades",
  "Credentials, tokens, and customer data are never echoed into examples, analytics, URLs, or cached search results",
  "Deprecation and lifecycle state are always shown through text and icon, never color alone",
  "Every deep link to a heading, operation, or schema concept stays stable and shareable",
];

export default function AccessibilitySection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <SectionEyebrow tone="violet">Accessibility &amp; Resilience</SectionEyebrow>
          <SectionHeading>Built for developers who need it to just work.</SectionHeading>
          <SectionLede className="max-w-[560px] sm:text-base sm:leading-6">
            These commitments hold from the first published resource onward — they aren&apos;t
            contingent on which API ships first.
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
