import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const steps = [
  {
    title: "Ask",
    kicker: "Frame a market, issuer, security, economic event, or policy question.",
    body: "Start with a neutral, investigable question. Capture assumptions separately from evidence.",
  },
  {
    title: "Discover",
    kicker: "Find relevant evidence and context.",
    body: "Use governed source discovery, prioritizing authoritative or appropriately licensed inputs where relevant.",
  },
  {
    title: "Inspect",
    kicker: "Open and review underlying sources.",
    body: "Check source identity, original material, publication time, effective period, jurisdiction, version, and rights.",
  },
  {
    title: "Understand",
    kicker: "See how evidence relates to the question.",
    body: "Distinguish support, contradiction, update, and context; keep source facts separate from interpretation.",
  },
  {
    title: "Build",
    kicker: "Develop and preserve a research view.",
    body: "Connect conclusions and assumptions back to evidence so the view can be reviewed later.",
  },
  {
    title: "Monitor",
    kicker: "Continue watching evidence and assumptions.",
    body: "Focus on meaningful changes, not notification volume.",
  },
  {
    title: "Reassess",
    kicker: "Return when the evidence base changes.",
    body: "Review what changed, inspect the new source, and decide whether the research view requires revision.",
  },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="scroll-mt-32 bg-surface py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_343px] lg:items-start lg:gap-6">
        <div>
          <Reveal className="max-w-[760px]">
            <SectionEyebrow tone="amber">The Seven-Step Research Workflow</SectionEyebrow>
            <SectionHeading>A research view should not end when an answer appears.</SectionHeading>
            <p className="mt-3 max-w-[720px] text-base leading-[25.6px] text-slate-600 sm:text-lg">
              Talvrin&rsquo;s model is continuous: Ask → Discover → Inspect → Understand → Build →
              Monitor → Reassess.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-4">
            {steps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={Math.min(index * 0.05, 0.3)}
                className="flex items-start gap-5 rounded-[14px] border border-ink/10 bg-white p-[27px]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-accent-violet/10">
                  <span className="text-[15px] font-bold text-accent-violet">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-[6px]">
                  <h3 className="text-[17px] font-bold text-ink">{step.title}</h3>
                  <p className="text-sm font-semibold text-accent-violet">{step.kicker}</p>
                  <p className="pt-[2px] text-[15px] leading-[24px] text-slate-600">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="relative hidden aspect-[343/474] overflow-hidden rounded-2xl bg-surface lg:sticky lg:top-32 lg:block"
        >
          <Image
            src="/images/getting-started/getting-started-workflow-team.webp"
            alt="A research team collaborating around a shared screen"
            fill
            sizes="343px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
