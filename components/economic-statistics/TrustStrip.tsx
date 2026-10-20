import Container from "../ui/Container";

const badges = [
  "Evidence-First",
  "Source-Verified",
  "Period-Explicit",
  "Revision-Aware",
  "Rights-Aware",
  "Non-Advisory",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-ink/8 bg-white py-6">
      <Container className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
        {badges.map((badge, index) => (
          <span key={badge} className="flex items-center gap-x-4 sm:gap-x-6">
            <span className="text-[13px] font-semibold uppercase tracking-[0.78px] text-ink">
              {badge}
            </span>
            {index < badges.length - 1 && (
              <span className="hidden text-ink/25 sm:inline" aria-hidden="true">
                ·
              </span>
            )}
          </span>
        ))}
      </Container>
    </section>
  );
}
