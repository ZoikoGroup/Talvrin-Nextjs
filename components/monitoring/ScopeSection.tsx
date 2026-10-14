import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const categories = [
  {
    title: "Issuer filings & disclosures",
    tag: "CONCEPTUAL",
    body: "Primary filings and amendments tied to a saved issuer question.",
  },
  {
    title: "Central bank communications",
    tag: "CONCEPTUAL",
    body: "Statements, minutes and policy documents within supported institutions.",
  },
  {
    title: "Economic & statistical releases",
    tag: "CONCEPTUAL",
    body: "Official releases and revisions linked to a monitored indicator.",
  },
  {
    title: "Analyst & research notes",
    tag: "CONCEPTUAL",
    body: "User- or analyst-authored interpretation, kept distinct from primary sources.",
  },
  {
    title: "Market-price movement",
    tag: "BOUNDARY",
    body: "Treated as a separate signal category — never substituted for an evidence-change alert.",
  },
  {
    title: "Policy & regulatory documents",
    tag: "CONCEPTUAL",
    body: "Regulatory filings and rule changes relevant to a saved research scope.",
  },
];

export default function ScopeSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Scope</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[800px]">
            What can be monitored, within approved coverage.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
            Categories below illustrate the kind of source material a monitored
            research view can relate to. None implies universal market, source
            or licensing coverage.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_260px] xl:grid-cols-[minmax(0,1fr)_304px]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {categories.map((category, index) => (
              <Reveal
                key={category.title}
                delay={0.05 * (index + 2)}
                className="rounded-2xl border border-ink/10 bg-surface p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold leading-6 text-ink">{category.title}</h3>
                  <span className="mt-0.5 shrink-0 rounded-full border border-dashed border-ink/20 bg-white px-2 py-0.5 text-[10px] font-bold tracking-wide text-gray-600">
                    {category.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-5 text-gray-600">{category.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:aspect-[16/9] lg:aspect-auto lg:min-h-[295px]"
          >
            <Image
              src="/images/product/monitoring/monitoring-scope-colleagues.webp"
              alt="Two colleagues laughing together during a meeting"
              fill
              sizes="(min-width: 1280px) 304px, (min-width: 1024px) 260px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-gray-600">
            Monitoring activates for a category only once Market Coverage and
            Data Rights registries confirm it is genuinely supported.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
