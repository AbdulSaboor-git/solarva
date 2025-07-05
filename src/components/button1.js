"use client";
import React, { useState } from "react";

export default function Button1({
  text,
  className = "",
  bg = "#f3f4f6",
  hoverBg = "#16A34A",
  textColor = "#1d293d",
  hoverTextColor = "#f3f4f6",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`relative overflow-hidden group rounded-md p-4 px-9 tracking-wide font-medium ${className}`}
      style={{ backgroundColor: bg, color: textColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className="relative z-10 transition-colors duration-300"
        style={{ color: isHovered ? hoverTextColor : textColor }}
      >
        {text}
      </p>
      <div
        className="absolute w-full h-full top-0 left-0 transition-all duration-500 scale-y-0 group-hover:scale-y-100 "
        style={{ backgroundColor: hoverBg }}
      />
    </button>
  );
}
