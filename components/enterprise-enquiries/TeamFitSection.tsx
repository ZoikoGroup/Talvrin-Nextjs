import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { teamFits } from "./data";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export default function TeamFitSection() {
  return (
    <section id="team-fit" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="max-w-[1132px]">
        <Reveal>
          <SectionEyebrow>Buyer and Team Fit</SectionEyebrow>
          <SectionHeading>Built for teams evaluating research at organization scale.</SectionHeading>
          <SectionLede>
            Choose the description closest to your team. It becomes the enquiry category below so your message
            reaches the right reviewer the first time.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamFits.map((fit, index) => (
            <Reveal key={fit.value} delay={index * 0.04} className="flex">
              <a
                href="#start-enquiry"
                className="flex w-full flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-5 transition-colors hover:border-ink/25 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <span className="text-base font-bold text-ink">{fit.title}</span>
                <span className="text-xs leading-5 text-muted">{fit.description}</span>
              </a>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-xl border border-ink/10 bg-surface lg:col-start-4 lg:row-span-3 lg:row-start-1 lg:block"
          >
            <Image
              src={`${IMG}/enterprise-enquiries-team-fit-office.png`}
              alt="A research team talking together in a bright open-plan office"
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
