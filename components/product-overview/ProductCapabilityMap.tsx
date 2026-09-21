import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface ModuleCard {
  title: string;
  description: string;
  disclaimer: string;
  href: string;
  linkText: string;
}

const modules: ModuleCard[] = [
  {
    title: "Research Workspace",
    description:
      "Organize a research question, evidence, context, notes, and a research view that can be revisited.",
    disclaimer:
      "Does not invent collaboration, export, or storage capabilities.",
    href: "/research-workspace",
    linkText: "Explore Research Workspace →",
  },
  {
    title: "Evidence",
    description:
      "Keep important claims connected to named, contextualized, inspectable sources.",
    disclaimer:
      "Does not imply unrestricted access to licensed or restricted content.",
    href: "/evidence",
    linkText: "Explore Evidence →",
  },
  {
    title: "Alerts",
    description:
      "Communicate approved monitored events through released notification rules.",
    disclaimer: "Does not invent triggers, channels, or delivery guarantees.",
    href: "/alerts",
    linkText: "Explore Alerts →",
  },
  {
    title: "AI Assistance",
    description:
      "Help discover, organize, compare, summarize, and interrogate evidence while keeping sources separately inspectable.",
    disclaimer:
      "AI is not evidence, advice, or a substitute for human judgment.",
    href: "/ai-assistance",
    linkText: "Explore AI Assistance →",
  },
];

export default function ProductCapabilityMap() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 10% 10%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 90% 90%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#6C5CE7]">
              PRODUCT CAPABILITY MAP
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[52px]">
              One evidence-led system, six connected modules.
            </h2>
          </Reveal>
        </div>

        {/* Main Grid Layout: 2x2 cards on left, large meeting image on right */}
        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-center">
          {/* Left Column: 2x2 Grid of Module Cards (7 cols) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {modules.map((item, index) => (
              <Reveal
                key={item.title}
                delay={0.05 * (index + 1)}
                className="flex"
              >
                <div className="flex w-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xs transition-colors hover:bg-white/[0.07]">
                  <div>
                    <h3 className="text-[17px] font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/72">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-white/10">
                    <p className="text-xs leading-relaxed text-[#B98132] font-medium">
                      {item.disclaimer}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-4 inline-block text-sm font-semibold text-[#B4A8FF] transition-colors hover:text-white"
                    >
                      {item.linkText}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Column: Feature Image (5 cols) */}
          <Reveal delay={0.3} className="lg:col-span-5">
            <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="/images/product/overview/map.png"
                alt="Three professionals analyzing data and documents collaboratively around a desk with laptops"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
