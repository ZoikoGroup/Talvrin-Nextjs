import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const meta = [
  { label: "Published", value: "18 Sep 2026, 16:00 UTC" },
  { label: "Effective", value: "Sunset date not yet announced" },
  { label: "Surface", value: "Authentication" },
  { label: "Lifecycle", value: "Published" },
  { label: "Record", value: "CHG-0007" },
];

const steps = [
  "Identify services that authenticate with [legacy credential method].",
  "Move them to [replacement method] using the Authentication migration guide.",
  "Rotate and revoke the old credentials once traffic has moved.",
];

export default function DetailSpecimenSection() {
  return (
    <section id="change-detail" className="scroll-mt-24 bg-surface py-16 sm:py-20">
      <Container>
        <Reveal>
          <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
            <Link href="/developers/overview" className="hover:text-ink">
              Developers
            </Link>
            <span className="px-2 text-slate-400">/</span>
            <Link href="#change-stream" className="hover:text-ink">
              Changelog
            </Link>
            <span className="px-2 text-slate-400">/</span>
            <span className="text-ink">CHG-0007</span>
          </nav>
        </Reveal>

        <Reveal delay={0.1} className="mt-4 overflow-hidden rounded-2xl border border-ink/10 bg-white">
          <div className="px-6 pb-6 pt-7 sm:px-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-ink/20 px-2.5 py-1 text-xs font-semibold text-ink">
                Authentication
              </span>
              <span className="rounded-md bg-accent-amber/20 px-2 py-[5px] font-mono text-xs font-bold uppercase text-yellow-800">
                Deprecated
              </span>
              <span className="rounded-md border border-orange-800 bg-orange-800 px-2.5 py-1 text-xs font-bold text-white">
                Migration required
              </span>
              <span className="rounded-md border border-dashed border-slate-500 px-2 py-1 font-mono text-xs font-bold uppercase text-slate-600">
                Published
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              [Legacy credential method] is deprecated
            </h2>
            <p className="mt-3 max-w-[820px] text-base leading-6 text-slate-700">
              [Legacy credential method] is planned for retirement. New integrations should use
              [replacement method]. No sunset date has been announced yet.
            </p>

            {/* Five meta cells plus the design's empty grey cell closing the strip. */}
            <dl className="mt-6 grid grid-cols-1 overflow-hidden rounded-xl border border-ink/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {meta.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-r border-ink/10 px-5 py-4 last:border-r-0 xl:last:border-r"
                >
                  <dt className="font-mono text-xs font-bold uppercase tracking-wide text-slate-600">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm text-ink">{item.value}</dd>
                </div>
              ))}
              <div className="hidden bg-ink/5 xl:block" aria-hidden="true" />
            </dl>
          </div>

          <div className="grid grid-cols-1 border-t border-ink/10 lg:grid-cols-2">
            <div className="px-6 py-7 sm:px-8">
              <h3 className="text-base font-bold text-ink">Impact</h3>
              <p className="mt-2 text-base leading-6 text-slate-700">
                Existing requests using [legacy credential method] keep working until an approved
                sunset date is published in a follow-up record.
              </p>

              <h3 className="mt-6 text-base font-bold text-ink">What you need to do</h3>
              <ol className="mt-3 flex flex-col gap-3">
                {steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-base leading-6 text-slate-700">
                    <span
                      className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-ink text-xs font-bold text-white"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-6 rounded-xl bg-surface px-5 py-4">
                <p className="font-mono text-xs font-bold uppercase tracking-wide text-accent-violet">
                  Compatibility / lifecycle
                </p>
                <p className="mt-1.5 text-sm leading-6 text-slate-700">
                  Deprecated. Replacement: [replacement method]. Sunset: not yet announced. Lifecycle
                  source: Authentication registry.
                </p>
              </div>
            </div>

            <div className="relative aspect-[3/2] w-full lg:aspect-auto lg:min-h-[420px]">
              <Image
                src="/images/developers/changelog/changelog-detail-celebration.webp"
                alt="Colleague smiling while shaking hands in an office"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 max-w-[860px] text-sm leading-6 text-slate-600">
            Developer documentation, not investment advice. Current product behavior remains governed
            by authoritative documentation and your entitlements.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
