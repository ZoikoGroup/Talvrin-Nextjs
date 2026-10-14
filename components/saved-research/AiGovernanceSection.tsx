import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const aiAllowed = [
  "Summarizing the context of a saved research view",
  "Highlighting which saved object relates to a new question",
  "Flagging that a linked source has changed since saving",
  "Explaining a saved object’s structure in plain language",
];

const aiProhibited = [
  "The original evidence itself",
  "A reconstruction of a deleted or inaccessible object",
  "A materiality or investment judgment",
  "A substitute for inspecting the current source",
];

export default function AiGovernanceSection() {
  return (
    <section className="bg-[#f6f5fb] py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">AI GOVERNANCE</SectionEyebrow>
          <SectionHeading>
            AI can summarize a saved view. It does not replace the evidence.
          </SectionHeading>
        </Reveal>

        {/* Two Columns Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: What AI may assist with */}
          <Reveal delay={0.15}>
            <div className="flex flex-col">
              <h3 className="text-sm font-bold text-[#6c5ce7]">
                Talvrin AI may assist with
              </h3>

              <ul className="mt-5 space-y-4">
                {aiAllowed.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      className="h-2 w-2 shrink-0 rounded-[2px] bg-[#6c5ce7]"
                      aria-hidden="true"
                    />
                    <span className="text-base text-[#171335]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right Column: What AI output must never be */}
          <Reveal delay={0.2}>
            <div className="flex flex-col">
              <h3 className="text-sm font-bold text-[#5d5a72]">
                AI output must never be presented as
              </h3>

              <ul className="mt-5 space-y-4">
                {aiProhibited.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full border border-[#5d5a72]"
                      aria-hidden="true"
                    />
                    <span className="text-base text-[#5d5a72]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
