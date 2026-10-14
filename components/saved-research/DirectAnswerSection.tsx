import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export default function DirectAnswerSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_421px] lg:gap-12">
          {/* Left Column: Heading, Lede and Boundary Cards */}
          <div className="flex flex-col">
            <Reveal>
              <SectionEyebrow tone="violet">DIRECT ANSWER</SectionEyebrow>
              <SectionHeading>What Saved Research is for.</SectionHeading>
              <SectionLede className="text-[#322e52]">
                Saved Research is the part of the Talvrin workflow designed to help you return to preserved questions, research views and their supporting evidence context. It is where you left off — not a new editor, not a monitoring feed, and not a verdict.
              </SectionLede>
            </Reveal>

            {/* Two boundary cards side-by-side */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Reveal delay={0.15}>
                <div className="flex h-full flex-col justify-between rounded-[14px] border border-[#5d5a72]/15 bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#6c5ce7]/30 hover:shadow-md">
                  <div>
                    <h3 className="text-[15px] font-bold text-[#171335]">
                      Save vs. monitor boundary
                    </h3>
                    <p className="mt-2.5 text-sm leading-[22px] text-[#5d5a72]">
                      Saving a research object never silently activates monitoring or alerts. Save, Monitor and Review remain separate actions and separate statuses.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex h-full flex-col justify-between rounded-[14px] border border-[#5d5a72]/15 bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#6c5ce7]/30 hover:shadow-md">
                  <div>
                    <h3 className="text-[15px] font-bold text-[#171335]">
                      Snapshot vs. current boundary
                    </h3>
                    <p className="mt-2.5 text-sm leading-[22px] text-[#5d5a72]">
                      A saved view always carries its as-of date. Historical evidence is never redisplayed as if it were current, and unknown currentness is never shown as confirmed.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Visual Preview */}
          <Reveal delay={0.2} className="flex justify-center lg:justify-end">
            <div className="relative aspect-[421/378] w-full max-w-[421px] overflow-hidden rounded-[14px] border border-[#5d5a72]/15 bg-[#f6f5fb] shadow-sm">
              <Image
                src="/images/saved-research/saved-research-direct-answer.webp"
                alt="Saved Research direct answer preview"
                fill
                sizes="(max-width: 1024px) 100vw, 421px"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
