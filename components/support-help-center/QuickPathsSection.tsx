import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../release-notes/shared";
import { CardShell, IMAGE_DIR, NotYetAvailable } from "./shared";

type QuickPath = {
  title: string;
  body: string;
  link?: { label: string; href: string };
};

const paths: QuickPath[] = [
  {
    title: "Start using Talvrin",
    body: "Onboarding and first-session orientation.",
    link: { label: "Open Getting Started", href: "/resources/getting-started" },
  },
  {
    title: "Find and inspect evidence",
    body: "Evidence discovery, source provenance and source inspection concepts.",
    link: { label: "Explore Evidence", href: "/product/evidence" },
  },
  {
    title: "Build a research view",
    body: "Research organization and evidence-linked reasoning.",
    link: { label: "See how Talvrin works", href: "/product/overview" },
  },
  {
    title: "Fix a sign-in or access issue",
    body: "Account access, profile and workspace settings.",
  },
  {
    title: "Solve a problem",
    body: "Troubleshooting and recovery path.",
    link: { label: "Go to Troubleshooting", href: "#troubleshooting" },
  },
  {
    title: "Monitor what changes",
    body: "Monitoring concepts and meaningful evidence change.",
    link: { label: "See monitoring & alerts", href: "/product/alerts" },
  },
];

function PathCard({ path }: { path: QuickPath }) {
  return (
    <CardShell muted={!path.link} className="gap-2 p-6">
      <h3 className="text-base font-bold text-ink">{path.title}</h3>
      <p className="text-sm leading-[22px] text-muted">{path.body}</p>
      <div className="mt-auto pt-2">
        {path.link ? (
          <Link
            href={path.link.href}
            className="text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
          >
            {path.link.label} →
          </Link>
        ) : (
          <NotYetAvailable className="text-[11px]" />
        )}
      </div>
    </CardShell>
  );
}

export default function QuickPathsSection() {
  return (
    <section id="quick-paths" className="scroll-mt-32 bg-surface py-20">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Quick Paths" title="Tell us what you're trying to do.">
            Task-first routes to the right guidance — no need to know Talvrin&apos;s internal
            structure first.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {paths.slice(0, 3).map((path, index) => (
            <Reveal key={path.title} delay={index * 0.05} className="h-full">
              <PathCard path={path} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative order-last aspect-[16/9] overflow-hidden rounded-2xl border border-ink/10 sm:col-span-2 lg:order-none lg:col-span-1 lg:row-span-2 lg:aspect-auto"
          >
            <Image
              src={`${IMAGE_DIR}/help-center-quick-paths-meeting.webp`}
              alt="An adviser smiling as she walks colleagues through work on a laptop at a meeting table"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          {paths.slice(3).map((path, index) => (
            <Reveal key={path.title} delay={(index + 3) * 0.05} className="h-full">
              <PathCard path={path} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
