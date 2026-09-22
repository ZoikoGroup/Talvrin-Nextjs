import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "How is AI separated from evidence?",
    answer:
      "The four-layer authority model and source-linked answer anatomy keep generated interpretation visually and programmatically distinct from source material.",
  },
  {
    question: "Can we inspect why an output exists?",
    answer:
      "Yes. Source identity, context, version, rights/access state, and linked evidence are exposed alongside AI-assisted interpretation.",
  },
  {
    question: "How are AI claims governed?",
    answer:
      "AI capability, model/provider, coverage, and policy claims publish only from approved registries and policies — never invented in page copy.",
  },
  {
    question: "Does AI replace analyst judgment?",
    answer:
      "No. Talvrin is designed to improve the information environment; interpretation, judgment, and responsibility remain human.",
  },
  {
    question: "Can coverage vary by market or jurisdiction?",
    answer:
      "Yes. Architecture capability and released coverage are distinguished; exact availability comes from Coverage Status.",
  },
  {
    question: "What happens when evidence conflicts?",
    answer:
      "Conflict and abstention states are shown explicitly. Talvrin does not collapse disagreement into a single manufactured conclusion.",
  },
];

export default function EnterpriseTrustSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#6C5CE7]">
              RIGHTS, PRIVACY, SECURITY, GOVERNANCE
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Enterprise trust questions, answered directly.
            </h2>
          </Reveal>
        </div>

        {/* Main Layout: Grid of FAQs on the left, Image on the right */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: 3x2 Grid of FAQs (takes 7 columns) */}
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:col-span-7">
            {faqItems.map((item, index) => (
              <Reveal key={item.question} delay={0.05 * (index + 1)}>
                <div className="flex flex-col">
                  <div className="h-0.5 w-6 bg-[#6C5CE7] mb-3" />
                  <h3 className="text-base font-bold text-ink">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {item.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Column: Featured Image (takes 5 columns) */}
          <Reveal delay={0.4} className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-ink/5 shadow-md">
              <Image
                src="/images/product/ai-assistance/trust.png"
                alt="Colleagues in a consultation meeting discussing trust and governance documents"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
