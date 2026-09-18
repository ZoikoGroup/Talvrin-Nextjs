import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const audiences = [
  {
    title: "Self-Directed Investors",
    description: "Research markets across countries and asset classes without losing the source trail.",
    href: "/solutions/individual-investors",
  },
  {
    title: "Investment Professionals",
    description: "Compare markets, policy, issuers, and instruments while preserving timing and jurisdiction.",
    href: "/solutions/investment-professionals",
  },
  {
    title: "Research Teams",
    description:
      "Reuse one governed research architecture, coverage states, and evidence relationships across workflows.",
    href: "/solutions/research-teams",
  },
  {
    title: "Financial Institutions",
    description: "Scale global research without overstating coverage or violating data rights.",
    href: "/solutions/financial-institutions",
  },
];

export default function AudienceRoutingSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Audience Routing</SectionEyebrow>
          <SectionHeading>Built for people who need to know why.</SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <Reveal key={audience.title} delay={index * 0.06}>
              <div className="flex h-full flex-col rounded-[14px] border border-ink/8 bg-white p-7">
                <h3 className="text-lg font-bold text-ink">{audience.title}</h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-slate-600">
                  {audience.description}
                </p>
                <Link
                  href={audience.href}
                  className="mt-4 text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
                >
                  Learn more →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
