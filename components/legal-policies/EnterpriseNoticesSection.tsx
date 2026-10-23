import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LEGAL_DOCS } from "./documents";
import { DocCard, IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const enterpriseDocs = LEGAL_DOCS.filter((d) => d.group === "enterprise");

export default function EnterpriseNoticesSection() {
  return (
    <section id="enterprise-notices" className="scroll-mt-24 bg-white py-16 sm:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,850px)_minmax(0,420px)] lg:justify-between lg:gap-8">
        <div>
          <Reveal>
            <SectionEyebrow>Enterprise &amp; other notices</SectionEyebrow>
            <SectionHeading>Published only where the underlying arrangement applies.</SectionHeading>
            <SectionLede>
              These notices are shown here because they are live. A conditional notice that is not
              yet approved for publication is never linked from this index.
            </SectionLede>
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {enterpriseDocs.map((doc, i) => (
              <Reveal key={doc.href} as="li" delay={i * 0.08}>
                <DocCard doc={doc} />
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal
          delay={0.2}
          className="relative hidden aspect-square w-full overflow-hidden rounded-2xl border border-ink/10 lg:block"
        >
          <Image
            src={`${IMG}/legal-enterprise-laptop.webp`}
            alt="Two colleagues smiling while working on a laptop"
            fill
            sizes="420px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
