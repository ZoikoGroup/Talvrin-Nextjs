import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const relationships = [
  {
    title: "Supports",
    body: "The change reinforces part of the working research view — not proof, and not certainty.",
  },
  {
    title: "Contradicts",
    body: "The change conflicts with part of the working view. Both the conflict and its context are preserved.",
  },
  {
    title: "Unresolved",
    body: "The relationship to the research question is not yet clear and is labeled as such rather than forced to a side.",
  },
];

export default function RelevanceSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Relevance &amp; Materiality</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[800px]">
            Meaningful for one research question may not be material to another.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
            A change is weighed against the question it was linked to — not
            scored in the abstract and not ranked by urgency.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-2.5">
          {relationships.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.05 * (index + 2)}
              className="rounded-2xl border border-ink/10 bg-white p-6"
            >
              <h3 className="text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-5 text-gray-600">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.25}
          className="mt-3 rounded-2xl border border-ink/10 bg-white px-6 py-6 sm:px-7"
        >
          <p className="text-xs font-bold tracking-wide text-accent-violet">ASSISTIVE INTERPRETATION</p>
          <p className="mt-2 text-sm leading-6 text-ink sm:text-base">
            Why a difference may matter is explained in plain language and
            clearly labeled as interpretation — it is never presented as a
            numeric relevance score or a guaranteed-accuracy signal.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href="/product/research-workspace"
            className="mt-12 inline-block text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
          >
            Revisit Your Research View →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
