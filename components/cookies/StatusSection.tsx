import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG } from "./shared";

const META = [
  { label: "Document ID", value: "TAL-LEGAL-02" },
  { label: "Last reviewed", value: "Not yet recorded — pending Legal/Privacy review" },
  { label: "Effective date", value: "Pending approval" },
  { label: "Revision", value: "v1.0 · draft" },
  { label: "Applicability scope", value: "Pending signed jurisdiction configuration" },
];

export default function StatusSection() {
  return (
    <section className="border-b border-ink/10 bg-white py-14">
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,900px)_minmax(0,320px)] lg:justify-between">
        <div className="flex flex-col gap-4">
          <Reveal className="flex flex-col items-start gap-3 rounded-2xl border border-ink/10 bg-surface px-6 py-5 sm:flex-row sm:gap-4">
            <span className="shrink-0 whitespace-nowrap rounded-full bg-ink/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-muted">
              Prepared — not yet locked
            </span>
            <p className="flex-1 text-base leading-6 text-ink-soft">
              This notice has not completed Legal, Privacy and Engineering sign-off. Dates, scope and
              inventory below are shown honestly as pending rather than assumed.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
              {META.map((item) => (
                <div key={item.label} className="flex flex-col gap-1.5">
                  <dt className="text-xs font-bold uppercase tracking-wide text-muted">{item.label}</dt>
                  <dd className="text-sm leading-5 text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative hidden aspect-[320/190] w-full overflow-hidden rounded-2xl bg-white lg:block"
        >
          <Image
            src={`${IMG}/status-colleagues-laughing.webp`}
            alt="Two colleagues laughing together while looking at a laptop"
            fill
            sizes="320px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
