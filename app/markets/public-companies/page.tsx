import type { Metadata } from "next";
import {
  PublicCompaniesHero,
  TrustBarSection,
  ScopeClaimControlsSection,
  IssuerDirectorySection,
  IssuerProfileTemplateSection,
  DisclosureTaxonomySection,
  EvidenceResultsContractSection,
  FilingDetailProvenanceSection,
  TemporalVersionContextSection,
  AdjacentMarketRoutesSection,
  RightsTrustLimitationsSection,
  PublicCompaniesFaqSection,
  PublicCompaniesCtaSection,
} from "@/components/public-companies";

export const metadata: Metadata = {
  title: "Public Companies | Talvrin",
  description:
    "Discover issuer disclosures and supported company evidence with the original source, reporting period, publication context and changes kept visible.",
};

export default function PublicCompaniesPage() {
  return (
    <>
      <PublicCompaniesHero />
      <TrustBarSection />
      <ScopeClaimControlsSection />
      <IssuerDirectorySection />
      <IssuerProfileTemplateSection />
      <DisclosureTaxonomySection />
      <EvidenceResultsContractSection />
      <FilingDetailProvenanceSection />
      <TemporalVersionContextSection />
      <AdjacentMarketRoutesSection />
      <RightsTrustLimitationsSection />
      <PublicCompaniesFaqSection />
      <PublicCompaniesCtaSection />
    </>
  );
}
