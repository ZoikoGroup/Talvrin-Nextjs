import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../release-notes/shared";
import CategoryPicker from "./CategoryPicker";
import { IMAGE_DIR } from "./shared";

export default function WhatsGoingWrongSection() {
  return (
    <section id="whats-going-wrong" className="scroll-mt-32 bg-surface py-20 sm:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,900px)_minmax(0,320px)] lg:justify-between">
        <div>
          <Reveal>
            <SectionIntro eyebrow="Step 1" title="What's going wrong?">
              Pick the closest match — this is for routing only, not a diagnosis. &quot;Other&quot; is
              always available.
            </SectionIntro>
          </Reveal>

          <Reveal delay={0.1}>
            <CategoryPicker />
          </Reveal>
        </div>

        {/* Figma aligns the photo with the first row of options, not the heading. */}
        <Reveal
          delay={0.2}
          className="relative aspect-video w-full overflow-hidden rounded-2xl lg:mt-[146px] lg:aspect-[320/480]"
        >
          <Image
            src={`${IMAGE_DIR}/report-a-problem-whats-going-wrong.webp`}
            alt="Two colleagues talking across a table in a bright office"
            fill
            sizes="(min-width: 1024px) 320px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
