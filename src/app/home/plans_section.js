"use client";
import React, { useRef, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import PlanSlide from "./components/plans_slide";
import { useRouter } from "next/navigation";

export default function PlansSection() {
  const router = useRouter();
  const swiperRef = useRef(null);
  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();
  const [selectedPlanType, setSelectedPlanType] = useState("domestic");

  function handlePlanClick(id) {
    router.push(`/plans`);
  }

  const domesticPlans = [
    {
      id: 1,
      kw: "3",
      units: "300-350",
      savings: "876000",
      payback_period: "4",
      items: [
        { key: "Fans", value: 3 },
        { key: "Lights", value: 6 },
        { key: "AC or Iron (one at a time)", value: 1 },
        { key: "Refrigerator", value: 1 },
        { key: "Water Pump", value: 0 },
        { key: "LED TV", value: 1 },
        { key: "Washing Machine", value: 1 },
      ],
      onClick: () => console.log("Plan 1 clicked"),
    },
    {
      id: 2,
      kw: "5",
      units: "450-500",
      savings: "1020000",
      payback_period: "3.5",
      items: [
        { key: "Fans", value: 5 },
        { key: "Lights", value: 10 },
        { key: "AC or Iron (one at a time)", value: 1 },
        { key: "Refrigerator", value: 1 },
        { key: "Water Pump", value: 1 },
        { key: "LED TV", value: 2 },
        { key: "Washing Machine", value: 1 },
      ],
      onClick: () => console.log("Plan 2 clicked"),
    },
    {
      id: 4,
      kw: "2",
      units: "250-300",
      savings: "760000",
      payback_period: "4.2",
      items: [
        { key: "Fans", value: 2 },
        { key: "Lights", value: 5 },
        { key: "AC or Iron (one at a time)", value: 0 },
        { key: "Refrigerator", value: 1 },
        { key: "Water Pump", value: 0 },
        { key: "LED TV", value: 1 },
        { key: "Washing Machine", value: 1 },
      ],
      onClick: () => console.log("Plan 4 clicked"),
    },
    {
      id: 6,
      kw: "4",
      units: "380-420",
      savings: "930000",
      payback_period: "3.8",
      items: [
        { key: "Fans", value: 4 },
        { key: "Lights", value: 9 },
        { key: "AC or Iron (one at a time)", value: 1 },
        { key: "Refrigerator", value: 1 },
        { key: "Water Pump", value: 1 },
        { key: "LED TV", value: 1 },
        { key: "Washing Machine", value: 1 },
      ],
      onClick: () => console.log("Plan 6 clicked"),
    },
  ];

  const commercialPlans = [
    {
      id: 3,
      kw: "20",
      units: "1000-1200",
      onClick: () => console.log("Plan 3 clicked"),
    },
    {
      id: 5,
      kw: "25",
      units: "850-1000",
      onClick: () => console.log("Plan 5 clicked"),
    },
    {
      id: 7,
      kw: "30",
      units: "850-1000",
      onClick: () => console.log("Plan 7 clicked"),
    },
    {
      id: 8,
      kw: "35",
      units: "850-1000",
      onClick: () => console.log("Plan 8 clicked"),
    },
  ];

  return (
    <div id="plans" className="flex flex-col pb-10 relative w-full">
      <div className="flex flex-col relative  w-full">
        <div className="flex flex-col gap-5 md:gap-6 h-full text-[var(--dark-2)] items-start text-start justify-center px-5 md:px-6 pb-28 md:pt-10 z-10 relative">
          <div className="bg-[var(--primary-color)] font-semibold tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
            OUR PLANS
          </div>
          <div className="text-4xl md:text-5xl font-semibold max-w-3xl">
            High-Quality Solar Plans for Every Need
          </div>

          <div className="flex flex-col mt-6 items-center gap-5 place-self-center">
            <div className="text-lg font-bold text-[var(--primary-color)]">
              Select Plan Type
            </div>
            <div
              className={`flex border border-gray-400/40 rounded-lg items-center justify-center`}
            >
              <button
                onClick={() => setSelectedPlanType("domestic")}
                className={` px-6 py-3  transition-all duration-200 tracking-wide uppercase ${
                  selectedPlanType === "domestic"
                    ? "text-[var(--primary-color)] font-semibold"
                    : "text-[var(--text-2)] hover:text-[var(--primary-color-fade)]"
                }`}
              >
                Domestic
              </button>
              <span className="h-5 w-[1px] bg-gray-400/40" />
              <button
                onClick={() => setSelectedPlanType("commercial")}
                className={` px-6 py-3 transition-all duration-200 tracking-wide uppercase ${
                  selectedPlanType !== "domestic"
                    ? "text-[var(--primary-color)] font-semibold"
                    : "text-[var(--text-2)] hover:text-[var(--primary-color-fade)]"
                }`}
              >
                Commercial
              </button>
            </div>
          </div>
        </div>
        <div className="w-full group/plan overflow-hidden self-center max-w-7xl -mb-40 -mt-16 relative z-10">
          <button
            onClick={goPrev}
            className="hidden md:block absolute z-30 left-2 opacity-0 -translate-x-full group-hover/plan:opacity-100 group-hover/plan:translate-x-0 top-1/2 -translate-y-1/2 p-4
                     bg-gray-100 text-[var(--dark-blue-1)] border border-gray-500/40 hover:bg-[var(--dark-blue-1)] 
                     hover: hover:text-gray-100 transition-all duration-500"
          >
            <SlArrowLeft />
          </button>
          <button
            onClick={goNext}
            className="hidden md:block absolute z-30 right-2 opacity-0 translate-x-full group-hover/plan:opacity-100 group-hover/plan:translate-x-0 top-1/2 -translate-y-1/2 p-4
                     bg-gray-100 text-[var(--dark-blue-1)] border border-gray-500/40 
                     hover:bg-[var(--dark-blue-1)] hover: hover:text-gray-100 transition-all duration-500"
          >
            <SlArrowRight />
          </button>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={0}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {(selectedPlanType === "domestic"
              ? domesticPlans
              : commercialPlans
            ).map((plan) => (
              <SwiperSlide
                key={plan.id}
                className="sm:px-16 md:px-4 px-4 !opacity-100 !transition-none"
              >
                <PlanSlide plan={plan} onClick={handlePlanClick} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="bg-white h-40 w-full"></div>
    </div>
  );
}
