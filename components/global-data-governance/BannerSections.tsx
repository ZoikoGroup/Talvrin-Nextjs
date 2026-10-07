import { ReactNode } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { Banner } from "../data-rights/shared";
import { DotList } from "../evidence-standards/shared";
import { DarkNote, IMAGE_DIR } from "./shared";

/** Jurisdiction, Privacy & Security, Residency and Enterprise share: intro, wide photo, then a footer. */
function BannerSection({
  id,
  className,
  eyebrow,
  tone,
  title,
  lede,
  image,
  footer,
}: {
  id: string;
  className: string;
  eyebrow: string;
  tone?: "violet" | "amber";
  title: string;
  lede: ReactNode;
  image: { src: string; alt: string; ratio: string };
  footer: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-32 py-20 sm:py-24 ${className}`}>
      <Container>
        <Reveal>
          <SectionIntro eyebrow={eyebrow} tone={tone} title={title}>
            {lede}
          </SectionIntro>
        </Reveal>
        <Reveal delay={0.1} className="mt-4">
          <Banner {...image} />
        </Reveal>
        <Reveal delay={0.15} className="mt-3">
          {footer}
        </Reveal>
      </Container>
    </section>
  );
}

export function JurisdictionSection() {
  return (
    <BannerSection
      id="jurisdiction"
      className="bg-surface"
      eyebrow="Evidence Jurisdiction Is Not Visitor Geography"
      tone="amber"
      title="Six applicability states — never guessed from an IP address."
      lede="If jurisdiction is a property of evidence, it travels with the evidence record and stays distinct from the user's own location."
      image={{
        src: `${IMAGE_DIR}/governance-jurisdiction-screen.webp`,
        alt: "Two colleagues looking closely at a computer screen",
        ratio: "aspect-[1280/444]",
      }}
      footer={
        <div className="pt-4">
          <DotList
            tone="violet"
            items={[
              "Applicability is not inferred solely from geography, browser locale or IP address when the underlying legal/business rule needs a governed determination.",
              "If jurisdiction is a property of evidence, it travels with the evidence record and remains distinct from the user’s own location.",
              "When multiple jurisdictions are relevant, all material contexts are shown, or a clear \"multiple jurisdictions\" treatment with drill-down is used.",
            ]}
          />
        </div>
      }
    />
  );
}

export function PrivacySecuritySection() {
  return (
    <BannerSection
      id="privacy-security"
      className="bg-white"
      eyebrow={`Never a Vague "Compliance" Card`}
      title="Privacy and security stay distinct, cross-linked disciplines."
      lede="Governance claims on this page stay consistent with the owning Privacy and Security pages — never duplicated, never contradicted."
      image={{
        src: `${IMAGE_DIR}/governance-privacy-security.webp`,
        alt: "A professional listening thoughtfully in a meeting",
        ratio: "aspect-[1280/442]",
      }}
      footer={
        <div className="pt-4">
          <DotList
            tone="amber"
            items={[
              "Privacy and Security are never merged into a vague \"compliance\" card.",
              "Badges such as \"GDPR compliant\", \"bank-grade\", \"sovereign\" or \"zero-trust\" are not used unless separately evidenced and approved.",
              "A lead form is never required to access basic public privacy/governance facts.",
            ]}
          />
        </div>
      }
    />
  );
}

export function ResidencySection() {
  return (
    <BannerSection
      id="residency"
      className="bg-white"
      eyebrow="A Disclosure Pattern, Not a Residency Claim"
      title="The supplied materials do not establish where data is hosted."
      lede="Talvrin's architecture spans jurisdictions, but residency, transfer mechanism, backup geography and subprocessor claims publish only from an approved source — never invented to look complete."
      image={{
        src: `${IMAGE_DIR}/governance-residency-speaker.webp`,
        alt: "A professional speaking in front of a city skyline window",
        ratio: "aspect-[1280/484]",
      }}
      footer={
        <p role="note" className="rounded-2xl bg-surface px-6 py-5 text-sm font-semibold leading-6 text-muted">
          <strong className="font-bold text-ink">Fail-closed:</strong> if the authoritative regional
          registry or disclosure source is unavailable, the page does not substitute cached marketing
          copy for dynamic governance claims.
        </p>
      }
    />
  );
}

export function EnterpriseSection() {
  return (
    <BannerSection
      id="enterprise"
      className="bg-surface"
      eyebrow="Public Facts Stay Public"
      tone="amber"
      title="A procurement-relevant diligence surface, without a dark-pattern gate."
      lede="Sensitive contractual or assurance material follows an approved sales/legal diligence workflow. Basic public facts are never gated behind a lead form."
      image={{
        src: `${IMAGE_DIR}/governance-enterprise-review.webp`,
        alt: "Two colleagues smiling while reviewing a document in a hallway",
        ratio: "aspect-[1280/554]",
      }}
      footer={
        <DarkNote label="Sales principle">
          Governance should reduce procurement ambiguity and increase confidence through inspectable
          facts — not through superlatives, fake badges or forced lead capture.
        </DarkNote>
      }
    />
  );
}
