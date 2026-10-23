import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LabelledRows, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const badge = "bg-surface border-ink/20 text-ink";

const safeguards = [
  {
    label: "Global claims overreach",
    body: "Coverage statements are registry-fed and factual; an explicit unknown state is shown rather than implying universal reach.",
  },
  {
    label: "Unverified metrics / logos",
    body: "No customer counts, institutional marks, or scale claims appear without an approved, dated claim record.",
  },
  {
    label: "Map-only accessibility",
    body: "Region and jurisdiction information is available as text and lists, not only through a map or custom widget.",
  },
  {
    label: "Cross-jurisdiction inference",
    body: "Rights, languages, and access are shown per record with precise scope and time — never assumed to transfer across borders.",
  },
  {
    label: "Lead capture before proof",
    body: "Evidence and coverage context are shown before any inquiry or access-request form is presented.",
  },
  {
    label: "Stale snapshots",
    body: "Source time and last-verified timestamps accompany every claim; an unresolved state is shown rather than guessed.",
  },
  {
    label: "AI narrative authority",
    body: "AI-assisted interpretation is marked separately from the original source and from the human decision it supports.",
  },
  {
    label: "Unsupported links",
    body: "Destinations not yet released are marked pending rather than linked as if they were already live.",
  },
].map((s) => ({ ...s, badge }));

export default function LimitationsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Coverage details &amp; limitations</SectionEyebrow>
          <SectionHeading>A truthful narrow answer beats an impressive ambiguous one.</SectionHeading>
          <SectionLede>
            Each risk identified in review has a plain-language safeguard applied directly to this
            page.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <LabelledRows rows={safeguards} labelWidth="lg:grid-cols-[220px_minmax(0,1fr)]" />
        </Reveal>
      </Container>
    </section>
  );
}
