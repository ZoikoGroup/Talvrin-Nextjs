import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const neverAllowed = [
  "Invent an alert trigger or claim a condition was met when the source service did not emit it.",
  "Become primary evidence or hide the underlying source.",
  "Give personalized buy/sell/hold instructions or urgency.",
  "Override coverage, rights, materiality or delivery-status truth.",
  "Silently enable or disable alerts, or expand recipients and channels without authorization.",
];

const allowedWhenApproved = [
  "Summarize the source-owned trigger reason and research context with clear AI attribution.",
  "Help compare the new evidence to prior monitored context.",
  "Suggest navigation such as Review Changes based on product workflow.",
  "Draft a plain-language explanation of coverage or rights limitations.",
  "Assist preference discovery from approved capability options.",
];

export default function AiBoundarySection() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">AI Assistance Boundary</SectionEyebrow>
          <SectionHeading inverted>
            AI can help explain an alert. It does not become the reason the alert is true.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[72px]">
          <Reveal>
            <h3 className="text-sm font-bold text-white/40">Never allowed</h3>
            <ul className="mt-4 space-y-3">
              {neverAllowed.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-base leading-6 text-white/75">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-sm border border-white/40"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-sm font-bold text-indigo-300">Allowed only when approved</h3>
            <ul className="mt-4 space-y-3">
              {allowedWhenApproved.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-base leading-6 text-white/90">
                  <span className="mt-2 size-1.5 shrink-0 rounded-sm bg-indigo-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
