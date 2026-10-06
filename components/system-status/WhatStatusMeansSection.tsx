import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink, SectionIntro } from "../release-notes/shared";
import { IMAGE_DIR } from "./shared";

const symptoms = [
  {
    label: "Account sign-in & permissions",
    body: "A healthy auth component doesn't prove your credential or role is valid.",
    link: { label: "Go to Account Support", href: "/support/account-support" },
  },
  {
    label: "Data rights & market coverage",
    body: "Coverage and entitlement are separate from service health — a healthy status never implies access.",
    link: { label: "View Market Coverage", href: "/markets/market-coverage" },
  },
  {
    label: "Content or data accuracy",
    body: "A healthy status does not guarantee a specific value or display is correct.",
    link: { label: "Report a Problem", href: "/support/report-a-problem" },
  },
  {
    label: "Accessibility barriers",
    body: "A fully operational service can still have a keyboard, screen-reader, or motion barrier.",
    link: { label: "Go to Accessibility Support", href: "/support/accessibility-support" },
  },
];

export default function WhatStatusMeansSection() {
  return (
    <section id="what-this-means" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="What Status Means"
            title="Operational health is not the same as access, coverage, or lifecycle."
          >
            A healthy status never proves a specific request, account, or dataset will succeed. Use
            the right destination for the symptom.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {symptoms.map((symptom, index) => (
              <Reveal key={symptom.label} delay={index * 0.05} className="h-full">
                <div className="flex h-full flex-col gap-2.5 rounded-xl border border-ink/10 bg-white p-5">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-accent-amber">
                    {symptom.label}
                  </h3>
                  <p className="text-sm leading-5 text-ink">{symptom.body}</p>
                  <div className="mt-auto pt-2">
                    <CardLink href={symptom.link.href}>{symptom.link.label}</CardLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-video overflow-hidden rounded-xl border border-ink/10 bg-white lg:aspect-auto lg:min-h-[322px]"
          >
            <Image
              src={`${IMAGE_DIR}/system-status-what-status-means.webp`}
              alt="People walking through a busy, modern office lobby"
              fill
              sizes="(min-width: 1024px) 416px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
