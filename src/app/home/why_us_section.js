import React from "react";
import { FaSolarPanel } from "react-icons/fa";
import { FcElectricity } from "react-icons/fc";
import { SiGreenhouse, SiSunrise } from "react-icons/si";
import AppointmentForm from "./components/appointment_form";
import { GiElectric } from "react-icons/gi";
let services = [
  {
    id: 1,
    title: "Solar Power System",
    description:
      "By generatiing your own solar energy, you can reduce your electricity bills to a great  extent",
    logo: GiElectric,
    img: "service1.webp",
    link: "solar-power-system",
  },
  {
    id: 2,
    title: "Solar Panel Installation",
    description:
      "By generatiing your own solar energy, you can reduce your electricity bills",
    logo: SiSunrise,
    img: "service2.webp",
    link: "solar-panel-installation",
  },
  {
    id: 3,
    title: "Household Solar Panel",
    description:
      "By generatiing your own solar energy, you can reduce your electricity bills",
    logo: SiGreenhouse,
    img: "service3.webp",
    link: "household-solar-panel",
  },
  {
    id: 4,
    title: "Solar Panel Cleaning",
    description:
      "By generatiing your own solar energy, you can reduce your electricity bills",
    logo: FaSolarPanel,
    img: "service4.webp",
    link: "solar-panel-cleaning",
  },
];
export default function WhyUsSection() {
  return (
    <div className="flex w-full flex-col items-center p-5 sm:p-6 gap-6">
      <div className="flex flex-col gap-3 sm:gap-5 items-center justify-center tracking-wide p-0 sm:p-6 max-w-3xl">
        <div className="bg-green-600 font-semibold sm:tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
          WHY CHOOSE US
        </div>
        <div className="text-4xl w-full sm:text-5xl font-semibold text-center">
          Reasons that make us best solar professionals
        </div>
        <div className="text-gray-500 text-center text-lg mt-1 sm:mt-2">
          We’re finding ways to bring energy to more people in more ways every
          day, so that all of us can be part of the changing energy system.
          Because Powering Progress.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-8 justify-end w-full">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8 h-fit ">
          {services?.map((service) => (
            <div
              key={service.id}
              className="flex flex-col gap-3 sm:gap-5 justify-start pt-12 group"
            >
              <div className="w-fit">
                <div className="rounded-full relative z-10 w-fit text-gray-100 bg-green-600 p-3 group-hover:-translate-y-4 transition-all duration-500 shadow-md shadow-gray-100/20">
                  <service.logo size={30} />
                </div>
                <div className="bg-gray-500 aspect-square rounded-full scale-85 scale-y-[40%] -mt-9 opacity-0 group-hover:opacity-50 blur-md  transition-all duration-500" />
              </div>
              <h1
                // onClick={}
                className="text-blue-950 cursor-pointer group-hover:text-green-600 transition-all duration-500 font-bold text-2xl tracking-normal line-clamp-1"
              >
                {service.title}
              </h1>
              <p className="text-gray-500 tracking-wide text-lg min-h-[81px] line-clamp-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <AppointmentForm services={services} />
      </div>
    </div>
  );
}
