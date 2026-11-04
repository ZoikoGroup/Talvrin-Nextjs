import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const CATEGORIES = [
  {
    title: "Strictly Necessary",
    text: "Keeps TALVRIN working, secure and accessible — for example maintaining your session and remembering your cookie choice. The service cannot run without these.",
    status: "Always active",
    tone: "bg-ink/10 text-ink",
  },
  {
    title: "Analytics",
    text: "Helps TALVRIN understand which pages and workflows are used and where comprehension breaks down — privacy-safe measurement, not behavioral surveillance. Off until you turn it on.",
    status: "Off by default",
    tone: "bg-ink/10 text-muted",
  },
  {
    title: "Preferences & Functionality",
    text: "Remembers interface choices, such as layout or display settings, so they don’t reset on every visit. Off by default until you choose otherwise.",
    status: "Off by default",
    tone: "bg-ink/10 text-muted",
  },
  {
    title: "Marketing",
    text: "No marketing, advertising or social technology is currently deployed on TALVRIN. This category activates only once an approved vendor exists.",
    status: "Not deployed",
    tone: "bg-accent-amber/10 text-[#8a5a00]",
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-surface py-16 sm:py-[72px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,900px)_minmax(0,384px)] lg:justify-between lg:gap-4">
        <div className="flex flex-col gap-3">
          <Reveal className="pb-5">
            <SectionEyebrow>Types of technology</SectionEyebrow>
            <SectionHeading className="max-w-[640px]">
              Four categories cover cookies, local storage and comparable technologies.
            </SectionHeading>
            <p className="mt-3 max-w-[680px] text-base leading-6 text-muted">
              Each category below reflects what&apos;s actually deployed on TALVRIN today — not a
              template list. To change your optional choices, use Cookie Preferences.
            </p>
          </Reveal>

          <ul className="flex flex-col gap-3">
            {CATEGORIES.map((c, i) => (
              <Reveal
                as="li"
                key={c.title}
                delay={i * 0.05}
                className="flex flex-col items-start gap-4 rounded-2xl border border-ink/10 bg-white px-6 py-5 sm:flex-row sm:justify-between sm:gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-ink">{c.title}</h3>
                  <p className="max-w-[580px] text-sm leading-6 text-muted">{c.text}</p>
                </div>
                <span
                  className={clsx(
                    "shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide",
                    c.tone
                  )}
                >
                  {c.status}
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal
            delay={0.2}
            className="flex flex-col items-start gap-4 rounded-xl border border-accent-violet/20 bg-accent-violet/5 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="max-w-[620px] text-sm leading-6 text-ink">
              Want to turn optional categories on or off? Your choices live in Cookie Preferences, not
              on this page.
            </p>
            <Link
              href="/legal/cookie-preferences"
              className="shrink-0 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-surface transition-colors hover:bg-ink-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Open Cookie Preferences →
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative hidden aspect-[384/551] w-full overflow-hidden rounded-2xl bg-white lg:mt-[200px] lg:block lg:self-start"
        >
          <Image
            src={`${IMG}/categories-reading.webp`}
            alt="A person reading a book while leaning against a table in a workshop"
            fill
            sizes="384px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
