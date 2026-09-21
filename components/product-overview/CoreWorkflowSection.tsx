import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    step: "RESEARCH",
    title: "Start with a question.",
    description:
      "Begin with a market, issuer, instrument, event, filing, policy issue, or research question — creating a structured research object rather than an isolated chat answer.",
  },
  {
    step: "VERIFY",
    title: "Inspect the evidence.",
    description:
      "See what supports, contradicts, updates, or contextualizes the view, while source authority, timing, jurisdiction, version, and rights/access remain visible.",
  },
  {
    step: "MONITOR",
    title: "Know when it changes.",
    description:
      "Keep the research object connected to monitored evidence and surface governed deltas when facts or assumptions materially change.",
  },
];

const loopSteps = [
  "ASK",
  "DISCOVER",
  "INSPECT",
  "UNDERSTAND",
  "BUILD",
  "MONITOR",
  "REASSESS",
];

export default function CoreWorkflowSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-amber-600">
              CORE WORKFLOW
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Research. Verify. Monitor.
            </h2>
          </Reveal>
        </div>

        {/* Top Row: 3 Cards + 1 Image */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((item, index) => (
            <Reveal key={item.step} delay={0.1 * (index + 1)} className="flex">
              <div className="flex w-full flex-col justify-between rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 shadow-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[1px] text-[#6C5CE7]">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Featured Image Card */}
          <Reveal delay={0.4} className="flex">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm md:aspect-auto">
              <Image
                src="/images/product/overview/meeting.png"
                alt="Colleagues collaborating over charts and laptops during a research workflow session"
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Bottom Loop Bar: Extended Research Loop */}
        <div className="mt-12">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-ink/50">
              EXTENDED RESEARCH LOOP
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3"
          >
            {loopSteps.map((loopItem, index) => (
              <div key={loopItem} className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-bold tracking-wide text-ink shadow-2xs">
                  {loopItem}
                </span>
                {index < loopSteps.length - 1 && (
                  <span className="text-sm font-semibold text-ink/30">→</span>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
