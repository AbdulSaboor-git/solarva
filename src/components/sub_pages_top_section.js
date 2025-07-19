import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

export default function SubPagesTopSection({ title }) {
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
    <div className="w-full pt-48 bg-blue-100">
      <div className="w-full px-5 flex items-center overflow-hidden justify-start relative h-[25rem] sm:h-[27rem]">
        <div className="absolute right-0 -bottom-4 overflow-hidden">
          <img
            src="/img10.webp"
            alt="img10"
            className="w-full aspect-auto object-cover transition-all duration-[1s] ease-linear"
            style={{
              transform: `translateX(${offsetX}px)`,
            }}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl sm:text-6xl font-bold text-[var(--dark-3)]">
            Our Services
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
          <div></div>
        </div>
      </div>
    </div>
  );
}
