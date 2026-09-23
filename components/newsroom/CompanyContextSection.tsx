import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionHeading, SectionLede } from "./shared";

const links = [
  { label: "About Zoiko Markets →", href: "/company/about-zoiko-markets" },
  { label: "Zoiko Financial Group →", href: "/company/zoiko-financial-group" },
  { label: "About Talvrin →", href: "/company/about-talvrin" },
];

export default function CompanyContextSection() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,800px)_minmax(0,384px)] lg:gap-12">
        <div>
          <Reveal>
            {/* This page's dark sections use the lighter indigo the design calls for, not the shared violet. */}
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
              Company Context
            </p>
            <SectionHeading inverted>
              Talvrin is a trading name of Zoiko Markets, a Zoiko Financial Group company.
            </SectionHeading>
            <SectionLede inverted className="max-w-[760px] sm:text-base sm:leading-7">
              Newsroom content states the approved corporate relationship and never infers legal
              authorship, spokesperson authority, or regulatory responsibility for a specific
              publication.
            </SectionLede>
          </Reveal>

          <Reveal delay={0.15} className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-indigo-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[428/300] w-full overflow-hidden rounded-2xl bg-white/5"
        >
          <Image
            src="/images/company/newsroom/newsroom-company-context-office.webp"
            alt="Colleague holding a tablet beside a collaboration space in an office"
            fill
            sizes="(min-width: 1024px) 384px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
