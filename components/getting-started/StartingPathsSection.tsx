import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const paths = [
  {
    title: "Self-Directed Investor",
    body: "Learn a disciplined way to investigate a market question.",
    emphasis: "Emphasis: Evidence vs. commentary, assumptions, uncertainty, source inspection, monitoring changes.",
    linkLabel: "Explore Investment Professionals",
    href: "/solutions/investment-professionals",
  },
  {
    title: "Investment Professional",
    body: "Move quickly from question to reviewable evidence.",
    emphasis: "Emphasis: Source authority, timing, jurisdiction, version, evidence relationship, reproducibility.",
    linkLabel: "Explore the Platform",
    href: "/product/platform-overview",
  },
  {
    title: "Research Team",
    body: "Create research that remains reviewable and reusable.",
    emphasis: "Emphasis: Provenance, institutional memory, collaboration concepts, change monitoring.",
    linkLabel: "Explore Research Teams",
    href: "/solutions/research-teams",
  },
];

export default function StartingPathsSection() {
  return (
    <section id="starting-paths" className="scroll-mt-32 bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Choose a Starting Path</SectionEyebrow>
          <SectionHeading>Optional routing, not a gate.</SectionHeading>
          <p className="mt-3 max-w-[720px] text-base leading-[25.6px] text-slate-600 sm:text-lg">
            A path is a convenience — you can switch, skip, or ignore it. None of these imply
            availability beyond what&rsquo;s confirmed.
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((path, index) => (
            <Reveal
              key={path.title}
              delay={index * 0.08}
              className="flex h-full flex-col rounded-[14px] border border-ink/10 bg-surface px-[24px] py-[26px]"
            >
              <h3 className="text-[17px] font-bold text-ink">{path.title}</h3>
              <p className="mt-2 text-sm leading-[21.7px] text-slate-600">{path.body}</p>
              <p className="mt-3 flex-1 text-[13px] leading-[19.5px] text-[#8a8599]">
                {path.emphasis}
              </p>
              <Link
                href={path.href}
                className="mt-4 text-sm font-semibold text-accent-violet hover:text-brand"
              >
                {path.linkLabel} →
              </Link>
            </Reveal>
          ))}

          <Reveal
            delay={0.24}
            className="relative hidden min-h-[253px] overflow-hidden rounded-[14px] border border-ink/10 lg:block"
          >
            <Image
              src="/images/getting-started/getting-started-starting-paths.webp"
              alt="A researcher at the start of a new research path"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
