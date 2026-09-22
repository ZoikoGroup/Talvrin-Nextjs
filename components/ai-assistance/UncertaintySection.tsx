import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface UncertaintyRow {
  badge: string;
  tone: "purple" | "amber" | "rose" | "slate";
  message: string;
  description: string;
}

const uncertaintyItems: UncertaintyRow[] = [
  {
    badge: "Evidence Sufficient",
    tone: "purple",
    message:
      "Bounded AI assistance with source links and a visible interpretation label.",
    description: "Allow source inspection; preserve context.",
  },
  {
    badge: "Evidence Limited",
    tone: "amber",
    message: "“Available evidence is incomplete for this question.”",
    description: "Show known gaps and covered sources.",
  },
  {
    badge: "Conflicting Evidence",
    tone: "amber",
    message: "“The available sources do not support a single conclusion.”",
    description: "Present conflict; let user inspect each source.",
  },
  {
    badge: "Rights Restricted",
    tone: "rose",
    message:
      "“Some relevant material cannot be displayed under current access rights.”",
    description: "Explain entitlement state without leaking content.",
  },
  {
    badge: "Coverage Unavailable",
    tone: "slate",
    message: "“This market / dataset / source is not currently supported.”",
    description: "Route to Coverage Status.",
  },
  {
    badge: "Unable to Ground",
    tone: "slate",
    message:
      "“Talvrin cannot support a reliable evidence-linked response from the available source set.”",
    description: "Prefer abstention; offer next research step.",
  },
  {
    badge: "Source Superseded",
    tone: "purple",
    message: "“A newer source version exists.”",
    description: "Prioritize current version; retain historical lineage.",
  },
  {
    badge: "System Error",
    tone: "rose",
    message: "Plain-language recovery message.",
    description: "Retry without duplicate side effects.",
  },
];

export default function UncertaintySection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#6C5CE7]">
              UNCERTAINTY + ABSTENTION
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Knowing when not to answer is part of the product.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-[17px] max-w-xl leading-8 text-ink/70">
              Talvrin prefers abstention to invented detail. These states are
              visible in the interface rather than smoothed over by confident
              prose.
            </p>
          </Reveal>
        </div>

        {/* Table / List View */}
        <div className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
          {uncertaintyItems.map((item, index) => {
            const badgeStyles =
              item.tone === "purple"
                ? "bg-[#EEEDFB] text-[#6C5CE7] border-[#DCD9FA]"
                : item.tone === "amber"
                  ? "bg-[#FDF6EC] text-[#B87C24] border-[#F4E3C8]"
                  : item.tone === "rose"
                    ? "bg-[#FDF2F2] text-[#C53030] border-[#F5D8D8]"
                    : "bg-ink/5 text-ink/70 border-ink/10";

            return (
              <Reveal key={item.badge} delay={0.05 * (index + 1)}>
                <div className="grid grid-cols-1 gap-4 py-5 lg:grid-cols-12 lg:items-center lg:gap-6">
                  {/* Badge Column */}
                  <div className="lg:col-span-3">
                    <span
                      className={`inline-flex items-center rounded-md border px-8 text-center py-1.5 text-xs font-bold tracking-wide uppercase ${badgeStyles}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Message Column */}
                  <div className="lg:col-span-5">
                    <p className="text-sm font-medium text-ink italic lg:not-italic">
                      {item.message}
                    </p>
                  </div>

                  {/* Description Column */}
                  <div className="lg:col-span-4">
                    <p className="text-sm text-ink/70">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
