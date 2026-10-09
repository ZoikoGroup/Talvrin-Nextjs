import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../release-notes/shared";
import ComponentDirectory from "./ComponentDirectory";
import { IMAGE_DIR } from "./shared";

export default function ComponentsSection() {
  return (
    <section id="components" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,900px)_minmax(0,357px)] lg:justify-between">
          <div>
            <Reveal>
              <SectionIntro
                eyebrow="Component Status"
                tone="amber"
                title="Public component directory."
                className="[&>p:last-child]:max-w-[700px]"
              >
                Approved public-facing service groups. Until an authoritative Status Component Registry
                is connected, every component shows an honest unknown state rather than an assumed
                healthy one.
              </SectionIntro>
            </Reveal>

            <Reveal delay={0.1}>
              <ComponentDirectory />
            </Reveal>
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-video overflow-hidden rounded-2xl lg:mt-[287px] lg:aspect-auto lg:min-h-[320px]"
          >
            <Image
              src={`${IMAGE_DIR}/system-status-components-corridor.webp`}
              alt="A professional walking through a bright office corridor"
              fill
              sizes="(min-width: 1024px) 357px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
