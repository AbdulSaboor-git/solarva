"use client";
import React from "react";

export default function ProductCard({ className, onClick, prod }) {
  return (
    <div
      onClick={onClick}
      className={` ${className} group cursor-pointer flex flex-col rounded-2xl overflow-hidden  transition-all duration-300 `}
    >
      <div className="relative">
        <img
          src={prod?.img}
          alt={prod?.id}
          className="aspect-[5/4] object-cover w-full"
        />
      </div>
      <div className="flex flex-col md:gap-1 p-2 px-3 md:p-4">
        <div className="uppercase font-medium text-sm text-gray-700 line-clamp-1">
          {prod?.title}
        </div>
        <div className="text-xs text-gray-500">
          Rs.{" "}
          <span className="text-base font-semibold text-[var(--primary-color)]">
            {prod?.price}
          </span>
        </div>
      </div>
    </div>
  );
}
