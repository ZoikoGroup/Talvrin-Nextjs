import {
  AdjacentSolutions,
  AIGovernance,
  CapabilityTruth,
  Coverage,
  EnterpriseCTA,
  EnterpriseFaq,
  Governance,
  Hero,
  InstitutionalMemory,
  Monitoring,
  Outcomes,
  Problem,
  Rights,
  TrustArchitecture,
  TrustBar,
  Workflow,
} from "@/components/enterprise";

export default function EnterprisePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Outcomes />
      <Problem />
      <Workflow />
      <Governance />
      <InstitutionalMemory />
      <Monitoring />
      <Coverage />
      <Rights />
      <AIGovernance />
      <TrustArchitecture />
      <CapabilityTruth />
      <AdjacentSolutions />
      <EnterpriseFaq />
      <EnterpriseCTA />
    </main>
  );
}