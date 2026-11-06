"use client";

import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export type PartnershipCategory = {
  id: string;
  title: string;
  description: React.ReactNode;
  isOtherRoute?: boolean;
};

export const mainCategories: PartnershipCategory[] = [
  {
    id: "tech-integration",
    title: "Technology / Integration",
    description: (
      <>
        Explore technical interoperability or
        <br />
        workflow integration with Talvrin.
      </>
    ),
  },
  {
    id: "research-knowledge",
    title: "Research / Knowledge",
    description: (
      <>
        Explore research, methodology,
        <br />
        evidence, or educational
        <br />
        collaboration.
      </>
    ),
  },
  {
    id: "strategic-ecosystem",
    title: "Strategic Ecosystem",
    description: (
      <>
        Explore a complementary platform or
        <br />
        market-ecosystem collaboration.
      </>
    ),
  },
  {
    id: "institutional-collaboration",
    title: "Institutional Collaboration",
    description: (
      <>
        Explore organization-level strategic
        <br />
        use or collaboration.
      </>
    ),
  },
  {
    id: "brand-co-marketing",
    title: "Brand / Co-Marketing",
    description: (
      <>
        Explore a joint educational or brand
        <br />
        initiative.
      </>
    ),
  },
  {
    id: "other-strategic",
    title: "Other Strategic Partnership",
    description: (
      <>
        A credible partnership idea that
        <br />
        doesn&apos;t fit the categories above.
      </>
    ),
  },
];

export const otherRouteCategories: PartnershipCategory[] = [
  {
    id: "enterprise-evaluation",
    title: "Enterprise\nProduct\nEvaluation",
    isOtherRoute: true,
    description: (
      <>
        Your organization evaluating Talvrin
        <br />
        as a product, not proposing a
        <br />
        partnership.
      </>
    ),
  },
  {
    id: "media-press",
    title: "Media or Press\nCollaboration",
    isOtherRoute: true,
    description: (
      <>
        A press, interview, or event-publicity
        <br />
        request.
      </>
    ),
  },
  {
    id: "employment-recruiting",
    title: "Employment or\nRecruiting",
    isOtherRoute: true,
    description: (
      <>
        Looking to join Talvrin, not partner
        <br />
        with it.
      </>
    ),
  },
];

export default function PartnershipAreasSection({
  onSelectCategory,
}: {
  onSelectCategory?: (category: string) => void;
}) {
  function handleSelect(title: string) {
    const cleanTitle = title.replace(/\n/g, " ");
    if (onSelectCategory) {
      onSelectCategory(cleanTitle);
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("talvrin:select-category", { detail: cleanTitle })
      );
    }
    const formElement = document.getElementById("start-enquiry");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section id="partnership-areas" className="scroll-mt-20 bg-[#F6F5FB] py-16 sm:py-20 lg:py-24">
      <Container className="max-w-[1100px]">
        <Reveal>
          <SectionEyebrow tone="amber">STRATEGIC FIT AREAS</SectionEyebrow>
          <SectionHeading>Choose the area closest to your proposal.</SectionHeading>
          <SectionLede>
            Each is a category for exploration — not a guaranteed program or an existing integration, tier, or
            <br className="hidden md:inline" />
            commercial term. Your selection becomes the enquiry category below.
          </SectionLede>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-start">
          {/* Left: 3x3 Grid of 9 Cards */}
          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Row 1 (3 items) */}
            {mainCategories.slice(0, 3).map((item, idx) => (
              <Reveal key={item.id} delay={0.03 * idx}>
                <button
                  type="button"
                  onClick={() => handleSelect(item.title)}
                  className="flex min-h-[127px] w-full flex-col justify-start rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-white p-5 text-left transition-all duration-200 hover:border-[#171335]/30 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-[#171335]"
                >
                  <h3 className="text-[15px] font-bold text-[#171335]">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-[19.5px] font-normal text-[#5D5A72]">
                    {item.description}
                  </p>
                </button>
              </Reveal>
            ))}

            {/* Row 2 (3 items) */}
            {mainCategories.slice(3, 6).map((item, idx) => (
              <Reveal key={item.id} delay={0.03 * (idx + 3)}>
                <button
                  type="button"
                  onClick={() => handleSelect(item.title)}
                  className="flex min-h-[127px] w-full flex-col justify-start rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-white p-5 text-left transition-all duration-200 hover:border-[#171335]/30 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-[#171335]"
                >
                  <h3 className="text-[15px] font-bold text-[#171335]">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-[19.5px] font-normal text-[#5D5A72]">
                    {item.description}
                  </p>
                </button>
              </Reveal>
            ))}

            {/* Row 3: Other route cards (3 items) */}
            {otherRouteCategories.map((item, idx) => (
              <Reveal key={item.id} delay={0.03 * (idx + 6)}>
                <button
                  type="button"
                  onClick={() => handleSelect(item.title)}
                  className="flex min-h-[150px] w-full flex-col justify-between rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-white p-5 text-left transition-all duration-200 hover:border-[#171335]/30 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-[#171335]"
                >
                  <div className="w-full">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="whitespace-pre-line text-[15px] font-bold leading-tight text-[#171335]">
                        {item.title}
                      </h3>
                      <span className="shrink-0 rounded-full bg-[rgba(185,129,50,0.14)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.04em] text-[#8A5A00]">
                        OTHER ROUTE
                      </span>
                    </div>
                    <p className="mt-2 text-[13px] leading-[19.5px] font-normal text-[#5D5A72]">
                      {item.description}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Right Image Card spanning all 3 rows (height 452px on desktop) */}
          <Reveal delay={0.2} className="w-full lg:w-[247px] shrink-0">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[452px] w-full overflow-hidden rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-white">
              <Image
                src={`${IMG}/partnerships-categories.png`}
                alt="Partnership categories overview"
                fill
                sizes="(max-width: 1024px) 100vw, 247px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
