import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { situations } from "./data";
import { IMG, SectionEyebrow, SectionHeading, SectionLede, StatusPill } from "./shared";

export default function SituationSection() {
  return (
    <section id="situations" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="max-w-[1132px]">
        <Reveal>
          <SectionEyebrow>Journalist Situation</SectionEyebrow>
          <SectionHeading>Choose the situation closest to yours.</SectionHeading>
          <SectionLede>
            It becomes the enquiry category below, so your request reaches the right accountable reviewer
            the first time — not a general queue.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {situations.map((situation, index) => (
            <Reveal key={situation.value} delay={index * 0.04} className="flex">
              <Link
                href={situation.otherRoute ?? "#send-enquiry"}
                className="flex w-full flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-5 transition-colors hover:border-ink/25 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="text-base font-bold text-ink">{situation.title}</span>
                  {situation.otherRoute && <StatusPill>Other route</StatusPill>}
                </span>
                <span className="text-xs leading-5 text-muted">{situation.description}</span>
              </Link>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-xl border border-ink/10 bg-surface lg:col-start-4 lg:row-span-3 lg:row-start-1 lg:block"
          >
            <Image
              src={`${IMG}/press-enquiries-situation-meeting.png`}
              alt="Three colleagues in conversation around a wooden table"
              fill
              sizes="264px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
