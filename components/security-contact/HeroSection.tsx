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
            "radial-gradient(760px 540px at 8% 0%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%), radial-gradient(640px 480px at 100% 100%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
        }}
      />

      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-8 xl:grid-cols-[minmax(0,705px)_minmax(0,415px)] xl:justify-between">
        <div className="flex flex-col items-start gap-5">
          <Reveal>
            <p className="text-[13px] font-bold uppercase tracking-[1.17px] text-accent-amber">Support</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-[-0.56px] text-surface sm:text-5xl lg:text-[56px] lg:leading-[61.6px]">
              Security Contact
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-[680px] text-base leading-7 text-surface/85 sm:text-[19px] sm:leading-[31.35px]">
              Use Security Contact to report a potential Talvrin security weakness or other security
              concern through the approved security-owned channel. If your issue is account access, an
              outage, accessibility, or a general product problem, use the dedicated Support destination
              instead.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              role="note"
              className="flex max-w-[680px] items-start gap-3 rounded-xl border border-surface/18 bg-surface/8 px-5 py-[19px]"
            >
              <span aria-hidden="true" className="pt-0.5 text-surface">
                ⚑
              </span>
              <p className="text-[15px] leading-6 text-surface">
                <strong className="font-bold">
                  Don&apos;t include passwords, one-time codes, recovery codes, API keys/tokens/private
                  keys, or unnecessary personal or confidential data.
                </strong>{" "}
                We will never ask you for them here.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="flex flex-col items-stretch gap-4 pt-1 sm:flex-row sm:items-center">
            <Link
              href="#report-it"
              className="inline-flex items-center justify-center rounded-lg bg-surface px-6 py-[15px] text-center text-base font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
            >
              Report a security concern
            </Link>
            <Link
              href="/support/help-center"
              className="text-center text-sm font-semibold text-surface/85 transition-colors hover:text-surface"
            >
              Choose another support path →
            </Link>
          </Reveal>

          <Reveal delay={0.3} className="max-w-[620px]">
            <p className="text-[13px] leading-[20.8px] text-surface/50">
              No security badge, certification, &quot;24/7,&quot; response-time, bug-bounty, safe-harbor,
              or encryption claim appears on this page without approved authority.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[415/392] w-full max-w-[415px] overflow-hidden rounded-xl bg-surface lg:mx-0"
        >
          <Image
            src={`${IMG}/security-contact-hero-meeting.webp`}
            alt="Two colleagues discussing work across an office desk"
            fill
            priority
            sizes="(min-width: 1280px) 415px, (min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
