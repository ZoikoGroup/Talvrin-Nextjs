import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface ComparisonItem {
  type: "REVISION" | "ADDITION" | "UNCHANGED";
  text: string;
}

const comparisonRows: ComparisonItem[] = [
  {
    type: "REVISION",
    text: "Balance-sheet language narrows the stated reduction pace.",
  },
  {
    type: "ADDITION",
    text: "New paragraph on labor-market assessment.",
  },
  {
    type: "UNCHANGED",
    text: "Inflation target language is unchanged.",
  },
];

export default function CompareSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#6C5CE7]">
              COMPARE + SUMMARIZE
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Version-aware, time-aware, jurisdiction-aware — before the
              summary.
            </h2>
          </Reveal>
        </div>

        {/* Source Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl">
          {/* Source A */}
          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-ink/10 bg-[#F8F9FC] p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-[1px] text-[#6C5CE7]">
                SOURCE A
              </span>
              <h3 className="mt-2 text-lg font-bold text-ink">
                FOMC Statement (Jul 2026)
              </h3>
              <p className="mt-1 text-xs text-ink/60">
                Federal Reserve · Published 30 Jul 2026 · United States ·
                Superseded
              </p>
            </div>
          </Reveal>

          {/* Source B */}
          <Reveal delay={0.3}>
            <div className="rounded-2xl border border-ink/10 bg-[#F8F9FC] p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-[1px] text-[#6C5CE7]">
                SOURCE B
              </span>
              <h3 className="mt-2 text-lg font-bold text-ink">
                FOMC Statement (Aug 2026)
              </h3>
              <p className="mt-1 text-xs text-ink/60">
                Federal Reserve · Published 28 Aug 2026 · United States ·
                Current
              </p>
            </div>
          </Reveal>
        </div>

        {/* Comparison List Rows */}
        <div className="mt-10 max-w-4xl divide-y divide-ink/10 border-y border-ink/10">
          {comparisonRows.map((row, index) => {
            const badgeBg =
              row.type === "REVISION"
                ? "bg-[#FDF6EC] text-[#B87C24] border-[#F4E3C8]"
                : row.type === "ADDITION"
                  ? "bg-[#EEEDFB] text-[#6C5CE7] border-[#DCD9FA]"
                  : "bg-ink/5 text-ink/60 border-ink/10";

            return (
              <Reveal key={row.text} delay={0.35 + index * 0.05}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase ${badgeBg}`}
                    >
                      {row.type}
                    </span>
                    <span className="text-sm font-medium text-ink">
                      {row.text}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="text-xs font-semibold text-[#6C5CE7] hover:underline self-start sm:self-auto shrink-0"
                  >
                    View source passage
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* AI-Assisted Comparison Card */}
        <Reveal delay={0.6} className="mt-10 max-w-4xl">
          <div className="relative bg-[#F8F9FC] p-6 sm:p-8 shadow-sm border-l-4 border-l-[#B87C24]">
            <span className="text-xs font-bold uppercase tracking-[1px] text-[#B87C24]">
              AI-ASSISTED COMPARISON
            </span>
            <p className="mt-3 text-sm italic leading-relaxed text-ink/80">
              &ldquo;Three substantive wording changes are visible between the
              two source versions. Two alter timing language; one changes the
              scope of the stated policy. Review the linked source passages
              before relying on this interpretation.&rdquo;
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
