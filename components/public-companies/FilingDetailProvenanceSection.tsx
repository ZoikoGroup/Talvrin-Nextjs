import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const schemaFields = [
  {
    title: "Source institution",
    value: "[Issuer or regulator — populated\nfrom source registry]",
  },
  {
    title: "Official source URL",
    value: "[Resolved only where rights permit]",
  },
  {
    title: "Publication timestamp",
    value: "[Original publication date and time\nzone]",
  },
  {
    title: "Reporting period",
    value: "[Fiscal period the document covers]",
  },
  {
    title: "Version / revision state",
    value: "[Original, amended, restated or\nsuperseded]",
  },
  {
    title: "Document license",
    value: "[Public domain / licensed /\nrestricted]",
  },
  {
    title: "Access / rights state",
    value: "[Public / entitled / restricted /\nmetadata-only]",
  },
  {
    title: "Citation handle",
    value: "[Stable reference for research\ncitation, where supported]",
  },
];

export default function FilingDetailProvenanceSection() {
  return (
    <section className="bg-[#171335] py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="violet">FILING DETAIL & PROVENANCE</SectionEyebrow>
          <SectionHeading inverted className="mt-3">
            The source should never disappear
            <br className="hidden sm:inline" />
            behind the summary.
          </SectionHeading>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#F6F5FB]/70 sm:text-[17px] sm:leading-[27.2px]">
            Illustrative provenance schema for a single company disclosure — original link, citation, version,
            <br className="hidden sm:inline" />
            timing, license and access/rights restrictions.
          </p>
          <div className="mt-4">
            <span className="inline-flex rounded-full bg-[#F6F5FB]/[0.08] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.05em] text-[#F6F5FB]/[0.65]">
              ILLUSTRATIVE — NOT A LIVE RECORD
            </span>
          </div>
        </Reveal>

        {/* Schema Box */}
        <Reveal delay={0.15} className="mt-10 rounded-2xl bg-[#F6F5FB] p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {schemaFields.map((field) => (
              <div key={field.title} className="flex flex-col justify-start">
                <h4 className="text-[15px] font-bold text-[#171335]">{field.title}</h4>
                <p className="mt-1 whitespace-pre-line text-sm leading-[21px] text-[#5D5A72]">
                  {field.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
