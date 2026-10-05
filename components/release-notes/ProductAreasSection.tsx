import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink, EmptyNote, SectionIntro, StatusBadge, type Status } from "./shared";

type ProductArea = {
  title: string;
  body: string;
  status: Status;
  link?: { label: string; href: string };
};

const areas: ProductArea[] = [
  {
    title: "Research",
    body: "Question-led research, organization and evidence-linked reasoning.",
    status: "available",
    link: { label: "Open Research Library", href: "/research/research-library" },
  },
  {
    title: "Evidence",
    body: "Source provenance, timing, jurisdiction and evidence relationships.",
    status: "available",
    link: { label: "Explore Evidence", href: "/product/evidence" },
  },
  {
    title: "Monitoring",
    body: "Evidence-change monitoring and watchlist alerting.",
    status: "available",
    link: { label: "See Alerts", href: "/product/alerts" },
  },
  {
    title: "Markets & Coverage",
    body: "Released market, dataset and jurisdiction availability.",
    status: "available",
    link: { label: "View Market Coverage", href: "/markets/market-coverage" },
  },
  {
    title: "Account & Workspace",
    body: "Account, team and workspace management behavior.",
    status: "unavailable",
  },
  {
    title: "Developer",
    body: "API, integration and developer-surface changes.",
    status: "available",
    link: { label: "Open the Changelog", href: "/developers/changelog" },
  },
];

function AreaCard({ area }: { area: ProductArea }) {
  return (
    <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-ink/10 bg-white px-[22px] py-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-ink">{area.title}</h3>
        <StatusBadge status={area.status} />
      </div>
      <p className="text-[13px] leading-5 text-muted">{area.body}</p>
      <div className="mt-auto flex flex-col gap-2.5">
        <EmptyNote>No release entries filed yet.</EmptyNote>
        {area.link && <CardLink href={area.link.href}>{area.link.label}</CardLink>}
      </div>
    </div>
  );
}

export default function ProductAreasSection() {
  return (
    <section id="product-areas" className="scroll-mt-32 bg-surface py-20 sm:py-[88px]">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Product Areas" title="Where a change lives in Talvrin.">
            Release entries will use the same product areas as the rest of Talvrin. Until the
            registry is approved, each area links to where that part of the product lives today.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.slice(0, 3).map((area, index) => (
            <Reveal key={area.title} delay={index * 0.05} className="h-full">
              <AreaCard area={area} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-2xl border border-ink/10 lg:row-span-2 lg:block"
          >
            <Image
              src="/images/resources/release-notes/release-notes-product-areas.webp"
              alt="Three colleagues talking in a bright office corridor"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          {areas.slice(3).map((area, index) => (
            <Reveal key={area.title} delay={(index + 3) * 0.05} className="h-full">
              <AreaCard area={area} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
