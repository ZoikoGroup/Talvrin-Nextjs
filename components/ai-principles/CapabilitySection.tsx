import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR } from "./shared";

export default function CapabilitySection() {
  return (
    <section id="assistance-scope" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Capability Class, Not a Promise"
            tone="amber"
            title="What AI may assist with — and what that does not promise."
          >
            Each row names a principle-level capability class. Current availability in any given
            workflow depends on the approved product capability registry, not this page.
          </SectionIntro>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-6 aspect-[1280/639] min-h-[220px] w-full overflow-hidden rounded-2xl border border-ink/10 bg-white"
        >
          <Image
            src={`${IMAGE_DIR}/ai-principles-capability-boardroom.webp`}
            alt="A senior professional leading a discussion at a round meeting table"
            fill
            sizes="(min-width: 1310px) 1246px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.15} className="mt-3 max-w-[780px]">
          <p className="text-xs leading-5 text-muted">
            Never added without registry confirmation: autonomous trading, portfolio construction,
            personalized recommendations, model agents, auto-filing, or predictive market calls.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
