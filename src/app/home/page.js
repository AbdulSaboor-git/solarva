import React from "react";
import MainSection from "./main_section";
import AboutSection from "./about_section";
import ServicesSection from "./services_section";
import WhyUsSection from "./why_us_section";
import SkillsSection from "./skills_section";

export default function HomePage() {
  return (
    <div className="container w-full flex flex-col items-center justify-start gap-28">
      <MainSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <SkillsSection />
    </div>
  );
}
