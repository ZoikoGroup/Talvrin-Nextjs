import { BookOpenCheck, Radar, ShieldCheck, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const highlights = [
  {
    icon: BookOpenCheck,
    title: "Sourced Evidence",
    description: "Every claim links back to its underlying document, filing, or dataset.",
  },
  {
    icon: Radar,
    title: "Live Monitoring",
    description: "Watchlists and alerts surface what changed the moment it matters.",
  },
  {
    icon: Sparkles,
    title: "AI Assistance",
    description: "Ask questions in plain language and get answers grounded in evidence.",
  },
  {
    icon: ShieldCheck,
    title: "Trust by Design",
    description: "Data governance and evidence standards built into every workspace.",
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Why Talvrin</SectionEyebrow>
          <SectionHeading>Built for professionals who need to trust their sources</SectionHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
