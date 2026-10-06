import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink } from "../release-notes/shared";
import { SectionIntro } from "../individual-investors/shared";
import { Pill } from "../ai-principles/shared";
import { IMAGE_DIR } from "./shared";

type TrustLink = { title: string; body: string; link?: { label: string; href: string } };

const links: TrustLink[] = [
  { title: "Trust Center", body: "Single entry point for Talvrin’s overall trust model." },
  {
    title: "Evidence Standards",
    body: "Evidence quality, source classification, and provenance detail.",
    link: { label: "Open Evidence Standards", href: "/trust/evidence-standards" },
  },
  { title: "Data Sources", body: "Source classes, inventory, and currentness." },
  { title: "Security", body: "Account, workspace, and service protection claims." },
  { title: "Global Data Governance", body: "Jurisdiction and cross-border governance." },
  {
    title: "AI Principles",
    body: "AI assistance boundaries and provenance requirements.",
    link: { label: "Open AI Principles", href: "/trust/ai-principles" },
  },
  {
    title: "Service Status",
    body: "Live operational status — this page never synthesizes or overrides it.",
    link: { label: "Open Service Status", href: "/support/system-status" },
  },
  {
    title: "Privacy",
    body: "Collection, controls, analytics/consent, and personal-data practices.",
  },
];

function TrustLinkCard({ item }: { item: TrustLink }) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-5">
      <h3 className="text-base font-bold text-ink">{item.title}</h3>
      <p className="text-[13px] leading-5 text-muted">{item.body}</p>
      <div className="mt-auto pt-2">
        {item.link ? (
          <CardLink href={item.link.href}>{item.link.label}</CardLink>
        ) : (
          <Pill>Not yet published</Pill>
        )}
      </div>
    </div>
  );
}

export default function TrustLinksSection() {
  return (
    <section id="trust-links" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Owned Elsewhere, On Purpose"
            title="Data Rights sets the boundary. These pages own the detail."
          >
            Personal-data privacy rights, security controls and cross-jurisdiction governance are
            distinct trust domains — this page does not restate their detail.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,243px)]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {links.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04} className="h-full">
                <TrustLinkCard item={item} />
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-video overflow-hidden rounded-xl border border-ink/10 lg:aspect-auto"
          >
            <Image
              src={`${IMAGE_DIR}/data-rights-trust-links-team.webp`}
              alt="Colleagues laughing together in a modern office"
              fill
              sizes="(min-width: 1024px) 243px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
