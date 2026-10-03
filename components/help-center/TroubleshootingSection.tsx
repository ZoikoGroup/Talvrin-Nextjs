import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, CardLink } from "./shared";

const issues = [
  {
    title: "Help search unavailable",
    description:
      "Search is temporarily unavailable. The Help Topic Directory stays fully browsable.",
    linkLabel: "Browse Help topics",
    href: "#topics",
  },
  {
    title: "No search results",
    description:
      "No Help Center articles match this search. Browse categories, check the FAQs, or contact support.",
    linkLabel: "See FAQs",
    href: "#faqs",
  },
  {
    title: "Article unavailable",
    description:
      "This article is unavailable or has been retired. The topic directory reflects current guidance.",
    linkLabel: "Browse Help topics",
    href: "#topics",
  },
  {
    title: "Possible platform incident",
    description:
      "If something looks wrong across Talvrin rather than in one account, check Service Status before assuming an account-specific issue.",
  },
  {
    title: "Needs human help",
    description:
      "If self-service guidance doesn't resolve the issue, contact support directly.",
    linkLabel: "Contact Support",
    href: "/resources/contact-support",
    anchor: true,
  },
  {
    title: "Product capability unavailable",
    description:
      "This capability isn't available on your current plan or hasn't been released yet. No roadmap dates are implied here.",
  },
];

function IssueCard({ issue }: { issue: (typeof issues)[number] }) {
  return (
    <article
      id={issue.anchor ? "support" : undefined}
      className="flex h-full scroll-mt-32 flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5"
    >
      <h3 className="text-base font-bold text-ink">{issue.title}</h3>
      <p className="text-xs leading-5 text-muted">{issue.description}</p>
      {issue.linkLabel && issue.href && (
        <CardLink href={issue.href} className="mt-auto pt-1">
          {issue.linkLabel}
        </CardLink>
      )}
    </article>
  );
}

export default function TroubleshootingSection() {
  return (
    <section id="troubleshooting" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="violet">Troubleshooting &amp; Recovery</SectionEyebrow>
          <SectionHeading>
            When something doesn&apos;t work, here&apos;s what to do.
          </SectionHeading>
          <SectionLede>
            Observed-state guidance only — Talvrin won&apos;t guess a root cause it can&apos;t
            confirm.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {issues.slice(0, 3).map((issue, index) => (
            <Reveal key={issue.title} delay={index * 0.05}>
              <IssueCard issue={issue} />
            </Reveal>
          ))}

          <Reveal delay={0.15} className="hidden lg:block">
            <div className="relative h-80 overflow-hidden rounded-xl border border-ink/10 bg-white">
              <Image
                src="/help-center/image 335.png"
                alt="Support specialist helping a Talvrin user"
                fill
                sizes="(min-width: 1024px) 288px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {issues.slice(3).map((issue, index) => (
            <Reveal key={issue.title} delay={index * 0.05}>
              <IssueCard issue={issue} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
