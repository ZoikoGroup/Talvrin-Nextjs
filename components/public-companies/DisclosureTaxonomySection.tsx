import Image from "next/image";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

const row1Cards = [
  {
    title: "Annual Reports",
    description:
      "Full-year filings and annual\ndisclosures, labeled by fiscal\nyear and filing jurisdiction.",
  },
  {
    title: "Interim & Quarterly\nReports",
    description:
      "Quarterly or half-year\ndisclosures, distinguished from annual filings by reporting period.",
  },
  {
    title: "Material Announcements",
    description:
      "Price-sensitive or material\nevent disclosures, timestamped\nto original publication.",
  },
];

const row2Cards = [
  {
    title: "Governance & Proxy\nMaterials",
    description:
      "Board, shareholder-meeting\nand voting disclosures from\nverified sources.",
  },
  {
    title: "Regulatory Filings",
    description:
      "Filings made to a national\nregulator, labeled by the\nreceiving authority.",
  },
  {
    title: "Prospectuses & Offering\nDocuments",
    description:
      "Listing, offering and admission\ndocuments, scoped to verified\nmarkets.",
  },
];

export default function DisclosureTaxonomySection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1281px] px-4 sm:px-6 xl:px-0">
        <Reveal>
          <SectionEyebrow tone="amber">DISCLOSURE TAXONOMY</SectionEyebrow>
          <h2 className="mt-[11.35px] max-w-[780px] text-3xl font-bold tracking-tight text-[#171335] sm:text-4xl lg:text-[42px] lg:leading-[48.72px]">
            Official document families before
            <br className="hidden sm:inline" />
            interpretation.
          </h2>
          <p className="mt-5 w-full max-w-[800px] text-base leading-relaxed text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            Annual reports, interim disclosures, announcements, offering documents, corporate actions, governance
            <br className="hidden sm:inline" />
            materials and regulatory filings appear as separate families — only when evidenced — rather than
            <br className="hidden sm:inline" />
            collapsing into undifferentiated &quot;company data.&quot;
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: 6 Cards in 3x2 Grid */}
          <Reveal delay={0.1} className="w-full shrink-0 lg:w-[760.6px]">
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {row1Cards.map((card) => (
                <div
                  key={card.title}
                  className="flex h-[185.6px] flex-col rounded-[14px] border border-[#171335]/[0.08] bg-[#F6F5FB] p-[21.8px]"
                >
                  <h3 className="whitespace-pre-line text-base font-bold text-[#171335]">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 whitespace-pre-line text-sm leading-[21.7px] text-[#5D5A72]">
                    {card.description}
                  </p>
                </div>
              ))}
              {row2Cards.map((card) => (
                <div
                  key={card.title}
                  className="flex h-[163.9px] flex-col rounded-[14px] border border-[#171335]/[0.08] bg-[#F6F5FB] p-[21.8px]"
                >
                  <h3 className="whitespace-pre-line text-base font-bold text-[#171335]">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 whitespace-pre-line text-sm leading-[21.7px] text-[#5D5A72]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: Showcase Card */}
          <Reveal
            delay={0.2}
            className="relative h-[369.5px] w-full shrink-0 overflow-hidden rounded-[14px] border border-[#171335]/[0.08] bg-[#F6F5FB] lg:w-[500.4px]"
          >
            <Image
              src="/images/markets/public-companies/image_664.png"
              alt="Official disclosure taxonomy and document family evidence representation"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
              priority
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
