import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

export default function PlanSlide({ plan, onClick }) {
  return (
    <div
      className="bg-white object-center border border-gray-500/40 cursor-pointer tracking-wide group rounded-3xl flex flex-col overflow-hidden"
      onClick={onClick}
    >
      <div className="p-6 pt-10 md:pt-12 md:p-12 flex flex-col items-start gap-5">
        <div className="flex flex-col gap-1">
          <div className="text-2xl md:text-4xl text-[var(--dark-2)] font-semibold line-clamp-1">
            {plan.kw}KW
          </div>
          <div className="text-[var(--text-1)]">
            Electricity units {plan.units}
          </div>
        </div>
        <hr className="bg-gray-400/40 border-none w-full h-[0.5px]" />
        {plan.savings && plan.payback_period ? (
          <div className="flex flex-col gap-1 text-[var(--text-1)] ">
            <div>Savings: {plan?.savings} PKR</div>
            <div>Payback Period: {plan?.payback_period} years</div>
          </div>
        ) : (
          <div className="text-[var(--dark-blue-1)] text-sm pt-4 w-full text-center">
            For more details, please contact us.
          </div>
        )}
        <div className="flex w-full flex-col gap-0 text-[var(--text-1)] text-sm">
          {plan?.items?.map((item, index) => (
            <div
              key={index}
              className={`w-full flex items-center gap-2 rounded-md p-2 px-4 ${
                index % 2 === 0 ? "bg-[var(--light-green-3)]" : "bg-white"
              } `}
            >
              {item.value == 0 ? (
                <RiCloseFill className="text-red-400 text-lg font-bold" />
              ) : (
                <TiTick className="text-[var(--primary-color)]" />
              )}
              {item.key}: {item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
