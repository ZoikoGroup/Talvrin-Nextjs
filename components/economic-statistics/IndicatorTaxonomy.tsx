import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const categories = [
  {
    name: "Output & Growth",
    body: "GDP, industrial production and output-based indicators, labeled by methodology and vintage.",
  },
  {
    name: "Price & Inflation",
    body: "Consumer, producer and other price indices, with base period and basket methodology disclosed.",
  },
  {
    name: "Labor Market",
    body: "Employment, unemployment and wage indicators, distinguished by survey versus administrative source.",
  },
  {
    name: "Fiscal",
    body: "Government revenue, expenditure and debt indicators from treasury or finance-ministry sources.",
  },
  {
    name: "Survey & Sentiment",
    body: "Purchasing managers' and confidence surveys, labeled as survey-based, not hard data.",
  },
  {
    name: "Trade & External",
    body: "Trade balance, current account and external-sector indicators by reporting authority.",
  },
];

function CategoryCard({ name, body }: { name: string; body: string }) {
  return (
    <div className="h-full rounded-[14px] border border-ink/8 bg-surface p-[23px]">
      <h3 className="text-base font-bold text-ink">{name}</h3>
      <p className="mt-[10px] text-sm leading-[21.7px] text-slate-600">{body}</p>
    </div>
  );
}

export default function IndicatorTaxonomy() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Indicator Taxonomy</SectionEyebrow>
          <SectionHeading>Official categories before interpretation.</SectionHeading>
          <p className="mt-5 max-w-[800px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Output, price, labor, trade, housing, fiscal and survey indicators appear as separate
            families — only when evidenced — rather than collapsing into undifferentiated
            &quot;economic data.&quot;
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {categories.map((category, index) => (
            <Reveal key={category.name} delay={(index % 3) * 0.05} className="h-full">
              <CategoryCard {...category} />
            </Reveal>
          ))}
          <Reveal
            delay={0.2}
            className="relative min-h-[300px] overflow-hidden rounded-[14px] border border-ink/8 bg-surface sm:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:min-h-0"
          >
            <Image
              src="/images/economic-statistics/economic-statistics-indicator-taxonomy-office.webp"
              alt="Analysts working at desks in a shared research office"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
