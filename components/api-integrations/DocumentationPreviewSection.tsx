import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, StatusPill } from "./shared";

const sidebar = [
  { heading: "Get started", items: ["Overview", "Eligibility", "Authentication", "Errors", "Rate limits"] },
  { heading: "Resources", items: ["Research", "Evidence", "Async jobs", "Webhooks*"] },
];

const onThisPage = [
  "Requirements",
  "Credentials",
  "Tenant / scope",
  "Sample flows",
  "Related APIs",
  "Release notes",
];

const errorCodes = [
  "403 ENTITLEMENT_DENIED",
  "451 RIGHTS_OR_POLICY_RESTRICTED*",
  "409 SOURCE_CONFLICT",
  "422 UNSUPPORTED_SCOPE*",
];

const sample = `{
  "id": "ev_example_001",
  "observation": { "metric": "illustrative_metric", "value": null,
                   "unit": "unit_example", "status": "VERIFIED_SOURCE" },
  "source": { "publisher": "example_originator",
              "source_document_id": "doc_example_001",
              "locator": "section_example", "version": "v1" },
  "time": { "valid_at": "2026-01-01T00:00:00Z",
            "published_at": "2026-01-02T00:00:00Z",
            "recorded_at": "2026-01-03T00:00:00Z" },
  "methodology": { "type": "reported", "version": null },
  "usage_rights": { "display": false, "export": false,
                    "redistribute": false },
  "coverage": { "scope": "example", "limitations": [] }
}`;

export default function DocumentationPreviewSection() {
  return (
    <section id="documentation-preview" className="scroll-mt-32 bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow>Developer documentation — preview</SectionEyebrow>
          <SectionHeading>
            Documentation will answer what&apos;s supported, what a request means, and what can
            fail — before any integration code is written.
          </SectionHeading>
          <StatusPill className="mt-4 px-3 text-[11px]">
            Illustrative — shown for structure, not yet published
          </StatusPill>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-4 overflow-hidden rounded-2xl border border-ink/10 bg-white p-2.5 sm:p-5"
        >
          <div className="grid grid-cols-1 overflow-hidden rounded-lg bg-surface md:grid-cols-[180px_minmax(0,1fr)_160px]">
            <nav aria-label="Documentation preview sections" className="hidden px-5 py-6 md:block">
              {sidebar.map((group) => (
                <div key={group.heading} className="mb-6 last:mb-0">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
                    {group.heading}
                  </p>
                  <ul className="mt-3 space-y-2.5 text-[13px] text-ink">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            <div className="relative aspect-[818/344] w-full md:aspect-auto md:min-h-[344px]">
              <Image
                src={`${IMG}/api-docs-preview.webp`}
                alt="Professional in glasses listening during a meeting"
                fill
                sizes="(min-width: 768px) 820px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="hidden px-5 py-6 md:block">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
                On this page
              </p>
              <ul className="mt-3 space-y-2.5 text-[13px] text-ink">
                {onThisPage.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-[780px] text-xs leading-5 text-slate-600">
            *Webhooks only appear in documentation once the capability is operationally supported.
            OpenAPI 3.1.1 is the preferred publication format; every example is schema-validated
            and marked synthetic unless taken from cleared, reproducible test fixtures.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-bold text-ink">A representative evidence object</h3>
            <StatusPill>Synthetic example</StatusPill>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl bg-ink p-6">
            <p className="text-xs text-white/60">
              GET /v1/evidence/{"{evidence_id}"}&nbsp;&nbsp;[PROPOSED EXAMPLE — NOT A LIVE ENDPOINT]
            </p>
            <pre className="mt-4 overflow-x-auto font-mono text-[13px] leading-[22px] text-white/85">
              <code>{sample}</code>
            </pre>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-xs text-white/50">
              {errorCodes.map((code) => (
                <li key={code}>{code}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
