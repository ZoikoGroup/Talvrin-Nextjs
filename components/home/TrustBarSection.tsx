import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const features = [
  "SOURCE-LINKED",
  "TIME-AWARE",
  "JURISDICTION-AWARE",
  "GLOBAL-READY",
  "CONTINUOUSLY MONITORED",
  "AI-ASSISTED, NOT AI-AUTHORITATIVE",
];

export default function TrustBarSection() {
  return (
    <section className="relative overflow-hidden border-y border-ink/5 bg-white py-12 sm:py-16">
      <Container className="relative">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center sm:gap-x-12">
            {features.map((feature, index) => (
              <div key={feature} className="flex items-center">
                <span className="text-xs font-bold tracking-[1.2px] text-ink/80 sm:text-sm">
                  {feature}
                </span>
                {index < features.length - 1 && (
                  <span className="ml-8 hidden h-1 w-1 rounded-full bg-ink/30 lg:inline-block" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
