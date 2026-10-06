import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink, EmptyNote, SectionIntro, StatusBadge } from "../release-notes/shared";
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
  {
    title: "Report a Problem",
    body: "Non-security product, data, or workflow problems.",
    href: "/support/report-a-problem",
  },
  {
    title: "Developer Status",
    body: "Separate operational detail for Talvrin's public developer platform.",
    href: "/developers/status",
  },
  { title: "Security Contact", body: "Suspected compromise or a security vulnerability report." },
];

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-ink">{destination.title}</h3>
        <StatusBadge status={destination.href ? "available" : "unavailable"} />
      </div>
      <p className="text-[13px] leading-5 text-muted">{destination.body}</p>
      <div className="mt-auto pt-1">
        {destination.href ? (
          <CardLink href={destination.href}>Open</CardLink>
        ) : (
          <EmptyNote>Not yet available</EmptyNote>
        )}
      </div>
    </div>
  );
}

export default function StillNeedHelpSection() {
  return (
    <section id="support" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Still Need Help" title="Status healthy, but something's still wrong?">
            Route to the destination that matches your symptom rather than waiting on this page.
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
              src={`${IMAGE_DIR}/system-status-still-need-help.webp`}
              alt="A smiling professional shaking hands with a visitor"
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
