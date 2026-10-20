import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const regions = ["All", "Americas", "Europe", "Asia-Pacific", "International"];

const sources = [
  { name: "U.S. Bureau of Labor Statistics", meta: "United States · Americas · Labor statistics agency" },
  { name: "U.S. Bureau of Economic Analysis", meta: "United States · Americas · National economic accounts agency" },
  { name: "Statistics Canada", meta: "Canada · Americas · National statistical office" },
  { name: "Office for National Statistics", meta: "United Kingdom · Europe · National statistical office" },
  { name: "Statistisches Bundesamt (Destatis)", meta: "Germany · Europe · National statistical office" },
  { name: "INSEE", meta: "France · Europe · National statistical office" },
  { name: "Eurostat", meta: "European Union · Europe · Statistical office of the European Union" },
  { name: "Statistics Bureau of Japan", meta: "Japan · Asia-Pacific · National statistical office" },
  { name: "Australian Bureau of Statistics", meta: "Australia · Asia-Pacific · National statistical office" },
  { name: "International Monetary Fund", meta: "Multiple economies · International · Multilateral statistical body" },
];

function SourceCard({ name, meta }: { name: string; meta: string }) {
  return (
    <div className="flex flex-col gap-[10px] rounded-[14px] border border-ink/10 p-[23px]">
      <h3 className="text-[17px] font-bold text-ink">{name}</h3>
      <p className="text-[13px] text-slate-600">{meta}</p>
      <span className="inline-flex w-fit items-center rounded-full border border-ink/14 bg-surface px-[13px] py-[6px] text-xs font-bold text-slate-600">
        Pending registry verification
      </span>
      <p className="border-t border-ink/8 pt-[17px] text-[13px] leading-[20.15px] text-slate-600">
        No publisher enters public coverage until the Coverage Registry and Source Registry
        confirm series families, rights and operational readiness.
      </p>
    </div>
  );
}

export default function StatisticalSourceDirectory() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Statistical Source Directory</SectionEyebrow>
          <SectionHeading>Find the publisher. See the status behind its evidence.</SectionHeading>
          <p className="mt-5 max-w-[800px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Statistical agencies and international bodies below come from the entity registry
            only. No series family, evidence depth or historical claim is implied until the
            Coverage Registry approves it — directory presence is not evidence depth.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 rounded-2xl bg-surface px-7 py-6">
          <p className="text-xs font-bold uppercase tracking-[0.72px] text-slate-600">
            Search Statistical Sources
          </p>
          <div className="mt-2 w-full max-w-[420px] rounded-lg border border-ink/18 bg-white px-[17px] py-[13px] text-[15px] text-slate-500">
            Search by agency or economy…
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.72px] text-slate-600">
            Region / Economy
          </p>
          <div className="mt-2 flex flex-wrap gap-[10px]">
            {regions.map((region) => (
              <span
                key={region}
                className={
                  region === "All"
                    ? "inline-flex items-center rounded-full border border-accent-violet/40 bg-accent-violet/10 px-[17px] py-[10px] text-[13px] font-bold text-accent-violet"
                    : "inline-flex items-center rounded-full border border-ink/16 bg-white px-[17px] py-[10px] text-[13px] font-bold text-slate-600"
                }
              >
                {region}
              </span>
            ))}
          </div>
          <p className="mt-1 text-xs text-slate-600">
            Indicator-family and rights facets activate once the registry confirms supported
            values.
          </p>
          <p className="mt-3 text-sm font-semibold text-accent-violet">Reset filters</p>
        </Reveal>

        <p className="mt-5 text-sm text-slate-600">10 of 10 registry sources shown</p>

        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sources.map((source, index) => (
            <Reveal key={source.name} delay={(index % 4) * 0.05}>
              <SourceCard {...source} />
            </Reveal>
          ))}
          <Reveal
            delay={0.2}
            className="relative aspect-[631/260] self-start overflow-hidden rounded-[14px] border border-ink/10 sm:col-span-2 lg:col-span-2"
          >
            <Image
              src="/images/economic-statistics/economic-statistics-source-directory-office.webp"
              alt="Executive reviewing statistical reports at a corner office desk"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
