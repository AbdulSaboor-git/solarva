import React from "react";
import { BiChevronRight } from "react-icons/bi";

export default function ServiceTitle({ s, isActive }) {
  return (
    <div
      className={`w-full text-[var(--dark-2)] rounded-lg p-3 group tracking-wide cursor-pointer transition-all duration-300 bg-white hover:bg-[var(--dark-2)] hover:text-white ${
        isActive && "bg-[var(--dark-2)] text-white"
      }`}
    >
      <div className="flex flow-row items-center justify-between ">
        <div className="flex flex-row items-center justify-start gap-8">
          <div className="p-3 rounded-md bg-[var(--primary-color)] text-white text-xl">
            <s.logo />
          </div>
          <h1 className="font-semibold line-clamp-1">{s.title}</h1>
        </div>
        <div className="p-2 text-3xl">
          <BiChevronRight />
        </div>
      </div>
    </div>
  );
}
