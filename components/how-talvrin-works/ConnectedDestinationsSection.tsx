import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

type Destination = {
  title: string;
  badge: string;
  badgeType: "live" | "pending";
  description: string;
  linkText?: string;
  linkHref?: string;
};

const destinations: Destination[] = [
  {
    title: "Research Workspace",
    badge: "LIVE DESTINATION",
    badgeType: "live",
    description:
      "Owns active question and evidence exploration — the primary editor for Ask, Discover and Inspect.",
    linkText: "Open Research Workspace →",
    linkHref: "/product/research-workspace",
  },
  {
    title: "Saved Research",
    badge: "LIVE DESTINATION",
    badgeType: "live",
    description:
      "Preserves authored views and evidence- state concepts built during the Build stage.",
    linkText: "Open Saved Research →",
    linkHref: "/saved-research",
  },
  {
    title: "Change Detection",
    badge: "PENDING",
    badgeType: "pending",
    description:
      "Will own the logic and explanation of material evidence changes behind Reassess.",
  },
  {
    title: "Monitoring",
    badge: "LIVE DESTINATION",
    badgeType: "live",
    description:
      "Owns what is followed, configuration and monitor status for the Monitor stage.",
    linkText: "Open Monitoring →",
    linkHref: "/product/monitoring",
  },
];

export default function ConnectedDestinationsSection() {
  return (
    <section className="bg-[#171335] py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header Block */}
        <div className="max-w-[820px]">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[1.2px] text-[#b98132]">
              CONNECTED DESTINATIONS
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl font-bold leading-[1.18] tracking-tight text-[#f6f5fb] sm:text-4xl lg:text-[38px]">
              This page introduces the lifecycle. It does not
              <br />
              own workspace state or detection logic.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 max-w-[780px] text-base leading-relaxed text-[#f6f5fb]/72 sm:text-[17px]">
              Each stage hands off to its own canonical destination — gated by what is actually released, never a duplicate research database on this public page.
            </p>
          </Reveal>
        </div>

        {/* 2-column Layout: 4 Cards on Left, Image Card on Right */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {/* Left: 2x2 Grid of Destination Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {destinations.map((dest, idx) => (
              <Reveal key={dest.title} delay={0.2 + idx * 0.05} className="flex">
                <div className="flex w-full flex-col justify-between rounded-[14px] border border-[#f6f5fb]/14 bg-[#f6f5fb]/[0.04] p-6 backdrop-blur-sm transition-all duration-200 hover:border-[#f6f5fb]/30 hover:bg-[#f6f5fb]/[0.07]">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="whitespace-pre-line text-[17px] font-bold text-[#f6f5fb]">
                        {dest.title}
                      </h3>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider ${
                          dest.badgeType === "live"
                            ? "bg-[#63a876]/15 text-[#63a876]"
                            : "bg-[#b98132]/15 text-[#b98132]"
                        }`}
                      >
                        {dest.badge}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[#f6f5fb]/65">
                      {dest.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-1">
                    {dest.linkText && dest.linkHref ? (
                      <Link
                        href={dest.linkHref}
                        className="inline-flex items-center text-[13px] font-semibold text-[#b4a8ff] transition-colors duration-150 hover:text-white"
                      >
                        {dest.linkText}
                      </Link>
                    ) : (
                      <div className="h-5" />
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right: Large Image Card */}
          <Reveal delay={0.3} className="flex">
            <div className="relative flex h-full min-h-[320px] w-full items-center justify-center overflow-hidden rounded-[14px] border border-[#f6f5fb]/14 bg-[#f6f5fb]/[0.04] p-4 shadow-xl backdrop-blur-sm transition-all duration-200 hover:border-[#f6f5fb]/30 hover:bg-[#f6f5fb]/[0.07]">
              <div className="relative aspect-[630/420] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/how-talvrin-works/destinations-preview.png"
                  alt="Connected destinations and canonical state overview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 630px"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
