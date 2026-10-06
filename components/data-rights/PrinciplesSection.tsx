import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { Banner, IMAGE_DIR } from "./shared";

const principles = [
  {
    title: "Rights before exposure",
    body: "Content is not exposed before the current rights state permits the action.",
    rule: "Rights state is checked before rendering restricted content, not after.",
  },
  {
    title: "Entitlement before access",
    body: "Authentication alone does not prove a user or workspace is entitled to a source.",
    rule: "Sign-in status and provider entitlement are evaluated as separate checks.",
  },
  {
    title: "Use before redistribution",
    body: "Permitted research use does not automatically permit sharing or redistribution.",
    rule: "Export, share and API actions run an independent rights check at execution time.",
  },
  {
    title: "Context before assumption",
    body: "Rights can depend on source, action, user/workspace, market, jurisdiction and time.",
    rule: "A right is evaluated per action and context — never assumed globally.",
  },
  {
    title: "Unknown stays unknown",
    body: "Unresolved rights do not silently become permitted.",
    rule: "Restricted actions fail closed whenever rights cannot be verified.",
  },
];

export default function PrinciplesSection() {
  return (
    <section id="principles" className="scroll-mt-32 bg-white py-20 sm:py-[72px]">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Doctrine, Not a License Catalog"
            title="Six principles, each with an implementation rule."
          >
            Rights are a first-class part of the evidence chain. Each principle below converts into a
            concrete product rule, not a compliance slogan.
          </SectionIntro>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-surface p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-accent-amber">
                  Principle {index + 1}
                </p>
                <h3 className="text-lg font-bold leading-6 text-ink">{principle.title}</h3>
                <p className="flex-1 text-sm leading-5 text-ink-soft">{principle.body}</p>
                <p className="border-t border-ink/10 pt-2.5 text-xs leading-5 text-muted">
                  {principle.rule}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-5">
          <Banner
            src={`${IMAGE_DIR}/data-rights-principles-boardroom.webp`}
            alt="A professional reviewing notes alone at a boardroom table"
            ratio="aspect-[1278/307]"
            className="border border-ink/10"
          />
        </Reveal>
      </Container>
    </section>
  );
}
