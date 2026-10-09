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
    title: "Data Sources",
    body: "Source identity, classification, provenance and coverage governance.",
    link: { label: "Open Data Sources", href: "/trust/data-sources" },
  },
  {
    title: "Data Rights",
    body: "Licensing, entitlement, permitted-use, redistribution and access-control principles.",
    link: { label: "Open Data Rights", href: "/trust/data-rights" },
  },
  { title: "Security", body: "Security controls and assurance posture appropriate for public disclosure." },
  { title: "Global Data Governance", body: "Cross-jurisdiction governance architecture." },
  {
    title: "AI Principles",
    body: "How model-assisted output remains distinguishable from source evidence.",
    link: { label: "Open AI Principles", href: "/trust/ai-principles" },
  },
  {
    title: "Service Status",
    body: "Authoritative operational state for source/platform services.",
    link: { label: "Open Service Status", href: "/support/system-status" },
  },
  { title: "Privacy", body: "Talvrin privacy information and user-data principles." },
];

export default function TrustLinksSection() {
  return (
    <section id="trust-links" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Owned Elsewhere, On Purpose"
            title="Evidence Standards explains the model. These pages own the detail."
          />
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,242px)]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {links.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04} className="h-full">
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
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-video overflow-hidden rounded-xl border border-ink/10 lg:aspect-auto"
          >
            <Image
              src={`${IMAGE_DIR}/evidence-standards-trust-links-meeting.webp`}
              alt="A senior professional leaning over a table to talk with a colleague"
              fill
              sizes="(min-width: 1024px) 242px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
