import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { DarkNote, RowTable } from "./shared";

const dimensions = [
  {
    label: "Jurisdiction",
    question: "Which jurisdiction(s) are materially relevant?",
    answer:
      "Named jurisdiction or explicit global/not-applicable state; never inferred from user IP alone in copy.",
  },
  {
    label: "Market / product coverage",
    question: "Is the capability actually released?",
    answer: "Deep / Supported / Limited-Beta / Planned where publication is approved.",
  },
  {
    label: "Source / evidence",
    question: "Which source class and authority applies?",
    answer: "Link to Evidence Standards/Data Sources where supported.",
  },
  {
    label: "Rights / entitlement",
    question: "What use is permitted?",
    answer: "Summary state only; restricted details stay governed.",
  },
  {
    label: "Privacy",
    question: "Does the user/data experience materially differ?",
    answer: "Route to approved regional notice/control when live.",
  },
  {
    label: "Security",
    question: "Are regional/security claims approved?",
    answer: "Claim state and diligence route; no invented implementation.",
  },
  {
    label: "Language / locale",
    question: "Is localized content maintained?",
    answer: "Real locale variant only; canonical relationship stays explicit.",
  },
  {
    label: "Operations",
    question: "Is service capability available in the region?",
    answer: "Service Status/coverage source of truth, not marketing copy.",
  },
];

export default function GovernanceModelSection() {
  return (
    <section id="governance-model" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Intersecting Control Dimensions, Not a Map Painted Green"
            title="Eight governance dimensions, each with a required question."
          >
            Every public statement is derived from a governed registry or approved content record —
            never inferred to make the platform look more global than it is.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <RowTable
            rows={dimensions.map((d) => ({ label: d.label, cells: [d.question, d.answer] }))}
          />
        </Reveal>

        <Reveal delay={0.15} className="mt-3">
          <DarkNote label="Design intent">
            Use a matrix or layered control diagram with textual equivalents. Avoid decorative world
            maps that imply unsupported geographic coverage.
          </DarkNote>
        </Reveal>
      </Container>
    </section>
  );
}
