import React from "react";
import Section2_SpinningLogo from "./components/about_section_spinning_logo";
import { RiCheckFill } from "react-icons/ri";
import Button1 from "@/components/button1";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="w-full p-5 grid grid-cols-1 gap-20 sm:gap-0 sm:grid-cols-[1.08fr_1fr] "
    >
      <div className="relative   bg-[url('/img2.png')] bg-cover aspect-square sm:aspect-auto">
        <div className="absolute w-full h-full top-0 left-0 bg-white/50" />
        <div className="absolute h-[280px] sm:h-auto max-w-[165px] sm:max-w-[310px] left-0 bottom-0 z-10 overflow-hidden">
          <img
            src="img3.webp"
            alt="img3"
            className="scale-[1.30] sm:scale-100"
          />
        </div>
        <div className="absolute h-[190px] place-content-start sm:h-auto right-0 sm:right-5 top-0 max-w-[145px] sm:max-w-[280px] aspect-auto z-10 overflow-hidden">
          <img
            src="img4.webp"
            alt="img3"
            className="scale-[1.30] sm:scale-100"
          />
        </div>
        <div className="absolute h-[160px] place-content-end sm:h-auto right-0 sm:right-5 -bottom-10 max-w-[130px] sm:max-w-[270px] z-10 overflow-hidden">
          <img
            src="img5.webp"
            alt="img3"
            className="scale-[1.35] sm:scale-100"
          />
        </div>
        <div className="w-full h-full z-20 bg-transparent top-0 left-0 flex items-center justify-center">
          <Section2_SpinningLogo
            className={"hidden sm:flex mt-32 ml-16"}
            diameter={"240"}
            padding={8}
            logoSize={130}
          />
          <Section2_SpinningLogo
            className={"flex sm:hidden mt-20 ml-4"}
            diameter={"160"}
            padding={4}
            logoSize={100}
          />
        </div>
      </div>
      <div className="flex flex-col gap-7 items-start justify-center text-[var(--dark-2)] sm:p-6 sm:pl-20">
        <div className="bg-[var(--primary-color)] font-semibold tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
          ABOUT COMPANY
        </div>
        <div className="text-4xl  sm:text-5xl font-semibold">
          Solarva believes in sustainable energy practices
        </div>
        <div className="text-[var(--text-1)]">
          We’re finding ways to bring energy to more people in more ways every
          day, so that all of us can be part of the changing energy system.
          Because Powering Progress means providing more & cleaner energy across
          the country.
        </div>
        <div className="flex flex-col w-full gap-4 items-start mb-6">
          <div className="font-bold text-lg">
            Solarva Solar Energy specialty:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full tracking-wide">
            <div className="flex flex-row items-center gap-2">
              <div className="bg-[var(--primary-color)] rounded-full p-0.5 w-fit text-white">
                <RiCheckFill className="" />
              </div>
              Lower Energy Costs
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="bg-[var(--primary-color)] rounded-full p-0.5 w-fit text-white">
                <RiCheckFill className="" />
              </div>
              Increase Home Value
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="bg-[var(--primary-color)] rounded-full p-0.5 w-fit text-white">
                <RiCheckFill className="" />
              </div>
              Environmentally Friendly
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="bg-[var(--primary-color)] rounded-full p-0.5 w-fit text-white">
                <RiCheckFill className="" />
              </div>
              Energy Independence
            </div>
          </div>
        </div>
        <Button1
          text={"Contact Solarva"}
          bg="var(--dark-2)"
          textColor="#ffffff"
        />
      </div>
    </div>
  );
}
