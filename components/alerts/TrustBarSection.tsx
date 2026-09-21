import Container from "../ui/Container";

const principles = [
  "Context First",
  "Source Linked",
  "Monitoring Owned",
  "Low Noise",
  "Preference Transparent",
  "Human Judgment",
];

export default function TrustBarSection() {
  return (
    <section className="border-y border-ink/8 bg-white py-6">
      <Container className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
        {principles.map((principle, index) => (
          <span key={principle} className="flex items-center gap-x-4 sm:gap-x-6">
            <span className="text-center text-[13px] font-semibold uppercase tracking-[0.78px] text-ink">
              {principle}
            </span>
            {index < principles.length - 1 && (
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
