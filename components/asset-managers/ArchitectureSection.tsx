import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const cardResearchQuestion = {
  title: "Research question",
  desc: (
    <>
      Plain-language market,
      <br />
      issuer, security, event, filing,
      <br />
      or policy question.
    </>
  ),
  caveat: "No buy/sell/hold default framing.",
};

const cardEvidenceSet = {
  title: "Evidence set",
  desc: (
    <>
      Named governed sources
      <br />
      with source class, timing,
      <br />
      jurisdiction, version, rights,
      <br />
      relationship.
    </>
  ),
  caveat: "Never hide the source behind a summary.",
};

const cardHumanAnalysis = {
  title: "Human analysis",
  desc: (
    <>
      Authored interpretation
      <br />
      where the product supports
      <br />
      authorship.
    </>
  ),
  caveat: "Not an organizational endorsement by default.",
};

const cardAiInterpretation = {
  title: "AI-assisted interpretation",
  desc: (
    <>
      Model-assisted content with
      <br />
      persistent provenance
      <br />
      treatment.
    </>
  ),
  caveat: "Never styled as evidence or investment authority.",
};

const cardUserNotes = {
  title: "User-created notes",
  desc: (
    <>
      User research content, kept
      <br />
      separate from source
      <br />
      material.
    </>
  ),
  caveat: "Never presented as source fact.",
};

const cardResearchView = {
  title: "Research view",
  desc: (
    <>
      Current synthesis,
      <br />
      supporting/challenging
      <br />
      evidence, last-reviewed
      <br />
      context.
    </>
  ),
  caveat: "Revisitable, not an automated recommendation.",
};

const cardNormalization = {
  title: "Normalization",
  desc: (
    <>
      Talvrin-derived structured
      <br />
      representation where
      <br />
      applicable.
    </>
  ),
  caveat: "Visually distinct from source.",
};

const cardMonitoring = {
  title: "Monitoring",
  desc: (
    <>
      Relevant evidence
      <br />
      dependencies and change
      <br />
      state.
    </>
  ),
  caveat: "No automatic portfolio action.",
};

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-[#F6F5FB] py-20 lg:py-24">
      <Container className="max-w-[1320px]">
        <Reveal>
          <div className="flex flex-col justify-start items-start">
            <div className="text-yellow-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide text-[#B98132]">
              RESEARCH-OBJECT ARCHITECTURE
            </div>
            <h2 className="mt-3 text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['IBM_Plex_Sans'] leading-tight lg:leading-[48.72px]">
              Evidence, interpretation, and reasoning
              <br className="hidden sm:inline" /> stay distinguishable.
            </h2>
            <p className="mt-5 max-w-[1000px] text-base sm:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed text-[#5D5A72]">
              Every research object separates source evidence from Talvrin&apos;s normalization, human analysis, AI-
              <br className="hidden md:inline" /> assisted interpretation, and user-created notes.
            </p>
          </div>
        </Reveal>

        {/* 5-Column Grid matching Figma exactly: 2 columns left, 1 column center image, 2 columns right */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 items-stretch">
          {/* Column 1 - Row 1: Research Question */}
          <Reveal delay={0.05} className="lg:col-start-1 lg:row-start-1 h-full">
            <div className="flex h-full min-h-[236px] flex-col justify-between rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-white p-6 transition-shadow hover:shadow-md">
              <div>
                <h3 className="text-base font-bold font-['IBM_Plex_Sans'] text-[#171335]">
                  {cardResearchQuestion.title}
                </h3>
                <div className="mt-2.5 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                  {cardResearchQuestion.desc}
                </div>
              </div>
              <div className="mt-4 border-t border-slate-900/10 pt-3">
                <p className="text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {cardResearchQuestion.caveat}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Column 2 - Row 1: Evidence Set */}
          <Reveal delay={0.1} className="lg:col-start-2 lg:row-start-1 h-full">
            <div className="flex h-full min-h-[236px] flex-col justify-between rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-white p-6 transition-shadow hover:shadow-md">
              <div>
                <h3 className="text-base font-bold font-['IBM_Plex_Sans'] text-[#171335]">
                  {cardEvidenceSet.title}
                </h3>
                <div className="mt-2.5 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                  {cardEvidenceSet.desc}
                </div>
              </div>
              <div className="mt-4 border-t border-slate-900/10 pt-3">
                <p className="text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {cardEvidenceSet.caveat}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Column 3 - Center Image (Spanning Row 1 and Row 2) */}
          <Reveal delay={0.15} className="sm:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2 flex h-full">
            <div className="relative aspect-[240/496] w-full min-h-[320px] lg:min-h-full overflow-hidden rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-white shadow-sm">
              <Image
                src="/asset-managers/image 74.png"
                alt="Research team member reviewing evidence architecture"
                fill
                sizes="(min-width: 1024px) 243px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Column 4 - Row 1: Human Analysis */}
          <Reveal delay={0.2} className="lg:col-start-4 lg:row-start-1 h-full">
            <div className="flex h-full min-h-[236px] flex-col justify-between rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-white p-6 transition-shadow hover:shadow-md">
              <div>
                <h3 className="text-base font-bold font-['IBM_Plex_Sans'] text-[#171335]">
                  {cardHumanAnalysis.title}
                </h3>
                <div className="mt-2.5 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                  {cardHumanAnalysis.desc}
                </div>
              </div>
              <div className="mt-4 border-t border-slate-900/10 pt-3">
                <p className="text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {cardHumanAnalysis.caveat}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Column 5 - Row 1: AI-assisted Interpretation */}
          <Reveal delay={0.25} className="lg:col-start-5 lg:row-start-1 h-full">
            <div className="flex h-full min-h-[236px] flex-col justify-between rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-white p-6 transition-shadow hover:shadow-md">
              <div>
                <h3 className="text-base font-bold font-['IBM_Plex_Sans'] text-[#171335]">
                  {cardAiInterpretation.title}
                </h3>
                <div className="mt-2.5 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                  {cardAiInterpretation.desc}
                </div>
              </div>
              <div className="mt-4 border-t border-slate-900/10 pt-3">
                <p className="text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {cardAiInterpretation.caveat}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Column 1 - Row 2: User-created Notes */}
          <Reveal delay={0.3} className="lg:col-start-1 lg:row-start-2 h-full">
            <div className="flex h-full min-h-[236px] flex-col justify-between rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-white p-6 transition-shadow hover:shadow-md">
              <div>
                <h3 className="text-base font-bold font-['IBM_Plex_Sans'] text-[#171335]">
                  {cardUserNotes.title}
                </h3>
                <div className="mt-2.5 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                  {cardUserNotes.desc}
                </div>
              </div>
              <div className="mt-4 border-t border-slate-900/10 pt-3">
                <p className="text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {cardUserNotes.caveat}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Column 2 - Row 2: Research View */}
          <Reveal delay={0.35} className="lg:col-start-2 lg:row-start-2 h-full">
            <div className="flex h-full min-h-[236px] flex-col justify-between rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-white p-6 transition-shadow hover:shadow-md">
              <div>
                <h3 className="text-base font-bold font-['IBM_Plex_Sans'] text-[#171335]">
                  {cardResearchView.title}
                </h3>
                <div className="mt-2.5 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                  {cardResearchView.desc}
                </div>
              </div>
              <div className="mt-4 border-t border-slate-900/10 pt-3">
                <p className="text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {cardResearchView.caveat}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Column 4 - Row 2: Normalization */}
          <Reveal delay={0.4} className="lg:col-start-4 lg:row-start-2 h-full">
            <div className="flex h-full min-h-[236px] flex-col justify-between rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-white p-6 transition-shadow hover:shadow-md">
              <div>
                <h3 className="text-base font-bold font-['IBM_Plex_Sans'] text-[#171335]">
                  {cardNormalization.title}
                </h3>
                <div className="mt-2.5 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                  {cardNormalization.desc}
                </div>
              </div>
              <div className="mt-4 border-t border-slate-900/10 pt-3">
                <p className="text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {cardNormalization.caveat}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Column 5 - Row 2: Monitoring */}
          <Reveal delay={0.45} className="lg:col-start-5 lg:row-start-2 h-full">
            <div className="flex h-full min-h-[236px] flex-col justify-between rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-white p-6 transition-shadow hover:shadow-md">
              <div>
                <h3 className="text-base font-bold font-['IBM_Plex_Sans'] text-[#171335]">
                  {cardMonitoring.title}
                </h3>
                <div className="mt-2.5 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                  {cardMonitoring.desc}
                </div>
              </div>
              <div className="mt-4 border-t border-slate-900/10 pt-3">
                <p className="text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {cardMonitoring.caveat}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
