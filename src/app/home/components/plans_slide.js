import Button1 from "@/components/button1";
import React from "react";

export default function PlanSlide({ plan, onClick }) {
  return (
    <div className="bg-white object-center shadow-inner shadow-[var(--primary-color)] border border-[var(--primary-color)] cursor-pointer tracking-wide rounded-3xl flex flex-col overflow-hidden">
      <div className="p-6 pt-10 md:pt-12 md:p-12 flex flex-col items-start gap-5">
        <div className="flex flex-col gap-1">
          <div className="text-3xl md:text-4xl text-[var(--dark-2)] font-semibold line-clamp-1">
            {plan.kw}KW
          </div>
          <div className="text-[var(--text-1)]">
            Electricity units {plan.units}
          </div>
        </div>
        {plan.savings && plan.payback_period && (
          <hr className="bg-gray-400/40 border-none w-full h-[0.5px]" />
        )}
        {plan.savings && plan.payback_period && (
          <div className="flex flex-col gap-1 text-[var(--text-1)] ">
            <div>Savings: {plan?.savings} PKR</div>
            <div>Payback Period: {plan?.payback_period} years</div>
          </div>
        )}
        <Button1
          onClick={onClick}
          text={"Details"}
          className="py-3 border border-[var(--primary-color)] "
          bg="#ffffff"
          textColor="var(--primary-color)"
          hoverBg="var(--primary-color)"
          hoverTextColor="#ffffff"
        />
      </div>
    </div>
  );
}
