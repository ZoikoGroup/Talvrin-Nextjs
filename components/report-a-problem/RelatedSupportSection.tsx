import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro, StatusBadge } from "../release-notes/shared";
import { IMAGE_DIR } from "./shared";

type Destination = { title: string; body: string; href?: string };

const destinations: Destination[] = [
  {
    title: "Help Center",
    body: "Self-service answers to common product and account questions.",
    href: "/support/help-center",
  },
  {
    title: "Contact Support",
    body: "General support routing when you're not sure where to go.",
    href: "/support/contact-support",
  },
  {
    title: "Account Support",
    body: "Sign-in, recovery, and account-access help.",
    href: "/support/account-support",
  },
  // System Status and Security Contact stay unlinked: the notice below says neither is published.
  { title: "System Status", body: "Authoritative service-health information for service-wide issues." },
  { title: "Security Contact", body: "Suspected compromise or a security vulnerability report." },
  {
    title: "Accessibility Support",
    body: "Help when an accessibility barrier blocks your access.",
    href: "/support/accessibility-support",
  },
];

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-5">
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
            Open →<span className="sr-only"> {destination.title}</span>
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
    <section id="related" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Related Support" tone="amber" title="Not every issue belongs on this page.">
            Use these destinations when your issue isn&apos;t a general product problem.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              src={`${IMAGE_DIR}/report-a-problem-related-support.webp`}
              alt="A team meeting around a conference table"
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

        <Reveal delay={0.25} className="mt-4">
          <p className="rounded-[10px] border border-ink/10 bg-surface px-4 py-4 text-sm text-[#8a5a00]">
            System Status and Security Contact are not yet published for this build. We won&apos;t link
            or imply either destination until an approved, current route exists.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
