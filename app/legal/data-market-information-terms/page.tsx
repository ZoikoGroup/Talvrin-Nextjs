import {
  DataMarketInformationTermsHero,
  DataMarketInformationAtGlance,
  DataMarketInformationTermsContent,
  DataMarketRelatedLegal,
  DataMarketInformationCTA,
} from "@/components/data-market-information-terms";

export default function Page() {
  return (
    <main>
      <DataMarketInformationTermsHero />

      <DataMarketInformationAtGlance />

      <DataMarketInformationTermsContent />

      <DataMarketRelatedLegal />

      <DataMarketInformationCTA />
    </main>
  );
}