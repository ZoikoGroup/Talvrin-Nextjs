import Container from "../ui/Container";

const principles = [
  "Source-linked",
  "Time-aware",
  "Jurisdiction-aware",
  "Coverage-governed",
  "Continuously monitored",
  "AI-assisted, not AI-authoritative",
];

export default function PrinciplesStrip() {
  return (
    <section aria-label="Evidence principles" className="border-y border-ink/10 bg-white py-6">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
          {principles.map((item, index) => (
            <li key={item} className="flex items-center gap-4 sm:gap-6">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-ink sm:text-xs">
                {item}
              </span>
              {index < principles.length - 1 && (
                <span aria-hidden="true" className="text-ink/25">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
