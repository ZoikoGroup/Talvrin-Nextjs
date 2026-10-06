import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { Banner, IMAGE_DIR } from "./shared";

/** Lifecycle, Entitlement and Derived & AI share one shape: intro + full-width photo. */
function BannerSection({
  id,
  className,
  eyebrow,
  tone,
  inverted,
  title,
  lede,
  image,
}: {
  id: string;
  className: string;
  eyebrow: string;
  tone?: "violet" | "amber";
  inverted?: boolean;
  title: string;
  lede: string;
  image: { src: string; alt: string; ratio: string };
}) {
  return (
    <section id={id} className={`scroll-mt-32 py-20 sm:py-24 ${className}`}>
      <Container>
        <Reveal>
          <SectionIntro eyebrow={eyebrow} tone={tone} inverted={inverted} title={title}>
            {lede}
          </SectionIntro>
        </Reveal>
        <Reveal delay={0.1} className="mt-4">
          <Banner {...image} />
        </Reveal>
      </Container>
    </section>
  );
}

export function LifecycleSection() {
  return (
    <BannerSection
      id="lifecycle"
      className="bg-surface"
      eyebrow="Source to Experience"
      tone="amber"
      title="Every rights decision follows the same seven stages."
      lede="Each stage resolves from governed source and rights metadata — never UI-side guessing. Unknown is a valid stage result, and it never silently becomes permitted."
      image={{
        src: `${IMAGE_DIR}/data-rights-lifecycle-review.webp`,
        alt: "A professional reading a printed document at a conference table",
        ratio: "aspect-[1310/442]",
      }}
    />
  );
}

export function EntitlementSection() {
  return (
    <BannerSection
      id="entitlement"
      className="bg-white"
      eyebrow="Sign-In Is Not a License"
      title="Identity, role, entitlement and policy stay separate."
      lede="A valid session proves who a user is. It does not prove a source, provider or workspace entitlement exists."
      image={{
        src: `${IMAGE_DIR}/data-rights-entitlement-desk.webp`,
        alt: "A professional signing paperwork at a desk beside a laptop",
        ratio: "aspect-[1278/339]",
      }}
    />
  );
}

export function DerivedContentSection() {
  return (
    <BannerSection
      id="derived-ai"
      className="bg-ink"
      eyebrow="Source Fact vs Derived Content"
      inverted
      title="Five layers. Rights do not automatically widen as content moves through them."
      lede="Normalizing, analyzing or AI-assisting a source does not grant display or redistribution rights the source material never had."
      image={{
        src: `${IMAGE_DIR}/data-rights-derived-content-call.webp`,
        alt: "A professional on a phone call at a desk in a high-rise office",
        ratio: "aspect-[1310/408]",
      }}
    />
  );
}
