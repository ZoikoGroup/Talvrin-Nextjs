import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { DotList, IMAGE_DIR } from "./shared";

const rules = [
  "Where a source provides revision/version semantics, the evidence card or timeline exposes current vs. prior, superseded or corrected state.",
  "A corrected or superseded source must not silently overwrite the research trail when retention and rights permit lineage to remain visible.",
  "The research object records which version was used at the relevant time, so later reassessment can explain why a view changed.",
  "If lineage cannot be established, the product shows an honest unknown/unavailable state rather than inferring one.",
  "Version history is not a promise of indefinite retention; retention depends on approved product, rights and governance policy.",
];

export default function LineageSection() {
  return (
    <section id="lineage" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Lineage Without Rewriting History"
            tone="amber"
            title="A superseded source stays traceable — it never silently disappears."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-6">
          <Reveal delay={0.1}>
            <DotList items={rules} tone="violet" />
          </Reveal>
          <Reveal
            delay={0.15}
            className="relative aspect-[621/313] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src={`${IMAGE_DIR}/evidence-standards-lineage-meeting.webp`}
              alt="A team meeting around a table seen through blurred glass"
              fill
              sizes="(min-width: 1024px) 621px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
