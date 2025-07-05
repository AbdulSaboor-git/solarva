"use client";
import Header from "@/components/header";
import React, { useEffect, useState } from "react";
import Section1_Top from "./section1_top";
import Button1 from "@/components/button1";

export default function Section1() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const limitedOffset = Math.min(scrollY, 90);
      setOffsetY(limitedOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-[url('/bg.png')] bg-cover bg-center h-[42lh] overflow-hidden p-5">
      <div className="bg-slate-900 absolute top-0 left-0 h-full w-64"></div>
      <div className="absolute h-full w-full top-0 left-0 pl-64">
        <div
          className="h-full bg-gradient-to-r 
        from-slate-900 via-slate-900/70 to-transparent"
        ></div>
      </div>
      <div className="z-10 absolute left-0 px-5 text-gray-100 w-full h-full">
        <div className="flex flex-col gap-5 items-start justify-center w-full h-full">
          <Section1_Top />
          <Header />
          <div className="w-full h-full max-w-lg flex flex-col gap-7 items-start justify-center">
            <div className="flex flex-row items-center justify-start text-green-600 ">
              <div className="h-[1px] w-10 bg-green-600" />
              <div className="w-2.5 animate-[spin_4s_linear_infinite] aspect-square bg-green-600" />
              <p className="pl-2.5 tracking-wider font-[600] text-sm">
                SOLARVA SOLAR ENERGY SERVICES INC
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-6 mb-7">
              <div className="text-7xl font-extrabold tracking-tight">
                Expert <span className="text-green-600"> Solar</span> service
                since 1998
              </div>
              <div className="text-gray-400 text-[22px] font-medium">
                We believe in sustainable energy practices that can help
                topnotch solar panel installation services.
              </div>
            </div>
            <Button1 text={"Discover Solarva"} bg="#f3f4f6" />
          </div>
        </div>
      </div>
      <img
        src="img1.png"
        alt="img1"
        className="absolute z-10 right-0 bottom-0 h-150 transition-transform duration-[3s]"
        style={{
          transform: `translateY(${offsetY}px)`,
        }}
      />
    </div>
  );
}
