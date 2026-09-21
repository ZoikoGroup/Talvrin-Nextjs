import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const classes = [
  {
    label: "Primary / official",
    description:
      "Explained as first-party or official material only where the source registry supports the class.",
    boundary: "Does not mean infallible, complete or current forever.",
  },
  {
    label: "Licensed",
    description: "Explained as access/use following licensing and entitlement rules.",
    boundary: "Never exposes content or rights not granted.",
  },
  {
    label: "Institutional / governed",
    description: "Used only where the source registry defines the classification.",
    boundary: "Does not imply endorsement of Talvrin.",
  },
  {
    label: "Other governed sources",
    description: "Describes source identity and context clearly.",
    boundary: 'Avoids vague "trusted web" language.',
  },
  {
    label: "Unknown / unclassified",
    description: "Prefers an explicit unknown/unclassified state when needed.",
    boundary: "Never auto-upgraded to an authoritative class.",
  },
];

export default function SourceClassificationSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Source Classification</SectionEyebrow>
          <SectionHeading>Evidence starts with a source you can identify.</SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-7">
            Talvrin describes evidence by provenance and context, not by marketing labels. Source
            classes are defined only to the extent the approved source registry supports them —
            never used as generic quality badges detached from the actual source relationship.
          </SectionLede>
        </Reveal>

        <div className="mt-12">
          {classes.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.04}
              className="grid grid-cols-1 gap-3 border-b border-ink/10 py-5 md:grid-cols-[180px_minmax(0,1fr)_minmax(0,1fr)] md:items-start md:gap-4"
            >
              <span className="w-fit min-w-[180px] rounded-md border border-ink/20 bg-white px-4 py-1.5 text-center text-xs font-bold text-ink">
                {item.label}
              </span>
              <p className="text-base text-slate-700">{item.description}</p>
              <p className="text-sm text-slate-600">{item.boundary}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
