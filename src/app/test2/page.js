"use client";

import React, { useEffect, useRef, useState } from "react";

export default function TwoColumnStickyLayout() {
  const stickyRef = useRef(null);
  const rightRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyBox = stickyRef.current;
      const rightBox = rightRef.current;

      if (!stickyBox || !rightBox) return;

      const stickyBottom = stickyBox.getBoundingClientRect().bottom;
      const rightBottom = rightBox.getBoundingClientRect().bottom;

      if (rightBottom <= stickyBottom + 20) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="h-[40rem]"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-[300px_1fr] gap-6 px-4 py-8">
        {/* Left Column */}
        <div className="relative">
          <div
            ref={stickyRef}
            className={`${
              isFixed ? "sticky top-6" : "relative"
            } transition-all duration-200`}
          >
            <div className="p-4 bg-white shadow rounded-xl">
              <h2 className="text-xl font-bold mb-2">Left Column</h2>
              <p>Small content.</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div ref={rightRef} className="bg-gray-100 p-6 rounded-xl space-y-6">
          <h2 className="text-2xl font-bold mb-4">Right Column</h2>
          {[...Array(40)].map((_, i) => (
            <p key={i}>
              This is line {i + 1}. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          ))}
        </div>
      </div>
      <div className="h-[40rem]"></div>
    </div>
  );
}
