import {
  AIHero,
  AITermsContent,
  AITermsCTA,
  AITermsGlance,
  LegalSequence,
} from "@/components/ai-terms";

export default function Page() {
  return (
    <main>
      <AIHero />
      <AITermsGlance />
      <AITermsContent />
      <LegalSequence />
      <AITermsCTA />
    </main>
  );
}