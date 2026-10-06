import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "../global-markets/shared";

const surfaces = [
  "Exports",
  "API responses",
  "Downloads",
  "Screenshots",
  "Alerts",
  "Email",
  "Collaboration",
  "Integrations",
];

export default function DisplayRetentionSection() {
  return (
    <section id="display-retention" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <SectionEyebrow tone="amber">Access ≠ Display ≠ Redistribution</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl sm:leading-[48px]">
            The ability to use a source does not grant the right to show, share or keep it forever.
          </h2>
          <p className="mt-4 max-w-[680px] text-base leading-7 text-muted">
            Public pages show only information explicitly approved for public display. Exports, API
            responses, downloads, screenshots, alerts, email, collaboration and integrations are
            separate distribution surfaces, and each requires its own rights check.
          </p>

          <ul aria-label="Distribution surfaces" className="flex flex-wrap justify-center gap-2.5 pb-5 pt-8">
            {surfaces.map((surface) => (
              <li
                key={surface}
                className="rounded-full border border-ink/10 bg-surface px-3.5 py-1.5 text-xs font-semibold text-ink"
              >
                {surface}
              </li>
            ))}
          </ul>

          <div className="w-full rounded-2xl bg-surface px-5 py-6 text-left sm:px-7">
            <h3 className="text-base font-bold text-ink">
              Retention and caching are governed, not promised
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Storage and caching follow applicable rights and policy. Talvrin does not publish a
              retention duration or deletion promise without an approved operational contract. Where
              historical traceability is required, permitted metadata, citation identifiers and version
              references are preserved instead of restricted content.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
