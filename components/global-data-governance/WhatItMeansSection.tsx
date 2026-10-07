import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { DarkNote, IMAGE_DIR } from "./shared";

export default function WhatItMeansSection() {
  return (
    <section id="what-it-means" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] xl:grid-cols-[minmax(0,780px)_minmax(0,500px)] xl:justify-between">
        <div>
          <Reveal>
            <SectionIntro
              eyebrow="Governance Follows the Evidence and the Context"
              tone="amber"
              title="Global scale should increase context and control, not ambiguity."
            >
              Jurisdiction can materially affect what information means, which source rights apply,
              how privacy or legal experiences differ, and whether a capability is available. Talvrin
              preserves that context rather than flattening it into a single global label.
            </SectionIntro>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 max-w-[745px]">
            <DarkNote label="What this does not mean">
              Global architecture does not mean every market, dataset, data-residency option,
              jurisdiction-specific control or service capability is live everywhere. Talvrin states
              released coverage and limitations explicitly rather than implying universal compliance or
              universal residency.
            </DarkNote>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[500/458] w-full max-w-[500px] overflow-hidden rounded-2xl border border-ink/10 bg-white lg:mx-0 lg:mt-3"
        >
          <Image
            src={`${IMAGE_DIR}/governance-what-it-means-review.webp`}
            alt="Two colleagues reviewing work on a laptop together"
            fill
            sizes="(min-width: 1280px) 500px, (min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
