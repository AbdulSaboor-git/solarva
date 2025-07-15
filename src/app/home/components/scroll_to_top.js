import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop({
  showScrollToTop,
  onClick,
  scrollPercent,
}) {
  return (
    <div
      onClick={onClick}
      className={`fixed cursor-pointer z-50 bottom-6 right-6 sm:bottom-8 sm:right-8 
    overflow-visible text-white p-[2px] rounded-full
    ${
      showScrollToTop
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-full"
    } transition-all duration-500`}
    >
      <div className="relative w-14 h-14">
        {/* Scroll ring */}
        <svg
          className="absolute top-0 left-0 rotate-[-90deg]"
          width="56"
          height="56"
        >
          <circle
            cx="28"
            cy="28"
            r="25"
            stroke={"var(--text-4)"}
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="28"
            cy="28"
            r="25"
            stroke={"var(--dark-blue-2)"}
            strokeWidth="3.2"
            fill="none"
            strokeDasharray={2 * Math.PI * 25}
            strokeDashoffset={
              2 * Math.PI * 25 - (scrollPercent / 100) * 2 * Math.PI * 25 + 1 ||
              50
            }
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.2s ease-out",
            }}
          />
        </svg>

        {/* Arrow icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--primary-color)] rounded-full text-base p-4">
          <FaArrowUp className="bounce" />
        </div>
      </div>
    </div>
  );
}
