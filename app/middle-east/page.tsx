import {
  MiddleEastHero,
  MiddleEastBoundaries,
  MiddleEastOverview,
  LevantMesopotamiaRegimes,
  BroaderMiddleEast,
  SourceClasses,
  ArabicEnglishPublicationHandling,
  ReleaseGovernance,
  RegionalResearchFAQ,
  MiddleEastFAQ,
  MiddleEastCTA,
} from "@/components/middle-east";

export default function MiddleEastPage() {
  return (
    <main>
      <MiddleEastHero />
      <MiddleEastBoundaries />
      <MiddleEastOverview />
      <LevantMesopotamiaRegimes />
      <BroaderMiddleEast />
      <SourceClasses />
      <ArabicEnglishPublicationHandling />
      <ReleaseGovernance />
      <RegionalResearchFAQ />
      <MiddleEastFAQ />
      <MiddleEastCTA />
    </main>
  );
}
