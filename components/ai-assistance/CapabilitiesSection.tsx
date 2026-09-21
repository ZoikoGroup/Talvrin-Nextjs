import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface CapabilityCard {
  title: string;
  description: string;
  boundary: string;
}

const capabilities: CapabilityCard[] = [
  {
    title: "Discover information",
    description:
      "Help surface relevant information and evidence for a research question.",
    boundary:
      "Discovery is not proof — source authority and rights still require inspection.",
  },
  {
    title: "Organize evidence",
    description: "Help structure evidence around a research question.",
    boundary:
      "Organization must not erase provenance, timing, jurisdiction, or version.",
  },
  {
    title: "Identify changes",
    description: "Help identify changes across evidence and documents.",
    boundary:
      "A detected change is not automatically material, predictive, or investment-relevant.",
  },
  {
    title: "Explain relationships",
    description:
      "Help explain how evidence may relate to a question or other evidence.",
    boundary:
      "Relationships may be contextual or inferred and must remain distinguishable from source facts.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#6C5CE7]">
              WHAT AI ASSISTANCE CAN HELP WITH
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Six source-supported capabilities. Nothing invented beyond them.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              Talvrin AI Assistance is bounded by design. Each capability below
              has a mandatory boundary that keeps generated output from
              outrunning the evidence.
            </p>
          </Reveal>
        </div>

        {/* Grid layout: 50/50 split with flex stretching children to match heights */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Left Column: Cards Grid (2x2) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {capabilities.map((item, index) => (
              <Reveal
                key={item.title}
                delay={0.1 * (index + 1)}
                className="flex"
              >
                <div className="flex w-full flex-col justify-between rounded-2xl border border-ink/10 bg-white p-6 xl:p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div>
                    <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="text-xs font-medium leading-relaxed text-amber-700/90">
                      {item.boundary}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Column: Featured Image matching the height of the left block */}
          <Reveal delay={0.5} className="flex w-full">
            <div className="relative h-full min-h-[420px] w-full overflow-hidden rounded-2xl border border-ink/10 bg-ink/5 shadow-md">
              <Image
                src="/images/product/ai-assistance/meeting.png"
                alt="Two business professionals in a collaborative meeting discussing documents"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
