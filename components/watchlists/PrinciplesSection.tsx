import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const principles = [
  {
    title: "Deliberate",
    description: "Follow what you choose — not what an engagement algorithm pushes.",
  },
  {
    title: "Evidence-aware",
    description: "Move from a watchlist item back to inspectable evidence where available.",
  },
  {
    title: "Monitoring-connected",
    description: "See governed monitoring context without duplicating the workflow.",
  },
  {
    title: "Human judgment",
    description: "A watched item is not a recommendation, signal, or automated conclusion.",
  },
  {
    title: "Context-preserving",
    description: "Keep the reason, research view, or question close to the item.",
  },
  {
    title: "Low-noise",
    description: "A list should help you recover and review, not manufacture urgency.",
  },
];

export default function PrinciplesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal className="grid grid-cols-1 overflow-hidden rounded-2xl border border-ink/8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 p-8 sm:grid-cols-3 sm:p-10">
            {principles.map((item) => (
              <div key={item.title}>
                <h3 className="text-[15px] font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="relative min-h-[220px] lg:min-h-0">
            <Image
              src="/images/product/watchlist/image 17.webp"
              alt="Analyst smiling while reviewing research on a laptop"
              fill
              sizes="(min-width: 1024px) 320px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
