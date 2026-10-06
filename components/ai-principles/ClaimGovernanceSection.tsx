import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR, Pill } from "./shared";

const schema = [
  { field: "claim_class", value: "Principle" },
  { field: "public_label", value: "AI assistance scope" },
  { field: "owner", value: "AI/ML + Product" },
  { field: "release_state", value: "approved-public" },
  { field: "reviewed_at", value: "Material review only" },
];

export default function ClaimGovernanceSection() {
  return (
    <section id="claim-governance" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Why a Claim Is on This Page at All"
            tone="amber"
            title="Every substantive public AI claim has an owner, an evidence reference, and a review date."
          >
            If a claim can&apos;t resolve to an approved, current state, it is withdrawn or replaced with
            a neutral fallback — never left stale.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-2xl border border-ink/10 bg-surface px-6 py-6">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-wide text-muted">
                  AI claim — schema example
                </p>
                <Pill tone="neutral" className="font-semibold">Illustrative</Pill>
              </div>
              <dl className="mt-3">
                {schema.map((row) => (
                  <div
                    key={row.field}
                    className="flex items-center justify-between gap-4 border-b border-ink/10 py-2.5"
                  >
                    <dt className="font-mono text-[13px] text-muted">{row.field}</dt>
                    <dd className="text-right text-[13px] font-semibold text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[618/276] min-h-[220px] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src={`${IMAGE_DIR}/ai-principles-claim-governance.webp`}
              alt="A professional holding a laptop outside modern office towers"
              fill
              sizes="(min-width: 1024px) 618px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
