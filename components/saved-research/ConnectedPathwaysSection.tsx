import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export default function ConnectedPathwaysSection() {
  return (
    <section className="bg-[#f6f5fb] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_421px] lg:gap-12">
          {/* Left Column: Heading, Lede, Destination Cards */}
          <div className="flex flex-col">
            <Reveal>
              <SectionEyebrow tone="violet">CONNECTED PATHWAYS</SectionEyebrow>
              <SectionHeading>
                Research Workspace, Monitoring and Source Intelligence are the governed neighbors.
              </SectionHeading>
              <SectionLede>
                Saved Research hands off to its own canonical destinations rather than duplicating their state — each one gated, conditional and explicit.
              </SectionLede>
            </Reveal>

            {/* Two destination cards */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Card 1: Research Workspace */}
              <Reveal delay={0.15}>
                <Link
                  href="/product/research-workspace"
                  className="group flex h-full flex-col justify-between rounded-[14px] border border-[#5d5a72]/15 bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#6c5ce7]/40 hover:shadow-md"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.5px] text-[#b98132]">
                      PRIMARY EDITOR
                    </span>
                    <h3 className="mt-2 text-[19px] font-bold text-[#171335] group-hover:text-[#6c5ce7] transition-colors">
                      → Research Workspace
                    </h3>
                    <p className="mt-3 text-[15px] leading-[23px] text-[#5d5a72]">
                      Research Workspace owns question-led inquiry and view-building — Saved Research links back rather than creating a parallel editor.
                    </p>
                  </div>
                </Link>
              </Reveal>

              {/* Card 2: Monitoring */}
              <Reveal delay={0.2}>
                <Link
                  href="/product/monitoring"
                  className="group flex h-full flex-col justify-between rounded-[14px] border border-[#5d5a72]/15 bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#6c5ce7]/40 hover:shadow-md"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.5px] text-[#b98132]">
                      ACTIVE WATCH
                    </span>
                    <h3 className="mt-2 text-[19px] font-bold text-[#171335] group-hover:text-[#6c5ce7] transition-colors">
                      → Monitoring
                    </h3>
                    <p className="mt-3 text-[15px] leading-[23px] text-[#5d5a72]">
                      Monitoring owns ongoing change review for a saved object. Saving never silently enables it; activation is separate and explicit.
                    </p>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Visual Preview */}
          <Reveal delay={0.2} className="flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-[421px] overflow-hidden rounded-[14px] border border-[#5d5a72]/15 bg-white shadow-sm">
              <Image
                src="/images/saved-research/saved-research-connected-pathways.webp"
                alt="Connected pathways visualization"
                fill
                sizes="(max-width: 1024px) 100vw, 421px"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
