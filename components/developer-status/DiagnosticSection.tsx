import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

type Case = {
  badge: string;
  title: string;
  firstCheck: string;
  then: string;
  link: { label: string; href: string };
};

const leftCases: Case[] = [
  {
    badge: "401",
    title: "Status healthy, sign-in fails",
    firstCheck: "Your authentication method and whether the credential is still valid.",
    then: "Follow the Authentication docs. Never paste secrets into support forms.",
    link: { label: "Authentication →", href: "/developers/authentication" },
  },
  {
    badge: "SDK",
    title: "SDK error before any request",
    firstCheck: "SDK and runtime compatibility, plus local validation.",
    then: "Check SDK docs, and the Changelog if behavior changed.",
    link: { label: "SDKs →", href: "/developers/sdks" },
  },
  {
    badge: "?",
    title: "Status unknown or stale",
    firstCheck: "Don't conclude healthy or unhealthy.",
    then: "Wait for a verified update, or contact support if you're blocked.",
    link: { label: "Contact support →", href: "/resources/contact-support" },
  },
];

const rightCases: Case[] = [
  {
    badge: "DATA",
    title: "Status healthy, data missing or limited",
    firstCheck: "Coverage, data rights, filters, and source timing.",
    then: "Check Data APIs coverage and provenance guidance.",
    link: { label: "Data APIs →", href: "/developers/data-apis" },
  },
  {
    badge: "5XX",
    title: "Timeouts or server errors",
    firstCheck: "Whether an active incident lists the affected component.",
    then: "Use API error guidance. Keep your request ID for support.",
    link: { label: "API Documentation →", href: "/developers/api-documentation" },
  },
  {
    badge: "SYNC",
    title: "Status healthy, integration delayed",
    firstCheck: "Integration connection, permissions, and provider state.",
    then: "Check Integrations docs or contact support.",
    link: { label: "Integrations →", href: "/developers/integrations" },
  },
];

function CaseCard({ item, delay }: { item: Case; delay: number }) {
  return (
    <Reveal delay={delay} className="overflow-hidden rounded-2xl bg-[#1b1745]">
      <div className="flex items-center gap-2.5 border-b border-white/10 px-5 py-4">
        <span className="rounded-md bg-orange-300 px-2 py-[3px] font-mono text-xs font-bold text-ink">
          {item.badge}
        </span>
        <h3 className="text-base font-bold text-white">{item.title}</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5 bg-accent-violet/10 px-5 py-4">
          <p className="font-mono text-xs font-bold uppercase tracking-wide text-indigo-300">
            First check
          </p>
          <p className="text-sm leading-5 text-white/90">{item.firstCheck}</p>
        </div>
        <div className="flex flex-col gap-1.5 bg-white/5 px-5 py-4">
          <p className="font-mono text-xs font-bold uppercase tracking-wide text-white/60">Then</p>
          <p className="text-sm leading-5 text-white/70">{item.then}</p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-3">
        <Link
          href={item.link.href}
          className="text-sm font-semibold text-indigo-300 transition-colors hover:text-white"
        >
          {item.link.label}
        </Link>
      </div>
    </Reveal>
  );
}

export default function DiagnosticSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="amber">Diagnostic Boundary</SectionEyebrow>
          <SectionHeading inverted>
            Status is healthy, but your request still fails. Start here.
          </SectionHeading>
          <SectionLede inverted className="max-w-[780px] sm:text-base sm:leading-6">
            A healthy service does not prove your credential is valid, your workspace is entitled,
            or a market is covered. Match what you see to the right place to check.
          </SectionLede>
        </Reveal>

        {/* Two case columns flanking the photo on wide screens. */}
        <div className="mt-9 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,417px)_minmax(0,1fr)]">
          <div className="flex flex-col gap-5">
            {leftCases.map((item, index) => (
              <CaseCard key={item.badge} item={item} delay={index * 0.05} />
            ))}
          </div>

          <Reveal
            delay={0.15}
            className="relative order-last aspect-[3/2] overflow-hidden rounded-2xl bg-[#1b1745] lg:col-span-2 lg:aspect-[16/7] xl:order-none xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:aspect-auto"
          >
            <Image
              src="/images/developers/developer-status/developer-status-diagnostic-handshake.webp"
              alt="Colleagues shaking hands at a meeting"
              fill
              sizes="(min-width: 1280px) 417px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="flex flex-col gap-5 xl:col-start-3 xl:row-start-1">
            {rightCases.map((item, index) => (
              <CaseCard key={item.badge} item={item} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
