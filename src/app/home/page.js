import React from "react";
import Section1 from "./components/section1";
import Section2 from "./components/section2";

export default function HomePage() {
  return (
    <div className="container flex flex-col items-center justify-start gap-28">
      <Section1 />
      <Section2 />
    </div>
  );
}
