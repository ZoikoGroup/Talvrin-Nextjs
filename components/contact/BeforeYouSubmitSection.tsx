import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

const linkClasses = "text-accent-violet transition-colors hover:text-ink";

const notes: ReactNode[] = [
  "Do not include passwords, access credentials, financial account data, confidential market information, or unnecessary sensitive personal information.",
  <>
    Use the approved{" "}
    <Link href="#choose-a-route" className={linkClasses}>
      Security Reporting
    </Link>{" "}
    route for vulnerability or security disclosures.
  </>,
  <>
    Use the approved{" "}
    <Link href="#choose-a-route" className={linkClasses}>
      Privacy
    </Link>{" "}
    route for personal-data questions or rights requests.
  </>,
  <>
    Use{" "}
    <Link href="/company/press-media" className={linkClasses}>
      Press and Media
    </Link>{" "}
    for professional journalist or producer enquiries.
  </>,
  <>
    Use{" "}
    <Link href="/careers" className={linkClasses}>
      Careers
    </Link>{" "}
    or Candidate Support for vacancies, applications, or accommodations.
  </>,
  "Submitting an enquiry does not guarantee a response, meeting, product access, commercial offer, support outcome, or timeline.",
];

export default function BeforeYouSubmitSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,760px)_minmax(0,418px)] lg:gap-12">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Before You Submit</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-5 flex flex-col gap-4">
              {notes.map((note, index) => (
                <li key={index} className="flex items-start gap-3 text-base leading-6 text-ink">
                  <span className="text-accent-violet" aria-hidden="true">
                    —
                  </span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative aspect-[418/314] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/company/contact/contact-before-submit-team.webp"
            alt="Colleagues reviewing documents together at a desk"
            fill
            sizes="(min-width: 1024px) 418px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
