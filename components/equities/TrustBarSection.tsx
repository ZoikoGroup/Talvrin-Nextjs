import Container from "../ui/Container";

const badges = [
  "Source-Linked",
  "Period-Aware",
  "Entity-Aware",
  "Jurisdiction-Aware",
  "Continuously Monitored",
  "AI-Assisted, Not AI-Authoritative",
];

export default function TrustBarSection() {
  return (
    <section className="border-y border-ink/10 bg-white py-5">
      {/* Labels sit one gap apart with the separator centred inside that gap,
          so the dot never widens the spacing between them. */}
      <Container className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8 lg:gap-x-12">
        {badges.map((badge) => (
          <span
            key={badge}
            className="relative text-center text-xs font-semibold uppercase tracking-wide text-ink after:absolute after:-right-[26px] after:top-0 after:hidden after:text-ink/25 after:content-['·'] last:after:content-[''] lg:after:block"
          >
            {badge}
          </span>
        ))}
      </Container>
    </section>
  );
}
