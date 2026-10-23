import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const variants = [
  {
    title: "Public visitor",
    body: "Sees informational jurisdiction status and definitions; no account or licensed data is exposed.",
  },
  {
    title: "Entitled user",
    body: "Licensed scope for a jurisdiction and dataset is enforced server-side based on account entitlement.",
  },
  {
    title: "Unentitled user",
    body: "Can see that a jurisdiction is covered without unlocking the specific licensed content behind it.",
  },
  {
    title: "Revoked entitlement",
    body: "Prior access is withdrawn; the interface explains the boundary without implying a product fault.",
  },
];

export default function EligibilitySection() {
  return (
    <section className="bg-white pb-16 sm:pb-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Eligibility &amp; data rights</SectionEyebrow>
          <SectionHeading>Access depends on your entitlement and permitted use.</SectionHeading>
          <SectionLede>
            Site geography is not the same thing as a contractual use right. The variants below
            are enforced server-side, independent of any selection made in a browser.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_240px]">
          {variants.map((v, i) => (
            <Reveal
              key={v.title}
              as="article"
              delay={i * 0.06}
              className="flex flex-col gap-2 rounded-2xl border border-ink/10 bg-surface p-5"
            >
              <h3 className="text-sm font-bold text-ink">{v.title}</h3>
              <p className="text-[13px] leading-5 text-slate-600">{v.body}</p>
            </Reveal>
          ))}
          <Reveal
            delay={0.3}
            className="relative hidden overflow-hidden rounded-2xl border border-ink/10 lg:block"
          >
            <Image
              src={`${IMG}/jurisdictions-eligibility-walkway.webp`}
              alt="Two colleagues talking as they walk along an office skybridge"
              fill
              sizes="240px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
