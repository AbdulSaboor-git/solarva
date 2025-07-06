import React from "react";
import MainSection from "./components/main_section";
import AboutSection from "./components/about_section";

export default function HomePage() {
  return (
    <div className="container w-full flex flex-col items-center justify-start gap-28">
      <MainSection />
      <AboutSection />
    </div>
  );
}
