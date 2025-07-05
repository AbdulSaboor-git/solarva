import React from "react";
import Section2_SpinningLogo from "./section2_spinning_logo";
import { RiCheckFill } from "react-icons/ri";
import Button1 from "@/components/button1";

export default function Section2() {
  let employees = 20;
  let satisfaction = 100;
  let installations = "6k";
  return (
    <div className="flex flex-col w-full gap-24 items-center justify-center">
      <div className="grid grid-cols-3 w-full border border-gray-500/40">
        {/*  */}
        <div className="relative p-16 px-10 border-r border-gray-500/40 flex flex-row items-center justify-center gap-8">
          <div className="flex flex-col text-blue-950 items-center justify-center gap-2">
            <div className="text-5xl font-bold">{employees}+</div>
            <div className="font-semibold text-center">Employees</div>
          </div>
          <div className="text-gray-500 tracking-wide">
            We have {employees}+ amazing expert solar expert for repair &
            installation
          </div>
          <div className="absolute -right-1.5 -bottom-1.5 w-2.5 aspect-square bg-green-600 animate-[spin_4s_linear_infinite]" />
        </div>
        {/*  */}
        <div className="relative p-16 px-10 border-r border-gray-500/40 flex flex-row items-center justify-center gap-8">
          <div
            className="flex flex-col min-w-fit
           text-blue-950 items-center justify-center gap-2"
          >
            <div className="text-5xl font-bold">{satisfaction}%</div>
            <div className="font-semibold text-center">Client Satisfaction</div>
          </div>
          <div className="text-gray-500 tracking-wide">
            We achieved {satisfaction}% of our client satisfaction through our
            work
          </div>
          <div className="absolute -right-1.5 -bottom-1.5 w-2.5 aspect-square bg-green-600 animate-[spin_4s_linear_infinite]" />
        </div>
        {/*  */}
        <div className="p-16 px-10 flex flex-row items-center justify-center gap-8">
          <div className="flex flex-col text-blue-950 items-center justify-center gap-2">
            <div className="text-5xl font-bold">{installations}+</div>
            <div className="font-semibold  text-center">installations</div>
          </div>
          <div className="text-gray-500 tracking-wide">
            We have 20 years of experience in installing panels for our clients.
          </div>
        </div>
      </div>
      <div className="w-full p-5 grid grid-cols-[1.1fr_1fr]">
        <div className="relative bg-[url('/img2.png')] bg-cover aspect-square">
          <div className="absolute w-full h-full top-0 left-0 bg-white/40" />
          <img
            src="img3.webp"
            alt="img3"
            className="absolute left-0 bottom-0 z-10 w-[320px] aspect-auto"
          />
          <img
            src="img4.webp"
            alt="img3"
            className="absolute right-5 top-0 w-[280px] aspect-auto z-10"
          />
          <img
            src="img5.webp"
            alt="img3"
            className="absolute right-5 -bottom-10 w-[270px] z-10"
          />
          <div className="w-full h-full z-20 bg-transparent top-0 left-0 flex items-center justify-center">
            <Section2_SpinningLogo />
          </div>
        </div>
        <div className="flex w-fit flex-col gap-7  items-start justify-center p-6 pl-20">
          <div className="bg-green-600 font-semibold tracking-wider text-gray-100 px-3 py-1 rounded-[5px] text-xs">
            ABOUT COMPANY
          </div>
          <div className="text-5xl font-semibold">
            Solarva believes in sustainable energy practices
          </div>
          <div className="text-gray-500">
            We’re finding ways to bring energy to more people in more ways every
            day, so that all of us can be part of the changing energy system.
            Because Powering Progress means providing more & cleaner energy
            across the country.
          </div>
          <div className="flex flex-col w-full gap-4 items-start mb-6">
            <div className="font-bold text-lg">
              Solarva Solar Energy specialty:
            </div>
            <div className="grid grid-cols-2 gap-4 w-full tracking-wide">
              <div className="flex flex-row items-center gap-2">
                <div className="bg-green-600 rounded-full p-0.5 w-fit text-gray-100">
                  <RiCheckFill className="" />
                </div>
                Lower Energy Costs
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="bg-green-600 rounded-full p-0.5 w-fit text-gray-100">
                  <RiCheckFill className="" />
                </div>
                Increase Home Value
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="bg-green-600 rounded-full p-0.5 w-fit text-gray-100">
                  <RiCheckFill className="" />
                </div>
                Environmentally Friendly
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="bg-green-600 rounded-full p-0.5 w-fit text-gray-100">
                  <RiCheckFill className="" />
                </div>
                Energy Independence
              </div>
            </div>
          </div>
          <Button1 text={"Contact Solarva"} bg="#1d293d" textColor="#f3f4f6" />
        </div>
      </div>
    </div>
  );
}
