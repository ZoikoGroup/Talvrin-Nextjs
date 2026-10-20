import {
  Boundaries,
  BrowseGuides,
  MethodSection,
  ResearchGuidesCTA,
  ResearchGuidesHero,
  StartHere,
} from "@/components/research-guides";

export default function Page() {
  return (
    <main>
      <ResearchGuidesHero />

      <StartHere />

      <BrowseGuides />

      <MethodSection />

      <Boundaries />

      <ResearchGuidesCTA />
    </main>
  );
}
