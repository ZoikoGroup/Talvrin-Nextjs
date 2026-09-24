import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

type Destination = {
  label: string;
  description: string;
} & ({ href: string; linkLabel: string } | { note: string });

const destinations: Destination[] = [
  {
    label: "Media",
    description: "Professional media, interview, asset, fact-check, or comment requests.",
    href: "/company/press-media",
    linkLabel: "Press and Media →",
  },
  {
    label: "Careers",
    description: "Vacancies, applications, accommodations, and candidate support.",
    href: "/careers",
    linkLabel: "Careers →",
  },
  {
    label: "Trust",
    description: "Evidence standards, security, privacy, and governance information.",
    note: "Trust Center is not yet available.",
  },
];

export default function SpecialistRoutesSection() {
  return (
    <section id="specialist-destinations" className="scroll-mt-32 bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="violet">Specialist Contact Routes</SectionEyebrow>
          <SectionHeading>
            Use the dedicated destination when your request concerns media, careers, or trust
            information.
          </SectionHeading>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <Reveal
              key={destination.label}
              delay={index * 0.05}
              className="flex flex-col gap-2.5 rounded-2xl border border-ink/10 bg-white px-6 pb-8 pt-7"
            >
              <SectionEyebrow tone="amber">{destination.label}</SectionEyebrow>
              <p className="text-base leading-6 text-slate-600">{destination.description}</p>
              {"href" in destination ? (
                <Link
                  href={destination.href}
                  className="mt-auto pt-2 text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
                >
                  {destination.linkLabel}
                </Link>
              ) : (
                <p className="mt-auto pt-2 text-xs text-slate-600">{destination.note}</p>
              )}
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative aspect-[306/193] w-full overflow-hidden rounded-2xl border border-ink/10 sm:self-stretch"
          >
            <Image
              src="/images/company/contact/contact-specialist-routes-call.webp"
              alt="Colleagues on a video call in a meeting room"
              fill
              sizes="(min-width: 1024px) 306px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
