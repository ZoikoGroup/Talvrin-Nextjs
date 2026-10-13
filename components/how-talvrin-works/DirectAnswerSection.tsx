import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function DirectAnswerSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header Block */}
        <div className="max-w-[820px]">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[1.2px] text-[#6c5ce7]">
              DIRECT ANSWER
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl font-bold leading-[1.18] tracking-tight text-[#171335] sm:text-4xl lg:text-[38px]">
              Talvrin is designed around a recurring
              <br />
              evidence workflow.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 max-w-[780px] text-base leading-relaxed text-[#322e52] sm:text-[18px]">
              Ask, discover, inspect, build, monitor, and reassess. These six stages describe a continuing process — not a one-off AI answer. A research view is meant to be revisited, not retired the moment it is generated.
            </p>
          </Reveal>
        </div>

        {/* 3 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Reveal delay={0.2} className="flex">
            <div className="flex w-full flex-col justify-between rounded-[14px] border border-[#171335]/[0.08] bg-[#f6f5fb] p-6 shadow-sm transition-all duration-200 hover:border-[#171335]/20 hover:shadow-md">
              <div>
                <h3 className="text-[15px] font-bold text-[#171335]">
                  A process, not a one-off answer
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5d5a72]">
                  The workflow explicitly loops back from Reassess to a new Ask or Inspect — it is not framed as a single generated response.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={0.25} className="flex">
            <div className="flex w-full flex-col justify-between rounded-[14px] border border-[#171335]/[0.08] bg-[#f6f5fb] p-6 shadow-sm transition-all duration-200 hover:border-[#171335]/20 hover:shadow-md">
              <div>
                <h3 className="text-[15px] font-bold text-[#171335]">
                  Monitoring, not real time
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5d5a72]">
                  Talvrin describes monitoring for meaningful changes. There is no cadence promise and no claim of real-time alerts.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Image Card */}
          <Reveal delay={0.3} className="flex md:col-span-2 lg:col-span-1">
            <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[14px] border border-[#171335]/[0.08] bg-[#f6f5fb] p-3 shadow-sm transition-all duration-200 hover:border-[#171335]/20 hover:shadow-md">
              <div className="relative aspect-square w-full max-w-[380px] overflow-hidden rounded-lg">
                <Image
                  src="/images/how-talvrin-works/workflow-recurring-process.png"
                  alt="Talvrin recurring evidence workflow diagram"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
