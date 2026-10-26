import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const profiles = [
  {
    title: "Asset Managers",
    body: "Research workflows for asset-management teams evaluating evidence-led coverage.",
    href: "/asset-managers",
    label: "View Asset Managers",
  },
  {
    title: "Wealth & Advisory Research",
    body: "Source-linked research support for wealth and advisory teams.",
    href: "/solutions/wealth-advisory-research",
    label: "View Wealth & Advisory Research",
  },
  {
    title: "Financial Institutions",
    body: "Governed evidence and research capabilities for institutions.",
    href: "/solutions/financial-institutions",
    label: "View Financial Institutions",
  },
  {
    title: "Enterprise",
    body: "Enterprise access, controls, integrations and commercial inquiry.",
    href: "/solutions/enterprise",
    label: "View Enterprise",
  },
];

export default function WhoItServes() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_239px] lg:items-stretch lg:gap-10">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Who It Serves</SectionEyebrow>
            <SectionHeading>Five institutional profiles, each with a dedicated page.</SectionHeading>
            <SectionLede>
              Global Institutions is a navigation and governance overview. Specific commercial
              propositions, scope and access detail live on each destination below.
            </SectionLede>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {profiles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="h-full">
                <Link
                  href={p.href}
                  className="flex h-full flex-col rounded-[14px] border border-ink/10 bg-surface p-6 transition-colors hover:border-ink/20"
                >
                  <h3 className="text-base font-bold text-ink">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-[21.7px] text-muted">{p.body}</p>
                  <p className="mt-4 text-sm font-semibold text-accent-violet">{p.label} →</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="relative hidden overflow-hidden rounded-[14px] border border-ink/10 bg-surface lg:block"
        >
          <Image
            src={`${IMG}/global-institutions-who-it-serves-team.webp`}
            alt="Colleagues reviewing research on a laptop together"
            fill
            sizes="239px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
