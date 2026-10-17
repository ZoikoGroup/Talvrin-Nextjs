import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const routes = [
  {
    title: "U.S. Treasuries",
    body: "Sovereign-market research connected to Federal Reserve policy evidence.",
    href: "/markets/fixed-income",
    cta: "View U.S. Treasuries",
  },
  {
    title: "U.K. Gilts",
    body: "Sovereign-market research connected to Bank of England policy evidence.",
    href: "/markets/fixed-income",
    cta: "View U.K. Gilts",
  },
  {
    title: "Japanese Government Bonds",
    body: "Sovereign-market research connected to Bank of Japan policy evidence.",
    href: "/markets/fixed-income",
    cta: "View Japanese Government Bonds",
  },
  {
    title: "Macro & Economics",
    body: "Economic releases, policy and macro evidence adjacent to central-bank decisions.",
    href: "/markets",
    cta: "View Macro & Economics",
  },
  {
    title: "German Bunds",
    body: "Sovereign-market research connected to European Central Bank policy evidence.",
    href: "/markets/fixed-income",
    cta: "View German Bunds",
  },
  {
    title: "Fixed Income",
    body: "Broader evidence-led research across rates and sovereign-market views.",
    href: "/markets/fixed-income",
    cta: "View Fixed Income",
  },
];

function RouteCard({ title, body, href, cta }: (typeof routes)[number]) {
  return (
    <Link
      href={href}
      className="flex h-full flex-col gap-2 rounded-[14px] border border-ink/8 bg-surface p-[23px] transition-colors hover:border-ink/20"
    >
      <h3 className="text-[16px] font-bold text-ink">{title}</h3>
      <p className="text-sm leading-[21px] text-slate-600">{body}</p>
      <span className="mt-auto pt-2 text-[13px] font-semibold text-accent-violet">{cta} →</span>
    </Link>
  );
}

export default function AdjacentMarketRoutes() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Adjacent Market Routes</SectionEyebrow>
          <SectionHeading>
            Central-bank evidence connects to adjacent sovereign and macro research.
          </SectionHeading>
          <p className="mt-5 max-w-[800px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Cross-links imply no endorsement, derived availability or factual dependence — each
            destination carries its own verified coverage record.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,760px)_minmax(0,500px)]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route, index) => (
              <Reveal key={route.title} delay={index * 0.05}>
                <RouteCard {...route} />
              </Reveal>
            ))}
          </div>
          <Reveal className="relative min-h-[260px] overflow-hidden rounded-[14px] border border-ink/8">
            <Image
              src="/images/markets-central-banks/markets-central-banks-adjacent-markets-trading.webp"
              alt="A trading floor researching sovereign-market evidence"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
