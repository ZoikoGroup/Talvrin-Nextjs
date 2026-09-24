import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

type Route = {
  title: string;
  description: string;
} & (
  | { available: true; linkLabel: string; href: string }
  | { available: false; note: string }
);

const routes: Route[] = [
  {
    title: "Product and Business Enquiry",
    description:
      "Questions about Talvrin, product interest, organizational evaluation, or a potential commercial conversation.",
    available: true,
    linkLabel: "Start This Enquiry →",
    href: "#general-enquiry",
  },
  {
    title: "Press and Media",
    description: "Professional media, interview, asset, fact-check, or comment requests.",
    available: true,
    linkLabel: "Go to Press and Media →",
    href: "/company/press-media",
  },
  {
    title: "Careers and Candidate Support",
    description: "Vacancies, applications, accommodations, or recruitment authenticity questions.",
    available: true,
    linkLabel: "Go to Careers →",
    href: "/careers",
  },
  {
    title: "Privacy or Data Rights",
    description: "Personal-data questions, consent, access, correction, or deletion requests.",
    available: false,
    note: "Not yet available. Do not submit personal data or rights requests through the general enquiry form.",
  },
  {
    title: "Security Reporting",
    description: "Report a potential vulnerability, security issue, or abuse concern.",
    available: false,
    note: "Not yet available. Do not submit vulnerability or security details through the general enquiry form.",
  },
  {
    title: "Accessibility Feedback",
    description: "Report a digital accessibility barrier or request an accessible alternative.",
    available: false,
    note: "Not yet available. For urgent needs, use General Enquiry and describe the barrier.",
  },
];

export default function RoutesSection() {
  return (
    <section id="choose-a-route" className="scroll-mt-32 bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">How Can We Help?</SectionEyebrow>
          <SectionHeading>
            Select the option that most closely matches your question.
          </SectionHeading>
          <SectionLede className="max-w-[760px] sm:text-base sm:leading-6">
            Specialist matters should use the dedicated route shown. A route appears here only once
            it has an approved owner, destination, and fallback.
          </SectionLede>
        </Reveal>

        {/* On wide screens the six cards stay 3-per-row and the photo takes a
            fixed fourth column across both rows, as in the design. */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,303px)]">
          {routes.map((route, index) => (
            <Reveal
              key={route.title}
              delay={index * 0.04}
              className="flex flex-col gap-3.5 rounded-2xl border border-ink/10 bg-surface p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-bold leading-6 text-ink">{route.title}</h3>
                <span
                  className={
                    route.available
                      ? "shrink-0 rounded-full bg-teal-700/10 px-2 py-1 text-xs font-bold tracking-wide text-teal-700"
                      : "shrink-0 rounded-full bg-accent-amber/10 px-2 py-1 text-xs font-bold tracking-wide text-yellow-800"
                  }
                >
                  {route.available ? "Available" : "Not Yet Available"}
                </span>
              </div>

              <p className="text-sm leading-6 text-slate-600">{route.description}</p>

              {route.available ? (
                <Link
                  href={route.href}
                  className="mt-auto text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
                >
                  {route.linkLabel}
                </Link>
              ) : (
                <p className="mt-auto text-xs leading-5 text-slate-600">{route.note}</p>
              )}
            </Reveal>
          ))}

          <Reveal
            delay={0.24}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-ink/10 sm:col-span-2 lg:col-span-3 lg:aspect-[16/5] xl:col-span-1 xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
          >
            <Image
              src="/images/company/contact/contact-routes-team.webp"
              alt="Colleagues gathered around a table in a meeting"
              fill
              sizes="(min-width: 1280px) 303px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
