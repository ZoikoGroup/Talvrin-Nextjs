import Container from "../ui/Container";

const badgesRow1 = [
  "Source-Linked",
  "Time-Aware",
  "Jurisdiction-Aware",
  "Coverage-Governed",
  "Continuously Monitored",
];

export default function TrustBarSection() {
  return (
    <section className="border-y border-ink/8 bg-white py-6">
      <Container className="flex flex-col items-center gap-[8px]">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
          {badgesRow1.map((badge, index) => (
            <span key={badge} className="flex items-center gap-x-4 sm:gap-x-6">
              <span className="text-[13px] font-semibold uppercase tracking-[0.78px] text-ink">
                {badge}
              </span>
              {index < badgesRow1.length - 1 && (
                <span className="hidden text-ink/25 sm:inline" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
        <span className="text-[13px] font-semibold uppercase tracking-[0.78px] text-ink">
          AI-Assisted, Not AI-Authoritative
        </span>
      </Container>
    </section>
  );
}
