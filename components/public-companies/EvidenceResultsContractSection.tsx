import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const contractRows = [
  {
    field: "Document title",
    description: "Exact filing or disclosure title — never a generated substitute.",
  },
  {
    field: "Issuer",
    description: "Legal entity name tied to a canonical identifier.",
  },
  {
    field: "Document family",
    description: "Annual report / interim report / announcement / filing, from the governed taxonomy.",
  },
  {
    field: "Reporting period",
    description: "Fiscal period the document covers, shown explicitly.",
  },
  {
    field: "Publication date",
    description: "Original issuer or regulator publication date and time zone.",
  },
  {
    field: "Version / status",
    description: "Original, amended, restated or superseded, never hidden.",
  },
  {
    field: "Rights status",
    description: "Public / entitled / restricted / metadata-only.",
  },
  {
    field: "Last verified",
    description: "Date the registry last confirmed the record.",
  },
];

export default function EvidenceResultsContractSection() {
  return (
    <section className="bg-[#F6F5FB] py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1281px] px-4 sm:px-6 xl:px-0">
        <Reveal>
          <SectionEyebrow tone="violet">EVIDENCE RESULTS CONTRACT</SectionEyebrow>
          <SectionHeading className="mt-3">
            What a filing row will show — never
            <br className="hidden sm:inline" />
            fewer fields, never a guess.
          </SectionHeading>
          <SectionLede className="mt-5 max-w-3xl">
            Sort by publication date, issuer or document family; filter by jurisdiction and market once verified.
            <br className="hidden sm:inline" />
            Column headers stay semantic and rights status stays explicit.
          </SectionLede>
        </Reveal>

        {/* Contract Rows */}
        <Reveal delay={0.1} className="mt-6 overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Header: Spacer in Column 1, FILING ROW CONTRACT in Column 2 */}
            <div className="grid grid-cols-[200px_minmax(0,1fr)] items-center gap-4 pb-3">
              <div className="w-[200px]" />
              <div className="text-xs font-bold uppercase tracking-[0.06em] text-[#5D5A72]">
                FILING ROW CONTRACT
              </div>
            </div>

            <div className="divide-y divide-[#171335]/10 border-t border-[#171335]/10">
              {contractRows.map((row) => (
                <div
                  key={row.field}
                  className="grid grid-cols-[200px_minmax(0,1fr)] items-center gap-4 py-[18px]"
                >
                  <div>
                    <span className="inline-flex h-8 w-[200px] items-center justify-center rounded-[6px] border border-[#171335]/[0.16] bg-white px-3 py-[6.8px] text-center text-[13px] font-bold text-[#171335]">
                      {row.field}
                    </span>
                  </div>
                  <div className="text-[15px] text-[#322E52]">
                    {row.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Empty State Banner */}
        <Reveal delay={0.2} className="mt-10 rounded-[14px] bg-white p-6 sm:p-7">
          <h3 className="text-[15px] font-semibold leading-6 text-[#322E52]">
            There are no published filing records yet.
          </h3>
          <p className="mt-1 text-sm leading-[22.4px] text-[#5D5A72]">
            Live filing rows will follow this exact contract, with every field sourced from a governed registry rather than a fabricated placeholder.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
