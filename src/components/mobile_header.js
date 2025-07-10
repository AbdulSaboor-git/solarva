import React from "react";
import { BiMenu } from "react-icons/bi";

export default function MobileHeader() {
  return (
    <div className="flex flex-row items-center justify-between gap-6 p-4">
      <img src="logo2.png" alt="logo" className="aspect-auto h-12" />
      <BiMenu size={30} />
    </div>
  );
}
