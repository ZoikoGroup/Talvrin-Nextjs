import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const profileFields = [
  {
    title: "Legal issuer name & canonical ID",
    description:
      "Approved canonical legal name and entity identifier\n— never inferred from a ticker alone.",
  },
  {
    title: "Listing & ticker separation",
    description:
      "Exchange listing and ticker symbol shown apart\nfrom legal issuer identity.",
  },
  {
    title: "Historical names & entity changes",
    description:
      "Name changes, mergers and reorganizations\ntracked, never merged silently.",
  },
  {
    title: "Jurisdiction & domicile",
    description:
      "Country of incorporation and primary regulatory\ndomicile stated explicitly.",
  },
  {
    title: "Identifiers",
    description:
      "LEI, ISIN or other verified identifiers shown only\nwhen confirmed by registry.",
  },
  {
    title: "Coverage state",
    description:
      "Deep coverage, supported, limited/beta or planned\n— architecture-readiness is never shown as live.",
  },
];

export default function IssuerProfileTemplateSection() {
  return (
    <section className="bg-[#F6F5FB] py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="violet">ISSUER PROFILE TEMPLATE</SectionEyebrow>
          <SectionHeading className="mt-3">
            Stable identity, listing and jurisdiction
            <br className="hidden sm:inline" />
            — never a guessed match.
          </SectionHeading>
          <SectionLede className="mt-5 max-w-3xl">
            Every issuer page follows this field contract. Bracketed values populate only from approved registries
            <br className="hidden sm:inline" />
            and official sources.
          </SectionLede>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[440px_741px] xl:justify-between">
          {/* Left: Showcase Card */}
          <Reveal
            delay={0.1}
            className="relative mx-auto aspect-[440/363] w-full max-w-[440px] overflow-hidden rounded-2xl bg-[#171335]"
          >
            <Image
              src="/images/markets/public-companies/image_663.png"
              alt="Issuer profile canonical identity schema visualization"
              fill
              sizes="(min-width: 1024px) 440px, 100vw"
              className="object-cover"
            />
          </Reveal>

          {/* Right: Grid of 6 fields */}
          <Reveal delay={0.2} className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {profileFields.map((field) => (
              <div
                key={field.title}
                className="border-b border-[#171335]/[0.08] py-3.5"
              >
                <h3 className="text-[15px] font-bold text-[#171335]">{field.title}</h3>
                <p className="mt-1 whitespace-pre-line text-[13px] leading-[19.5px] text-[#5D5A72]">
                  {field.description}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
