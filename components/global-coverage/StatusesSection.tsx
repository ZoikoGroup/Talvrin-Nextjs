import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LabelledRows, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const states = [
  {
    label: "SUPPORTED",
    badge: "bg-accent-violet/10 border-accent-violet/30 text-accent-violet",
    body: "The region, institution, or source is published and currently accessible within its stated scope.",
  },
  {
    label: "LIMITED",
    badge: "bg-accent-amber/10 border-accent-amber/30 text-accent-amber",
    body: "Available with explicit scope or depth limitations, shown directly beside the status rather than in a tooltip.",
  },
  {
    label: "NOT CURRENTLY AVAILABLE",
    badge: "bg-surface border-slate-600/25 text-slate-600",
    body: "Prepared or planned, but not released. Never shown as a clickable live destination.",
  },
  {
    label: "UNKNOWN",
    badge: "bg-surface border-slate-600/20 text-slate-600",
    body: "No verified registry record exists yet. Stated as unknown rather than guessed or omitted.",
  },
];

export default function StatusesSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow>Coverage definition &amp; statuses</SectionEyebrow>
          <SectionHeading>
            Four published availability states. No region is assumed covered by default.
          </SectionHeading>
          <SectionLede>
            Every geographic, institutional, or language/region record on this page carries one of
            the states below, sourced from the same governed registry used across Talvrin.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <LabelledRows rows={states} />
        </Reveal>
      </Container>
    </section>
  );
}
