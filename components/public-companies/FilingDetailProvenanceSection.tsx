import { ReactNode } from "react";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

type SchemaField = {
  title: string;
  value: ReactNode;
};

const schemaFields: SchemaField[] = [
  {
    title: "Source institution",
    value: (
      <>
        <span className="whitespace-nowrap">[Issuer or regulator — populated</span>
        <br />
        from source registry]
      </>
    ),
  },
  {
    title: "Official source URL",
    value: (
      <>
        [Resolved only where rights
        <br />
        permit]
      </>
    ),
  },
  {
    title: "Publication timestamp",
    value: (
      <>
        <span className="whitespace-nowrap">[Original publication date and time</span>
        <br />
        zone]
      </>
    ),
  },
  {
    title: "Reporting period",
    value: (
      <>
        [Fiscal period the document
        <br />
        covers]
      </>
    ),
  },
  {
    title: "Version / revision state",
    value: (
      <>
        [Original, amended, restated or
        <br />
        superseded]
      </>
    ),
  },
  {
    title: "Document license",
    value: (
      <>
        [Public domain / licensed /
        <br />
        restricted]
      </>
    ),
  },
  {
    title: "Access / rights state",
    value: (
      <>
        [Public / entitled / restricted /
        <br />
        metadata-only]
      </>
    ),
  },
  {
    title: "Citation handle",
    value: (
      <>
        [Stable reference for research
        <br />
        citation, where supported]
      </>
    ),
  },
];

export default function FilingDetailProvenanceSection() {
  return (
    <section className="bg-[#171335] py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1281px] px-4 sm:px-6 xl:px-0">
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
        <Reveal delay={0.15} className="mt-10 rounded-2xl bg-[#F6F5FB] p-6 sm:px-8 sm:py-9">
          <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {schemaFields.map((field) => (
              <div key={field.title} className="flex flex-col justify-start">
                <h4 className="text-[15px] font-bold text-[#171335]">{field.title}</h4>
                <div className="mt-1 text-sm leading-[21px] text-[#5D5A72]">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
