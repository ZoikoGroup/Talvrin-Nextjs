import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink } from "../release-notes/shared";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR, Pill } from "./shared";

type TrustLink = { title: string; body: string; link?: { label: string; href: string } };

const links: TrustLink[] = [
  {
    title: "Evidence Standards",
    body: "Evidence quality, source classification, and provenance detail.",
    link: { label: "Open Evidence Standards", href: "/trust/evidence-standards" },
  },
  { title: "Data Sources", body: "Source classes, inventory, and currentness." },
  {
    title: "Data Rights",
    body: "Licensing, entitlement, permitted use, and redistribution/retention boundaries.",
  },
  { title: "Global Data Governance", body: "Jurisdiction and cross-border governance." },
  {
    title: "Service Status",
    body: "Live operational status — this page never synthesizes or overrides it.",
    link: { label: "Open Service Status", href: "/support/system-status" },
  },
  { title: "Security", body: "Account, workspace, and service protection claims." },
];

function TrustLinkCard({ item }: { item: TrustLink }) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
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
    <section id="trust-links" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Owned Elsewhere, On Purpose"
            title="AI Principles sets the boundary. These pages own the detail."
          >
            Cross-domain claims drift when they&apos;re copied across pages, so this page links out
            instead of restating.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.6fr)]">
          {links.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="h-full">
              <TrustLinkCard item={item} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative order-last aspect-video overflow-hidden rounded-xl border border-ink/10 sm:col-span-2 xl:order-none xl:col-span-1 xl:row-span-2 xl:aspect-auto"
          >
            <Image
              src={`${IMAGE_DIR}/ai-principles-trust-links-team.webp`}
              alt="Colleagues talking with laptops in a sunlit atrium"
              fill
              sizes="(min-width: 1280px) 502px, 100vw"
              className="object-cover"
            />
          </Reveal>

          {links.slice(3).map((item, index) => (
            <Reveal key={item.title} delay={(index + 3) * 0.05} className="h-full">
              <TrustLinkCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
