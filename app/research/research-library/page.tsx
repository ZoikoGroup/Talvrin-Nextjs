import {
  AccessibilitySeoPerformance,
  AdjacentResearchModules,
  AIBoundary,
  BrowseByCategory,
  LibraryScopeTruth,
  PublicationLifecycle,
  ResearchLibraryCta,
  ResearchLibraryFaq,
  ResearchLibraryHero,
  ResearchLibraryHighlights,
  ResultCardContract,
  SearchAndFilter,
  SourcesProvenanceRights,
} from "@/components/research-library";

export default function ResearchLibraryPage() {
  return (
    <main>
      <ResearchLibraryHero />

      <ResearchLibraryHighlights />

      <LibraryScopeTruth />

      <BrowseByCategory />

      <SearchAndFilter />

      <ResultCardContract />

      <PublicationLifecycle />

      <SourcesProvenanceRights />

      <AIBoundary />

      <AdjacentResearchModules />

      <AccessibilitySeoPerformance />

      <ResearchLibraryFaq />

      <ResearchLibraryCta />
    </main>
  );
}