import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const patterns = [
  {
    title: "Query evidence",
    body: "Authorized retrieval of evidence metadata and permitted source-linked observations.",
    guard: "Rights-aware filtering — never bypasses fact validation or coverage.",
  },
  {
    title: "Retrieve approved research",
    body: "Read released structured research artifacts or job output.",
    guard: "Same source restrictions and fact lineage as the first-party product.",
  },
  {
    title: "Start a research job",
    body: "Asynchronous job contract for expensive, documented workloads.",
    guard: "Idempotency, quotas, completion state and tenant policy enforced.",
  },
  {
    title: "File / batch exports",
    body: "A scoped evidence bundle or report, only where contract and source terms expressly allow.",
    guard: "Export rights, retention and traceability checked before release.",
  },
  {
    title: "SSO / enterprise identity",
    body: "Separate identity integration — not evidence-data API access.",
    guard: "Contract-approved enterprise SSO and configured tenant policy.",
  },
  {
    title: "Receive events",
    body: "Optional signed webhooks for released workflow or monitoring events.",
    guard: "Approval-gated signed delivery with retries — never implied as currently live.",
  },
];

export default function IntegrationPatternsSection() {
  return (
    <section id="integration-patterns" className="scroll-mt-32 bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow>Integration patterns</SectionEyebrow>
          <SectionHeading>Deliberately narrower than a generic market-data terminal.</SectionHeading>
          <SectionLede>
            Each pattern requires its own source-rights analysis and a maintained contract before
            it can be requested. None of the patterns below are released interfaces today.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_285px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {patterns.map((p, i) => (
              <Reveal
                key={p.title}
                as="article"
                delay={(i % 3) * 0.06}
                className="flex flex-col gap-2.5 rounded-2xl border border-ink/10 bg-white p-6"
              >
                <h3 className="text-base font-bold text-ink">{p.title}</h3>
                <p className="flex-1 text-sm leading-5 text-slate-600">{p.body}</p>
                <p className="border-t border-ink/10 pt-2.5 text-xs leading-4 text-accent-amber">
                  {p.guard}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-2xl border border-ink/10 lg:block"
          >
            <Image
              src={`${IMG}/api-patterns-discussion.webp`}
              alt="Two professionals in discussion across a table in a sunlit office"
              fill
              sizes="285px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
