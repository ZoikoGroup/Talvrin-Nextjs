import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const regions = ["All", "Americas", "Europe", "Asia-Pacific"];

const institutions = [
  { name: "Federal Reserve", meta: "United States · Americas · Central bank" },
  { name: "European Central Bank", meta: "Eurozone · Europe · Central bank" },
  { name: "Bank of England", meta: "United Kingdom · Europe · Central bank" },
  { name: "Swiss National Bank", meta: "Switzerland · Europe · Central bank" },
  { name: "Bank of Japan", meta: "Japan · Asia-Pacific · Central bank" },
  { name: "People's Bank of China", meta: "China · Asia-Pacific · Central bank" },
  { name: "Reserve Bank of India", meta: "India · Asia-Pacific · Central bank" },
  { name: "Reserve Bank of Australia", meta: "Australia · Asia-Pacific · Central bank" },
  { name: "Bank of Canada", meta: "Canada · Americas · Central bank" },
  { name: "Central Bank of Brazil", meta: "Brazil · Americas · Central bank" },
];

function InstitutionCard({ name, meta }: { name: string; meta: string }) {
  return (
    <div className="flex flex-col gap-[10px] rounded-[14px] border border-ink/10 p-[23px]">
      <h3 className="text-[17px] font-bold text-ink">{name}</h3>
      <p className="text-[13px] text-slate-600">{meta}</p>
      <span className="inline-flex w-fit items-center rounded-full border border-ink/14 bg-surface px-[13px] py-[6px] text-xs font-bold text-slate-600">
        Pending registry verification
      </span>
      <p className="border-t border-ink/8 pt-[17px] text-[13px] leading-[20.15px] text-slate-600">
        No institution enters public coverage until the Coverage Registry and Source Registry
        confirm evidence classes, rights and operational readiness.
      </p>
    </div>
  );
}

export default function InstitutionDirectory() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Institution Finder</SectionEyebrow>
          <SectionHeading>Find the institution. See the status behind its evidence.</SectionHeading>
          <p className="mt-5 max-w-[800px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Institutions below come from the entity registry only. No source family, evidence
            depth or historical claim is implied until the Coverage Registry approves it —
            directory presence is not evidence depth.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 rounded-2xl bg-surface px-7 py-6">
          <p className="text-xs font-bold uppercase tracking-[0.72px] text-slate-600">
            Search Institutions
          </p>
          <div className="mt-2 w-full max-w-[420px] rounded-lg border border-ink/18 bg-white px-[17px] py-[13px] text-[15px] text-slate-500">
            Search by institution or jurisdiction…
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.72px] text-slate-600">
            Region / Jurisdiction
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
            Institution type and source-language facets activate once the registry confirms
            supported values.
          </p>
          <p className="mt-3 text-sm font-semibold text-accent-violet">Reset filters</p>
        </Reveal>

        <p className="mt-5 text-sm text-slate-600">10 of 10 registry institutions shown</p>

        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {institutions.map((institution, index) => (
            <Reveal key={institution.name} delay={(index % 4) * 0.05}>
              <InstitutionCard {...institution} />
            </Reveal>
          ))}
          <Reveal
            delay={0.2}
            className="relative aspect-[631/243.2] self-start overflow-hidden rounded-[14px] border border-ink/10 sm:col-span-2 lg:col-span-2"
          >
            <Image
              src="/images/markets-central-banks/markets-central-banks-institution-directory-office.webp"
              alt="Analysts reviewing institution coverage at a research desk"
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
