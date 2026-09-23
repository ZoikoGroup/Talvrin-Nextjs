import Hero from "@/components/careers/Hero";
import Navigation from "@/components/careers/Navigation";
import Building from "@/components/careers/Building";
import Principles from "@/components/careers/Principles";
import OpenRoles from "@/components/careers/OpenRoles";
import CandidateInfo from "@/components/careers/CandidateInfo";
import CompanyContext from "@/components/careers/CompanyContext";
import FAQ from "@/components/careers/FAQ";
import CTA from "@/components/careers/CTA";

export default function CareersPage() {
  return (
    <div className="w-full min-h-[900px] bg-violet-50 inline-flex flex-col justify-start items-start mx-auto relative overflow-hidden">
        
        <Hero />
        <Navigation />
        <Building />
        <Principles />
        <OpenRoles />
        <CandidateInfo />
        <CompanyContext />
        <FAQ />
        <CTA />
    </div>
  );
}
