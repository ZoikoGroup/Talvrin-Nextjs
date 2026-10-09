import { ReactNode } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, CardLink } from "./shared";

type IssueItem = {
  title: string;
  description: ReactNode;
  linkLabel?: string;
  href?: string;
  anchor?: boolean;
};

const issues: IssueItem[] = [
  {
    title: "Help search unavailable",
    description: (
      <>
        Search is temporarily unavailable. The Help<br className="hidden md:inline" /> Topic Directory stays fully browsable.
      </>
    ),
    linkLabel: "Browse Help topics",
    href: "#topics",
  },
  {
    title: "No search results",
    description: (
      <>
        No Help Center articles match this search.<br className="hidden md:inline" /> Browse categories, check the FAQs, or<br className="hidden md:inline" /> contact support.
      </>
    ),
    linkLabel: "See FAQs",
    href: "#faqs",
  },
  {
    title: "Article unavailable",
    description: (
      <>
        This article is unavailable or has been<br className="hidden md:inline" /> retired. The topic directory reflects<br className="hidden md:inline" /> current guidance.
      </>
    ),
    linkLabel: "Browse Help topics",
    href: "#topics",
  },
  {
    title: "Possible platform incident",
    description: (
      <>
        If something looks wrong across Talvrin<br className="hidden md:inline" /> rather than in one account, check Service<br className="hidden md:inline" /> Status before assuming an account-<br className="hidden md:inline" />specific issue.
      </>
    ),
  },
  {
    title: "Needs human help",
    description: (
      <>
        If self-service guidance doesn&apos;t resolve<br className="hidden md:inline" /> the issue, contact support directly.
      </>
    ),
    linkLabel: "Contact Support",
    href: "/resources/contact-support",
    anchor: true,
  },
  {
    title: "Product capability unavailable",
    description: (
      <>
        This capability isn&apos;t available on your<br className="hidden md:inline" /> current plan or hasn&apos;t been released yet.<br className="hidden md:inline" /> No roadmap dates are implied here.
      </>
    ),
  },
];

function IssueCard({ issue }: { issue: IssueItem }) {
  return (
    <article
      id={issue.anchor ? "support" : undefined}
      className="flex h-[155px] w-full lg:w-[288px] scroll-mt-32 flex-col justify-between rounded-2xl border p-5"
      style={{
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(23, 19, 53, 0.1)",
      }}
    >
      <div>
        <h3 className="text-[14.5px] font-bold leading-[18px] text-ink font-['IBM_Plex_Sans']">{issue.title}</h3>
        <p className="mt-1 text-xs leading-[17px] text-muted font-['IBM_Plex_Sans']">{issue.description}</p>
      </div>
      {issue.linkLabel && issue.href && (
        <div className="mt-auto pt-1">
          <CardLink href={issue.href} size="xs">
            {issue.linkLabel}
          </CardLink>
        </div>
      )}
    </article>
  );
}

export default function TroubleshootingSection() {
  return (
    <section
      id="troubleshooting"
      className="scroll-mt-32 py-20 sm:py-24"
      style={{ backgroundColor: "rgba(246, 245, 251, 1)" }}
    >
      <Container className="!max-w-[1200px] !px-4 sm:!px-6 lg:!px-0">
        <Reveal>
          <SectionEyebrow tone="violet">TROUBLESHOOTING &amp; RECOVERY</SectionEyebrow>
          <SectionHeading>
            When something doesn&apos;t work, here&apos;s what<br className="hidden sm:inline" /> to do.
          </SectionHeading>
          <SectionLede style={{ color: "rgba(93, 90, 114, 1)" }}>
            Observed-state guidance only — Talvrin won&apos;t guess a root cause it can&apos;t confirm.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-4 lg:w-[1200px]">
          {issues.slice(0, 3).map((issue, index) => (
            <Reveal key={issue.title} delay={index * 0.05}>
              <IssueCard issue={issue} />
            </Reveal>
          ))}

          <Reveal delay={0.15} className="hidden lg:block lg:row-span-2">
            <div className="relative h-[325px] w-full lg:w-[288px] overflow-hidden rounded-2xl border border-[rgba(23,19,53,0.1)] bg-white">
              <Image
                src="/help-center/image 335.png"
                alt="Support specialist helping a Talvrin user"
                fill
                sizes="(min-width: 1024px) 288px, 100vw"
                className="object-cover rounded-2xl"
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
