"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

export default function SubPagesTopSection({ mainTitle, title }) {
  const [offsetX, setOffsetX] = useState(0);
  const router = useRouter();

  const gotoHome = () => {
    router.push("/home");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const limitedOffset = Math.min(scrollY, 400);
      setOffsetX(limitedOffset / 7);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full pt-36 sm:pt-48 bg-cyan-100">
      <div className="w-full px-5 flex items-center overflow-hidden justify-start relative h-[15rem] sm:h-[27rem]">
        <div className="absolute h-full -right-32 -bottom-8 sm:right-0 sm:-bottom-8 overflow-hidden">
          <img
            src="/img10.webp"
            alt="img10"
            className="w-full h-full aspect-auto object-cover transition-all duration-[1s] ease-linear "
            style={{
              transform: `translateX(${offsetX}px)`,
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col gap-1 sm:gap-5 h-full sm:mt-52 max-w-[300px] sm:max-w-max">
          <h1 className="text-[40px] sm:text-6xl font-bold text-[var(--dark-3)]">
            {mainTitle}
          </h1>
          <div className="flex flow-row gap-5 sm:text-xl text-base items-center">
            <span
              className="text-[var(--text-1)] cursor-pointer"
              onClick={gotoHome}
            >
              HOME
            </span>
            <BsChevronRight className="text-base" />
            <span className="text-[var(--primary-color)] uppercase">
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
