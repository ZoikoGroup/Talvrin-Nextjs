import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

const temporalRows = [
  {
    badge: "REPORTING PERIOD",
    description:
      "The fiscal period a document actually covers — never conflated with when it was published.",
  },
  {
    badge: "PUBLICATION DATE",
    description:
      "When the issuer or regulator released the document, with explicit time zone.",
  },
  {
    badge: "AMENDMENT / RESTATEMENT",
    description:
      "When a document is amended or restated — tracked as a separate, dated event with the original preserved.",
  },
  {
    badge: "INGESTION / VERIFIED-AS-OF",
    description:
      "When Talvrin’s registry last confirmed the record against its source.",
  },
];

export default function TemporalVersionContextSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1281px] px-4 sm:px-6 xl:px-0">
        <Reveal>
          <SectionEyebrow tone="amber">TEMPORAL & VERSION CONTEXT</SectionEyebrow>
          <h2 className="mt-[11.35px] max-w-[800px] text-3xl font-bold tracking-tight text-[#171335] sm:text-4xl lg:text-[42px] lg:leading-[48.72px]">
            Reporting period, publication and
            <br className="hidden sm:inline" />
            amendment are different questions.
          </h2>
          <p className="mt-5 w-full max-w-[800px] text-base leading-relaxed text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
            No timeline event is shown without a source-linked timestamp. A reporting period is never inherited from
            <br className="hidden sm:inline" />
            a publication date, and an amendment or restatement never erases the original.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 overflow-x-auto">
          <div className="min-w-[720px]">
            {temporalRows.map((row) => (
              <div
                key={row.badge}
                className="grid grid-cols-[200px_minmax(0,1fr)] items-center gap-4 border-b border-[#171335]/10 py-5"
              >
                <div>
                  <span className="inline-flex h-8 w-[200px] items-center justify-center rounded-[6px] border border-[#171335]/[0.14] bg-[#F6F5FB] px-2.5 py-[6.8px] text-center text-xs font-bold whitespace-nowrap text-[#171335]">
                    {row.badge}
                  </span>
                </div>
                <div className="text-[15px] leading-relaxed text-[#322E52]">
                  {row.description}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
