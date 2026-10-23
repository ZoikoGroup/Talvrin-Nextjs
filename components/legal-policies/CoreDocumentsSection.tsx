import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LEGAL_DOCS } from "./documents";
import { DocCard, IMG, SectionEyebrow, SectionHeading } from "./shared";

const coreDocs = LEGAL_DOCS.filter((d) => d.group === "core");

export default function CoreDocumentsSection() {
  return (
    <section id="core-documents" className="scroll-mt-24 bg-white py-16 sm:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow>Core documents — always findable</SectionEyebrow>
          <SectionHeading className="max-w-[760px]">
            The notices that apply to everyone using Talvrin.
          </SectionHeading>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_302px]">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {coreDocs.map((doc, i) => (
              <Reveal key={doc.href} as="li" delay={(i % 3) * 0.06}>
                <DocCard doc={doc} />
              </Reveal>
            ))}
          </ul>

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-2xl border border-ink/10 lg:block"
          >
            <Image
              src={`${IMG}/legal-core-docs-tablet.webp`}
              alt="Two colleagues reviewing a tablet together in an office"
              fill
              sizes="302px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
