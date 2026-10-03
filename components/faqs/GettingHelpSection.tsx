import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, StatusBadge, CardLink } from "./shared";

const resources = [
  {
    title: "Documentation",
    description: "Task-oriented product documentation and concepts.",
    linkLabel: "Browse Documentation",
    href: "/resources/documentation",
  },
  {
    title: "Contact Support",
    description: "Submit a support request through the current active channel.",
    linkLabel: "Contact Support",
    href: "/resources/contact-support",
  },
  {
    title: "Help Center",
    description: "Support content for common product and account questions.",
    pending: true,
  },
  {
    title: "Getting Started",
    description: "First-use guidance for new Talvrin users.",
    pending: true,
  },
];

function ResourceCard({ item }: { item: (typeof resources)[number] }) {
  return (
    <article className="flex h-full flex-col gap-2.5 rounded-2xl border border-ink/10 bg-surface px-5 py-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-ink">{item.title}</h3>
        {item.pending && <StatusBadge>Not Yet Available</StatusBadge>}
      </div>
      <p className="text-sm leading-5 text-muted">{item.description}</p>
      {item.href && item.linkLabel && (
        <CardLink href={item.href} className="mt-auto pt-1">
          {item.linkLabel}
        </CardLink>
      )}
    </article>
  );
}

export default function GettingHelpSection() {
  return (
    <section id="help" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="max-w-[1048px]">
        <Reveal>
          <SectionEyebrow tone="violet">Getting Help</SectionEyebrow>
          <SectionHeading size="md">
            Where to find documentation, guidance and support.
          </SectionHeading>
          <SectionLede>
            If a question isn&apos;t answered above, these are the right next stops.
          </SectionLede>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {resources.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <ResourceCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
