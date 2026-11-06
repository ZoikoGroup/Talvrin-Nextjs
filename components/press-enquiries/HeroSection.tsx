import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(900px 560px at 12% 0%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%)",
        }}
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,785px)_minmax(0,270px)] lg:justify-center lg:gap-10">
        <div className="flex flex-col items-start gap-4">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[1.17px] text-accent-amber">Talvrin / Connect</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-[-0.56px] text-surface sm:text-5xl lg:text-[56px] lg:leading-[61.6px]">
              Press Enquiries
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-[720px] text-base leading-7 text-surface/90 sm:text-lg sm:leading-8">
              Find approved Talvrin information and request a media response through a verified press
              pathway, where available.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-[680px] text-base leading-6 text-surface/60">
              This route is for journalists, editors, producers, and analysts working on coverage of
              Talvrin — fact checks, comment requests, on-record quotes, and brand-asset permissions.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="flex flex-col items-stretch gap-4 pt-3 sm:flex-row sm:items-center">
            <Link
              href="#send-enquiry"
              className="inline-flex items-center justify-center rounded-lg bg-surface px-6 py-3.5 text-center text-base font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
            >
              Send a Press Enquiry
            </Link>
            <Link
              href="/company/press-media"
              className="text-center text-sm font-semibold text-surface/90 transition-colors hover:text-surface"
            >
              Browse Press and Media Resources →
            </Link>
          </Reveal>

          <Reveal delay={0.3} className="max-w-[620px] pt-1">
            <p className="text-xs leading-5 text-surface/50">
              Not investment advice, product support, or a confidential data-provider channel. A message
              receipt is not a published response, interview, quote, or approval.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[270/380] w-full max-w-[270px] overflow-hidden rounded-2xl bg-white lg:mx-0"
        >
          <Image
            src={`${IMG}/press-enquiries-hero-interview.png`}
            alt="A smiling professional speaking with a colleague across a desk with a laptop"
            fill
            priority
            sizes="(min-width: 1024px) 270px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
