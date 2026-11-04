import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

export type PlainTermsItem = { title: string; text: string };

/** Six short explainer cards beside a tall image. Shared by the Cookies and Cookie Preferences pages. */
export default function PlainTermsSection({
  heading,
  items,
  image,
}: {
  heading: string;
  items: PlainTermsItem[];
  image: { src: string; alt: string };
}) {
  return (
    <section className="border-b border-ink/10 bg-white py-16 sm:py-[72px]">
      <Container className="max-w-[1180px]">
        <Reveal>
          <SectionEyebrow tone="amber">What else to know</SectionEyebrow>
          <SectionHeading>{heading}</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_260px]">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.05}
                className="flex flex-col gap-2.5 rounded-xl border border-ink/10 bg-surface p-5"
              >
                <h3 className="text-xs font-bold uppercase tracking-wide text-accent-violet">{item.title}</h3>
                <p className="text-sm leading-5 text-ink">{item.text}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal
            delay={0.2}
            className="relative hidden min-h-[380px] overflow-hidden rounded-xl border border-ink/10 bg-surface lg:block"
          >
            <Image src={image.src} alt={image.alt} fill sizes="260px" className="object-cover" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
