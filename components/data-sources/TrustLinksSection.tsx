import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink } from "../release-notes/shared";
import { SectionIntro } from "../individual-investors/shared";
import { Pill } from "../ai-principles/shared";
import { IMAGE_DIR } from "./shared";

type TrustLink = { title: string; body: string; link?: { label: string; href: string } };

const links: TrustLink[] = [
  {
    title: "Evidence Standards",
    body: "How evidence objects preserve source identity, timing, context, relationship and inspectability.",
    link: { label: "Open Evidence Standards", href: "/trust/evidence-standards" },
  },
  {
    title: "Data Rights",
    body: "Licensing, entitlement, permitted-use, redistribution and access-control principles.",
    link: { label: "Open Data Rights", href: "/trust/data-rights" },
  },
  { title: "Global Data Governance", body: "Cross-jurisdiction governance architecture." },
  {
    title: "AI Principles",
    body: "How model-assisted output remains distinguishable from source evidence.",
    link: { label: "Open AI Principles", href: "/trust/ai-principles" },
  },
];

export default function TrustLinksSection() {
  return (
    <section id="trust-links" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Owned Elsewhere, On Purpose"
            tone="amber"
            title="Data Sources explains provenance. These pages own the detail."
          />
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {links.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="h-full">
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
            </Reveal>
          ))}

          <Reveal
            delay={0.25}
            className="relative aspect-video overflow-hidden rounded-xl border border-ink/10 sm:col-span-2 xl:col-span-1 xl:aspect-auto xl:min-h-[160px]"
          >
            <Image
              src={`${IMAGE_DIR}/data-sources-trust-links-workshop.webp`}
              alt="Colleagues talking around a table in front of a whiteboard"
              fill
              sizes="(min-width: 1280px) 243px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
