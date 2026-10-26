import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede, UnavailablePill } from "./shared";

type RouteCard = {
  prompt: string;
  linkLabel?: string;
  href?: string;
  note: string;
  unavailable?: boolean;
};

const cards: RouteCard[] = [
  {
    prompt: "I found a potential security weakness in Talvrin.",
    linkLabel: "Verified contact method",
    href: "#contact-method",
    note: "Security-owned intake — see the contact method below.",
  },
  {
    prompt: "I found an exposed Talvrin-related secret, token, or key.",
    linkLabel: "Verified contact method",
    href: "#contact-method",
    note: "Don't paste the secret itself — describe it at a high level only.",
  },
  {
    prompt: "A service seems unavailable, slow, or degraded.",
    linkLabel: "System Status",
    href: "/support/system-status",
    note: "A live outage doesn't by itself prove a vulnerability.",
  },
  {
    prompt: "I hit a keyboard, screen-reader, or other accessibility barrier.",
    linkLabel: "Accessibility Support",
    href: "/support/accessibility-support",
    note: "Security Contact is never the accessibility intake, even for barriers inside a security form.",
  },
  {
    prompt: "I have a general question or don't know where to start.",
    linkLabel: "Help Center",
    href: "/support/help-center",
    note: "The best first stop for how-to and account questions.",
  },
  {
    prompt: "I have a privacy or personal-data request.",
    note: "An approved Privacy/Legal destination is not yet published for this build. Suspected security exposure can still be reported above.",
    unavailable: true,
  },
];

function RouteCardItem({ card }: { card: RouteCard }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-xl border border-ink/10 bg-white p-[22.8px]">
      <p className="text-[15px] font-semibold leading-[21.75px] text-ink">{card.prompt}</p>
      {card.unavailable ? (
        <UnavailablePill className="mt-0.5" />
      ) : (
        card.href &&
        card.linkLabel && (
          <Link href={card.href} className="text-sm font-bold text-accent-violet hover:text-brand">
            {card.linkLabel} →
          </Link>
        )
      )}
      <p className="text-[13px] leading-[19.5px] text-muted">{card.note}</p>
    </div>
  );
}

export default function RouteBySituationSection() {
  const [cardA, cardB, cardC, cardD, cardE, cardF] = cards;

  return (
    <section id="route-by-situation" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[700px]">
          <SectionEyebrow>Route by Situation</SectionEyebrow>
          <SectionHeading>Find the right destination before you report anything.</SectionHeading>
          <SectionLede>
            Most support needs aren&apos;t security issues. Picking the right destination first keeps
            your report — and your data — out of the wrong queue.
          </SectionLede>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Reveal>
            <RouteCardItem card={cardA} />
          </Reveal>
          <Reveal delay={0.05}>
            <RouteCardItem card={cardB} />
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative hidden overflow-hidden rounded-xl border border-ink/10 bg-white lg:row-span-3 lg:block"
          >
            <Image
              src={`${IMG}/security-contact-route-situation-team.webp`}
              alt="Two colleagues reviewing documents at a table"
              fill
              sizes="(min-width: 1024px) 356px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <RouteCardItem card={cardC} />
          </Reveal>
          <Reveal delay={0.15}>
            <RouteCardItem card={cardD} />
          </Reveal>

          <Reveal delay={0.15}>
            <RouteCardItem card={cardE} />
          </Reveal>
          <Reveal delay={0.2}>
            <RouteCardItem card={cardF} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
