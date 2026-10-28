import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

const comparisons = [
  {
    title: "Security vs. System Status",
    body: "System Status reports operational health; Security Contact reports security concerns. A live outage does not prove a vulnerability.",
    linkLabel: "Check System Status",
    href: "/support/system-status",
  },
  {
    title: "Security vs. Account Support",
    body: "Account recovery and access issues belong with Account Support, unless a broader platform weakness is suspected.",
    linkLabel: "Go to Account Support",
    href: "/support/account-support",
  },
  {
    title: "Security vs. Report a Problem",
    body: "Ordinary defects use Report a Problem. Only an actual security-property impact belongs on this page.",
    linkLabel: "Report a Problem",
    href: "/support/report-a-problem",
  },
  {
    title: "Security vs. Accessibility Support",
    body: "Accessibility barriers — including inside a security-reporting control — use Accessibility Support.",
    linkLabel: "Go to Accessibility Support",
    href: "/support/accessibility-support",
  },
];

export default function SecurityVsOtherSupportSection() {
  return (
    <section id="boundaries" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="amber">Security vs. Other Support</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-ink sm:text-4xl">
            A security concern is not the same as an outage, a locked account, or a bug.
          </h2>
          <p className="mt-4 max-w-[720px] text-base leading-[25.6px] text-muted">
            Use the right destination for the symptom — none of these require going through Security
            Contact first.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {comparisons.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="flex h-full flex-col gap-2.5 rounded-xl border border-ink/10 bg-surface p-[22.8px]">
                <p className="text-xs font-bold uppercase tracking-[0.6px] text-accent-violet">
                  {item.title}
                </p>
                <p className="flex-1 text-sm leading-[21.7px] text-ink">{item.body}</p>
                <Link href={item.href} className="text-[13px] font-semibold text-accent-violet hover:text-brand">
                  {item.linkLabel} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
