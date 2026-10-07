import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { DotList, IMAGE_DIR } from "./shared";

const rules = [
  "A descriptive deep link or governed viewer route is used — never a tiny icon as the only control.",
  "If external, the user is told they are leaving Talvrin, without creating warning fatigue.",
  "If access is restricted, the state and next permitted action are explained — never a broken or dead link.",
  "Source-open events never leak sensitive query, entitlement, token or internal identifier data into analytics.",
];

export default function SourceOpenSection() {
  return (
    <section id="source-open" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Inspectable, Accessible, Honest About Limits"
            tone="amber"
            title="The source should never disappear behind the answer."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
          <Reveal delay={0.1}>
            <DotList items={rules} tone="amber" />
          </Reveal>
          <Reveal delay={0.15} className="relative aspect-[610/216] min-h-[180px] w-full overflow-hidden rounded-2xl">
            <Image
              src={`${IMAGE_DIR}/evidence-standards-source-open-conversation.webp`}
              alt="Two colleagues chatting over coffee on a sofa"
              fill
              sizes="(min-width: 1024px) 610px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
