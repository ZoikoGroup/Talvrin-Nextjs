import {
  ArticlePattern,
  DocumentationFinalCta,
  DocumentationHero,
  DocumentationNavigation,
  DocumentationSearchNotice,
  DocumentationTaxonomy,
  StartByGoal,
  TechnicalDeveloperDocumentation,
  TroubleshootingRecovery,
  TrustGovernanceHandoff,
} from '@/components/documentation'

export default function DocumentationPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <DocumentationHero />

      <DocumentationNavigation />

      <DocumentationSearchNotice />

      <StartByGoal />

      <DocumentationTaxonomy />

      <ArticlePattern />

      <TechnicalDeveloperDocumentation />

      <TrustGovernanceHandoff />

      <TroubleshootingRecovery />

      <DocumentationFinalCta />
    </main>
  )
}