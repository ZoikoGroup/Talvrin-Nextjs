import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const owners = [
  {
    title: "Developer Status",
    body: "Current health, incidents, and maintenance.",
    link: { label: "Check live status →", href: "/developers/status" },
    highlight: true,
  },
  {
    title: "API Documentation",
    body: "Endpoints, schemas, errors, limits, and version docs.",
    link: { label: "Open reference →", href: "/developers/api-documentation" },
    highlight: false,
  },
  {
    title: "Data APIs",
    body: "Dataset availability, provenance, timing, coverage, and rights.",
    link: { label: "Open Data APIs →", href: "/developers/data-apis" },
    highlight: false,
  },
  {
    title: "SDKs",
    body: "Package names, versions, installation, and runtime support.",
    link: { label: "Open SDKs →", href: "/developers/sdks" },
    highlight: false,
  },
  {
    title: "Integrations",
    body: "Providers, permissions, sync models, and connection guidance.",
    link: { label: "Open Integrations →", href: "/developers/integrations" },
    highlight: false,
  },
  {
    title: "Authentication",
    body: "Supported methods, credential rules, scopes, rotation, and revocation.",
    link: { label: "Open Authentication →", href: "/developers/authentication" },
    highlight: false,
  },
];

export default function OwnershipSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="amber">Changelog vs. Developer Status</SectionEyebrow>
          <SectionHeading inverted>
            A recent fix here is not proof that a service is healthy now.
          </SectionHeading>
          <SectionLede inverted className="max-w-[780px] sm:text-base sm:leading-6">
            The changelog records durable change. Each technical surface keeps its own truth. This
            page links to them and never replaces them.
          </SectionLede>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {owners.map((owner, index) => (
            <Reveal
              key={owner.title}
              delay={index * 0.04}
              className={clsx(
                "flex flex-col rounded-2xl p-5",
                owner.highlight
                  ? "border border-accent-violet bg-accent-violet/20"
                  : "border border-white/10 bg-[#1b1745]"
              )}
            >
              <p className="font-mono text-xs font-bold uppercase tracking-wide text-white/50">
                Owns
              </p>
              <h3 className="mt-1.5 text-lg font-bold text-white">{owner.title}</h3>
              <p className="mt-1.5 text-sm leading-5 text-white/70">{owner.body}</p>
              <Link
                href={owner.link.href}
                className="mt-auto pt-4 text-sm font-semibold text-indigo-300 transition-colors hover:text-white"
              >
                {owner.link.label}
              </Link>
            </Reveal>
          ))}

          <Reveal
            delay={0.24}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-3 lg:aspect-[16/5] xl:col-span-1 xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
          >
            <Image
              src="/images/developers/changelog/changelog-ownership-meeting.webp"
              alt="Team meeting around a boardroom table"
              fill
              sizes="(min-width: 1280px) 307px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
