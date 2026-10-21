import Link from "next/link";
import { Fragment } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const links = [
  { label: "Browse all terms", href: "#all-terms" },
  { label: "Suggest a correction", href: "/support/report-a-problem" },
  { label: "Methodology", href: "/research/talvrin-methodology" },
];

export default function CtaSection() {
  return (
    <section className="border-t border-ink/10 bg-surface py-16 sm:py-[72px]">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-[640px] text-2xl font-bold leading-tight text-ink sm:text-3xl">
            Governed terminology, not a static word list.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link, index) => (
            <Fragment key={link.label}>
              {index > 0 && (
                <span aria-hidden="true" className="text-sm font-semibold text-ink/20">
                  ·
                </span>
              )}
              <Link
                href={link.href}
                className="text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            </Fragment>
          ))}
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[600px] text-xs leading-5 text-gray-600">
            Last editorial review: 17 October 2026. Every published definition
            requires named editorial review and versioned supporting references.
          </p>
          <p className="mt-4 text-xs text-gray-600">
            Educational definitions; not investment, legal, tax or personalized
            financial advice.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
