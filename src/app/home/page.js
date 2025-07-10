import React from "react";
import MainSection from "./main_section";
import AboutSection from "./about_section";
import ServicesSection from "./services_section";
import WhyUsSection from "./why_us_section";
import SkillsSection from "./skills_section";
import CaseStudiesSection from "./case_studies";
import TeamSection from "./team_section";

export default function HomePage() {
  return (
    <div
      className="container w-full 
    flex flex-col items-center justify-start 
    gap-24 sm:gap-20 bg-white text-gray-800"
    >
      <MainSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <div className="w-full">
        <SkillsSection />
        <CaseStudiesSection />
        <TeamSection />
      </div>
    </div>
  );
}
