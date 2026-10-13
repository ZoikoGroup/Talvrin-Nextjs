import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const capabilities = [
  "Discovering and organizing candidate sources",
  "Comparing documents and flagging discrepancies",
  "Explaining mechanism and context in plain language",
  "Flagging that a linked source has changed",
];

export default function ResponsibleAiSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header Block */}
        <div className="max-w-[800px]">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[1.2px] text-[#6c5ce7]">
              RESPONSIBLE AI
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl font-bold leading-[1.18] tracking-tight text-[#171335] sm:text-4xl lg:text-[38px]">
              AI can assist the workflow. The evidence
              <br />
              remains inspectable.
            </h2>
          </Reveal>
        </div>

        {/* 2-column layout */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Capabilities List */}
          <Reveal delay={0.2}>
            <div>
              <p className="text-sm font-bold text-[#6c5ce7]">
                AI can assist across every stage with
              </p>

              <ul className="mt-6 space-y-4">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-[7px] w-[7px] shrink-0 rounded-full bg-[#6c5ce7]"
                    />
                    <span className="text-base text-[#171335] sm:text-[16px]">
                      {cap}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right Column: Image */}
          <Reveal delay={0.3} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[640px] overflow-hidden rounded-2xl border border-[#171335]/[0.08] bg-[#f6f5fb] p-2 shadow-sm transition-all duration-200 hover:border-[#171335]/20 hover:shadow-md">
              <div className="relative aspect-[640/358] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/how-talvrin-works/responsible-ai-preview.png"
                  alt="Responsible AI evidence inspection preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
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
