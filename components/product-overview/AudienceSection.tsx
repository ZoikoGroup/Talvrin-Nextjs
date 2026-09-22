import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface AudienceCard {
  title: string;
  description: string;
  href: string;
  linkText: string;
}

const audiences: AudienceCard[] = [
  {
    title: "Self-directed investors",
    description:
      "A more disciplined way to investigate public markets around source-linked evidence and revisit the reasoning behind a view.",
    href: "/research-workspace",
    linkText: "Research Workspace / Evidence →",
  },
  {
    title: "Investment professionals",
    description:
      "Efficient access to source-linked evidence, context, and monitored research views.",
    href: "/research-workspace",
    linkText: "Research Workspace / Monitoring →",
  },
  {
    title: "Financial Institutions",
    description:
      "Scalable, governed, reviewable research capabilities across teams and markets.",
    href: "/enterprise",
    linkText: "Enterprise / Request Access →",
  },
  {
    title: "Asset managers",
    description:
      "Research infrastructure that emphasizes provenance, reviewability, and durability.",
    href: "/solutions",
    linkText: "Enterprise / Solutions →",
  },
];

export default function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div>
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#6C5CE7]">
              AUDIENCE ROUTING
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Built for people who need to know why.
            </h2>
          </Reveal>
        </div>

        {/* 3-Column Layout: 25%, 25%, 50% width distribution */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Column 1: First 2 cards stacked (approx 25% width -> lg:col-span-3) */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            {audiences.slice(0, 2).map((item, index) => (
              <Reveal
                key={item.title}
                delay={0.05 * (index + 1)}
                className="flex flex-1"
              >
                <div className="flex w-full flex-col justify-between rounded-2xl border border-ink/10 bg-[#F9F8FC] p-6 shadow-xs transition-colors hover:border-ink/20">
                  <div>
                    <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink/70 sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-ink/10">
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-xs font-semibold tracking-wide text-[#6C5CE7] transition-colors hover:text-ink"
                    >
                      {item.linkText}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Column 2: Last 2 cards stacked (approx 25% width -> lg:col-span-3) */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            {audiences.slice(2, 4).map((item, index) => (
              <Reveal
                key={item.title}
                delay={0.05 * (index + 3)}
                className="flex flex-1"
              >
                <div className="flex w-full flex-col justify-between rounded-2xl border border-ink/10 bg-[#F9F8FC] p-6 shadow-xs transition-colors hover:border-ink/20">
                  <div>
                    <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink/70 sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-ink/10">
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-xs font-semibold tracking-wide text-[#6C5CE7] transition-colors hover:text-ink"
                    >
                      {item.linkText}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Column 3: Large Featured Image (approx 50% width -> lg:col-span-6) */}
          <Reveal delay={0.3} className="flex lg:col-span-6">
            <div className="relative w-full h-full min-h-[350px] overflow-hidden rounded-2xl border border-ink/10 bg-[#F6F5FB] shadow-xl">
              <Image
                src="/images/product/overview/audience.png"
                alt="Diverse team collaborating around a desk workspace with laptops and documents"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
