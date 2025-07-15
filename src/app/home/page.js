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
import { FaArrowUp } from "react-icons/fa";
import ScrollToTop from "./components/scroll_to_top";

export default function HomePage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll3 = () => {
      const scrollY = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollY / pageHeight) * 100;

      setScrollPercent(percent);
      setShowScrollToTop(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll3);
    handleScroll3(); // trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll3);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="relative container w-full 
    flex flex-col items-center justify-start 
    gap-24 sm:gap-20"
    >
      <ScrollToTop
        showScrollToTop={showScrollToTop}
        onClick={scrollToTop}
        scrollPercent={scrollPercent}
      />

      <MainSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <div className="w-full">
        <SkillsSection />
        <CaseStudiesSection />
        <TeamSection />
      </div>
      <WorkProcessSection />
      <div className="w-full">
        <BlogSection />
        <Footer />
      </div>
    </div>
  );
}
