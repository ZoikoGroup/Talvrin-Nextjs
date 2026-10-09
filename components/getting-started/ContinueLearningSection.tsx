import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

type Resource = {
  title: string;
  body: string;
  badge?: "current" | "unavailable";
  linkLabel?: string;
  href?: string;
};

const resources: Resource[] = [
  {
    title: "Help Center",
    body: "Task support, troubleshooting, recovery, and cross-resource discovery.",
    badge: "unavailable",
  },
  {
    title: "Getting Started",
    body: "Orientation and the first-workflow mental model.",
    badge: "current",
  },
  {
    title: "Documentation",
    body: "Product and reference detail and implementation guidance.",
    linkLabel: "Open",
    href: "/resources/documentation",
  },
];

const resourcesRow2: Resource[] = [
  {
    title: "Glossary",
    body: "Stable definitions for Talvrin and market/evidence terminology.",
    badge: "unavailable",
  },
  {
    title: "FAQs",
    body: "Direct answers to common product, evidence, AI, coverage, and support questions.",
    linkLabel: "Open",
    href: "/resources/faqs",
  },
  {
    title: "Release Notes",
    body: "Material product changes and update history.",
    badge: "unavailable",
  },
];

function Badge({ kind }: { kind: NonNullable<Resource["badge"]> }) {
  return (
    <span
      className={clsx(
        "shrink-0 rounded-full px-2 py-[3px] text-[10px] font-bold tracking-[0.4px]",
        kind === "current" ? "bg-accent-violet/12 text-[#5a48d8]" : "bg-accent-amber/14 text-[#8a5a00]"
      )}
    >
      {kind === "current" ? "CURRENT PAGE" : "NOT YET AVAILABLE"}
    </span>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="flex h-full flex-col gap-[7px] rounded-xl border border-ink/10 bg-white px-[21px] py-[23px]">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-bold text-ink">{resource.title}</h3>
        {resource.badge && <Badge kind={resource.badge} />}
      </div>
      <p className="flex-1 text-[13px] leading-[19.5px] text-slate-600">{resource.body}</p>
      {resource.linkLabel && resource.href && (
        <Link href={resource.href} className="text-[13px] font-semibold text-accent-violet hover:text-brand">
          {resource.linkLabel} →
        </Link>
      )}
    </div>
  );
}

export default function ContinueLearningSection() {
  return (
    <section id="learn-more" className="scroll-mt-32 bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Continue Learning</SectionEyebrow>
          <SectionHeading>Where each Resources page picks up.</SectionHeading>
          <p className="mt-3 max-w-[720px] text-base leading-[25.6px] text-slate-600 sm:text-lg">
            Getting Started teaches the workflow once. Everything else routes deeper without
            repeating it.
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <Reveal key={resource.title} delay={index * 0.05} className="h-full">
              <ResourceCard resource={resource} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-xl border border-ink/10 lg:row-span-2 lg:block"
          >
            <Image
              src="/images/getting-started/getting-started-continue-learning.webp"
              alt="A preview of the Talvrin research guides library"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
            <span className="sr-only">Research Guides</span>
          </Reveal>

          {resourcesRow2.map((resource, index) => (
            <Reveal key={resource.title} delay={(index + 3) * 0.05} className="h-full">
              <ResourceCard resource={resource} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
