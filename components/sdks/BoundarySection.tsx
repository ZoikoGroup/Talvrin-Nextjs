import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const boundaries = [
  {
    title: "Runtime / platform",
    mayState: "Exact tested and supported versions from SDK release metadata.",
    image: "sdks-boundary-runtime.webp",
    alt: "Developer working at a wall of monitors",
  },
  {
    title: "Package / distribution",
    mayState: "Exact approved package identity and distribution source.",
    image: "sdks-boundary-package.webp",
    alt: "Hands holding a cardboard package",
  },
  {
    title: "Authentication",
    mayState: "Which approved method the SDK supports, and a safe configuration pattern.",
    image: "sdks-boundary-authentication.webp",
    alt: "Team gathered around a laptop",
  },
  {
    title: "Authorization",
    mayState: "How approved permission constructs are supplied, if the SDK implements helpers for them.",
    image: "sdks-boundary-authorization.webp",
    alt: "Colleagues talking beside a laptop",
  },
  {
    title: "Entitlement / data rights",
    mayState: "Where specified, the SDK propagates and returns rights outcomes.",
    image: "sdks-boundary-entitlement.webp",
    alt: "Analyst reviewing dashboards on a laptop",
  },
  {
    title: "Coverage",
    mayState:
      "Which capabilities, markets, or datasets are released, per coverage and data registries.",
    image: "sdks-boundary-coverage.webp",
    alt: "Team reviewing charts on a tablet",
  },
  {
    title: "Evidence / provenance",
    mayState: "How source and evidence metadata maps into SDK objects.",
    image: "sdks-boundary-evidence.webp",
    alt: "Person studying a wall of documents",
  },
];

export default function BoundarySection() {
  return (
    <section id="boundary-model" className="scroll-mt-24 bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="amber">Runtime, Auth &amp; Integrity Boundary</SectionEyebrow>
          <SectionHeading inverted>
            What an SDK page may state — and where authority stays external.
          </SectionHeading>
          <SectionLede inverted className="max-w-[780px] sm:text-base sm:leading-6">
            An SDK can describe its own behavior. It can never speak for identity, entitlement,
            coverage, or rights decisions owned elsewhere.
          </SectionLede>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {boundaries.map((boundary, index) => (
            <Reveal
              key={boundary.title}
              delay={index * 0.04}
              className="overflow-hidden rounded-2xl bg-[#1b1745]"
            >
              <h3 className="border-b border-white/10 px-5 py-4 text-base font-bold text-white">
                {boundary.title}
              </h3>
              {/* Text and photo only sit side by side once the card itself is wide enough. */}
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col gap-2 bg-accent-violet/10 px-5 py-4">
                  <p className="font-mono text-xs font-bold tracking-wide text-indigo-300">
                    MAY STATE
                  </p>
                  <p className="text-sm leading-5 text-white/80">{boundary.mayState}</p>
                </div>
                <div className="relative aspect-[16/9] w-full bg-white/5 lg:aspect-auto lg:min-h-[136px]">
                  <Image
                    src={`/images/developers/SDKs/${boundary.image}`}
                    alt={boundary.alt}
                    fill
                    sizes="(min-width: 1024px) 207px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
