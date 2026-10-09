import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro, StatusBadge } from "../release-notes/shared";

type Destination = { title: string; body: string; href?: string };

const destinations: Destination[] = [
  {
    title: "Help Center",
    body: "Self-service answers to common product and account questions.",
    href: "/support/help-center",
  },
  {
    title: "Contact Support",
    body: "General support routing for issues that are not account-specific.",
    href: "/support/contact-support",
  },
  {
    title: "Accessibility Support",
    body: "Help when an accessibility barrier blocks sign-in, recovery, or account tasks.",
  },
  { title: "System Status", body: "Authoritative service-health information for service-wide issues." },
  { title: "Security Contact", body: "Suspected compromise or a security vulnerability report." },
  {
    title: "Report a Problem",
    body: "Functional product defects that are not identity or account policy issues.",
  },
];

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-ink">{destination.title}</h3>
        <StatusBadge status={destination.href ? "available" : "unavailable"} />
      </div>
      <p className="text-xs leading-5 text-muted">{destination.body}</p>
      <div className="mt-auto pt-1">
        {destination.href ? (
          <Link
            href={destination.href}
            className="text-xs font-semibold text-accent-violet transition-colors hover:text-brand"
          >
            Open →
          </Link>
        ) : (
          <p className="text-xs text-muted">Not yet available</p>
        )}
      </div>
    </div>
  );
}

export default function RelatedSupportSection() {
  return (
    <section id="related" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Related Support" title="Not every issue belongs on this page.">
            Use these destinations when your issue isn&apos;t account-specific.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.slice(0, 3).map((destination, index) => (
            <Reveal key={destination.title} delay={index * 0.05} className="h-full">
              <DestinationCard destination={destination} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative order-last aspect-video overflow-hidden rounded-xl border border-ink/10 sm:col-span-2 lg:order-none lg:col-span-1 lg:row-span-2 lg:aspect-auto"
          >
            <Image
              src="/images/support/account-support/account-support-related-support.webp"
              alt="Two colleagues exchanging a document beside an office window"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          {destinations.slice(3).map((destination, index) => (
            <Reveal key={destination.title} delay={(index + 3) * 0.05} className="h-full">
              <DestinationCard destination={destination} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
