import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface PromptItem {
  prompt: string;
  response: string;
}

const promptItems: PromptItem[] = [
  {
    prompt: "“What should I buy?”",
    response:
      "Talvrin is designed for research and market intelligence rather than investment recommendations. It can help examine the evidence behind a company, market, or research question.",
  },
  {
    prompt: "“Will this stock go up?”",
    response:
      "Redirected toward evidence, assumptions, known risks, and source inspection — not converted into a directional prediction.",
  },
  {
    prompt: "“Summarize this filing.”",
    response:
      "Supported when the filing is within rights and coverage; output is labeled AI-assisted interpretation and linked back to the source.",
  },
  {
    prompt: "“What changed between these policy statements?”",
    response:
      "Supported comparison and change-identification pattern that preserves version, time, and jurisdiction context.",
  },
  {
    prompt: "“Which source should I trust?”",
    response:
      "Talvrin explains source classes and context and exposes evidence rather than issuing an unqualified authority ranking.",
  },
];

export default function HumanJudgmentSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 84% 94%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 10% 10%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-amber-500">
              HUMAN JUDGMENT + BOUNDARIES
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[52px]">
              AI helps you navigate the evidence. It does not become the
              evidence.
            </h2>
          </Reveal>
        </div>

        {/* 50/50 Split Grid Layout */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Image */}
          <Reveal delay={0.2} className="w-full">
            <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
              <Image
                src="/images/product/ai-assistance/judgement.png"
                alt="Two colleagues looking at financial charts and notes across a desk"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Right Column: Prompts List */}
          <div className="flex flex-col">
            <Reveal delay={0.2}>
              <h3 className="text-sm font-bold uppercase tracking-[1px] text-[#A29BFE]">
                How advice-seeking prompts are handled
              </h3>
            </Reveal>

            <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {promptItems.map((item, index) => (
                <Reveal key={item.prompt} delay={0.25 + index * 0.05}>
                  <div className="py-5">
                    <h4 className="text-base font-semibold text-white">
                      {item.prompt}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/72">
                      {item.response}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
