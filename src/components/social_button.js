import React from "react";

export default function SocialButton({ Icon, Name, theme }) {
  return (
    <div
      className={` ${
        theme == "light"
          ? "bg-[var(--dark-blue-2)] border-white/40"
          : "bg-white/10 border-white/10"
      } text-white p-2 relative rounded-full border group cursor-pointer`}
    >
      <div className="absolute w-full h-full rounded-full z-0 top-0 left-0 bg-green-600 scale-0 group-hover:scale-100 transition-all duration-500" />
      <Icon className="group-hover:scale-110 group-hover:text-white z-10 transition-all duration-500" />
      <div className="absolute w-fit -bottom-7 right-0 bg-green-600/50 rounded-full p-1 px-3 object-center text-xs hidden group-hover:block">
        {Name}
      </div>
    </div>
  );
}
