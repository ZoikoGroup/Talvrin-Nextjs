import {
  AfricaHero,
  AfricaBoundaries,
  AfricaOverview,
  AfricaJurisdictionDirectory,
  AfricaSourceClasses,
  ConnectivityFallback,
  AfricaResearchFAQ,
  AfricaAnswerFirstFAQ,
  AfricaCTA,
} from "@/components/africa";

export default function AfricaPage() {
  return (
    <main>
      <AfricaHero />
      <AfricaBoundaries />
      <AfricaOverview />
      <AfricaJurisdictionDirectory />
      <AfricaSourceClasses />
      <ConnectivityFallback />
      <AfricaResearchFAQ />
      <AfricaAnswerFirstFAQ />
      <AfricaCTA />
    </main>
  );
}
