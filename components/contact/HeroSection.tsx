import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(640px 440px at 12% 0%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 88% 88%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-12 xl:grid-cols-[minmax(0,720px)_minmax(0,494px)] xl:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Contact Talvrin</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Contact Talvrin
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[720px] text-lg leading-8 text-white/90">
              Choose the route that best matches your question so it can reach the appropriate
              approved team or destination.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6"
          >
            <LinkButton href="#choose-a-route" variant="onDark">
              Choose a Contact Route
            </LinkButton>
            <Link
              href="/about-talvrin"
              className="inline-flex items-center justify-center text-base font-semibold text-indigo-300 transition-colors hover:text-white"
            >
              About Talvrin →
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[494/360] w-full overflow-hidden rounded-2xl bg-white/5"
        >
          <Image
            src="/images/company/contact/contact-hero-meeting.webp"
            alt="Two colleagues talking over a laptop in an office"
            fill
            priority
            sizes="(min-width: 1280px) 494px, (min-width: 1024px) 440px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
