import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function CoverageEntitlementSection() {
  return (
    <section className="bg-[#f6f5fb] py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Centered / constrained block (max-w-[1000px] as in Figma) */}
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[1.2px] text-[#b98132]">
              COVERAGE & ENTITLEMENT
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl font-bold leading-[1.18] tracking-tight text-[#171335] sm:text-4xl lg:text-[38px]">
              &ldquo;Global by architecture&rdquo; is not a promise every market
              <br />
              is available today.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-[#5d5a72] sm:text-[17px]">
              Talvrin is engineered as a global, multi-market platform, with coverage released progressively as sources meet its evidence-quality, rights and operational standards.
            </p>
          </Reveal>

          {/* Entitlement Rule Card */}
          <Reveal delay={0.2} className="mt-8">
            <div className="rounded-[14px] border border-[#171335]/10 bg-white p-7 sm:p-8 shadow-sm transition-all duration-200 hover:border-[#171335]/20 hover:shadow-md">
              <span className="block text-[12px] font-bold tracking-wider text-[#b98132]">
                ENTITLEMENT RULE
              </span>
              <p className="mt-2.5 text-base leading-relaxed text-[#171335]">
                Any source excerpt, preview, saved copy or download requires usage rights and entitlement enforcement. Unconfirmed availability is shown as &ldquo;Availability not confirmed,&rdquo; never a sweeping global claim.
              </p>
            </div>
          </Reveal>

          {/* Link to Market Coverage */}
          <Reveal delay={0.25} className="mt-6">
            <Link
              href="/markets/market-coverage"
              className="inline-flex items-center text-[14px] font-semibold text-[#6c5ce7] transition-colors duration-150 hover:underline"
            >
              View Market Coverage →
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
