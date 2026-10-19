import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

type Status = "Deep Coverage" | "Supported" | "Limited / Beta" | "Not Released";

const statusTones: Record<Status, string> = {
  "Deep Coverage": "border-accent-violet/30 bg-accent-violet/10 text-accent-violet",
  Supported: "border-ink/25 bg-ink/5 text-ink",
  "Limited / Beta": "border-accent-amber/30 bg-accent-amber/10 text-accent-amber",
  "Not Released": "border-gray-600/30 bg-surface text-gray-600",
};

const rows: { title: string; status: Status; fields: [string, string][] }[] = [
  {
    title: "Bank of Japan Policy Communication",
    status: "Deep Coverage",
    fields: [
      ["Supported window", "Current publications"],
      ["Official source", "Bank of Japan"],
      ["Update window", "Per Monetary Policy Meeting calendar"],
      ["License", "Open"],
      ["Verification owner", "Coverage Operations"],
    ],
  },
  {
    title: "Japanese Government Bond Issuance & Auction Evidence",
    status: "Deep Coverage",
    fields: [
      ["Supported window", "Current publications"],
      ["Official source", "Japan Ministry of Finance"],
      ["Update window", "Per quarterly issuance plan"],
      ["License", "Open"],
      ["Verification owner", "Coverage Operations"],
    ],
  },
  {
    title: "Official Japanese Economic Statistics Context",
    status: "Supported",
    fields: [
      ["Supported window", "Current releases"],
      ["Official source", "Japanese statistical agencies (where approved)"],
      ["Update window", "Per release calendar"],
      ["License", "Open"],
      ["Verification owner", "Research / Editorial"],
    ],
  },
  {
    title: "Historical JGB Archive",
    status: "Limited / Beta",
    fields: [
      ["Supported window", "Partial — disclosed per record"],
      ["Official source", "Japan Ministry of Finance"],
      ["Update window", "Not scheduled"],
      ["License", "Open"],
      ["Verification owner", "Coverage Operations"],
    ],
  },
  {
    title: "Live JGB Yields, Prices & Auction Results",
    status: "Not Released",
    fields: [
      ["Supported window", "Not applicable"],
      ["Official source", "Not applicable"],
      ["Update window", "Not applicable"],
      ["License", "Not applicable"],
      ["Verification owner", "Market Data / Rights"],
    ],
  },
];

export default function CoverageMatrixSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Coverage Matrix &amp; Gaps</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[780px]">
            What&apos;s covered, what isn&apos;t, and who owns verification.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[800px] text-base leading-7 text-gray-600">
            Every row is conditional on verified registry metadata — a gap is
            stated plainly rather than implied by omission.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_240px] xl:grid-cols-[minmax(0,1fr)_275px]">
          <div className="flex min-w-0 flex-col gap-4">
            {rows.map((row, index) => (
              <Reveal
                key={row.title}
                delay={0.04 * (index + 1)}
                className="rounded-2xl border border-ink/10 px-5 py-5 sm:px-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-ink sm:text-lg">{row.title}</h3>
                  <span
                    className={clsx(
                      "shrink-0 rounded-full border px-3 py-1 text-xs font-bold",
                      statusTones[row.status]
                    )}
                  >
                    {row.status}
                  </span>
                </div>
                <dl className="mt-3.5 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 xl:grid-cols-[repeat(5,minmax(0,140px))] xl:gap-x-5">
                  {row.fields.map(([label, value]) => (
                    <div key={label} className="min-w-0">
                      <dt className="text-[11px] font-bold uppercase tracking-wide text-gray-600 sm:text-xs">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm text-slate-700">{value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative hidden w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface lg:block lg:min-h-[600px]"
          >
            <Image
              src="/images/markets/japanese-government-bonds/jgb-coverage-matrix-team.webp"
              alt="Group of smiling professionals standing together in a bright office"
              fill
              sizes="(min-width: 1280px) 275px, (min-width: 1024px) 240px, 100vw"
              className="object-cover object-top"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
