import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { MdAdd } from "react-icons/md";

export default function FAQ({ item }) {
  const [expanded, setExpanded] = useState(false);

  function togleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <div className="flex flex-col text-lg">
      <div
        onClick={togleExpanded}
        className={`flex font-semibold sm:hover:bg-[var(--primary-color)] sm:hover:text-white 
      cursor-pointer items-center gap-3 justify-between p-4 px-5 sm:px-8 w-full border border-gray-400/20 rounded-xl 
       transition-all duration-300 ${
         expanded
           ? "bg-[var(--primary-color)] text-white"
           : "bg-gray-100 text-[var(--dark-2)]"
       }`}
      >
        <p>{item.question}</p>
        <div
          className={`relative bg-white/30 p-2 rounded-full  transition-all duration-300`}
        >
          <BiMinus />
          <BiMinus
            className={`absolute place-self-center top-1/2 -translate-y-1/2 ${
              expanded ? "rotate-180" : "rotate-90"
            } transition-all duration-300`}
          />
        </div>
      </div>
      <div
        className={`${
          expanded ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-500`}
      >
        <div className="p-4 max-h-fit px-5 sm:px-8 sm:pr-14 text-[var(--text-1)]">
          {item.answer}
        </div>
      </div>
    </div>
  );
}
