import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../release-notes/shared";
import { IMAGE_DIR, NotYetAvailable } from "./shared";

const destinations: { title: string; href?: string }[] = [
  { title: "Contact Support", href: "/support/contact-support" },
  { title: "Account Support" },
  { title: "System Status" },
  { title: "Security Contact" },
  { title: "Accessibility Support" },
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="scroll-mt-32 bg-surface py-14 sm:py-[56px]">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Support Destinations" title="Seven destinations, one Support area.">
            Help Center is the self-service entry point. Specific issues route to their own governed
            destination.
          </SectionIntro>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,2fr)]">
          <Reveal className="h-full">
            <div
              aria-current="page"
              className="flex h-full flex-col gap-1 rounded-xl bg-ink px-5 py-4"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-accent-amber">You Are Here</p>
              <p className="text-base font-bold text-white">Help Center</p>
            </div>
          </Reveal>

          {destinations.slice(0, 2).map((destination, index) => (
            <Reveal key={destination.title} delay={(index + 1) * 0.04} className="h-full">
              <DestinationCard {...destination} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative order-last aspect-[16/7] overflow-hidden rounded-xl border border-ink/10 sm:col-span-2 lg:order-none lg:col-span-1 lg:row-span-2 lg:aspect-auto lg:min-h-[178px]"
          >
            <Image
              src={`${IMAGE_DIR}/help-center-destinations-team.webp`}
              alt="Colleagues applauding as two teammates shake hands in a meeting room"
              fill
              sizes="(min-width: 1024px) 504px, 100vw"
              className="object-cover"
            />
          </Reveal>

          {destinations.slice(2).map((destination, index) => (
            <Reveal key={destination.title} delay={(index + 3) * 0.04} className="h-full">
              <DestinationCard {...destination} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DestinationCard({ title, href }: { title: string; href?: string }) {
  return (
    <div
      className={`flex h-full flex-col gap-1.5 rounded-xl border border-ink/10 bg-white px-5 py-4 ${href ? "" : "opacity-75"}`}
    >
      <h3 className="text-base font-bold text-ink">{title}</h3>
      {href ? (
        <Link href={href} className="text-xs font-semibold text-accent-violet hover:text-brand">
          Open →
        </Link>
      ) : (
        <NotYetAvailable />
      )}
    </div>
  );
}
