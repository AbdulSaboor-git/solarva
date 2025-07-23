"use client";
import React, { useEffect, useState } from "react";
import MainSection from "./main_section";
import AboutSection from "./about_section";
import ServicesSection from "./services_section";
import WhyUsSection from "./why_us_section";
import SkillsSection from "./skills_section";
import CaseStudiesSection from "./case_studies";
import TeamSection from "./team_section";
import WorkProcessSection from "./work_process_section";
import BlogSection from "./blogs_section";
import Footer from "@/components/footer";
import ScrollToTop from "./components/scroll_to_top";
import Header from "@/components/header";

export default function HomePage() {
  return (
    <div
      className="relative w-full
    flex flex-col items-center"
    >
      <ScrollToTop />
      <Header theme={"dark"} homePage={true} />
      <div className="w-full flex flex-col items-center gap-24 md:gap-20 justify-start">
        <MainSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <div className="w-full flex flex-col items-center justify-center">
          <SkillsSection />
          <CaseStudiesSection />
          <TeamSection />
        </div>
        <WorkProcessSection />
        <div className="w-full flex flex-col items-center justify-center">
          <BlogSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
