import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const destinations = [
  {
    label: "Developer Overview",
    href: "/developers/overview",
    body: "Orientation across the developer estate.",
  },
  {
    label: "API Documentation",
    href: "/developers/api-documentation",
    body: "Exact request and response reference.",
  },
  { label: "Data APIs", href: "/developers/data-apis", body: "Data contracts, coverage, and rights." },
  {
    label: "Integrations",
    href: "/developers/integrations",
    body: "Connection and provider configuration.",
  },
  { label: "SDKs", href: "/developers/sdks", body: "Packages, versions, and runtime support." },
  {
    label: "Developer Status",
    href: "/developers/status",
    body: "Live health, incidents, and maintenance.",
  },
  {
    label: "Contact Support",
    href: "/resources/contact-support",
    body: "Reference a change ID. Never share secrets.",
  },
  {
    label: "Authentication",
    href: "/developers/authentication",
    body: "Credentials, scopes, and rotation.",
  },
];

export default function KeepBuildingSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="amber">Keep Building</SectionEyebrow>
          <SectionHeading>From awareness to implementation.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <Reveal key={destination.href} delay={index * 0.03}>
              <Link
                href={destination.href}
                className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white px-5 py-4 transition-colors hover:border-ink/30"
              >
                <span className="text-base font-bold text-ink">{destination.label} →</span>
                <span className="text-sm leading-5 text-slate-600">{destination.body}</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-slate-600">
            Research and intelligence platform. No trade execution. No manufactured investment
            recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
