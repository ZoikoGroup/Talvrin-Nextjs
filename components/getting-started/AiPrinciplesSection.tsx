import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const assists = [
  "Search and evidence discovery",
  "Source summarization",
  "Comparison",
  "Change identification",
  "Research organization",
  "Explanation and relationship mapping",
  "Contradiction surfacing",
];

export default function AiPrinciplesSection() {
  return (
    <section id="ai" className="scroll-mt-32 bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">AI Principles for a First Session</SectionEyebrow>
          <SectionHeading>
            AI can help you navigate the evidence. It does not become the evidence.
          </SectionHeading>
          <p className="mt-3 max-w-[720px] text-base leading-[25.6px] text-slate-600 sm:text-lg">
            Generated interpretation should remain distinguishable from the underlying material
            you can inspect for yourself.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-9 grid grid-cols-1 overflow-hidden rounded-[14px] border border-ink/10 bg-ink/10 sm:grid-cols-2"
        >
          <div className="bg-white px-[26px] py-7">
            <p className="pb-4 text-[13px] font-bold uppercase tracking-[0.65px] text-[#2e7d5b]">
              AI May Assist With
            </p>
            <ul className="divide-y divide-ink/8">
              {assists.map((item) => (
                <li key={item} className="flex items-start gap-[10px] py-[11px]">
                  <span aria-hidden="true" className="text-[#2e7d5b]">
                    ✓
                  </span>
                  <span className="text-[15px] leading-[22.5px] text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[260px] sm:min-h-0">
            <Image
              src="/images/getting-started/getting-started-ai-principles-boardroom.webp"
              alt="A researcher reviewing AI-assisted findings alongside the source material"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2} className="pt-[14px]">
          <Link
            href="/trust/ai-principles"
            className="text-sm font-semibold text-accent-violet hover:text-brand"
          >
            Read the full AI boundary →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
