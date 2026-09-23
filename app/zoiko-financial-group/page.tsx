import Hero from "@/components/zoiko-financial-group/Hero";
import CorporateRelationship from "@/components/zoiko-financial-group/CorporateRelationship";
import Talvrin from "@/components/zoiko-financial-group/Talvrin";
import EvidenceAndTrust from "@/components/zoiko-financial-group/EvidenceAndTrust";
import GlobalArchitecture from "@/components/zoiko-financial-group/GlobalArchitecture";
import CorporateInformation from "@/components/zoiko-financial-group/CorporateInformation";
import FAQ from "@/components/zoiko-financial-group/FAQ";
import CTA from "@/components/zoiko-financial-group/CTA";

export default function ZoikoFinancialGroupPage() {
  return (
    <div className="w-full min-h-[900px] bg-violet-50 inline-flex flex-col justify-start items-start mx-auto relative overflow-hidden">
      <div className="self-stretch h-[5341px] flex flex-col justify-start items-start">
        <Hero />
        <CorporateRelationship />
        <Talvrin />
        <EvidenceAndTrust />
        <GlobalArchitecture />
        <CorporateInformation />
        <FAQ />
        <CTA />
      </div>
    </div>
  );
}
