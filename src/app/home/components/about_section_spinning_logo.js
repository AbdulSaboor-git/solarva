import React from "react";

export default function AboutSection_SpinningLogo() {
  return (
    <div className="absolute z-20 aspect-square rounded-full bg-white mt-32 ml-16 flex items-center justify-center">
      <svg
        viewBox="0 0 300 300"
        width={240}
        height={240}
        className="text-green-600 p-2 animate-[spin_24s_linear_infinite]"
      >
        {/* Circular Path */}
        <defs>
          <path
            id="circlePath"
            d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
          />
        </defs>

        {/* Circular Text */}
        <text fill="currentColor" fontSize="18">
          <textPath
            href="#circlePath"
            startOffset="10"
            textLength="745"
            lengthAdjust="spacing"
          >
            {"  ·  "}
            SOLARVA SOLAR ENERGY SERVICES · GREEN ENERGY · SAVE THE PLANET
          </textPath>
        </text>
      </svg>
      <img src="icon_solarva.png" alt="icon" className="absolute" />
    </div>
  );
}
