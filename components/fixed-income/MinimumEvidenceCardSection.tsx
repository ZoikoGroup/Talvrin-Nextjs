import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "../global-markets/shared";

export default function MinimumEvidenceCardSection() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Minimum Fixed-Income Evidence Card</SectionEyebrow>
          <h2 className="mt-[11.4px] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.16]">
            The source should never disappear behind the answer.
          </h2>
          <p className="mt-[11.4px] max-w-2xl text-base text-white/70 sm:text-lg">
            Every fixed-income evidence object carries the same canonical fields, regardless of
            source class.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-[11.4px] aspect-[1309/410] w-full overflow-hidden rounded-2xl bg-surface"
        >
          <Image
            src="/images/markets/fixed-income/fixed-income-evidence-card-group.webp"
            alt="A group of colleagues discussing fixed-income research at a table"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
