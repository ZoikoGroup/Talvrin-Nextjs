import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const routes = [
  {
    title: "Contact Talvrin",
    description: "General, non-media, or any question that is not a press request.",
    label: "Go to Contact Talvrin",
    href: "/company/contact",
  },
  {
    title: "Press and Media",
    description: "Full newsroom, quick facts, and media resources hub.",
    label: "Go to Press and Media",
    href: "/company/press-media",
  },
  {
    title: "Enterprise Enquiries",
    description: "Organization-scale evaluation, procurement, and institutional fit.",
    label: "Go to Enterprise Enquiries",
    href: "/connect/enterprise-enquiries",
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

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </Container>
    </section>
  );
}
