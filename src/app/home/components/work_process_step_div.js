import React from "react";

export default function StepsDiv({ classname, step }) {
  return (
    <div
      className={`${classname} flex flex-col items-start sm:p-6 sm:px-10 gap-2 h-full`}
    >
      <div className="w-full pb-14 ">
        <div className="relative w-fit place-self-center ">
          <img
            src={step?.img}
            alt={step?.title}
            className="aspect-square content-center max-w-[220px] rounded-2xl"
          />
          <div
            className="absolute flex items-center justify-center w-14 aspect-square 
            text-white -bottom-6 -left-6 bg-green-600 rounded-full font-semibold text-2xl"
          >
            {step?.id}
          </div>
          <div className="absolute text-green-100 -bottom-24 -right-10 rounded-full font-semibold text-[140px]">
            {step?.id}
          </div>
        </div>
      </div>
      <h1 className="text-2xl text-blue-950/90 font-semibold pb-1 sm:pb-3">
        Step {step?.id}: {step?.title}
      </h1>
      <p className="text-lg tracking-wide text-gray-500 text-start">
        {step?.desc}
      </p>
    </div>
  );
}
