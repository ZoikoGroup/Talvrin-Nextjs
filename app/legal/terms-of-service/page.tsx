import {
  TermsOfServiceContent,
  TermsOfServiceCTA,
  TermsOfServiceDocumentIndex,
  TermsOfServiceFaq,
  TermsOfServiceGlance,
  TermsOfServiceHero,
  TermsOfServiceRelated,
  TermsOfServiceStatus,
} from "@/components/terms-of-service";

export default function Page() {
  return (
    <main>
      <TermsOfServiceHero />
      <TermsOfServiceGlance />
      <TermsOfServiceStatus />
      <TermsOfServiceDocumentIndex />
      <TermsOfServiceContent />
      <TermsOfServiceRelated />
      <TermsOfServiceFaq />
      <TermsOfServiceCTA />
    </main>
  );
}
