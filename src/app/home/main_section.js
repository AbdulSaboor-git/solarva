"use client";
import React, { useEffect, useRef, useState } from "react";
import Button1 from "@/components/button1";
import { useRouter } from "next/navigation";

export default function MainSection() {
  const employees = 20;
  const satisfaction = 100;
  const installations = 6000;
  const router = useRouter();

  const [offsetY, setOffsetY] = useState(0);
  const [employeesCounter, setEmployeesCounter] = useState(0);
  const [satisfactionCounter, setSatisfactionCounter] = useState(0);
  const [installationsCounter, setInstallationsCounter] = useState(0);
  const hasAnimated = useRef(false); // prevents re-animating

  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const limitedOffset = Math.min(scrollY, 630);
      setOffsetY(limitedOffset / 7);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const animateValue = (start, end, setter, duration = 1000) => {
      const range = end - start;
      const stepTime = 20;
      let current = start;
      const step = range / (duration / stepTime);

      const interval = setInterval(() => {
        current += step;
        if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
          current = end;
          clearInterval(interval);
        }
        setter(Math.round(current));
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          animateValue(0, employees, setEmployeesCounter);
          animateValue(0, satisfaction, setSatisfactionCounter);
          animateValue(0, installations, setInstallationsCounter);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  function clickDiscover() {
    router.push(`/home#services`);
  }

  return (
    <div className="flex flex-col w-full z-40" id="home">
      {/* <Header className={"block md:hidden z-50"} /> */}
      <div className="relative bg-[url('/bg.png')] bg-cover bg-right md:bg-center h-[88vh] md:h-[42lh] overflow-hidden p-5">
        <div className="absolute z-0 top-0 left-0 w-full h-full overflow-hidden">
          <div className="w-full z-20 h-full bg-radial-top-right absolute top-0 left-0 to-[var(--dark-3)] via-[var(--dark-3-80)] bg-[length:100%_200%] bg-[position:right_center] from-transparent"></div>
        </div>
        <div className="z-10 absolute left-0 text-white w-full h-full">
          <div className="flex flex-col gap-5 items-start justify-center w-full h-full">
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
                <div className="text-5xl md:text-7xl font-extrabold tracking-tight">
                  Expert{" "}
                  <span className="text-[var(--primary-color)]"> Solar</span>{" "}
                  service since 1998
                </div>
                <div className="text-[var(--text-3)] text-xl md:text-[22px] md:font-medium">
                  We believe in sustainable energy practices that can help
                  topnotch solar panel installation services.
                </div>
              </div>
              <Button1
                text={"Discover Solarva"}
                bg="#f3f4f6"
                hoverTextColor="#f3f4f6"
                onClick={clickDiscover}
              />
            </div>
          </div>
        </div>
        <img
          src="img1.png"
          alt="img1"
          className="absolute hidden md:block right-0 bottom-0 md:h-[500px] lg:h-[600px] transition-transform ease-linear duration-[1s]"
          style={{
            transform: `translateY(${offsetY}px)`,
          }}
        />
      </div>
      <div
        ref={statsRef}
        className="grid grid-cols-1 text-[var(--dark-blue-1)] md:grid-cols-3 w-full text-center md:text-left md:border-b md:border-r md:border-l md:border-gray-500/40"
      >
        {/*  */}
        <div className="relative px-10 md:px-6 lg:px-10 py-14 lg:py-16  border-b md:border-r md:border-b-0 border-gray-500/40 flex flex-col  md:flex-row items-center justify-center gap-4 lg:gap-8">
          <div className="flex flex-col  items-center justify-center gap-1 md:gap-2">
            <div className="text-5xl md:text-3xl lg:text-5xl font-bold">
              {employeesCounter}+
            </div>
            <div className="font-semibold text-center">Employees</div>
          </div>
          <div className=" tracking-wide text-[var(--text-1)]">
            We have {employees}+ amazing expert solar expert for repair &
            installation
          </div>
          <div className="absolute hidden md:block -right-1.5 -bottom-1.5 w-2.5 aspect-square bg-[var(--primary-color)] animate-[spin_4s_linear_infinite]" />
        </div>
        {/*  */}
        <div className="relative px-10 md:px-6 lg:px-10 py-14 lg:py-16  border-b md:border-r md:border-b-0 border-gray-500/40 flex flex-col  md:flex-row items-center justify-center gap-4 lg:gap-8">
          <div className="flex flex-col min-w-fit items-center justify-center gap-1 md:gap-2">
            <div className="text-5xl md:text-3xl lg:text-5xl font-bold">
              {satisfactionCounter}%
            </div>
            <div className="font-semibold text-center">Client Satisfaction</div>
          </div>
          <div className="text-[var(--text-1)] tracking-wide">
            We achieved {satisfaction}% of our client satisfaction through our
            work
          </div>
          <div className="absolute hidden md:block -right-1.5 -bottom-1.5 w-2.5 aspect-square bg-[var(--primary-color)] animate-[spin_4s_linear_infinite]" />
        </div>
        {/*  */}
        <div className="relative px-10 md:px-6 lg:px-10 py-14 lg:py-16  border-b md:border-r md:border-b-0 border-gray-500/40 flex flex-col  md:flex-row items-center justify-center gap-4 lg:gap-8">
          <div className="flex flex-col  items-center justify-center gap-1 md:gap-2">
            <div className="text-5xl md:text-3xl lg:text-5xl font-bold">
              {installationsCounter >= 1000
                ? `${(installationsCounter / 1000).toFixed(1)}k+`
                : `${installationsCounter}+`}
            </div>
            <div className="font-semibold  text-center">Installations</div>
          </div>
          <div className="text-[var(--text-1)] tracking-wide">
            We have 20 years of experience in installing panels for our clients.
          </div>
        </div>
      </div>
    </div>
  );
}
