import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const steps = [
  {
    title: "01 · Choose right",
    body: "Access, correct, delete, port, withdraw consent, object or restrict — where applicable to you.",
  },
  {
    title: "02 · Identify reach",
    body: "Confirm the controller, regional scope and account context for your request.",
  },
  {
    title: "03 · Verify",
    body: "Proportionate identity verification; no overcollection of identity documents.",
  },
  {
    title: "04 · Submit",
    body: "Receive a confirmation receipt ID and a secure status-update channel.",
  },
  {
    title: "05 · Resolve",
    body: "Decision, fulfillment or reason for limitation, with appeal or complaint routing where required.",
  },
];

export default function PrivacyChoicesSection() {
  return (
    <section id="privacy-choices" className="scroll-mt-24 bg-ink py-16 sm:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Your choices / privacy</SectionEyebrow>
          <SectionHeading inverted>
            Controls that actually change what Talvrin does — not a decorative toggle.
          </SectionHeading>
          <SectionLede inverted>
            Manage optional cookies and similar technologies below, or start a request to access,
            correct, delete or otherwise act on your personal data.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-2.5 lg:grid-cols-2">
          <Reveal
            delay={0.1}
            className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-7"
          >
            <h3 className="text-base font-bold text-white">Cookie &amp; tracking preferences</h3>
            <p className="text-sm leading-6 text-white/70">
              Strictly necessary technology keeps Talvrin working and cannot be switched off.
              Everything else is off by default where consent is required, and you can change your
              choice at any time.
            </p>
            <div className="pt-3">
              <LinkButton href="/legal/cookie-notice" variant="onDark" className="px-6 py-3.5 text-base">
                Manage Preferences
              </LinkButton>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[635/224] w-full overflow-hidden rounded-2xl border border-white/10 lg:aspect-auto"
          >
            <Image
              src={`${IMG}/legal-privacy-high-five.webp`}
              alt="Colleagues celebrating with a high five in a meeting"
              fill
              sizes="(min-width: 1024px) 635px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-9">
          <p className="text-xs font-bold uppercase tracking-wide text-white/60">
            How a privacy request is handled
          </p>
          <ol className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <li
                key={s.title}
                className="flex flex-col gap-1.5 rounded-[10px] border border-white/10 bg-white/5 p-4"
              >
                <span className="text-xs font-bold tracking-wide text-accent-amber">{s.title}</span>
                <span className="text-sm leading-5 text-white/75">{s.body}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
