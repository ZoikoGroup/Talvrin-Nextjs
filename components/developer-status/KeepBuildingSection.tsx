import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const destinations = [
  {
    label: "API Documentation",
    href: "/developers/api-documentation",
    body: "Error codes, retry guidance, and request IDs.",
  },
  {
    label: "Authentication",
    href: "/developers/authentication",
    body: "Credentials, sign-in, and permission failures.",
  },
  {
    label: "Data APIs",
    href: "/developers/data-apis",
    body: "Coverage, data rights, and source timing.",
  },
  {
    label: "Contact Support",
    href: "/resources/contact-support",
    body: "Reference an incident ID. Never share secrets.",
  },
  {
    label: "SDKs",
    href: "/developers/sdks",
    body: "Compatibility and lifecycle for client libraries.",
  },
  {
    label: "Integrations",
    href: "/developers/integrations",
    body: "Connection, sync, and provider-specific state.",
  },
];

export default function KeepBuildingSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="amber">Keep Building</SectionEyebrow>
          <SectionHeading>Go to the page that answers your error.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <Reveal key={destination.href} delay={index * 0.04}>
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
