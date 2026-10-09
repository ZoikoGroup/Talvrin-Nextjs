import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink } from "../release-notes/shared";
import { SectionIntro } from "../individual-investors/shared";
import { Pill } from "../ai-principles/shared";
import { IMAGE_DIR, RowTable } from "./shared";

const ownership: [string, string, string][] = [
  [
    "Global Data Governance",
    "Jurisdiction-aware governance model, applicability, release-state truth, regional content rules, governance claim contracts.",
    "Specific legal advice, unsupported compliance assertions or confidential architecture.",
  ],
  [
    "Evidence Standards",
    "Jurisdiction as evidence context; provenance expectations.",
    "Evidence classification details and source quality rules.",
  ],
  [
    "Data Sources",
    "Source identity/registry and source availability context.",
    "Exact source inventory unless approved.",
  ],
  ["Data Rights", "Licensing, entitlement, access and permitted-use controls.", "Personal privacy rights."],
  [
    "Security",
    "Governance dependency and claim gating.",
    "Security control details, certifications, incident history.",
  ],
  [
    "Privacy",
    "Regional experience handoff and minimization/control principle.",
    "Detailed privacy notice/legal bases unless approved.",
  ],
  [
    "AI Principles",
    "Applicable governance boundary for generated/model-assisted outputs.",
    "AI model details or unsupported training/use statements.",
  ],
  ["Service Status", "Regional/operational transparency handoff.", "Unverified uptime, SLA or incident metrics."],
];

type Handoff = { title: string; body: string; link?: { label: string; href: string } };

const handoffs: Handoff[] = [
  {
    title: "Evidence Standards",
    body: "Jurisdiction as evidence context and provenance expectations.",
    link: { label: "Open Evidence Standards", href: "/trust/evidence-standards" },
  },
  {
    title: "Data Sources",
    body: "Source identity, classification, provenance and coverage governance.",
    link: { label: "Open Data Sources", href: "/trust/data-sources" },
  },
  {
    title: "Data Rights",
    body: "Licensing, entitlement, permitted-use and access-control principles.",
    link: { label: "Open Data Rights", href: "/trust/data-rights" },
  },
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
  { title: "Security", body: "Security controls and assurance posture appropriate for public disclosure." },
];

export default function HandoffsSection() {
  return (
    <section id="handoffs" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="One Model, Clear Ownership"
            title="Global Data Governance explains the model. These pages own the detail."
          >
            This page explains how regional governance decisions are represented and governed
            publicly. It is not a substitute for jurisdiction-specific legal terms, privacy notices,
            contracts or internal control documentation.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <RowTable
            rows={ownership.map(([label, owns, excludes]) => ({ label, cells: [owns, excludes] }))}
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {handoffs.map((item, index) => (
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
            className="relative aspect-video overflow-hidden rounded-xl border border-ink/10 lg:aspect-auto lg:min-h-[337px]"
          >
            <Image
              src={`${IMAGE_DIR}/governance-handoffs-team.webp`}
              alt="Two colleagues laughing together at a desk"
              fill
              sizes="(min-width: 1024px) 502px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
