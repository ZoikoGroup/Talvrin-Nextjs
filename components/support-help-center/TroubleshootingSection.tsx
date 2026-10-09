import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink, SectionIntro } from "../release-notes/shared";
import { CardShell, IMAGE_DIR } from "./shared";

type Scenario = {
  title: string;
  body: string;
  link?: { label: string; href: string };
};

const scenarios: Scenario[] = [
  {
    title: "No search results",
    body: "No Help Center articles match your search. Browse topics, check the FAQs, or contact support.",
    link: { label: "Browse Help topics", href: "#topics" },
  },
  {
    title: "Article unavailable",
    body: "This article is unavailable or has been retired. The topic directory reflects current guidance.",
    link: { label: "Browse Help topics", href: "#topics" },
  },
  {
    title: "Sign-in or account issue",
    body: "Account access, profile and recovery issues move to Account Support rather than general self-service help.",
  },
  {
    title: "Possible platform incident",
    body: "If something looks wrong across Talvrin rather than in one account, check System Status before assuming an account-specific issue.",
  },
  {
    title: "Security concern",
    body: "Report a suspected vulnerability through Security Contact. Never include passwords, tokens or secrets in search or general feedback.",
  },
  {
    title: "Needs human help",
    body: "If self-service guidance doesn't resolve the issue, contact support directly.",
    link: { label: "Contact Support", href: "/support/contact-support" },
  },
];

function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <CardShell className="gap-2 rounded-xl p-5">
      <h3 className="text-base font-bold text-ink">{scenario.title}</h3>
      <p className="text-[13px] leading-5 text-muted">{scenario.body}</p>
      {scenario.link && (
        <div className="mt-auto pt-1">
          <CardLink href={scenario.link.href}>{scenario.link.label}</CardLink>
        </div>
      )}
    </CardShell>
  );
}

export default function TroubleshootingSection() {
  return (
    <section id="troubleshooting" className="scroll-mt-32 bg-surface py-20 sm:py-[88px]">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Troubleshooting & Recovery"
            title="When something doesn't work, here's what to do."
          >
            Observed-state guidance only — Talvrin won&apos;t guess a root cause it can&apos;t
            confirm.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.slice(0, 3).map((scenario, index) => (
            <Reveal key={scenario.title} delay={index * 0.05} className="h-full">
              <ScenarioCard scenario={scenario} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative order-last aspect-[16/9] overflow-hidden rounded-xl border border-ink/10 sm:col-span-2 lg:order-none lg:col-span-1 lg:row-span-2 lg:aspect-auto"
          >
            <Image
              src={`${IMAGE_DIR}/help-center-troubleshooting-conversation.webp`}
              alt="Two professionals in conversation across a small lounge table"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          {scenarios.slice(3).map((scenario, index) => (
            <Reveal key={scenario.title} delay={(index + 3) * 0.05} className="h-full">
              <ScenarioCard scenario={scenario} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
