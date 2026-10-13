import {
  TermsOfServiceContent,
  TermsOfServiceCTA,
  TermsOfServiceGlance,
  TermsOfServiceHero,
  TermsOfServiceRelated,
} from "@/components/terms-of-service";

export default function Page() {
  return (
    <main>
      <TermsOfServiceHero />
      <TermsOfServiceGlance />
      <TermsOfServiceContent />
      <TermsOfServiceRelated />
      <TermsOfServiceCTA />
    </main>
  );
}
