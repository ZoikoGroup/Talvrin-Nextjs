import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const standards = [
  "Sources remain connected to material factual claims wherever publication rights permit.",
  "Material corrections remain visible with a date and a concise explanation.",
];

const links = [
  { label: "Explore the Talvrin Trust Center →", href: "/trust/trust-center" },
  { label: "Report a Possible Error →", href: "/resources/contact-support" },
];

export default function EditorialStandardsSection() {
  return (
    <section id="editorial-standards" className="scroll-mt-32 bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="violet">Editorial Standards</SectionEyebrow>
          <SectionHeading>
            Talvrin newsroom content must be accurate, attributable, date-specific, and supported
            by approved evidence.
          </SectionHeading>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,384px)_minmax(0,1fr)] lg:gap-8">
          <div className="flex flex-col gap-5">
            {standards.map((standard, index) => (
              <Reveal
                key={standard}
                delay={index * 0.08}
                className="rounded-xl border border-ink/10 bg-white p-5"
              >
                <p className="text-base leading-6 text-slate-600">{standard}</p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.15}
            className="relative aspect-[4/3] overflow-hidden sm:aspect-[2/1] lg:aspect-[848/255] rounded-xl border border-ink/10 bg-white"
          >
            <Image
              src="/images/company/newsroom/newsroom-editorial-standards-team.webp"
              alt="Four colleagues talking together in a bright office"
              fill
              sizes="(min-width: 1024px) 848px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
