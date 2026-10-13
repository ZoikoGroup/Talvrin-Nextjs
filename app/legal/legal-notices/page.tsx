import {
  LegalNoticesContent,
  LegalNoticesCTA,
  LegalNoticesGlance,
  LegalNoticesHero,
  LegalNoticesRelated,
} from "@/components/legal-notices";

export default function Page() {
  return (
    <main>
      <LegalNoticesHero />
      <LegalNoticesGlance />
      <LegalNoticesContent />
      <LegalNoticesRelated />
      <LegalNoticesCTA />
    </main>
  );
}
