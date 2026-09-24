import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const commitments = [
  "Provenance and source discipline carried through to any released developer surface",
  "Reviewable, versioned change communication rather than silent updates",
  "Human judgment remains central — AI assists, but never becomes the technical authority",
  "Global architecture stated separately from released, live coverage",
  "Self-serve public documentation, with enterprise conversations as a qualified path, not a gate",
];

export default function EnterpriseFitSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <SectionEyebrow tone="violet">Enterprise Governance Fit</SectionEyebrow>
          <SectionHeading>Built to fit a governed research estate.</SectionHeading>
          <SectionLede className="max-w-[560px] sm:text-base sm:leading-6">
            Provenance, reviewability, source discipline, global governance, and human oversight
            are treated as developer requirements, not marketing language.
          </SectionLede>
          <Link
            href="/solutions/enterprise"
            className="mt-6 inline-block text-base font-semibold text-accent-violet transition-colors hover:text-ink"
          >
            Enterprise Enquiries →
          </Link>
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
