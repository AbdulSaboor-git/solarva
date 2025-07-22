"use client";
import React, { forwardRef } from "react";

const NavbarButton = forwardRef(
  ({ onClick, className, name, onHover, activeSection }, ref) => {
    const isActive = activeSection === name.toLowerCase().replace(" ", "-");

    return (
      <div
        ref={ref}
        className={`${className} ${isActive && "text-[var(--primary-color)]"} 
          relative h-full flex justify-center items-center group px-5 md:py-6 cursor-pointer`}
        onMouseEnter={onHover}
        onClick={onClick}
      >
        <p className="font-semibold line-clamp-1 transition-colors duration-300 group-hover:text-[var(--primary-color)]">
          {name}
        </p>
      </div>
    );
  }
);

NavbarButton.displayName = "NavbarButton";

export default NavbarButton;
