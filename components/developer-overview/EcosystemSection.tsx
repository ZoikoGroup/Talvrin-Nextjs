import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const destinations = [
  {
    title: "Developer Overview",
    description:
      "The current page — orientation and governed availability truth for all developer destinations.",
    state: "Current",
    current: true,
  },
  {
    title: "API Documentation",
    description: "Canonical technical reference for any released API.",
    state: "Not publicly released",
    current: false,
  },
  {
    title: "Data APIs",
    description: "Programmatic access to released evidence and market data surfaces.",
    state: "Not publicly released",
    current: false,
  },
  {
    title: "Integrations",
    description: "Approved connections between Talvrin and external systems.",
    state: "Not publicly released",
    current: false,
  },
];

export default function EcosystemSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Developer Ecosystem</SectionEyebrow>
          <SectionHeading inverted>
            The complete developer taxonomy — shown truthfully, not speculatively.
          </SectionHeading>
          <SectionLede inverted className="max-w-[760px] sm:text-base sm:leading-6">
            Every destination Talvrin plans for developers is listed below with its real current
            state. Unreleased destinations are informational only — never a disguised or dead link.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-2xl bg-white/10 p-2">
          <ul className="flex flex-col gap-2">
            {destinations.map((destination) => (
              <li
                key={destination.title}
                className="flex flex-col gap-3 rounded-xl bg-[#1b1745] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-white">{destination.title}</h3>
                  <p className="mt-1 max-w-[520px] text-sm leading-5 text-white/60">
                    {destination.description}
                  </p>
                </div>
                <span
                  className={
                    destination.current
                      ? "shrink-0 self-start rounded-md bg-accent-violet/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-indigo-300 sm:self-auto"
                      : "shrink-0 self-start rounded-md bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white/60 sm:self-auto"
                  }
                >
                  {destination.state}
                </span>
              </li>
            ))}
          </ul>

          <div className="relative mt-2 aspect-[16/9] overflow-hidden rounded-xl lg:aspect-[1278/363]">
            <Image
              src="/images/developers/developer-overview/developer-overview-ecosystem-dashboards.webp"
              alt="Team reviewing market dashboards on large monitors"
              fill
              sizes="(min-width: 1310px) 1278px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
