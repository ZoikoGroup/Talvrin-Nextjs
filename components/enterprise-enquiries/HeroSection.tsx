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
              Enterprise Enquiries
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-[720px] text-base leading-7 text-surface/90 sm:text-lg sm:leading-8">
              Discuss evidence-linked public-market research for professional and institutional teams — fit,
              governance, and deployment considerations, without presuming product or market availability.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-[680px] text-base leading-6 text-surface/60">
              This route is for organizations evaluating Talvrin at scale: asset managers, bank research desks,
              advisory groups, and institutions with procurement, security, or data-rights review ahead of them.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="flex flex-col items-stretch gap-4 pt-3 sm:flex-row sm:items-center">
            <Link
              href="#start-enquiry"
              className="inline-flex items-center justify-center rounded-lg bg-surface px-6 py-3.5 text-center text-base font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
            >
              Discuss an Enterprise Requirement
            </Link>
            <Link
              href="/how-talvrin-works"
              className="text-center text-sm font-semibold text-surface/90 transition-colors hover:text-surface"
            >
              Explore the Evidence Model →
            </Link>
          </Reveal>

          <Reveal delay={0.3} className="max-w-[620px] pt-1">
            <p className="text-xs leading-5 text-surface/50">
              Research and intelligence only. Not investment advice. A message receipt is not a response,
              approval, pilot, or contract.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[270/380] w-full max-w-[270px] overflow-hidden rounded-2xl bg-white lg:mx-0"
        >
          <Image
            src={`${IMG}/enterprise-enquiries-hero-planning.png`}
            alt="Colleagues reviewing detailed plans together at a table"
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
