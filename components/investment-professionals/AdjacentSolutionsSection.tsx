import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const solutions = [
  {
    title: "Individual Investors",
    body: "Evidence-led research for serious self-directed investors.",
    href: "/solutions/individual-investors",
  },
  {
    title: "Research Teams",
    body: "Repeatable, collaborative, monitored research workflows.",
    href: "/solutions/research-teams",
  },
  {
    title: "Financial Institutions",
    body: "Governed, scalable, reviewable research across teams and markets.",
    href: "/solutions/financial-institutions",
  },
  {
    title: "Wealth & Advisory Research",
    body: "Evidence-led market intelligence supporting analysis and client research processes.",
    href: "/solutions/wealth-advisory",
  },
];

export default function AdjacentSolutionsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[900px]">
          <SectionEyebrow tone="violet">Adjacent Solutions</SectionEyebrow>
          <SectionHeading>
            Need team, organization, or institution scale? Find the right fit.
          </SectionHeading>
        </Reveal>

        {/* The photo column would squeeze the cards to ~245px at 1024, so it
            only sits beside them from xl. */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,626px)]">
          {solutions.map((solution, index) => (
            <Reveal
              key={solution.title}
              delay={index * 0.05}
              className="flex flex-col rounded-2xl border border-ink/10 bg-surface p-6"
            >
              <h3 className="text-base font-bold text-ink">{solution.title}</h3>
              <p className="mt-2.5 text-sm leading-5 text-slate-600">{solution.body}</p>
              <Link
                href={solution.href}
                className="mt-auto pt-4 text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
              >
                Learn more →
              </Link>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative aspect-[626/397] w-full max-w-[626px] overflow-hidden rounded-2xl sm:col-span-2 xl:col-span-1 xl:col-start-3 xl:row-span-2 xl:row-start-1 xl:aspect-auto xl:max-w-none"
          >
            <Image
              src="/images/solutions/investment-professionals/ip-adjacent-cafe.webp"
              alt="Two colleagues working on a laptop at a cafe table"
              fill
              sizes="(min-width: 640px) 626px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
