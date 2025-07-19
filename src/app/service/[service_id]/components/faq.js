import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { MdAdd } from "react-icons/md";

export default function FAQ({ item }) {
  const [expanded, setExpanded] = useState(false);

  function togleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <div className="flex flex-col  text-lg">
      <div
        onClick={togleExpanded}
        className="flex font-semibold  hover:bg-[var(--primary-color)] hover:text-white 
      cursor-pointer items-center justify-between p-4 px-8 w-full border border-gray-400/20 rounded-xl 
      bg-gray-100 transition-all duration-300"
      >
        <p>{item.question}</p>
        <div className="bg-white/30 p-2 rounded-full">
          {!expanded ? <MdAdd /> : <BiMinus />}
        </div>
      </div>
      <div
        className={`${
          expanded ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-500`}
      >
        <div className="p-4 max-h-fit px-8 pr-14 text-[var(--text-1)]">
          {item.answer}
        </div>
      </div>
    </div>
  );
}
