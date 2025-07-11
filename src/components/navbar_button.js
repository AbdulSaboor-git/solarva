"use client";
import React, { forwardRef } from "react";

const NavbarButton = forwardRef(({ name, onHover }, ref) => {
  return (
    <div
      ref={ref}
      className="relative py-8 group px-5 cursor-pointer"
      onMouseEnter={onHover}
    >
      <p className="font-semibold transition-colors duration-300 group-hover:text-green-600">
        {name}
      </p>
    </div>
  );
});

NavbarButton.displayName = "NavbarButton";

export default NavbarButton;
