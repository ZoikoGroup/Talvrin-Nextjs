import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const items = [
  {
    title: "Entitlement, not assumption, gates access",
    body: "A signed institutional agreement does not itself unlock a specific source’s licensed content; the source’s own rights status governs.",
  },
  {
    title: "Restricted evidence stays visible as a state",
    body: "Where access is restricted, permitted metadata and the restriction itself are shown rather than silently omitted.",
  },
  {
    title: "No blanket redistribution",
    body: "Licensed feeds, caching and redistribution are scoped per agreement; this page does not imply unrestricted data egress.",
  },
];

export default function DataRightsControls() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_304px] lg:items-stretch lg:gap-10">
        <div>
          <Reveal>
            <SectionEyebrow>Data Rights and Controls</SectionEyebrow>
            <SectionHeading>
              Rights are evaluated per source, not assumed by relationship.
            </SectionHeading>
            <SectionLede>
              An institutional agreement does not itself unlock a source&apos;s underlying
              licensing terms. Each source&apos;s rights status is tracked independently and
              enforced server-side.
            </SectionLede>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className="flex h-full flex-col gap-2.5 rounded-[14px] border border-ink/8 bg-white p-6"
              >
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="text-sm leading-[22.4px] text-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="relative hidden overflow-hidden rounded-[14px] border border-ink/8 bg-white lg:block"
        >
          <Image
            src={`${IMG}/global-institutions-data-rights-team.webp`}
            alt="Two colleagues reviewing documents together"
            fill
            sizes="304px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
