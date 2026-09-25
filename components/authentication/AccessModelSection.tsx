import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const layers = [
  {
    title: "Authentication",
    authority: "Identity source",
    question:
      "Who/what is making this request, or what approved credential proves access identity?",
    rule: "Explain only the source-approved proof method. A successful auth state does not imply permission to any resource.",
    dot: "bg-accent-violet",
  },
  {
    title: "Authorization",
    authority: "Permission policy",
    question: "What actions/resources may this authenticated identity access?",
    rule: "Use approved permission and resource policies. Denials must never be mislabeled as authentication failures.",
    dot: "bg-indigo-400",
  },
  {
    title: "Entitlement",
    authority: "Entitlement authority",
    question:
      "Has the account or workspace been granted access to the product capability or dataset?",
    rule: "Keep entitlement gating separate from credential validity, with an approved commercial handoff.",
    dot: "bg-accent-amber",
  },
  {
    title: "Coverage / availability",
    authority: "Coverage registry",
    question: "Is this market, dataset, or capability released and supported?",
    rule: "A valid identity cannot turn planned or unsupported coverage into available coverage.",
    dot: "bg-orange-400",
  },
  {
    title: "Data rights / permitted use",
    authority: "Rights authority",
    question:
      "May this user or application consume, export, redistribute, cache, or derive from the requested data?",
    rule: "Rights enforcement remains authoritative even after authentication and entitlement succeed.",
    dot: "bg-slate-600",
  },
  {
    title: "Operational health",
    authority: "Status mapping",
    question: "Is the authentication or developer service functioning right now?",
    rule: "Use Developer Status when approved; never infer an outage from a single authentication error.",
    dot: "bg-green-600",
  },
];

export default function AccessModelSection() {
  return (
    <section id="access-model" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="violet">Identity, Access &amp; Entitlement Model</SectionEyebrow>
          <SectionHeading>
            Six questions, six independent answers — never one access state.
          </SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-6">
            &ldquo;Authenticated&rdquo; is never rendered as &ldquo;Authorized,&rdquo;
            &ldquo;Entitled,&rdquo; &ldquo;Covered,&rdquo; &ldquo;Licensed,&rdquo; or
            &ldquo;Operational.&rdquo; Each layer can succeed or fail on its own.
          </SectionLede>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,327px)] lg:gap-8">
          <ol className="relative flex flex-col gap-5">
            {/* Connector line behind the numbered circles, from the first centre to the last. */}
            <span
              aria-hidden="true"
              className="absolute bottom-5 left-[19px] top-5 w-0.5 bg-ink/10 sm:left-[23px] sm:bottom-6 sm:top-6"
            />
            {layers.map((layer, index) => (
              <Reveal
                as="li"
                key={layer.title}
                delay={index * 0.04}
                className="flex items-start gap-4 sm:gap-6"
              >
                <span
                  className={clsx(
                    "relative flex size-10 shrink-0 items-center justify-center rounded-full text-base font-bold text-white sm:size-12",
                    layer.dot
                  )}
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div className="flex-1 rounded-xl bg-surface px-5 py-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="text-base font-bold text-ink">{layer.title}</h3>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
                      {layer.authority}
                    </p>
                  </div>
                  <p className="mt-1.5 text-sm leading-5 text-slate-700">{layer.question}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{layer.rule}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal
            delay={0.15}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[2/1] lg:aspect-auto"
          >
            <Image
              src="/images/developers/authentication/authentication-access-model-colleagues.webp"
              alt="Two colleagues talking while walking through an office atrium"
              fill
              sizes="(min-width: 1024px) 327px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
