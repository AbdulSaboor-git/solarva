import React from "react";
import StepsDiv from "./components/work_process_step_div";

export default function WorkProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Solar Designing",
      desc: "We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system.",
      img: "img4.webp",
    },
    {
      id: 2,
      title: "Solar Installation",
      desc: "We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system.",
      img: "img5.webp",
    },
    {
      id: 3,
      title: "Household Use",
      desc: "We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system.",
      img: "img6.webp",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-0 w-full sm:pt-12 p-6">
      <div className="sm:col-span-2 flex flex-col gap-5 sm:gap-7 items-start justify-center text-[var(--dark-blue-2)] max-w-2xl">
        <div className="bg-[var(--primary-color)] font-semibold tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
          OUR WORK PROCESS
        </div>
        <div className="text-4xl sm:text-5xl font-semibold">
          We always follow the best solar <br /> ways
        </div>
        <div className="text-[var(--text-1)]">
          We’re finding ways to bring energy to more people in more ways every
          day, so that all of us can be part of the changing energy system.
          Because Powering Progress means providing more & cleaner energy across
          the country.
        </div>
      </div>
      <StepsDiv
        step={steps[2]}
        classname={"hidden sm:block row-span-2 pt-16"}
      />
      <StepsDiv step={steps[0]} classname={"sm:pt-20"} />
      <StepsDiv step={steps[1]} classname={""} />
      <StepsDiv step={steps[2]} classname={"block sm:hidden"} />
    </div>
  );
}
