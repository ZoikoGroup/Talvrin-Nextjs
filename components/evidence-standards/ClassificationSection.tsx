import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { Banner } from "../data-rights/shared";
import { IMAGE_DIR } from "./shared";

export default function ClassificationSection() {
  return (
    <section id="classification" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Classification, Not a Quality Score"
            tone="amber"
            title="Five registry-backed source classes."
          >
            Source class is descriptive provenance metadata. It does not imply that every
            &quot;official&quot;, &quot;licensed&quot; or &quot;institutional&quot; source is complete,
            current, or superior in every context.
          </SectionIntro>
        </Reveal>
        <Reveal delay={0.1} className="mt-4">
          <Banner
            src={`${IMAGE_DIR}/evidence-standards-classification-workshop.webp`}
            alt="A large group of colleagues talking and laughing in a workshop room"
            ratio="aspect-[1279/375]"
            className="border border-ink/10 bg-white"
          />
        </Reveal>
      </Container>
    </section>
  );
}
