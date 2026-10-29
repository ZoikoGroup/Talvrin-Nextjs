import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

export default function RelatedRoutesSection() {
  return (
    <section id="related-routes" className="scroll-mt-20 bg-[#F6F5FB] py-16 sm:py-20 lg:py-24">
      <Container className="max-w-[1320px]">
        <Reveal>
          <SectionEyebrow tone="amber">CONNECT</SectionEyebrow>
          <SectionHeading>Not quite what you need?</SectionHeading>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {/* Card 1: Contact Talvrin */}
          <Reveal delay={0.04} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-white p-[21.8px]">
              <div>
                <h3 className="text-[15px] font-bold text-[#171335]">Contact Talvrin</h3>
                <p className="mt-2 text-[13px] leading-[19.5px] text-[#5D5A72]">
                  General, non-partnership, or any
                  <br />
                  question that is not covered above.
                </p>
              </div>
              <div className="mt-4 pt-1">
                <Link
                  href="/company/contact"
                  className="text-[13px] font-bold text-[#6C5CE7] transition-colors hover:text-[#171335]"
                >
                  Go to Contact Talvrin →
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Request Access */}
          <Reveal delay={0.08} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-white p-[21.8px]">
              <div>
                <h3 className="text-[15px] font-bold text-[#171335]">Request Access</h3>
                <p className="mt-2 text-[13px] leading-[19.5px] text-[#5D5A72]">
                  Individual, professional, or team
                  <br />
                  requests for access to Talvrin.
                </p>
              </div>
              <div className="mt-4 pt-1">
                <Link
                  href="/connect/request-access"
                  className="text-[13px] font-bold text-[#6C5CE7] transition-colors hover:text-[#171335]"
                >
                  Go to Request Access →
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Enterprise Enquiries */}
          <Reveal delay={0.12} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-white p-[21.8px]">
              <div>
                <h3 className="text-[15px] font-bold text-[#171335]">Enterprise Enquiries</h3>
                <p className="mt-2 text-[13px] leading-[19.5px] text-[#5D5A72]">
                  Organization-scale evaluation,
                  <br />
                  procurement, and institutional fit.
                </p>
              </div>
              <div className="mt-4 pt-1">
                <Link
                  href="/connect/enterprise-enquiries"
                  className="text-[13px] font-bold text-[#6C5CE7] transition-colors hover:text-[#171335]"
                >
                  Go to Enterprise Enquiries →
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right Image Card spanning 2 rows on desktop */}
          <Reveal delay={0.2} className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <div className="relative aspect-[263/303] h-full min-h-[280px] w-full overflow-hidden rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-white">
              <Image
                src={`${IMG}/partnerships-related-routes.png`}
                alt="Related contact routes"
                fill
                sizes="(max-width: 1024px) 100vw, 263px"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Card 4: Data Provider Enquiries */}
          <Reveal delay={0.16} className="h-full">
            <div className="flex h-full flex-col justify-start rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-white p-[21.8px]">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-[15px] font-bold text-[#171335]">
                  Data
                  <br />
                  Provider
                  <br />
                  Enquiries
                </h3>
                <span className="shrink-0 rounded-full bg-[rgba(185,129,50,0.14)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.04em] text-[#8A5A00]">
                  NOT YET AVAILABLE
                </span>
              </div>
              <p className="mt-3 text-[13px] leading-[19.5px] text-[#5D5A72]">
                Source and data-provider
                <br />
                relationships with Talvrin.
              </p>
            </div>
          </Reveal>

          {/* Card 5: Careers */}
          <Reveal delay={0.2} className="h-full">
            <div className="flex h-full flex-col justify-start rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-white p-[21.8px]">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-[15px] font-bold text-[#171335]">Careers</h3>
                <span className="shrink-0 rounded-full bg-[rgba(185,129,50,0.14)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.04em] text-[#8A5A00]">
                  NOT YET AVAILABLE
                </span>
              </div>
              <p className="mt-3 text-[13px] leading-[19.5px] text-[#5D5A72]">
                Open roles and employment at
                <br />
                Talvrin.
              </p>
            </div>
          </Reveal>

          {/* Card 6: Press Enquiries */}
          <Reveal delay={0.24} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-white p-[21.8px]">
              <div>
                <h3 className="text-[15px] font-bold text-[#171335]">Press Enquiries</h3>
                <p className="mt-2 text-[13px] leading-[19.5px] text-[#5D5A72]">
                  Media interviews, asset requests,
                  <br />
                  and fact-checking.
                </p>
              </div>
              <div className="mt-4 pt-1">
                <Link
                  href="/connect/press-enquiries"
                  className="text-[13px] font-bold text-[#6C5CE7] transition-colors hover:text-[#171335]"
                >
                  Go to Press Enquiries →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
