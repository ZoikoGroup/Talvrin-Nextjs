import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede, StatusPill } from "./shared";

type Resource = {
  title: string;
  description: string;
  link?: { label: string; href: string };
  unavailable?: boolean;
};

const resources: Resource[] = [
  {
    title: "Statements & Release History",
    description: "Approved announcements and prior public statements.",
    link: { label: "Visit the Newsroom", href: "/company/newsroom" },
  },
  {
    title: "Company Fact Sheet",
    description: "Quotable boilerplate and quick facts reviewed for press use.",
    link: { label: "View Quick Facts", href: "/company/press-media" },
  },
  {
    title: "Spokesperson Verification",
    description: "Confirm a quote attributed to Talvrin before you publish — use the form below.",
    unavailable: true,
  },
  {
    title: "Leadership Bios",
    description: "Approved leadership information; photo availability varies by individual.",
    link: { label: "View Leadership", href: "/leadership" },
  },
];

export default function MediaResourcesSection() {
  return (
    <section id="media-resources" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="max-w-[1132px]">
        <Reveal>
          <SectionEyebrow>Media Resource Register</SectionEyebrow>
          <SectionHeading>Statements, spokesperson verification, and brand assets.</SectionHeading>
          <SectionLede>
            Each resource below is marked as currently available or not yet published — never implied.
          </SectionLede>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {resources.map((resource, index) => (
              <Reveal
                key={resource.title}
                delay={index * 0.05}
                className="flex flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-ink">{resource.title}</h3>
                  {resource.unavailable && <StatusPill>Not yet available</StatusPill>}
                </div>
                <p className="text-xs leading-5 text-muted">{resource.description}</p>
                {resource.link && (
                  <Link
                    href={resource.link.href}
                    className="mt-auto pt-3 text-xs font-bold text-accent-violet transition-colors hover:text-ink"
                  >
                    {resource.link.label} →
                  </Link>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.15}
            className="relative min-h-[260px] overflow-hidden rounded-xl border border-ink/10 bg-surface"
          >
            <Image
              src={`${IMG}/press-enquiries-media-resources-desk.png`}
              alt="Overhead view of a team working together at a table with laptops and notebooks"
              fill
              sizes="(min-width: 1024px) 542px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
