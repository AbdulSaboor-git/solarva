"use client";
import React, { forwardRef } from "react";

const NavbarButton = forwardRef(({ className, name, onHover }, ref) => {
  return (
    <div
      ref={ref}
      className={`${className} relative h-full flex justify-center items-center group px-5 cursor-pointer`}
      onMouseEnter={onHover}
    >
      <p className="font-semibold transition-colors duration-300 group-hover:text-[var(--primary-color)]">
        {name}
      </p>
    </div>
  );
});

NavbarButton.displayName = "NavbarButton";

export default NavbarButton;
