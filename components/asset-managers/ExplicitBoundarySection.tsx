import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const boundaries = [
  {
    title: "Not a portfolio management system",
    desc: (
      <>
        <span className="block whitespace-normal lg:whitespace-nowrap">The page does not imply holdings, allocations,</span>
        <span className="block whitespace-normal lg:whitespace-nowrap">accounting, cash, benchmark, or portfolio-state</span>
        <span className="block whitespace-normal lg:whitespace-nowrap">management.</span>
      </>
    ),
  },
  {
    title: "Not a OMS / EMS / trading platform",
    desc: (
      <>
        <span className="block whitespace-normal lg:whitespace-nowrap">Talvrin is not order capture, execution, routing, or</span>
        <span className="block whitespace-normal lg:whitespace-nowrap">trade-lifecycle infrastructure.</span>
      </>
    ),
  },
  {
    title: "Not a risk engine",
    desc: (
      <>
        <span className="block whitespace-normal lg:whitespace-nowrap">No VaR, factor risk, exposures, limits, stress</span>
        <span className="block whitespace-normal lg:whitespace-nowrap">testing, or mandate monitoring is implied.</span>
      </>
    ),
  },
  {
    title: "Not a performance / attribution system",
    desc: (
      <>
        <span className="block whitespace-normal lg:whitespace-nowrap">No return calculation, attribution, benchmark</span>
        <span className="block whitespace-normal lg:whitespace-nowrap">performance, or GIPS-like reporting is implied.</span>
      </>
    ),
  },
  {
    title: (
      <>
        <span className="block whitespace-normal lg:whitespace-nowrap">Not an investment recommendation</span>
        <span className="block whitespace-normal lg:whitespace-nowrap">engine</span>
      </>
    ),
    desc: (
      <>
        <span className="block whitespace-normal lg:whitespace-nowrap">No buy/sell/hold, target price, model portfolio, or</span>
        <span className="block whitespace-normal lg:whitespace-nowrap">allocation recommendation.</span>
      </>
    ),
  },
  {
    title: "Not a compliance surveillance system",
    desc: (
      <>
        <span className="block whitespace-normal lg:whitespace-nowrap">Governance and reviewability do not equal</span>
        <span className="block whitespace-normal lg:whitespace-nowrap">regulated surveillance or recordkeeping.</span>
      </>
    ),
  },
  {
    title: "Not a guaranteed-outcome system",
    desc: (
      <>
        <span className="block whitespace-normal lg:whitespace-nowrap">No performance promise, forecast certainty, or</span>
        <span className="block whitespace-normal lg:whitespace-nowrap">investment-outcome guarantee.</span>
      </>
    ),
  },
];

export default function ExplicitBoundarySection() {
  return (
    <section className="w-full bg-[#171335] py-20 lg:py-24 text-white">
      <Container className="max-w-[1320px]">
        <Reveal>
          <div className="flex flex-col justify-start items-start">
            <div className="text-yellow-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide text-[#B98132]">
              EXPLICIT BOUNDARY
            </div>
            <h2 className="mt-3 text-violet-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-['IBM_Plex_Sans'] leading-tight lg:leading-[48.72px] text-[#F6F5FB]">
              What Talvrin is not.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {boundaries.map((item, index) => (
            <Reveal key={index} delay={0.05 * index}>
              <div className="self-stretch pt-4 border-t-[1.60px] border-violet-50/20 inline-flex flex-col justify-start items-start gap-2 w-full">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-violet-50 text-base font-bold font-['IBM_Plex_Sans']">
                    {item.title}
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-violet-50/70 text-sm font-normal font-['IBM_Plex_Sans'] leading-5">
                    {item.desc}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
