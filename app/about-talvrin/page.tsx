import Container from "@/components/ui/Container";
import Hero from "@/components/about-talvrin/Hero";
import StickySubnav from "@/components/about-talvrin/StickySubnav";
import WhyTalvrin from "@/components/about-talvrin/WhyTalvrin";
import TheProblem from "@/components/about-talvrin/TheProblem";
import WhatWeAreBuilding from "@/components/about-talvrin/WhatWeAreBuilding";
import ForPeople from "@/components/about-talvrin/ForPeople";
import WhoWeServe from "@/components/about-talvrin/WhoWeServe";
import HowItWorks from "@/components/about-talvrin/HowItWorks";
import Mission from "@/components/about-talvrin/Mission";
import Principles from "@/components/about-talvrin/Principles";
import Trust from "@/components/about-talvrin/Trust";
import Boundaries from "@/components/about-talvrin/Boundaries";
import WhyNow from "@/components/about-talvrin/WhyNow";
import CorporateHome from "@/components/about-talvrin/CorporateHome";
import FAQ from "@/components/about-talvrin/FAQ";
import CTA from "@/components/about-talvrin/CTA";

export const metadata = {
  title: "About Talvrin | The Evidence Layer for Global Public Markets",
  description: "Talvrin is building a source-linked research and monitoring platform.",
};

export default function AboutTalvrinPage() {
  return (
    <div className="flex min-h-screen flex-col pt-16 md:pt-0">
      <Hero />
      <StickySubnav />
      <WhyTalvrin />
      <TheProblem />
      <WhatWeAreBuilding />
      <ForPeople />
      <WhoWeServe />
      <HowItWorks />
      <Mission />
      <Principles />
      <Trust />
      <Boundaries />
      <WhyNow />
      <CorporateHome />
      <FAQ />
      <CTA />
    </div>
  );
}
