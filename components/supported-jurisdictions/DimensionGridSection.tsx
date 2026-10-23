import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { DIMENSIONS, JURISDICTIONS, STATUS_LABEL, STATUS_TEXT } from "./data";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export default function DimensionGridSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow>Coverage dimension grid</SectionEyebrow>
          <SectionHeading>A verified jurisdiction isn&apos;t verified for everything at once.</SectionHeading>
          <SectionLede>
            Matrix rows are the eligible dimensions; columns are jurisdiction records. &ldquo;Not
            assessed&rdquo; is a valid, honest state — never defaulted to checked.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 overflow-x-auto rounded-2xl border border-ink/10">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <caption className="sr-only">Coverage status by dimension and jurisdiction</caption>
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="px-4 py-4 text-xs font-bold uppercase tracking-wide text-slate-600">
                  Dimension
                </th>
                {JURISDICTIONS.map((j) => (
                  <th key={j.name} scope="col" className="px-4 py-4 text-xs font-bold tracking-wide text-slate-600">
                    {j.shortName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DIMENSIONS.map((d) => (
                <tr key={d} className="border-t border-ink/10">
                  <th scope="row" className="px-4 py-4 text-sm font-bold text-ink">
                    {d}
                  </th>
                  {JURISDICTIONS.map((j) => {
                    const status = j.dimensions[d];
                    return (
                      <td key={j.name} className={clsx("px-4 py-4 text-xs font-bold", STATUS_TEXT[status])}>
                        {STATUS_LABEL[status]}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}
