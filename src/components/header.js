import React from "react";
import {
  RiHeadphoneFill,
  RiSearchLine,
  RiShoppingBag4Line,
} from "react-icons/ri";
import NavbarButton from "./navbar_button";

export default function Header({ className }) {
  const CartItems = [1, 4, 2];
  const buttons = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Team",
    },
    {
      name: "Services",
    },
    {
      name: "Case Studies",
    },
    {
      name: "Blog",
    },
  ];
  return (
    <div
      className={`${className} grid grid-cols-[0.7fr_3fr_0.7fr] 
    items-center gap-6 bg-gradient-to-r from-blue-950 to-slate-800 w-full px-8 rounded-lg`}
    >
      <img src="logo.png" alt="logo" className="h-9 cursor-pointer" />
      <div className="flex flex-row gap-1.5 items-center px-4 justify-center">
        {buttons.map((btn, i) => (
          <NavbarButton key={i} name={btn.name} />
        ))}
      </div>
      <div className="flex flex-row items-center ">
        <div className="h-full p-6 border-l border-gray-500/40 group  cursor-pointer">
          <div className="border border-gray-500/40 p-2 rounded-full">
            <RiHeadphoneFill size={24} className="group-hover-shake" />
          </div>
        </div>
        <div className="h-full p-4 px-6 border-l hover:text-green-600 transition-all duration-500 border-gray-500/40 cursor-pointer">
          <RiSearchLine size={24} />
        </div>
        <div className="h-full p-2 pl-6 relative border-l group border-gray-500/40 cursor-pointer">
          <RiShoppingBag4Line size={22} className="group-hover-shake" />
          <div className="absolute right-0 bottom-0 bg-green-600 p-0.5 text-center w-4 h-4 rounded-full text-[8px]">
            {CartItems.length}
          </div>
        </div>
      </div>
    </div>
  );
}
