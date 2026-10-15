import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const destinations = [
  {
    title: "Research Workspace",
    body: "Owns active question and evidence exploration — where source context first gets used.",
    cta: "Open Research Workspace",
    href: "/product/research-workspace",
  },
  {
    title: "Saved Research",
    body: "Preserves the source context attached to an authored research view.",
    cta: "Open Saved Research",
    href: "/product/saved-research",
  },
  {
    title: "Monitoring",
    body: "Uses source provenance to decide what is worth watching for change.",
    cta: "Open Monitoring",
    href: "/product/monitoring",
  },
];

export default function LifecycleSection() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Connected Research Lifecycle</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading inverted className="max-w-[820px]">
            Source Intelligence explains context. It does not own research state.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-white/70">
            Each destination below owns its own part of the lifecycle — gated by
            what is actually released.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {destinations.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.05 * (index + 2)}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <span className="mt-0.5 shrink-0 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold tracking-wide text-emerald-400">
                  LIVE DESTINATION
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-5 text-white/60">{item.body}</p>
              <Link
                href={item.href}
                className="mt-4 text-xs font-semibold text-indigo-300 transition-colors hover:text-white"
              >
                {item.cta} →
              </Link>
            </Reveal>
          ))}
          <Reveal
            delay={0.3}
            className="relative aspect-[315/206] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:aspect-auto lg:min-h-[206px]"
          >
            <Image
              src="/images/product/source-intelligence/source-intelligence-lifecycle-archive.webp"
              alt="Researcher sorting through paper files at a crowded desk"
              fill
              sizes="(min-width: 1024px) 315px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
