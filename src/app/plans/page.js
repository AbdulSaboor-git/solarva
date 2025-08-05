"use client";
import React, { useState } from "react";
import SubPagesTopSection from "@/components/sub_pages_top_section";
import ScrollToTop from "../home/components/scroll_to_top";
import Header from "@/components/header";
import Plan from "./components/plan";
import Footer from "@/components/footer";

export default function PlansPage() {
  const [selectedPlanType, setSelectedPlanType] = useState("domestic");

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
    <div className="w-full flex flex-col items-center bg-gray-50">
      <ScrollToTop />
      <Header theme={"light"} />
      <div className="w-full flex flex-col gap-20 md:gap-32 items-center justify-start">
        <SubPagesTopSection mainTitle={"Solar Plans"} title={"Plans"} />
        <div className="flex w-full flex-col gap-7 md:gap-8 h-full text-[var(--dark-2)] items-center justify-center px-5 z-10 relative">
          <div className="w-full flex flex-col items-start gap-5 md:gap-6 max-w-4xl place-self-start">
            <div className="text-4xl md:text-5xl font-semibold">
              High-Quality Solar Plans for Every Need
            </div>
            <p className="text-lg text-[var(--text-1)]">
              We provide affordable solar plans for both domestic and
              commmercial needs. Using the latest technology, our aim is to
              provide you with the best and most efficient solar solution.
            </p>
          </div>
          <div
            id="plan_select"
            className="flex flex-col mt-6 items-center gap-5"
          >
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl w-full">
            {(selectedPlanType === "domestic"
              ? domesticPlans
              : commercialPlans
            ).map((plan) => (
              <Plan key={plan.id} plan={plan} />
            ))}
          </div>
          <div>
            See{" "}
            <span
              className="text-[var(--primary-color)] font-semibold cursor-pointer hover:underline"
              onClick={() => {
                const el = document.getElementById("plan_select");
                if (el) {
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset - 120;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
                setSelectedPlanType(
                  selectedPlanType === "domestic" ? "commercial" : "domestic"
                );
              }}
            >
              {selectedPlanType === "domestic" ? "Commercial" : "Domestic"}{" "}
              Plans
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
