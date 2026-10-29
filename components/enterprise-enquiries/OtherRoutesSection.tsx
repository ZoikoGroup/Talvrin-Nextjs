import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const routes = [
  {
    title: "Contact Talvrin",
    description: "General questions that aren't an organization-scale evaluation.",
    label: "Go to Contact Talvrin",
    href: "/company/contact",
  },
  {
    title: "Request Access",
    description: "Individual access to the Talvrin research product.",
    label: "Go to Request Access",
    href: "/connect/request-access",
  },
  {
    title: "Press Enquiries",
    description: "Journalist and media requests — fact checks, comment, and assets.",
    label: "Go to Press Enquiries",
    href: "/connect/press-enquiries",
  },
  {
    title: "Security Contact",
    description: "Security incidents and vulnerability disclosure — not handled here.",
    label: "Go to Security Contact",
    href: "/security-contact",
  },
];

export default function OtherRoutesSection() {
  return (
    <section id="other-routes" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="max-w-[1132px]">
        <Reveal>
          <SectionEyebrow>Connect</SectionEyebrow>
          <SectionHeading>Not quite what you need?</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {routes.map((route, index) => (
              <Reveal
                key={route.title}
                delay={index * 0.05}
                className="flex flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-5"
              >
                <h3 className="text-base font-bold text-ink">{route.title}</h3>
                <p className="text-xs leading-5 text-muted">{route.description}</p>
                <Link
                  href={route.href}
                  className="mt-auto pt-2 text-xs font-bold text-accent-violet transition-colors hover:text-ink"
                >
                  {route.label} →
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.15}
            className="relative min-h-[260px] overflow-hidden rounded-xl border border-ink/10 bg-surface"
          >
            <Image
              src={`${IMG}/enterprise-enquiries-routes-team.png`}
              alt="A group of colleagues gathered around a laptop"
              fill
              sizes="(min-width: 1024px) 542px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
