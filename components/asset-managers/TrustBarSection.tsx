import Container from "@/components/ui/Container";

const principles = [
  "RESEARCH INFRASTRUCTURE, NOT PORTFOLIO INFRASTRUCTURE",
  "REVIEWABLE, NOT APPROVED",
  "INSTITUTIONAL MEMORY, NOT RECORDKEEPING",
  "MONITORED, NOT TRADED",
  "GOVERNED COVERAGE, NOT GLOBAL CLAIMS",
  "EVIDENCE-LED, NOT AI-AUTHORITATIVE",
];

export default function TrustBarSection() {
  return (
    <section className="border-y border-slate-900/10 bg-white py-6 sm:py-7">
      <Container className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 sm:gap-x-6">
        {principles.map((principle, index) => (
          <span key={principle} className="flex items-center gap-x-4 sm:gap-x-6">
            <span className="text-center text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider text-[#171335]">
              {principle}
            </span>
            {index < principles.length - 1 && (
              <span className="hidden text-slate-900/25 sm:inline" aria-hidden="true">
                ·
              </span>
            )}
          </span>
        ))}
      </Container>
    </section>
  );
}
