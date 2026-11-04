import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const secondary =
  "inline-flex items-center justify-center rounded-lg border border-ink/25 px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/** Closing CTA shared by the Cookies and Cookie Preferences pages; only the heading, copy and primary link differ. */
export default function CTASection({
  heading = "Need more detail?",
  body = "Review the full Cookie Notice for category definitions and governing rules, or reach an authorized assistance route — don't assume real-time support here.",
  primary = { label: "Read the Cookie Notice", href: "/legal/cookie-notice" },
}: {
  heading?: string;
  body?: string;
  primary?: { label: string; href: string };
}) {
  return (
    <section className="bg-surface py-16 sm:py-[72px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[900px] flex-col items-center gap-3.5 text-center">
          <h2 className="text-3xl font-bold leading-10 text-ink">{heading}</h2>
          <p className="max-w-[620px] text-base leading-6 text-muted">{body}</p>
          <div className="flex w-full flex-col items-stretch justify-center gap-3.5 pt-3.5 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href={primary.href}
              className="inline-flex items-center justify-center rounded-lg bg-ink px-6 py-3.5 text-base font-semibold text-surface transition-colors hover:bg-ink-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {primary.label}
            </Link>
            <Link href="/legal/privacy-notice" className={secondary}>
              Privacy Notice →
            </Link>
            <Link href="/resources/contact-support" className={secondary}>
              Contact Support →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
