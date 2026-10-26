import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionLede } from "./shared";
import ReportForm from "./ReportForm";

export default function ReportFormSection() {
  return (
    <section id="report-it" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:items-start xl:grid-cols-[minmax(0,720px)_minmax(0,398px)] xl:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Minimum Safe Report</SectionEyebrow>
            <h2 id="report-form-title" className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-ink sm:text-4xl">
              Report a security concern.
            </h2>
            <SectionLede className="max-w-[680px]">
              High-level details only. Exploit payloads, proof-of-concept, logs, and files move through
              an approved secure-detail channel, never through this field set.
            </SectionLede>
          </Reveal>

          <Reveal delay={0.1}>
            <ReportForm />
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative mx-auto aspect-[398/713] w-full max-w-[398px] overflow-hidden rounded-2xl lg:mx-0 lg:mt-[196px]"
        >
          <Image
            src={`${IMG}/security-contact-report-form-team.webp`}
            alt="Two colleagues reviewing a laptop screen together"
            fill
            sizes="(min-width: 1280px) 398px, (min-width: 1024px) 340px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
