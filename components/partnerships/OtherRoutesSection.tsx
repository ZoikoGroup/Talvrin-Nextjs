import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow } from "./shared";

export default function OtherRoutesSection() {
  return (
    <section id="other-routes" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <Container className="max-w-[1320px]">
        <Reveal>
          <SectionEyebrow tone="violet">BEFORE YOU ENQUIRE</SectionEyebrow>
          <h2 className="mt-3 text-2xl font-bold leading-[1.2] text-[#171335] sm:text-3xl sm:leading-[37.5px]">
            Looking for another route?
          </h2>
          <p className="mt-3 max-w-[720px] text-base leading-[25.6px] text-[#5D5A72]">
            A few common situations aren&apos;t Partnerships at all — here&apos;s where they actually belong.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Card 1: Enterprise procurement */}
          <Reveal delay={0.05} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-[#F6F5FB] p-[18px]">
              <div>
                <h3 className="text-sm font-bold text-[#171335]">Enterprise procurement</h3>
                <p className="mt-2 text-[13px] leading-[19.5px] text-[#5D5A72]">
                  Evaluating Talvrin as a
                  <br />
                  product — security,
                  <br />
                  deployment, or purchase.
                </p>
              </div>
              <div className="mt-4 pt-2">
                <Link
                  href="/connect/enterprise-enquiries"
                  className="text-[13px] font-bold text-[#6C5CE7] transition-colors hover:text-[#171335]"
                >
                  Go to Enterprise Enquiries →
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Data or source supply */}
          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-[#F6F5FB] p-[18px]">
              <div>
                <h3 className="text-sm font-bold text-[#171335]">Data or source supply</h3>
                <p className="mt-2 text-[13px] leading-[19.5px] text-[#5D5A72]">
                  Licensing or supplying data
                  <br />
                  or source content to Talvrin.
                </p>
              </div>
              <div className="mt-4 pt-2">
                <p className="text-[12px] font-semibold leading-[16px] text-[#8A5A00]">
                  Not yet available — use
                  <br />
                  <Link href="/company/contact" className="underline hover:text-[#171335]">
                    Contact Talvrin
                  </Link>{" "}
                  for now.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Media or press */}
          <Reveal delay={0.15} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-[#F6F5FB] p-[18px]">
              <div>
                <h3 className="text-sm font-bold text-[#171335]">Media or press</h3>
                <p className="mt-2 text-[13px] leading-[19.5px] text-[#5D5A72]">
                  Interviews, comment
                  <br />
                  requests, or event publicity.
                </p>
              </div>
              <div className="mt-4 pt-2">
                <Link
                  href="/connect/press-enquiries"
                  className="text-[13px] font-bold text-[#6C5CE7] transition-colors hover:text-[#171335]"
                >
                  Go to Press Enquiries →
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Employment */}
          <Reveal delay={0.2} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-[#F6F5FB] p-[18px]">
              <div>
                <h3 className="text-sm font-bold text-[#171335]">Employment</h3>
                <p className="mt-2 text-[13px] leading-[19.5px] text-[#5D5A72]">
                  Looking for a role at Talvrin.
                </p>
              </div>
              <div className="mt-4 pt-2">
                <p className="text-[12px] font-semibold leading-[16px] text-[#8A5A00]">
                  Not yet available — use
                  <br />
                  <Link href="/company/contact" className="underline hover:text-[#171335]">
                    Contact Talvrin
                  </Link>{" "}
                  for now.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 5: Image Card */}
          <Reveal delay={0.25} className="h-full">
            <div className="relative aspect-[208/160] h-full min-h-[160px] w-full overflow-hidden rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-[#F6F5FB]">
              <Image
                src={`${IMG}/partnerships-other-routes.png`}
                alt="Other routes graphic"
                fill
                sizes="(max-width: 1024px) 100vw, 208px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
