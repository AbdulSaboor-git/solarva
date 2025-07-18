import Header from "@/components/header";
import React from "react";

export default function Temp() {
  return (
    <div className="w-full ">
      <Header theme={"light"} />
      <div className="bg-blue-300 h-screen w-full "></div>
      <div className="bg-blue-500 h-screen w-full "></div>
    </div>
  );
}
