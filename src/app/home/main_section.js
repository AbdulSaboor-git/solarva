"use client";
import Header from "@/components/header";
import React, { useEffect, useState } from "react";
import Section1_Top from "./components/main_section_top";
import Button1 from "@/components/button1";

export default function MainSection({ id }) {
  const [offsetY, setOffsetY] = useState(0);
  let employees = 20;
  let satisfaction = 100;
  let installations = "6k";

  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 30);
    };
    const handleScroll2 = () => {
      const scrollY = window.scrollY;
      const limitedOffset = Math.min(scrollY, 90);
      setOffsetY(limitedOffset);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col w-full z-40" id="home">
      <Header className={"block sm:hidden z-50"} />
      <div className="relative bg-[url('/bg.png')] bg-cover bg-right sm:bg-center h-[88vh] sm:h-[42lh] overflow-hidden p-5">
        <div className="bg-[var(--dark-3)] absolute top-0 left-0 h-full w-64 hidden sm:block"></div>
        <div className="absolute h-full w-full top-0 left-0 pl-0 sm:pl-64 ">
          <div
            className="h-full bg-gradient-to-r 
        from-[var(--dark-3)] via-[var(--dark-3)]/70 to-[var(--dark-3)]/20 "
          ></div>
        </div>
        <div className="absolute h-full w-full top-0 left-0 pl-0 sm:pl-64 ">
          <div
            className="h-full bg-gradient-to-b sm:hidden 
        from-[var(--dark-3)]/80 via-[var(--dark-3)]/50 to-transparent "
          ></div>
        </div>
        <div className="z-10 absolute left-0 text-white w-full h-full">
          <div className="flex flex-col gap-5 items-start justify-center w-full h-full">
            <div className="w-full px-5">
              <Section1_Top className={"hidden sm:flex"} />
            </div>
            <div
              className={`z-50 w-full px-5 transition-all duration-300 ${
                showHeader
                  ? "fixed translate-y-3 top-2 "
                  : "block translate-y-0 transition-none"
              } `}
            >
              <Header
                className={`hidden sm:grid sm:mx-0 sm:w-full ${
                  showHeader && "mx-5"
                }`}
              />
            </div>
            <div
              className={`
                  ${showHeader ? "sm:p-[44px]" : "hidden"}`}
            ></div>
            <div className="w-full px-5 h-full max-w-[550px] flex flex-col gap-7 items-start justify-center">
              <div className="flex flex-row items-center justify-start gap-2.5 text-[var(--primary-color)] ">
                <div className="flex items-center">
                  <div className="h-[1px] w-10 bg-[var(--primary-color)]" />
                  <div className="w-2.5 animate-[spin_4s_linear_infinite] aspect-square bg-[var(--primary-color)]" />
                </div>
                <p className="tracking-wider font-[600] text-sm">
                  SOLARVA SOLAR ENERGY SERVICES INC
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-6 mb-7">
                <div className="text-5xl sm:text-7xl font-extrabold tracking-tight">
                  Expert{" "}
                  <span className="text-[var(--primary-color)]"> Solar</span>{" "}
                  service since 1998
                </div>
                <div className="text-[var(--text-3)] text-xl sm:text-[22px] sm:font-medium">
                  We believe in sustainable energy practices that can help
                  topnotch solar panel installation services.
                </div>
              </div>
              <Button1
                text={"Discover Solarva"}
                bg="#f3f4f6"
                hoverTextColor="#f3f4f6"
              />
            </div>
          </div>
        </div>
        <img
          src="img1.png"
          alt="img1"
          className="absolute hidden sm:block right-0 bottom-0 h-[600px] transition-transform ease-in-out duration-[2s]"
          style={{
            transform: `translateY(${offsetY}px)`,
          }}
        />
      </div>
      <div className="grid grid-cols-1 text-[var(--dark-blue-1)] sm:grid-cols-3 w-full text-center sm:text-left sm:border-b sm:border-r sm:border-l sm:border-gray-500/40">
        {/*  */}
        <div className="relative px-10 py-14 sm:py-16  border-b sm:border-r sm:border-b-0 border-gray-500/40 flex flex-col  sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex flex-col  items-center justify-center gap-1 sm:gap-2">
            <div className="text-5xl font-bold">{employees}+</div>
            <div className="font-semibold text-center">Employees</div>
          </div>
          <div className=" tracking-wide text-[var(--text-1)]">
            We have {employees}+ amazing expert solar expert for repair &
            installation
          </div>
          <div className="absolute hidden sm:block -right-1.5 -bottom-1.5 w-2.5 aspect-square bg-[var(--primary-color)] animate-[spin_4s_linear_infinite]" />
        </div>
        {/*  */}
        <div className="relative px-10 py-14 sm:py-16 border-b sm:border-b-0 sm:border-r border-gray-500/40 flex flex-col  sm:flex-row  items-center justify-center gap-4 sm:gap-8">
          <div
            className="flex flex-col min-w-fit
           items-center justify-center gap-1 sm:gap-2"
          >
            <div className="text-5xl font-bold">{satisfaction}%</div>
            <div className="font-semibold text-center">Client Satisfaction</div>
          </div>
          <div className="text-[var(--text-1)] tracking-wide">
            We achieved {satisfaction}% of our client satisfaction through our
            work
          </div>
          <div className="absolute hidden sm:block -right-1.5 -bottom-1.5 w-2.5 aspect-square bg-[var(--primary-color)] animate-[spin_4s_linear_infinite]" />
        </div>
        {/*  */}
        <div className="px-10 py-14 sm:py-16 flex flex-col border-b border-gray-500/40 sm:border-none sm:flex-row  items-center justify-center gap-4 sm:gap-8">
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <div className="text-5xl font-bold">{installations}+</div>
            <div className="font-semibold  text-center">installations</div>
          </div>
          <div className="text-[var(--text-1)] tracking-wide">
            We have 20 years of experience in installing panels for our clients.
          </div>
        </div>
      </div>
    </div>
  );
}
