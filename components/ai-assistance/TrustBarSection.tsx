import Container from "../ui/Container";

const principles = [
  "SOURCE-LINKED",
  "CONTEXT-AWARE",
  "RIGHTS-AWARE",
  "HUMAN-JUDGMENT",
  "AI-ASSISTED, NOT AI-AUTHORITATIVE",
];

export default function TrustBarSection() {
  return (
    <section className="border-y border-ink/8 bg-white py-6">
      <Container className="flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
          {principles.map((principle, index) => (
            <span
              key={principle}
              className="flex items-center gap-x-6 sm:gap-x-8"
            >
              <span className="text-center text-[13px] font-semibold uppercase tracking-[0.78px] text-ink">
                {principle}
              </span>
              {index < principles.length - 1 && (
                <span className="text-ink/25" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
