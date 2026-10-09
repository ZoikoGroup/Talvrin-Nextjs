import { ReactNode } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, CardLink } from "./shared";

type QuickPathItem = {
  title: string;
  description: ReactNode;
  linkLabel: string;
  href: string;
};

const quickPaths: QuickPathItem[] = [
  {
    title: "Start using Talvrin",
    description: (
      <>
        Onboarding and first-session<br className="hidden md:inline" /> orientation.
      </>
    ),
    linkLabel: "Open Getting Started",
    href: "/resources/getting-started",
  },
  {
    title: "Find and inspect evidence",
    description: (
      <>
        Evidence discovery, source<br className="hidden md:inline" /> provenance and source inspection<br className="hidden md:inline" /> concepts.
      </>
    ),
    linkLabel: "Explore Evidence",
    href: "/product/evidence",
  },
  {
    title: "Build a research view",
    description: (
      <>
        Research organization and evidence-<br className="hidden md:inline" />linked reasoning.
      </>
    ),
    linkLabel: "See how Talvrin works",
    href: "/product/how-talvrin-works",
  },
  {
    title: "Understand AI assistance",
    description: (
      <>
        AI&apos;s role, provenance and user<br className="hidden md:inline" /> responsibility.
      </>
    ),
    linkLabel: "Read the AI boundary",
    href: "/product/ai-assistance",
  },
  {
    title: "Solve a problem",
    description: "Troubleshooting and recovery path.",
    linkLabel: "Go to Troubleshooting",
    href: "#troubleshooting",
  },
  {
    title: "Monitor what changes",
    description: (
      <>
        Monitoring concepts and meaningful<br className="hidden md:inline" /> evidence change.
      </>
    ),
    linkLabel: "See monitoring & alerts",
    href: "/product/alerts",
  },
];

function QuickPathCard({ path }: { path: QuickPathItem }) {
  return (
    <article
      className="flex h-[160px] w-full lg:w-[288px] flex-col justify-between rounded-2xl border p-5"
      style={{
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(23, 19, 53, 0.1)",
      }}
    >
      <div>
        <h3 className="text-[15px] font-bold text-ink font-['IBM_Plex_Sans']">{path.title}</h3>
        <p className="mt-1.5 text-xs leading-[18px] text-muted font-['IBM_Plex_Sans']">{path.description}</p>
      </div>
      <div className="mt-auto pt-2">
        <CardLink href={path.href} size="xs">
          {path.linkLabel}
        </CardLink>
      </div>
    </article>
  );
}

export default function QuickPathsSection() {
  return (
    <section
      id="quick-paths"
      className="scroll-mt-32 py-20 sm:py-24"
      style={{ backgroundColor: "rgba(246, 245, 251, 1)" }}
    >
      <Container className="!max-w-[1200px] !px-4 sm:!px-6 lg:!px-0">
        <Reveal>
          <SectionEyebrow tone="violet">QUICK PATHS</SectionEyebrow>
          <SectionHeading>Tell us what you&apos;re trying to do.</SectionHeading>
          <SectionLede style={{ color: "rgba(93, 90, 114, 1)" }}>
            Task-first routes to the right guidance — no need to know Talvrin&apos;s internal structure first.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-4 lg:w-[1200px]">
          {quickPaths.slice(0, 3).map((path, index) => (
            <Reveal key={path.title} delay={index * 0.05}>
              <QuickPathCard path={path} />
            </Reveal>
          ))}

          {/* Spacer cell from Figma that spans 2 rows on the right */}
          <Reveal delay={0.15} className="hidden lg:block lg:row-span-2">
            <div
              aria-hidden="true"
              className="h-[335px] w-full lg:w-[288px] rounded-2xl border"
              style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderColor: "rgba(23, 19, 53, 0.1)",
              }}
            />
          </Reveal>

          {quickPaths.slice(3).map((path, index) => (
            <Reveal key={path.title} delay={index * 0.05}>
              <QuickPathCard path={path} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
