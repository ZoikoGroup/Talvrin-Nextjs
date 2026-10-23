import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const stakeholders = [
  {
    role: "Head of Research",
    question: "Can our analysts reproduce outputs and inspect the original evidence?",
    link: { label: "View methodology", href: "/research/talvrin-methodology" },
  },
  {
    role: "Data / Platform Lead",
    question: "What interfaces, coverage, provenance and restrictions actually exist today?",
    link: { label: "Review approved capabilities", href: "#capability-model" },
  },
  {
    role: "Risk / Governance Lead",
    question: "How are corrections, permissions, source rights and audit records handled?",
    link: { label: "View published controls", href: "#governance" },
  },
];

export default function StakeholdersSection() {
  return (
    <section className="bg-surface py-16 sm:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_302px] lg:gap-6">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Who this page is for</SectionEyebrow>
            <SectionHeading className="max-w-[760px]">
              Four questions institutional stakeholders ask before anything else.
            </SectionHeading>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {stakeholders.map((s, i) => (
              <Reveal
                key={s.role}
                as="article"
                delay={i * 0.08}
                className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-accent-violet">
                  {s.role}
                </p>
                <p className="mt-2.5 flex-1 pb-6 text-base leading-6 text-slate-700">
                  {s.question}
                </p>
                <Link
                  href={s.link.href}
                  className="text-sm font-semibold text-ink transition-colors hover:text-accent-violet"
                >
                  {s.link.label} →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="relative hidden aspect-[302/350] overflow-hidden rounded-2xl border border-ink/10 lg:block"
        >
          <Image
            src={`${IMG}/fi-stakeholders-atrium.webp`}
            alt="Group of colleagues talking in a bright glass atrium"
            fill
            sizes="302px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
