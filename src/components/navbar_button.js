"use client";
import React, { useState } from "react";

export default function NavbarButton({ name }) {
  const [animationState, setAnimationState] = useState("idle"); // "idle" | "enter" | "leave"

  const handleMouseEnter = () => {
    setAnimationState("enter");
  };

  const handleMouseLeave = () => {
    setAnimationState("leave");

    // Reset to idle after animation completes
    setTimeout(() => {
      setAnimationState("idle");
    }, 500); // same as transition duration
  };

  let transformClass = "";
  if (animationState === "enter") {
    transformClass = "translate-x-0";
  } else if (animationState === "leave") {
    transformClass = "translate-x-full";
  } else {
    transformClass = "-translate-x-full opacity-0";
  }

  return (
    <div
      className="relative py-8 px-5 cursor-pointer "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p
        className={`font-semibold transition-colors duration-500 ${
          animationState === "enter" ? "text-green-600" : "text-white"
        }`}
      >
        {name}
      </p>
      <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
        <div
          className={`h-full bg-green-600 w-full transition-transform duration-500 ${transformClass}`}
        />
      </div>
      <div
        className={`absolute bg-green-600 h-0.5 w-full left-0 -bottom-1 blur-md transition-transform duration-500 ${transformClass}`}
      />
    </div>
  );
}
