import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "../global-markets/shared";
import ReportForm from "./ReportForm";
import { IMAGE_DIR } from "./shared";

export default function ReportItSection() {
  return (
    <section id="report-it" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:items-start xl:grid-cols-[minmax(0,1fr)_minmax(0,493px)]">
        <div>
          <Reveal>
            <SectionEyebrow tone="violet">Step 2</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl">
              Report the problem.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-4">
            <ReportForm />
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative aspect-[493/193] w-full overflow-hidden rounded-2xl lg:-mt-7"
        >
          <Image
            src={`${IMAGE_DIR}/report-a-problem-report-team.webp`}
            alt="Colleagues smiling in conversation around a meeting table"
            fill
            sizes="(min-width: 1280px) 493px, (min-width: 1024px) 340px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
